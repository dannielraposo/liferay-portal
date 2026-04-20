/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The value of a field of type color palette.
	*/
	export class ColorPaletteValue {
			"color"?: string;
			"cssClass"?: string;
			"rgbValue"?: string;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "color",
			name: "color",
			type: "string",
		},
		{
			baseName: "cssClass",
			name: "cssClass",
			type: "string",
		},
		{
			baseName: "rgbValue",
			name: "rgbValue",
			type: "string",
		},
		];

		static getAttributeTypeMap() {
				return ColorPaletteValue.attributeTypeMap;
		}
	}
