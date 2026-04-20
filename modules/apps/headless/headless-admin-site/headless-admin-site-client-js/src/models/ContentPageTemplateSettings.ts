/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {PageTemplateSettings} from './PageTemplateSettings';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* The settings of a content page template.
	*/
	export class ContentPageTemplateSettings extends PageTemplateSettings {

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(ContentPageTemplateSettings.attributeTypeMap);
		}
	}
