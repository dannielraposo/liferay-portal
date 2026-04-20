/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ObjectSerializer} from '../utils/SerDes';

		import {DisplayPageTemplateFolder} from '../models/DisplayPageTemplateFolder';
		import {PageDisplayPageTemplateFolder} from '../models/PageDisplayPageTemplateFolder';

/**
 * @author Rubén Pulido
 * @generated
 */

export class DisplayPageTemplateFolderAPI {
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
		 * Deletes a specific display page template folder of a site.
				 * @param siteExternalReferenceCode
				 * @param displayPageTemplateFolderExternalReferenceCode
		 * @param headers Optional custom request headers
		 */
		public async deleteSiteDisplayPageTemplateFolder(
						siteExternalReferenceCode: string,
						displayPageTemplateFolderExternalReferenceCode: string,
			headers?: {[name: string]: string},
		): Promise<{
				body?: any;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/display-page-template-folders/{displayPageTemplateFolderExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{displayPageTemplateFolderExternalReferenceCode}",encodeURIComponent(displayPageTemplateFolderExternalReferenceCode))
				;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling deleteSiteDisplayPageTemplateFolder.");
						}

						if (displayPageTemplateFolderExternalReferenceCode === null || displayPageTemplateFolderExternalReferenceCode === undefined) {
							throw new Error("Required parameter displayPageTemplateFolderExternalReferenceCode was null or undefined when calling deleteSiteDisplayPageTemplateFolder.");
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
		 * Retrieves a specific display page template folder of a site.
				 * @param siteExternalReferenceCode
				 * @param displayPageTemplateFolderExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 * @param headers Optional custom request headers
		 */
		public async getSiteDisplayPageTemplateFolder(
						siteExternalReferenceCode: string,
						displayPageTemplateFolderExternalReferenceCode: string,
						fields?: string,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: DisplayPageTemplateFolder;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/display-page-template-folders/{displayPageTemplateFolderExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{displayPageTemplateFolderExternalReferenceCode}",encodeURIComponent(displayPageTemplateFolderExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling getSiteDisplayPageTemplateFolder.");
						}

						if (displayPageTemplateFolderExternalReferenceCode === null || displayPageTemplateFolderExternalReferenceCode === undefined) {
							throw new Error("Required parameter displayPageTemplateFolderExternalReferenceCode was null or undefined when calling getSiteDisplayPageTemplateFolder.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "DisplayPageTemplateFolder"), response};
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
				 * @param displayPageTemplateFolderExternalReferenceCode
				 * @param fields
				 * @param restrictFields
				 * @param roleNames
		 * @param headers Optional custom request headers
		 */
		public async getSiteDisplayPageTemplateFolderPermissionsPage(
						siteExternalReferenceCode: string,
						displayPageTemplateFolderExternalReferenceCode: string,
						fields?: string,
						restrictFields?: string,
						roleNames?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body?: any;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/display-page-template-folders/{displayPageTemplateFolderExternalReferenceCode}/permissions"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{displayPageTemplateFolderExternalReferenceCode}",encodeURIComponent(displayPageTemplateFolderExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling getSiteDisplayPageTemplateFolderPermissionsPage.");
						}

						if (displayPageTemplateFolderExternalReferenceCode === null || displayPageTemplateFolderExternalReferenceCode === undefined) {
							throw new Error("Required parameter displayPageTemplateFolderExternalReferenceCode was null or undefined when calling getSiteDisplayPageTemplateFolderPermissionsPage.");
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
		 * Retrieves the display page template folders of the site.
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
		public async getSiteDisplayPageTemplateFoldersPage(
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
				body: PageDisplayPageTemplateFolder;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/display-page-template-folders"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
																																								;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling getSiteDisplayPageTemplateFoldersPage.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "PageDisplayPageTemplateFolder"), response};
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
				 * @param displayPageTemplateFolderExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async patchSiteDisplayPageTemplateFolderWithContentType(
						siteExternalReferenceCode: string,
						displayPageTemplateFolderExternalReferenceCode: string,
					requestBody:
							{
								parameters: {
										displayPageTemplateFolder?: DisplayPageTemplateFolder
								},
								type: "application/json"
							}
								|
							{
								parameters: {
										displayPageTemplateFolder?: DisplayPageTemplateFolder
								},
								type: "application/xml"
							}
								,
						fields?: string,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: DisplayPageTemplateFolder;
			response: Response;
		}> {
				let body;
						if (requestBody.type === "application/json") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.displayPageTemplateFolder, "DisplayPageTemplateFolder"));
						}
						if (requestBody.type === "application/xml") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.displayPageTemplateFolder, "DisplayPageTemplateFolder"));
						}

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/display-page-template-folders/{displayPageTemplateFolderExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{displayPageTemplateFolderExternalReferenceCode}",encodeURIComponent(displayPageTemplateFolderExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling patchSiteDisplayPageTemplateFolder.");
						}

						if (displayPageTemplateFolderExternalReferenceCode === null || displayPageTemplateFolderExternalReferenceCode === undefined) {
							throw new Error("Required parameter displayPageTemplateFolderExternalReferenceCode was null or undefined when calling patchSiteDisplayPageTemplateFolder.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "DisplayPageTemplateFolder"), response};
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
							 * @param displayPageTemplateFolderExternalReferenceCode
							 * @param fields
							 * @param nestedFields
							 * @param restrictFields
						 * @param displayPageTemplateFolder
					 */
					public async patchSiteDisplayPageTemplateFolder(
									siteExternalReferenceCode: string,
									displayPageTemplateFolderExternalReferenceCode: string,
							displayPageTemplateFolder?: DisplayPageTemplateFolder,
									fields?: string,
									nestedFields?: string,
									restrictFields?: string,
						headers?: {[name: string]: string}
					): Promise<{
							body: DisplayPageTemplateFolder;
						response: Response;
					}> {
						return this.patchSiteDisplayPageTemplateFolderWithContentType(
										siteExternalReferenceCode,
										displayPageTemplateFolderExternalReferenceCode,
							{
								parameters: {
										displayPageTemplateFolder: displayPageTemplateFolder
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
		 * Adds a new display page template folder.
				 * @param siteExternalReferenceCode
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async postSiteDisplayPageTemplateFolderWithContentType(
						siteExternalReferenceCode: string,
					requestBody:
							{
								parameters: {
										displayPageTemplateFolder?: DisplayPageTemplateFolder
								},
								type: "application/json"
							}
								|
							{
								parameters: {
										displayPageTemplateFolder?: DisplayPageTemplateFolder
								},
								type: "application/xml"
							}
								,
			headers?: {[name: string]: string},
		): Promise<{
				body: DisplayPageTemplateFolder;
			response: Response;
		}> {
				let body;
						if (requestBody.type === "application/json") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.displayPageTemplateFolder, "DisplayPageTemplateFolder"));
						}
						if (requestBody.type === "application/xml") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.displayPageTemplateFolder, "DisplayPageTemplateFolder"));
						}

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/display-page-template-folders"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
				;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling postSiteDisplayPageTemplateFolder.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "DisplayPageTemplateFolder"), response};
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
					 * Adds a new display page template folder. - Default method for JSON body
							 * @param siteExternalReferenceCode
						 * @param displayPageTemplateFolder
					 */
					public async postSiteDisplayPageTemplateFolder(
									siteExternalReferenceCode: string,
							displayPageTemplateFolder?: DisplayPageTemplateFolder,
						headers?: {[name: string]: string}
					): Promise<{
							body: DisplayPageTemplateFolder;
						response: Response;
					}> {
						return this.postSiteDisplayPageTemplateFolderWithContentType(
										siteExternalReferenceCode,
							{
								parameters: {
										displayPageTemplateFolder: displayPageTemplateFolder
								},
								type: "application/json"
							},
							headers
						);
					}
		/**
		 * Updates the display page template folder with the given external reference code, or creates it if it does not exist.
				 * @param siteExternalReferenceCode
				 * @param displayPageTemplateFolderExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async putSiteDisplayPageTemplateFolderWithContentType(
						siteExternalReferenceCode: string,
						displayPageTemplateFolderExternalReferenceCode: string,
					requestBody:
							{
								parameters: {
										displayPageTemplateFolder?: DisplayPageTemplateFolder
								},
								type: "application/json"
							}
								|
							{
								parameters: {
										displayPageTemplateFolder?: DisplayPageTemplateFolder
								},
								type: "application/xml"
							}
								,
						fields?: string,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: DisplayPageTemplateFolder;
			response: Response;
		}> {
				let body;
						if (requestBody.type === "application/json") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.displayPageTemplateFolder, "DisplayPageTemplateFolder"));
						}
						if (requestBody.type === "application/xml") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.displayPageTemplateFolder, "DisplayPageTemplateFolder"));
						}

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/display-page-template-folders/{displayPageTemplateFolderExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{displayPageTemplateFolderExternalReferenceCode}",encodeURIComponent(displayPageTemplateFolderExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling putSiteDisplayPageTemplateFolder.");
						}

						if (displayPageTemplateFolderExternalReferenceCode === null || displayPageTemplateFolderExternalReferenceCode === undefined) {
							throw new Error("Required parameter displayPageTemplateFolderExternalReferenceCode was null or undefined when calling putSiteDisplayPageTemplateFolder.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "DisplayPageTemplateFolder"), response};
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
					 * Updates the display page template folder with the given external reference code, or creates it if it does not exist. - Default method for JSON body
							 * @param siteExternalReferenceCode
							 * @param displayPageTemplateFolderExternalReferenceCode
							 * @param fields
							 * @param nestedFields
							 * @param restrictFields
						 * @param displayPageTemplateFolder
					 */
					public async putSiteDisplayPageTemplateFolder(
									siteExternalReferenceCode: string,
									displayPageTemplateFolderExternalReferenceCode: string,
							displayPageTemplateFolder?: DisplayPageTemplateFolder,
									fields?: string,
									nestedFields?: string,
									restrictFields?: string,
						headers?: {[name: string]: string}
					): Promise<{
							body: DisplayPageTemplateFolder;
						response: Response;
					}> {
						return this.putSiteDisplayPageTemplateFolderWithContentType(
										siteExternalReferenceCode,
										displayPageTemplateFolderExternalReferenceCode,
							{
								parameters: {
										displayPageTemplateFolder: displayPageTemplateFolder
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
				 * @param displayPageTemplateFolderExternalReferenceCode
		 * @param headers Optional custom request headers
		 */
		public async putSiteDisplayPageTemplateFolderPermissionsPage(
						siteExternalReferenceCode: string,
						displayPageTemplateFolderExternalReferenceCode: string,
			headers?: {[name: string]: string},
		): Promise<{
				body?: any;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/display-page-template-folders/{displayPageTemplateFolderExternalReferenceCode}/permissions"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{displayPageTemplateFolderExternalReferenceCode}",encodeURIComponent(displayPageTemplateFolderExternalReferenceCode))
				;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling putSiteDisplayPageTemplateFolderPermissionsPage.");
						}

						if (displayPageTemplateFolderExternalReferenceCode === null || displayPageTemplateFolderExternalReferenceCode === undefined) {
							throw new Error("Required parameter displayPageTemplateFolderExternalReferenceCode was null or undefined when calling putSiteDisplayPageTemplateFolderPermissionsPage.");
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