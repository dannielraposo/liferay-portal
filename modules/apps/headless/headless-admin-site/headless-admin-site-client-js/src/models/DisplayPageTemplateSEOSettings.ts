/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {SitemapSettings} from './SitemapSettings';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* Settings related with SEO of a display page template.
	*/
	export class DisplayPageTemplateSEOSettings {
			"descriptionTemplate"?: string;
			"htmlTitleTemplate"?: string;
			"robots_i18n"?: {[key: string]: string;};
			"sitemapSettings"?: SitemapSettings;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "descriptionTemplate",
			name: "descriptionTemplate",
			type: "string",
		},
		{
			baseName: "htmlTitleTemplate",
			name: "htmlTitleTemplate",
			type: "string",
		},
		{
			baseName: "robots_i18n",
			name: "robots_i18n",
			type: "{[key: string]: string;}",
		},
		{
			baseName: "sitemapSettings",
			name: "sitemapSettings",
			type: "SitemapSettings",
		},
		];

		static getAttributeTypeMap() {
				return DisplayPageTemplateSEOSettings.attributeTypeMap;
		}
	}
