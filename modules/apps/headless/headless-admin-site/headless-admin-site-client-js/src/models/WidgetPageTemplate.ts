/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {PageTemplate} from './PageTemplate';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A widget page template.
	*/
	export class WidgetPageTemplate extends PageTemplate {
			"active"?: boolean;
			"description_i18n"?: {[key: string]: string;};
			"friendlyUrlPath_i18n"?: {[key: string]: string;};
			"hiddenFromNavigation"?: boolean;
			"name_i18n"?: {[key: string]: string;};

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "active",
			name: "active",
			type: "boolean",
		},
		{
			baseName: "description_i18n",
			name: "description_i18n",
			type: "{[key: string]: string;}",
		},
		{
			baseName: "friendlyUrlPath_i18n",
			name: "friendlyUrlPath_i18n",
			type: "{[key: string]: string;}",
		},
		{
			baseName: "hiddenFromNavigation",
			name: "hiddenFromNavigation",
			type: "boolean",
		},
		{
			baseName: "name_i18n",
			name: "name_i18n",
			type: "{[key: string]: string;}",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(WidgetPageTemplate.attributeTypeMap);
		}
	}
