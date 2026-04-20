/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {WidgetInstance} from './WidgetInstance';
			import {WidgetLookAndFeelConfig} from './WidgetLookAndFeelConfig';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A widget instance in a widget page.
	*/
	export class WidgetPageWidgetInstance extends WidgetInstance {
			"externalReferenceCode"?: string;
			"parentSectionId"?: string;
			"parentWidgetInstanceExternalReferenceCode"?: string;
			"position"?: number;
			"type"?: 'BasicWidgetPageWidgetInstance' | 'NestedApplicationsWidgetPageWidgetInstance';
			"widgetLookAndFeelConfig"?: WidgetLookAndFeelConfig;

		static "discriminator": string | undefined = "type";

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "externalReferenceCode",
			name: "externalReferenceCode",
			type: "string",
		},
		{
			baseName: "parentSectionId",
			name: "parentSectionId",
			type: "string",
		},
		{
			baseName: "parentWidgetInstanceExternalReferenceCode",
			name: "parentWidgetInstanceExternalReferenceCode",
			type: "string",
		},
		{
			baseName: "position",
			name: "position",
			type: "number",
		},
		{
			baseName: "type",
			name: "type",
			type: "'BasicWidgetPageWidgetInstance' | 'NestedApplicationsWidgetPageWidgetInstance'",
		},
		{
			baseName: "widgetLookAndFeelConfig",
			name: "widgetLookAndFeelConfig",
			type: "WidgetLookAndFeelConfig",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(WidgetPageWidgetInstance.attributeTypeMap);
		}
	}
