/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {FragmentEditableElementValue} from './FragmentEditableElementValue';
			import {HTMLFragmentValue} from './HTMLFragmentValue';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A fragment editable element value of type HTML.
	*/
	export class HTMLFragmentEditableElementValue extends FragmentEditableElementValue {
			"htmlFragmentValue"?: HTMLFragmentValue;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "htmlFragmentValue",
			name: "htmlFragmentValue",
			type: "HTMLFragmentValue",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(HTMLFragmentEditableElementValue.attributeTypeMap);
		}
	}
