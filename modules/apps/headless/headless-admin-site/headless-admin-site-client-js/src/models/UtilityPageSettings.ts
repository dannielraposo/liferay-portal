/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {UtilityPageSEOSettings} from './UtilityPageSEOSettings';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The settings of a utility page.
	*/
	export class UtilityPageSettings {
			"seoSettings"?: UtilityPageSEOSettings;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "seoSettings",
			name: "seoSettings",
			type: "UtilityPageSEOSettings",
		},
		];

		static getAttributeTypeMap() {
				return UtilityPageSettings.attributeTypeMap;
		}
	}
