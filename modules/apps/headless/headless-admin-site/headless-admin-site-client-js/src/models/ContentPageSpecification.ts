/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

			import {PageExperience} from './PageExperience';
			import {PageSpecification} from './PageSpecification';
			import {Settings} from './Settings';

/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A page specification of a content page. A content page will contain 1 page specification for its draft layout and 1 page specification for its published layout.
	*/
	export class ContentPageSpecification extends PageSpecification {
			"draftContentPageSpecificationExternalReferenceCode"?: string;
			"pageExperiences"?: Array<PageExperience>;
			"settings"?: Settings;

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "draftContentPageSpecificationExternalReferenceCode",
			name: "draftContentPageSpecificationExternalReferenceCode",
			type: "string",
		},
		{
			baseName: "pageExperiences",
			name: "pageExperiences",
			type: "Array<PageExperience>",
		},
		{
			baseName: "settings",
			name: "settings",
			type: "Settings",
		},
		];

		static getAttributeTypeMap() {
				return super.getAttributeTypeMap().concat(ContentPageSpecification.attributeTypeMap);
		}
	}
