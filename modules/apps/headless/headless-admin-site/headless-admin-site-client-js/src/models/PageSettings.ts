/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {SitePageNavigationSettings} from './SitePageNavigationSettings';

/**
 * @author Rubén Pulido
 * @generated
 */

	export class PageSettings {
			"hiddenFromNavigation"?: boolean;
			"navigationSettings"?: SitePageNavigationSettings;
			"priority"?: number;
			"type"?: 'ContentPageSettings' | 'EmbeddedPageSettings' | 'LinkToPagePageSettings' | 'LinkToURLPageSettings' | 'PageSetPageSettings' | 'WidgetPageSettings';

		static "discriminator": string | undefined = "type";

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "hiddenFromNavigation",
			name: "hiddenFromNavigation",
			type: "boolean",
		},
		{
			baseName: "navigationSettings",
			name: "navigationSettings",
			type: "SitePageNavigationSettings",
		},
		{
			baseName: "priority",
			name: "priority",
			type: "number",
		},
		{
			baseName: "type",
			name: "type",
			type: "'ContentPageSettings' | 'EmbeddedPageSettings' | 'LinkToPagePageSettings' | 'LinkToURLPageSettings' | 'PageSetPageSettings' | 'WidgetPageSettings'",
		},
		];

		static getAttributeTypeMap() {
				return PageSettings.attributeTypeMap;
		}
	}
