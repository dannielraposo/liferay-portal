/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* Represents the history of previously used URLs for a page to prevent broken links and provide an easy way to revert changes.
	*/
	export class FriendlyUrlHistory {
			"friendlyUrlPath_i18n"?: {[key: string]: Array<string>;};

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "friendlyUrlPath_i18n",
			name: "friendlyUrlPath_i18n",
			type: "{[key: string]: Array<string>;}",
		},
		];

		static getAttributeTypeMap() {
				return FriendlyUrlHistory.attributeTypeMap;
		}
	}
