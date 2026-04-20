/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A value of a field of type URL.
	*/
	export class URLValue {
			"urlType"?: 'Href' | 'SitePage';

		static "discriminator": string | undefined = "urlType";

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "urlType",
			name: "urlType",
			type: "'Href' | 'SitePage'",
		},
		];

		static getAttributeTypeMap() {
				return URLValue.attributeTypeMap;
		}
	}
