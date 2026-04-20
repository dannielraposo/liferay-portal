/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {FragmentLinkValue} from './FragmentLinkValue';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A fragment link.
	*/
	export class FragmentLink {
			"target"?: 'Blank' | 'Self';
			"value"?: FragmentLinkValue;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "target",
			name: "target",
			type: "'Blank' | 'Self'",
		},
		{
			baseName: "value",
			name: "value",
			type: "FragmentLinkValue",
		},
		];

		static getAttributeTypeMap() {
				return FragmentLink.attributeTypeMap;
		}
	}
