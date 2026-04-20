/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {FragmentImageValue} from './FragmentImageValue';
			import {FragmentImageViewport} from './FragmentImageViewport';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A fragment image.
	*/
	export class FragmentImage {
			"description_i18n"?: {[key: string]: string;};
			"fragmentImageValue"?: FragmentImageValue;
			"fragmentImageViewports"?: Array<FragmentImageViewport>;
			"lazyLoading"?: boolean;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "description_i18n",
			name: "description_i18n",
			type: "{[key: string]: string;}",
		},
		{
			baseName: "fragmentImageValue",
			name: "fragmentImageValue",
			type: "FragmentImageValue",
		},
		{
			baseName: "fragmentImageViewports",
			name: "fragmentImageViewports",
			type: "Array<FragmentImageViewport>",
		},
		{
			baseName: "lazyLoading",
			name: "lazyLoading",
			type: "boolean",
		},
		];

		static getAttributeTypeMap() {
				return FragmentImage.attributeTypeMap;
		}
	}
