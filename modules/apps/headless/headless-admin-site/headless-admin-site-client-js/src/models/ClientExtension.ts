/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A reference to a client extension along with its configuration values.
	*/
	export class ClientExtension {
			"clientExtensionConfig"?: {[key: string]: string;};
			"externalReferenceCode"?: string;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "clientExtensionConfig",
			name: "clientExtensionConfig",
			type: "{[key: string]: string;}",
		},
		{
			baseName: "externalReferenceCode",
			name: "externalReferenceCode",
			type: "string",
		},
		];

		static getAttributeTypeMap() {
				return ClientExtension.attributeTypeMap;
		}
	}
