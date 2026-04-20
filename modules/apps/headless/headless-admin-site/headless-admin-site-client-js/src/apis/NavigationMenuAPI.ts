/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ObjectSerializer} from '../utils/SerDes';

		import {NavigationMenu} from '../models/NavigationMenu';
		import {PageNavigationMenu} from '../models/PageNavigationMenu';

/**
 * @author Rubén Pulido
 * @generated
 */

export class NavigationMenuAPI {
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
		 * Deletes a specific navigation menu of a site.
				 * @param siteExternalReferenceCode
				 * @param navigationMenuExternalReferenceCode
		 * @param headers Optional custom request headers
		 */
		public async deleteSiteNavigationMenu(
						siteExternalReferenceCode: string,
						navigationMenuExternalReferenceCode: string,
			headers?: {[name: string]: string},
		): Promise<{
				body?: any;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/navigation-menus/{navigationMenuExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{navigationMenuExternalReferenceCode}",encodeURIComponent(navigationMenuExternalReferenceCode))
				;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling deleteSiteNavigationMenu.");
						}

						if (navigationMenuExternalReferenceCode === null || navigationMenuExternalReferenceCode === undefined) {
							throw new Error("Required parameter navigationMenuExternalReferenceCode was null or undefined when calling deleteSiteNavigationMenu.");
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
		 * Retrieves a specific navigation menu of a site.
				 * @param siteExternalReferenceCode
				 * @param navigationMenuExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 * @param headers Optional custom request headers
		 */
		public async getSiteNavigationMenu(
						siteExternalReferenceCode: string,
						navigationMenuExternalReferenceCode: string,
						fields?: string,
						nestedFields?: number,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: NavigationMenu;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/navigation-menus/{navigationMenuExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{navigationMenuExternalReferenceCode}",encodeURIComponent(navigationMenuExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling getSiteNavigationMenu.");
						}

						if (navigationMenuExternalReferenceCode === null || navigationMenuExternalReferenceCode === undefined) {
							throw new Error("Required parameter navigationMenuExternalReferenceCode was null or undefined when calling getSiteNavigationMenu.");
						}

						if (fields !== undefined) {
							queryParameters["fields"] = ObjectSerializer.serialize(fields, "string");
						}

						if (nestedFields !== undefined) {
							queryParameters["nestedFields"] = ObjectSerializer.serialize(nestedFields, "number");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "NavigationMenu"), response};
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
				 * @param navigationMenuExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
				 * @param roleNames
		 * @param headers Optional custom request headers
		 */
		public async getSiteNavigationMenuPermissionsPage(
						siteExternalReferenceCode: string,
						navigationMenuExternalReferenceCode: string,
						fields?: string,
						nestedFields?: string,
						restrictFields?: string,
						roleNames?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body?: any;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/navigation-menus/{navigationMenuExternalReferenceCode}/permissions"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{navigationMenuExternalReferenceCode}",encodeURIComponent(navigationMenuExternalReferenceCode))
																				;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling getSiteNavigationMenuPermissionsPage.");
						}

						if (navigationMenuExternalReferenceCode === null || navigationMenuExternalReferenceCode === undefined) {
							throw new Error("Required parameter navigationMenuExternalReferenceCode was null or undefined when calling getSiteNavigationMenuPermissionsPage.");
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
		 * 
				 * @param siteExternalReferenceCode
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
		public async getSiteNavigationMenusPage(
						siteExternalReferenceCode: string,
						fields?: string,
						filter?: string,
						nestedFields?: number,
						page?: number,
						pageSize?: number,
						restrictFields?: string,
						search?: string,
						sort?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: PageNavigationMenu;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/navigation-menus"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
																																				;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling getSiteNavigationMenusPage.");
						}

						if (fields !== undefined) {
							queryParameters["fields"] = ObjectSerializer.serialize(fields, "string");
						}

						if (filter !== undefined) {
							queryParameters["filter"] = ObjectSerializer.serialize(filter, "string");
						}

						if (nestedFields !== undefined) {
							queryParameters["nestedFields"] = ObjectSerializer.serialize(nestedFields, "number");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "PageNavigationMenu"), response};
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
		 * Creates a new navigation menu.
				 * @param siteExternalReferenceCode
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async postSiteNavigationMenuWithContentType(
						siteExternalReferenceCode: string,
					requestBody:
							{
								parameters: {
										navigationMenu?: NavigationMenu
								},
								type: "application/json"
							}
								|
							{
								parameters: {
										navigationMenu?: NavigationMenu
								},
								type: "application/xml"
							}
								,
			headers?: {[name: string]: string},
		): Promise<{
				body: NavigationMenu;
			response: Response;
		}> {
				let body;
						if (requestBody.type === "application/json") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.navigationMenu, "NavigationMenu"));
						}
						if (requestBody.type === "application/xml") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.navigationMenu, "NavigationMenu"));
						}

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/navigation-menus"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
				;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling postSiteNavigationMenu.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "NavigationMenu"), response};
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
					 * Creates a new navigation menu. - Default method for JSON body
							 * @param siteExternalReferenceCode
						 * @param navigationMenu
					 */
					public async postSiteNavigationMenu(
									siteExternalReferenceCode: string,
							navigationMenu?: NavigationMenu,
						headers?: {[name: string]: string}
					): Promise<{
							body: NavigationMenu;
						response: Response;
					}> {
						return this.postSiteNavigationMenuWithContentType(
										siteExternalReferenceCode,
							{
								parameters: {
										navigationMenu: navigationMenu
								},
								type: "application/json"
							},
							headers
						);
					}
		/**
		 * Updates the navigation menu with the given external reference code or creates it if it does not exist.
				 * @param siteExternalReferenceCode
				 * @param navigationMenuExternalReferenceCode
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async putSiteNavigationMenuWithContentType(
						siteExternalReferenceCode: string,
						navigationMenuExternalReferenceCode: string,
					requestBody:
							{
								parameters: {
										navigationMenu?: NavigationMenu
								},
								type: "application/json"
							}
								|
							{
								parameters: {
										navigationMenu?: NavigationMenu
								},
								type: "application/xml"
							}
								,
			headers?: {[name: string]: string},
		): Promise<{
				body: NavigationMenu;
			response: Response;
		}> {
				let body;
						if (requestBody.type === "application/json") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.navigationMenu, "NavigationMenu"));
						}
						if (requestBody.type === "application/xml") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.navigationMenu, "NavigationMenu"));
						}

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/navigation-menus/{navigationMenuExternalReferenceCode}"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{navigationMenuExternalReferenceCode}",encodeURIComponent(navigationMenuExternalReferenceCode))
				;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling putSiteNavigationMenu.");
						}

						if (navigationMenuExternalReferenceCode === null || navigationMenuExternalReferenceCode === undefined) {
							throw new Error("Required parameter navigationMenuExternalReferenceCode was null or undefined when calling putSiteNavigationMenu.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "NavigationMenu"), response};
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
					 * Updates the navigation menu with the given external reference code or creates it if it does not exist. - Default method for JSON body
							 * @param siteExternalReferenceCode
							 * @param navigationMenuExternalReferenceCode
						 * @param navigationMenu
					 */
					public async putSiteNavigationMenu(
									siteExternalReferenceCode: string,
									navigationMenuExternalReferenceCode: string,
							navigationMenu?: NavigationMenu,
						headers?: {[name: string]: string}
					): Promise<{
							body: NavigationMenu;
						response: Response;
					}> {
						return this.putSiteNavigationMenuWithContentType(
										siteExternalReferenceCode,
										navigationMenuExternalReferenceCode,
							{
								parameters: {
										navigationMenu: navigationMenu
								},
								type: "application/json"
							},
							headers
						);
					}
		/**
		 * 
				 * @param siteExternalReferenceCode
				 * @param navigationMenuExternalReferenceCode
		 * @param headers Optional custom request headers
		 */
		public async putSiteNavigationMenuPermissionsPage(
						siteExternalReferenceCode: string,
						navigationMenuExternalReferenceCode: string,
			headers?: {[name: string]: string},
		): Promise<{
				body?: any;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/navigation-menus/{navigationMenuExternalReferenceCode}/permissions"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{navigationMenuExternalReferenceCode}",encodeURIComponent(navigationMenuExternalReferenceCode))
				;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling putSiteNavigationMenuPermissionsPage.");
						}

						if (navigationMenuExternalReferenceCode === null || navigationMenuExternalReferenceCode === undefined) {
							throw new Error("Required parameter navigationMenuExternalReferenceCode was null or undefined when calling putSiteNavigationMenuPermissionsPage.");
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