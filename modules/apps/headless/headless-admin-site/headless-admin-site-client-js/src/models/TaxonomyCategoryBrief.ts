/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	export class TaxonomyCategoryBrief {
			"parentTaxonomyCategory"?: object;
			"parentTaxonomyVocabulary"?: object;
			"scope"?: any;
			"taxonomyCategoryExternalReferenceCode"?: string;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "parentTaxonomyCategory",
			name: "parentTaxonomyCategory",
			type: "object",
		},
		{
			baseName: "parentTaxonomyVocabulary",
			name: "parentTaxonomyVocabulary",
			type: "object",
		},
		{
			baseName: "scope",
			name: "scope",
			type: "any",
		},
		{
			baseName: "taxonomyCategoryExternalReferenceCode",
			name: "taxonomyCategoryExternalReferenceCode",
			type: "string",
		},
		];

		static getAttributeTypeMap() {
				return TaxonomyCategoryBrief.attributeTypeMap;
		}
	}
