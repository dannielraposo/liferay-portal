/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ObjectSerializer} from '../utils/SerDes';

		import {PageWidgetPageWidgetInstance} from '../models/PageWidgetPageWidgetInstance';
		import {WidgetPageWidgetInstance} from '../models/WidgetPageWidgetInstance';

/**
 * @author Rubén Pulido
 * @generated
 */

export class WidgetPageWidgetInstanceAPI {
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
		 * Deletes a widget instance of a specific widget page or widget page template within a site.
				 * @param siteExternalReferenceCode
				 * @param sitePageExternalReferenceCode
				 * @param widgetInstanceExternalReferenceCode
		 * @param headers Optional custom request headers
		 */
		public async deleteSiteSitePageWidgetInstance(
						siteExternalReferenceCode: string,
						sitePageExternalReferenceCode: string,
						widgetInstanceExternalReferenceCode: string,
			headers?: {[name: string]: string},
		): Promise<{
				body?: any;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/site-pages/{sitePageExternalReferenceCode}/widget-instances/{widgetInstanceExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{sitePageExternalReferenceCode}",encodeURIComponent(sitePageExternalReferenceCode))
										.replace("{widgetInstanceExternalReferenceCode}",encodeURIComponent(widgetInstanceExternalReferenceCode))
				;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling deleteSiteSitePageWidgetInstance.");
						}

						if (sitePageExternalReferenceCode === null || sitePageExternalReferenceCode === undefined) {
							throw new Error("Required parameter sitePageExternalReferenceCode was null or undefined when calling deleteSiteSitePageWidgetInstance.");
						}

						if (widgetInstanceExternalReferenceCode === null || widgetInstanceExternalReferenceCode === undefined) {
							throw new Error("Required parameter widgetInstanceExternalReferenceCode was null or undefined when calling deleteSiteSitePageWidgetInstance.");
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
		 * Retrieves a widget instance of a widget page or widget page template within a site.
				 * @param siteExternalReferenceCode
				 * @param sitePageExternalReferenceCode
				 * @param widgetInstanceExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 * @param headers Optional custom request headers
		 */
		public async getSiteSitePageWidgetInstance(
						siteExternalReferenceCode: string,
						sitePageExternalReferenceCode: string,
						widgetInstanceExternalReferenceCode: string,
						fields?: string,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: WidgetPageWidgetInstance;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/site-pages/{sitePageExternalReferenceCode}/widget-instances/{widgetInstanceExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{sitePageExternalReferenceCode}",encodeURIComponent(sitePageExternalReferenceCode))
										.replace("{widgetInstanceExternalReferenceCode}",encodeURIComponent(widgetInstanceExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling getSiteSitePageWidgetInstance.");
						}

						if (sitePageExternalReferenceCode === null || sitePageExternalReferenceCode === undefined) {
							throw new Error("Required parameter sitePageExternalReferenceCode was null or undefined when calling getSiteSitePageWidgetInstance.");
						}

						if (widgetInstanceExternalReferenceCode === null || widgetInstanceExternalReferenceCode === undefined) {
							throw new Error("Required parameter widgetInstanceExternalReferenceCode was null or undefined when calling getSiteSitePageWidgetInstance.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "WidgetPageWidgetInstance"), response};
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
		 * Retrieves all the widget instances of a widget page.
				 * @param siteExternalReferenceCode
				 * @param sitePageExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 * @param headers Optional custom request headers
		 */
		public async getSiteSitePageWidgetInstancesPage(
						siteExternalReferenceCode: string,
						sitePageExternalReferenceCode?: string,
						fields?: string,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: PageWidgetPageWidgetInstance;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/site-pages/{sitePageExternalReferenceCode}/widget-instances"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{sitePageExternalReferenceCode}",encodeURIComponent(sitePageExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling getSiteSitePageWidgetInstancesPage.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "PageWidgetPageWidgetInstance"), response};
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
		 * Updates a widget instance of a widget page or widget page template within a site. Updates only the fields received in the request body, leaving any other fields untouched.
				 * @param siteExternalReferenceCode
				 * @param sitePageExternalReferenceCode
				 * @param widgetInstanceExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async patchSiteSitePageWidgetInstanceWithContentType(
						siteExternalReferenceCode: string,
						sitePageExternalReferenceCode: string,
						widgetInstanceExternalReferenceCode: string,
					requestBody:
							{
								parameters: {
										widgetPageWidgetInstance?: WidgetPageWidgetInstance
								},
								type: "application/json"
							}
								|
							{
								parameters: {
										widgetPageWidgetInstance?: WidgetPageWidgetInstance
								},
								type: "application/xml"
							}
								,
						fields?: string,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: WidgetPageWidgetInstance;
			response: Response;
		}> {
				let body;
						if (requestBody.type === "application/json") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.widgetPageWidgetInstance, "WidgetPageWidgetInstance"));
						}
						if (requestBody.type === "application/xml") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.widgetPageWidgetInstance, "WidgetPageWidgetInstance"));
						}

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/site-pages/{sitePageExternalReferenceCode}/widget-instances/{widgetInstanceExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{sitePageExternalReferenceCode}",encodeURIComponent(sitePageExternalReferenceCode))
										.replace("{widgetInstanceExternalReferenceCode}",encodeURIComponent(widgetInstanceExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling patchSiteSitePageWidgetInstance.");
						}

						if (sitePageExternalReferenceCode === null || sitePageExternalReferenceCode === undefined) {
							throw new Error("Required parameter sitePageExternalReferenceCode was null or undefined when calling patchSiteSitePageWidgetInstance.");
						}

						if (widgetInstanceExternalReferenceCode === null || widgetInstanceExternalReferenceCode === undefined) {
							throw new Error("Required parameter widgetInstanceExternalReferenceCode was null or undefined when calling patchSiteSitePageWidgetInstance.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "WidgetPageWidgetInstance"), response};
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
					 * Updates a widget instance of a widget page or widget page template within a site. Updates only the fields received in the request body, leaving any other fields untouched. - Default method for JSON body
							 * @param siteExternalReferenceCode
							 * @param sitePageExternalReferenceCode
							 * @param widgetInstanceExternalReferenceCode
							 * @param fields
							 * @param nestedFields
							 * @param restrictFields
						 * @param widgetPageWidgetInstance
					 */
					public async patchSiteSitePageWidgetInstance(
									siteExternalReferenceCode: string,
									sitePageExternalReferenceCode: string,
									widgetInstanceExternalReferenceCode: string,
							widgetPageWidgetInstance?: WidgetPageWidgetInstance,
									fields?: string,
									nestedFields?: string,
									restrictFields?: string,
						headers?: {[name: string]: string}
					): Promise<{
							body: WidgetPageWidgetInstance;
						response: Response;
					}> {
						return this.patchSiteSitePageWidgetInstanceWithContentType(
										siteExternalReferenceCode,
										sitePageExternalReferenceCode,
										widgetInstanceExternalReferenceCode,
							{
								parameters: {
										widgetPageWidgetInstance: widgetPageWidgetInstance
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
		 * Adds a new widget instance to a widget page.
				 * @param siteExternalReferenceCode
				 * @param sitePageExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async postSiteSitePageWidgetInstanceWithContentType(
						siteExternalReferenceCode: string,
						sitePageExternalReferenceCode: string,
					requestBody:
							{
								parameters: {
										widgetPageWidgetInstance?: WidgetPageWidgetInstance
								},
								type: "application/json"
							}
								|
							{
								parameters: {
										widgetPageWidgetInstance?: WidgetPageWidgetInstance
								},
								type: "application/xml"
							}
								,
						fields?: string,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: WidgetPageWidgetInstance;
			response: Response;
		}> {
				let body;
						if (requestBody.type === "application/json") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.widgetPageWidgetInstance, "WidgetPageWidgetInstance"));
						}
						if (requestBody.type === "application/xml") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.widgetPageWidgetInstance, "WidgetPageWidgetInstance"));
						}

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/site-pages/{sitePageExternalReferenceCode}/widget-instances"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{sitePageExternalReferenceCode}",encodeURIComponent(sitePageExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling postSiteSitePageWidgetInstance.");
						}

						if (sitePageExternalReferenceCode === null || sitePageExternalReferenceCode === undefined) {
							throw new Error("Required parameter sitePageExternalReferenceCode was null or undefined when calling postSiteSitePageWidgetInstance.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "WidgetPageWidgetInstance"), response};
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
					 * Adds a new widget instance to a widget page. - Default method for JSON body
							 * @param siteExternalReferenceCode
							 * @param sitePageExternalReferenceCode
							 * @param fields
							 * @param nestedFields
							 * @param restrictFields
						 * @param widgetPageWidgetInstance
					 */
					public async postSiteSitePageWidgetInstance(
									siteExternalReferenceCode: string,
									sitePageExternalReferenceCode: string,
							widgetPageWidgetInstance?: WidgetPageWidgetInstance,
									fields?: string,
									nestedFields?: string,
									restrictFields?: string,
						headers?: {[name: string]: string}
					): Promise<{
							body: WidgetPageWidgetInstance;
						response: Response;
					}> {
						return this.postSiteSitePageWidgetInstanceWithContentType(
										siteExternalReferenceCode,
										sitePageExternalReferenceCode,
							{
								parameters: {
										widgetPageWidgetInstance: widgetPageWidgetInstance
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
		 * Updates a widget instance of a widget page or widget page template within a site.
				 * @param siteExternalReferenceCode
				 * @param sitePageExternalReferenceCode
				 * @param widgetInstanceExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async putSiteSitePageWidgetInstanceWithContentType(
						siteExternalReferenceCode: string,
						sitePageExternalReferenceCode: string,
						widgetInstanceExternalReferenceCode: string,
					requestBody:
							{
								parameters: {
										widgetPageWidgetInstance?: WidgetPageWidgetInstance
								},
								type: "application/json"
							}
								|
							{
								parameters: {
										widgetPageWidgetInstance?: WidgetPageWidgetInstance
								},
								type: "application/xml"
							}
								,
						fields?: string,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: WidgetPageWidgetInstance;
			response: Response;
		}> {
				let body;
						if (requestBody.type === "application/json") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.widgetPageWidgetInstance, "WidgetPageWidgetInstance"));
						}
						if (requestBody.type === "application/xml") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.widgetPageWidgetInstance, "WidgetPageWidgetInstance"));
						}

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/site-pages/{sitePageExternalReferenceCode}/widget-instances/{widgetInstanceExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{sitePageExternalReferenceCode}",encodeURIComponent(sitePageExternalReferenceCode))
										.replace("{widgetInstanceExternalReferenceCode}",encodeURIComponent(widgetInstanceExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling putSiteSitePageWidgetInstance.");
						}

						if (sitePageExternalReferenceCode === null || sitePageExternalReferenceCode === undefined) {
							throw new Error("Required parameter sitePageExternalReferenceCode was null or undefined when calling putSiteSitePageWidgetInstance.");
						}

						if (widgetInstanceExternalReferenceCode === null || widgetInstanceExternalReferenceCode === undefined) {
							throw new Error("Required parameter widgetInstanceExternalReferenceCode was null or undefined when calling putSiteSitePageWidgetInstance.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "WidgetPageWidgetInstance"), response};
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
					 * Updates a widget instance of a widget page or widget page template within a site. - Default method for JSON body
							 * @param siteExternalReferenceCode
							 * @param sitePageExternalReferenceCode
							 * @param widgetInstanceExternalReferenceCode
							 * @param fields
							 * @param nestedFields
							 * @param restrictFields
						 * @param widgetPageWidgetInstance
					 */
					public async putSiteSitePageWidgetInstance(
									siteExternalReferenceCode: string,
									sitePageExternalReferenceCode: string,
									widgetInstanceExternalReferenceCode: string,
							widgetPageWidgetInstance?: WidgetPageWidgetInstance,
									fields?: string,
									nestedFields?: string,
									restrictFields?: string,
						headers?: {[name: string]: string}
					): Promise<{
							body: WidgetPageWidgetInstance;
						response: Response;
					}> {
						return this.putSiteSitePageWidgetInstanceWithContentType(
										siteExternalReferenceCode,
										sitePageExternalReferenceCode,
										widgetInstanceExternalReferenceCode,
							{
								parameters: {
										widgetPageWidgetInstance: widgetPageWidgetInstance
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