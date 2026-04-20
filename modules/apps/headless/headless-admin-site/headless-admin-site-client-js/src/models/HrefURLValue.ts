/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {URLValue} from './URLValue';

/**
 * @author Rubén Pulido
 * @generated
 */

	export class HrefURLValue extends URLValue {
			"href"?: string;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "href",
			name: "href",
			type: "string",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(HrefURLValue.attributeTypeMap);
		}
	}
