/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {CollectionReference} from './CollectionReference';

/**
 * @author Rubén Pulido
 * @generated
 */

	export class CollectionSettings {
			"collectionConfig"?: {[key: string]: object;};
			"collectionReference"?: CollectionReference;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "collectionConfig",
			name: "collectionConfig",
			type: "{[key: string]: object;}",
		},
		{
			baseName: "collectionReference",
			name: "collectionReference",
			type: "CollectionReference",
		},
		];

		static getAttributeTypeMap() {
				return CollectionSettings.attributeTypeMap;
		}
	}
