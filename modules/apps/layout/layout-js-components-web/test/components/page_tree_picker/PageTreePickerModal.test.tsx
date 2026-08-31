/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import fetch from 'jest-fetch-mock';
import React from 'react';

import '@testing-library/jest-dom';

import PageTreePickerModal from '../../../src/main/resources/META-INF/resources/js/components/page_tree_picker/PageTreePickerModal';
import {SitePageTreeNode} from '../../../src/main/resources/META-INF/resources/js/components/page_tree_picker/SitePageTreeDataSource';
import checkAccessibility from '../../__lib__/checkAccessibility';

const SITE_PAGES: SitePageTreeNode[] = [
	{
		externalReferenceCode: 'home-erc',
		name: 'Home',
	},
	{
		externalReferenceCode: 'products-erc',
		name: 'Products',
	},
	{
		externalReferenceCode: 'phones-erc',
		name: 'Phones',
		parentSitePageExternalReferenceCode: 'products-erc',
	},
	{
		externalReferenceCode: 'orphan-erc',
		name: 'Orphan',
		parentSitePageExternalReferenceCode: 'deleted-erc',
	},
];

function mockSitePagesRoutes(sitePages: SitePageTreeNode[] = SITE_PAGES) {
	const sitePagesByExternalReferenceCode = new Map(
		sitePages.map((sitePage) => [sitePage.externalReferenceCode, sitePage])
	);

	const getParentExternalReferenceCode = (sitePage: SitePageTreeNode) => {
		const parentExternalReferenceCode =
			sitePage.parentSitePageExternalReferenceCode;

		return parentExternalReferenceCode &&
			sitePagesByExternalReferenceCode.has(parentExternalReferenceCode)
			? parentExternalReferenceCode
			: null;
	};

	const getChildren = (externalReferenceCode: string | null) =>
		sitePages.filter(
			(sitePage) =>
				getParentExternalReferenceCode(sitePage) ===
				externalReferenceCode
		);

	const getDescendantsCount = (sitePage: SitePageTreeNode): number =>
		getChildren(sitePage.externalReferenceCode).reduce(
			(count, childSitePage) =>
				count + 1 + getDescendantsCount(childSitePage),
			0
		);

	const getAncestors = (sitePage: SitePageTreeNode): SitePageTreeNode[] => {
		const parentExternalReferenceCode =
			getParentExternalReferenceCode(sitePage);

		if (!parentExternalReferenceCode) {
			return [];
		}

		const parentSitePage = sitePagesByExternalReferenceCode.get(
			parentExternalReferenceCode
		) as SitePageTreeNode;

		return [...getAncestors(parentSitePage), parentSitePage];
	};

	const toSitePageTreeNode = (
		sitePage: SitePageTreeNode,
		nestedFields: string | null
	): SitePageTreeNode => ({
		...(nestedFields === 'ancestorSitePageTreeNodes' && {
			ancestorSitePageTreeNodes: getAncestors(sitePage).map(
				(ancestorSitePage) => toSitePageTreeNode(ancestorSitePage, null)
			),
		}),
		descendantSitePagesCount: getDescendantsCount(sitePage),
		externalReferenceCode: sitePage.externalReferenceCode,
		hasChildSitePages: !!getChildren(sitePage.externalReferenceCode).length,
		name: sitePage.name,
		parentSitePageExternalReferenceCode:
			getParentExternalReferenceCode(sitePage),
		type: sitePage.type,
	});

	fetch.mockResponse(async (request) => {
		const url = new URL(request.url, window.location.origin);

		if (!url.pathname.includes('/sites/site-erc/')) {
			return {body: JSON.stringify({}), status: 404};
		}

		const nestedFields = url.searchParams.get('nestedFields');
		const page = Number(url.searchParams.get('page') ?? 1);
		const pageSize = Number(url.searchParams.get('pageSize') ?? 20);

		const toPage = (items: SitePageTreeNode[]) =>
			JSON.stringify({
				items: items
					.slice((page - 1) * pageSize, page * pageSize)
					.map((sitePage) =>
						toSitePageTreeNode(sitePage, nestedFields)
					),
				totalCount: items.length,
			});

		const nodeMatch = /\/site-page-tree-nodes\/([^/?]+)$/.exec(
			url.pathname
		);

		if (nodeMatch) {
			const sitePage = sitePagesByExternalReferenceCode.get(
				decodeURIComponent(nodeMatch[1])
			);

			if (!sitePage) {
				return {body: JSON.stringify({}), status: 404};
			}

			return {
				body: JSON.stringify(
					toSitePageTreeNode(sitePage, nestedFields)
				),
			};
		}

		if (url.pathname.endsWith('/site-page-tree-nodes')) {
			const search = url.searchParams.get('search');

			if (search !== null) {
				return {
					body: toPage(
						sitePages.filter((sitePage) =>
							sitePage.name
								?.toLowerCase()
								.includes(search.toLowerCase())
						)
					),
				};
			}

			return {
				body: toPage(
					getChildren(
						url.searchParams.get(
							'parentSitePageExternalReferenceCode'
						)
					)
				),
			};
		}

		return {body: toPage(sitePages)};
	});
}

async function renderPageTreePickerModal(
	props: Partial<React.ComponentProps<typeof PageTreePickerModal>> = {}
) {
	const result = render(
		<PageTreePickerModal
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

describe('PageTreePickerModal', () => {
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

	it('loads the tree lazily through the tree nodes endpoint', async () => {
		await renderPageTreePickerModal();

		const rootsRequestURL = new URL(String(fetch.mock.calls[0][0]));

		expect(rootsRequestURL.pathname).toBe(
			'/o/headless-admin-site/v1.0/sites/site-erc/site-page-tree-nodes'
		);
		expect(
			rootsRequestURL.searchParams.has(
				'parentSitePageExternalReferenceCode'
			)
		).toBe(false);
		expect(rootsRequestURL.searchParams.get('privateLayout')).toBe('false');

		expect(screen.getByText('Products')).toBeInTheDocument();
		expect(screen.getByText('Orphan')).toBeInTheDocument();

		expect(screen.queryByText('Phones')).not.toBeInTheDocument();

		expandTreeItem('Products');

		expect(await screen.findByText('Phones')).toBeInTheDocument();

		const parentExternalReferenceCodes = fetch.mock.calls.map((call) => {
			const requestURL = new URL(String(call[0]));

			return requestURL.searchParams.get(
				'parentSitePageExternalReferenceCode'
			);
		});

		expect(parentExternalReferenceCodes).toContain('products-erc');
	});

	it('hides the toggle on the pages without children', async () => {
		await renderPageTreePickerModal();

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

	it('shows the toggle when the external reference code is not lowercase', async () => {
		mockSitePagesRoutes([
			{
				externalReferenceCode: 'Products-ERC',
				name: 'Products',
			},
			{
				externalReferenceCode: 'Phones-ERC',
				name: 'Phones',
				parentSitePageExternalReferenceCode: 'Products-ERC',
			},
		]);

		render(
			<PageTreePickerModal
				onClose={() => {}}
				onSubmit={() => {}}
				privateLayout={false}
				siteExternalReferenceCode="site-erc"
			/>
		);

		const productsTreeItem = (await screen.findByText('Products')).closest(
			'[role="treeitem"]'
		) as HTMLElement;

		expect(
			productsTreeItem.querySelector('.component-expander')
		).not.toBeNull();
	});

	it('counts a searched page deselected below a parent whose external reference code is not lowercase', async () => {
		mockSitePagesRoutes([
			{
				externalReferenceCode: 'Home-ERC',
				name: 'Home',
			},
			{
				externalReferenceCode: 'Products-ERC',
				name: 'Products',
			},
			{
				externalReferenceCode: 'Phones-ERC',
				name: 'Phones',
				parentSitePageExternalReferenceCode: 'Products-ERC',
			},
		]);

		const onSubmit = jest.fn();

		const {unmount} = await renderPageTreePickerModal({
			initialSelection: {all: true, privateLayout: false},
			onSubmit,
		});

		await userEvent.type(
			screen.getByRole('textbox', {name: 'search'}),
			'Phones'
		);

		await userEvent.click(
			await screen.findByRole(
				'checkbox',
				{name: 'Phones'},
				{timeout: 3000}
			)
		);

		expect(screen.getByText('Products')).toBeInTheDocument();
		expect(await screen.findByText('2 items-selected')).toBeInTheDocument();

		await userEvent.click(screen.getByRole('button', {name: 'select'}));

		const selection = onSubmit.mock.calls[0][0];

		expect(selection).toEqual({
			all: true,
			excludedItems: ['Phones-ERC'],
			privateLayout: false,
		});

		unmount();

		await renderPageTreePickerModal({initialSelection: selection});

		expect(await screen.findByText('2 items-selected')).toBeInTheDocument();
	});

	it('titles the dialog with the given title', async () => {
		await renderPageTreePickerModal({title: 'pages-to-publish'});

		expect(screen.getByText('pages-to-publish')).toBeInTheDocument();
	});

	it('submits the selected pages', async () => {
		const onSubmit = jest.fn();

		await renderPageTreePickerModal({onSubmit});

		await userEvent.click(screen.getByRole('checkbox', {name: 'Home'}));

		await userEvent.click(screen.getByRole('button', {name: 'select'}));

		expect(onSubmit).toHaveBeenCalledWith({
			items: ['home-erc'],
			privateLayout: false,
		});
	});

	it('submits all pages when the root is shift selected', async () => {
		const onSubmit = jest.fn();

		await renderPageTreePickerModal({onSubmit});

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

		await renderPageTreePickerModal({onSubmit});

		await userEvent.click(screen.getByRole('button', {name: 'select'}));

		expect(onSubmit).toHaveBeenCalledWith(null);
	});

	it('toggles the page selection when its row is clicked', async () => {
		await renderPageTreePickerModal();

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
		await renderPageTreePickerModal();

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
		await renderPageTreePickerModal();

		fireEvent.click(screen.getByRole('checkbox', {name: 'public-pages'}), {
			shiftKey: true,
		});

		expect(await screen.findByText('4 items-selected')).toBeInTheDocument();
	});

	it('counts the unloaded descendants of a collapsed subtree', async () => {
		await renderPageTreePickerModal();

		fireEvent.click(screen.getByRole('checkbox', {name: 'Products'}), {
			shiftKey: true,
		});

		expect(await screen.findByText('2 items-selected')).toBeInTheDocument();
	});

	it('subtracts a deselected page from the exact count', async () => {
		await renderPageTreePickerModal({
			initialSelection: {all: true, privateLayout: false},
		});

		expect(await screen.findByText('4 items-selected')).toBeInTheDocument();

		await userEvent.click(screen.getByRole('checkbox', {name: 'Home'}));

		expect(await screen.findByText('3 items-selected')).toBeInTheDocument();
	});

	it('checks the pages loaded under a shift selected root', async () => {
		await renderPageTreePickerModal({
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

		await renderPageTreePickerModal({
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

		await renderPageTreePickerModal({
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
		await renderPageTreePickerModal();

		expandTreeItem('Products');

		await screen.findByText('Phones');

		fireEvent.click(screen.getByRole('checkbox', {name: 'Products'}), {
			shiftKey: true,
		});

		expect(await screen.findByText('2 items-selected')).toBeInTheDocument();

		expect(screen.getByRole('checkbox', {name: 'Phones'})).toBeChecked();
	});

	it('deselects the whole subtree when an expanded selected parent is shift deselected', async () => {
		await renderPageTreePickerModal();

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
		await renderPageTreePickerModal();

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

		await renderPageTreePickerModal({onSubmit});

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

		await renderPageTreePickerModal({onSubmit});

		fireEvent.click(screen.getByRole('checkbox', {name: 'Products'}), {
			shiftKey: true,
		});

		await userEvent.click(screen.getByRole('button', {name: 'select'}));

		expect(onSubmit).toHaveBeenCalledWith({
			privateLayout: false,
			subtrees: ['products-erc'],
		});
	});

	it('loads the search results with their ancestors in a single request', async () => {
		const sitePages: SitePageTreeNode[] = [
			{
				externalReferenceCode: 'top-erc',
				name: 'Top',
			},
		];

		for (let index = 0; index < 30; index++) {
			sitePages.push(
				{
					externalReferenceCode: `parent-${index}-erc`,
					name: `Parent ${index}`,
					parentSitePageExternalReferenceCode: 'top-erc',
				},
				{
					externalReferenceCode: `result-${index}-erc`,
					name: `Result ${index}`,
					parentSitePageExternalReferenceCode: `parent-${index}-erc`,
				}
			);
		}

		mockSitePagesRoutes(sitePages);

		render(
			<PageTreePickerModal
				onClose={() => {}}
				onSubmit={() => {}}
				privateLayout={false}
				siteExternalReferenceCode="site-erc"
			/>
		);

		await screen.findByText('Top');

		fetch.mockClear();

		await userEvent.type(screen.getByRole('textbox'), 'Result');

		expect(await screen.findByText('Parent 29')).toBeInTheDocument();

		expect(fetch).toHaveBeenCalledTimes(1);

		const requestURL = new URL(String(fetch.mock.calls[0][0]));

		expect(requestURL.pathname).toMatch(/\/site-page-tree-nodes$/);
		expect(requestURL.searchParams.get('nestedFields')).toBe(
			'ancestorSitePageTreeNodes'
		);
		expect(requestURL.searchParams.get('search')).toBe('Result');
	});

	it('shows the ancestors of a search result', async () => {
		await renderPageTreePickerModal();

		await userEvent.type(screen.getByRole('textbox'), 'Phones');

		expect(
			await screen.findByText('Phones', {selector: 'mark'})
		).toBeInTheDocument();

		expect(screen.getByText('Products')).toBeInTheDocument();

		expect(screen.queryByRole('treeitem')).not.toBeInTheDocument();
	});

	it('preselects every page and submits all with the deselection excluded', async () => {
		const onSubmit = jest.fn();

		await renderPageTreePickerModal({
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

		await renderPageTreePickerModal({
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

		await renderPageTreePickerModal({
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

	it('counts a deselected tree below pages that are not loaded when reopened', async () => {
		mockSitePagesRoutes([
			...SITE_PAGES,
			{
				externalReferenceCode: 'android-erc',
				name: 'Android',
				parentSitePageExternalReferenceCode: 'phones-erc',
			},
			{
				externalReferenceCode: 'pixel-erc',
				name: 'Pixel',
				parentSitePageExternalReferenceCode: 'android-erc',
			},
		]);

		await renderPageTreePickerModal({
			initialSelection: {
				all: true,
				excludedSubtrees: ['android-erc'],
				privateLayout: false,
			},
		});

		expect(await screen.findByText('4 items-selected')).toBeInTheDocument();
	});

	it('loads a level of the tree with a single request', async () => {
		await renderPageTreePickerModal();

		expect(fetch).toHaveBeenCalledTimes(1);
	});

	it('preselects the initial pages', async () => {
		await renderPageTreePickerModal({
			initialSelection: {
				items: ['home-erc'],
				privateLayout: false,
			},
		});

		expect(screen.getByRole('checkbox', {name: 'Home'})).toBeChecked();
	});

	it('preselects an initial page tree', async () => {
		await renderPageTreePickerModal({
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
			<PageTreePickerModal
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
			<PageTreePickerModal
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
		const {container} = await renderPageTreePickerModal();

		await checkAccessibility({bestPractices: true, context: container});
	});
});
