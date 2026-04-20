/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ObjectSerializer} from '../utils/SerDes';

		import {ContentPageSpecification} from '../models/ContentPageSpecification';
		import {DisplayPageTemplate} from '../models/DisplayPageTemplate';
		import {PageDisplayPageTemplate} from '../models/PageDisplayPageTemplate';

/**
 * @author Rubén Pulido
 * @generated
 */

export class DisplayPageTemplateAPI {
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
		 * Deletes a specific display page template of a site.
				 * @param siteExternalReferenceCode
				 * @param displayPageTemplateExternalReferenceCode
		 * @param headers Optional custom request headers
		 */
		public async deleteSiteDisplayPageTemplate(
						siteExternalReferenceCode: string,
						displayPageTemplateExternalReferenceCode: string,
			headers?: {[name: string]: string},
		): Promise<{
				body?: any;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/display-page-templates/{displayPageTemplateExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{displayPageTemplateExternalReferenceCode}",encodeURIComponent(displayPageTemplateExternalReferenceCode))
				;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling deleteSiteDisplayPageTemplate.");
						}

						if (displayPageTemplateExternalReferenceCode === null || displayPageTemplateExternalReferenceCode === undefined) {
							throw new Error("Required parameter displayPageTemplateExternalReferenceCode was null or undefined when calling deleteSiteDisplayPageTemplate.");
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
		 * Retrieves a specific display page template of a site.
				 * @param siteExternalReferenceCode
				 * @param displayPageTemplateExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 * @param headers Optional custom request headers
		 */
		public async getSiteDisplayPageTemplate(
						siteExternalReferenceCode: string,
						displayPageTemplateExternalReferenceCode: string,
						fields?: string,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: DisplayPageTemplate;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/display-page-templates/{displayPageTemplateExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{displayPageTemplateExternalReferenceCode}",encodeURIComponent(displayPageTemplateExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling getSiteDisplayPageTemplate.");
						}

						if (displayPageTemplateExternalReferenceCode === null || displayPageTemplateExternalReferenceCode === undefined) {
							throw new Error("Required parameter displayPageTemplateExternalReferenceCode was null or undefined when calling getSiteDisplayPageTemplate.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "DisplayPageTemplate"), response};
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
		 * Retrieves all the display page templates within a display page template folder of a site page.
				 * @param siteExternalReferenceCode
				 * @param displayPageTemplateFolderExternalReferenceCode
				 * @param fields
				 * @param flatten
				 * @param nestedFields
				 * @param restrictFields
		 * @param headers Optional custom request headers
		 */
		public async getSiteDisplayPageTemplateFolderDisplayPageTemplatesPage(
						siteExternalReferenceCode: string,
						displayPageTemplateFolderExternalReferenceCode: string,
						fields?: string,
						flatten?: boolean,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: PageDisplayPageTemplate;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/display-page-template-folders/{displayPageTemplateFolderExternalReferenceCode}/display-page-templates"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{displayPageTemplateFolderExternalReferenceCode}",encodeURIComponent(displayPageTemplateFolderExternalReferenceCode))
																				;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling getSiteDisplayPageTemplateFolderDisplayPageTemplatesPage.");
						}

						if (displayPageTemplateFolderExternalReferenceCode === null || displayPageTemplateFolderExternalReferenceCode === undefined) {
							throw new Error("Required parameter displayPageTemplateFolderExternalReferenceCode was null or undefined when calling getSiteDisplayPageTemplateFolderDisplayPageTemplatesPage.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "PageDisplayPageTemplate"), response};
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
				 * @param displayPageTemplateExternalReferenceCode
				 * @param fields
				 * @param restrictFields
				 * @param roleNames
		 * @param headers Optional custom request headers
		 */
		public async getSiteDisplayPageTemplatePermissionsPage(
						siteExternalReferenceCode: string,
						displayPageTemplateExternalReferenceCode: string,
						fields?: string,
						restrictFields?: string,
						roleNames?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body?: any;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/display-page-templates/{displayPageTemplateExternalReferenceCode}/permissions"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{displayPageTemplateExternalReferenceCode}",encodeURIComponent(displayPageTemplateExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling getSiteDisplayPageTemplatePermissionsPage.");
						}

						if (displayPageTemplateExternalReferenceCode === null || displayPageTemplateExternalReferenceCode === undefined) {
							throw new Error("Required parameter displayPageTemplateExternalReferenceCode was null or undefined when calling getSiteDisplayPageTemplatePermissionsPage.");
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
		 * Retrieves the display page templates of the site
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
		public async getSiteDisplayPageTemplatesPage(
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
				body: PageDisplayPageTemplate;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/display-page-templates"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
																																								;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling getSiteDisplayPageTemplatesPage.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "PageDisplayPageTemplate"), response};
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
				 * @param displayPageTemplateExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async patchSiteDisplayPageTemplateWithContentType(
						siteExternalReferenceCode: string,
						displayPageTemplateExternalReferenceCode: string,
					requestBody:
							{
								parameters: {
										displayPageTemplate?: DisplayPageTemplate
								},
								type: "application/json"
							}
								|
							{
								parameters: {
										displayPageTemplate?: DisplayPageTemplate
								},
								type: "application/xml"
							}
								,
						fields?: string,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: DisplayPageTemplate;
			response: Response;
		}> {
				let body;
						if (requestBody.type === "application/json") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.displayPageTemplate, "DisplayPageTemplate"));
						}
						if (requestBody.type === "application/xml") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.displayPageTemplate, "DisplayPageTemplate"));
						}

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/display-page-templates/{displayPageTemplateExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{displayPageTemplateExternalReferenceCode}",encodeURIComponent(displayPageTemplateExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling patchSiteDisplayPageTemplate.");
						}

						if (displayPageTemplateExternalReferenceCode === null || displayPageTemplateExternalReferenceCode === undefined) {
							throw new Error("Required parameter displayPageTemplateExternalReferenceCode was null or undefined when calling patchSiteDisplayPageTemplate.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "DisplayPageTemplate"), response};
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
							 * @param displayPageTemplateExternalReferenceCode
							 * @param fields
							 * @param nestedFields
							 * @param restrictFields
						 * @param displayPageTemplate
					 */
					public async patchSiteDisplayPageTemplate(
									siteExternalReferenceCode: string,
									displayPageTemplateExternalReferenceCode: string,
							displayPageTemplate?: DisplayPageTemplate,
									fields?: string,
									nestedFields?: string,
									restrictFields?: string,
						headers?: {[name: string]: string}
					): Promise<{
							body: DisplayPageTemplate;
						response: Response;
					}> {
						return this.patchSiteDisplayPageTemplateWithContentType(
										siteExternalReferenceCode,
										displayPageTemplateExternalReferenceCode,
							{
								parameters: {
										displayPageTemplate: displayPageTemplate
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
		 * Adds a new display page template
				 * @param siteExternalReferenceCode
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async postSiteDisplayPageTemplateWithContentType(
						siteExternalReferenceCode: string,
					requestBody:
							{
								parameters: {
										displayPageTemplate?: DisplayPageTemplate
								},
								type: "application/json"
							}
								|
							{
								parameters: {
										displayPageTemplate?: DisplayPageTemplate
								},
								type: "application/xml"
							}
								,
			headers?: {[name: string]: string},
		): Promise<{
				body: DisplayPageTemplate;
			response: Response;
		}> {
				let body;
						if (requestBody.type === "application/json") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.displayPageTemplate, "DisplayPageTemplate"));
						}
						if (requestBody.type === "application/xml") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.displayPageTemplate, "DisplayPageTemplate"));
						}

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/display-page-templates"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
				;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling postSiteDisplayPageTemplate.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "DisplayPageTemplate"), response};
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
					 * Adds a new display page template - Default method for JSON body
							 * @param siteExternalReferenceCode
						 * @param displayPageTemplate
					 */
					public async postSiteDisplayPageTemplate(
									siteExternalReferenceCode: string,
							displayPageTemplate?: DisplayPageTemplate,
						headers?: {[name: string]: string}
					): Promise<{
							body: DisplayPageTemplate;
						response: Response;
					}> {
						return this.postSiteDisplayPageTemplateWithContentType(
										siteExternalReferenceCode,
							{
								parameters: {
										displayPageTemplate: displayPageTemplate
								},
								type: "application/json"
							},
							headers
						);
					}
		/**
		 * Adds a new display page template in draft status to a display page template folder.
				 * @param siteExternalReferenceCode
				 * @param displayPageTemplateFolderExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async postSiteDisplayPageTemplateFolderDisplayPageTemplateWithContentType(
						siteExternalReferenceCode: string,
						displayPageTemplateFolderExternalReferenceCode: string,
					requestBody:
							{
								parameters: {
										displayPageTemplate?: DisplayPageTemplate
								},
								type: "application/json"
							}
								|
							{
								parameters: {
										displayPageTemplate?: DisplayPageTemplate
								},
								type: "application/xml"
							}
								,
						fields?: string,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: DisplayPageTemplate;
			response: Response;
		}> {
				let body;
						if (requestBody.type === "application/json") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.displayPageTemplate, "DisplayPageTemplate"));
						}
						if (requestBody.type === "application/xml") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.displayPageTemplate, "DisplayPageTemplate"));
						}

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/display-page-template-folders/{displayPageTemplateFolderExternalReferenceCode}/display-page-templates"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{displayPageTemplateFolderExternalReferenceCode}",encodeURIComponent(displayPageTemplateFolderExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling postSiteDisplayPageTemplateFolderDisplayPageTemplate.");
						}

						if (displayPageTemplateFolderExternalReferenceCode === null || displayPageTemplateFolderExternalReferenceCode === undefined) {
							throw new Error("Required parameter displayPageTemplateFolderExternalReferenceCode was null or undefined when calling postSiteDisplayPageTemplateFolderDisplayPageTemplate.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "DisplayPageTemplate"), response};
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
					 * Adds a new display page template in draft status to a display page template folder. - Default method for JSON body
							 * @param siteExternalReferenceCode
							 * @param displayPageTemplateFolderExternalReferenceCode
							 * @param fields
							 * @param nestedFields
							 * @param restrictFields
						 * @param displayPageTemplate
					 */
					public async postSiteDisplayPageTemplateFolderDisplayPageTemplate(
									siteExternalReferenceCode: string,
									displayPageTemplateFolderExternalReferenceCode: string,
							displayPageTemplate?: DisplayPageTemplate,
									fields?: string,
									nestedFields?: string,
									restrictFields?: string,
						headers?: {[name: string]: string}
					): Promise<{
							body: DisplayPageTemplate;
						response: Response;
					}> {
						return this.postSiteDisplayPageTemplateFolderDisplayPageTemplateWithContentType(
										siteExternalReferenceCode,
										displayPageTemplateFolderExternalReferenceCode,
							{
								parameters: {
										displayPageTemplate: displayPageTemplate
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
		 * Adds a new page specification in draft status to a display page template.
				 * @param siteExternalReferenceCode
				 * @param displayPageTemplateExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async postSiteDisplayPageTemplatePageSpecificationWithContentType(
						siteExternalReferenceCode: string,
						displayPageTemplateExternalReferenceCode: string,
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

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/display-page-templates/{displayPageTemplateExternalReferenceCode}/page-specifications"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{displayPageTemplateExternalReferenceCode}",encodeURIComponent(displayPageTemplateExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling postSiteDisplayPageTemplatePageSpecification.");
						}

						if (displayPageTemplateExternalReferenceCode === null || displayPageTemplateExternalReferenceCode === undefined) {
							throw new Error("Required parameter displayPageTemplateExternalReferenceCode was null or undefined when calling postSiteDisplayPageTemplatePageSpecification.");
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
					 * Adds a new page specification in draft status to a display page template. - Default method for JSON body
							 * @param siteExternalReferenceCode
							 * @param displayPageTemplateExternalReferenceCode
							 * @param fields
							 * @param nestedFields
							 * @param restrictFields
						 * @param contentPageSpecification
					 */
					public async postSiteDisplayPageTemplatePageSpecification(
									siteExternalReferenceCode: string,
									displayPageTemplateExternalReferenceCode: string,
							contentPageSpecification?: ContentPageSpecification,
									fields?: string,
									nestedFields?: string,
									restrictFields?: string,
						headers?: {[name: string]: string}
					): Promise<{
							body: ContentPageSpecification;
						response: Response;
					}> {
						return this.postSiteDisplayPageTemplatePageSpecificationWithContentType(
										siteExternalReferenceCode,
										displayPageTemplateExternalReferenceCode,
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
		 * Updates the display page template with the given external reference code, or creates it if it does not exist.
				 * @param siteExternalReferenceCode
				 * @param displayPageTemplateExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async putSiteDisplayPageTemplateWithContentType(
						siteExternalReferenceCode: string,
						displayPageTemplateExternalReferenceCode: string,
					requestBody:
							{
								parameters: {
										displayPageTemplate?: DisplayPageTemplate
								},
								type: "application/json"
							}
								|
							{
								parameters: {
										displayPageTemplate?: DisplayPageTemplate
								},
								type: "application/xml"
							}
								,
						fields?: string,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: DisplayPageTemplate;
			response: Response;
		}> {
				let body;
						if (requestBody.type === "application/json") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.displayPageTemplate, "DisplayPageTemplate"));
						}
						if (requestBody.type === "application/xml") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.displayPageTemplate, "DisplayPageTemplate"));
						}

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/display-page-templates/{displayPageTemplateExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{displayPageTemplateExternalReferenceCode}",encodeURIComponent(displayPageTemplateExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling putSiteDisplayPageTemplate.");
						}

						if (displayPageTemplateExternalReferenceCode === null || displayPageTemplateExternalReferenceCode === undefined) {
							throw new Error("Required parameter displayPageTemplateExternalReferenceCode was null or undefined when calling putSiteDisplayPageTemplate.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "DisplayPageTemplate"), response};
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
					 * Updates the display page template with the given external reference code, or creates it if it does not exist. - Default method for JSON body
							 * @param siteExternalReferenceCode
							 * @param displayPageTemplateExternalReferenceCode
							 * @param fields
							 * @param nestedFields
							 * @param restrictFields
						 * @param displayPageTemplate
					 */
					public async putSiteDisplayPageTemplate(
									siteExternalReferenceCode: string,
									displayPageTemplateExternalReferenceCode: string,
							displayPageTemplate?: DisplayPageTemplate,
									fields?: string,
									nestedFields?: string,
									restrictFields?: string,
						headers?: {[name: string]: string}
					): Promise<{
							body: DisplayPageTemplate;
						response: Response;
					}> {
						return this.putSiteDisplayPageTemplateWithContentType(
										siteExternalReferenceCode,
										displayPageTemplateExternalReferenceCode,
							{
								parameters: {
										displayPageTemplate: displayPageTemplate
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
				 * @param displayPageTemplateExternalReferenceCode
		 * @param headers Optional custom request headers
		 */
		public async putSiteDisplayPageTemplatePermissionsPage(
						siteExternalReferenceCode: string,
						displayPageTemplateExternalReferenceCode: string,
			headers?: {[name: string]: string},
		): Promise<{
				body?: any;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/display-page-templates/{displayPageTemplateExternalReferenceCode}/permissions"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{displayPageTemplateExternalReferenceCode}",encodeURIComponent(displayPageTemplateExternalReferenceCode))
				;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling putSiteDisplayPageTemplatePermissionsPage.");
						}

						if (displayPageTemplateExternalReferenceCode === null || displayPageTemplateExternalReferenceCode === undefined) {
							throw new Error("Required parameter displayPageTemplateExternalReferenceCode was null or undefined when calling putSiteDisplayPageTemplatePermissionsPage.");
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