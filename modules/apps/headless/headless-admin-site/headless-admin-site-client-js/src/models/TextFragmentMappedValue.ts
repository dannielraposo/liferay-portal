/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {FragmentMappedValue} from './FragmentMappedValue';
			import {TextFragmentValue} from './TextFragmentValue';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A mapped value of a fragment text element.
	*/
	export class TextFragmentMappedValue extends TextFragmentValue {
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
				return super.getAttributeTypeMap().concat(TextFragmentMappedValue.attributeTypeMap);
		}
	}
