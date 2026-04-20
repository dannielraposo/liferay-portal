/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {AnalyticsConfiguration} from './AnalyticsConfiguration';
			import {Permission} from './Permission';
			import {RatingsTypes} from './RatingsTypes';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* Represents the site being created.
	*/
	export class Site {
			"active"?: boolean;
			"analyticsConfiguration"?: AnalyticsConfiguration;
			"assetAutoTaggingEnabled"?: boolean;
			"contentSharingWithChildrenEnabled"?: boolean;
			"defaultLanguageId"?: string;
			"description"?: string;
			"description_i18n"?: {[key: string]: string;};
			"descriptiveName"?: string;
			"descriptiveName_i18n"?: {[key: string]: string;};
			"directoryIndexingEnabled"?: boolean;
			"externalReferenceCode"?: string;
			"friendlyUrlPath"?: string;
			"id"?: number;
			"inheritLocales"?: boolean;
			"key"?: string;
			"locales"?: Array<string>;
			"manualMembership"?: boolean;
			"mapProviderKey"?: 'GoogleMaps' | 'OpenStreetMap';
			"membershipRestriction"?: number;
			"membershipType"?: 'open' | 'private' | 'restricted';
			"mentionsEnabled"?: boolean;
			"name"?: string;
			"name_i18n"?: {[key: string]: string;};
			"parentSiteExternalReferenceCode"?: string;
			"permissions"?: Array<Permission>;
			"ratingsTypes"?: RatingsTypes;
			"sharingEnabled"?: boolean;
			"templateKey"?: string;
			"templateType"?: 'site-initializer' | 'site-template';
			"trashEnabled"?: boolean;
			"trashEntriesMaxAge"?: number;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "active",
			name: "active",
			type: "boolean",
		},
		{
			baseName: "analyticsConfiguration",
			name: "analyticsConfiguration",
			type: "AnalyticsConfiguration",
		},
		{
			baseName: "assetAutoTaggingEnabled",
			name: "assetAutoTaggingEnabled",
			type: "boolean",
		},
		{
			baseName: "contentSharingWithChildrenEnabled",
			name: "contentSharingWithChildrenEnabled",
			type: "boolean",
		},
		{
			baseName: "defaultLanguageId",
			name: "defaultLanguageId",
			type: "string",
		},
		{
			baseName: "description",
			name: "description",
			type: "string",
		},
		{
			baseName: "description_i18n",
			name: "description_i18n",
			type: "{[key: string]: string;}",
		},
		{
			baseName: "descriptiveName",
			name: "descriptiveName",
			type: "string",
		},
		{
			baseName: "descriptiveName_i18n",
			name: "descriptiveName_i18n",
			type: "{[key: string]: string;}",
		},
		{
			baseName: "directoryIndexingEnabled",
			name: "directoryIndexingEnabled",
			type: "boolean",
		},
		{
			baseName: "externalReferenceCode",
			name: "externalReferenceCode",
			type: "string",
		},
		{
			baseName: "friendlyUrlPath",
			name: "friendlyUrlPath",
			type: "string",
		},
		{
			baseName: "id",
			name: "id",
			type: "number",
		},
		{
			baseName: "inheritLocales",
			name: "inheritLocales",
			type: "boolean",
		},
		{
			baseName: "key",
			name: "key",
			type: "string",
		},
		{
			baseName: "locales",
			name: "locales",
			type: "Array<string>",
		},
		{
			baseName: "manualMembership",
			name: "manualMembership",
			type: "boolean",
		},
		{
			baseName: "mapProviderKey",
			name: "mapProviderKey",
			type: "'GoogleMaps' | 'OpenStreetMap'",
		},
		{
			baseName: "membershipRestriction",
			name: "membershipRestriction",
			type: "number",
		},
		{
			baseName: "membershipType",
			name: "membershipType",
			type: "'open' | 'private' | 'restricted'",
		},
		{
			baseName: "mentionsEnabled",
			name: "mentionsEnabled",
			type: "boolean",
		},
		{
			baseName: "name",
			name: "name",
			type: "string",
		},
		{
			baseName: "name_i18n",
			name: "name_i18n",
			type: "{[key: string]: string;}",
		},
		{
			baseName: "parentSiteExternalReferenceCode",
			name: "parentSiteExternalReferenceCode",
			type: "string",
		},
		{
			baseName: "permissions",
			name: "permissions",
			type: "Array<Permission>",
		},
		{
			baseName: "ratingsTypes",
			name: "ratingsTypes",
			type: "RatingsTypes",
		},
		{
			baseName: "sharingEnabled",
			name: "sharingEnabled",
			type: "boolean",
		},
		{
			baseName: "templateKey",
			name: "templateKey",
			type: "string",
		},
		{
			baseName: "templateType",
			name: "templateType",
			type: "'site-initializer' | 'site-template'",
		},
		{
			baseName: "trashEnabled",
			name: "trashEnabled",
			type: "boolean",
		},
		{
			baseName: "trashEntriesMaxAge",
			name: "trashEntriesMaxAge",
			type: "number",
		},
		];

		static getAttributeTypeMap() {
				return Site.attributeTypeMap;
		}
	}
