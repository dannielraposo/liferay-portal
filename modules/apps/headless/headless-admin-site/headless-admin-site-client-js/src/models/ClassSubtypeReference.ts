/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {ItemExternalReference} from './ItemExternalReference';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A reference specifying the class name and an optional subtype.
	*/
	export class ClassSubtypeReference {
			"className"?: string;
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
			baseName: "subTypeExternalReference",
			name: "subTypeExternalReference",
			type: "ItemExternalReference",
		},
		];

		static getAttributeTypeMap() {
				return ClassSubtypeReference.attributeTypeMap;
		}
	}
