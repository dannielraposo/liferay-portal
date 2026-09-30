/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {
	LayoutSetSelection,
	PORTLET_DATA_KEY_LAYOUT_SET_LAYOUTS,
	PortletDataHandlerSelection,
} from '../../../../src/main/resources/META-INF/resources/revamp/js/utils/contentSelection';
import {toSitePageSelection} from '../../../../src/main/resources/META-INF/resources/revamp/js/utils/toSitePageSelection';

function toSitePageSelectionOf(layoutSetSelection: LayoutSetSelection | true) {
	return toSitePageSelection({
		'category.site_administration.build': {
			[PORTLET_DATA_KEY_LAYOUT_SET_LAYOUTS]:
				layoutSetSelection as PortletDataHandlerSelection,
		},
	});
}

describe('toSitePageSelection', () => {
	it('answers nothing when no pages are selected', () => {
		expect(toSitePageSelection(undefined)).toBeUndefined();
		expect(
			toSitePageSelection({'category.site_administration.build': {}})
		).toBeUndefined();
	});

	it('answers the whole public tree without entries', () => {
		expect(
			toSitePageSelectionOf({all: true, privateLayout: false})
		).toEqual({all: true, visibility: 'PUBLIC'});
	});

	it('answers the whole public tree for a bare selection', () => {
		expect(toSitePageSelectionOf(true)).toEqual({
			all: true,
			visibility: 'PUBLIC',
		});
	});

	it('answers the private visibility', () => {
		expect(toSitePageSelectionOf({all: true, privateLayout: true})).toEqual(
			{
				all: true,
				visibility: 'PRIVATE',
			}
		);
	});

	it('answers the items alone as entries', () => {
		expect(
			toSitePageSelectionOf({items: ['home-erc'], privateLayout: false})
		).toEqual({
			all: false,
			sitePageSelectionEntries: [
				{sitePageExternalReferenceCode: 'home-erc'},
			],
			visibility: 'PUBLIC',
		});
	});

	it('keeps the whole tree next to the items re-included inside an excluded subtree', () => {
		expect(
			toSitePageSelectionOf({
				all: true,
				excludedItems: ['about-erc'],
				excludedSubtrees: ['section-erc'],
				items: ['section-page-erc'],
				privateLayout: false,
				subtrees: ['news-erc'],
			})
		).toEqual({
			all: true,
			sitePageSelectionEntries: [
				{sitePageExternalReferenceCode: 'section-page-erc'},
				{
					includeDescendants: true,
					sitePageExternalReferenceCode: 'news-erc',
				},
				{excluded: true, sitePageExternalReferenceCode: 'about-erc'},
				{
					excluded: true,
					includeDescendants: true,
					sitePageExternalReferenceCode: 'section-erc',
				},
			],
			visibility: 'PUBLIC',
		});
	});
});
