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
	* The page element definition of a basic fragment instance.
	*/
	export class BasicFragmentInstancePageElementDefinition extends PageElementDefinition {
			"fragmentInstance"?: FragmentInstance;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "fragmentInstance",
			name: "fragmentInstance",
			type: "FragmentInstance",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(BasicFragmentInstancePageElementDefinition.attributeTypeMap);
		}
	}
