/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A value of a field of type navigation menu.
	*/
	export class NavigationMenuValue {
			"navigationMenuType"?: 'ContextualMenu' | 'SiteMenu' | 'SitePages';

		static "discriminator": string | undefined = "navigationMenuType";

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "navigationMenuType",
			name: "navigationMenuType",
			type: "'ContextualMenu' | 'SiteMenu' | 'SitePages'",
		},
		];

		static getAttributeTypeMap() {
				return NavigationMenuValue.attributeTypeMap;
		}
	}
