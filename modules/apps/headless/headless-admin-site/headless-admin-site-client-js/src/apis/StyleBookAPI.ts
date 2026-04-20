/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ObjectSerializer} from '../utils/SerDes';

		import {PageStyleBook} from '../models/PageStyleBook';
		import {StyleBook} from '../models/StyleBook';

/**
 * @author Rubén Pulido
 * @generated
 */

export class StyleBookAPI {
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
		 * Deletes a specific style book of a site.
				 * @param siteExternalReferenceCode
				 * @param styleBookExternalReferenceCode
		 * @param headers Optional custom request headers
		 */
		public async deleteSiteStyleBook(
						siteExternalReferenceCode: string,
						styleBookExternalReferenceCode: string,
			headers?: {[name: string]: string},
		): Promise<{
				body?: any;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/style-books/{styleBookExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{styleBookExternalReferenceCode}",encodeURIComponent(styleBookExternalReferenceCode))
				;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling deleteSiteStyleBook.");
						}

						if (styleBookExternalReferenceCode === null || styleBookExternalReferenceCode === undefined) {
							throw new Error("Required parameter styleBookExternalReferenceCode was null or undefined when calling deleteSiteStyleBook.");
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
		 * Retrieves a specific style book of a site.
				 * @param siteExternalReferenceCode
				 * @param styleBookExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 * @param headers Optional custom request headers
		 */
		public async getSiteStyleBook(
						siteExternalReferenceCode: string,
						styleBookExternalReferenceCode: string,
						fields?: string,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: StyleBook;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/style-books/{styleBookExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{styleBookExternalReferenceCode}",encodeURIComponent(styleBookExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling getSiteStyleBook.");
						}

						if (styleBookExternalReferenceCode === null || styleBookExternalReferenceCode === undefined) {
							throw new Error("Required parameter styleBookExternalReferenceCode was null or undefined when calling getSiteStyleBook.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "StyleBook"), response};
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
		 * Retrieves the style books of the site.
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
		public async getSiteStyleBooksPage(
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
				body: PageStyleBook;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/style-books"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
																																								;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling getSiteStyleBooksPage.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "PageStyleBook"), response};
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
				 * @param styleBookExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async patchSiteStyleBookWithContentType(
						siteExternalReferenceCode: string,
						styleBookExternalReferenceCode: string,
					requestBody:
							{
								parameters: {
										styleBook?: StyleBook
								},
								type: "application/json"
							}
								|
							{
								parameters: {
										styleBook?: StyleBook
								},
								type: "application/xml"
							}
								,
						fields?: string,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: StyleBook;
			response: Response;
		}> {
				let body;
						if (requestBody.type === "application/json") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.styleBook, "StyleBook"));
						}
						if (requestBody.type === "application/xml") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.styleBook, "StyleBook"));
						}

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/style-books/{styleBookExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{styleBookExternalReferenceCode}",encodeURIComponent(styleBookExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling patchSiteStyleBook.");
						}

						if (styleBookExternalReferenceCode === null || styleBookExternalReferenceCode === undefined) {
							throw new Error("Required parameter styleBookExternalReferenceCode was null or undefined when calling patchSiteStyleBook.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "StyleBook"), response};
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
							 * @param styleBookExternalReferenceCode
							 * @param fields
							 * @param nestedFields
							 * @param restrictFields
						 * @param styleBook
					 */
					public async patchSiteStyleBook(
									siteExternalReferenceCode: string,
									styleBookExternalReferenceCode: string,
							styleBook?: StyleBook,
									fields?: string,
									nestedFields?: string,
									restrictFields?: string,
						headers?: {[name: string]: string}
					): Promise<{
							body: StyleBook;
						response: Response;
					}> {
						return this.patchSiteStyleBookWithContentType(
										siteExternalReferenceCode,
										styleBookExternalReferenceCode,
							{
								parameters: {
										styleBook: styleBook
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
		 * Adds a new style book.
				 * @param siteExternalReferenceCode
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async postSiteStyleBookWithContentType(
						siteExternalReferenceCode: string,
					requestBody:
							{
								parameters: {
										styleBook?: StyleBook
								},
								type: "application/json"
							}
								|
							{
								parameters: {
										styleBook?: StyleBook
								},
								type: "application/xml"
							}
								,
			headers?: {[name: string]: string},
		): Promise<{
				body: StyleBook;
			response: Response;
		}> {
				let body;
						if (requestBody.type === "application/json") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.styleBook, "StyleBook"));
						}
						if (requestBody.type === "application/xml") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.styleBook, "StyleBook"));
						}

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/style-books"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
				;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling postSiteStyleBook.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "StyleBook"), response};
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
					 * Adds a new style book. - Default method for JSON body
							 * @param siteExternalReferenceCode
						 * @param styleBook
					 */
					public async postSiteStyleBook(
									siteExternalReferenceCode: string,
							styleBook?: StyleBook,
						headers?: {[name: string]: string}
					): Promise<{
							body: StyleBook;
						response: Response;
					}> {
						return this.postSiteStyleBookWithContentType(
										siteExternalReferenceCode,
							{
								parameters: {
										styleBook: styleBook
								},
								type: "application/json"
							},
							headers
						);
					}
		/**
		 * Updates the style book with the given external reference code, or creates it if it does not exist.
				 * @param siteExternalReferenceCode
				 * @param styleBookExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async putSiteStyleBookWithContentType(
						siteExternalReferenceCode: string,
						styleBookExternalReferenceCode: string,
					requestBody:
							{
								parameters: {
										styleBook?: StyleBook
								},
								type: "application/json"
							}
								|
							{
								parameters: {
										styleBook?: StyleBook
								},
								type: "application/xml"
							}
								,
						fields?: string,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: StyleBook;
			response: Response;
		}> {
				let body;
						if (requestBody.type === "application/json") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.styleBook, "StyleBook"));
						}
						if (requestBody.type === "application/xml") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.styleBook, "StyleBook"));
						}

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/style-books/{styleBookExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{styleBookExternalReferenceCode}",encodeURIComponent(styleBookExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling putSiteStyleBook.");
						}

						if (styleBookExternalReferenceCode === null || styleBookExternalReferenceCode === undefined) {
							throw new Error("Required parameter styleBookExternalReferenceCode was null or undefined when calling putSiteStyleBook.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "StyleBook"), response};
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
					 * Updates the style book with the given external reference code, or creates it if it does not exist. - Default method for JSON body
							 * @param siteExternalReferenceCode
							 * @param styleBookExternalReferenceCode
							 * @param fields
							 * @param nestedFields
							 * @param restrictFields
						 * @param styleBook
					 */
					public async putSiteStyleBook(
									siteExternalReferenceCode: string,
									styleBookExternalReferenceCode: string,
							styleBook?: StyleBook,
									fields?: string,
									nestedFields?: string,
									restrictFields?: string,
						headers?: {[name: string]: string}
					): Promise<{
							body: StyleBook;
						response: Response;
					}> {
						return this.putSiteStyleBookWithContentType(
										siteExternalReferenceCode,
										styleBookExternalReferenceCode,
							{
								parameters: {
										styleBook: styleBook
								},
								type: "application/json"
							},
										fields,
										nestedFields,
										restrictFields,
							headers
						);
					}
}