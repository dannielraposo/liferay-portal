/**
 * SPDX-FileCopyrightText: (c) 2025 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ObjectSerializer} from '../model/models';

		import {ObjectField} from '../model/objectField';
		import {PageObjectField} from '../model/pageObjectField';

import {HttpError} from './apis';

/**
 * @author Javier Gamarra
 * @generated
 */

export class ObjectFieldApi {
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
				 * @param objectFieldId
		 * @param headers Optional custom request headers
		 */
		public async deleteObjectField(
					objectFieldId: number,
			headers?: {[name: string]: string}
		): Promise<{
				body?: any;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/object-admin/v1.0/object-fields/{objectFieldId}'
						.replace('{objectFieldId}',encodeURIComponent(objectFieldId))
				;

						if (objectFieldId === null || objectFieldId === undefined) {
							throw new Error('Required parameter objectFieldId was null or undefined when calling deleteObjectField.');
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
				 * @param filter
				 * @param page
				 * @param pageSize
				 * @param search
				 * @param sort
		 * @param headers Optional custom request headers
		 */
		public async getObjectDefinitionByExternalReferenceCodeObjectFieldsPage(
					externalReferenceCode: string,
					filter?: string,
					page?: number,
					pageSize?: number,
					search?: string,
					sort?: string,
			headers?: {[name: string]: string}
		): Promise<{
				body: PageObjectField;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/object-admin/v1.0/object-definitions/by-external-reference-code/{externalReferenceCode}/object-fields'
						.replace('{externalReferenceCode}',encodeURIComponent(externalReferenceCode))
																								;

						if (externalReferenceCode === null || externalReferenceCode === undefined) {
							throw new Error('Required parameter externalReferenceCode was null or undefined when calling getObjectDefinitionByExternalReferenceCodeObjectFieldsPage.');
						}

			const localVarQueryParameters: any = {};

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
						return {body: ObjectSerializer.deserialize(await response.json(), "PageObjectField"), response};
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
				 * @param filter
				 * @param page
				 * @param pageSize
				 * @param search
				 * @param sort
		 * @param headers Optional custom request headers
		 */
		public async getObjectDefinitionObjectFieldsPage(
					objectDefinitionId: number,
					filter?: string,
					page?: number,
					pageSize?: number,
					search?: string,
					sort?: string,
			headers?: {[name: string]: string}
		): Promise<{
				body: PageObjectField;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/object-admin/v1.0/object-definitions/{objectDefinitionId}/object-fields'
						.replace('{objectDefinitionId}',encodeURIComponent(objectDefinitionId))
																								;

						if (objectDefinitionId === null || objectDefinitionId === undefined) {
							throw new Error('Required parameter objectDefinitionId was null or undefined when calling getObjectDefinitionObjectFieldsPage.');
						}

			const localVarQueryParameters: any = {};

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
						return {body: ObjectSerializer.deserialize(await response.json(), "PageObjectField"), response};
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
				 * @param objectFieldId
		 * @param headers Optional custom request headers
		 */
		public async getObjectField(
					objectFieldId: number,
			headers?: {[name: string]: string}
		): Promise<{
				body: ObjectField;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/object-admin/v1.0/object-fields/{objectFieldId}'
						.replace('{objectFieldId}',encodeURIComponent(objectFieldId))
				;

						if (objectFieldId === null || objectFieldId === undefined) {
							throw new Error('Required parameter objectFieldId was null or undefined when calling getObjectField.');
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
						return {body: ObjectSerializer.deserialize(await response.json(), "ObjectField"), response};
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
				 * @param objectFieldId
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async patchObjectFieldWithContentType(
					objectFieldId: number,
				requestBody:
						{
									type: 'application/xml',
									parameters: {
											objectField?: ObjectField
									}
						}
							|
						{
									type: 'application/json',
									parameters: {
											objectField?: ObjectField
									}
						}
							,
			headers?: {[name: string]: string}
		): Promise<{
				body: ObjectField;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/object-admin/v1.0/object-fields/{objectFieldId}'
						.replace('{objectFieldId}',encodeURIComponent(objectFieldId))
				;

						if (objectFieldId === null || objectFieldId === undefined) {
							throw new Error('Required parameter objectFieldId was null or undefined when calling patchObjectField.');
						}

			const localVarQueryParameters: any = {};


			const queryString = Object.keys(localVarQueryParameters).length
				? '?' + new URLSearchParams(localVarQueryParameters).toString()
				: '';

				let body;
						if (requestBody.type === 'application/xml') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.objectField, "ObjectField"));
						}
						if (requestBody.type === 'application/json') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.objectField, "ObjectField"));
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
						return {body: ObjectSerializer.deserialize(await response.json(), "ObjectField"), response};
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
							 * @param objectFieldId
						 * @param objectField
					 */
					public async patchObjectField(
								objectFieldId: number,
							objectField?: ObjectField,
						headers?: {[name: string]: string}
					): Promise<{
							body: ObjectField;
						response: Response;
					}> {
						return this.patchObjectFieldWithContentType(
									objectFieldId,
							{
								type: 'application/json',
								parameters: {
										objectField: objectField
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
		public async postObjectDefinitionByExternalReferenceCodeObjectFieldWithContentType(
					externalReferenceCode: string,
				requestBody:
						{
									type: 'application/xml',
									parameters: {
											objectField?: ObjectField
									}
						}
							|
						{
									type: 'application/json',
									parameters: {
											objectField?: ObjectField
									}
						}
							,
			headers?: {[name: string]: string}
		): Promise<{
				body: ObjectField;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/object-admin/v1.0/object-definitions/by-external-reference-code/{externalReferenceCode}/object-fields'
						.replace('{externalReferenceCode}',encodeURIComponent(externalReferenceCode))
				;

						if (externalReferenceCode === null || externalReferenceCode === undefined) {
							throw new Error('Required parameter externalReferenceCode was null or undefined when calling postObjectDefinitionByExternalReferenceCodeObjectField.');
						}

			const localVarQueryParameters: any = {};


			const queryString = Object.keys(localVarQueryParameters).length
				? '?' + new URLSearchParams(localVarQueryParameters).toString()
				: '';

				let body;
						if (requestBody.type === 'application/xml') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.objectField, "ObjectField"));
						}
						if (requestBody.type === 'application/json') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.objectField, "ObjectField"));
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
						return {body: ObjectSerializer.deserialize(await response.json(), "ObjectField"), response};
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
						 * @param objectField
					 */
					public async postObjectDefinitionByExternalReferenceCodeObjectField(
								externalReferenceCode: string,
							objectField?: ObjectField,
						headers?: {[name: string]: string}
					): Promise<{
							body: ObjectField;
						response: Response;
					}> {
						return this.postObjectDefinitionByExternalReferenceCodeObjectFieldWithContentType(
									externalReferenceCode,
							{
								type: 'application/json',
								parameters: {
										objectField: objectField
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
		public async postObjectDefinitionObjectFieldWithContentType(
					objectDefinitionId: number,
				requestBody:
						{
									type: 'application/xml',
									parameters: {
											objectField?: ObjectField
									}
						}
							|
						{
									type: 'application/json',
									parameters: {
											objectField?: ObjectField
									}
						}
							,
			headers?: {[name: string]: string}
		): Promise<{
				body: ObjectField;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/object-admin/v1.0/object-definitions/{objectDefinitionId}/object-fields'
						.replace('{objectDefinitionId}',encodeURIComponent(objectDefinitionId))
				;

						if (objectDefinitionId === null || objectDefinitionId === undefined) {
							throw new Error('Required parameter objectDefinitionId was null or undefined when calling postObjectDefinitionObjectField.');
						}

			const localVarQueryParameters: any = {};


			const queryString = Object.keys(localVarQueryParameters).length
				? '?' + new URLSearchParams(localVarQueryParameters).toString()
				: '';

				let body;
						if (requestBody.type === 'application/xml') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.objectField, "ObjectField"));
						}
						if (requestBody.type === 'application/json') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.objectField, "ObjectField"));
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
						return {body: ObjectSerializer.deserialize(await response.json(), "ObjectField"), response};
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
						 * @param objectField
					 */
					public async postObjectDefinitionObjectField(
								objectDefinitionId: number,
							objectField?: ObjectField,
						headers?: {[name: string]: string}
					): Promise<{
							body: ObjectField;
						response: Response;
					}> {
						return this.postObjectDefinitionObjectFieldWithContentType(
									objectDefinitionId,
							{
								type: 'application/json',
								parameters: {
										objectField: objectField
								}
							},
							headers
						);
					}
		/**
		 * 
				 * @param objectFieldId
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async putObjectFieldWithContentType(
					objectFieldId: number,
				requestBody:
						{
									type: 'application/xml',
									parameters: {
											objectField?: ObjectField
									}
						}
							|
						{
									type: 'application/json',
									parameters: {
											objectField?: ObjectField
									}
						}
							,
			headers?: {[name: string]: string}
		): Promise<{
				body: ObjectField;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/object-admin/v1.0/object-fields/{objectFieldId}'
						.replace('{objectFieldId}',encodeURIComponent(objectFieldId))
				;

						if (objectFieldId === null || objectFieldId === undefined) {
							throw new Error('Required parameter objectFieldId was null or undefined when calling putObjectField.');
						}

			const localVarQueryParameters: any = {};


			const queryString = Object.keys(localVarQueryParameters).length
				? '?' + new URLSearchParams(localVarQueryParameters).toString()
				: '';

				let body;
						if (requestBody.type === 'application/xml') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.objectField, "ObjectField"));
						}
						if (requestBody.type === 'application/json') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.objectField, "ObjectField"));
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
						return {body: ObjectSerializer.deserialize(await response.json(), "ObjectField"), response};
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
							 * @param objectFieldId
						 * @param objectField
					 */
					public async putObjectField(
								objectFieldId: number,
							objectField?: ObjectField,
						headers?: {[name: string]: string}
					): Promise<{
							body: ObjectField;
						response: Response;
					}> {
						return this.putObjectFieldWithContentType(
									objectFieldId,
							{
								type: 'application/json',
								parameters: {
										objectField: objectField
								}
							},
							headers
						);
					}
}