/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A collection display viewport.
	*/
	export class CollectionDisplayViewport {
			"collectionDisplayViewportDefinition"?: object;
			"id"?: 'Desktop' | 'LandscapeMobile' | 'PortraitMobile' | 'Tablet';

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "collectionDisplayViewportDefinition",
			name: "collectionDisplayViewportDefinition",
			type: "object",
		},
		{
			baseName: "id",
			name: "id",
			type: "'Desktop' | 'LandscapeMobile' | 'PortraitMobile' | 'Tablet'",
		},
		];

		static getAttributeTypeMap() {
				return CollectionDisplayViewport.attributeTypeMap;
		}
	}
