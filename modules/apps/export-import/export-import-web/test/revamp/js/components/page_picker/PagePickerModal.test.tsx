/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

// eslint-disable-next-line @liferay/portal/no-cross-module-deep-import
import {checkAccessibility} from '@liferay/layout-js-components-web/test/__lib__/index';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import fetch from 'jest-fetch-mock';
import React from 'react';

import '@testing-library/jest-dom';

import PagePickerModal from '../../../../../src/main/resources/META-INF/resources/revamp/js/components/page_picker/PagePickerModal';
import {SitePage} from '../../../../../src/main/resources/META-INF/resources/revamp/js/components/page_picker/types';

const SITE_PAGES: SitePage[] = [
	{
		externalReferenceCode: 'home-erc',
		name_i18n: {en_US: 'Home'},
	},
	{
		externalReferenceCode: 'products-erc',
		name_i18n: {en_US: 'Products'},
	},
	{
		externalReferenceCode: 'phones-erc',
		name_i18n: {en_US: 'Phones'},
		parentSitePageExternalReferenceCode: 'products-erc',
	},
	{
		externalReferenceCode: 'orphan-erc',
		name_i18n: {en_US: 'Orphan'},
		parentSitePageExternalReferenceCode: 'deleted-erc',
	},
];

function splitQuotedValues(list: string): string[] {
	return list.split(',').map((value) =>
		value
			.trim()
			.replace(/^'(.*)'$/, '$1')
			.replace(/''/g, "'")
	);
}

function mockSitePagesRoutes(sitePages: SitePage[] = SITE_PAGES) {
	const sitePagesByExternalReferenceCode = new Map(
		sitePages.map((sitePage) => [sitePage.externalReferenceCode, sitePage])
	);

	const getParentExternalReferenceCode = (sitePage: SitePage) => {
		const parentExternalReferenceCode =
			sitePage.parentSitePageExternalReferenceCode;

		return parentExternalReferenceCode &&
			sitePagesByExternalReferenceCode.has(parentExternalReferenceCode)
			? parentExternalReferenceCode
			: null;
	};

	fetch.mockResponse(async (request) => {
		const url = new URL(request.url);

		if (!url.pathname.includes('/sites/site-erc/site-pages')) {
			return {body: JSON.stringify({}), status: 404};
		}

		const filter = url.searchParams.get('filter') ?? '';
		const search = url.searchParams.get('search');

		const getAncestorExternalReferenceCodes = (sitePage: SitePage) => {
			const ancestorExternalReferenceCodes: string[] = [];

			let parentExternalReferenceCode =
				getParentExternalReferenceCode(sitePage);

			while (parentExternalReferenceCode) {
				ancestorExternalReferenceCodes.push(
					parentExternalReferenceCode
				);

				parentExternalReferenceCode = getParentExternalReferenceCode(
					sitePagesByExternalReferenceCode.get(
						parentExternalReferenceCode
					) as SitePage
				);
			}

			return ancestorExternalReferenceCodes;
		};

		const matches = (sitePage: SitePage, conjunct: string) => {
			let match: RegExpExecArray | null = null;

			if (conjunct === 'parentSitePageExternalReferenceCode eq null') {
				return !getParentExternalReferenceCode(sitePage);
			}

			if (
				(match = /^parentSitePageExternalReferenceCode eq '(.+)'$/.exec(
					conjunct
				))
			) {
				return getParentExternalReferenceCode(sitePage) === match[1];
			}

			if (
				(match =
					/^parentSitePageExternalReferenceCode in \((.+)\)$/.exec(
						conjunct
					))
			) {
				const parentExternalReferenceCode =
					getParentExternalReferenceCode(sitePage);

				return (
					parentExternalReferenceCode !== null &&
					splitQuotedValues(match[1]).includes(
						parentExternalReferenceCode
					)
				);
			}

			if (
				(match = /^externalReferenceCode in \((.+)\)$/.exec(conjunct))
			) {
				return splitQuotedValues(match[1]).includes(
					sitePage.externalReferenceCode
				);
			}

			if (
				(match =
					/^ancestorSitePageExternalReferenceCode eq '(.+)'$/.exec(
						conjunct
					))
			) {
				return getAncestorExternalReferenceCodes(sitePage).includes(
					match[1]
				);
			}

			throw new Error(`Unsupported filter: ${conjunct}`);
		};

		let items: SitePage[] = sitePages;

		if (search !== null) {
			items = sitePages.filter((sitePage) =>
				Object.values(sitePage.name_i18n).some((name) =>
					name.toLowerCase().includes(search.toLowerCase())
				)
			);
		}
		else if (filter) {
			items = sitePages.filter((sitePage) =>
				filter
					.split(' and ')
					.every((conjunct) => matches(sitePage, conjunct))
			);
		}

		const page = Number(url.searchParams.get('page') ?? 1);
		const pageSize = Number(url.searchParams.get('pageSize') ?? 20);

		const facets =
			url.searchParams.get('aggregationTerms') ===
			'parentSitePageExternalReferenceCode'
				? [
						{
							facetCriteria:
								'parentSitePageExternalReferenceCode',
							facetValues: Array.from(
								new Set(
									items
										.map((sitePage) =>
											getParentExternalReferenceCode(
												sitePage
											)
										)
										.filter(Boolean)
								)
							).map((term) => ({
								numberOfOccurrences: 1,
								term: (term as string).toLowerCase(),
							})),
						},
					]
				: [];

		return {
			body: JSON.stringify({
				facets,
				items: items.slice((page - 1) * pageSize, page * pageSize),
				totalCount: items.length,
			}),
		};
	});
}

async function renderPagePickerModal(
	props: Partial<React.ComponentProps<typeof PagePickerModal>> = {}
) {
	const result = render(
		<PagePickerModal
			onClose={() => {}}
			onSubmit={() => {}}
			privateLayout={false}
			siteExternalReferenceCode="site-erc"
			{...props}
		/>
	);

	await screen.findByText('public-pages');

	await screen.findByText('Home');

	return result;
}

function expandTreeItem(name: string) {
	const treeItem = screen
		.getByText(name)
		.closest('[role="treeitem"]') as HTMLElement;

	fireEvent.click(
		treeItem.querySelector('.component-expander') as HTMLElement
	);
}

describe('PagePickerModal', () => {
	beforeEach(() => {
		jest.clearAllMocks();

		(Liferay.Language.get as jest.Mock).mockImplementation(
			(key: string) => {
				if (key === 'x-item-selected') {
					return '{0} item-selected';
				}

				if (key === 'x-items-selected') {
					return '{0} items-selected';
				}

				return key;
			}
		);

		mockSitePagesRoutes();
	});

	afterEach(() => {
		(Liferay.Language.get as jest.Mock).mockImplementation(
			(key: string) => key
		);
	});

	it('loads the tree lazily through the parent filters', async () => {
		await renderPagePickerModal();

		const rootsRequestURL = new URL(String(fetch.mock.calls[0][0]));

		expect(rootsRequestURL.pathname).toContain(
			'/sites/site-erc/site-pages'
		);
		expect(rootsRequestURL.searchParams.get('filter')).toBe(
			'parentSitePageExternalReferenceCode eq null'
		);
		expect(rootsRequestURL.searchParams.get('privateLayout')).toBe('false');
		expect(rootsRequestURL.searchParams.get('fields')).toContain(
			'externalReferenceCode'
		);

		expect(screen.getByText('Products')).toBeInTheDocument();
		expect(screen.getByText('Orphan')).toBeInTheDocument();

		expect(screen.queryByText('Phones')).not.toBeInTheDocument();

		expandTreeItem('Products');

		expect(await screen.findByText('Phones')).toBeInTheDocument();

		const filters = fetch.mock.calls.map((call) => {
			const requestURL = new URL(String(call[0]));

			return requestURL.searchParams.get('filter');
		});

		expect(filters).toContain(
			"parentSitePageExternalReferenceCode eq 'products-erc'"
		);
	});

	it('hides the toggle on the pages without children', async () => {
		await renderPagePickerModal();

		const productsTreeItem = screen
			.getByText('Products')
			.closest('[role="treeitem"]') as HTMLElement;

		expect(
			productsTreeItem.querySelector('.component-expander')
		).not.toBeNull();

		const homeTreeItem = screen
			.getByText('Home')
			.closest('[role="treeitem"]') as HTMLElement;

		expect(homeTreeItem.querySelector('.component-expander')).toBeNull();
	});

	it('titles the dialog with the given title', async () => {
		await renderPagePickerModal({title: 'pages-to-publish'});

		expect(screen.getByText('pages-to-publish')).toBeInTheDocument();
	});

	it('submits the selected pages', async () => {
		const onSubmit = jest.fn();

		await renderPagePickerModal({onSubmit});

		await userEvent.click(screen.getByRole('checkbox', {name: 'Home'}));

		await userEvent.click(screen.getByRole('button', {name: 'select'}));

		expect(onSubmit).toHaveBeenCalledWith({
			items: ['home-erc'],
			privateLayout: false,
		});
	});

	it('submits all pages when the root is shift selected', async () => {
		const onSubmit = jest.fn();

		await renderPagePickerModal({onSubmit});

		fireEvent.click(screen.getByRole('checkbox', {name: 'public-pages'}), {
			shiftKey: true,
		});

		await userEvent.click(screen.getByRole('button', {name: 'select'}));

		await waitFor(() =>
			expect(onSubmit).toHaveBeenCalledWith({
				all: true,
				privateLayout: false,
			})
		);
	});

	it('submits null when nothing is selected', async () => {
		const onSubmit = jest.fn();

		await renderPagePickerModal({onSubmit});

		await userEvent.click(screen.getByRole('button', {name: 'select'}));

		expect(onSubmit).toHaveBeenCalledWith(null);
	});

	it('toggles the page selection when its row is clicked', async () => {
		await renderPagePickerModal();

		await userEvent.click(screen.getByText('Home'));

		expect(await screen.findByText('1 item-selected')).toBeInTheDocument();

		await userEvent.click(screen.getByText('Home'));

		await waitFor(() =>
			expect(
				screen.queryByText('1 item-selected')
			).not.toBeInTheDocument()
		);
	});

	it('selects and deselects every page from a plain click on the root', async () => {
		await renderPagePickerModal();

		await userEvent.click(
			screen.getByRole('checkbox', {name: 'public-pages'})
		);

		expect(await screen.findByText('4 items-selected')).toBeInTheDocument();

		expect(screen.getByRole('checkbox', {name: 'Home'})).toBeChecked();

		await userEvent.click(
			screen.getByRole('checkbox', {name: 'public-pages'})
		);

		expect(await screen.findByText('nothing-selected')).toBeInTheDocument();

		expect(screen.getByRole('checkbox', {name: 'Home'})).not.toBeChecked();
	});

	it('counts every page when the root is shift selected', async () => {
		await renderPagePickerModal();

		fireEvent.click(screen.getByRole('checkbox', {name: 'public-pages'}), {
			shiftKey: true,
		});

		expect(await screen.findByText('4 items-selected')).toBeInTheDocument();
	});

	it('counts the unloaded descendants of a collapsed subtree', async () => {
		await renderPagePickerModal();

		fireEvent.click(screen.getByRole('checkbox', {name: 'Products'}), {
			shiftKey: true,
		});

		expect(await screen.findByText('2 items-selected')).toBeInTheDocument();
	});

	it('subtracts a deselected page from the exact count', async () => {
		await renderPagePickerModal({
			initialSelection: {all: true, privateLayout: false},
		});

		expect(await screen.findByText('4 items-selected')).toBeInTheDocument();

		await userEvent.click(screen.getByRole('checkbox', {name: 'Home'}));

		expect(await screen.findByText('3 items-selected')).toBeInTheDocument();
	});

	it('checks the pages loaded under a shift selected root', async () => {
		await renderPagePickerModal({
			initialSelection: {all: true, privateLayout: false},
		});

		expect(screen.getByRole('checkbox', {name: 'Home'})).toBeChecked();
		expect(screen.getByRole('checkbox', {name: 'Products'})).toBeChecked();

		expandTreeItem('Products');

		await waitFor(() =>
			expect(screen.getByRole('checkbox', {name: 'Phones'})).toBeChecked()
		);
	});

	it('clears the whole tree when the root is shift deselected', async () => {
		const onSubmit = jest.fn();

		await renderPagePickerModal({
			initialSelection: {all: true, privateLayout: false},
			onSubmit,
		});

		fireEvent.click(screen.getByRole('checkbox', {name: 'public-pages'}), {
			shiftKey: true,
		});

		await waitFor(() =>
			expect(screen.queryByText(/items-selected/)).not.toBeInTheDocument()
		);

		expect(screen.getByRole('checkbox', {name: 'Home'})).not.toBeChecked();

		await userEvent.click(screen.getByRole('button', {name: 'select'}));

		expect(onSubmit).toHaveBeenCalledWith(null);
	});

	it('clears the loaded subtree when its parent is shift deselected', async () => {
		const onSubmit = jest.fn();

		await renderPagePickerModal({
			initialSelection: {all: true, privateLayout: false},
			onSubmit,
		});

		expandTreeItem('Products');

		await waitFor(() =>
			expect(screen.getByRole('checkbox', {name: 'Phones'})).toBeChecked()
		);

		fireEvent.click(screen.getByRole('checkbox', {name: 'Products'}), {
			shiftKey: true,
		});

		expect(
			screen.getByRole('checkbox', {name: 'Phones'})
		).not.toBeChecked();

		await userEvent.click(screen.getByRole('button', {name: 'select'}));

		await waitFor(() =>
			expect(onSubmit).toHaveBeenCalledWith({
				all: true,
				excludedSubtrees: ['products-erc'],
				privateLayout: false,
			})
		);
	});

	it('selects the loaded children when an expanded parent is shift selected', async () => {
		await renderPagePickerModal();

		expandTreeItem('Products');

		await screen.findByText('Phones');

		fireEvent.click(screen.getByRole('checkbox', {name: 'Products'}), {
			shiftKey: true,
		});

		expect(await screen.findByText('2 items-selected')).toBeInTheDocument();

		expect(screen.getByRole('checkbox', {name: 'Phones'})).toBeChecked();
	});

	it('deselects the whole subtree when an expanded selected parent is shift deselected', async () => {
		await renderPagePickerModal();

		expandTreeItem('Products');

		await screen.findByText('Phones');

		await userEvent.click(screen.getByRole('checkbox', {name: 'Products'}));

		fireEvent.click(screen.getByRole('checkbox', {name: 'Products'}), {
			shiftKey: true,
		});

		await waitFor(() =>
			expect(
				screen.queryByText(/item-selected|items-selected/)
			).not.toBeInTheDocument()
		);

		expect(
			screen.getByRole('checkbox', {name: 'Phones'})
		).not.toBeChecked();
		expect(
			screen.getByRole('checkbox', {name: 'Products'})
		).not.toBeChecked();
	});

	it('keeps the ancestors unchecked when a single page is selected', async () => {
		await renderPagePickerModal();

		expandTreeItem('Products');

		await screen.findByText('Phones');

		await userEvent.click(screen.getByRole('checkbox', {name: 'Phones'}));

		expect(screen.getByRole('checkbox', {name: 'Phones'})).toBeChecked();

		expect(
			screen.getByRole('checkbox', {name: 'Products'})
		).not.toBeChecked();
		expect(
			screen.getByRole('checkbox', {name: 'public-pages'})
		).not.toBeChecked();
	});

	it('submits a page tree without its deselected root', async () => {
		const onSubmit = jest.fn();

		await renderPagePickerModal({onSubmit});

		fireEvent.click(screen.getByRole('checkbox', {name: 'Products'}), {
			shiftKey: true,
		});

		expect(await screen.findByText('2 items-selected')).toBeInTheDocument();

		await userEvent.click(screen.getByRole('checkbox', {name: 'Products'}));

		expect(await screen.findByText('1 item-selected')).toBeInTheDocument();

		await userEvent.click(screen.getByRole('button', {name: 'select'}));

		expect(onSubmit).toHaveBeenCalledWith({
			excludedItems: ['products-erc'],
			privateLayout: false,
			subtrees: ['products-erc'],
		});
	});

	it('submits a shift selected subtree as a page tree', async () => {
		const onSubmit = jest.fn();

		await renderPagePickerModal({onSubmit});

		fireEvent.click(screen.getByRole('checkbox', {name: 'Products'}), {
			shiftKey: true,
		});

		await userEvent.click(screen.getByRole('button', {name: 'select'}));

		expect(onSubmit).toHaveBeenCalledWith({
			privateLayout: false,
			subtrees: ['products-erc'],
		});
	});

	it('chunks the search ancestors lookup into bounded filter queries', async () => {
		const sitePages: SitePage[] = [
			{
				externalReferenceCode: 'top-erc',
				name_i18n: {en_US: 'Top'},
			},
		];

		for (let index = 0; index < 30; index++) {
			sitePages.push(
				{
					externalReferenceCode: `parent-${index}-erc`,
					name_i18n: {en_US: `Parent ${index}`},
					parentSitePageExternalReferenceCode: 'top-erc',
				},
				{
					externalReferenceCode: `result-${index}-erc`,
					name_i18n: {en_US: `Result ${index}`},
					parentSitePageExternalReferenceCode: `parent-${index}-erc`,
				}
			);
		}

		mockSitePagesRoutes(sitePages);

		render(
			<PagePickerModal
				onClose={() => {}}
				onSubmit={() => {}}
				privateLayout={false}
				siteExternalReferenceCode="site-erc"
			/>
		);

		await screen.findByText('Top');

		await userEvent.type(screen.getByRole('textbox'), 'Result');

		expect(await screen.findByText('Parent 29')).toBeInTheDocument();

		const ercsInFilters = fetch.mock.calls
			.map((call) => {
				const requestURL = new URL(String(call[0]));

				return (requestURL.searchParams.get('filter') ?? '').match(
					/^externalReferenceCode in \((.+)\)$/
				);
			})
			.filter(Boolean)
			.map((match) => (match as RegExpMatchArray)[1].split(',').length);

		expect(Math.max(...ercsInFilters)).toBeLessThanOrEqual(25);
		expect(ercsInFilters.length).toBeGreaterThanOrEqual(2);
	});

	it('shows the ancestors of a search result', async () => {
		await renderPagePickerModal();

		await userEvent.type(screen.getByRole('textbox'), 'Phones');

		expect(
			await screen.findByText('Phones', {selector: 'mark'})
		).toBeInTheDocument();

		expect(screen.getByText('Products')).toBeInTheDocument();

		expect(screen.queryByRole('treeitem')).not.toBeInTheDocument();
	});

	it('preselects every page and submits all with the deselection excluded', async () => {
		const onSubmit = jest.fn();

		await renderPagePickerModal({
			initialSelection: {all: true, privateLayout: false},
			onSubmit,
		});

		expect(screen.getByRole('checkbox', {name: 'Home'})).toBeChecked();
		expect(screen.getByRole('checkbox', {name: 'Products'})).toBeChecked();

		await userEvent.click(screen.getByRole('checkbox', {name: 'Home'}));

		await userEvent.click(screen.getByRole('button', {name: 'select'}));

		await waitFor(() =>
			expect(onSubmit).toHaveBeenCalledWith({
				all: true,
				excludedItems: ['home-erc'],
				privateLayout: false,
			})
		);
	});

	it('excludes a page deselected from the search results', async () => {
		const onSubmit = jest.fn();

		await renderPagePickerModal({
			initialSelection: {all: true, privateLayout: false},
			onSubmit,
		});

		await userEvent.type(screen.getByRole('textbox'), 'Phones');

		const searchResultCheckbox = await screen.findByRole('checkbox', {
			name: 'Phones',
		});

		expect(searchResultCheckbox).toBeChecked();

		await userEvent.click(searchResultCheckbox);

		await userEvent.click(screen.getByRole('button', {name: 'select'}));

		await waitFor(() =>
			expect(onSubmit).toHaveBeenCalledWith({
				all: true,
				excludedItems: ['phones-erc'],
				privateLayout: false,
			})
		);
	});

	it('keeps a page reincluded inside a deselected tree when reopened', async () => {
		const onSubmit = jest.fn();

		await renderPagePickerModal({
			initialSelection: {
				all: true,
				excludedSubtrees: ['products-erc'],
				items: ['phones-erc'],
				privateLayout: false,
			},
			onSubmit,
		});

		expect(await screen.findByText('3 items-selected')).toBeInTheDocument();

		expandTreeItem('Products');

		expect(
			await screen.findByRole('checkbox', {name: 'Phones'})
		).toBeChecked();

		expect(
			screen.getByRole('checkbox', {name: 'Products'})
		).not.toBeChecked();

		await userEvent.click(screen.getByRole('button', {name: 'select'}));

		expect(onSubmit).toHaveBeenCalledWith({
			all: true,
			excludedSubtrees: ['products-erc'],
			items: ['phones-erc'],
			privateLayout: false,
		});
	});

	it('resolves the children of a level with one aggregation request', async () => {
		await renderPagePickerModal();

		const aggregationRequestURLs = fetch.mock.calls
			.map((call) => new URL(String(call[0])))
			.filter((requestURL) =>
				requestURL.searchParams.has('aggregationTerms')
			);

		expect(aggregationRequestURLs).toHaveLength(1);

		expect(aggregationRequestURLs[0].searchParams.get('filter')).toBe(
			"parentSitePageExternalReferenceCode in ('home-erc','products-erc','orphan-erc')"
		);
	});

	it('preselects the initial pages', async () => {
		await renderPagePickerModal({
			initialSelection: {
				items: ['home-erc'],
				privateLayout: false,
			},
		});

		expect(screen.getByRole('checkbox', {name: 'Home'})).toBeChecked();
	});

	it('preselects an initial page tree', async () => {
		await renderPagePickerModal({
			initialSelection: {
				privateLayout: false,
				subtrees: ['products-erc'],
			},
		});

		expect(screen.getByRole('checkbox', {name: 'Products'})).toBeChecked();

		expandTreeItem('Products');

		await waitFor(() =>
			expect(screen.getByRole('checkbox', {name: 'Phones'})).toBeChecked()
		);
	});

	it('labels the root after the private pages', async () => {
		render(
			<PagePickerModal
				onClose={() => {}}
				onSubmit={() => {}}
				privateLayout={true}
				siteExternalReferenceCode="site-erc"
			/>
		);

		expect(await screen.findByText('private-pages')).toBeInTheDocument();

		await screen.findByText('Home');

		const requestURL = new URL(String(fetch.mock.calls[0][0]));

		expect(requestURL.searchParams.get('privateLayout')).toBe('true');
	});

	it('stays open when the pages cannot be loaded', async () => {
		fetch.mockResponse(async () => ({body: '', status: 500}));

		const onClose = jest.fn();

		render(
			<PagePickerModal
				onClose={onClose}
				onSubmit={() => {}}
				privateLayout={false}
				siteExternalReferenceCode="site-erc"
			/>
		);

		expect(await screen.findByText('public-pages')).toBeInTheDocument();

		expect(onClose).not.toHaveBeenCalled();

		await userEvent.click(screen.getByRole('button', {name: 'cancel'}));

		expect(onClose).toHaveBeenCalled();
	});

	it('has no accessibility violations', async () => {
		const {container} = await renderPagePickerModal();

		await checkAccessibility({bestPractices: true, context: container});
	});
});
