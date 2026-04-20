/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {PageSettings} from './PageSettings';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The settings of a link to URL page.
	*/
	export class LinkToURLPageSettings extends PageSettings {
			"pageURL"?: string;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "pageURL",
			name: "pageURL",
			type: "string",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(LinkToURLPageSettings.attributeTypeMap);
		}
	}
