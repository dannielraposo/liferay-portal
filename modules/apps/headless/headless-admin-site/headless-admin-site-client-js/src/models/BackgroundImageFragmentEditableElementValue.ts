/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {FragmentEditableElementValue} from './FragmentEditableElementValue';
			import {FragmentImageValue} from './FragmentImageValue';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A fragment editable element value of type background image.
	*/
	export class BackgroundImageFragmentEditableElementValue extends FragmentEditableElementValue {
			"backgroundFragmentImageValue"?: FragmentImageValue;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "backgroundFragmentImageValue",
			name: "backgroundFragmentImageValue",
			type: "FragmentImageValue",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(BackgroundImageFragmentEditableElementValue.attributeTypeMap);
		}
	}
