/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {ImageValue} from './ImageValue';
			import {ItemExternalReference} from './ItemExternalReference';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A item image value.
	*/
	export class ItemImageValue extends ImageValue {
			"itemExternalReference"?: ItemExternalReference;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "itemExternalReference",
			name: "itemExternalReference",
			type: "ItemExternalReference",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(ItemImageValue.attributeTypeMap);
		}
	}
