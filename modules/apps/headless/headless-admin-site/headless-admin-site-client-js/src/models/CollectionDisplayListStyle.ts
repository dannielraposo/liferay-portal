/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The collection display's list style.
	*/
	export class CollectionDisplayListStyle {
			"collectionDisplayListStyleType"?: 'ListStyle' | 'Template';

		static "discriminator": string | undefined = "collectionDisplayListStyleType";

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "collectionDisplayListStyleType",
			name: "collectionDisplayListStyleType",
			type: "'ListStyle' | 'Template'",
		},
		];

		static getAttributeTypeMap() {
				return CollectionDisplayListStyle.attributeTypeMap;
		}
	}
