/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A fragment mapped value item reference.
	*/
	export class FragmentMappedValueItemReference {
			"type"?: 'ContextReference' | 'ItemExternalReference';

		static "discriminator": string | undefined = "type";

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "type",
			name: "type",
			type: "'ContextReference' | 'ItemExternalReference'",
		},
		];

		static getAttributeTypeMap() {
				return FragmentMappedValueItemReference.attributeTypeMap;
		}
	}
