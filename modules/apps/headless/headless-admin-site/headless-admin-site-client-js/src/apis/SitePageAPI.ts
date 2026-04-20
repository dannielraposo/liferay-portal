/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ObjectSerializer} from '../utils/SerDes';

		import {ContentPageSpecification} from '../models/ContentPageSpecification';
		import {PageSitePage} from '../models/PageSitePage';
		import {SitePage} from '../models/SitePage';

/**
 * @author Rubén Pulido
 * @generated
 */

export class SitePageAPI {
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
		 * Deletes a specific public page of a site.
				 * @param siteExternalReferenceCode
				 * @param sitePageExternalReferenceCode
		 * @param headers Optional custom request headers
		 */
		public async deleteSiteSitePage(
						siteExternalReferenceCode: string,
						sitePageExternalReferenceCode: string,
			headers?: {[name: string]: string},
		): Promise<{
				body?: any;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/site-pages/{sitePageExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{sitePageExternalReferenceCode}",encodeURIComponent(sitePageExternalReferenceCode))
				;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling deleteSiteSitePage.");
						}

						if (sitePageExternalReferenceCode === null || sitePageExternalReferenceCode === undefined) {
							throw new Error("Required parameter sitePageExternalReferenceCode was null or undefined when calling deleteSiteSitePage.");
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
		 * Retrieves a specific public page of a site.
				 * @param siteExternalReferenceCode
				 * @param sitePageExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 * @param headers Optional custom request headers
		 */
		public async getSiteSitePage(
						siteExternalReferenceCode: string,
						sitePageExternalReferenceCode: string,
						fields?: string,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: SitePage;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/site-pages/{sitePageExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{sitePageExternalReferenceCode}",encodeURIComponent(sitePageExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling getSiteSitePage.");
						}

						if (sitePageExternalReferenceCode === null || sitePageExternalReferenceCode === undefined) {
							throw new Error("Required parameter sitePageExternalReferenceCode was null or undefined when calling getSiteSitePage.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "SitePage"), response};
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
				 * @param sitePageExternalReferenceCode
				 * @param fields
				 * @param restrictFields
				 * @param roleNames
		 * @param headers Optional custom request headers
		 */
		public async getSiteSitePagePermissionsPage(
						siteExternalReferenceCode: string,
						sitePageExternalReferenceCode: string,
						fields?: string,
						restrictFields?: string,
						roleNames?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body?: any;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/site-pages/{sitePageExternalReferenceCode}/permissions"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{sitePageExternalReferenceCode}",encodeURIComponent(sitePageExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling getSiteSitePagePermissionsPage.");
						}

						if (sitePageExternalReferenceCode === null || sitePageExternalReferenceCode === undefined) {
							throw new Error("Required parameter sitePageExternalReferenceCode was null or undefined when calling getSiteSitePagePermissionsPage.");
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
		 * Retrieves the private or public pages of the site
				 * @param siteExternalReferenceCode
				 * @param aggregationTerms
				 * @param fields
				 * @param filter
				 * @param nestedFields
				 * @param page
				 * @param pageSize
				 * @param privateLayout
				 * @param restrictFields
				 * @param search
				 * @param sort
		 * @param headers Optional custom request headers
		 */
		public async getSiteSitePagesPage(
						siteExternalReferenceCode: string,
						aggregationTerms?: Array<string>,
						fields?: string,
						filter?: string,
						nestedFields?: string,
						page?: number,
						pageSize?: number,
						privateLayout?: boolean,
						restrictFields?: string,
						search?: string,
						sort?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: PageSitePage;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/site-pages"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
																																												;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling getSiteSitePagesPage.");
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

						if (privateLayout !== undefined) {
							queryParameters["privateLayout"] = ObjectSerializer.serialize(privateLayout, "boolean");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "PageSitePage"), response};
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
				 * @param sitePageExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param privateLayout
				 * @param restrictFields
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async patchSiteSitePageWithContentType(
						siteExternalReferenceCode: string,
						sitePageExternalReferenceCode: string,
					requestBody:
							{
								parameters: {
										sitePage?: SitePage
								},
								type: "application/json"
							}
								|
							{
								parameters: {
										sitePage?: SitePage
								},
								type: "application/xml"
							}
								,
						fields?: string,
						nestedFields?: string,
						privateLayout?: boolean,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: SitePage;
			response: Response;
		}> {
				let body;
						if (requestBody.type === "application/json") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.sitePage, "SitePage"));
						}
						if (requestBody.type === "application/xml") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.sitePage, "SitePage"));
						}

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/site-pages/{sitePageExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{sitePageExternalReferenceCode}",encodeURIComponent(sitePageExternalReferenceCode))
																				;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling patchSiteSitePage.");
						}

						if (sitePageExternalReferenceCode === null || sitePageExternalReferenceCode === undefined) {
							throw new Error("Required parameter sitePageExternalReferenceCode was null or undefined when calling patchSiteSitePage.");
						}

						if (fields !== undefined) {
							queryParameters["fields"] = ObjectSerializer.serialize(fields, "string");
						}

						if (nestedFields !== undefined) {
							queryParameters["nestedFields"] = ObjectSerializer.serialize(nestedFields, "string");
						}

						if (privateLayout !== undefined) {
							queryParameters["privateLayout"] = ObjectSerializer.serialize(privateLayout, "boolean");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "SitePage"), response};
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
							 * @param sitePageExternalReferenceCode
							 * @param fields
							 * @param nestedFields
							 * @param privateLayout
							 * @param restrictFields
						 * @param sitePage
					 */
					public async patchSiteSitePage(
									siteExternalReferenceCode: string,
									sitePageExternalReferenceCode: string,
							sitePage?: SitePage,
									fields?: string,
									nestedFields?: string,
									privateLayout?: boolean,
									restrictFields?: string,
						headers?: {[name: string]: string}
					): Promise<{
							body: SitePage;
						response: Response;
					}> {
						return this.patchSiteSitePageWithContentType(
										siteExternalReferenceCode,
										sitePageExternalReferenceCode,
							{
								parameters: {
										sitePage: sitePage
								},
								type: "application/json"
							},
										fields,
										nestedFields,
										privateLayout,
										restrictFields,
							headers
						);
					}
		/**
		 * Adds a new site page
				 * @param siteExternalReferenceCode
				 * @param privateLayout
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async postSiteSitePageWithContentType(
						siteExternalReferenceCode: string,
					requestBody:
							{
								parameters: {
										sitePage?: SitePage
								},
								type: "application/json"
							}
								|
							{
								parameters: {
										sitePage?: SitePage
								},
								type: "application/xml"
							}
								,
						privateLayout?: boolean,
			headers?: {[name: string]: string},
		): Promise<{
				body: SitePage;
			response: Response;
		}> {
				let body;
						if (requestBody.type === "application/json") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.sitePage, "SitePage"));
						}
						if (requestBody.type === "application/xml") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.sitePage, "SitePage"));
						}

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/site-pages"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
								;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling postSiteSitePage.");
						}

						if (privateLayout !== undefined) {
							queryParameters["privateLayout"] = ObjectSerializer.serialize(privateLayout, "boolean");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "SitePage"), response};
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
					 * Adds a new site page - Default method for JSON body
							 * @param siteExternalReferenceCode
							 * @param privateLayout
						 * @param sitePage
					 */
					public async postSiteSitePage(
									siteExternalReferenceCode: string,
							sitePage?: SitePage,
									privateLayout?: boolean,
						headers?: {[name: string]: string}
					): Promise<{
							body: SitePage;
						response: Response;
					}> {
						return this.postSiteSitePageWithContentType(
										siteExternalReferenceCode,
							{
								parameters: {
										sitePage: sitePage
								},
								type: "application/json"
							},
										privateLayout,
							headers
						);
					}
		/**
		 * Adds a new page specification to a site page.
				 * @param siteExternalReferenceCode
				 * @param sitePageExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async postSiteSitePagePageSpecificationWithContentType(
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
						sitePageExternalReferenceCode?: string,
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

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/site-pages/{sitePageExternalReferenceCode}/page-specifications"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{sitePageExternalReferenceCode}",encodeURIComponent(sitePageExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling postSiteSitePagePageSpecification.");
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
					 * Adds a new page specification to a site page. - Default method for JSON body
							 * @param siteExternalReferenceCode
							 * @param sitePageExternalReferenceCode
							 * @param fields
							 * @param nestedFields
							 * @param restrictFields
						 * @param contentPageSpecification
					 */
					public async postSiteSitePagePageSpecification(
									siteExternalReferenceCode: string,
							contentPageSpecification?: ContentPageSpecification,
									sitePageExternalReferenceCode?: string,
									fields?: string,
									nestedFields?: string,
									restrictFields?: string,
						headers?: {[name: string]: string}
					): Promise<{
							body: ContentPageSpecification;
						response: Response;
					}> {
						return this.postSiteSitePagePageSpecificationWithContentType(
										siteExternalReferenceCode,
							{
								parameters: {
										contentPageSpecification: contentPageSpecification
								},
								type: "application/json"
							},
										sitePageExternalReferenceCode,
										fields,
										nestedFields,
										restrictFields,
							headers
						);
					}
		/**
		 * Updates the site page with the given external reference code, or creates it if it does not exist.
				 * @param siteExternalReferenceCode
				 * @param sitePageExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param privateLayout
				 * @param restrictFields
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async putSiteSitePageWithContentType(
						siteExternalReferenceCode: string,
						sitePageExternalReferenceCode: string,
					requestBody:
							{
								parameters: {
										sitePage?: SitePage
								},
								type: "application/json"
							}
								|
							{
								parameters: {
										sitePage?: SitePage
								},
								type: "application/xml"
							}
								,
						fields?: string,
						nestedFields?: string,
						privateLayout?: boolean,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: SitePage;
			response: Response;
		}> {
				let body;
						if (requestBody.type === "application/json") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.sitePage, "SitePage"));
						}
						if (requestBody.type === "application/xml") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.sitePage, "SitePage"));
						}

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/site-pages/{sitePageExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{sitePageExternalReferenceCode}",encodeURIComponent(sitePageExternalReferenceCode))
																				;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling putSiteSitePage.");
						}

						if (sitePageExternalReferenceCode === null || sitePageExternalReferenceCode === undefined) {
							throw new Error("Required parameter sitePageExternalReferenceCode was null or undefined when calling putSiteSitePage.");
						}

						if (fields !== undefined) {
							queryParameters["fields"] = ObjectSerializer.serialize(fields, "string");
						}

						if (nestedFields !== undefined) {
							queryParameters["nestedFields"] = ObjectSerializer.serialize(nestedFields, "string");
						}

						if (privateLayout !== undefined) {
							queryParameters["privateLayout"] = ObjectSerializer.serialize(privateLayout, "boolean");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "SitePage"), response};
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
					 * Updates the site page with the given external reference code, or creates it if it does not exist. - Default method for JSON body
							 * @param siteExternalReferenceCode
							 * @param sitePageExternalReferenceCode
							 * @param fields
							 * @param nestedFields
							 * @param privateLayout
							 * @param restrictFields
						 * @param sitePage
					 */
					public async putSiteSitePage(
									siteExternalReferenceCode: string,
									sitePageExternalReferenceCode: string,
							sitePage?: SitePage,
									fields?: string,
									nestedFields?: string,
									privateLayout?: boolean,
									restrictFields?: string,
						headers?: {[name: string]: string}
					): Promise<{
							body: SitePage;
						response: Response;
					}> {
						return this.putSiteSitePageWithContentType(
										siteExternalReferenceCode,
										sitePageExternalReferenceCode,
							{
								parameters: {
										sitePage: sitePage
								},
								type: "application/json"
							},
										fields,
										nestedFields,
										privateLayout,
										restrictFields,
							headers
						);
					}
		/**
		 * 
				 * @param siteExternalReferenceCode
				 * @param sitePageExternalReferenceCode
		 * @param headers Optional custom request headers
		 */
		public async putSiteSitePagePermissionsPage(
						siteExternalReferenceCode: string,
						sitePageExternalReferenceCode: string,
			headers?: {[name: string]: string},
		): Promise<{
				body?: any;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/site-pages/{sitePageExternalReferenceCode}/permissions"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{sitePageExternalReferenceCode}",encodeURIComponent(sitePageExternalReferenceCode))
				;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling putSiteSitePagePermissionsPage.");
						}

						if (sitePageExternalReferenceCode === null || sitePageExternalReferenceCode === undefined) {
							throw new Error("Required parameter sitePageExternalReferenceCode was null or undefined when calling putSiteSitePagePermissionsPage.");
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