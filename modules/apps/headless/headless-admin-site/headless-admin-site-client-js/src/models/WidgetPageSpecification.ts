/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {PageSpecification} from './PageSpecification';
			import {Settings} from './Settings';
			import {WidgetPageSection} from './WidgetPageSection';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A page specification of a widget page. A widget page contains always 1 page specification in published status.
	*/
	export class WidgetPageSpecification extends PageSpecification {
			"settings"?: Settings;
			"widgetPageSections"?: Array<WidgetPageSection>;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "settings",
			name: "settings",
			type: "Settings",
		},
		{
			baseName: "widgetPageSections",
			name: "widgetPageSections",
			type: "Array<WidgetPageSection>",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(WidgetPageSpecification.attributeTypeMap);
		}
	}
