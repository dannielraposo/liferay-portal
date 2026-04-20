/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {CustomMetaTag} from './CustomMetaTag';
			import {OpenGraphSettings} from './OpenGraphSettings';
			import {PageSettings} from './PageSettings';
			import {SEOSettings} from './SEOSettings';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The settings of a content page.
	*/
	export class ContentPageSettings extends PageSettings {
			"customMetaTags"?: Array<CustomMetaTag>;
			"openGraphSettings"?: OpenGraphSettings;
			"seoSettings"?: SEOSettings;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "customMetaTags",
			name: "customMetaTags",
			type: "Array<CustomMetaTag>",
		},
		{
			baseName: "openGraphSettings",
			name: "openGraphSettings",
			type: "OpenGraphSettings",
		},
		{
			baseName: "seoSettings",
			name: "seoSettings",
			type: "SEOSettings",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(ContentPageSettings.attributeTypeMap);
		}
	}
