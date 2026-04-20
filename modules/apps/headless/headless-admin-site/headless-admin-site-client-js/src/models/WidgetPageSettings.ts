/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {CustomMetaTag} from './CustomMetaTag';
			import {ItemExternalReference} from './ItemExternalReference';
			import {OpenGraphSettings} from './OpenGraphSettings';
			import {PageSettings} from './PageSettings';
			import {SEOSettings} from './SEOSettings';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The settings of a widget page.
	*/
	export class WidgetPageSettings extends PageSettings {
			"customMetaTags"?: Array<CustomMetaTag>;
			"customizable"?: boolean;
			"customizableSectionIds"?: Array<string>;
			"inheritChanges"?: boolean;
			"layoutTemplateId"?: string;
			"openGraphSettings"?: OpenGraphSettings;
			"seoSettings"?: SEOSettings;
			"widgetPageTemplateReference"?: ItemExternalReference;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "customMetaTags",
			name: "customMetaTags",
			type: "Array<CustomMetaTag>",
		},
		{
			baseName: "customizable",
			name: "customizable",
			type: "boolean",
		},
		{
			baseName: "customizableSectionIds",
			name: "customizableSectionIds",
			type: "Array<string>",
		},
		{
			baseName: "inheritChanges",
			name: "inheritChanges",
			type: "boolean",
		},
		{
			baseName: "layoutTemplateId",
			name: "layoutTemplateId",
			type: "string",
		},
		{
			baseName: "openGraphSettings",
			name: "openGraphSettings",
			type: "OpenGraphSettings",
		},
		{
			baseName: "seoSettings",
			name: "seoSettings",
			type: "SEOSettings",
		},
		{
			baseName: "widgetPageTemplateReference",
			name: "widgetPageTemplateReference",
			type: "ItemExternalReference",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(WidgetPageSettings.attributeTypeMap);
		}
	}
