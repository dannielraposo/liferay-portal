/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {BasicLayout} from './BasicLayout';

/**
 * @author Rubén Pulido
 * @generated
 */

	export class Layout extends BasicLayout {
			"contentDisplay"?: 'Block' | 'FlexColumn' | 'FlexRow';
			"widthType"?: 'Fixed' | 'Fluid';

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "contentDisplay",
			name: "contentDisplay",
			type: "'Block' | 'FlexColumn' | 'FlexRow'",
		},
		{
			baseName: "widthType",
			name: "widthType",
			type: "'Fixed' | 'Fluid'",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(Layout.attributeTypeMap);
		}
	}
