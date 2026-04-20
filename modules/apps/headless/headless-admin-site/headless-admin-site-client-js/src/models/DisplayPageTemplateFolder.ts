/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {Creator} from './Creator';
			import {Permission} from './Permission';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A display page template folder.
	*/
	export class DisplayPageTemplateFolder {
			"creator"?: Creator;
			"dateCreated"?: Date;
			"dateModified"?: Date;
			"description"?: string;
			"externalReferenceCode"?: string;
			"key"?: string;
			"name"?: string;
			"parentDisplayPageTemplateFolder"?: DisplayPageTemplateFolder;
			"parentDisplayPageTemplateFolderExternalReferenceCode"?: string;
			"permissions"?: Array<Permission>;
			"uuid"?: string;

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
			baseName: "description",
			name: "description",
			type: "string",
		},
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
			baseName: "name",
			name: "name",
			type: "string",
		},
		{
			baseName: "parentDisplayPageTemplateFolder",
			name: "parentDisplayPageTemplateFolder",
			type: "DisplayPageTemplateFolder",
		},
		{
			baseName: "parentDisplayPageTemplateFolderExternalReferenceCode",
			name: "parentDisplayPageTemplateFolderExternalReferenceCode",
			type: "string",
		},
		{
			baseName: "permissions",
			name: "permissions",
			type: "Array<Permission>",
		},
		{
			baseName: "uuid",
			name: "uuid",
			type: "string",
		},
		];

		static getAttributeTypeMap() {
				return DisplayPageTemplateFolder.attributeTypeMap;
		}
	}
