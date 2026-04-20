/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A value of a field of type video.
	*/
	export class VideoValue {
			"html"?: string;
			"title"?: string;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "html",
			name: "html",
			type: "string",
		},
		{
			baseName: "title",
			name: "title",
			type: "string",
		},
		];

		static getAttributeTypeMap() {
				return VideoValue.attributeTypeMap;
		}
	}
