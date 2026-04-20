/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {CollectionReference} from './CollectionReference';
			import {ItemExternalReference} from './ItemExternalReference';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A unique reference to a repeatable fields collection which remains constant across environments.
	*/
	export class RepeatableFieldsCollectionProviderReference extends CollectionReference {
			"className"?: string;
			"fieldName"?: string;
			"subTypeExternalReference"?: ItemExternalReference;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "className",
			name: "className",
			type: "string",
		},
		{
			baseName: "fieldName",
			name: "fieldName",
			type: "string",
		},
		{
			baseName: "subTypeExternalReference",
			name: "subTypeExternalReference",
			type: "ItemExternalReference",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(RepeatableFieldsCollectionProviderReference.attributeTypeMap);
		}
	}
