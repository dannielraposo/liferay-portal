/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {NavigationMenuValue} from './NavigationMenuValue';

/**
 * @author Rubén Pulido
 * @generated
 */

	export class SitePagesNavigationMenuValue extends NavigationMenuValue {
			"pageSetType"?: 'PrivatePages' | 'PublicPages';
			"parentSitePageExternalReferenceCode"?: string;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "pageSetType",
			name: "pageSetType",
			type: "'PrivatePages' | 'PublicPages'",
		},
		{
			baseName: "parentSitePageExternalReferenceCode",
			name: "parentSitePageExternalReferenceCode",
			type: "string",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(SitePagesNavigationMenuValue.attributeTypeMap);
		}
	}
