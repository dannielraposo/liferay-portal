/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {FragmentInlineValue} from './FragmentInlineValue';
			import {HTMLFragmentValue} from './HTMLFragmentValue';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* An inline value of a fragment HTML element.
	*/
	export class HTMLFragmentInlineValue extends HTMLFragmentValue {
			"fragmentInlineValue"?: FragmentInlineValue;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "fragmentInlineValue",
			name: "fragmentInlineValue",
			type: "FragmentInlineValue",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(HTMLFragmentInlineValue.attributeTypeMap);
		}
	}
