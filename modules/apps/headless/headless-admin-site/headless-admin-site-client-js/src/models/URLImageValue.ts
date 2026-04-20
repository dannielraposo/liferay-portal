/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {ImageValue} from './ImageValue';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A URL image value.
	*/
	export class URLImageValue extends ImageValue {
			"url"?: string;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "url",
			name: "url",
			type: "string",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(URLImageValue.attributeTypeMap);
		}
	}
