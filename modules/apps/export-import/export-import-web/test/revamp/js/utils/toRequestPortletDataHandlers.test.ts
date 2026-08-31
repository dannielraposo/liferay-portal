/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {
	LayoutSetSelection,
	PORTLET_DATA_KEY_LAYOUT_SET_LAYOUTS,
	PortletDataHandlerSelection,
} from '../../../../src/main/resources/META-INF/resources/revamp/js/utils/contentSelection';
import {toRequestPortletDataHandlers} from '../../../../src/main/resources/META-INF/resources/revamp/js/utils/toRequestPortletDataHandlers';

import type {PreviewPortletDataHandlerSection} from '../../../../src/main/resources/META-INF/resources/revamp/js/types/portletDataHandler';

const PREVIEW_PORTLET_DATA_HANDLER_SECTIONS = [
	{
		label: 'Site Builder',
		name: 'category.site_administration.build',
		previewPortletDataHandlers: [
			{
				label: 'Pages',
				name: PORTLET_DATA_KEY_LAYOUT_SET_LAYOUTS,
			},
		],
	},
] as PreviewPortletDataHandlerSection[];

function toLayoutSetControl(layoutSetSelection: LayoutSetSelection) {
	const [requestPortletDataHandler] = toRequestPortletDataHandlers(
		PREVIEW_PORTLET_DATA_HANDLER_SECTIONS,
		{
			'category.site_administration.build': {
				[PORTLET_DATA_KEY_LAYOUT_SET_LAYOUTS]:
					layoutSetSelection as PortletDataHandlerSelection,
			},
		}
	);

	return requestPortletDataHandler.requestPortletDataHandlerControls;
}

describe('toRequestPortletDataHandlers', () => {
	it('answers the tree selection with the whole tree and no visibility for public pages', () => {
		expect(toLayoutSetControl({all: true, privateLayout: false})).toEqual([
			{
				name: '_layout_set_pages',
				requestPortletDataHandlerControls: [{name: '_layout_set_all'}],
			},
		]);
	});

	it('answers the visibility choice for private pages', () => {
		expect(toLayoutSetControl({all: true, privateLayout: true})).toEqual([
			{name: '_layout_set_visibility', values: ['private-pages']},
			{
				name: '_layout_set_pages',
				requestPortletDataHandlerControls: [{name: '_layout_set_all'}],
			},
		]);
	});

	it('answers the tree selection with the items alone', () => {
		expect(
			toLayoutSetControl({items: ['home-erc'], privateLayout: false})
		).toEqual([
			{
				name: '_layout_set_pages',
				requestPortletDataHandlerControls: [
					{name: '_layout_set_items', values: ['home-erc']},
				],
			},
		]);
	});

	it('keeps the whole tree next to the items re-included inside an excluded subtree', () => {
		expect(
			toLayoutSetControl({
				all: true,
				excludedItems: ['about-erc'],
				excludedSubtrees: ['section-erc'],
				items: ['section-page-erc'],
				privateLayout: false,
				subtrees: ['news-erc'],
			})
		).toEqual([
			{
				name: '_layout_set_pages',
				requestPortletDataHandlerControls: [
					{name: '_layout_set_all'},
					{name: '_layout_set_items', values: ['section-page-erc']},
					{name: '_layout_set_subtrees', values: ['news-erc']},
					{
						name: '_layout_set_excluded-items',
						values: ['about-erc'],
					},
					{
						name: '_layout_set_excluded-subtrees',
						values: ['section-erc'],
					},
				],
			},
		]);
	});
});
