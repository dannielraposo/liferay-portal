/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* Type-specific settings for a "Page" navigation menu item type.
	*/
	export class PageNavigationMenuItemSettings {
			"externalReferenceCode"?: string;
			"privatePage"?: boolean;
			"title"?: string;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "externalReferenceCode",
			name: "externalReferenceCode",
			type: "string",
		},
		{
			baseName: "privatePage",
			name: "privatePage",
			type: "boolean",
		},
		{
			baseName: "title",
			name: "title",
			type: "string",
		},
		];

		static getAttributeTypeMap() {
				return PageNavigationMenuItemSettings.attributeTypeMap;
		}
	}
