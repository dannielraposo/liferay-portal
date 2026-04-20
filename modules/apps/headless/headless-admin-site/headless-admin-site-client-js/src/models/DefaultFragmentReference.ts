/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {FragmentReference} from './FragmentReference';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A reference to a default fragment (provided out-of-the-box).
	*/
	export class DefaultFragmentReference extends FragmentReference {
			"defaultFragmentKey"?: string;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "defaultFragmentKey",
			name: "defaultFragmentKey",
			type: "string",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(DefaultFragmentReference.attributeTypeMap);
		}
	}
