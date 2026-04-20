/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The reference to the fragment.
	*/
	export class FragmentReference {
			"fragmentReferenceType"?: 'DefaultFragmentReference' | 'FragmentItemExternalReference';

		static "discriminator": string | undefined = "fragmentReferenceType";

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "fragmentReferenceType",
			name: "fragmentReferenceType",
			type: "'DefaultFragmentReference' | 'FragmentItemExternalReference'",
		},
		];

		static getAttributeTypeMap() {
				return FragmentReference.attributeTypeMap;
		}
	}
