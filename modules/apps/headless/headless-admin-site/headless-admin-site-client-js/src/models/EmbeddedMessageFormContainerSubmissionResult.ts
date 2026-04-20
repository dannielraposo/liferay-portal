/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {FragmentInlineValue} from './FragmentInlineValue';
			import {SuccessFormContainerSubmissionResult} from './SuccessFormContainerSubmissionResult';
			import {SuccessNotificationMessage} from './SuccessNotificationMessage';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The definition of a submission result of type embedded message.
	*/
	export class EmbeddedMessageFormContainerSubmissionResult extends SuccessFormContainerSubmissionResult {
			"message"?: FragmentInlineValue;
			"successNotificationMessage"?: SuccessNotificationMessage;

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
			baseName: "successNotificationMessage",
			name: "successNotificationMessage",
			type: "SuccessNotificationMessage",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(EmbeddedMessageFormContainerSubmissionResult.attributeTypeMap);
		}
	}
