/**
 * SPDX-FileCopyrightText: (c) 2025 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ObjectSerializer} from '../model/models';

		import {CompanyTestEntity} from '../model/companyTestEntity';
		import {PageCompanyTestEntity} from '../model/pageCompanyTestEntity';

import {HttpError} from './apis';

/**
 * @author Alejandro Tardín
 * @generated
 */

export class CompanyTestEntityApi {
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
		public async getCompanyTestEntitiesPage(
			headers?: {[name: string]: string}
		): Promise<{
				body: PageCompanyTestEntity;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/test/v1.0/company-test-entities'
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
						return {body: ObjectSerializer.deserialize(await response.json(), "PageCompanyTestEntity"), response};
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
				 * @param companyTestEntityId
		 * @param headers Optional custom request headers
		 */
		public async getCompanyTestEntity(
					companyTestEntityId: number,
			headers?: {[name: string]: string}
		): Promise<{
				body: CompanyTestEntity;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/test/v1.0/company-test-entities/{companyTestEntityId}'
						.replace('{companyTestEntityId}',encodeURIComponent(companyTestEntityId))
				;

						if (companyTestEntityId === null || companyTestEntityId === undefined) {
							throw new Error('Required parameter companyTestEntityId was null or undefined when calling getCompanyTestEntity.');
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
						return {body: ObjectSerializer.deserialize(await response.json(), "CompanyTestEntity"), response};
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
		public async getCompanyTestEntityByExternalReferenceCode(
					externalReferenceCode: string,
			headers?: {[name: string]: string}
		): Promise<{
				body: CompanyTestEntity;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/test/v1.0/company-test-entities/by-external-reference-code/{externalReferenceCode}'
						.replace('{externalReferenceCode}',encodeURIComponent(externalReferenceCode))
				;

						if (externalReferenceCode === null || externalReferenceCode === undefined) {
							throw new Error('Required parameter externalReferenceCode was null or undefined when calling getCompanyTestEntityByExternalReferenceCode.');
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
						return {body: ObjectSerializer.deserialize(await response.json(), "CompanyTestEntity"), response};
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
				 * @param companyTestEntityId
				 * @param roleNames
		 * @param headers Optional custom request headers
		 */
		public async getCompanyTestEntityPermissionsPage(
					companyTestEntityId: number,
					roleNames?: string,
			headers?: {[name: string]: string}
		): Promise<{
				body?: any;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/test/v1.0/company-test-entities/{companyTestEntityId}/permissions'
						.replace('{companyTestEntityId}',encodeURIComponent(companyTestEntityId))
								;

						if (companyTestEntityId === null || companyTestEntityId === undefined) {
							throw new Error('Required parameter companyTestEntityId was null or undefined when calling getCompanyTestEntityPermissionsPage.');
						}

			const localVarQueryParameters: any = {};

					if (roleNames !== undefined) {
						localVarQueryParameters['roleNames'] = JSON.stringify(ObjectSerializer.serialize(roleNames, "string"));
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
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async postCompanyTestEntityWithContentType(
				requestBody:
						{
									type: 'application/xml',
									parameters: {
											companyTestEntity?: CompanyTestEntity
									}
						}
							|
						{
									type: 'application/json',
									parameters: {
											companyTestEntity?: CompanyTestEntity
									}
						}
							,
			headers?: {[name: string]: string}
		): Promise<{
				body: CompanyTestEntity;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/test/v1.0/company-test-entities'
;

			const localVarQueryParameters: any = {};


			const queryString = Object.keys(localVarQueryParameters).length
				? '?' + new URLSearchParams(localVarQueryParameters).toString()
				: '';

				let body;
						if (requestBody.type === 'application/xml') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.companyTestEntity, "CompanyTestEntity"));
						}
						if (requestBody.type === 'application/json') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.companyTestEntity, "CompanyTestEntity"));
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
						return {body: ObjectSerializer.deserialize(await response.json(), "CompanyTestEntity"), response};
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
						 * @param companyTestEntity
					 */
					public async postCompanyTestEntity(
							companyTestEntity?: CompanyTestEntity,
						headers?: {[name: string]: string}
					): Promise<{
							body: CompanyTestEntity;
						response: Response;
					}> {
						return this.postCompanyTestEntityWithContentType(
							{
								type: 'application/json',
								parameters: {
										companyTestEntity: companyTestEntity
								}
							},
							headers
						);
					}
		/**
		 * 
				 * @param companyTestEntityId
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async putCompanyTestEntityWithContentType(
					companyTestEntityId: number,
				requestBody:
						{
									type: 'application/xml',
									parameters: {
											companyTestEntity?: CompanyTestEntity
									}
						}
							|
						{
									type: 'application/json',
									parameters: {
											companyTestEntity?: CompanyTestEntity
									}
						}
							,
			headers?: {[name: string]: string}
		): Promise<{
				body: CompanyTestEntity;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/test/v1.0/company-test-entities/{companyTestEntityId}'
						.replace('{companyTestEntityId}',encodeURIComponent(companyTestEntityId))
				;

						if (companyTestEntityId === null || companyTestEntityId === undefined) {
							throw new Error('Required parameter companyTestEntityId was null or undefined when calling putCompanyTestEntity.');
						}

			const localVarQueryParameters: any = {};


			const queryString = Object.keys(localVarQueryParameters).length
				? '?' + new URLSearchParams(localVarQueryParameters).toString()
				: '';

				let body;
						if (requestBody.type === 'application/xml') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.companyTestEntity, "CompanyTestEntity"));
						}
						if (requestBody.type === 'application/json') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.companyTestEntity, "CompanyTestEntity"));
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
						return {body: ObjectSerializer.deserialize(await response.json(), "CompanyTestEntity"), response};
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
							 * @param companyTestEntityId
						 * @param companyTestEntity
					 */
					public async putCompanyTestEntity(
								companyTestEntityId: number,
							companyTestEntity?: CompanyTestEntity,
						headers?: {[name: string]: string}
					): Promise<{
							body: CompanyTestEntity;
						response: Response;
					}> {
						return this.putCompanyTestEntityWithContentType(
									companyTestEntityId,
							{
								type: 'application/json',
								parameters: {
										companyTestEntity: companyTestEntity
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
		public async putCompanyTestEntityByExternalReferenceCodeWithContentType(
					externalReferenceCode: string,
				requestBody:
						{
									type: 'application/xml',
									parameters: {
											companyTestEntity?: CompanyTestEntity
									}
						}
							|
						{
									type: 'application/json',
									parameters: {
											companyTestEntity?: CompanyTestEntity
									}
						}
							,
			headers?: {[name: string]: string}
		): Promise<{
				body: CompanyTestEntity;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/test/v1.0/company-test-entities/by-external-reference-code/{externalReferenceCode}'
						.replace('{externalReferenceCode}',encodeURIComponent(externalReferenceCode))
				;

						if (externalReferenceCode === null || externalReferenceCode === undefined) {
							throw new Error('Required parameter externalReferenceCode was null or undefined when calling putCompanyTestEntityByExternalReferenceCode.');
						}

			const localVarQueryParameters: any = {};


			const queryString = Object.keys(localVarQueryParameters).length
				? '?' + new URLSearchParams(localVarQueryParameters).toString()
				: '';

				let body;
						if (requestBody.type === 'application/xml') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.companyTestEntity, "CompanyTestEntity"));
						}
						if (requestBody.type === 'application/json') {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.companyTestEntity, "CompanyTestEntity"));
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
						return {body: ObjectSerializer.deserialize(await response.json(), "CompanyTestEntity"), response};
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
						 * @param companyTestEntity
					 */
					public async putCompanyTestEntityByExternalReferenceCode(
								externalReferenceCode: string,
							companyTestEntity?: CompanyTestEntity,
						headers?: {[name: string]: string}
					): Promise<{
							body: CompanyTestEntity;
						response: Response;
					}> {
						return this.putCompanyTestEntityByExternalReferenceCodeWithContentType(
									externalReferenceCode,
							{
								type: 'application/json',
								parameters: {
										companyTestEntity: companyTestEntity
								}
							},
							headers
						);
					}
		/**
		 * 
				 * @param companyTestEntityId
		 * @param headers Optional custom request headers
		 */
		public async putCompanyTestEntityPermissionsPage(
					companyTestEntityId: number,
			headers?: {[name: string]: string}
		): Promise<{
				body?: any;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/test/v1.0/company-test-entities/{companyTestEntityId}/permissions'
						.replace('{companyTestEntityId}',encodeURIComponent(companyTestEntityId))
				;

						if (companyTestEntityId === null || companyTestEntityId === undefined) {
							throw new Error('Required parameter companyTestEntityId was null or undefined when calling putCompanyTestEntityPermissionsPage.');
						}

			const localVarQueryParameters: any = {};


			const queryString = Object.keys(localVarQueryParameters).length
				? '?' + new URLSearchParams(localVarQueryParameters).toString()
				: '';


			const response = await fetch(localVarPath + queryString, {
				method: 'PUT',
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

}