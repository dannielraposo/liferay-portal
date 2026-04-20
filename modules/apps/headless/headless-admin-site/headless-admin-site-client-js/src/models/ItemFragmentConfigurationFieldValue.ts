/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {FragmentConfigurationFieldValue} from './FragmentConfigurationFieldValue';
			import {ItemValue} from './ItemValue';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The value of a fragment configuration field of type item.
	*/
	export class ItemFragmentConfigurationFieldValue extends FragmentConfigurationFieldValue {
			"value"?: ItemValue;
			"value_i18n"?: {[key: string]: ItemValue;};

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "value",
			name: "value",
			type: "ItemValue",
		},
		{
			baseName: "value_i18n",
			name: "value_i18n",
			type: "{[key: string]: ItemValue;}",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(ItemFragmentConfigurationFieldValue.attributeTypeMap);
		}
	}
