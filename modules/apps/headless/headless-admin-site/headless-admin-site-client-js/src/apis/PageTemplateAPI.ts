/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ObjectSerializer} from '../utils/SerDes';

		import {ContentPageSpecification} from '../models/ContentPageSpecification';
		import {PagePageTemplate} from '../models/PagePageTemplate';
		import {PageTemplate} from '../models/PageTemplate';

/**
 * @author Rubén Pulido
 * @generated
 */

export class PageTemplateAPI {
	protected _basePath: string;
	protected _defaultHeaders: any = {};

	constructor(basePath?: string) {
		if (basePath) {
			this._basePath = basePath;
		}
	}

	set defaultHeaders(defaultHeaders: any) {
		this._defaultHeaders = defaultHeaders;
	}

		/**
		 * Deletes a specific page template of a site.
				 * @param siteExternalReferenceCode
				 * @param pageTemplateExternalReferenceCode
		 * @param headers Optional custom request headers
		 */
		public async deleteSitePageTemplate(
						siteExternalReferenceCode: string,
						pageTemplateExternalReferenceCode: string,
			headers?: {[name: string]: string},
		): Promise<{
				body?: any;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/page-templates/{pageTemplateExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{pageTemplateExternalReferenceCode}",encodeURIComponent(pageTemplateExternalReferenceCode))
				;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling deleteSitePageTemplate.");
						}

						if (pageTemplateExternalReferenceCode === null || pageTemplateExternalReferenceCode === undefined) {
							throw new Error("Required parameter pageTemplateExternalReferenceCode was null or undefined when calling deleteSitePageTemplate.");
						}

			const queryString = Object.keys(queryParameters).length ?
				"?" + new URLSearchParams(queryParameters).toString() :
					"";

			const response = await fetch(path + queryString, {
				headers:
					Object.assign({}, this._defaultHeaders
						,{
								Accept: "application/json"
						}
					,headers || {}
					),
				method: "DELETE",
			});

			if (response.ok) {
				const contentType = response.headers.get("content-type") || "";

					if (contentType.includes("application/json")) {
						return {body: await response.json(), response};
					}
					else {
						return {body: await response.text(), response};
					}
			}
			else {
				throw new Error("HTTP Error " + response.status + ": " + response.statusText + ". " + await response.text());
			}
		}

		/**
		 * Retrieves a specific page template of a site.
				 * @param siteExternalReferenceCode
				 * @param pageTemplateExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 * @param headers Optional custom request headers
		 */
		public async getSitePageTemplate(
						siteExternalReferenceCode: string,
						pageTemplateExternalReferenceCode: string,
						fields?: string,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: PageTemplate;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/page-templates/{pageTemplateExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{pageTemplateExternalReferenceCode}",encodeURIComponent(pageTemplateExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling getSitePageTemplate.");
						}

						if (pageTemplateExternalReferenceCode === null || pageTemplateExternalReferenceCode === undefined) {
							throw new Error("Required parameter pageTemplateExternalReferenceCode was null or undefined when calling getSitePageTemplate.");
						}

						if (fields !== undefined) {
							queryParameters["fields"] = ObjectSerializer.serialize(fields, "string");
						}

						if (nestedFields !== undefined) {
							queryParameters["nestedFields"] = ObjectSerializer.serialize(nestedFields, "string");
						}

						if (restrictFields !== undefined) {
							queryParameters["restrictFields"] = ObjectSerializer.serialize(restrictFields, "string");
						}

			const queryString = Object.keys(queryParameters).length ?
				"?" + new URLSearchParams(queryParameters).toString() :
					"";

			const response = await fetch(path + queryString, {
				headers:
					Object.assign({}, this._defaultHeaders
						,{
								Accept: "application/json"
						}
					,headers || {}
					),
				method: "GET",
			});

			if (response.ok) {
				const contentType = response.headers.get("content-type") || "";

					if (contentType.includes("application/json")) {
						return {body: ObjectSerializer.deserialize(await response.json(), "PageTemplate"), response};
					}
					else {
						return {body: await response.text() as any, response};
					}
			}
			else {
				throw new Error("HTTP Error " + response.status + ": " + response.statusText + ". " + await response.text());
			}
		}

		/**
		 * 
				 * @param siteExternalReferenceCode
				 * @param pageTemplateExternalReferenceCode
				 * @param fields
				 * @param restrictFields
				 * @param roleNames
		 * @param headers Optional custom request headers
		 */
		public async getSitePageTemplatePermissionsPage(
						siteExternalReferenceCode: string,
						pageTemplateExternalReferenceCode: string,
						fields?: string,
						restrictFields?: string,
						roleNames?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body?: any;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/page-templates/{pageTemplateExternalReferenceCode}/permissions"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{pageTemplateExternalReferenceCode}",encodeURIComponent(pageTemplateExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling getSitePageTemplatePermissionsPage.");
						}

						if (pageTemplateExternalReferenceCode === null || pageTemplateExternalReferenceCode === undefined) {
							throw new Error("Required parameter pageTemplateExternalReferenceCode was null or undefined when calling getSitePageTemplatePermissionsPage.");
						}

						if (fields !== undefined) {
							queryParameters["fields"] = ObjectSerializer.serialize(fields, "string");
						}

						if (restrictFields !== undefined) {
							queryParameters["restrictFields"] = ObjectSerializer.serialize(restrictFields, "string");
						}

						if (roleNames !== undefined) {
							queryParameters["roleNames"] = ObjectSerializer.serialize(roleNames, "string");
						}

			const queryString = Object.keys(queryParameters).length ?
				"?" + new URLSearchParams(queryParameters).toString() :
					"";

			const response = await fetch(path + queryString, {
				headers:
					Object.assign({}, this._defaultHeaders
						,{
								Accept: "application/json"
						}
					,headers || {}
					),
				method: "GET",
			});

			if (response.ok) {
				const contentType = response.headers.get("content-type") || "";

					if (contentType.includes("application/json")) {
						return {body: await response.json(), response};
					}
					else {
						return {body: await response.text(), response};
					}
			}
			else {
				throw new Error("HTTP Error " + response.status + ": " + response.statusText + ". " + await response.text());
			}
		}

		/**
		 * Retrieves all the page templates within a page template set of a site page.
				 * @param siteExternalReferenceCode
				 * @param pageTemplateSetExternalReferenceCode
				 * @param fields
				 * @param flatten
				 * @param nestedFields
				 * @param restrictFields
		 * @param headers Optional custom request headers
		 */
		public async getSitePageTemplateSetPageTemplatesPage(
						siteExternalReferenceCode: string,
						pageTemplateSetExternalReferenceCode: string,
						fields?: string,
						flatten?: boolean,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: PagePageTemplate;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/page-template-sets/{pageTemplateSetExternalReferenceCode}/page-templates"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{pageTemplateSetExternalReferenceCode}",encodeURIComponent(pageTemplateSetExternalReferenceCode))
																				;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling getSitePageTemplateSetPageTemplatesPage.");
						}

						if (pageTemplateSetExternalReferenceCode === null || pageTemplateSetExternalReferenceCode === undefined) {
							throw new Error("Required parameter pageTemplateSetExternalReferenceCode was null or undefined when calling getSitePageTemplateSetPageTemplatesPage.");
						}

						if (fields !== undefined) {
							queryParameters["fields"] = ObjectSerializer.serialize(fields, "string");
						}

						if (flatten !== undefined) {
							queryParameters["flatten"] = ObjectSerializer.serialize(flatten, "boolean");
						}

						if (nestedFields !== undefined) {
							queryParameters["nestedFields"] = ObjectSerializer.serialize(nestedFields, "string");
						}

						if (restrictFields !== undefined) {
							queryParameters["restrictFields"] = ObjectSerializer.serialize(restrictFields, "string");
						}

			const queryString = Object.keys(queryParameters).length ?
				"?" + new URLSearchParams(queryParameters).toString() :
					"";

			const response = await fetch(path + queryString, {
				headers:
					Object.assign({}, this._defaultHeaders
						,{
								Accept: "application/json"
						}
					,headers || {}
					),
				method: "GET",
			});

			if (response.ok) {
				const contentType = response.headers.get("content-type") || "";

					if (contentType.includes("application/json")) {
						return {body: ObjectSerializer.deserialize(await response.json(), "PagePageTemplate"), response};
					}
					else {
						return {body: await response.text() as any, response};
					}
			}
			else {
				throw new Error("HTTP Error " + response.status + ": " + response.statusText + ". " + await response.text());
			}
		}

		/**
		 * Retrieves the page templates of the site
				 * @param siteExternalReferenceCode
				 * @param aggregationTerms
				 * @param fields
				 * @param filter
				 * @param nestedFields
				 * @param page
				 * @param pageSize
				 * @param restrictFields
				 * @param search
				 * @param sort
		 * @param headers Optional custom request headers
		 */
		public async getSitePageTemplatesPage(
						siteExternalReferenceCode: string,
						aggregationTerms?: Array<string>,
						fields?: string,
						filter?: string,
						nestedFields?: string,
						page?: number,
						pageSize?: number,
						restrictFields?: string,
						search?: string,
						sort?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: PagePageTemplate;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/page-templates"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
																																								;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling getSitePageTemplatesPage.");
						}

						if (aggregationTerms !== undefined) {
							queryParameters["aggregationTerms"] = ObjectSerializer.serialize(aggregationTerms, "Array<string>");
						}

						if (fields !== undefined) {
							queryParameters["fields"] = ObjectSerializer.serialize(fields, "string");
						}

						if (filter !== undefined) {
							queryParameters["filter"] = ObjectSerializer.serialize(filter, "string");
						}

						if (nestedFields !== undefined) {
							queryParameters["nestedFields"] = ObjectSerializer.serialize(nestedFields, "string");
						}

						if (page !== undefined) {
							queryParameters["page"] = ObjectSerializer.serialize(page, "number");
						}

						if (pageSize !== undefined) {
							queryParameters["pageSize"] = ObjectSerializer.serialize(pageSize, "number");
						}

						if (restrictFields !== undefined) {
							queryParameters["restrictFields"] = ObjectSerializer.serialize(restrictFields, "string");
						}

						if (search !== undefined) {
							queryParameters["search"] = ObjectSerializer.serialize(search, "string");
						}

						if (sort !== undefined) {
							queryParameters["sort"] = ObjectSerializer.serialize(sort, "string");
						}

			const queryString = Object.keys(queryParameters).length ?
				"?" + new URLSearchParams(queryParameters).toString() :
					"";

			const response = await fetch(path + queryString, {
				headers:
					Object.assign({}, this._defaultHeaders
						,{
								Accept: "application/json"
						}
					,headers || {}
					),
				method: "GET",
			});

			if (response.ok) {
				const contentType = response.headers.get("content-type") || "";

					if (contentType.includes("application/json")) {
						return {body: ObjectSerializer.deserialize(await response.json(), "PagePageTemplate"), response};
					}
					else {
						return {body: await response.text() as any, response};
					}
			}
			else {
				throw new Error("HTTP Error " + response.status + ": " + response.statusText + ". " + await response.text());
			}
		}

		/**
		 * Updates only the fields received in the request body, leaving any other fields untouched.
				 * @param siteExternalReferenceCode
				 * @param pageTemplateExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async patchSitePageTemplateWithContentType(
						siteExternalReferenceCode: string,
						pageTemplateExternalReferenceCode: string,
					requestBody:
							{
								parameters: {
										pageTemplate?: PageTemplate
								},
								type: "application/json"
							}
								|
							{
								parameters: {
										pageTemplate?: PageTemplate
								},
								type: "application/xml"
							}
								,
						fields?: string,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: PageTemplate;
			response: Response;
		}> {
				let body;
						if (requestBody.type === "application/json") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.pageTemplate, "PageTemplate"));
						}
						if (requestBody.type === "application/xml") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.pageTemplate, "PageTemplate"));
						}

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/page-templates/{pageTemplateExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{pageTemplateExternalReferenceCode}",encodeURIComponent(pageTemplateExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling patchSitePageTemplate.");
						}

						if (pageTemplateExternalReferenceCode === null || pageTemplateExternalReferenceCode === undefined) {
							throw new Error("Required parameter pageTemplateExternalReferenceCode was null or undefined when calling patchSitePageTemplate.");
						}

						if (fields !== undefined) {
							queryParameters["fields"] = ObjectSerializer.serialize(fields, "string");
						}

						if (nestedFields !== undefined) {
							queryParameters["nestedFields"] = ObjectSerializer.serialize(nestedFields, "string");
						}

						if (restrictFields !== undefined) {
							queryParameters["restrictFields"] = ObjectSerializer.serialize(restrictFields, "string");
						}

			const queryString = Object.keys(queryParameters).length ?
				"?" + new URLSearchParams(queryParameters).toString() :
					"";

			const response = await fetch(path + queryString, {
					body: body,
				headers:
					Object.assign({}, this._defaultHeaders
						,{
								Accept: "application/json"
						}
								,{"Content-Type": requestBody.type}
					,headers || {}
					),
				method: "PATCH",
			});

			if (response.ok) {
				const contentType = response.headers.get("content-type") || "";

					if (contentType.includes("application/json")) {
						return {body: ObjectSerializer.deserialize(await response.json(), "PageTemplate"), response};
					}
					else {
						return {body: await response.text() as any, response};
					}
			}
			else {
				throw new Error("HTTP Error " + response.status + ": " + response.statusText + ". " + await response.text());
			}
		}

					/**
					 * Updates only the fields received in the request body, leaving any other fields untouched. - Default method for JSON body
							 * @param siteExternalReferenceCode
							 * @param pageTemplateExternalReferenceCode
							 * @param fields
							 * @param nestedFields
							 * @param restrictFields
						 * @param pageTemplate
					 */
					public async patchSitePageTemplate(
									siteExternalReferenceCode: string,
									pageTemplateExternalReferenceCode: string,
							pageTemplate?: PageTemplate,
									fields?: string,
									nestedFields?: string,
									restrictFields?: string,
						headers?: {[name: string]: string}
					): Promise<{
							body: PageTemplate;
						response: Response;
					}> {
						return this.patchSitePageTemplateWithContentType(
										siteExternalReferenceCode,
										pageTemplateExternalReferenceCode,
							{
								parameters: {
										pageTemplate: pageTemplate
								},
								type: "application/json"
							},
										fields,
										nestedFields,
										restrictFields,
							headers
						);
					}
		/**
		 * Adds a new page template
				 * @param siteExternalReferenceCode
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async postSitePageTemplateWithContentType(
						siteExternalReferenceCode: string,
					requestBody:
							{
								parameters: {
										pageTemplate?: PageTemplate
								},
								type: "application/json"
							}
								|
							{
								parameters: {
										pageTemplate?: PageTemplate
								},
								type: "application/xml"
							}
								,
			headers?: {[name: string]: string},
		): Promise<{
				body: PageTemplate;
			response: Response;
		}> {
				let body;
						if (requestBody.type === "application/json") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.pageTemplate, "PageTemplate"));
						}
						if (requestBody.type === "application/xml") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.pageTemplate, "PageTemplate"));
						}

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/page-templates"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
				;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling postSitePageTemplate.");
						}

			const queryString = Object.keys(queryParameters).length ?
				"?" + new URLSearchParams(queryParameters).toString() :
					"";

			const response = await fetch(path + queryString, {
					body: body,
				headers:
					Object.assign({}, this._defaultHeaders
						,{
								Accept: "application/json"
						}
								,{"Content-Type": requestBody.type}
					,headers || {}
					),
				method: "POST",
			});

			if (response.ok) {
				const contentType = response.headers.get("content-type") || "";

					if (contentType.includes("application/json")) {
						return {body: ObjectSerializer.deserialize(await response.json(), "PageTemplate"), response};
					}
					else {
						return {body: await response.text() as any, response};
					}
			}
			else {
				throw new Error("HTTP Error " + response.status + ": " + response.statusText + ". " + await response.text());
			}
		}

					/**
					 * Adds a new page template - Default method for JSON body
							 * @param siteExternalReferenceCode
						 * @param pageTemplate
					 */
					public async postSitePageTemplate(
									siteExternalReferenceCode: string,
							pageTemplate?: PageTemplate,
						headers?: {[name: string]: string}
					): Promise<{
							body: PageTemplate;
						response: Response;
					}> {
						return this.postSitePageTemplateWithContentType(
										siteExternalReferenceCode,
							{
								parameters: {
										pageTemplate: pageTemplate
								},
								type: "application/json"
							},
							headers
						);
					}
		/**
		 * Adds a new page specification in draft status to a page template.
				 * @param siteExternalReferenceCode
				 * @param pageTemplateExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async postSitePageTemplatePageSpecificationWithContentType(
						siteExternalReferenceCode: string,
						pageTemplateExternalReferenceCode: string,
					requestBody:
							{
								parameters: {
										contentPageSpecification?: ContentPageSpecification
								},
								type: "application/json"
							}
								|
							{
								parameters: {
										contentPageSpecification?: ContentPageSpecification
								},
								type: "application/xml"
							}
								,
						fields?: string,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: ContentPageSpecification;
			response: Response;
		}> {
				let body;
						if (requestBody.type === "application/json") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.contentPageSpecification, "ContentPageSpecification"));
						}
						if (requestBody.type === "application/xml") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.contentPageSpecification, "ContentPageSpecification"));
						}

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/page-templates/{pageTemplateExternalReferenceCode}/page-specifications"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{pageTemplateExternalReferenceCode}",encodeURIComponent(pageTemplateExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling postSitePageTemplatePageSpecification.");
						}

						if (pageTemplateExternalReferenceCode === null || pageTemplateExternalReferenceCode === undefined) {
							throw new Error("Required parameter pageTemplateExternalReferenceCode was null or undefined when calling postSitePageTemplatePageSpecification.");
						}

						if (fields !== undefined) {
							queryParameters["fields"] = ObjectSerializer.serialize(fields, "string");
						}

						if (nestedFields !== undefined) {
							queryParameters["nestedFields"] = ObjectSerializer.serialize(nestedFields, "string");
						}

						if (restrictFields !== undefined) {
							queryParameters["restrictFields"] = ObjectSerializer.serialize(restrictFields, "string");
						}

			const queryString = Object.keys(queryParameters).length ?
				"?" + new URLSearchParams(queryParameters).toString() :
					"";

			const response = await fetch(path + queryString, {
					body: body,
				headers:
					Object.assign({}, this._defaultHeaders
						,{
								Accept: "application/json"
						}
								,{"Content-Type": requestBody.type}
					,headers || {}
					),
				method: "POST",
			});

			if (response.ok) {
				const contentType = response.headers.get("content-type") || "";

					if (contentType.includes("application/json")) {
						return {body: ObjectSerializer.deserialize(await response.json(), "ContentPageSpecification"), response};
					}
					else {
						return {body: await response.text() as any, response};
					}
			}
			else {
				throw new Error("HTTP Error " + response.status + ": " + response.statusText + ". " + await response.text());
			}
		}

					/**
					 * Adds a new page specification in draft status to a page template. - Default method for JSON body
							 * @param siteExternalReferenceCode
							 * @param pageTemplateExternalReferenceCode
							 * @param fields
							 * @param nestedFields
							 * @param restrictFields
						 * @param contentPageSpecification
					 */
					public async postSitePageTemplatePageSpecification(
									siteExternalReferenceCode: string,
									pageTemplateExternalReferenceCode: string,
							contentPageSpecification?: ContentPageSpecification,
									fields?: string,
									nestedFields?: string,
									restrictFields?: string,
						headers?: {[name: string]: string}
					): Promise<{
							body: ContentPageSpecification;
						response: Response;
					}> {
						return this.postSitePageTemplatePageSpecificationWithContentType(
										siteExternalReferenceCode,
										pageTemplateExternalReferenceCode,
							{
								parameters: {
										contentPageSpecification: contentPageSpecification
								},
								type: "application/json"
							},
										fields,
										nestedFields,
										restrictFields,
							headers
						);
					}
		/**
		 * Adds a new page template in draft status to a page template set.
				 * @param siteExternalReferenceCode
				 * @param pageTemplateSetExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async postSitePageTemplateSetPageTemplateWithContentType(
						siteExternalReferenceCode: string,
						pageTemplateSetExternalReferenceCode: string,
					requestBody:
							{
								parameters: {
										pageTemplate?: PageTemplate
								},
								type: "application/json"
							}
								|
							{
								parameters: {
										pageTemplate?: PageTemplate
								},
								type: "application/xml"
							}
								,
						fields?: string,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: PageTemplate;
			response: Response;
		}> {
				let body;
						if (requestBody.type === "application/json") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.pageTemplate, "PageTemplate"));
						}
						if (requestBody.type === "application/xml") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.pageTemplate, "PageTemplate"));
						}

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/page-template-sets/{pageTemplateSetExternalReferenceCode}/page-templates"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{pageTemplateSetExternalReferenceCode}",encodeURIComponent(pageTemplateSetExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling postSitePageTemplateSetPageTemplate.");
						}

						if (pageTemplateSetExternalReferenceCode === null || pageTemplateSetExternalReferenceCode === undefined) {
							throw new Error("Required parameter pageTemplateSetExternalReferenceCode was null or undefined when calling postSitePageTemplateSetPageTemplate.");
						}

						if (fields !== undefined) {
							queryParameters["fields"] = ObjectSerializer.serialize(fields, "string");
						}

						if (nestedFields !== undefined) {
							queryParameters["nestedFields"] = ObjectSerializer.serialize(nestedFields, "string");
						}

						if (restrictFields !== undefined) {
							queryParameters["restrictFields"] = ObjectSerializer.serialize(restrictFields, "string");
						}

			const queryString = Object.keys(queryParameters).length ?
				"?" + new URLSearchParams(queryParameters).toString() :
					"";

			const response = await fetch(path + queryString, {
					body: body,
				headers:
					Object.assign({}, this._defaultHeaders
						,{
								Accept: "application/json"
						}
								,{"Content-Type": requestBody.type}
					,headers || {}
					),
				method: "POST",
			});

			if (response.ok) {
				const contentType = response.headers.get("content-type") || "";

					if (contentType.includes("application/json")) {
						return {body: ObjectSerializer.deserialize(await response.json(), "PageTemplate"), response};
					}
					else {
						return {body: await response.text() as any, response};
					}
			}
			else {
				throw new Error("HTTP Error " + response.status + ": " + response.statusText + ". " + await response.text());
			}
		}

					/**
					 * Adds a new page template in draft status to a page template set. - Default method for JSON body
							 * @param siteExternalReferenceCode
							 * @param pageTemplateSetExternalReferenceCode
							 * @param fields
							 * @param nestedFields
							 * @param restrictFields
						 * @param pageTemplate
					 */
					public async postSitePageTemplateSetPageTemplate(
									siteExternalReferenceCode: string,
									pageTemplateSetExternalReferenceCode: string,
							pageTemplate?: PageTemplate,
									fields?: string,
									nestedFields?: string,
									restrictFields?: string,
						headers?: {[name: string]: string}
					): Promise<{
							body: PageTemplate;
						response: Response;
					}> {
						return this.postSitePageTemplateSetPageTemplateWithContentType(
										siteExternalReferenceCode,
										pageTemplateSetExternalReferenceCode,
							{
								parameters: {
										pageTemplate: pageTemplate
								},
								type: "application/json"
							},
										fields,
										nestedFields,
										restrictFields,
							headers
						);
					}
		/**
		 * Updates the page template with the given external reference code, or creates it if it does not exist.
				 * @param siteExternalReferenceCode
				 * @param pageTemplateExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async putSitePageTemplateWithContentType(
						siteExternalReferenceCode: string,
						pageTemplateExternalReferenceCode: string,
					requestBody:
							{
								parameters: {
										pageTemplate?: PageTemplate
								},
								type: "application/json"
							}
								|
							{
								parameters: {
										pageTemplate?: PageTemplate
								},
								type: "application/xml"
							}
								,
						fields?: string,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: PageTemplate;
			response: Response;
		}> {
				let body;
						if (requestBody.type === "application/json") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.pageTemplate, "PageTemplate"));
						}
						if (requestBody.type === "application/xml") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.pageTemplate, "PageTemplate"));
						}

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/page-templates/{pageTemplateExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{pageTemplateExternalReferenceCode}",encodeURIComponent(pageTemplateExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling putSitePageTemplate.");
						}

						if (pageTemplateExternalReferenceCode === null || pageTemplateExternalReferenceCode === undefined) {
							throw new Error("Required parameter pageTemplateExternalReferenceCode was null or undefined when calling putSitePageTemplate.");
						}

						if (fields !== undefined) {
							queryParameters["fields"] = ObjectSerializer.serialize(fields, "string");
						}

						if (nestedFields !== undefined) {
							queryParameters["nestedFields"] = ObjectSerializer.serialize(nestedFields, "string");
						}

						if (restrictFields !== undefined) {
							queryParameters["restrictFields"] = ObjectSerializer.serialize(restrictFields, "string");
						}

			const queryString = Object.keys(queryParameters).length ?
				"?" + new URLSearchParams(queryParameters).toString() :
					"";

			const response = await fetch(path + queryString, {
					body: body,
				headers:
					Object.assign({}, this._defaultHeaders
						,{
								Accept: "application/json"
						}
								,{"Content-Type": requestBody.type}
					,headers || {}
					),
				method: "PUT",
			});

			if (response.ok) {
				const contentType = response.headers.get("content-type") || "";

					if (contentType.includes("application/json")) {
						return {body: ObjectSerializer.deserialize(await response.json(), "PageTemplate"), response};
					}
					else {
						return {body: await response.text() as any, response};
					}
			}
			else {
				throw new Error("HTTP Error " + response.status + ": " + response.statusText + ". " + await response.text());
			}
		}

					/**
					 * Updates the page template with the given external reference code, or creates it if it does not exist. - Default method for JSON body
							 * @param siteExternalReferenceCode
							 * @param pageTemplateExternalReferenceCode
							 * @param fields
							 * @param nestedFields
							 * @param restrictFields
						 * @param pageTemplate
					 */
					public async putSitePageTemplate(
									siteExternalReferenceCode: string,
									pageTemplateExternalReferenceCode: string,
							pageTemplate?: PageTemplate,
									fields?: string,
									nestedFields?: string,
									restrictFields?: string,
						headers?: {[name: string]: string}
					): Promise<{
							body: PageTemplate;
						response: Response;
					}> {
						return this.putSitePageTemplateWithContentType(
										siteExternalReferenceCode,
										pageTemplateExternalReferenceCode,
							{
								parameters: {
										pageTemplate: pageTemplate
								},
								type: "application/json"
							},
										fields,
										nestedFields,
										restrictFields,
							headers
						);
					}
		/**
		 * 
				 * @param siteExternalReferenceCode
				 * @param pageTemplateExternalReferenceCode
		 * @param headers Optional custom request headers
		 */
		public async putSitePageTemplatePermissionsPage(
						siteExternalReferenceCode: string,
						pageTemplateExternalReferenceCode: string,
			headers?: {[name: string]: string},
		): Promise<{
				body?: any;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/page-templates/{pageTemplateExternalReferenceCode}/permissions"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{pageTemplateExternalReferenceCode}",encodeURIComponent(pageTemplateExternalReferenceCode))
				;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling putSitePageTemplatePermissionsPage.");
						}

						if (pageTemplateExternalReferenceCode === null || pageTemplateExternalReferenceCode === undefined) {
							throw new Error("Required parameter pageTemplateExternalReferenceCode was null or undefined when calling putSitePageTemplatePermissionsPage.");
						}

			const queryString = Object.keys(queryParameters).length ?
				"?" + new URLSearchParams(queryParameters).toString() :
					"";

			const response = await fetch(path + queryString, {
				headers:
					Object.assign({}, this._defaultHeaders
						,{
								Accept: "application/json"
						}
					,headers || {}
					),
				method: "PUT",
			});

			if (response.ok) {
				const contentType = response.headers.get("content-type") || "";

					if (contentType.includes("application/json")) {
						return {body: await response.json(), response};
					}
					else {
						return {body: await response.text(), response};
					}
			}
			else {
				throw new Error("HTTP Error " + response.status + ": " + response.statusText + ". " + await response.text());
			}
		}

}