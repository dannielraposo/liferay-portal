/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {PageElementDefinition} from './PageElementDefinition';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A page element.
	*/
	export class PageElement {
			"externalReferenceCode"?: string;
			"pageElementDefinition"?: PageElementDefinition;
			"pageElements"?: Array<PageElement>;
			"parentExternalReferenceCode"?: string;
			"position"?: number;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "externalReferenceCode",
			name: "externalReferenceCode",
			type: "string",
		},
		{
			baseName: "pageElementDefinition",
			name: "pageElementDefinition",
			type: "PageElementDefinition",
		},
		{
			baseName: "pageElements",
			name: "pageElements",
			type: "Array<PageElement>",
		},
		{
			baseName: "parentExternalReferenceCode",
			name: "parentExternalReferenceCode",
			type: "string",
		},
		{
			baseName: "position",
			name: "position",
			type: "number",
		},
		];

		static getAttributeTypeMap() {
				return PageElement.attributeTypeMap;
		}
	}
