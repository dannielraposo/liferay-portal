/**
 * SPDX-FileCopyrightText: (c) 2025 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ObjectSerializer} from '../model/models';

		import {ObjectValidationRule} from '../model/objectValidationRule';
		import {PageObjectValidationRule} from '../model/pageObjectValidationRule';

import {HttpError} from './apis';

/**
 * @author Javier Gamarra
 * @generated
 */

export class ObjectValidationRuleApi {
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
				 * @param objectValidationRuleId
		 * @param headers Optional custom request headers
		 */
		public async deleteObjectValidationRule(
					objectValidationRuleId: number,
			headers?: {[name: string]: string}
		): Promise<{
				body?: any;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/object-admin/v1.0/object-validation-rules/{objectValidationRuleId}'
						.replace('{objectValidationRuleId}',encodeURIComponent(objectValidationRuleId))
				;

						if (objectValidationRuleId === null || objectValidationRuleId === undefined) {
							throw new Error('Required parameter objectValidationRuleId was null or undefined when calling deleteObjectValidationRule.');
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
		public async getObjectDefinitionByExternalReferenceCodeObjectValidationRulesPage(
					externalReferenceCode: string,
					page?: number,
					pageSize?: number,
					search?: string,
					sort?: string,
					Accept_Language?: string,
			headers?: {[name: string]: string}
		): Promise<{
				body: PageObjectValidationRule;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/object-admin/v1.0/object-definitions/by-external-reference-code/{externalReferenceCode}/object-validation-rules'
						.replace('{externalReferenceCode}',encodeURIComponent(externalReferenceCode))
																								;

						if (externalReferenceCode === null || externalReferenceCode === undefined) {
							throw new Error('Required parameter externalReferenceCode was null or undefined when calling getObjectDefinitionByExternalReferenceCodeObjectValidationRulesPage.');
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
						return {body: ObjectSerializer.deserialize(await response.json(), "PageObjectValidationRule"), response};
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
		public async getObjectDefinitionObjectValidationRulesPage(
					objectDefinitionId: number,
					page?: number,
					pageSize?: number,
					search?: string,
					sort?: string,
					Accept_Language?: string,
			headers?: {[name: string]: string}
		): Promise<{
				body: PageObjectValidationRule;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/object-admin/v1.0/object-definitions/{objectDefinitionId}/object-validation-rules'
						.replace('{objectDefinitionId}',encodeURIComponent(objectDefinitionId))
																								;

						if (objectDefinitionId === null || objectDefinitionId === undefined) {
							throw new Error('Required parameter objectDefinitionId was null or undefined when calling getObjectDefinitionObjectValidationRulesPage.');
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
						return {body: ObjectSerializer.deserialize(await response.json(), "PageObjectValidationRule"), response};
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
				 * @param objectValidationRuleId
		 * @param headers Optional custom request headers
		 */
		public async getObjectValidationRule(
					objectValidationRuleId: number,
			headers?: {[name: string]: string}
		): Promise<{
				body: ObjectValidationRule;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/object-admin/v1.0/object-validation-rules/{objectValidationRuleId}'
						.replace('{objectValidationRuleId}',encodeURIComponent(objectValidationRuleId))
				;

						if (objectValidationRuleId === null || objectValidationRuleId === undefined) {
							throw new Error('Required parameter objectValidationRuleId was null or undefined when calling getObjectValidationRule.');
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
						return {body: ObjectSerializer.deserialize(await response.json(), "ObjectValidationRule"), response};
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
				 * @param objectValidationRuleId
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async patchObjectValidationRuleWithContentType(
					objectValidationRuleId: number,
				requestBody:
						{
									type: 'application/xml',
									parameters: {
											objectValidationRule?: ObjectValidationRule
									}
						}
							|
						{
									type: 'application/json',
									parameters: {
											objectValidationRule?: ObjectValidationRule
									}
						}
							,
			headers?: {[name: string]: string}
		): Promise<{
				body: ObjectValidationRule;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/object-admin/v1.0/object-validation-rules/{objectValidationRuleId}'
						.replace('{objectValidationRuleId}',encodeURIComponent(objectValidationRuleId))
				;

						if (objectValidationRuleId === null || objectValidationRuleId === undefined) {
							throw new Error('Required parameter objectValidationRuleId was null or undefined when calling patchObjectValidationRule.');
						}

			const localVarQueryParameters: any = {};


			const queryString = Object.keys(localVarQueryParameters).length
				? '?' + new URLSearchParams(localVarQueryParameters).toString()
				: '';

				let body;
						if (requestBody.type === 'application/xml') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.objectValidationRule, "ObjectValidationRule"));
						}
						if (requestBody.type === 'application/json') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.objectValidationRule, "ObjectValidationRule"));
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
						return {body: ObjectSerializer.deserialize(await response.json(), "ObjectValidationRule"), response};
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
							 * @param objectValidationRuleId
						 * @param objectValidationRule
					 */
					public async patchObjectValidationRule(
								objectValidationRuleId: number,
							objectValidationRule?: ObjectValidationRule,
						headers?: {[name: string]: string}
					): Promise<{
							body: ObjectValidationRule;
						response: Response;
					}> {
						return this.patchObjectValidationRuleWithContentType(
									objectValidationRuleId,
							{
								type: 'application/json',
								parameters: {
										objectValidationRule: objectValidationRule
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
		public async postObjectDefinitionByExternalReferenceCodeObjectValidationRuleWithContentType(
					externalReferenceCode: string,
				requestBody:
						{
									type: 'application/xml',
									parameters: {
											objectValidationRule?: ObjectValidationRule
									}
						}
							|
						{
									type: 'application/json',
									parameters: {
											objectValidationRule?: ObjectValidationRule
									}
						}
							,
			headers?: {[name: string]: string}
		): Promise<{
				body: ObjectValidationRule;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/object-admin/v1.0/object-definitions/by-external-reference-code/{externalReferenceCode}/object-validation-rules'
						.replace('{externalReferenceCode}',encodeURIComponent(externalReferenceCode))
				;

						if (externalReferenceCode === null || externalReferenceCode === undefined) {
							throw new Error('Required parameter externalReferenceCode was null or undefined when calling postObjectDefinitionByExternalReferenceCodeObjectValidationRule.');
						}

			const localVarQueryParameters: any = {};


			const queryString = Object.keys(localVarQueryParameters).length
				? '?' + new URLSearchParams(localVarQueryParameters).toString()
				: '';

				let body;
						if (requestBody.type === 'application/xml') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.objectValidationRule, "ObjectValidationRule"));
						}
						if (requestBody.type === 'application/json') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.objectValidationRule, "ObjectValidationRule"));
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
						return {body: ObjectSerializer.deserialize(await response.json(), "ObjectValidationRule"), response};
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
						 * @param objectValidationRule
					 */
					public async postObjectDefinitionByExternalReferenceCodeObjectValidationRule(
								externalReferenceCode: string,
							objectValidationRule?: ObjectValidationRule,
						headers?: {[name: string]: string}
					): Promise<{
							body: ObjectValidationRule;
						response: Response;
					}> {
						return this.postObjectDefinitionByExternalReferenceCodeObjectValidationRuleWithContentType(
									externalReferenceCode,
							{
								type: 'application/json',
								parameters: {
										objectValidationRule: objectValidationRule
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
		public async postObjectDefinitionObjectValidationRuleWithContentType(
					objectDefinitionId: number,
				requestBody:
						{
									type: 'application/xml',
									parameters: {
											objectValidationRule?: ObjectValidationRule
									}
						}
							|
						{
									type: 'application/json',
									parameters: {
											objectValidationRule?: ObjectValidationRule
									}
						}
							,
			headers?: {[name: string]: string}
		): Promise<{
				body: ObjectValidationRule;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/object-admin/v1.0/object-definitions/{objectDefinitionId}/object-validation-rules'
						.replace('{objectDefinitionId}',encodeURIComponent(objectDefinitionId))
				;

						if (objectDefinitionId === null || objectDefinitionId === undefined) {
							throw new Error('Required parameter objectDefinitionId was null or undefined when calling postObjectDefinitionObjectValidationRule.');
						}

			const localVarQueryParameters: any = {};


			const queryString = Object.keys(localVarQueryParameters).length
				? '?' + new URLSearchParams(localVarQueryParameters).toString()
				: '';

				let body;
						if (requestBody.type === 'application/xml') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.objectValidationRule, "ObjectValidationRule"));
						}
						if (requestBody.type === 'application/json') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.objectValidationRule, "ObjectValidationRule"));
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
						return {body: ObjectSerializer.deserialize(await response.json(), "ObjectValidationRule"), response};
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
						 * @param objectValidationRule
					 */
					public async postObjectDefinitionObjectValidationRule(
								objectDefinitionId: number,
							objectValidationRule?: ObjectValidationRule,
						headers?: {[name: string]: string}
					): Promise<{
							body: ObjectValidationRule;
						response: Response;
					}> {
						return this.postObjectDefinitionObjectValidationRuleWithContentType(
									objectDefinitionId,
							{
								type: 'application/json',
								parameters: {
										objectValidationRule: objectValidationRule
								}
							},
							headers
						);
					}
		/**
		 * 
				 * @param objectValidationRuleId
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async putObjectValidationRuleWithContentType(
					objectValidationRuleId: number,
				requestBody:
						{
									type: 'application/xml',
									parameters: {
											objectValidationRule?: ObjectValidationRule
									}
						}
							|
						{
									type: 'application/json',
									parameters: {
											objectValidationRule?: ObjectValidationRule
									}
						}
							,
			headers?: {[name: string]: string}
		): Promise<{
				body: ObjectValidationRule;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/object-admin/v1.0/object-validation-rules/{objectValidationRuleId}'
						.replace('{objectValidationRuleId}',encodeURIComponent(objectValidationRuleId))
				;

						if (objectValidationRuleId === null || objectValidationRuleId === undefined) {
							throw new Error('Required parameter objectValidationRuleId was null or undefined when calling putObjectValidationRule.');
						}

			const localVarQueryParameters: any = {};


			const queryString = Object.keys(localVarQueryParameters).length
				? '?' + new URLSearchParams(localVarQueryParameters).toString()
				: '';

				let body;
						if (requestBody.type === 'application/xml') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.objectValidationRule, "ObjectValidationRule"));
						}
						if (requestBody.type === 'application/json') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.objectValidationRule, "ObjectValidationRule"));
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
						return {body: ObjectSerializer.deserialize(await response.json(), "ObjectValidationRule"), response};
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
							 * @param objectValidationRuleId
						 * @param objectValidationRule
					 */
					public async putObjectValidationRule(
								objectValidationRuleId: number,
							objectValidationRule?: ObjectValidationRule,
						headers?: {[name: string]: string}
					): Promise<{
							body: ObjectValidationRule;
						response: Response;
					}> {
						return this.putObjectValidationRuleWithContentType(
									objectValidationRuleId,
							{
								type: 'application/json',
								parameters: {
										objectValidationRule: objectValidationRule
								}
							},
							headers
						);
					}
}