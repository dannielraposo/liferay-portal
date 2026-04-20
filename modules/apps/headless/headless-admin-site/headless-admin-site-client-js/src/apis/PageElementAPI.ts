/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ObjectSerializer} from '../utils/SerDes';

		import {PageElement} from '../models/PageElement';
		import {PagePageElement} from '../models/PagePageElement';

/**
 * @author Rubén Pulido
 * @generated
 */

export class PageElementAPI {
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
		 * Deletes a page element within an experience of a specific page specification of a site page within a site.
				 * @param siteExternalReferenceCode
				 * @param pageSpecificationExternalReferenceCode
				 * @param pageExperienceExternalReferenceCode
				 * @param pageElementExternalReferenceCode
		 * @param headers Optional custom request headers
		 */
		public async deleteSitePageSpecificationPageExperiencePageElement(
						siteExternalReferenceCode: string,
						pageSpecificationExternalReferenceCode: string,
						pageExperienceExternalReferenceCode: string,
						pageElementExternalReferenceCode: string,
			headers?: {[name: string]: string},
		): Promise<{
				body?: any;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/page-specifications/{pageSpecificationExternalReferenceCode}/page-experiences/{pageExperienceExternalReferenceCode}/page-elements/{pageElementExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{pageSpecificationExternalReferenceCode}",encodeURIComponent(pageSpecificationExternalReferenceCode))
										.replace("{pageExperienceExternalReferenceCode}",encodeURIComponent(pageExperienceExternalReferenceCode))
										.replace("{pageElementExternalReferenceCode}",encodeURIComponent(pageElementExternalReferenceCode))
				;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling deleteSitePageSpecificationPageExperiencePageElement.");
						}

						if (pageSpecificationExternalReferenceCode === null || pageSpecificationExternalReferenceCode === undefined) {
							throw new Error("Required parameter pageSpecificationExternalReferenceCode was null or undefined when calling deleteSitePageSpecificationPageExperiencePageElement.");
						}

						if (pageExperienceExternalReferenceCode === null || pageExperienceExternalReferenceCode === undefined) {
							throw new Error("Required parameter pageExperienceExternalReferenceCode was null or undefined when calling deleteSitePageSpecificationPageExperiencePageElement.");
						}

						if (pageElementExternalReferenceCode === null || pageElementExternalReferenceCode === undefined) {
							throw new Error("Required parameter pageElementExternalReferenceCode was null or undefined when calling deleteSitePageSpecificationPageExperiencePageElement.");
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
		 * Retrieves a page element within an experience of a specific page specification of a site page within a site.
				 * @param siteExternalReferenceCode
				 * @param pageSpecificationExternalReferenceCode
				 * @param pageExperienceExternalReferenceCode
				 * @param pageElementExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 * @param headers Optional custom request headers
		 */
		public async getSitePageSpecificationPageExperiencePageElement(
						siteExternalReferenceCode: string,
						pageSpecificationExternalReferenceCode: string,
						pageExperienceExternalReferenceCode: string,
						pageElementExternalReferenceCode: string,
						fields?: string,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: PageElement;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/page-specifications/{pageSpecificationExternalReferenceCode}/page-experiences/{pageExperienceExternalReferenceCode}/page-elements/{pageElementExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{pageSpecificationExternalReferenceCode}",encodeURIComponent(pageSpecificationExternalReferenceCode))
										.replace("{pageExperienceExternalReferenceCode}",encodeURIComponent(pageExperienceExternalReferenceCode))
										.replace("{pageElementExternalReferenceCode}",encodeURIComponent(pageElementExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling getSitePageSpecificationPageExperiencePageElement.");
						}

						if (pageSpecificationExternalReferenceCode === null || pageSpecificationExternalReferenceCode === undefined) {
							throw new Error("Required parameter pageSpecificationExternalReferenceCode was null or undefined when calling getSitePageSpecificationPageExperiencePageElement.");
						}

						if (pageExperienceExternalReferenceCode === null || pageExperienceExternalReferenceCode === undefined) {
							throw new Error("Required parameter pageExperienceExternalReferenceCode was null or undefined when calling getSitePageSpecificationPageExperiencePageElement.");
						}

						if (pageElementExternalReferenceCode === null || pageElementExternalReferenceCode === undefined) {
							throw new Error("Required parameter pageElementExternalReferenceCode was null or undefined when calling getSitePageSpecificationPageExperiencePageElement.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "PageElement"), response};
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
		 * Retrieves all the descendant page elements of a page element within an experience in a page specification of a site page.
				 * @param siteExternalReferenceCode
				 * @param pageSpecificationExternalReferenceCode
				 * @param pageExperienceExternalReferenceCode
				 * @param pageElementExternalReferenceCode
				 * @param fields
				 * @param flatten
				 * @param nestedFields
				 * @param restrictFields
		 * @param headers Optional custom request headers
		 */
		public async getSitePageSpecificationPageExperiencePageElementPageElementsPage(
						siteExternalReferenceCode: string,
						pageSpecificationExternalReferenceCode: string,
						pageExperienceExternalReferenceCode: string,
						pageElementExternalReferenceCode: string,
						fields?: string,
						flatten?: boolean,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: PagePageElement;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/page-specifications/{pageSpecificationExternalReferenceCode}/page-experiences/{pageExperienceExternalReferenceCode}/page-elements/{pageElementExternalReferenceCode}/page-elements"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{pageSpecificationExternalReferenceCode}",encodeURIComponent(pageSpecificationExternalReferenceCode))
										.replace("{pageExperienceExternalReferenceCode}",encodeURIComponent(pageExperienceExternalReferenceCode))
										.replace("{pageElementExternalReferenceCode}",encodeURIComponent(pageElementExternalReferenceCode))
																				;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling getSitePageSpecificationPageExperiencePageElementPageElementsPage.");
						}

						if (pageSpecificationExternalReferenceCode === null || pageSpecificationExternalReferenceCode === undefined) {
							throw new Error("Required parameter pageSpecificationExternalReferenceCode was null or undefined when calling getSitePageSpecificationPageExperiencePageElementPageElementsPage.");
						}

						if (pageExperienceExternalReferenceCode === null || pageExperienceExternalReferenceCode === undefined) {
							throw new Error("Required parameter pageExperienceExternalReferenceCode was null or undefined when calling getSitePageSpecificationPageExperiencePageElementPageElementsPage.");
						}

						if (pageElementExternalReferenceCode === null || pageElementExternalReferenceCode === undefined) {
							throw new Error("Required parameter pageElementExternalReferenceCode was null or undefined when calling getSitePageSpecificationPageExperiencePageElementPageElementsPage.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "PagePageElement"), response};
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
		 * Retrieves all the page elements within an experience in a page specification of a site page.
				 * @param siteExternalReferenceCode
				 * @param pageSpecificationExternalReferenceCode
				 * @param pageExperienceExternalReferenceCode
				 * @param fields
				 * @param flatten
				 * @param nestedFields
				 * @param restrictFields
		 * @param headers Optional custom request headers
		 */
		public async getSitePageSpecificationPageExperiencePageElementsPage(
						siteExternalReferenceCode: string,
						pageSpecificationExternalReferenceCode: string,
						pageExperienceExternalReferenceCode: string,
						fields?: string,
						flatten?: boolean,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: PagePageElement;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/page-specifications/{pageSpecificationExternalReferenceCode}/page-experiences/{pageExperienceExternalReferenceCode}/page-elements"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{pageSpecificationExternalReferenceCode}",encodeURIComponent(pageSpecificationExternalReferenceCode))
										.replace("{pageExperienceExternalReferenceCode}",encodeURIComponent(pageExperienceExternalReferenceCode))
																				;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling getSitePageSpecificationPageExperiencePageElementsPage.");
						}

						if (pageSpecificationExternalReferenceCode === null || pageSpecificationExternalReferenceCode === undefined) {
							throw new Error("Required parameter pageSpecificationExternalReferenceCode was null or undefined when calling getSitePageSpecificationPageExperiencePageElementsPage.");
						}

						if (pageExperienceExternalReferenceCode === null || pageExperienceExternalReferenceCode === undefined) {
							throw new Error("Required parameter pageExperienceExternalReferenceCode was null or undefined when calling getSitePageSpecificationPageExperiencePageElementsPage.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "PagePageElement"), response};
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
		 * Updates a page element within an experience of a specific page specification of a site page within a site. Updates only the fields received in the request body, leaving any other fields untouched.
				 * @param siteExternalReferenceCode
				 * @param pageSpecificationExternalReferenceCode
				 * @param pageExperienceExternalReferenceCode
				 * @param pageElementExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async patchSitePageSpecificationPageExperiencePageElementWithContentType(
						siteExternalReferenceCode: string,
						pageSpecificationExternalReferenceCode: string,
						pageExperienceExternalReferenceCode: string,
						pageElementExternalReferenceCode: string,
					requestBody:
							{
								parameters: {
										pageElement?: PageElement
								},
								type: "application/json"
							}
								|
							{
								parameters: {
										pageElement?: PageElement
								},
								type: "application/xml"
							}
								,
						fields?: string,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: PageElement;
			response: Response;
		}> {
				let body;
						if (requestBody.type === "application/json") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.pageElement, "PageElement"));
						}
						if (requestBody.type === "application/xml") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.pageElement, "PageElement"));
						}

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/page-specifications/{pageSpecificationExternalReferenceCode}/page-experiences/{pageExperienceExternalReferenceCode}/page-elements/{pageElementExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{pageSpecificationExternalReferenceCode}",encodeURIComponent(pageSpecificationExternalReferenceCode))
										.replace("{pageExperienceExternalReferenceCode}",encodeURIComponent(pageExperienceExternalReferenceCode))
										.replace("{pageElementExternalReferenceCode}",encodeURIComponent(pageElementExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling patchSitePageSpecificationPageExperiencePageElement.");
						}

						if (pageSpecificationExternalReferenceCode === null || pageSpecificationExternalReferenceCode === undefined) {
							throw new Error("Required parameter pageSpecificationExternalReferenceCode was null or undefined when calling patchSitePageSpecificationPageExperiencePageElement.");
						}

						if (pageExperienceExternalReferenceCode === null || pageExperienceExternalReferenceCode === undefined) {
							throw new Error("Required parameter pageExperienceExternalReferenceCode was null or undefined when calling patchSitePageSpecificationPageExperiencePageElement.");
						}

						if (pageElementExternalReferenceCode === null || pageElementExternalReferenceCode === undefined) {
							throw new Error("Required parameter pageElementExternalReferenceCode was null or undefined when calling patchSitePageSpecificationPageExperiencePageElement.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "PageElement"), response};
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
					 * Updates a page element within an experience of a specific page specification of a site page within a site. Updates only the fields received in the request body, leaving any other fields untouched. - Default method for JSON body
							 * @param siteExternalReferenceCode
							 * @param pageSpecificationExternalReferenceCode
							 * @param pageExperienceExternalReferenceCode
							 * @param pageElementExternalReferenceCode
							 * @param fields
							 * @param nestedFields
							 * @param restrictFields
						 * @param pageElement
					 */
					public async patchSitePageSpecificationPageExperiencePageElement(
									siteExternalReferenceCode: string,
									pageSpecificationExternalReferenceCode: string,
									pageExperienceExternalReferenceCode: string,
									pageElementExternalReferenceCode: string,
							pageElement?: PageElement,
									fields?: string,
									nestedFields?: string,
									restrictFields?: string,
						headers?: {[name: string]: string}
					): Promise<{
							body: PageElement;
						response: Response;
					}> {
						return this.patchSitePageSpecificationPageExperiencePageElementWithContentType(
										siteExternalReferenceCode,
										pageSpecificationExternalReferenceCode,
										pageExperienceExternalReferenceCode,
										pageElementExternalReferenceCode,
							{
								parameters: {
										pageElement: pageElement
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
		 * Adds a new page element to an experience in a page specification in draft status of a site page.
				 * @param siteExternalReferenceCode
				 * @param pageSpecificationExternalReferenceCode
				 * @param pageExperienceExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async postSitePageSpecificationPageExperiencePageElementWithContentType(
						siteExternalReferenceCode: string,
						pageSpecificationExternalReferenceCode: string,
						pageExperienceExternalReferenceCode: string,
					requestBody:
							{
								parameters: {
										pageElement?: PageElement
								},
								type: "application/json"
							}
								|
							{
								parameters: {
										pageElement?: PageElement
								},
								type: "application/xml"
							}
								,
						fields?: string,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: PageElement;
			response: Response;
		}> {
				let body;
						if (requestBody.type === "application/json") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.pageElement, "PageElement"));
						}
						if (requestBody.type === "application/xml") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.pageElement, "PageElement"));
						}

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/page-specifications/{pageSpecificationExternalReferenceCode}/page-experiences/{pageExperienceExternalReferenceCode}/page-elements"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{pageSpecificationExternalReferenceCode}",encodeURIComponent(pageSpecificationExternalReferenceCode))
										.replace("{pageExperienceExternalReferenceCode}",encodeURIComponent(pageExperienceExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling postSitePageSpecificationPageExperiencePageElement.");
						}

						if (pageSpecificationExternalReferenceCode === null || pageSpecificationExternalReferenceCode === undefined) {
							throw new Error("Required parameter pageSpecificationExternalReferenceCode was null or undefined when calling postSitePageSpecificationPageExperiencePageElement.");
						}

						if (pageExperienceExternalReferenceCode === null || pageExperienceExternalReferenceCode === undefined) {
							throw new Error("Required parameter pageExperienceExternalReferenceCode was null or undefined when calling postSitePageSpecificationPageExperiencePageElement.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "PageElement"), response};
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
					 * Adds a new page element to an experience in a page specification in draft status of a site page. - Default method for JSON body
							 * @param siteExternalReferenceCode
							 * @param pageSpecificationExternalReferenceCode
							 * @param pageExperienceExternalReferenceCode
							 * @param fields
							 * @param nestedFields
							 * @param restrictFields
						 * @param pageElement
					 */
					public async postSitePageSpecificationPageExperiencePageElement(
									siteExternalReferenceCode: string,
									pageSpecificationExternalReferenceCode: string,
									pageExperienceExternalReferenceCode: string,
							pageElement?: PageElement,
									fields?: string,
									nestedFields?: string,
									restrictFields?: string,
						headers?: {[name: string]: string}
					): Promise<{
							body: PageElement;
						response: Response;
					}> {
						return this.postSitePageSpecificationPageExperiencePageElementWithContentType(
										siteExternalReferenceCode,
										pageSpecificationExternalReferenceCode,
										pageExperienceExternalReferenceCode,
							{
								parameters: {
										pageElement: pageElement
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
		 * Updates a page element within an experience of a specific page specification of a site page within a site.
				 * @param siteExternalReferenceCode
				 * @param pageSpecificationExternalReferenceCode
				 * @param pageExperienceExternalReferenceCode
				 * @param pageElementExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async putSitePageSpecificationPageExperiencePageElementWithContentType(
						siteExternalReferenceCode: string,
						pageSpecificationExternalReferenceCode: string,
						pageExperienceExternalReferenceCode: string,
						pageElementExternalReferenceCode: string,
					requestBody:
							{
								parameters: {
										pageElement?: PageElement
								},
								type: "application/json"
							}
								|
							{
								parameters: {
										pageElement?: PageElement
								},
								type: "application/xml"
							}
								,
						fields?: string,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: PageElement;
			response: Response;
		}> {
				let body;
						if (requestBody.type === "application/json") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.pageElement, "PageElement"));
						}
						if (requestBody.type === "application/xml") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.pageElement, "PageElement"));
						}

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/page-specifications/{pageSpecificationExternalReferenceCode}/page-experiences/{pageExperienceExternalReferenceCode}/page-elements/{pageElementExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{pageSpecificationExternalReferenceCode}",encodeURIComponent(pageSpecificationExternalReferenceCode))
										.replace("{pageExperienceExternalReferenceCode}",encodeURIComponent(pageExperienceExternalReferenceCode))
										.replace("{pageElementExternalReferenceCode}",encodeURIComponent(pageElementExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling putSitePageSpecificationPageExperiencePageElement.");
						}

						if (pageSpecificationExternalReferenceCode === null || pageSpecificationExternalReferenceCode === undefined) {
							throw new Error("Required parameter pageSpecificationExternalReferenceCode was null or undefined when calling putSitePageSpecificationPageExperiencePageElement.");
						}

						if (pageExperienceExternalReferenceCode === null || pageExperienceExternalReferenceCode === undefined) {
							throw new Error("Required parameter pageExperienceExternalReferenceCode was null or undefined when calling putSitePageSpecificationPageExperiencePageElement.");
						}

						if (pageElementExternalReferenceCode === null || pageElementExternalReferenceCode === undefined) {
							throw new Error("Required parameter pageElementExternalReferenceCode was null or undefined when calling putSitePageSpecificationPageExperiencePageElement.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "PageElement"), response};
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
					 * Updates a page element within an experience of a specific page specification of a site page within a site. - Default method for JSON body
							 * @param siteExternalReferenceCode
							 * @param pageSpecificationExternalReferenceCode
							 * @param pageExperienceExternalReferenceCode
							 * @param pageElementExternalReferenceCode
							 * @param fields
							 * @param nestedFields
							 * @param restrictFields
						 * @param pageElement
					 */
					public async putSitePageSpecificationPageExperiencePageElement(
									siteExternalReferenceCode: string,
									pageSpecificationExternalReferenceCode: string,
									pageExperienceExternalReferenceCode: string,
									pageElementExternalReferenceCode: string,
							pageElement?: PageElement,
									fields?: string,
									nestedFields?: string,
									restrictFields?: string,
						headers?: {[name: string]: string}
					): Promise<{
							body: PageElement;
						response: Response;
					}> {
						return this.putSitePageSpecificationPageExperiencePageElementWithContentType(
										siteExternalReferenceCode,
										pageSpecificationExternalReferenceCode,
										pageExperienceExternalReferenceCode,
										pageElementExternalReferenceCode,
							{
								parameters: {
										pageElement: pageElement
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