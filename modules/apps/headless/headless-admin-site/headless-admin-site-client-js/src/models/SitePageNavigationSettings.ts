/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {NavigationSettings} from './NavigationSettings';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The navigation settings of a site page.
	*/
	export class SitePageNavigationSettings extends NavigationSettings {
			"queryString"?: string;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "queryString",
			name: "queryString",
			type: "string",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(SitePageNavigationSettings.attributeTypeMap);
		}
	}
