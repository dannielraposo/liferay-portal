/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {CollectionReference} from './CollectionReference';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A reference specifying the class name.
	*/
	export class ClassNameReference extends CollectionReference {
			"className"?: string;

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
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(ClassNameReference.attributeTypeMap);
		}
	}
