/**
 * SPDX-FileCopyrightText: (c) 2025 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ObjectSerializer} from '../model/models';

		import {PageTestEntity} from '../model/pageTestEntity';
		import {TestEntity} from '../model/testEntity';

import {HttpError} from './apis';

/**
 * @author Alejandro Tardín
 * @generated
 */

export class TestEntityApi {
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
		 * @param headers Optional custom request headers
		 */
		public async getTestEntitiesPage(
			headers?: {[name: string]: string}
		): Promise<{
				body: PageTestEntity;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/test/v1.0/test-entities'
;

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
						return {body: ObjectSerializer.deserialize(await response.json(), "PageTestEntity"), response};
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
				 * @param testEntityId
		 * @param headers Optional custom request headers
		 */
		public async getTestEntity(
					testEntityId: number,
			headers?: {[name: string]: string}
		): Promise<{
				body: TestEntity;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/test/v1.0/test-entities/{testEntityId}'
						.replace('{testEntityId}',encodeURIComponent(testEntityId))
				;

						if (testEntityId === null || testEntityId === undefined) {
							throw new Error('Required parameter testEntityId was null or undefined when calling getTestEntity.');
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
						return {body: ObjectSerializer.deserialize(await response.json(), "TestEntity"), response};
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
		 * Retrieves the count.
		 * @param headers Optional custom request headers
		 */
		public async getTestEntityCount(
			headers?: {[name: string]: string}
		): Promise<{
				body: number;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/test/v1.0/test-entities/count'
;

			const localVarQueryParameters: any = {};


			const queryString = Object.keys(localVarQueryParameters).length
				? '?' + new URLSearchParams(localVarQueryParameters).toString()
				: '';


			const response = await fetch(localVarPath + queryString, {
				method: 'GET',
				headers:
					Object.assign({}, this._defaultHeaders
						,{
								Accept: 'text/plain'
						}
					,headers || {}
					)
			});

			if (response.ok) {
				const contentType = response.headers.get('content-type') || '';

					if (contentType.includes('application/json')) {
						return {body: ObjectSerializer.deserialize(await response.json(), "number"), response};
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
				 * @param testEntityId
				 * @param optionalParameter
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async patchTestEntityWithContentType(
					testEntityId: number,
					optionalParameter?: number,
				requestBody:
						{
									type: 'application/xml',
									parameters: {
											testEntity?: TestEntity
									}
						}
							|
						{
									type: 'application/json',
									parameters: {
											testEntity?: TestEntity
									}
						}
							,
			headers?: {[name: string]: string}
		): Promise<{
				body: TestEntity;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/test/v1.0/test-entities/{testEntityId}'
						.replace('{testEntityId}',encodeURIComponent(testEntityId))
								;

						if (testEntityId === null || testEntityId === undefined) {
							throw new Error('Required parameter testEntityId was null or undefined when calling patchTestEntity.');
						}

			const localVarQueryParameters: any = {};

					if (optionalParameter !== undefined) {
						localVarQueryParameters['optionalParameter'] = JSON.stringify(ObjectSerializer.serialize(optionalParameter, "number"));
					}

			const queryString = Object.keys(localVarQueryParameters).length
				? '?' + new URLSearchParams(localVarQueryParameters).toString()
				: '';

				let body;
						if (requestBody.type === 'application/xml') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.testEntity, "TestEntity"));
						}
						if (requestBody.type === 'application/json') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.testEntity, "TestEntity"));
						}

			const response = await fetch(localVarPath + queryString, {
				method: 'PATCH',
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
						return {body: ObjectSerializer.deserialize(await response.json(), "TestEntity"), response};
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
							 * @param testEntityId
							 * @param optionalParameter
						 * @param testEntity
					 */
					public async patchTestEntity(
								testEntityId: number,
								optionalParameter?: number,
							testEntity?: TestEntity,
						headers?: {[name: string]: string}
					): Promise<{
							body: TestEntity;
						response: Response;
					}> {
						return this.patchTestEntityWithContentType(
									testEntityId,
									optionalParameter,
							{
								type: 'application/json',
								parameters: {
										testEntity: testEntity
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
		public async postReservedWordWithContentType(
				requestBody:
						{
									type: 'application/xml',
									parameters: {
											body?: boolean
									}
						}
							|
						{
									type: 'application/json',
									parameters: {
											body?: boolean
									}
						}
							,
			headers?: {[name: string]: string}
		): Promise<{
				body?: any;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/test/v1.0/reserved-word'
;

			const localVarQueryParameters: any = {};


			const queryString = Object.keys(localVarQueryParameters).length
				? '?' + new URLSearchParams(localVarQueryParameters).toString()
				: '';

				let body;
						if (requestBody.type === 'application/xml') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.body, "boolean"));
						}
						if (requestBody.type === 'application/json') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.body, "boolean"));
						}

			const response = await fetch(localVarPath + queryString, {
				method: 'POST',
				headers:
					Object.assign({}, this._defaultHeaders
							,(requestBody.type !== 'multipart/form-data') ?
								{'Content-Type': requestBody.type} : {}
					,headers || {}
					)
					,body: body
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
					 *  - Default method for JSON body
						 * @param body
					 */
					public async postReservedWord(
							body?: boolean,
						headers?: {[name: string]: string}
					): Promise<{
							body?: any;
						response: Response;
					}> {
						return this.postReservedWordWithContentType(
							{
								type: 'application/json',
								parameters: {
										body: body
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
		public async postTestEntityWithContentType(
				requestBody:
						{
									type: 'application/xml',
									parameters: {
											testEntity?: TestEntity
									}
						}
							|
						{
									type: 'application/json',
									parameters: {
											testEntity?: TestEntity
									}
						}
							,
			headers?: {[name: string]: string}
		): Promise<{
				body: TestEntity;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/test/v1.0/test-entities'
;

			const localVarQueryParameters: any = {};


			const queryString = Object.keys(localVarQueryParameters).length
				? '?' + new URLSearchParams(localVarQueryParameters).toString()
				: '';

				let body;
						if (requestBody.type === 'application/xml') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.testEntity, "TestEntity"));
						}
						if (requestBody.type === 'application/json') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.testEntity, "TestEntity"));
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
						return {body: ObjectSerializer.deserialize(await response.json(), "TestEntity"), response};
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
						 * @param testEntity
					 */
					public async postTestEntity(
							testEntity?: TestEntity,
						headers?: {[name: string]: string}
					): Promise<{
							body: TestEntity;
						response: Response;
					}> {
						return this.postTestEntityWithContentType(
							{
								type: 'application/json',
								parameters: {
										testEntity: testEntity
								}
							},
							headers
						);
					}
		/**
		 * 
				 * @param testEntityId
				 * @param optionalParameter
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async putTestEntityWithContentType(
					testEntityId: number,
					optionalParameter?: number,
				requestBody:
						{
									type: 'application/xml',
									parameters: {
											testEntity?: TestEntity
									}
						}
							|
						{
									type: 'application/json',
									parameters: {
											testEntity?: TestEntity
									}
						}
							,
			headers?: {[name: string]: string}
		): Promise<{
				body: TestEntity;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/test/v1.0/test-entities/{testEntityId}'
						.replace('{testEntityId}',encodeURIComponent(testEntityId))
								;

						if (testEntityId === null || testEntityId === undefined) {
							throw new Error('Required parameter testEntityId was null or undefined when calling putTestEntity.');
						}

			const localVarQueryParameters: any = {};

					if (optionalParameter !== undefined) {
						localVarQueryParameters['optionalParameter'] = JSON.stringify(ObjectSerializer.serialize(optionalParameter, "number"));
					}

			const queryString = Object.keys(localVarQueryParameters).length
				? '?' + new URLSearchParams(localVarQueryParameters).toString()
				: '';

				let body;
						if (requestBody.type === 'application/xml') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.testEntity, "TestEntity"));
						}
						if (requestBody.type === 'application/json') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.testEntity, "TestEntity"));
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
						return {body: ObjectSerializer.deserialize(await response.json(), "TestEntity"), response};
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
							 * @param testEntityId
							 * @param optionalParameter
						 * @param testEntity
					 */
					public async putTestEntity(
								testEntityId: number,
								optionalParameter?: number,
							testEntity?: TestEntity,
						headers?: {[name: string]: string}
					): Promise<{
							body: TestEntity;
						response: Response;
					}> {
						return this.putTestEntityWithContentType(
									testEntityId,
									optionalParameter,
							{
								type: 'application/json',
								parameters: {
										testEntity: testEntity
								}
							},
							headers
						);
					}
}