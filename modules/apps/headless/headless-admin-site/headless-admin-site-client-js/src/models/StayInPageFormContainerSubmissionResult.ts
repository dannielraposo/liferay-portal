/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {SuccessFormContainerSubmissionResult} from './SuccessFormContainerSubmissionResult';
			import {SuccessNotificationMessage} from './SuccessNotificationMessage';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The definition of a submission result of type stay in page.
	*/
	export class StayInPageFormContainerSubmissionResult extends SuccessFormContainerSubmissionResult {
			"successNotificationMessage"?: SuccessNotificationMessage;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "successNotificationMessage",
			name: "successNotificationMessage",
			type: "SuccessNotificationMessage",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(StayInPageFormContainerSubmissionResult.attributeTypeMap);
		}
	}
