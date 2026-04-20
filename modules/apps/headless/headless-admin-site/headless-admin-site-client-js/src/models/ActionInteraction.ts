/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The interaction of a success action.
	*/
	export class ActionInteraction {
			"type"?: 'DisplayPage' | 'None' | 'Notification' | 'Page' | 'URL';

		static "discriminator": string | undefined = "type";

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "type",
			name: "type",
			type: "'DisplayPage' | 'None' | 'Notification' | 'Page' | 'URL'",
		},
		];

		static getAttributeTypeMap() {
				return ActionInteraction.attributeTypeMap;
		}
	}
