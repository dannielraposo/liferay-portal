/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {FragmentReference} from './FragmentReference';
			import {PageElementDefinition} from './PageElementDefinition';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* Represent a page element definition of a drop zone.
	*/
	export class DropZonePageElementDefinition extends PageElementDefinition {
			"addNewFragmentEntries"?: boolean;
			"allowedFragmentReferences"?: Array<FragmentReference>;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "addNewFragmentEntries",
			name: "addNewFragmentEntries",
			type: "boolean",
		},
		{
			baseName: "allowedFragmentReferences",
			name: "allowedFragmentReferences",
			type: "Array<FragmentReference>",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(DropZonePageElementDefinition.attributeTypeMap);
		}
	}
