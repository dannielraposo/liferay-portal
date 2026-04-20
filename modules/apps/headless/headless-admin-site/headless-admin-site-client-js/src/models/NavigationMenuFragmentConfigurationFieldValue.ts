/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {FragmentConfigurationFieldValue} from './FragmentConfigurationFieldValue';
			import {NavigationMenuValue} from './NavigationMenuValue';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The value of a fragment configuration field of type navigation menu.
	*/
	export class NavigationMenuFragmentConfigurationFieldValue extends FragmentConfigurationFieldValue {
			"value"?: NavigationMenuValue;
			"value_i18n"?: {[key: string]: NavigationMenuValue;};

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "value",
			name: "value",
			type: "NavigationMenuValue",
		},
		{
			baseName: "value_i18n",
			name: "value_i18n",
			type: "{[key: string]: NavigationMenuValue;}",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(NavigationMenuFragmentConfigurationFieldValue.attributeTypeMap);
		}
	}
