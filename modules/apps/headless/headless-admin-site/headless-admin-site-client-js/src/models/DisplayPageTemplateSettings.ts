/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {DisplayPageTemplateOpenGraphSettings} from './DisplayPageTemplateOpenGraphSettings';
			import {DisplayPageTemplateSEOSettings} from './DisplayPageTemplateSEOSettings';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The settings of a display page template.
	*/
	export class DisplayPageTemplateSettings {
			"openGraphSettings"?: DisplayPageTemplateOpenGraphSettings;
			"seoSettings"?: DisplayPageTemplateSEOSettings;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "openGraphSettings",
			name: "openGraphSettings",
			type: "DisplayPageTemplateOpenGraphSettings",
		},
		{
			baseName: "seoSettings",
			name: "seoSettings",
			type: "DisplayPageTemplateSEOSettings",
		},
		];

		static getAttributeTypeMap() {
				return DisplayPageTemplateSettings.attributeTypeMap;
		}
	}
