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
	* A unique reference to a collection which remains constant across environments.
	*/
	export class CollectionItemExternalReference extends CollectionReference {

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(CollectionItemExternalReference.attributeTypeMap);
		}
	}
