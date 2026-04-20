/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {GoogleAnalyticsConfiguration} from './GoogleAnalyticsConfiguration';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* Contains all analytics configuration properties.
	*/
	export class AnalyticsConfiguration {
			"googleAnalyticsConfiguration"?: GoogleAnalyticsConfiguration;
			"matomoAnalyticsScript"?: string;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "googleAnalyticsConfiguration",
			name: "googleAnalyticsConfiguration",
			type: "GoogleAnalyticsConfiguration",
		},
		{
			baseName: "matomoAnalyticsScript",
			name: "matomoAnalyticsScript",
			type: "string",
		},
		];

		static getAttributeTypeMap() {
				return AnalyticsConfiguration.attributeTypeMap;
		}
	}
