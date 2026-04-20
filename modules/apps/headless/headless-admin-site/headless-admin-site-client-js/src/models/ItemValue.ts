/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {ItemExternalReference} from './ItemExternalReference';
			import {TemplateReference} from './TemplateReference';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A value of a field of type item.
	*/
	export class ItemValue {
			"itemExternalReference"?: ItemExternalReference;
			"templateReference"?: TemplateReference;

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
		{
			baseName: "templateReference",
			name: "templateReference",
			type: "TemplateReference",
		},
		];

		static getAttributeTypeMap() {
				return ItemValue.attributeTypeMap;
		}
	}
