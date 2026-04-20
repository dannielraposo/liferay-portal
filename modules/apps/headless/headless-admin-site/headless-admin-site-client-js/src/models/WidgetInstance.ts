/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A widget instance, containing the common properties of both a content page widget instance and a widget page widget instance.
	*/
	export class WidgetInstance {
			"widgetConfig"?: {[key: string]: object;};
			"widgetInstanceId"?: string;
			"widgetName"?: string;
			"widgetPermissions"?: Array<object>;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "widgetConfig",
			name: "widgetConfig",
			type: "{[key: string]: object;}",
		},
		{
			baseName: "widgetInstanceId",
			name: "widgetInstanceId",
			type: "string",
		},
		{
			baseName: "widgetName",
			name: "widgetName",
			type: "string",
		},
		{
			baseName: "widgetPermissions",
			name: "widgetPermissions",
			type: "Array<object>",
		},
		];

		static getAttributeTypeMap() {
				return WidgetInstance.attributeTypeMap;
		}
	}
