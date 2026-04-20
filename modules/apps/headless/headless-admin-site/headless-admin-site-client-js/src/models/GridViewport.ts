/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {FragmentViewportStyle} from './FragmentViewportStyle';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A grid viewport.
	*/
	export class GridViewport {
			"customCSS"?: string;
			"fragmentViewportStyle"?: FragmentViewportStyle;
			"gridViewportDefinition"?: object;
			"id"?: 'Desktop' | 'LandscapeMobile' | 'PortraitMobile' | 'Tablet';

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "customCSS",
			name: "customCSS",
			type: "string",
		},
		{
			baseName: "fragmentViewportStyle",
			name: "fragmentViewportStyle",
			type: "FragmentViewportStyle",
		},
		{
			baseName: "gridViewportDefinition",
			name: "gridViewportDefinition",
			type: "object",
		},
		{
			baseName: "id",
			name: "id",
			type: "'Desktop' | 'LandscapeMobile' | 'PortraitMobile' | 'Tablet'",
		},
		];

		static getAttributeTypeMap() {
				return GridViewport.attributeTypeMap;
		}
	}
