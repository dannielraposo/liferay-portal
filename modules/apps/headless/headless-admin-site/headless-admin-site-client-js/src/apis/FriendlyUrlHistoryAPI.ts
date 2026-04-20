/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ObjectSerializer} from '../utils/SerDes';

		import {FriendlyUrlHistory} from '../models/FriendlyUrlHistory';

/**
 * @author Rubén Pulido
 * @generated
 */

export class FriendlyUrlHistoryAPI {
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
		 * Retrieves the history of previously used URLs for a display page template.
				 * @param siteExternalReferenceCode
				 * @param displayPageTemplateExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 * @param headers Optional custom request headers
		 */
		public async getSiteDisplayPageTemplateFriendlyUrlHistory(
						siteExternalReferenceCode: string,
						displayPageTemplateExternalReferenceCode?: string,
						fields?: string,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: FriendlyUrlHistory;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/display-page-templates/{displayPageTemplateExternalReferenceCode}/friendly-url-history"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{displayPageTemplateExternalReferenceCode}",encodeURIComponent(displayPageTemplateExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling getSiteDisplayPageTemplateFriendlyUrlHistory.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "FriendlyUrlHistory"), response};
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
		 * Retrieves the history of previously used URLs for a page.
				 * @param siteExternalReferenceCode
				 * @param sitePageExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 * @param headers Optional custom request headers
		 */
		public async getSiteSitePageFriendlyUrlHistory(
						siteExternalReferenceCode: string,
						sitePageExternalReferenceCode?: string,
						fields?: string,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: FriendlyUrlHistory;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/site-pages/{sitePageExternalReferenceCode}/friendly-url-history"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{sitePageExternalReferenceCode}",encodeURIComponent(sitePageExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling getSiteSitePageFriendlyUrlHistory.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "FriendlyUrlHistory"), response};
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
		 * Retrieves the history of previously used URLs for a utility page.
				 * @param siteExternalReferenceCode
				 * @param utilityPageExternalReferenceCode
				 * @param fields
				 * @param nestedFields
				 * @param restrictFields
		 * @param headers Optional custom request headers
		 */
		public async getSiteUtilityPageFriendlyUrlHistory(
						siteExternalReferenceCode: string,
						utilityPageExternalReferenceCode?: string,
						fields?: string,
						nestedFields?: string,
						restrictFields?: string,
			headers?: {[name: string]: string},
		): Promise<{
				body: FriendlyUrlHistory;
			response: Response;
		}> {

			const path = this._basePath + "/headless-admin-site/v1.0/sites/{siteExternalReferenceCode}/utility-pages/{utilityPageExternalReferenceCode}/friendly-url-history"
						.replace("{siteExternalReferenceCode}",encodeURIComponent(siteExternalReferenceCode))
										.replace("{utilityPageExternalReferenceCode}",encodeURIComponent(utilityPageExternalReferenceCode))
																;

			const queryParameters: any = {};

						if (siteExternalReferenceCode === null || siteExternalReferenceCode === undefined) {
							throw new Error("Required parameter siteExternalReferenceCode was null or undefined when calling getSiteUtilityPageFriendlyUrlHistory.");
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
						return {body: ObjectSerializer.deserialize(await response.json(), "FriendlyUrlHistory"), response};
					}
					else {
						return {body: await response.text() as any, response};
					}
			}
			else {
				throw new Error("HTTP Error " + response.status + ": " + response.statusText + ". " + await response.text());
			}
		}

}