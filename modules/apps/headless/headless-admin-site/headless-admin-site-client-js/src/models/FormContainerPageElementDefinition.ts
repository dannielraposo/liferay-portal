/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {BackgroundImageValue} from './BackgroundImageValue';
			import {FormContainerConfig} from './FormContainerConfig';
			import {FragmentViewport} from './FragmentViewport';
			import {Layout} from './Layout';
			import {PageElementDefinition} from './PageElementDefinition';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The page element definition of a form.
	*/
	export class FormContainerPageElementDefinition extends PageElementDefinition {
			"backgroundImageValue"?: BackgroundImageValue;
			"cssClasses"?: Array<string>;
			"formContainerConfig"?: FormContainerConfig;
			"fragmentViewports"?: Array<FragmentViewport>;
			"indexed"?: boolean;
			"layout"?: Layout;
			"name"?: string;

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
			baseName: "formContainerConfig",
			name: "formContainerConfig",
			type: "FormContainerConfig",
		},
		{
			baseName: "fragmentViewports",
			name: "fragmentViewports",
			type: "Array<FragmentViewport>",
		},
		{
			baseName: "indexed",
			name: "indexed",
			type: "boolean",
		},
		{
			baseName: "layout",
			name: "layout",
			type: "Layout",
		},
		{
			baseName: "name",
			name: "name",
			type: "string",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(FormContainerPageElementDefinition.attributeTypeMap);
		}
	}
