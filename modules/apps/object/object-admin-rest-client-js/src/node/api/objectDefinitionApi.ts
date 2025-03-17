/**
 * SPDX-FileCopyrightText: (c) 2025 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ObjectSerializer} from '../model/models';

		import {ObjectDefinition} from '../model/objectDefinition';
		import {PageObjectDefinition} from '../model/pageObjectDefinition';

import {HttpError} from './apis';

/**
 * @author Javier Gamarra
 * @generated
 */

export class ObjectDefinitionApi {
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
				 * @param objectDefinitionId
		 * @param headers Optional custom request headers
		 */
		public async deleteObjectDefinition(
					objectDefinitionId: number,
			headers?: {[name: string]: string}
		): Promise<{
				body?: any;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/object-admin/v1.0/object-definitions/{objectDefinitionId}'
						.replace('{objectDefinitionId}',encodeURIComponent(objectDefinitionId))
				;

						if (objectDefinitionId === null || objectDefinitionId === undefined) {
							throw new Error('Required parameter objectDefinitionId was null or undefined when calling deleteObjectDefinition.');
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
				 * @param objectDefinitionId
		 * @param headers Optional custom request headers
		 */
		public async getObjectDefinition(
					objectDefinitionId: number,
			headers?: {[name: string]: string}
		): Promise<{
				body: ObjectDefinition;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/object-admin/v1.0/object-definitions/{objectDefinitionId}'
						.replace('{objectDefinitionId}',encodeURIComponent(objectDefinitionId))
				;

						if (objectDefinitionId === null || objectDefinitionId === undefined) {
							throw new Error('Required parameter objectDefinitionId was null or undefined when calling getObjectDefinition.');
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
						return {body: ObjectSerializer.deserialize(await response.json(), "ObjectDefinition"), response};
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
		public async getObjectDefinitionByExternalReferenceCode(
					externalReferenceCode: string,
			headers?: {[name: string]: string}
		): Promise<{
				body: ObjectDefinition;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/object-admin/v1.0/object-definitions/by-external-reference-code/{externalReferenceCode}'
						.replace('{externalReferenceCode}',encodeURIComponent(externalReferenceCode))
				;

						if (externalReferenceCode === null || externalReferenceCode === undefined) {
							throw new Error('Required parameter externalReferenceCode was null or undefined when calling getObjectDefinitionByExternalReferenceCode.');
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
						return {body: ObjectSerializer.deserialize(await response.json(), "ObjectDefinition"), response};
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
				 * @param aggregationTerms
				 * @param filter
				 * @param page
				 * @param pageSize
				 * @param search
				 * @param sort
				 * @param Accept_Language
		 * @param headers Optional custom request headers
		 */
		public async getObjectDefinitionsPage(
					aggregationTerms?: Array<string>,
					filter?: string,
					page?: number,
					pageSize?: number,
					search?: string,
					sort?: string,
					Accept_Language?: string,
			headers?: {[name: string]: string}
		): Promise<{
				body: PageObjectDefinition;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/object-admin/v1.0/object-definitions'
																												;

			const localVarQueryParameters: any = {};

					if (aggregationTerms !== undefined) {
						localVarQueryParameters['aggregationTerms'] = JSON.stringify(ObjectSerializer.serialize(aggregationTerms, "Array<string>"));
					}
					if (filter !== undefined) {
						localVarQueryParameters['filter'] = JSON.stringify(ObjectSerializer.serialize(filter, "string"));
					}
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
						return {body: ObjectSerializer.deserialize(await response.json(), "PageObjectDefinition"), response};
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
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async patchObjectDefinitionWithContentType(
					objectDefinitionId: number,
				requestBody:
						{
									type: 'application/xml',
									parameters: {
											objectDefinition?: ObjectDefinition
									}
						}
							|
						{
									type: 'application/json',
									parameters: {
											objectDefinition?: ObjectDefinition
									}
						}
							,
			headers?: {[name: string]: string}
		): Promise<{
				body: ObjectDefinition;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/object-admin/v1.0/object-definitions/{objectDefinitionId}'
						.replace('{objectDefinitionId}',encodeURIComponent(objectDefinitionId))
				;

						if (objectDefinitionId === null || objectDefinitionId === undefined) {
							throw new Error('Required parameter objectDefinitionId was null or undefined when calling patchObjectDefinition.');
						}

			const localVarQueryParameters: any = {};


			const queryString = Object.keys(localVarQueryParameters).length
				? '?' + new URLSearchParams(localVarQueryParameters).toString()
				: '';

				let body;
						if (requestBody.type === 'application/xml') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.objectDefinition, "ObjectDefinition"));
						}
						if (requestBody.type === 'application/json') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.objectDefinition, "ObjectDefinition"));
						}

			const response = await fetch(localVarPath + queryString, {
				method: 'PATCH',
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
						return {body: ObjectSerializer.deserialize(await response.json(), "ObjectDefinition"), response};
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
						 * @param objectDefinition
					 */
					public async patchObjectDefinition(
								objectDefinitionId: number,
							objectDefinition?: ObjectDefinition,
						headers?: {[name: string]: string}
					): Promise<{
							body: ObjectDefinition;
						response: Response;
					}> {
						return this.patchObjectDefinitionWithContentType(
									objectDefinitionId,
							{
								type: 'application/json',
								parameters: {
										objectDefinition: objectDefinition
								}
							},
							headers
						);
					}
		/**
		 * 
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async postObjectDefinitionWithContentType(
				requestBody:
						{
									type: 'application/xml',
									parameters: {
											objectDefinition?: ObjectDefinition
									}
						}
							|
						{
									type: 'application/json',
									parameters: {
											objectDefinition?: ObjectDefinition
									}
						}
							,
			headers?: {[name: string]: string}
		): Promise<{
				body: ObjectDefinition;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/object-admin/v1.0/object-definitions'
;

			const localVarQueryParameters: any = {};


			const queryString = Object.keys(localVarQueryParameters).length
				? '?' + new URLSearchParams(localVarQueryParameters).toString()
				: '';

				let body;
						if (requestBody.type === 'application/xml') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.objectDefinition, "ObjectDefinition"));
						}
						if (requestBody.type === 'application/json') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.objectDefinition, "ObjectDefinition"));
						}

			const response = await fetch(localVarPath + queryString, {
				method: 'POST',
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
						return {body: ObjectSerializer.deserialize(await response.json(), "ObjectDefinition"), response};
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
						 * @param objectDefinition
					 */
					public async postObjectDefinition(
							objectDefinition?: ObjectDefinition,
						headers?: {[name: string]: string}
					): Promise<{
							body: ObjectDefinition;
						response: Response;
					}> {
						return this.postObjectDefinitionWithContentType(
							{
								type: 'application/json',
								parameters: {
										objectDefinition: objectDefinition
								}
							},
							headers
						);
					}
		/**
		 * 
				 * @param objectDefinitionId
		 * @param headers Optional custom request headers
		 */
		public async postObjectDefinitionPublish(
					objectDefinitionId: number,
			headers?: {[name: string]: string}
		): Promise<{
				body: ObjectDefinition;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/object-admin/v1.0/object-definitions/{objectDefinitionId}/publish'
						.replace('{objectDefinitionId}',encodeURIComponent(objectDefinitionId))
				;

						if (objectDefinitionId === null || objectDefinitionId === undefined) {
							throw new Error('Required parameter objectDefinitionId was null or undefined when calling postObjectDefinitionPublish.');
						}

			const localVarQueryParameters: any = {};


			const queryString = Object.keys(localVarQueryParameters).length
				? '?' + new URLSearchParams(localVarQueryParameters).toString()
				: '';


			const response = await fetch(localVarPath + queryString, {
				method: 'POST',
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
						return {body: ObjectSerializer.deserialize(await response.json(), "ObjectDefinition"), response};
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
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async putObjectDefinitionWithContentType(
					objectDefinitionId: number,
				requestBody:
						{
									type: 'application/xml',
									parameters: {
											objectDefinition?: ObjectDefinition
									}
						}
							|
						{
									type: 'application/json',
									parameters: {
											objectDefinition?: ObjectDefinition
									}
						}
							,
			headers?: {[name: string]: string}
		): Promise<{
				body: ObjectDefinition;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/object-admin/v1.0/object-definitions/{objectDefinitionId}'
						.replace('{objectDefinitionId}',encodeURIComponent(objectDefinitionId))
				;

						if (objectDefinitionId === null || objectDefinitionId === undefined) {
							throw new Error('Required parameter objectDefinitionId was null or undefined when calling putObjectDefinition.');
						}

			const localVarQueryParameters: any = {};


			const queryString = Object.keys(localVarQueryParameters).length
				? '?' + new URLSearchParams(localVarQueryParameters).toString()
				: '';

				let body;
						if (requestBody.type === 'application/xml') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.objectDefinition, "ObjectDefinition"));
						}
						if (requestBody.type === 'application/json') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.objectDefinition, "ObjectDefinition"));
						}

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
						return {body: ObjectSerializer.deserialize(await response.json(), "ObjectDefinition"), response};
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
						 * @param objectDefinition
					 */
					public async putObjectDefinition(
								objectDefinitionId: number,
							objectDefinition?: ObjectDefinition,
						headers?: {[name: string]: string}
					): Promise<{
							body: ObjectDefinition;
						response: Response;
					}> {
						return this.putObjectDefinitionWithContentType(
									objectDefinitionId,
							{
								type: 'application/json',
								parameters: {
										objectDefinition: objectDefinition
								}
							},
							headers
						);
					}
		/**
		 * 
				 * @param externalReferenceCode
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async putObjectDefinitionByExternalReferenceCodeWithContentType(
					externalReferenceCode: string,
				requestBody:
						{
									type: 'application/xml',
									parameters: {
											objectDefinition?: ObjectDefinition
									}
						}
							|
						{
									type: 'application/json',
									parameters: {
											objectDefinition?: ObjectDefinition
									}
						}
							,
			headers?: {[name: string]: string}
		): Promise<{
				body: ObjectDefinition;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/object-admin/v1.0/object-definitions/by-external-reference-code/{externalReferenceCode}'
						.replace('{externalReferenceCode}',encodeURIComponent(externalReferenceCode))
				;

						if (externalReferenceCode === null || externalReferenceCode === undefined) {
							throw new Error('Required parameter externalReferenceCode was null or undefined when calling putObjectDefinitionByExternalReferenceCode.');
						}

			const localVarQueryParameters: any = {};


			const queryString = Object.keys(localVarQueryParameters).length
				? '?' + new URLSearchParams(localVarQueryParameters).toString()
				: '';

				let body;
						if (requestBody.type === 'application/xml') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.objectDefinition, "ObjectDefinition"));
						}
						if (requestBody.type === 'application/json') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.objectDefinition, "ObjectDefinition"));
						}

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
						return {body: ObjectSerializer.deserialize(await response.json(), "ObjectDefinition"), response};
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
						 * @param objectDefinition
					 */
					public async putObjectDefinitionByExternalReferenceCode(
								externalReferenceCode: string,
							objectDefinition?: ObjectDefinition,
						headers?: {[name: string]: string}
					): Promise<{
							body: ObjectDefinition;
						response: Response;
					}> {
						return this.putObjectDefinitionByExternalReferenceCodeWithContentType(
									externalReferenceCode,
							{
								type: 'application/json',
								parameters: {
										objectDefinition: objectDefinition
								}
							},
							headers
						);
					}
}