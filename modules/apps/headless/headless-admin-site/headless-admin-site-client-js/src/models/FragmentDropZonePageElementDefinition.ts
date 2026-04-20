/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {PageElementDefinition} from './PageElementDefinition';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The page element definition of a fragment drop zone.
	*/
	export class FragmentDropZonePageElementDefinition extends PageElementDefinition {
			"fragmentDropZoneId"?: string;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "fragmentDropZoneId",
			name: "fragmentDropZoneId",
			type: "string",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(FragmentDropZonePageElementDefinition.attributeTypeMap);
		}
	}
