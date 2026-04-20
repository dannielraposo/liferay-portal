/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {CollectionDisplayListStyle} from './CollectionDisplayListStyle';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The collection display's list style.
	*/
	export class ListStyle extends CollectionDisplayListStyle {
			"listStyleDefinition"?: object;
			"listStyleType"?: 'Grid' | 'FlexColumn' | 'FlexRow';

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "listStyleDefinition",
			name: "listStyleDefinition",
			type: "object",
		},
		{
			baseName: "listStyleType",
			name: "listStyleType",
			type: "'Grid' | 'FlexColumn' | 'FlexRow'",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(ListStyle.attributeTypeMap);
		}
	}
