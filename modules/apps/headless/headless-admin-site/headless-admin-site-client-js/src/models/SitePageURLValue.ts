/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {ItemExternalReference} from './ItemExternalReference';
			import {URLValue} from './URLValue';

/**
 * @author Rubén Pulido
 * @generated
 */

	export class SitePageURLValue extends URLValue {
			"sitePageItemExternalReference"?: ItemExternalReference;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "sitePageItemExternalReference",
			name: "sitePageItemExternalReference",
			type: "ItemExternalReference",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(SitePageURLValue.attributeTypeMap);
		}
	}
