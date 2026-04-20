/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A unique reference to a URL which remains constant across environments.
	*/
	export class ThumbnailURLReference {
			"externalReferenceCode"?: string;
			"url"?: string;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "externalReferenceCode",
			name: "externalReferenceCode",
			type: "string",
		},
		{
			baseName: "url",
			name: "url",
			type: "string",
		},
		];

		static getAttributeTypeMap() {
				return ThumbnailURLReference.attributeTypeMap;
		}
	}
