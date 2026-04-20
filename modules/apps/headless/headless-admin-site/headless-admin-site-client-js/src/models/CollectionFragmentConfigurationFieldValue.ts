/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {CollectionReference} from './CollectionReference';
			import {FragmentConfigurationFieldValue} from './FragmentConfigurationFieldValue';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The value of a fragment configuration field of type collection.
	*/
	export class CollectionFragmentConfigurationFieldValue extends FragmentConfigurationFieldValue {
			"value"?: CollectionReference;
			"value_i18n"?: {[key: string]: CollectionReference;};

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "value",
			name: "value",
			type: "CollectionReference",
		},
		{
			baseName: "value_i18n",
			name: "value_i18n",
			type: "{[key: string]: CollectionReference;}",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(CollectionFragmentConfigurationFieldValue.attributeTypeMap);
		}
	}
