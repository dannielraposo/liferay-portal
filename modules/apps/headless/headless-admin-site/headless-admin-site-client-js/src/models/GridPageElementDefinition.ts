/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {BackgroundImageValue} from './BackgroundImageValue';
			import {GridViewport} from './GridViewport';
			import {PageElementDefinition} from './PageElementDefinition';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The page element definition of a row.
	*/
	export class GridPageElementDefinition extends PageElementDefinition {
			"backgroundImageValue"?: BackgroundImageValue;
			"cssClasses"?: Array<string>;
			"gridViewports"?: Array<GridViewport>;
			"gutters"?: boolean;
			"indexed"?: boolean;
			"name"?: string;
			"numberOfModules"?: number;
			"reverseOrder"?: boolean;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "backgroundImageValue",
			name: "backgroundImageValue",
			type: "BackgroundImageValue",
		},
		{
			baseName: "cssClasses",
			name: "cssClasses",
			type: "Array<string>",
		},
		{
			baseName: "gridViewports",
			name: "gridViewports",
			type: "Array<GridViewport>",
		},
		{
			baseName: "gutters",
			name: "gutters",
			type: "boolean",
		},
		{
			baseName: "indexed",
			name: "indexed",
			type: "boolean",
		},
		{
			baseName: "name",
			name: "name",
			type: "string",
		},
		{
			baseName: "numberOfModules",
			name: "numberOfModules",
			type: "number",
		},
		{
			baseName: "reverseOrder",
			name: "reverseOrder",
			type: "boolean",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(GridPageElementDefinition.attributeTypeMap);
		}
	}
