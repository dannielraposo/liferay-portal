/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {FragmentInlineValue} from './FragmentInlineValue';
			import {SuccessFormContainerSubmissionResult} from './SuccessFormContainerSubmissionResult';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The definition of a submission result of type URL.
	*/
	export class URLFormContainerSubmissionResult extends SuccessFormContainerSubmissionResult {
			"url"?: FragmentInlineValue;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "url",
			name: "url",
			type: "FragmentInlineValue",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(URLFormContainerSubmissionResult.attributeTypeMap);
		}
	}
