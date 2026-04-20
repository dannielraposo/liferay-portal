/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {FragmentLink} from './FragmentLink';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A fragment editable element value fragment link.
	*/
	export class FragmentEditableElementValueFragmentLink {
			"fragmentLink"?: FragmentLink;
			"prefix"?: 'Email' | 'None' | 'Phone';

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "fragmentLink",
			name: "fragmentLink",
			type: "FragmentLink",
		},
		{
			baseName: "prefix",
			name: "prefix",
			type: "'Email' | 'None' | 'Phone'",
		},
		];

		static getAttributeTypeMap() {
				return FragmentEditableElementValueFragmentLink.attributeTypeMap;
		}
	}
