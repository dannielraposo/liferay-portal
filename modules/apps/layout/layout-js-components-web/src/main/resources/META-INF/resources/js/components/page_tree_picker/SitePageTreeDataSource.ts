/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {fetch} from 'frontend-js-web';

import {
	PageTreePickerDataSource,
	PageTreePickerItem,
	PageTreePickerPage,
	PageTreePickerSelectionEntry,
} from './types';

export interface SitePageTreeNode {
	ancestorSitePageTreeNodes?: SitePageTreeNode[];
	descendantSitePagesCount?: number;
	externalReferenceCode: string;
	hasChildSitePages?: boolean;
	name?: string;
	parentSitePageExternalReferenceCode?: string | null;
	type?: string;
}

export interface SitePageTreeSelection {
	all?: boolean;
	excludedItems?: string[];
	excludedSubtrees?: string[];
	items?: string[];
	privateLayout: boolean;
	subtrees?: string[];
}

const NESTED_FIELDS = 'ancestorSitePageTreeNodes';

export const ROOT_ITEM_ID = 'liferay-page-tree-picker-root';

function getIcon(sitePageTreeNode: SitePageTreeNode): string {
	if (sitePageTreeNode.type === 'ContentPage') {
		return 'page';
	}

	if (
		sitePageTreeNode.type === 'LinkToPagePage' ||
		sitePageTreeNode.type === 'LinkToURLPage'
	) {
		return 'link';
	}

	return 'page-template';
}

function toStubEntries(
	externalReferenceCodes: string[] | undefined,
	excluded: boolean,
	includeDescendants: boolean
): Array<PageTreePickerSelectionEntry<SitePageTreeNode | null>> {
	return (externalReferenceCodes ?? []).map((externalReferenceCode) => ({
		excluded,
		includeDescendants,
		item: {
			hasChildren: includeDescendants,
			id: externalReferenceCode,
			label: externalReferenceCode,
			page: {externalReferenceCode},
			parentId: ROOT_ITEM_ID,
		},
	}));
}

export default class SitePageTreeDataSource
	implements PageTreePickerDataSource<SitePageTreeNode | null>
{
	private readonly _knownSitePageTreeNodesByExternalReferenceCode = new Map<
		string,
		SitePageTreeNode
	>();
	private readonly _pageSize: number;
	private readonly _privateLayout: boolean;
	private _sitePagesCountPromise: Promise<number> | null = null;
	private readonly _siteURL: string;

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
		this._siteURL = `/o/headless-admin-site/v1.0/sites/${encodeURIComponent(
			siteExternalReferenceCode
		)}`;
	}

	async getChildren(
		parentPageTreePickerItem: PageTreePickerItem<SitePageTreeNode | null> | null,
		page: number
	): Promise<PageTreePickerPage<SitePageTreeNode | null>> {
		if (!parentPageTreePickerItem) {
			return {items: [this.getRootItem()], totalCount: 1};
		}

		const requestURL = this._getURL('site-page-tree-nodes', {
			page: String(page),
			pageSize: String(this._pageSize),
		});

		if (parentPageTreePickerItem.id !== ROOT_ITEM_ID) {
			requestURL.searchParams.set(
				'parentSitePageExternalReferenceCode',
				parentPageTreePickerItem.id
			);
		}

		const {items, totalCount} = await this._fetchPage(requestURL);

		return {
			items: items.map((sitePageTreeNode) =>
				this._toItem(sitePageTreeNode)
			),
			totalCount,
		};
	}

	getRootItem(): PageTreePickerItem<SitePageTreeNode | null> {
		return {
			alwaysIncludeDescendants: true,
			hasChildren: true,
			icon: 'home',
			id: ROOT_ITEM_ID,
			label: this._privateLayout
				? Liferay.Language.get('private-pages')
				: Liferay.Language.get('public-pages'),
			page: null,
			parentId: null,
		};
	}

	async getSubtreeCount(
		pageTreePickerItem: PageTreePickerItem<SitePageTreeNode | null>
	): Promise<number> {
		if (pageTreePickerItem.id === ROOT_ITEM_ID) {
			return this._getSitePagesCount();
		}

		const descendantSitePagesCount =
			pageTreePickerItem.page?.descendantSitePagesCount ??
			this._knownSitePageTreeNodesByExternalReferenceCode.get(
				pageTreePickerItem.id
			)?.descendantSitePagesCount;

		if (descendantSitePagesCount !== undefined) {
			return descendantSitePagesCount;
		}

		const sitePageTreeNode = await this._fetchSitePageTreeNode(
			pageTreePickerItem.id
		);

		return sitePageTreeNode?.descendantSitePagesCount ?? 0;
	}

	toEntries(
		selection: SitePageTreeSelection | null | undefined
	): Array<PageTreePickerSelectionEntry<SitePageTreeNode | null>> {
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
		entries: Array<PageTreePickerSelectionEntry<SitePageTreeNode | null>>
	): SitePageTreeSelection | null {
		const all = entries.some(
			(entry) => entry.item.id === ROOT_ITEM_ID && !entry.excluded
		);

		const excludedItems: string[] = [];
		const excludedSubtrees: string[] = [];
		const items: string[] = [];
		const subtrees: string[] = [];

		entries.forEach((entry) => {
			if (!entry.item.page) {
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
			...(excludedItems.length && {excludedItems}),
			...(excludedSubtrees.length && {excludedSubtrees}),
			...(items.length && {items}),
			...(subtrees.length && {subtrees}),
			privateLayout: this._privateLayout,
		};
	}

	async resolveItems(
		pageTreePickerItems: Array<PageTreePickerItem<SitePageTreeNode | null>>
	): Promise<Array<PageTreePickerItem<SitePageTreeNode | null>>> {
		const sitePageTreeNodes = (
			await Promise.all(
				Array.from(
					new Set(
						pageTreePickerItems
							.filter((item) => item.id !== ROOT_ITEM_ID)
							.map((item) => item.id)
					)
				).map((externalReferenceCode) =>
					this._fetchSitePageTreeNode(externalReferenceCode)
				)
			)
		).filter(
			(sitePageTreeNode): sitePageTreeNode is SitePageTreeNode =>
				sitePageTreeNode !== null
		);

		return [
			...this._toAncestorItems(sitePageTreeNodes),
			...sitePageTreeNodes.map((sitePageTreeNode) =>
				this._toItem(sitePageTreeNode)
			),
		];
	}

	async search(
		query: string,
		page: number
	): Promise<PageTreePickerPage<SitePageTreeNode | null>> {
		const {items, totalCount} = await this._fetchPage(
			this._getURL('site-page-tree-nodes', {
				nestedFields: NESTED_FIELDS,
				page: String(page),
				pageSize: String(this._pageSize),
				search: query,
			})
		);

		return {
			ancestors: this._toAncestorItems(items),
			items: items.map((sitePageTreeNode) => ({
				...this._toItem(sitePageTreeNode),
				path: (sitePageTreeNode.ancestorSitePageTreeNodes ?? []).map(
					(ancestorSitePageTreeNode) =>
						ancestorSitePageTreeNode.name ?? ''
				),
			})),
			totalCount,
		};
	}

	private async _fetchPage(
		requestURL: URL
	): Promise<{items: SitePageTreeNode[]; totalCount: number}> {
		const response = await fetch(requestURL.toString(), {
			headers: {Accept: 'application/json'},
		});

		if (!response.ok) {
			throw new Error(
				`Request to ${requestURL.pathname} failed with status ${response.status}`
			);
		}

		const {items = [], totalCount = 0} = (await response.json()) as {
			items?: SitePageTreeNode[];
			totalCount?: number;
		};

		items.forEach((sitePageTreeNode) =>
			this._registerSitePageTreeNode(sitePageTreeNode)
		);

		return {items, totalCount};
	}

	private async _fetchSitePageTreeNode(
		externalReferenceCode: string
	): Promise<SitePageTreeNode | null> {
		const requestURL = this._getURL(
			`site-page-tree-nodes/${encodeURIComponent(externalReferenceCode)}`,
			{nestedFields: NESTED_FIELDS}
		);

		const response = await fetch(requestURL.toString(), {
			headers: {Accept: 'application/json'},
		});

		if (response.status === 404) {
			return null;
		}

		if (!response.ok) {
			throw new Error(
				`Request to ${requestURL.pathname} failed with status ${response.status}`
			);
		}

		const sitePageTreeNode = (await response.json()) as SitePageTreeNode;

		this._registerSitePageTreeNode(sitePageTreeNode);

		return sitePageTreeNode;
	}

	private _getSitePagesCount(): Promise<number> {
		if (!this._sitePagesCountPromise) {
			this._sitePagesCountPromise = this._fetchPage(
				this._getURL('site-pages', {page: '1', pageSize: '1'})
			).then(({totalCount}) => totalCount);

			this._sitePagesCountPromise.catch(() => {
				this._sitePagesCountPromise = null;
			});
		}

		return this._sitePagesCountPromise;
	}

	private _getURL(
		path: string,
		searchParams: Record<string, string> = {}
	): URL {
		const requestURL = new URL(
			`${this._siteURL}/${path}`,
			window.location.origin
		);

		Object.entries(searchParams).forEach(([name, value]) =>
			requestURL.searchParams.set(name, value)
		);

		requestURL.searchParams.set(
			'privateLayout',
			String(this._privateLayout)
		);

		return requestURL;
	}

	private _registerSitePageTreeNode(sitePageTreeNode: SitePageTreeNode) {
		this._knownSitePageTreeNodesByExternalReferenceCode.set(
			sitePageTreeNode.externalReferenceCode,
			sitePageTreeNode
		);

		sitePageTreeNode.ancestorSitePageTreeNodes?.forEach(
			(ancestorSitePageTreeNode) =>
				this._registerSitePageTreeNode(ancestorSitePageTreeNode)
		);
	}

	private _toAncestorItems(
		sitePageTreeNodes: SitePageTreeNode[]
	): Array<PageTreePickerItem<SitePageTreeNode | null>> {
		const ancestorItemsByExternalReferenceCode = new Map<
			string,
			PageTreePickerItem<SitePageTreeNode | null>
		>();

		sitePageTreeNodes.forEach((sitePageTreeNode) =>
			sitePageTreeNode.ancestorSitePageTreeNodes?.forEach(
				(ancestorSitePageTreeNode) =>
					ancestorItemsByExternalReferenceCode.set(
						ancestorSitePageTreeNode.externalReferenceCode,
						this._toItem(ancestorSitePageTreeNode)
					)
			)
		);

		return Array.from(ancestorItemsByExternalReferenceCode.values());
	}

	private _toItem(
		sitePageTreeNode: SitePageTreeNode
	): PageTreePickerItem<SitePageTreeNode | null> {
		return {
			hasChildren: Boolean(sitePageTreeNode.hasChildSitePages),
			icon: getIcon(sitePageTreeNode),
			id: sitePageTreeNode.externalReferenceCode,
			label: sitePageTreeNode.name ?? '',
			page: sitePageTreeNode,
			parentId:
				sitePageTreeNode.parentSitePageExternalReferenceCode ??
				ROOT_ITEM_ID,
		};
	}
}
