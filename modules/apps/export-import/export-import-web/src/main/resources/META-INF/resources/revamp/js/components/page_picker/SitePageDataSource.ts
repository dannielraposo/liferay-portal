/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {
	TreePickerDataSource,
	TreePickerItem,
	TreePickerPage,
	TreePickerSelectionEntry,
} from '@liferay/layout-js-components-web';
import {fetch} from 'frontend-js-web';

import getLocalizedValue from '../../utils/getLocalizedValue';
import {PagePickerSelection, SitePage} from './types';

const FIELDS = [
	'externalReferenceCode',
	'name_i18n',
	'parentSitePageExternalReferenceCode',
	'type',
].join(',');

export const ROOT_ITEM_ID = 'liferay-page-picker-root';

function chunk<T>(values: T[], size: number): T[][] {
	const chunks: T[][] = [];

	for (let start = 0; start < values.length; start += size) {
		chunks.push(values.slice(start, start + size));
	}

	return chunks;
}

function getSitePageIcon(sitePage: SitePage): string {
	if (sitePage.type === 'ContentPage') {
		return 'page';
	}

	if (
		sitePage.type === 'LinkToPagePage' ||
		sitePage.type === 'LinkToURLPage'
	) {
		return 'link';
	}

	return 'page-template';
}

function getUnknownParentExternalReferenceCodes(
	sitePages: SitePage[],
	knownSitePagesByExternalReferenceCode: {
		has: (externalReferenceCode: string) => boolean;
	}
): string[] {
	const unknownParentExternalReferenceCodes = new Set<string>();

	sitePages.forEach((sitePage) => {
		const parentExternalReferenceCode =
			sitePage.parentSitePageExternalReferenceCode;

		if (
			parentExternalReferenceCode &&
			!knownSitePagesByExternalReferenceCode.has(
				parentExternalReferenceCode
			)
		) {
			unknownParentExternalReferenceCodes.add(
				parentExternalReferenceCode
			);
		}
	});

	return Array.from(unknownParentExternalReferenceCodes);
}

function toParentFilterString(
	parentExternalReferenceCode: string | null
): string {
	return `parentSitePageExternalReferenceCode eq ${
		parentExternalReferenceCode === null
			? 'null'
			: toQuotedValue(parentExternalReferenceCode)
	}`;
}

function toQuotedValue(value: string): string {
	return `'${value.replace(/'/g, "''")}'`;
}

function toStubEntries(
	externalReferenceCodes: string[] | undefined,
	excluded: boolean,
	includeDescendants: boolean
): Array<TreePickerSelectionEntry<SitePage | null>> {
	return (externalReferenceCodes ?? []).map((externalReferenceCode) => ({
		excluded,
		includeDescendants,
		item: {
			hasChildren: includeDescendants,
			id: externalReferenceCode,
			label: externalReferenceCode,
			parentId: ROOT_ITEM_ID,
			payload: {externalReferenceCode, name_i18n: {}},
		},
	}));
}

export default class SitePageDataSource
	implements TreePickerDataSource<SitePage | null>
{
	private readonly _knownSitePagesByExternalReferenceCode = new Map<
		string,
		SitePage
	>();
	private readonly _pageSize: number;
	private readonly _privateLayout: boolean;
	private readonly _url: string;

	constructor({
		pageSize,
		privateLayout,
		siteExternalReferenceCode,
	}: {
		pageSize: number;
		privateLayout: boolean;
		siteExternalReferenceCode: string;
	}) {
		this._pageSize = pageSize;
		this._privateLayout = privateLayout;
		this._url = `/o/headless-admin-site/v1.0/sites/${encodeURIComponent(
			siteExternalReferenceCode
		)}/site-pages`;
	}

	async getChildren(
		parentTreePickerItem: TreePickerItem<SitePage | null> | null,
		page: number
	): Promise<TreePickerPage<SitePage | null>> {
		if (!parentTreePickerItem) {
			return {items: [this.getRootItem()], totalCount: 1};
		}

		const {sitePages, totalCount} = await this._getSitePages(
			page,
			this._pageSize,
			{
				filter: toParentFilterString(
					parentTreePickerItem.id === ROOT_ITEM_ID
						? null
						: parentTreePickerItem.id
				),
			}
		);

		const parentExternalReferenceCodes =
			await this._getParentExternalReferenceCodes(sitePages);

		return {
			items: sitePages.map((sitePage) => ({
				...this._toItem(sitePage),
				hasChildren: parentExternalReferenceCodes.has(
					sitePage.externalReferenceCode.toLowerCase()
				),
			})),
			totalCount,
		};
	}

	getRootItem(): TreePickerItem<SitePage | null> {
		return {
			alwaysIncludeDescendants: true,
			hasChildren: true,
			icon: 'home',
			id: ROOT_ITEM_ID,
			label: this._privateLayout
				? Liferay.Language.get('private-pages')
				: Liferay.Language.get('public-pages'),
			parentId: null,
			payload: null,
		};
	}

	getSubtreeCount(
		treePickerItem: TreePickerItem<SitePage | null>
	): Promise<number> {
		if (treePickerItem.id === ROOT_ITEM_ID) {
			return this._getCount('');
		}

		return this._getCount(
			`ancestorSitePageExternalReferenceCode eq ${toQuotedValue(treePickerItem.id)}`
		);
	}

	toEntries(
		selection: PagePickerSelection | null | undefined
	): Array<TreePickerSelectionEntry<SitePage | null>> {
		if (!selection) {
			return [];
		}

		return [
			...(selection.all
				? [
						{
							excluded: false,
							includeDescendants: true,
							item: this.getRootItem(),
						},
					]
				: []),
			...toStubEntries(selection.items, false, false),
			...toStubEntries(selection.subtrees, false, true),
			...toStubEntries(selection.excludedItems, true, false),
			...toStubEntries(selection.excludedSubtrees, true, true),
		];
	}

	toSelection(
		entries: Array<TreePickerSelectionEntry<SitePage | null>>
	): PagePickerSelection | null {
		const all = entries.some(
			(entry) => entry.item.id === ROOT_ITEM_ID && !entry.excluded
		);

		const excludedItems: string[] = [];
		const excludedSubtrees: string[] = [];
		const items: string[] = [];
		const subtrees: string[] = [];

		entries.forEach((entry) => {
			if (!entry.item.payload) {
				return;
			}

			if (entry.excluded) {
				if (entry.includeDescendants) {
					excludedSubtrees.push(entry.item.id);
				}
				else {
					excludedItems.push(entry.item.id);
				}
			}
			else if (entry.includeDescendants) {
				subtrees.push(entry.item.id);
			}
			else {
				items.push(entry.item.id);
			}
		});

		if (!all && !items.length && !subtrees.length) {
			return null;
		}

		return {
			...(all && {all: true}),
			...(excludedItems.length && {
				excludedItems,
			}),
			...(excludedSubtrees.length && {
				excludedSubtrees,
			}),
			...(items.length && {
				items,
			}),
			...(subtrees.length && {
				subtrees,
			}),
			privateLayout: this._privateLayout,
		};
	}

	async resolveItems(
		treePickerItems: Array<TreePickerItem<SitePage | null>>
	): Promise<Array<TreePickerItem<SitePage | null>>> {
		const externalReferenceCodes = Array.from(
			new Set(
				treePickerItems
					.filter((item) => item.id !== ROOT_ITEM_ID)
					.map((item) => item.id)
			)
		);

		const sitePages = await this._getSitePagesByFilterValues(
			'externalReferenceCode',
			externalReferenceCodes
		);

		const treeExternalReferenceCodes = externalReferenceCodes.filter(
			(externalReferenceCode) =>
				treePickerItems.some(
					(item) =>
						item.id === externalReferenceCode && item.hasChildren
				)
		);

		const ancestorTreeExternalReferenceCodesById = new Map<
			string,
			Set<string>
		>();

		await Promise.all(
			treeExternalReferenceCodes.map(
				async (treeExternalReferenceCode) => {
					const descendantSitePages =
						await this._getSitePagesByFilterValues(
							'externalReferenceCode',
							externalReferenceCodes,
							`ancestorSitePageExternalReferenceCode eq ${toQuotedValue(
								treeExternalReferenceCode
							)}`
						);

					descendantSitePages.forEach((sitePage) => {
						let ancestorTreeExternalReferenceCodes =
							ancestorTreeExternalReferenceCodesById.get(
								sitePage.externalReferenceCode
							);

						if (!ancestorTreeExternalReferenceCodes) {
							ancestorTreeExternalReferenceCodes = new Set();

							ancestorTreeExternalReferenceCodesById.set(
								sitePage.externalReferenceCode,
								ancestorTreeExternalReferenceCodes
							);
						}

						ancestorTreeExternalReferenceCodes.add(
							treeExternalReferenceCode
						);
					});
				}
			)
		);

		const getNearestTreeExternalReferenceCode = (
			externalReferenceCode: string
		) => {
			const ancestorTreeExternalReferenceCodes = Array.from(
				ancestorTreeExternalReferenceCodesById.get(
					externalReferenceCode
				) ?? []
			);

			return ancestorTreeExternalReferenceCodes.find(
				(candidate) =>
					ancestorTreeExternalReferenceCodesById.get(candidate)
						?.size ===
					ancestorTreeExternalReferenceCodes.length - 1
			);
		};

		return sitePages.map((sitePage) => ({
			...this._toItem(sitePage),
			parentId:
				getNearestTreeExternalReferenceCode(
					sitePage.externalReferenceCode
				) ??
				sitePage.parentSitePageExternalReferenceCode ??
				ROOT_ITEM_ID,
		}));
	}

	async search(
		query: string,
		page: number
	): Promise<TreePickerPage<SitePage | null>> {
		const {sitePages, totalCount} = await this._getSitePages(
			page,
			this._pageSize,
			{search: query}
		);

		await this._loadAncestorSitePages(sitePages);

		return {
			ancestors: this._getAncestorItems(sitePages),
			items: sitePages.map((sitePage) => ({
				...this._toItem(sitePage),
				path: this._getPath(sitePage),
			})),
			totalCount,
		};
	}

	private async _getAllFilteredSitePages(
		filter: string
	): Promise<SitePage[]> {
		const allSitePages: SitePage[] = [];

		let page = 1;

		while (true) {
			const {sitePages, totalCount} = await this._getSitePages(
				page,
				500,
				{filter}
			);

			allSitePages.push(...sitePages);

			if (!sitePages.length || allSitePages.length >= totalCount) {
				return allSitePages;
			}

			page++;
		}
	}

	private _getAncestorItems(
		sitePages: SitePage[]
	): Array<TreePickerItem<SitePage | null>> {
		const ancestorItemsByExternalReferenceCode = new Map<
			string,
			TreePickerItem<SitePage | null>
		>();

		sitePages.forEach((sitePage) => {
			let parentExternalReferenceCode =
				sitePage.parentSitePageExternalReferenceCode;

			while (
				parentExternalReferenceCode &&
				!ancestorItemsByExternalReferenceCode.has(
					parentExternalReferenceCode
				)
			) {
				const parentSitePage =
					this._knownSitePagesByExternalReferenceCode.get(
						parentExternalReferenceCode
					);

				if (!parentSitePage) {
					break;
				}

				ancestorItemsByExternalReferenceCode.set(
					parentExternalReferenceCode,
					this._toItem(parentSitePage)
				);

				parentExternalReferenceCode =
					parentSitePage.parentSitePageExternalReferenceCode;
			}
		});

		return Array.from(ancestorItemsByExternalReferenceCode.values());
	}

	private async _getCount(filter: string): Promise<number> {
		const {totalCount} = await this._getSitePages(1, 1, {
			fields: 'externalReferenceCode',
			...(filter && {filter}),
		});

		return totalCount;
	}

	private async _getParentExternalReferenceCodes(
		sitePages: SitePage[]
	): Promise<Set<string>> {
		const parentExternalReferenceCodes = new Set<string>();

		const externalReferenceCodes = sitePages.map(
			(sitePage) => sitePage.externalReferenceCode
		);

		await Promise.all(
			chunk(externalReferenceCodes, 10).map(async (chunk) => {
				const {facets} = await this._getSitePages(1, 1, {
					aggregationTerms: 'parentSitePageExternalReferenceCode',
					fields: 'externalReferenceCode',
					filter: `parentSitePageExternalReferenceCode in (${chunk
						.map(toQuotedValue)
						.join(',')})`,
				});

				facets.forEach((facet) =>
					facet.facetValues.forEach(({term}) =>
						parentExternalReferenceCodes.add(term)
					)
				);
			})
		);

		return parentExternalReferenceCodes;
	}

	private _getPath(sitePage: SitePage): string[] {
		const path: string[] = [];

		let parentExternalReferenceCode =
			sitePage.parentSitePageExternalReferenceCode;

		while (parentExternalReferenceCode) {
			const parentSitePage =
				this._knownSitePagesByExternalReferenceCode.get(
					parentExternalReferenceCode
				);

			if (!parentSitePage) {
				break;
			}

			path.unshift(getLocalizedValue(parentSitePage.name_i18n));

			parentExternalReferenceCode =
				parentSitePage.parentSitePageExternalReferenceCode;
		}

		return path;
	}

	private async _getSitePages(
		page: number,
		pageSize: number,
		parameters: Record<string, string>
	): Promise<{
		facets: Array<{facetValues: Array<{term: string}>}>;
		sitePages: SitePage[];
		totalCount: number;
	}> {
		const requestURL = new URL(this._url, window.location.origin);

		requestURL.searchParams.set('fields', FIELDS);
		requestURL.searchParams.set('page', String(page));
		requestURL.searchParams.set('pageSize', String(pageSize));
		requestURL.searchParams.set(
			'privateLayout',
			String(this._privateLayout)
		);

		Object.entries(parameters).forEach(([name, value]) =>
			requestURL.searchParams.set(name, value)
		);

		const response = await fetch(requestURL.toString(), {
			headers: {Accept: 'application/json'},
		});

		if (!response.ok) {
			throw new Error(
				`Request to ${requestURL.pathname} failed with status ${response.status}`
			);
		}

		const {
			facets = [],
			items = [],
			totalCount = 0,
		} = (await response.json()) as {
			facets?: Array<{facetValues: Array<{term: string}>}>;
			items?: SitePage[];
			totalCount?: number;
		};

		items.forEach((sitePage) =>
			this._knownSitePagesByExternalReferenceCode.set(
				sitePage.externalReferenceCode,
				sitePage
			)
		);

		return {facets, sitePages: items, totalCount};
	}

	private async _getSitePagesByFilterValues(
		fieldName: string,
		values: string[],
		filter?: string
	): Promise<SitePage[]> {
		const sitePages: SitePage[] = [];

		for (const chunkValues of chunk(values, 25)) {
			const chunkFilter = `${fieldName} in (${chunkValues
				.map(toQuotedValue)
				.join(',')})`;

			sitePages.push(
				...(await this._getAllFilteredSitePages(
					filter ? `${chunkFilter} and ${filter}` : chunkFilter
				))
			);
		}

		return sitePages;
	}

	private async _loadAncestorSitePages(sitePages: SitePage[]): Promise<void> {
		let unknownParentExternalReferenceCodes =
			getUnknownParentExternalReferenceCodes(
				sitePages,
				this._knownSitePagesByExternalReferenceCode
			);

		while (unknownParentExternalReferenceCodes.length) {
			const ancestorSitePages = await this._getSitePagesByFilterValues(
				'externalReferenceCode',
				unknownParentExternalReferenceCodes
			);

			if (!ancestorSitePages.length) {
				return;
			}

			unknownParentExternalReferenceCodes =
				getUnknownParentExternalReferenceCodes(
					ancestorSitePages,
					this._knownSitePagesByExternalReferenceCode
				);
		}
	}

	private _toItem(sitePage: SitePage): TreePickerItem<SitePage | null> {
		return {
			hasChildren: true,
			icon: getSitePageIcon(sitePage),
			id: sitePage.externalReferenceCode,
			label: getLocalizedValue(sitePage.name_i18n),
			parentId:
				sitePage.parentSitePageExternalReferenceCode ?? ROOT_ITEM_ID,
			payload: sitePage,
		};
	}
}
