/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {FragmentEditableElementValue} from './FragmentEditableElementValue';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A fragment editable element.
	*/
	export class FragmentEditableElement {
			"fragmentEditableElementValue"?: FragmentEditableElementValue;
			"id"?: string;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "fragmentEditableElementValue",
			name: "fragmentEditableElementValue",
			type: "FragmentEditableElementValue",
		},
		{
			baseName: "id",
			name: "id",
			type: "string",
		},
		];

		static getAttributeTypeMap() {
				return FragmentEditableElement.attributeTypeMap;
		}
	}
