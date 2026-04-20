/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {ClientExtension} from './ClientExtension';
			import {FavIcon} from './FavIcon';
			import {IconImageURL} from './IconImageURL';
			import {ItemExternalReference} from './ItemExternalReference';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* Represents the settings of a page specification.
	*/
	export class Settings {
			"colorSchemeName"?: string;
			"css"?: string;
			"favIcon"?: FavIcon;
			"globalCSSClientExtensions"?: Array<ClientExtension>;
			"globalJSClientExtensions"?: Array<ClientExtension>;
			"iconImageURL"?: IconImageURL;
			"javascript"?: string;
			"masterPageItemExternalReference"?: ItemExternalReference;
			"styleBookItemExternalReference"?: ItemExternalReference;
			"themeCSSClientExtension"?: ClientExtension;
			"themeName"?: string;
			"themeSettings"?: {[key: string]: string;};
			"themeSpritemapClientExtension"?: ClientExtension;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "colorSchemeName",
			name: "colorSchemeName",
			type: "string",
		},
		{
			baseName: "css",
			name: "css",
			type: "string",
		},
		{
			baseName: "favIcon",
			name: "favIcon",
			type: "FavIcon",
		},
		{
			baseName: "globalCSSClientExtensions",
			name: "globalCSSClientExtensions",
			type: "Array<ClientExtension>",
		},
		{
			baseName: "globalJSClientExtensions",
			name: "globalJSClientExtensions",
			type: "Array<ClientExtension>",
		},
		{
			baseName: "iconImageURL",
			name: "iconImageURL",
			type: "IconImageURL",
		},
		{
			baseName: "javascript",
			name: "javascript",
			type: "string",
		},
		{
			baseName: "masterPageItemExternalReference",
			name: "masterPageItemExternalReference",
			type: "ItemExternalReference",
		},
		{
			baseName: "styleBookItemExternalReference",
			name: "styleBookItemExternalReference",
			type: "ItemExternalReference",
		},
		{
			baseName: "themeCSSClientExtension",
			name: "themeCSSClientExtension",
			type: "ClientExtension",
		},
		{
			baseName: "themeName",
			name: "themeName",
			type: "string",
		},
		{
			baseName: "themeSettings",
			name: "themeSettings",
			type: "{[key: string]: string;}",
		},
		{
			baseName: "themeSpritemapClientExtension",
			name: "themeSpritemapClientExtension",
			type: "ClientExtension",
		},
		];

		static getAttributeTypeMap() {
				return Settings.attributeTypeMap;
		}
	}
