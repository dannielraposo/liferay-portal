/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {FragmentImageValue} from './FragmentImageValue';
			import {ImageValue} from './ImageValue';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A fragment image value of type direct.
	*/
	export class DirectFragmentImageValue extends FragmentImageValue {
			"value_i18n"?: {[key: string]: ImageValue;};

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "value_i18n",
			name: "value_i18n",
			type: "{[key: string]: ImageValue;}",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(DirectFragmentImageValue.attributeTypeMap);
		}
	}
