/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The value of a fragment text element.
	*/
	export class TextFragmentValue {
			"type"?: 'Inline' | 'Mapped';

		static "discriminator": string | undefined = "type";

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "type",
			name: "type",
			type: "'Inline' | 'Mapped'",
		},
		];

		static getAttributeTypeMap() {
				return TextFragmentValue.attributeTypeMap;
		}
	}
