/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {Creator} from './Creator';
			import {DisplayPageNavigationMenuItemSettings} from './DisplayPageNavigationMenuItemSettings';
			import {PageNavigationMenuItemSettings} from './PageNavigationMenuItemSettings';
			import {SubmenuNavigationMenuItemSettings} from './SubmenuNavigationMenuItemSettings';
			import {URLNavigationMenuItemSettings} from './URLNavigationMenuItemSettings';
			import {VocabularyNavigationMenuItemSettings} from './VocabularyNavigationMenuItemSettings';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* Represents a navigation menu item.
	*/
	export class NavigationMenuItem {
			"availableLanguages"?: Array<string>;
			"creator"?: Creator;
			"customFields"?: Array<any>;
			"dateCreated"?: Date;
			"dateModified"?: Date;
			"defaultLanguageId"?: string;
			"displayIcon"?: string;
			"externalReferenceCode"?: string;
			"id"?: number;
			"name"?: string;
			"name_i18n"?: {[key: string]: string;};
			"navigationMenuItemSettings"?: DisplayPageNavigationMenuItemSettings | PageNavigationMenuItemSettings | SubmenuNavigationMenuItemSettings | URLNavigationMenuItemSettings | VocabularyNavigationMenuItemSettings;
			"navigationMenuItems"?: Array<NavigationMenuItem>;
			"parentNavigationMenuId"?: number;
			"type"?: string;
			"useCustomName"?: boolean;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "availableLanguages",
			name: "availableLanguages",
			type: "Array<string>",
		},
		{
			baseName: "creator",
			name: "creator",
			type: "Creator",
		},
		{
			baseName: "customFields",
			name: "customFields",
			type: "Array<any>",
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
			baseName: "defaultLanguageId",
			name: "defaultLanguageId",
			type: "string",
		},
		{
			baseName: "displayIcon",
			name: "displayIcon",
			type: "string",
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
			baseName: "name_i18n",
			name: "name_i18n",
			type: "{[key: string]: string;}",
		},
		{
			baseName: "navigationMenuItemSettings",
			name: "navigationMenuItemSettings",
			type: "DisplayPageNavigationMenuItemSettings | PageNavigationMenuItemSettings | SubmenuNavigationMenuItemSettings | URLNavigationMenuItemSettings | VocabularyNavigationMenuItemSettings",
		},
		{
			baseName: "navigationMenuItems",
			name: "navigationMenuItems",
			type: "Array<NavigationMenuItem>",
		},
		{
			baseName: "parentNavigationMenuId",
			name: "parentNavigationMenuId",
			type: "number",
		},
		{
			baseName: "type",
			name: "type",
			type: "string",
		},
		{
			baseName: "useCustomName",
			name: "useCustomName",
			type: "boolean",
		},
		];

		static getAttributeTypeMap() {
				return NavigationMenuItem.attributeTypeMap;
		}
	}
