/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* Represents display page template settings related with Open Graph protocol.
	*/
	export class DisplayPageTemplateOpenGraphSettings {
			"descriptionTemplate"?: string;
			"imageAltTemplate"?: string;
			"imageTemplate"?: string;
			"titleTemplate"?: string;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "descriptionTemplate",
			name: "descriptionTemplate",
			type: "string",
		},
		{
			baseName: "imageAltTemplate",
			name: "imageAltTemplate",
			type: "string",
		},
		{
			baseName: "imageTemplate",
			name: "imageTemplate",
			type: "string",
		},
		{
			baseName: "titleTemplate",
			name: "titleTemplate",
			type: "string",
		},
		];

		static getAttributeTypeMap() {
				return DisplayPageTemplateOpenGraphSettings.attributeTypeMap;
		}
	}
