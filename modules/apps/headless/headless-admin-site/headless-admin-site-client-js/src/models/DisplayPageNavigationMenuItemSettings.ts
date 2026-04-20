/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* Type-specific settings for "Blogs Entry", "Document", "Knowledge Base Article", "Product", "Web Content" navigation menu item types.
	*/
	export class DisplayPageNavigationMenuItemSettings {
			"className"?: string;
			"externalReferenceCode"?: string;
			"scopeExternalReferenceCode"?: string;
			"title"?: string;
			"type"?: string;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "className",
			name: "className",
			type: "string",
		},
		{
			baseName: "externalReferenceCode",
			name: "externalReferenceCode",
			type: "string",
		},
		{
			baseName: "scopeExternalReferenceCode",
			name: "scopeExternalReferenceCode",
			type: "string",
		},
		{
			baseName: "title",
			name: "title",
			type: "string",
		},
		{
			baseName: "type",
			name: "type",
			type: "string",
		},
		];

		static getAttributeTypeMap() {
				return DisplayPageNavigationMenuItemSettings.attributeTypeMap;
		}
	}
