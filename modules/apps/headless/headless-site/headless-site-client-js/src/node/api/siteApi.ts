/**
 * SPDX-FileCopyrightText: (c) 2025 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ObjectSerializer} from '../model/models';

		import {Site} from '../model/site';

import {HttpError} from './apis';

/**
 * @author Rubén Pulido
 * @generated
 */

export class SiteApi {
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
		 * Deletes a site and all of its associated content.
				 * @param siteId
		 * @param headers Optional custom request headers
		 */
		public async deleteSite(
					siteId: number,
			headers?: {[name: string]: string}
		): Promise<{
				body?: any;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/headless-site/v1.0/sites/{siteId}'
						.replace('{siteId}',encodeURIComponent(siteId))
				;

						if (siteId === null || siteId === undefined) {
							throw new Error('Required parameter siteId was null or undefined when calling deleteSite.');
						}

			const localVarQueryParameters: any = {};


			const queryString = Object.keys(localVarQueryParameters).length
				? '?' + new URLSearchParams(localVarQueryParameters).toString()
				: '';


			const response = await fetch(localVarPath + queryString, {
				method: 'DELETE',
				headers:
					Object.assign({}, this._defaultHeaders
						,{
								Accept: 'application/json'
						}
					,headers || {}
					)
			});

			if (response.ok) {
				const contentType = response.headers.get('content-type') || '';

					if (contentType.includes('application/json')) {
						return {body: await response.json(), response};
					} else {
						return {body: await response.text(), response};
					}
			} else {
				throw new HttpError(
					await response.text(),
					response,
					response.status
				);
			}
		}

		/**
		 * Deletes a site and all of its associated content.
				 * @param externalReferenceCode
		 * @param headers Optional custom request headers
		 */
		public async deleteSiteByExternalReferenceCode(
					externalReferenceCode: string,
			headers?: {[name: string]: string}
		): Promise<{
				body?: any;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/headless-site/v1.0/sites/by-external-reference-code/{externalReferenceCode}'
						.replace('{externalReferenceCode}',encodeURIComponent(externalReferenceCode))
				;

						if (externalReferenceCode === null || externalReferenceCode === undefined) {
							throw new Error('Required parameter externalReferenceCode was null or undefined when calling deleteSiteByExternalReferenceCode.');
						}

			const localVarQueryParameters: any = {};


			const queryString = Object.keys(localVarQueryParameters).length
				? '?' + new URLSearchParams(localVarQueryParameters).toString()
				: '';


			const response = await fetch(localVarPath + queryString, {
				method: 'DELETE',
				headers:
					Object.assign({}, this._defaultHeaders
						,{
								Accept: 'application/json'
						}
					,headers || {}
					)
			});

			if (response.ok) {
				const contentType = response.headers.get('content-type') || '';

					if (contentType.includes('application/json')) {
						return {body: await response.json(), response};
					} else {
						return {body: await response.text(), response};
					}
			} else {
				throw new HttpError(
					await response.text(),
					response,
					response.status
				);
			}
		}

		/**
		 * 
				 * @param externalReferenceCode
		 * @param headers Optional custom request headers
		 */
		public async getSiteByExternalReferenceCode(
					externalReferenceCode: string,
			headers?: {[name: string]: string}
		): Promise<{
				body: Site;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/headless-site/v1.0/sites/by-external-reference-code/{externalReferenceCode}'
						.replace('{externalReferenceCode}',encodeURIComponent(externalReferenceCode))
				;

						if (externalReferenceCode === null || externalReferenceCode === undefined) {
							throw new Error('Required parameter externalReferenceCode was null or undefined when calling getSiteByExternalReferenceCode.');
						}

			const localVarQueryParameters: any = {};


			const queryString = Object.keys(localVarQueryParameters).length
				? '?' + new URLSearchParams(localVarQueryParameters).toString()
				: '';


			const response = await fetch(localVarPath + queryString, {
				method: 'GET',
				headers:
					Object.assign({}, this._defaultHeaders
						,{
								Accept: 'application/json'
						}
					,headers || {}
					)
			});

			if (response.ok) {
				const contentType = response.headers.get('content-type') || '';

					if (contentType.includes('application/json')) {
						return {body: ObjectSerializer.deserialize(await response.json(), "Site"), response};
					} else {
						return {body: await response.text() as any, response};
					}
			} else {
				throw new HttpError(
					await response.text(),
					response,
					response.status
				);
			}
		}

		/**
		 * 
				 * @param externalReferenceCode
		 * @param headers Optional custom request headers
		 */
		public async getSiteByExternalReferenceCodeSiteInitializer(
					externalReferenceCode: string,
			headers?: {[name: string]: string}
		): Promise<{
				body: File;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/headless-site/v1.0/sites/by-external-reference-code/{externalReferenceCode}/site-initializer'
						.replace('{externalReferenceCode}',encodeURIComponent(externalReferenceCode))
				;

						if (externalReferenceCode === null || externalReferenceCode === undefined) {
							throw new Error('Required parameter externalReferenceCode was null or undefined when calling getSiteByExternalReferenceCodeSiteInitializer.');
						}

			const localVarQueryParameters: any = {};


			const queryString = Object.keys(localVarQueryParameters).length
				? '?' + new URLSearchParams(localVarQueryParameters).toString()
				: '';


			const response = await fetch(localVarPath + queryString, {
				method: 'GET',
				headers:
					Object.assign({}, this._defaultHeaders
						,{
								Accept: 'application/zip'
						}
					,headers || {}
					)
			});

			if (response.ok) {
				const contentType = response.headers.get('content-type') || '';

					if (contentType.includes('application/json')) {
						return {body: ObjectSerializer.deserialize(await response.json(), "File"), response};
					} else {
						return {body: await response.text() as any, response};
					}
			} else {
				throw new HttpError(
					await response.text(),
					response,
					response.status
				);
			}
		}

		/**
		 * Adds a new site
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async postSiteWithContentType(
				requestBody:
						{
									type: 'application/xml',
									parameters: {
											site?: Site
									}
						}
							|
						{
									type: 'application/json',
									parameters: {
											site?: Site
									}
						}
							|
						{
									type: 'multipart/form-data',
									parameters: {
											file?: File,
											site?: Site
									}
						}
							,
			headers?: {[name: string]: string}
		): Promise<{
				body: Site;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/headless-site/v1.0/sites'
;

			const localVarQueryParameters: any = {};


			const queryString = Object.keys(localVarQueryParameters).length
				? '?' + new URLSearchParams(localVarQueryParameters).toString()
				: '';

				let body;
						if (requestBody.type === 'application/xml') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.site, "Site"));
						}
						if (requestBody.type === 'application/json') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.site, "Site"));
						}
						if (requestBody.type === 'multipart/form-data') {
								const formData = new FormData();
										formData.append('file', requestBody.parameters.file);
										formData.append('site', JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.site, "Site")));
								body = formData;
						}

			const response = await fetch(localVarPath + queryString, {
				method: 'POST',
				headers:
					Object.assign({}, this._defaultHeaders
						,{
								Accept: 'application/json'
						}
							,(requestBody.type !== 'multipart/form-data') ?
								{'Content-Type': requestBody.type} : {}
					,headers || {}
					)
					,body: body
			});

			if (response.ok) {
				const contentType = response.headers.get('content-type') || '';

					if (contentType.includes('application/json')) {
						return {body: ObjectSerializer.deserialize(await response.json(), "Site"), response};
					} else {
						return {body: await response.text() as any, response};
					}
			} else {
				throw new HttpError(
					await response.text(),
					response,
					response.status
				);
			}
		}

					/**
					 * Adds a new site - Default method for JSON body
						 * @param site
					 */
					public async postSite(
							site?: Site,
						headers?: {[name: string]: string}
					): Promise<{
							body: Site;
						response: Response;
					}> {
						return this.postSiteWithContentType(
							{
								type: 'application/json',
								parameters: {
										site: site
								}
							},
							headers
						);
					}
		/**
		 * Adds or update a new site
				 * @param externalReferenceCode
				 	* @param file
		 * @param headers Optional custom request headers
		 */
		public async putSiteByExternalReferenceCode(
					externalReferenceCode: string,
						file?: File,
			headers?: {[name: string]: string}
		): Promise<{
				body: Site;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/headless-site/v1.0/sites/by-external-reference-code/{externalReferenceCode}'
						.replace('{externalReferenceCode}',encodeURIComponent(externalReferenceCode))
				;

						if (externalReferenceCode === null || externalReferenceCode === undefined) {
							throw new Error('Required parameter externalReferenceCode was null or undefined when calling putSiteByExternalReferenceCode.');
						}

			const localVarQueryParameters: any = {};


			const queryString = Object.keys(localVarQueryParameters).length
				? '?' + new URLSearchParams(localVarQueryParameters).toString()
				: '';

				let body;
						const formData = new FormData();
								formData.append('file', requestBody.parameters.file);
						body = formData;

			const response = await fetch(localVarPath + queryString, {
				method: 'PUT',
				headers:
					Object.assign({}, this._defaultHeaders
						,{
								Accept: 'application/json'
						}
					,headers || {}
					)
					,body: body
			});

			if (response.ok) {
				const contentType = response.headers.get('content-type') || '';

					if (contentType.includes('application/json')) {
						return {body: ObjectSerializer.deserialize(await response.json(), "Site"), response};
					} else {
						return {body: await response.text() as any, response};
					}
			} else {
				throw new HttpError(
					await response.text(),
					response,
					response.status
				);
			}
		}

}