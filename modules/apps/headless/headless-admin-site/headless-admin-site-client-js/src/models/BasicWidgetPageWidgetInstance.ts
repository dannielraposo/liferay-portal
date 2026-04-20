/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {WidgetPageWidgetInstance} from './WidgetPageWidgetInstance';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A basic (non nested applications) widget instance in a widget page.
	*/
	export class BasicWidgetPageWidgetInstance extends WidgetPageWidgetInstance {

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(BasicWidgetPageWidgetInstance.attributeTypeMap);
		}
	}
