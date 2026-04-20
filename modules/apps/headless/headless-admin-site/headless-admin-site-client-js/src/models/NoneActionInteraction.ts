/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {ActionInteraction} from './ActionInteraction';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The definition of an action interaction of type none.
	*/
	export class NoneActionInteraction extends ActionInteraction {
			"reload"?: boolean;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "reload",
			name: "reload",
			type: "boolean",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(NoneActionInteraction.attributeTypeMap);
		}
	}
