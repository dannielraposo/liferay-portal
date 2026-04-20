/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {ItemExternalReference} from './ItemExternalReference';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* Represents settings related with Open Graph protocol.
	*/
	export class OpenGraphSettings {
			"description_i18n"?: {[key: string]: string;};
			"image"?: ItemExternalReference;
			"imageAlt_i18n"?: {[key: string]: string;};
			"title_i18n"?: {[key: string]: string;};

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
			baseName: "image",
			name: "image",
			type: "ItemExternalReference",
		},
		{
			baseName: "imageAlt_i18n",
			name: "imageAlt_i18n",
			type: "{[key: string]: string;}",
		},
		{
			baseName: "title_i18n",
			name: "title_i18n",
			type: "{[key: string]: string;}",
		},
		];

		static getAttributeTypeMap() {
				return OpenGraphSettings.attributeTypeMap;
		}
	}
