/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {FragmentEditableElementValue} from './FragmentEditableElementValue';
			import {FragmentEditableElementValueFragmentLink} from './FragmentEditableElementValueFragmentLink';
			import {FragmentImage} from './FragmentImage';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A fragment editable element value of type image.
	*/
	export class ImageFragmentEditableElementValue extends FragmentEditableElementValue {
			"fragmentEditableElementValueFragmentLink"?: FragmentEditableElementValueFragmentLink;
			"fragmentImage"?: FragmentImage;

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
			baseName: "fragmentImage",
			name: "fragmentImage",
			type: "FragmentImage",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(ImageFragmentEditableElementValue.attributeTypeMap);
		}
	}
