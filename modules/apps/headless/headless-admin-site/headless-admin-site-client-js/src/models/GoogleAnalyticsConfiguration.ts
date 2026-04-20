/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* Contains the configuration properties for Google Analytics (UA/GA3 and GA4).
	*/
	export class GoogleAnalyticsConfiguration {
			"googleAnalytics4CustomConfig"?: string;
			"googleAnalytics4Id"?: string;
			"googleAnalyticsCreateCustomConfig"?: string;
			"googleAnalyticsCustomConfig"?: string;
			"googleAnalyticsId"?: string;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "googleAnalytics4CustomConfig",
			name: "googleAnalytics4CustomConfig",
			type: "string",
		},
		{
			baseName: "googleAnalytics4Id",
			name: "googleAnalytics4Id",
			type: "string",
		},
		{
			baseName: "googleAnalyticsCreateCustomConfig",
			name: "googleAnalyticsCreateCustomConfig",
			type: "string",
		},
		{
			baseName: "googleAnalyticsCustomConfig",
			name: "googleAnalyticsCustomConfig",
			type: "string",
		},
		{
			baseName: "googleAnalyticsId",
			name: "googleAnalyticsId",
			type: "string",
		},
		];

		static getAttributeTypeMap() {
				return GoogleAnalyticsConfiguration.attributeTypeMap;
		}
	}
