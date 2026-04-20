/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {NavigationMenuValue} from './NavigationMenuValue';

/**
 * @author Rubén Pulido
 * @generated
 */

	export class ContextualMenuNavigationMenuValue extends NavigationMenuValue {
			"contextualMenuType"?: 'Children' | 'ParentAndItsSiblings' | 'SelfAndSiblings';

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "contextualMenuType",
			name: "contextualMenuType",
			type: "'Children' | 'ParentAndItsSiblings' | 'SelfAndSiblings'",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(ContextualMenuNavigationMenuValue.attributeTypeMap);
		}
	}
