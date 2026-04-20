/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {NavigationSettings} from './NavigationSettings';
			import {PageTemplateSettings} from './PageTemplateSettings';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The settings of a widget page template.
	*/
	export class WidgetPageTemplateSettings extends PageTemplateSettings {
			"layoutTemplateId"?: string;
			"navigationSettings"?: NavigationSettings;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "layoutTemplateId",
			name: "layoutTemplateId",
			type: "string",
		},
		{
			baseName: "navigationSettings",
			name: "navigationSettings",
			type: "NavigationSettings",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(WidgetPageTemplateSettings.attributeTypeMap);
		}
	}
