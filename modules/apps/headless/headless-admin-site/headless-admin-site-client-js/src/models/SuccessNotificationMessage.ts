/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {FragmentInlineValue} from './FragmentInlineValue';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The success notification message.
	*/
	export class SuccessNotificationMessage {
			"message"?: FragmentInlineValue;
			"showNotification"?: boolean;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "message",
			name: "message",
			type: "FragmentInlineValue",
		},
		{
			baseName: "showNotification",
			name: "showNotification",
			type: "boolean",
		},
		];

		static getAttributeTypeMap() {
				return SuccessNotificationMessage.attributeTypeMap;
		}
	}
