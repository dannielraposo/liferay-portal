/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The page collection's reference.
	*/
	export class CollectionReference {
			"collectionType"?: 'Collection' | 'CollectionProvider' | 'RepeatableFieldsCollectionProvider';

		static "discriminator": string | undefined = "collectionType";

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "collectionType",
			name: "collectionType",
			type: "'Collection' | 'CollectionProvider' | 'RepeatableFieldsCollectionProvider'",
		},
		];

		static getAttributeTypeMap() {
				return CollectionReference.attributeTypeMap;
		}
	}
