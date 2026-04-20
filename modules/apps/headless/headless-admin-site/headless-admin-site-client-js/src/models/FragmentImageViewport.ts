/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A fragment image viewport.
	*/
	export class FragmentImageViewport {
			"id"?: 'Desktop' | 'LandscapeMobile' | 'PortraitMobile' | 'Tablet';
			"resolution"?: string;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "id",
			name: "id",
			type: "'Desktop' | 'LandscapeMobile' | 'PortraitMobile' | 'Tablet'",
		},
		{
			baseName: "resolution",
			name: "resolution",
			type: "string",
		},
		];

		static getAttributeTypeMap() {
				return FragmentImageViewport.attributeTypeMap;
		}
	}
