/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {BackgroundImageValue} from './BackgroundImageValue';
			import {FragmentConfigurationFieldValue} from './FragmentConfigurationFieldValue';
			import {FragmentEditableElement} from './FragmentEditableElement';
			import {FragmentReference} from './FragmentReference';
			import {FragmentViewport} from './FragmentViewport';
			import {WidgetInstance} from './WidgetInstance';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A fragment instance.
	*/
	export class FragmentInstance {
			"backgroundImageValue"?: BackgroundImageValue;
			"configuration"?: string;
			"css"?: string;
			"cssClasses"?: Array<string>;
			"datePropagated"?: Date;
			"draftFragmentInstanceExternalReferenceCode"?: string;
			"fragmentConfigurationFieldValues"?: {[key: string]: FragmentConfigurationFieldValue;};
			"fragmentEditableElements"?: Array<FragmentEditableElement>;
			"fragmentInstanceExternalReferenceCode"?: string;
			"fragmentReference"?: FragmentReference;
			"fragmentViewports"?: Array<FragmentViewport>;
			"html"?: string;
			"indexed"?: boolean;
			"js"?: string;
			"name"?: string;
			"namespace"?: string;
			"uuid"?: string;
			"widgetInstances"?: Array<WidgetInstance>;

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
			baseName: "configuration",
			name: "configuration",
			type: "string",
		},
		{
			baseName: "css",
			name: "css",
			type: "string",
		},
		{
			baseName: "cssClasses",
			name: "cssClasses",
			type: "Array<string>",
		},
		{
			baseName: "datePropagated",
			name: "datePropagated",
			type: "Date",
		},
		{
			baseName: "draftFragmentInstanceExternalReferenceCode",
			name: "draftFragmentInstanceExternalReferenceCode",
			type: "string",
		},
		{
			baseName: "fragmentConfigurationFieldValues",
			name: "fragmentConfigurationFieldValues",
			type: "{[key: string]: FragmentConfigurationFieldValue;}",
		},
		{
			baseName: "fragmentEditableElements",
			name: "fragmentEditableElements",
			type: "Array<FragmentEditableElement>",
		},
		{
			baseName: "fragmentInstanceExternalReferenceCode",
			name: "fragmentInstanceExternalReferenceCode",
			type: "string",
		},
		{
			baseName: "fragmentReference",
			name: "fragmentReference",
			type: "FragmentReference",
		},
		{
			baseName: "fragmentViewports",
			name: "fragmentViewports",
			type: "Array<FragmentViewport>",
		},
		{
			baseName: "html",
			name: "html",
			type: "string",
		},
		{
			baseName: "indexed",
			name: "indexed",
			type: "boolean",
		},
		{
			baseName: "js",
			name: "js",
			type: "string",
		},
		{
			baseName: "name",
			name: "name",
			type: "string",
		},
		{
			baseName: "namespace",
			name: "namespace",
			type: "string",
		},
		{
			baseName: "uuid",
			name: "uuid",
			type: "string",
		},
		{
			baseName: "widgetInstances",
			name: "widgetInstances",
			type: "Array<WidgetInstance>",
		},
		];

		static getAttributeTypeMap() {
				return FragmentInstance.attributeTypeMap;
		}
	}
