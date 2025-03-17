/**
 * SPDX-FileCopyrightText: (c) 2025 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* Represents the site being created.
	*/
	export class Site {
			'externalReferenceCode'?: string;
			'friendlyUrlPath'?: string;
			'id'?: number;
			'key'?: string;
			'membershipType'?: 'open' | 'private' | 'restricted';
			'name'?: string;
			'parentSiteKey'?: string;
			'templateKey'?: string;
			'templateType'?: 'site-initializer' | 'site-template';

		static 'discriminator': string | undefined = undefined;

	static 'attributeTypeMap': Array<{
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
			baseName: "key",
			name: "key",
			type: "string",
		},
		{
			baseName: "membershipType",
			name: "membershipType",
			type: "'open' | 'private' | 'restricted'",
		},
		{
			baseName: "name",
			name: "name",
			type: "string",
		},
		{
			baseName: "parentSiteKey",
			name: "parentSiteKey",
			type: "string",
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
		];

		static getAttributeTypeMap() {
				return Site.attributeTypeMap;
		}
	}
