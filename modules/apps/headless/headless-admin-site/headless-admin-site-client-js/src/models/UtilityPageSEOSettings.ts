/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* Settings related with SEO of a utility page.
	*/
	export class UtilityPageSEOSettings {
			"description_i18n"?: {[key: string]: string;};
			"htmlTitle_i18n"?: {[key: string]: string;};

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
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
		];

		static getAttributeTypeMap() {
				return UtilityPageSEOSettings.attributeTypeMap;
		}
	}
