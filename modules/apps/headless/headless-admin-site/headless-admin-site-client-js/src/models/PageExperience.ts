/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {ItemExternalReference} from './ItemExternalReference';
			import {PageElement} from './PageElement';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A customized experience for a given page specification.
	*/
	export class PageExperience {
			"externalReferenceCode"?: string;
			"key"?: string;
			"name_i18n"?: {[key: string]: string;};
			"pageElements"?: Array<PageElement>;
			"pageSpecificationExternalReferenceCode"?: string;
			"priority"?: number;
			"segmentItemExternalReference"?: ItemExternalReference;
			"uuid"?: string;

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
			baseName: "key",
			name: "key",
			type: "string",
		},
		{
			baseName: "name_i18n",
			name: "name_i18n",
			type: "{[key: string]: string;}",
		},
		{
			baseName: "pageElements",
			name: "pageElements",
			type: "Array<PageElement>",
		},
		{
			baseName: "pageSpecificationExternalReferenceCode",
			name: "pageSpecificationExternalReferenceCode",
			type: "string",
		},
		{
			baseName: "priority",
			name: "priority",
			type: "number",
		},
		{
			baseName: "segmentItemExternalReference",
			name: "segmentItemExternalReference",
			type: "ItemExternalReference",
		},
		{
			baseName: "uuid",
			name: "uuid",
			type: "string",
		},
		];

		static getAttributeTypeMap() {
				return PageExperience.attributeTypeMap;
		}
	}
