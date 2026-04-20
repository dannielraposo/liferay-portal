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
	* Settings related with SEO.
	*/
	export class SEOSettings {
			"customCanonicalURL_i18n"?: {[key: string]: string;};
			"description_i18n"?: {[key: string]: string;};
			"htmlTitle_i18n"?: {[key: string]: string;};
			"robots_i18n"?: {[key: string]: string;};
			"seoKeywords_i18n"?: {[key: string]: string;};
			"sitemapSettings"?: SitemapSettings;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "customCanonicalURL_i18n",
			name: "customCanonicalURL_i18n",
			type: "{[key: string]: string;}",
		},
		{
			baseName: "description_i18n",
			name: "description_i18n",
			type: "{[key: string]: string;}",
		},
		{
			baseName: "htmlTitle_i18n",
			name: "htmlTitle_i18n",
			type: "{[key: string]: string;}",
		},
		{
			baseName: "robots_i18n",
			name: "robots_i18n",
			type: "{[key: string]: string;}",
		},
		{
			baseName: "seoKeywords_i18n",
			name: "seoKeywords_i18n",
			type: "{[key: string]: string;}",
		},
		{
			baseName: "sitemapSettings",
			name: "sitemapSettings",
			type: "SitemapSettings",
		},
		];

		static getAttributeTypeMap() {
				return SEOSettings.attributeTypeMap;
		}
	}
