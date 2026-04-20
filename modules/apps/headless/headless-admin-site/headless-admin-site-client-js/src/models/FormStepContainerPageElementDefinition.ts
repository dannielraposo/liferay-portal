/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {BackgroundImageValue} from './BackgroundImageValue';
			import {FragmentViewport} from './FragmentViewport';
			import {PageElementDefinition} from './PageElementDefinition';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The page element definition of a form step container.
	*/
	export class FormStepContainerPageElementDefinition extends PageElementDefinition {
			"backgroundImageValue"?: BackgroundImageValue;
			"cssClasses"?: Array<string>;
			"fragmentViewports"?: Array<FragmentViewport>;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "backgroundImageValue",
			name: "backgroundImageValue",
			type: "BackgroundImageValue",
		},
		{
			baseName: "cssClasses",
			name: "cssClasses",
			type: "Array<string>",
		},
		{
			baseName: "fragmentViewports",
			name: "fragmentViewports",
			type: "Array<FragmentViewport>",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(FormStepContainerPageElementDefinition.attributeTypeMap);
		}
	}
