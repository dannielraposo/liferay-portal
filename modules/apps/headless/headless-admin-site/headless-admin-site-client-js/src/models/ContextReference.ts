/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A reference of type context, used in collection display fragments and display page templates.
	*/
	export class ContextReference {
			"contextSource"?: 'CollectionItem' | 'DisplayPageItem';

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "contextSource",
			name: "contextSource",
			type: "'CollectionItem' | 'DisplayPageItem'",
		},
		];

		static getAttributeTypeMap() {
				return ContextReference.attributeTypeMap;
		}
	}
