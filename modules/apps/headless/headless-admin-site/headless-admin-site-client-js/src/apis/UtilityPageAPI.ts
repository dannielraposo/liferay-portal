/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ObjectSerializer} from '../utils/SerDes';

		import {ContentPageSpecification} from '../models/ContentPageSpecification';
		import {PageUtilityPage} from '../models/PageUtilityPage';
		import {UtilityPage} from '../models/UtilityPage';

/**
 * @author Rubén Pulido
 * @generated
 */

export class UtilityPageAPI {
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
		 * Deletes a specific utility page of a site.
				 * @param siteExternalReferenceCode
				 * @param utilityPageExternalReferenceCode
		 * @param headers Optional custom request headers
		 */
		public async deleteSiteUtilityPage(
						siteExternalReferenceCode: string,
						utilityPageExternalReferenceCode: string,
			headers?: {[name: string]: string},
		): Promise<{
				body?: any;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/utility-pages/{utilityPageExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{utilityPageExternalReferenceCode}",encodeURIComponent(utilityPageExternalReferenceCode))
				;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling deleteSiteUtilityPage.");
						}

						if (utilityPageExternalReferenceCode === null || utilityPageExternalReferenceCode === undefined) {
							throw new Error("Required parameter utilityPageExternalReferenceCode was null or undefined when calling deleteSiteUtilityPage.");
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
		 * Retrieves a specific utility page of a site.
				 * @param siteExternalReferenceCode
				 * @param utilityPageExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 * @param headers Optional custom request headers
		 */
		public async getSiteUtilityPage(
						siteExternalReferenceCode: string,
						utilityPageExternalReferenceCode: string,
						fields?: string,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: UtilityPage;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/utility-pages/{utilityPageExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{utilityPageExternalReferenceCode}",encodeURIComponent(utilityPageExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling getSiteUtilityPage.");
						}

						if (utilityPageExternalReferenceCode === null || utilityPageExternalReferenceCode === undefined) {
							throw new Error("Required parameter utilityPageExternalReferenceCode was null or undefined when calling getSiteUtilityPage.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "UtilityPage"), response};
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
				 * @param utilityPageExternalReferenceCode
				 * @param fields
				 * @param restrictFields
				 * @param roleNames
		 * @param headers Optional custom request headers
		 */
		public async getSiteUtilityPagePermissionsPage(
						siteExternalReferenceCode: string,
						utilityPageExternalReferenceCode: string,
						fields?: string,
						restrictFields?: string,
						roleNames?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body?: any;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/utility-pages/{utilityPageExternalReferenceCode}/permissions"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{utilityPageExternalReferenceCode}",encodeURIComponent(utilityPageExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling getSiteUtilityPagePermissionsPage.");
						}

						if (utilityPageExternalReferenceCode === null || utilityPageExternalReferenceCode === undefined) {
							throw new Error("Required parameter utilityPageExternalReferenceCode was null or undefined when calling getSiteUtilityPagePermissionsPage.");
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
		 * Retrieves the utility pages of the site.
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
		public async getSiteUtilityPagesPage(
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
				body: PageUtilityPage;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/utility-pages"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
																																								;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling getSiteUtilityPagesPage.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "PageUtilityPage"), response};
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
				 * @param utilityPageExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async patchSiteUtilityPageWithContentType(
						siteExternalReferenceCode: string,
						utilityPageExternalReferenceCode: string,
					requestBody:
							{
								parameters: {
										utilityPage?: UtilityPage
								},
								type: "application/json"
							}
								|
							{
								parameters: {
										utilityPage?: UtilityPage
								},
								type: "application/xml"
							}
								,
						fields?: string,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: UtilityPage;
			response: Response;
		}> {
				let body;
						if (requestBody.type === "application/json") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.utilityPage, "UtilityPage"));
						}
						if (requestBody.type === "application/xml") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.utilityPage, "UtilityPage"));
						}

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/utility-pages/{utilityPageExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{utilityPageExternalReferenceCode}",encodeURIComponent(utilityPageExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling patchSiteUtilityPage.");
						}

						if (utilityPageExternalReferenceCode === null || utilityPageExternalReferenceCode === undefined) {
							throw new Error("Required parameter utilityPageExternalReferenceCode was null or undefined when calling patchSiteUtilityPage.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "UtilityPage"), response};
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
							 * @param utilityPageExternalReferenceCode
							 * @param fields
							 * @param nestedFields
							 * @param restrictFields
						 * @param utilityPage
					 */
					public async patchSiteUtilityPage(
									siteExternalReferenceCode: string,
									utilityPageExternalReferenceCode: string,
							utilityPage?: UtilityPage,
									fields?: string,
									nestedFields?: string,
									restrictFields?: string,
						headers?: {[name: string]: string}
					): Promise<{
							body: UtilityPage;
						response: Response;
					}> {
						return this.patchSiteUtilityPageWithContentType(
										siteExternalReferenceCode,
										utilityPageExternalReferenceCode,
							{
								parameters: {
										utilityPage: utilityPage
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
		 * Adds a new utility page
				 * @param siteExternalReferenceCode
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async postSiteUtilityPageWithContentType(
						siteExternalReferenceCode: string,
					requestBody:
							{
								parameters: {
										utilityPage?: UtilityPage
								},
								type: "application/json"
							}
								|
							{
								parameters: {
										utilityPage?: UtilityPage
								},
								type: "application/xml"
							}
								,
			headers?: {[name: string]: string},
		): Promise<{
				body: UtilityPage;
			response: Response;
		}> {
				let body;
						if (requestBody.type === "application/json") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.utilityPage, "UtilityPage"));
						}
						if (requestBody.type === "application/xml") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.utilityPage, "UtilityPage"));
						}

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/utility-pages"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
				;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling postSiteUtilityPage.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "UtilityPage"), response};
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
					 * Adds a new utility page - Default method for JSON body
							 * @param siteExternalReferenceCode
						 * @param utilityPage
					 */
					public async postSiteUtilityPage(
									siteExternalReferenceCode: string,
							utilityPage?: UtilityPage,
						headers?: {[name: string]: string}
					): Promise<{
							body: UtilityPage;
						response: Response;
					}> {
						return this.postSiteUtilityPageWithContentType(
										siteExternalReferenceCode,
							{
								parameters: {
										utilityPage: utilityPage
								},
								type: "application/json"
							},
							headers
						);
					}
		/**
		 * Adds a new page specification to a utility page.
				 * @param siteExternalReferenceCode
				 * @param utilityPageExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async postSiteUtilityPagePageSpecificationWithContentType(
						siteExternalReferenceCode: string,
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
						utilityPageExternalReferenceCode?: string,
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

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/utility-pages/{utilityPageExternalReferenceCode}/page-specifications"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{utilityPageExternalReferenceCode}",encodeURIComponent(utilityPageExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling postSiteUtilityPagePageSpecification.");
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
					 * Adds a new page specification to a utility page. - Default method for JSON body
							 * @param siteExternalReferenceCode
							 * @param utilityPageExternalReferenceCode
							 * @param fields
							 * @param nestedFields
							 * @param restrictFields
						 * @param contentPageSpecification
					 */
					public async postSiteUtilityPagePageSpecification(
									siteExternalReferenceCode: string,
							contentPageSpecification?: ContentPageSpecification,
									utilityPageExternalReferenceCode?: string,
									fields?: string,
									nestedFields?: string,
									restrictFields?: string,
						headers?: {[name: string]: string}
					): Promise<{
							body: ContentPageSpecification;
						response: Response;
					}> {
						return this.postSiteUtilityPagePageSpecificationWithContentType(
										siteExternalReferenceCode,
							{
								parameters: {
										contentPageSpecification: contentPageSpecification
								},
								type: "application/json"
							},
										utilityPageExternalReferenceCode,
										fields,
										nestedFields,
										restrictFields,
							headers
						);
					}
		/**
		 * Updates the utility page with the given external reference code, or creates it if it does not exist.
				 * @param siteExternalReferenceCode
				 * @param utilityPageExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async putSiteUtilityPageWithContentType(
						siteExternalReferenceCode: string,
						utilityPageExternalReferenceCode: string,
					requestBody:
							{
								parameters: {
										utilityPage?: UtilityPage
								},
								type: "application/json"
							}
								|
							{
								parameters: {
										utilityPage?: UtilityPage
								},
								type: "application/xml"
							}
								,
						fields?: string,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: UtilityPage;
			response: Response;
		}> {
				let body;
						if (requestBody.type === "application/json") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.utilityPage, "UtilityPage"));
						}
						if (requestBody.type === "application/xml") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.utilityPage, "UtilityPage"));
						}

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/utility-pages/{utilityPageExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{utilityPageExternalReferenceCode}",encodeURIComponent(utilityPageExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling putSiteUtilityPage.");
						}

						if (utilityPageExternalReferenceCode === null || utilityPageExternalReferenceCode === undefined) {
							throw new Error("Required parameter utilityPageExternalReferenceCode was null or undefined when calling putSiteUtilityPage.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "UtilityPage"), response};
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
					 * Updates the utility page with the given external reference code, or creates it if it does not exist. - Default method for JSON body
							 * @param siteExternalReferenceCode
							 * @param utilityPageExternalReferenceCode
							 * @param fields
							 * @param nestedFields
							 * @param restrictFields
						 * @param utilityPage
					 */
					public async putSiteUtilityPage(
									siteExternalReferenceCode: string,
									utilityPageExternalReferenceCode: string,
							utilityPage?: UtilityPage,
									fields?: string,
									nestedFields?: string,
									restrictFields?: string,
						headers?: {[name: string]: string}
					): Promise<{
							body: UtilityPage;
						response: Response;
					}> {
						return this.putSiteUtilityPageWithContentType(
										siteExternalReferenceCode,
										utilityPageExternalReferenceCode,
							{
								parameters: {
										utilityPage: utilityPage
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
				 * @param utilityPageExternalReferenceCode
		 * @param headers Optional custom request headers
		 */
		public async putSiteUtilityPagePermissionsPage(
						siteExternalReferenceCode: string,
						utilityPageExternalReferenceCode: string,
			headers?: {[name: string]: string},
		): Promise<{
				body?: any;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/utility-pages/{utilityPageExternalReferenceCode}/permissions"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{utilityPageExternalReferenceCode}",encodeURIComponent(utilityPageExternalReferenceCode))
				;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling putSiteUtilityPagePermissionsPage.");
						}

						if (utilityPageExternalReferenceCode === null || utilityPageExternalReferenceCode === undefined) {
							throw new Error("Required parameter utilityPageExternalReferenceCode was null or undefined when calling putSiteUtilityPagePermissionsPage.");
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