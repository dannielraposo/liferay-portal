/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The template's reference.
	*/
	export class TemplateReference {
			"rendererKey"?: string;
			"templateKey"?: string;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "rendererKey",
			name: "rendererKey",
			type: "string",
		},
		{
			baseName: "templateKey",
			name: "templateKey",
			type: "string",
		},
		];

		static getAttributeTypeMap() {
				return TemplateReference.attributeTypeMap;
		}
	}
