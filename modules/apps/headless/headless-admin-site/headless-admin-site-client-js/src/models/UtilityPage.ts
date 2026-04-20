/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {Creator} from './Creator';
			import {FriendlyUrlHistory} from './FriendlyUrlHistory';
			import {PageSpecification} from './PageSpecification';
			import {Permission} from './Permission';
			import {ThumbnailURLReference} from './ThumbnailURLReference';
			import {UtilityPageSettings} from './UtilityPageSettings';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The definition of a Utility Page.
	*/
	export class UtilityPage {
			"creator"?: Creator;
			"dateCreated"?: Date;
			"dateModified"?: Date;
			"datePublished"?: Date;
			"externalReferenceCode"?: string;
			"friendlyUrlHistory"?: FriendlyUrlHistory;
			"friendlyUrlPath_i18n"?: {[key: string]: string;};
			"markedAsDefault"?: boolean;
			"name"?: string;
			"pageSpecifications"?: Array<PageSpecification>;
			"permissions"?: Array<Permission>;
			"thumbnailURLReference"?: ThumbnailURLReference;
			"type"?: 'CookiePolicy' | 'CreateAccount' | 'Error' | 'ErrorCode404' | 'ErrorCode500' | 'ErrorCode503' | 'ForgotPassword' | 'Login' | 'TermsOfUse';
			"utilityPageSettings"?: UtilityPageSettings;
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
			baseName: "type",
			name: "type",
			type: "'CookiePolicy' | 'CreateAccount' | 'Error' | 'ErrorCode404' | 'ErrorCode500' | 'ErrorCode503' | 'ForgotPassword' | 'Login' | 'TermsOfUse'",
		},
		{
			baseName: "utilityPageSettings",
			name: "utilityPageSettings",
			type: "UtilityPageSettings",
		},
		{
			baseName: "uuid",
			name: "uuid",
			type: "string",
		},
		];

		static getAttributeTypeMap() {
				return UtilityPage.attributeTypeMap;
		}
	}
