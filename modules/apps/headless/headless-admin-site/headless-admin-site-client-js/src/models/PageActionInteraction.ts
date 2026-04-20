/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {ActionInteraction} from './ActionInteraction';
			import {ItemExternalReference} from './ItemExternalReference';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The definition of an action interaction of type page.
	*/
	export class PageActionInteraction extends ActionInteraction {
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
				return super.getAttributeTypeMap().concat(PageActionInteraction.attributeTypeMap);
		}
	}
