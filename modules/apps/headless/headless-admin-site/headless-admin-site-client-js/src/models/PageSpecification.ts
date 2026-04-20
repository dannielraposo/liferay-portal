/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* A page specification of a content page, content page template, widget page, or widget page template. A content page will contain 1 page specifications for its draft layout and 1 page specifications for its published layout. A widget page contains only 1 page specification for its published layout.
	*/
	export class PageSpecification {
			"customFields"?: Array<any>;
			"externalReferenceCode"?: string;
			"siteTemplatePageSpecificationExternalReferenceCode"?: string;
			"status"?: 'Approved' | 'Draft';
			"type"?: 'ContentPageSpecification' | 'EmbeddedPageSpecification' | 'LinkToPagePageSpecification' | 'LinkToURLPageSpecification' | 'PageSetPageSpecification' | 'WidgetPageSpecification';

		static "discriminator": string | undefined = "type";

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "customFields",
			name: "customFields",
			type: "Array<any>",
		},
		{
			baseName: "externalReferenceCode",
			name: "externalReferenceCode",
			type: "string",
		},
		{
			baseName: "siteTemplatePageSpecificationExternalReferenceCode",
			name: "siteTemplatePageSpecificationExternalReferenceCode",
			type: "string",
		},
		{
			baseName: "status",
			name: "status",
			type: "'Approved' | 'Draft'",
		},
		{
			baseName: "type",
			name: "type",
			type: "'ContentPageSpecification' | 'EmbeddedPageSpecification' | 'LinkToPagePageSpecification' | 'LinkToURLPageSpecification' | 'PageSetPageSpecification' | 'WidgetPageSpecification'",
		},
		];

		static getAttributeTypeMap() {
				return PageSpecification.attributeTypeMap;
		}
	}
