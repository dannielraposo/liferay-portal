/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* Type-specific settings for a "URL" navigation menu item type.
	*/
	export class URLNavigationMenuItemSettings {
			"url"?: string;
			"useNewTab"?: boolean;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "url",
			name: "url",
			type: "string",
		},
		{
			baseName: "useNewTab",
			name: "useNewTab",
			type: "boolean",
		},
		];

		static getAttributeTypeMap() {
				return URLNavigationMenuItemSettings.attributeTypeMap;
		}
	}
