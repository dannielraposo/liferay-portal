/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* Represents the common navigation settings that can apply to a site page or to a widget page template.
	*/
	export class NavigationSettings {
			"target"?: string;
			"targetType"?: 'SpecificFrame' | 'NewTab';

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "target",
			name: "target",
			type: "string",
		},
		{
			baseName: "targetType",
			name: "targetType",
			type: "'SpecificFrame' | 'NewTab'",
		},
		];

		static getAttributeTypeMap() {
				return NavigationSettings.attributeTypeMap;
		}
	}
