/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {ActionInteraction} from './ActionInteraction';
			import {FragmentInlineValue} from './FragmentInlineValue';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The definition of an action interaction of type notification.
	*/
	export class NotificationActionInteraction extends ActionInteraction {
			"fragmentInlineValue"?: FragmentInlineValue;
			"reload"?: boolean;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "fragmentInlineValue",
			name: "fragmentInlineValue",
			type: "FragmentInlineValue",
		},
		{
			baseName: "reload",
			name: "reload",
			type: "boolean",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(NotificationActionInteraction.attributeTypeMap);
		}
	}
