/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {WidgetPageWidgetInstance} from './WidgetPageWidgetInstance';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A section within a Nested Applications widget instance.
	*/
	export class NestedWidgetSection {
			"id"?: string;
			"widgetPageWidgetInstances"?: Array<WidgetPageWidgetInstance>;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "id",
			name: "id",
			type: "string",
		},
		{
			baseName: "widgetPageWidgetInstances",
			name: "widgetPageWidgetInstances",
			type: "Array<WidgetPageWidgetInstance>",
		},
		];

		static getAttributeTypeMap() {
				return NestedWidgetSection.attributeTypeMap;
		}
	}
