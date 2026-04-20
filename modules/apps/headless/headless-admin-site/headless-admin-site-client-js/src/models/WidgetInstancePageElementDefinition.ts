/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {BackgroundImageValue} from './BackgroundImageValue';
			import {FragmentViewport} from './FragmentViewport';
			import {PageElementDefinition} from './PageElementDefinition';
			import {WidgetInstance} from './WidgetInstance';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The page element definition of a widget instance.
	*/
	export class WidgetInstancePageElementDefinition extends PageElementDefinition {
			"backgroundImageValue"?: BackgroundImageValue;
			"cssClasses"?: Array<string>;
			"draftWidgetInstanceExternalReferenceCode"?: string;
			"fragmentViewports"?: Array<FragmentViewport>;
			"indexed"?: boolean;
			"name"?: string;
			"widgetInstance"?: WidgetInstance;
			"widgetInstanceExternalReferenceCode"?: string;

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
			baseName: "draftWidgetInstanceExternalReferenceCode",
			name: "draftWidgetInstanceExternalReferenceCode",
			type: "string",
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
			baseName: "name",
			name: "name",
			type: "string",
		},
		{
			baseName: "widgetInstance",
			name: "widgetInstance",
			type: "WidgetInstance",
		},
		{
			baseName: "widgetInstanceExternalReferenceCode",
			name: "widgetInstanceExternalReferenceCode",
			type: "string",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(WidgetInstancePageElementDefinition.attributeTypeMap);
		}
	}
