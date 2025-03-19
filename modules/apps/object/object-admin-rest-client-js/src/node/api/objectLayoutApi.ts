/**
 * SPDX-FileCopyrightText: (c) 2025 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ObjectSerializer} from '../model/models';

		import {ObjectLayout} from '../model/objectLayout';
		import {PageObjectLayout} from '../model/pageObjectLayout';

import {HttpError} from './apis';

/**
 * @author Javier Gamarra
 * @generated
 */

export class ObjectLayoutApi {
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
		 * 
				 * @param objectLayoutId
		 * @param headers Optional custom request headers
		 */
		public async deleteObjectLayout(
					objectLayoutId: number,
			headers?: {[name: string]: string}
		): Promise<{
				body?: any;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/object-admin/v1.0/object-layouts/{objectLayoutId}'
						.replace('{objectLayoutId}',encodeURIComponent(objectLayoutId))
				;

						if (objectLayoutId === null || objectLayoutId === undefined) {
							throw new Error('Required parameter objectLayoutId was null or undefined when calling deleteObjectLayout.');
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
				 * @param page
				 * @param pageSize
				 * @param search
				 * @param sort
				 * @param Accept_Language
		 * @param headers Optional custom request headers
		 */
		public async getObjectDefinitionByExternalReferenceCodeObjectLayoutsPage(
					externalReferenceCode: string,
					page?: number,
					pageSize?: number,
					search?: string,
					sort?: string,
					Accept_Language?: string,
			headers?: {[name: string]: string}
		): Promise<{
				body: PageObjectLayout;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/object-admin/v1.0/object-definitions/by-external-reference-code/{externalReferenceCode}/object-layouts'
						.replace('{externalReferenceCode}',encodeURIComponent(externalReferenceCode))
																								;

						if (externalReferenceCode === null || externalReferenceCode === undefined) {
							throw new Error('Required parameter externalReferenceCode was null or undefined when calling getObjectDefinitionByExternalReferenceCodeObjectLayoutsPage.');
						}

			const localVarQueryParameters: any = {};

					if (page !== undefined) {
						localVarQueryParameters['page'] = JSON.stringify(ObjectSerializer.serialize(page, "number"));
					}
					if (pageSize !== undefined) {
						localVarQueryParameters['pageSize'] = JSON.stringify(ObjectSerializer.serialize(pageSize, "number"));
					}
					if (search !== undefined) {
						localVarQueryParameters['search'] = JSON.stringify(ObjectSerializer.serialize(search, "string"));
					}
					if (sort !== undefined) {
						localVarQueryParameters['sort'] = JSON.stringify(ObjectSerializer.serialize(sort, "string"));
					}

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
						return {body: ObjectSerializer.deserialize(await response.json(), "PageObjectLayout"), response};
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
				 * @param objectDefinitionId
				 * @param page
				 * @param pageSize
				 * @param search
				 * @param sort
				 * @param Accept_Language
		 * @param headers Optional custom request headers
		 */
		public async getObjectDefinitionObjectLayoutsPage(
					objectDefinitionId: number,
					page?: number,
					pageSize?: number,
					search?: string,
					sort?: string,
					Accept_Language?: string,
			headers?: {[name: string]: string}
		): Promise<{
				body: PageObjectLayout;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/object-admin/v1.0/object-definitions/{objectDefinitionId}/object-layouts'
						.replace('{objectDefinitionId}',encodeURIComponent(objectDefinitionId))
																								;

						if (objectDefinitionId === null || objectDefinitionId === undefined) {
							throw new Error('Required parameter objectDefinitionId was null or undefined when calling getObjectDefinitionObjectLayoutsPage.');
						}

			const localVarQueryParameters: any = {};

					if (page !== undefined) {
						localVarQueryParameters['page'] = JSON.stringify(ObjectSerializer.serialize(page, "number"));
					}
					if (pageSize !== undefined) {
						localVarQueryParameters['pageSize'] = JSON.stringify(ObjectSerializer.serialize(pageSize, "number"));
					}
					if (search !== undefined) {
						localVarQueryParameters['search'] = JSON.stringify(ObjectSerializer.serialize(search, "string"));
					}
					if (sort !== undefined) {
						localVarQueryParameters['sort'] = JSON.stringify(ObjectSerializer.serialize(sort, "string"));
					}

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
						return {body: ObjectSerializer.deserialize(await response.json(), "PageObjectLayout"), response};
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
				 * @param objectLayoutId
		 * @param headers Optional custom request headers
		 */
		public async getObjectLayout(
					objectLayoutId: number,
			headers?: {[name: string]: string}
		): Promise<{
				body: ObjectLayout;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/object-admin/v1.0/object-layouts/{objectLayoutId}'
						.replace('{objectLayoutId}',encodeURIComponent(objectLayoutId))
				;

						if (objectLayoutId === null || objectLayoutId === undefined) {
							throw new Error('Required parameter objectLayoutId was null or undefined when calling getObjectLayout.');
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
						return {body: ObjectSerializer.deserialize(await response.json(), "ObjectLayout"), response};
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
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async postObjectDefinitionByExternalReferenceCodeObjectLayoutWithContentType(
					externalReferenceCode: string,
				requestBody:
						{
									type: 'application/xml',
									parameters: {
											objectLayout?: ObjectLayout
									}
						}
							|
						{
									type: 'application/json',
									parameters: {
											objectLayout?: ObjectLayout
									}
						}
							,
			headers?: {[name: string]: string}
		): Promise<{
				body: ObjectLayout;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/object-admin/v1.0/object-definitions/by-external-reference-code/{externalReferenceCode}/object-layouts'
						.replace('{externalReferenceCode}',encodeURIComponent(externalReferenceCode))
				;

						if (externalReferenceCode === null || externalReferenceCode === undefined) {
							throw new Error('Required parameter externalReferenceCode was null or undefined when calling postObjectDefinitionByExternalReferenceCodeObjectLayout.');
						}

			const localVarQueryParameters: any = {};


			const queryString = Object.keys(localVarQueryParameters).length
				? '?' + new URLSearchParams(localVarQueryParameters).toString()
				: '';

				let body;
						if (requestBody.type === 'application/xml') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.objectLayout, "ObjectLayout"));
						}
						if (requestBody.type === 'application/json') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.objectLayout, "ObjectLayout"));
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
						return {body: ObjectSerializer.deserialize(await response.json(), "ObjectLayout"), response};
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
					 *  - Default method for JSON body
							 * @param externalReferenceCode
						 * @param objectLayout
					 */
					public async postObjectDefinitionByExternalReferenceCodeObjectLayout(
								externalReferenceCode: string,
							objectLayout?: ObjectLayout,
						headers?: {[name: string]: string}
					): Promise<{
							body: ObjectLayout;
						response: Response;
					}> {
						return this.postObjectDefinitionByExternalReferenceCodeObjectLayoutWithContentType(
									externalReferenceCode,
							{
								type: 'application/json',
								parameters: {
										objectLayout: objectLayout
								}
							},
							headers
						);
					}
		/**
		 * 
				 * @param objectDefinitionId
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async postObjectDefinitionObjectLayoutWithContentType(
					objectDefinitionId: number,
				requestBody:
						{
									type: 'application/xml',
									parameters: {
											objectLayout?: ObjectLayout
									}
						}
							|
						{
									type: 'application/json',
									parameters: {
											objectLayout?: ObjectLayout
									}
						}
							,
			headers?: {[name: string]: string}
		): Promise<{
				body: ObjectLayout;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/object-admin/v1.0/object-definitions/{objectDefinitionId}/object-layouts'
						.replace('{objectDefinitionId}',encodeURIComponent(objectDefinitionId))
				;

						if (objectDefinitionId === null || objectDefinitionId === undefined) {
							throw new Error('Required parameter objectDefinitionId was null or undefined when calling postObjectDefinitionObjectLayout.');
						}

			const localVarQueryParameters: any = {};


			const queryString = Object.keys(localVarQueryParameters).length
				? '?' + new URLSearchParams(localVarQueryParameters).toString()
				: '';

				let body;
						if (requestBody.type === 'application/xml') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.objectLayout, "ObjectLayout"));
						}
						if (requestBody.type === 'application/json') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.objectLayout, "ObjectLayout"));
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
						return {body: ObjectSerializer.deserialize(await response.json(), "ObjectLayout"), response};
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
					 *  - Default method for JSON body
							 * @param objectDefinitionId
						 * @param objectLayout
					 */
					public async postObjectDefinitionObjectLayout(
								objectDefinitionId: number,
							objectLayout?: ObjectLayout,
						headers?: {[name: string]: string}
					): Promise<{
							body: ObjectLayout;
						response: Response;
					}> {
						return this.postObjectDefinitionObjectLayoutWithContentType(
									objectDefinitionId,
							{
								type: 'application/json',
								parameters: {
										objectLayout: objectLayout
								}
							},
							headers
						);
					}
		/**
		 * 
				 * @param objectLayoutId
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async putObjectLayoutWithContentType(
					objectLayoutId: number,
				requestBody:
						{
									type: 'application/xml',
									parameters: {
											objectLayout?: ObjectLayout
									}
						}
							|
						{
									type: 'application/json',
									parameters: {
											objectLayout?: ObjectLayout
									}
						}
							,
			headers?: {[name: string]: string}
		): Promise<{
				body: ObjectLayout;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/object-admin/v1.0/object-layouts/{objectLayoutId}'
						.replace('{objectLayoutId}',encodeURIComponent(objectLayoutId))
				;

						if (objectLayoutId === null || objectLayoutId === undefined) {
							throw new Error('Required parameter objectLayoutId was null or undefined when calling putObjectLayout.');
						}

			const localVarQueryParameters: any = {};


			const queryString = Object.keys(localVarQueryParameters).length
				? '?' + new URLSearchParams(localVarQueryParameters).toString()
				: '';

				let body;
						if (requestBody.type === 'application/xml') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.objectLayout, "ObjectLayout"));
						}
						if (requestBody.type === 'application/json') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.objectLayout, "ObjectLayout"));
						}

			const response = await fetch(localVarPath + queryString, {
				method: 'PUT',
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
						return {body: ObjectSerializer.deserialize(await response.json(), "ObjectLayout"), response};
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
					 *  - Default method for JSON body
							 * @param objectLayoutId
						 * @param objectLayout
					 */
					public async putObjectLayout(
								objectLayoutId: number,
							objectLayout?: ObjectLayout,
						headers?: {[name: string]: string}
					): Promise<{
							body: ObjectLayout;
						response: Response;
					}> {
						return this.putObjectLayoutWithContentType(
									objectLayoutId,
							{
								type: 'application/json',
								parameters: {
										objectLayout: objectLayout
								}
							},
							headers
						);
					}
}