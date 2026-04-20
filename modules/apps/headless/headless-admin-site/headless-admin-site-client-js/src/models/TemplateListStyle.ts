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
	* The collection display's template list style.
	*/
	export class TemplateListStyle extends CollectionDisplayListStyle {
			"listItemStyleClassName"?: string;
			"listStyleClassName"?: string;
			"templateKey"?: string;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "listItemStyleClassName",
			name: "listItemStyleClassName",
			type: "string",
		},
		{
			baseName: "listStyleClassName",
			name: "listStyleClassName",
			type: "string",
		},
		{
			baseName: "templateKey",
			name: "templateKey",
			type: "string",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(TemplateListStyle.attributeTypeMap);
		}
	}
