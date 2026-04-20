/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {ItemExternalReference} from './ItemExternalReference';
			import {SuccessFormContainerSubmissionResult} from './SuccessFormContainerSubmissionResult';
			import {SuccessNotificationMessage} from './SuccessNotificationMessage';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The definition of a submission result of type page.
	*/
	export class DisplayPageFormContainerSubmissionResult extends SuccessFormContainerSubmissionResult {
			"defaultDisplayPage"?: boolean;
			"itemExternalReference"?: ItemExternalReference;
			"successNotificationMessage"?: SuccessNotificationMessage;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "defaultDisplayPage",
			name: "defaultDisplayPage",
			type: "boolean",
		},
		{
			baseName: "itemExternalReference",
			name: "itemExternalReference",
			type: "ItemExternalReference",
		},
		{
			baseName: "successNotificationMessage",
			name: "successNotificationMessage",
			type: "SuccessNotificationMessage",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(DisplayPageFormContainerSubmissionResult.attributeTypeMap);
		}
	}
