/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	export class BasicLayout {
			"align"?: 'Baseline' | 'Center' | 'End' | 'None' | 'Start' | 'Stretch';
			"flexWrap"?: 'NoWrap' | 'Wrap' | 'WrapReverse';
			"justify"?: 'Center' | 'End' | 'None' | 'SpaceAround' | 'SpaceBetween' | 'Start';

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "align",
			name: "align",
			type: "'Baseline' | 'Center' | 'End' | 'None' | 'Start' | 'Stretch'",
		},
		{
			baseName: "flexWrap",
			name: "flexWrap",
			type: "'NoWrap' | 'Wrap' | 'WrapReverse'",
		},
		{
			baseName: "justify",
			name: "justify",
			type: "'Center' | 'End' | 'None' | 'SpaceAround' | 'SpaceBetween' | 'Start'",
		},
		];

		static getAttributeTypeMap() {
				return BasicLayout.attributeTypeMap;
		}
	}
