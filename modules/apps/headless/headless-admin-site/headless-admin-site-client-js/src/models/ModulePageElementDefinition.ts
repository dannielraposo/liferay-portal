/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {ModuleViewport} from './ModuleViewport';
			import {PageElementDefinition} from './PageElementDefinition';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The page element definition of a Column.
	*/
	export class ModulePageElementDefinition extends PageElementDefinition {
			"moduleViewports"?: Array<ModuleViewport>;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "moduleViewports",
			name: "moduleViewports",
			type: "Array<ModuleViewport>",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(ModulePageElementDefinition.attributeTypeMap);
		}
	}
