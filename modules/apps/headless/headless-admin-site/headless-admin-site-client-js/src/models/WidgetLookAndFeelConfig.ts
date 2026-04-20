/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A widget instance's look and feel configuration.
	*/
	export class WidgetLookAndFeelConfig {
			"advancedStylingConfig"?: object;
			"backgroundStylesConfig"?: object;
			"borderStylesConfig"?: object;
			"generalConfig"?: object;
			"marginAndPaddingConfig"?: object;
			"textStylesConfig"?: object;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "advancedStylingConfig",
			name: "advancedStylingConfig",
			type: "object",
		},
		{
			baseName: "backgroundStylesConfig",
			name: "backgroundStylesConfig",
			type: "object",
		},
		{
			baseName: "borderStylesConfig",
			name: "borderStylesConfig",
			type: "object",
		},
		{
			baseName: "generalConfig",
			name: "generalConfig",
			type: "object",
		},
		{
			baseName: "marginAndPaddingConfig",
			name: "marginAndPaddingConfig",
			type: "object",
		},
		{
			baseName: "textStylesConfig",
			name: "textStylesConfig",
			type: "object",
		},
		];

		static getAttributeTypeMap() {
				return WidgetLookAndFeelConfig.attributeTypeMap;
		}
	}
