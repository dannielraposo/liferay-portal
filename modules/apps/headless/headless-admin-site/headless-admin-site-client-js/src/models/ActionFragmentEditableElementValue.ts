/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {ActionInteraction} from './ActionInteraction';
			import {FragmentEditableElementValue} from './FragmentEditableElementValue';
			import {FragmentMappedValue} from './FragmentMappedValue';
			import {TextFragmentValue} from './TextFragmentValue';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A fragment editable element value of type action.
	*/
	export class ActionFragmentEditableElementValue extends FragmentEditableElementValue {
			"errorActionInteraction"?: ActionInteraction;
			"fragmentMappedValue"?: FragmentMappedValue;
			"successActionInteraction"?: ActionInteraction;
			"textFragmentValue"?: TextFragmentValue;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "errorActionInteraction",
			name: "errorActionInteraction",
			type: "ActionInteraction",
		},
		{
			baseName: "fragmentMappedValue",
			name: "fragmentMappedValue",
			type: "FragmentMappedValue",
		},
		{
			baseName: "successActionInteraction",
			name: "successActionInteraction",
			type: "ActionInteraction",
		},
		{
			baseName: "textFragmentValue",
			name: "textFragmentValue",
			type: "TextFragmentValue",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(ActionFragmentEditableElementValue.attributeTypeMap);
		}
	}
