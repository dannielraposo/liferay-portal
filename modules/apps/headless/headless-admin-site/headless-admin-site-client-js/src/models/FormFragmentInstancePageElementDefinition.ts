/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {FragmentInstance} from './FragmentInstance';
			import {PageElementDefinition} from './PageElementDefinition';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The page element definition of a form fragment instance.
	*/
	export class FormFragmentInstancePageElementDefinition extends PageElementDefinition {
			"fieldKey"?: string;
			"fragmentInstance"?: FragmentInstance;
			"helpText_i18n"?: {[key: string]: string;};
			"label_i18n"?: {[key: string]: string;};
			"markAsRequired"?: boolean;
			"readOnlyField"?: boolean;
			"showHelpText"?: boolean;
			"showLabel"?: boolean;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "fieldKey",
			name: "fieldKey",
			type: "string",
		},
		{
			baseName: "fragmentInstance",
			name: "fragmentInstance",
			type: "FragmentInstance",
		},
		{
			baseName: "helpText_i18n",
			name: "helpText_i18n",
			type: "{[key: string]: string;}",
		},
		{
			baseName: "label_i18n",
			name: "label_i18n",
			type: "{[key: string]: string;}",
		},
		{
			baseName: "markAsRequired",
			name: "markAsRequired",
			type: "boolean",
		},
		{
			baseName: "readOnlyField",
			name: "readOnlyField",
			type: "boolean",
		},
		{
			baseName: "showHelpText",
			name: "showHelpText",
			type: "boolean",
		},
		{
			baseName: "showLabel",
			name: "showLabel",
			type: "boolean",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(FormFragmentInstancePageElementDefinition.attributeTypeMap);
		}
	}
