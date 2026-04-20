/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {PageSpecification} from './PageSpecification';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A page specification of a page set page.
	*/
	export class PageSetPageSpecification extends PageSpecification {

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(PageSetPageSpecification.attributeTypeMap);
		}
	}
