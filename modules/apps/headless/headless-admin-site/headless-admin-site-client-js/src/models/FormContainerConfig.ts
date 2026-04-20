/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {FormContainerReference} from './FormContainerReference';
			import {SuccessFormContainerSubmissionResult} from './SuccessFormContainerSubmissionResult';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The form container page element definition form's container configuration.
	*/
	export class FormContainerConfig {
			"formContainerReference"?: FormContainerReference;
			"formContainerType"?: 'Multistep' | 'Simple';
			"localizationConfig"?: object;
			"numberOfSteps"?: number;
			"successFormContainerSubmissionResult"?: SuccessFormContainerSubmissionResult;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "formContainerReference",
			name: "formContainerReference",
			type: "FormContainerReference",
		},
		{
			baseName: "formContainerType",
			name: "formContainerType",
			type: "'Multistep' | 'Simple'",
		},
		{
			baseName: "localizationConfig",
			name: "localizationConfig",
			type: "object",
		},
		{
			baseName: "numberOfSteps",
			name: "numberOfSteps",
			type: "number",
		},
		{
			baseName: "successFormContainerSubmissionResult",
			name: "successFormContainerSubmissionResult",
			type: "SuccessFormContainerSubmissionResult",
		},
		];

		static getAttributeTypeMap() {
				return FormContainerConfig.attributeTypeMap;
		}
	}
