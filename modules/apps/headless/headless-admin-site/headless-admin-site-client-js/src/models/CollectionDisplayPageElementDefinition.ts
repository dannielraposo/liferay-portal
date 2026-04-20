/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {CollectionDisplayListStyle} from './CollectionDisplayListStyle';
			import {CollectionDisplayViewport} from './CollectionDisplayViewport';
			import {CollectionSettings} from './CollectionSettings';
			import {EmptyCollectionConfig} from './EmptyCollectionConfig';
			import {PageElementDefinition} from './PageElementDefinition';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The page element definition of a Collection.
	*/
	export class CollectionDisplayPageElementDefinition extends PageElementDefinition {
			"collectionDisplayListStyle"?: CollectionDisplayListStyle;
			"collectionDisplayViewports"?: Array<CollectionDisplayViewport>;
			"collectionSettings"?: CollectionSettings;
			"displayAllItems"?: boolean;
			"displayAllPages"?: boolean;
			"emptyCollectionConfig"?: EmptyCollectionConfig;
			"name"?: string;
			"numberOfItems"?: number;
			"numberOfItemsPerPage"?: number;
			"numberOfPages"?: number;
			"paginationType"?: 'None' | 'Numeric' | 'Simple';

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "collectionDisplayListStyle",
			name: "collectionDisplayListStyle",
			type: "CollectionDisplayListStyle",
		},
		{
			baseName: "collectionDisplayViewports",
			name: "collectionDisplayViewports",
			type: "Array<CollectionDisplayViewport>",
		},
		{
			baseName: "collectionSettings",
			name: "collectionSettings",
			type: "CollectionSettings",
		},
		{
			baseName: "displayAllItems",
			name: "displayAllItems",
			type: "boolean",
		},
		{
			baseName: "displayAllPages",
			name: "displayAllPages",
			type: "boolean",
		},
		{
			baseName: "emptyCollectionConfig",
			name: "emptyCollectionConfig",
			type: "EmptyCollectionConfig",
		},
		{
			baseName: "name",
			name: "name",
			type: "string",
		},
		{
			baseName: "numberOfItems",
			name: "numberOfItems",
			type: "number",
		},
		{
			baseName: "numberOfItemsPerPage",
			name: "numberOfItemsPerPage",
			type: "number",
		},
		{
			baseName: "numberOfPages",
			name: "numberOfPages",
			type: "number",
		},
		{
			baseName: "paginationType",
			name: "paginationType",
			type: "'None' | 'Numeric' | 'Simple'",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(CollectionDisplayPageElementDefinition.attributeTypeMap);
		}
	}
