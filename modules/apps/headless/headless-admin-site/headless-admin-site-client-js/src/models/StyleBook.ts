/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {Creator} from './Creator';

/**
 * @author Rubén Pulido
 * @generated
 */

	export class StyleBook {
			"creator"?: Creator;
			"dateCreated"?: Date;
			"dateModified"?: Date;
			"defaultStyleBook"?: boolean;
			"externalReferenceCode"?: string;
			"frontendTokensValues"?: string;
			"key"?: string;
			"name"?: string;
			"previewFileEntryExternalReferenceCode"?: string;
			"themeId"?: string;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "creator",
			name: "creator",
			type: "Creator",
		},
		{
			baseName: "dateCreated",
			name: "dateCreated",
			type: "Date",
		},
		{
			baseName: "dateModified",
			name: "dateModified",
			type: "Date",
		},
		{
			baseName: "defaultStyleBook",
			name: "defaultStyleBook",
			type: "boolean",
		},
		{
			baseName: "externalReferenceCode",
			name: "externalReferenceCode",
			type: "string",
		},
		{
			baseName: "frontendTokensValues",
			name: "frontendTokensValues",
			type: "string",
		},
		{
			baseName: "key",
			name: "key",
			type: "string",
		},
		{
			baseName: "name",
			name: "name",
			type: "string",
		},
		{
			baseName: "previewFileEntryExternalReferenceCode",
			name: "previewFileEntryExternalReferenceCode",
			type: "string",
		},
		{
			baseName: "themeId",
			name: "themeId",
			type: "string",
		},
		];

		static getAttributeTypeMap() {
				return StyleBook.attributeTypeMap;
		}
	}
