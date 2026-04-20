/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {FragmentImageValue} from './FragmentImageValue';
			import {FragmentMappedValue} from './FragmentMappedValue';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A mapped fragment image value.
	*/
	export class MappedFragmentImageValue extends FragmentImageValue {
			"fragmentMappedValue"?: FragmentMappedValue;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "fragmentMappedValue",
			name: "fragmentMappedValue",
			type: "FragmentMappedValue",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(MappedFragmentImageValue.attributeTypeMap);
		}
	}
