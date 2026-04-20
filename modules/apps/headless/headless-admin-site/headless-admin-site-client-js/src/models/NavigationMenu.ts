/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {Creator} from './Creator';
			import {NavigationMenuItem} from './NavigationMenuItem';
			import {Permission} from './Permission';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* Represents a navigation menu.
	*/
	export class NavigationMenu {
			"actions"?: {[key: string]: {[key: string]: string;};};
			"auto"?: boolean;
			"creator"?: Creator;
			"dateCreated"?: Date;
			"dateModified"?: Date;
			"externalReferenceCode"?: string;
			"id"?: number;
			"name"?: string;
			"navigationMenuItems"?: Array<NavigationMenuItem>;
			"navigationType"?: 'Primary' | 'Secondary' | 'Social';
			"permissions"?: Array<Permission>;
			"siteExternalReferenceCode"?: string;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "actions",
			name: "actions",
			type: "{[key: string]: {[key: string]: string;};}",
		},
		{
			baseName: "auto",
			name: "auto",
			type: "boolean",
		},
		{
			baseName: "creator",
			name: "creator",
			type: "Creator",
		},
		{
			baseName: "dateCreated",
			name: "dateCreated",
			type: "Date",
		},
		{
			baseName: "dateModified",
			name: "dateModified",
			type: "Date",
		},
		{
			baseName: "externalReferenceCode",
			name: "externalReferenceCode",
			type: "string",
		},
		{
			baseName: "id",
			name: "id",
			type: "number",
		},
		{
			baseName: "name",
			name: "name",
			type: "string",
		},
		{
			baseName: "navigationMenuItems",
			name: "navigationMenuItems",
			type: "Array<NavigationMenuItem>",
		},
		{
			baseName: "navigationType",
			name: "navigationType",
			type: "'Primary' | 'Secondary' | 'Social'",
		},
		{
			baseName: "permissions",
			name: "permissions",
			type: "Array<Permission>",
		},
		{
			baseName: "siteExternalReferenceCode",
			name: "siteExternalReferenceCode",
			type: "string",
		},
		];

		static getAttributeTypeMap() {
				return NavigationMenu.attributeTypeMap;
		}
	}
