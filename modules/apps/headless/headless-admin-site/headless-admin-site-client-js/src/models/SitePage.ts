/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {Creator} from './Creator';
			import {FriendlyUrlHistory} from './FriendlyUrlHistory';
			import {PageSettings} from './PageSettings';
			import {PageSpecification} from './PageSpecification';
			import {Permission} from './Permission';
			import {TaxonomyCategoryBrief} from './TaxonomyCategoryBrief';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A page on a site, which can be of type content, embedded, link to page, link to URL, page set or widget.
	*/
	export class SitePage {
			"availableLanguages"?: Array<string>;
			"creator"?: Creator;
			"dateCreated"?: Date;
			"dateModified"?: Date;
			"datePublished"?: Date;
			"externalReferenceCode"?: string;
			"friendlyUrlHistory"?: FriendlyUrlHistory;
			"friendlyUrlPath_i18n"?: {[key: string]: string;};
			"keywords"?: Array<string>;
			"name_i18n"?: {[key: string]: string;};
			"pageSettings"?: PageSettings;
			"pageSpecifications"?: Array<PageSpecification>;
			"parentSitePageExternalReferenceCode"?: string;
			"permissions"?: Array<Permission>;
			"taxonomyCategoryBriefs"?: Array<TaxonomyCategoryBrief>;
			"type"?: 'ContentPage' | 'EmbeddedPage' | 'LinkToPagePage' | 'LinkToURLPage' | 'PageSetPage' | 'WidgetPage';
			"uuid"?: string;
			"viewableBy"?: 'Anyone' | 'Members' | 'Owner';

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "availableLanguages",
			name: "availableLanguages",
			type: "Array<string>",
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
			baseName: "keywords",
			name: "keywords",
			type: "Array<string>",
		},
		{
			baseName: "name_i18n",
			name: "name_i18n",
			type: "{[key: string]: string;}",
		},
		{
			baseName: "pageSettings",
			name: "pageSettings",
			type: "PageSettings",
		},
		{
			baseName: "pageSpecifications",
			name: "pageSpecifications",
			type: "Array<PageSpecification>",
		},
		{
			baseName: "parentSitePageExternalReferenceCode",
			name: "parentSitePageExternalReferenceCode",
			type: "string",
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
			baseName: "type",
			name: "type",
			type: "'ContentPage' | 'EmbeddedPage' | 'LinkToPagePage' | 'LinkToURLPage' | 'PageSetPage' | 'WidgetPage'",
		},
		{
			baseName: "uuid",
			name: "uuid",
			type: "string",
		},
		{
			baseName: "viewableBy",
			name: "viewableBy",
			type: "'Anyone' | 'Members' | 'Owner'",
		},
		];

		static getAttributeTypeMap() {
				return SitePage.attributeTypeMap;
		}
	}
