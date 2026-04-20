/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {ClassSubtypeReference} from './ClassSubtypeReference';
			import {Creator} from './Creator';
			import {DisplayPageTemplateFolder} from './DisplayPageTemplateFolder';
			import {DisplayPageTemplateSettings} from './DisplayPageTemplateSettings';
			import {FriendlyUrlHistory} from './FriendlyUrlHistory';
			import {PageSpecification} from './PageSpecification';
			import {Permission} from './Permission';
			import {ThumbnailURLReference} from './ThumbnailURLReference';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A display page template.
	*/
	export class DisplayPageTemplate {
			"contentTypeReference"?: ClassSubtypeReference;
			"creator"?: Creator;
			"dateCreated"?: Date;
			"dateModified"?: Date;
			"datePublished"?: Date;
			"displayPageTemplateSettings"?: DisplayPageTemplateSettings;
			"externalReferenceCode"?: string;
			"friendlyUrlHistory"?: FriendlyUrlHistory;
			"friendlyUrlPath_i18n"?: {[key: string]: string;};
			"key"?: string;
			"markedAsDefault"?: boolean;
			"name"?: string;
			"pageSpecifications"?: Array<PageSpecification>;
			"parentFolder"?: DisplayPageTemplateFolder;
			"permissions"?: Array<Permission>;
			"thumbnailURLReference"?: ThumbnailURLReference;
			"uuid"?: string;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "contentTypeReference",
			name: "contentTypeReference",
			type: "ClassSubtypeReference",
		},
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
			baseName: "datePublished",
			name: "datePublished",
			type: "Date",
		},
		{
			baseName: "displayPageTemplateSettings",
			name: "displayPageTemplateSettings",
			type: "DisplayPageTemplateSettings",
		},
		{
			baseName: "externalReferenceCode",
			name: "externalReferenceCode",
			type: "string",
		},
		{
			baseName: "friendlyUrlHistory",
			name: "friendlyUrlHistory",
			type: "FriendlyUrlHistory",
		},
		{
			baseName: "friendlyUrlPath_i18n",
			name: "friendlyUrlPath_i18n",
			type: "{[key: string]: string;}",
		},
		{
			baseName: "key",
			name: "key",
			type: "string",
		},
		{
			baseName: "markedAsDefault",
			name: "markedAsDefault",
			type: "boolean",
		},
		{
			baseName: "name",
			name: "name",
			type: "string",
		},
		{
			baseName: "pageSpecifications",
			name: "pageSpecifications",
			type: "Array<PageSpecification>",
		},
		{
			baseName: "parentFolder",
			name: "parentFolder",
			type: "DisplayPageTemplateFolder",
		},
		{
			baseName: "permissions",
			name: "permissions",
			type: "Array<Permission>",
		},
		{
			baseName: "thumbnailURLReference",
			name: "thumbnailURLReference",
			type: "ThumbnailURLReference",
		},
		{
			baseName: "uuid",
			name: "uuid",
			type: "string",
		},
		];

		static getAttributeTypeMap() {
				return DisplayPageTemplate.attributeTypeMap;
		}
	}
