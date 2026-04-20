/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {FragmentEditableElementValue} from './FragmentEditableElementValue';
			import {FragmentLinkTextValue} from './FragmentLinkTextValue';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A fragment editable element of type link.
	*/
	export class LinkFragmentEditableElementValue extends FragmentEditableElementValue {
			"fragmentLinkTextValue"?: FragmentLinkTextValue;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "fragmentLinkTextValue",
			name: "fragmentLinkTextValue",
			type: "FragmentLinkTextValue",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(LinkFragmentEditableElementValue.attributeTypeMap);
		}
	}
