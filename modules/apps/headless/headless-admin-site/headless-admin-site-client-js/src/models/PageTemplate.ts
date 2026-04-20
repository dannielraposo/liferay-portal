/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {Creator} from './Creator';
			import {PageSpecification} from './PageSpecification';
			import {PageTemplateSet} from './PageTemplateSet';
			import {PageTemplateSettings} from './PageTemplateSettings';
			import {Permission} from './Permission';
			import {TaxonomyCategoryBrief} from './TaxonomyCategoryBrief';
			import {ThumbnailURLReference} from './ThumbnailURLReference';

/**
 * @author Rubén Pulido
 * @generated
 */

	export class PageTemplate {
			"creator"?: Creator;
			"dateCreated"?: Date;
			"dateModified"?: Date;
			"datePublished"?: Date;
			"externalReferenceCode"?: string;
			"key"?: string;
			"keywords"?: Array<string>;
			"name"?: string;
			"pageSpecifications"?: Array<PageSpecification>;
			"pageTemplateSet"?: PageTemplateSet;
			"pageTemplateSettings"?: PageTemplateSettings;
			"permissions"?: Array<Permission>;
			"taxonomyCategoryBriefs"?: Array<TaxonomyCategoryBrief>;
			"thumbnailURLReference"?: ThumbnailURLReference;
			"type"?: 'ContentPageTemplate' | 'WidgetPageTemplate';
			"uuid"?: string;

		static "discriminator": string | undefined = "type";

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
			baseName: "datePublished",
			name: "datePublished",
			type: "Date",
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
			baseName: "keywords",
			name: "keywords",
			type: "Array<string>",
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
			baseName: "pageTemplateSet",
			name: "pageTemplateSet",
			type: "PageTemplateSet",
		},
		{
			baseName: "pageTemplateSettings",
			name: "pageTemplateSettings",
			type: "PageTemplateSettings",
		},
		{
			baseName: "permissions",
			name: "permissions",
			type: "Array<Permission>",
		},
		{
			baseName: "taxonomyCategoryBriefs",
			name: "taxonomyCategoryBriefs",
			type: "Array<TaxonomyCategoryBrief>",
		},
		{
			baseName: "thumbnailURLReference",
			name: "thumbnailURLReference",
			type: "ThumbnailURLReference",
		},
		{
			baseName: "type",
			name: "type",
			type: "'ContentPageTemplate' | 'WidgetPageTemplate'",
		},
		{
			baseName: "uuid",
			name: "uuid",
			type: "string",
		},
		];

		static getAttributeTypeMap() {
				return PageTemplate.attributeTypeMap;
		}
	}
