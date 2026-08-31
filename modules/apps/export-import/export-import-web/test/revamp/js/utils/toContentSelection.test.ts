/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {PORTLET_DATA_KEY_LAYOUT_SET_LAYOUTS} from '../../../../src/main/resources/META-INF/resources/revamp/js/utils/contentSelection';
import {toContentSelection} from '../../../../src/main/resources/META-INF/resources/revamp/js/utils/toContentSelection';

import type {PreviewPortletDataHandlerSection} from '../../../../src/main/resources/META-INF/resources/revamp/js/types/portletDataHandler';

const PREVIEW_PORTLET_DATA_HANDLER_SECTIONS = [
	{
		label: 'Content',
		name: 'category.content',
		previewPortletDataHandlers: [
			{
				label: 'Web Content',
				name: 'PORTLET_DATA_com_liferay_journal',
				previewPortletDataHandlerControls: [
					{
						choices: [
							{label: 'Mirror', name: 'mirror'},
							{label: 'Copy', name: 'copy'},
						],
						label: 'Referenced Content Behavior',
						name: 'referencedContentBehavior',
						type: 'Choice',
					},
					{
						label: 'Version History',
						name: 'versionHistory',
						type: 'Boolean',
					},
				],
			},
		],
	},
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

describe('toContentSelection', () => {
	it('selects the portlet data handlers present in the parameters', () => {
		expect(
			toContentSelection(PREVIEW_PORTLET_DATA_HANDLER_SECTIONS, {
				PORTLET_DATA_com_liferay_journal: ['true'],
				referencedContentBehavior: ['copy'],
				versionHistory: ['true'],
			})
		).toEqual({
			'category.content': {
				PORTLET_DATA_com_liferay_journal: {
					referencedContentBehavior: 'copy',
					versionHistory: true,
				},
			},
		});
	});

	it('maps the layout set parameters to a layout set selection', () => {
		expect(
			toContentSelection(PREVIEW_PORTLET_DATA_HANDLER_SECTIONS, {
				_layout_set_items: ['page-1-erc', 'page-2-erc'],
				_layout_set_pages: ['true'],
				_layout_set_visibility: ['private-pages'],
				[PORTLET_DATA_KEY_LAYOUT_SET_LAYOUTS]: ['true'],
			})
		).toEqual({
			'category.site_administration.build': {
				[PORTLET_DATA_KEY_LAYOUT_SET_LAYOUTS]: {
					items: ['page-1-erc', 'page-2-erc'],
					privateLayout: true,
				},
			},
		});

		expect(
			toContentSelection(PREVIEW_PORTLET_DATA_HANDLER_SECTIONS, {
				_layout_set_all: ['true'],
				_layout_set_pages: ['true'],
				[PORTLET_DATA_KEY_LAYOUT_SET_LAYOUTS]: ['true'],
			})
		).toEqual({
			'category.site_administration.build': {
				[PORTLET_DATA_KEY_LAYOUT_SET_LAYOUTS]: {
					all: true,
					privateLayout: false,
				},
			},
		});
	});

	it('keeps the whole tree selected next to the items included by hand', () => {
		expect(
			toContentSelection(PREVIEW_PORTLET_DATA_HANDLER_SECTIONS, {
				'_layout_set_all': ['true'],
				'_layout_set_excluded-subtrees': ['section-erc'],
				'_layout_set_items': ['section-page-erc'],
				'_layout_set_pages': ['true'],
				[PORTLET_DATA_KEY_LAYOUT_SET_LAYOUTS]: ['true'],
			})
		).toEqual({
			'category.site_administration.build': {
				[PORTLET_DATA_KEY_LAYOUT_SET_LAYOUTS]: {
					all: true,
					excludedSubtrees: ['section-erc'],
					items: ['section-page-erc'],
					privateLayout: false,
				},
			},
		});

		expect(
			toContentSelection(PREVIEW_PORTLET_DATA_HANDLER_SECTIONS, {
				_layout_set_pages: ['true'],
				_layout_set_subtrees: ['section-erc'],
				[PORTLET_DATA_KEY_LAYOUT_SET_LAYOUTS]: ['true'],
			})
		).toEqual({
			'category.site_administration.build': {
				[PORTLET_DATA_KEY_LAYOUT_SET_LAYOUTS]: {
					privateLayout: false,
					subtrees: ['section-erc'],
				},
			},
		});
	});

	it('selects the look and feel settings present in the parameters', () => {
		expect(
			toContentSelection(
				PREVIEW_PORTLET_DATA_HANDLER_SECTIONS,
				{
					LAYOUT_SET_PROTOTYPE_SETTINGS: ['false'],
					LAYOUT_SET_SETTINGS: ['true'],
					LOGO: ['false'],
					THEME_REFERENCE: ['true'],
				},
				{lookAndFeelEnabled: true}
			)
		).toEqual({
			'category.site_administration.build': {
				lookAndFeel: {
					sitePagesSettings: true,
					themeSettings: true,
				},
			},
		});
	});

	it('ignores the look and feel settings when they are disabled', () => {
		expect(
			toContentSelection(PREVIEW_PORTLET_DATA_HANDLER_SECTIONS, {
				THEME_REFERENCE: ['true'],
			})
		).toBeUndefined();
	});

	it('selects the comments and ratings present in the parameters', () => {
		expect(
			toContentSelection(
				PREVIEW_PORTLET_DATA_HANDLER_SECTIONS,
				{
					COMMENTS: ['true'],
					PORTLET_DATA_com_liferay_journal: ['true'],
					RATINGS: ['false'],
				},
				{commentsAndRatingsEnabled: true}
			)
		).toEqual({
			'category.content': {
				PORTLET_DATA_com_liferay_journal: {},
				commentsAndRatings: {
					comments: true,
				},
			},
		});
	});

	it('returns undefined when nothing is selected', () => {
		expect(
			toContentSelection(PREVIEW_PORTLET_DATA_HANDLER_SECTIONS, {
				DELETIONS: ['false'],
			})
		).toBeUndefined();
	});
});
