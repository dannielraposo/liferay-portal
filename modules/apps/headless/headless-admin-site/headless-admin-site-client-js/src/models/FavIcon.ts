/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The FavIcon of the page specification.
	*/
	export class FavIcon {
			"favIconType"?: 'ClientExtension' | 'ItemExternalReference';

		static "discriminator": string | undefined = "favIconType";

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "favIconType",
			name: "favIconType",
			type: "'ClientExtension' | 'ItemExternalReference'",
		},
		];

		static getAttributeTypeMap() {
				return FavIcon.attributeTypeMap;
		}
	}
