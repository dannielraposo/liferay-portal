/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {PORTLET_DATA_KEY_LAYOUT_SET_LAYOUTS} from '../../../../src/main/resources/META-INF/resources/revamp/js/utils/contentSelection';
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
			{
				label: 'Blogs',
				name: 'PORTLET_DATA_com_liferay_blogs_web_portlet_BlogsPortlet',
			},
		],
	},
] as PreviewPortletDataHandlerSection[];

describe('toRequestPortletDataHandlers', () => {
	it('leaves the pages out of the portlet data handlers', () => {
		expect(
			toRequestPortletDataHandlers(
				PREVIEW_PORTLET_DATA_HANDLER_SECTIONS,
				{
					'category.site_administration.build': {
						[PORTLET_DATA_KEY_LAYOUT_SET_LAYOUTS]: {
							all: true,
							privateLayout: false,
						},
						PORTLET_DATA_com_liferay_blogs_web_portlet_BlogsPortlet:
							true,
					},
				}
			)
		).toEqual([
			{name: 'PORTLET_DATA_com_liferay_blogs_web_portlet_BlogsPortlet'},
		]);
	});
});
