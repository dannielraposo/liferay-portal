/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* Represents settings related with the site map.
	*/
	export class SitemapSettings {
			"changeFrequency"?: 'Always' | 'Hourly' | 'Daily' | 'Weekly' | 'Monthly' | 'Yearly' | 'Never';
			"include"?: boolean;
			"includeChildSitePages"?: boolean;
			"pagePriority"?: number;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "changeFrequency",
			name: "changeFrequency",
			type: "'Always' | 'Hourly' | 'Daily' | 'Weekly' | 'Monthly' | 'Yearly' | 'Never'",
		},
		{
			baseName: "include",
			name: "include",
			type: "boolean",
		},
		{
			baseName: "includeChildSitePages",
			name: "includeChildSitePages",
			type: "boolean",
		},
		{
			baseName: "pagePriority",
			name: "pagePriority",
			type: "number",
		},
		];

		static getAttributeTypeMap() {
				return SitemapSettings.attributeTypeMap;
		}
	}
