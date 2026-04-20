/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {BackgroundImageValue} from './BackgroundImageValue';
			import {FragmentLink} from './FragmentLink';
			import {FragmentViewport} from './FragmentViewport';
			import {HtmlProperties} from './HtmlProperties';
			import {Layout} from './Layout';
			import {PageElementDefinition} from './PageElementDefinition';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The page element definition of a container.
	*/
	export class ContainerPageElementDefinition extends PageElementDefinition {
			"backgroundImageValue"?: BackgroundImageValue;
			"contentVisibility"?: 'Auto';
			"cssClasses"?: Array<string>;
			"fragmentLink"?: FragmentLink;
			"fragmentViewports"?: Array<FragmentViewport>;
			"htmlProperties"?: HtmlProperties;
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
			baseName: "contentVisibility",
			name: "contentVisibility",
			type: "'Auto'",
		},
		{
			baseName: "cssClasses",
			name: "cssClasses",
			type: "Array<string>",
		},
		{
			baseName: "fragmentLink",
			name: "fragmentLink",
			type: "FragmentLink",
		},
		{
			baseName: "fragmentViewports",
			name: "fragmentViewports",
			type: "Array<FragmentViewport>",
		},
		{
			baseName: "htmlProperties",
			name: "htmlProperties",
			type: "HtmlProperties",
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
				return super.getAttributeTypeMap().concat(ContainerPageElementDefinition.attributeTypeMap);
		}
	}
