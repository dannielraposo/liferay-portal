/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {FragmentEditableElementValueFragmentLink} from './FragmentEditableElementValueFragmentLink';
			import {TextFragmentValue} from './TextFragmentValue';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The link text value for an editable fragment field.
	*/
	export class FragmentLinkTextValue {
			"fragmentEditableElementValueFragmentLink"?: FragmentEditableElementValueFragmentLink;
			"textFragmentValue"?: TextFragmentValue;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "fragmentEditableElementValueFragmentLink",
			name: "fragmentEditableElementValueFragmentLink",
			type: "FragmentEditableElementValueFragmentLink",
		},
		{
			baseName: "textFragmentValue",
			name: "textFragmentValue",
			type: "TextFragmentValue",
		},
		];

		static getAttributeTypeMap() {
				return FragmentLinkTextValue.attributeTypeMap;
		}
	}
