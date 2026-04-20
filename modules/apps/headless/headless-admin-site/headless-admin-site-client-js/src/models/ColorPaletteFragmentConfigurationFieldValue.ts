/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {ColorPaletteValue} from './ColorPaletteValue';
			import {FragmentConfigurationFieldValue} from './FragmentConfigurationFieldValue';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The value of a fragment configuration field of type color palette.
	*/
	export class ColorPaletteFragmentConfigurationFieldValue extends FragmentConfigurationFieldValue {
			"value"?: ColorPaletteValue;
			"value_i18n"?: {[key: string]: ColorPaletteValue;};

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "value",
			name: "value",
			type: "ColorPaletteValue",
		},
		{
			baseName: "value_i18n",
			name: "value_i18n",
			type: "{[key: string]: ColorPaletteValue;}",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(ColorPaletteFragmentConfigurationFieldValue.attributeTypeMap);
		}
	}
