/**
 * SPDX-FileCopyrightText: (c) 2025 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ObjectSerializer} from '../model/models';

		import {CTProcess} from '../model/cTProcess';
		import {PageCTProcess} from '../model/pageCTProcess';

import {HttpError} from './apis';

/**
 * @author David Truong
 * @generated
 */

export class CTProcessApi {
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
				 * @param ctProcessId
		 * @param headers Optional custom request headers
		 */
		public async deleteCTProcess(
					ctProcessId: number,
			headers?: {[name: string]: string}
		): Promise<{
				body?: any;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/change-tracking-rest/v1.0/ct-processes/{ctProcessId}'
						.replace('{ctProcessId}',encodeURIComponent(ctProcessId))
				;

						if (ctProcessId === null || ctProcessId === undefined) {
							throw new Error('Required parameter ctProcessId was null or undefined when calling deleteCTProcess.');
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
				 * @param ctProcessId
		 * @param headers Optional custom request headers
		 */
		public async getCTProcess(
					ctProcessId: number,
			headers?: {[name: string]: string}
		): Promise<{
				body: CTProcess;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/change-tracking-rest/v1.0/ct-processes/{ctProcessId}'
						.replace('{ctProcessId}',encodeURIComponent(ctProcessId))
				;

						if (ctProcessId === null || ctProcessId === undefined) {
							throw new Error('Required parameter ctProcessId was null or undefined when calling getCTProcess.');
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
						return {body: ObjectSerializer.deserialize(await response.json(), "CTProcess"), response};
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
				 * @param filter
				 * @param page
				 * @param pageSize
				 * @param search
				 * @param sort
				 * @param status
		 * @param headers Optional custom request headers
		 */
		public async getCTProcessesPage(
					filter?: string,
					page?: number,
					pageSize?: number,
					search?: string,
					sort?: string,
					status?: Array<number>,
			headers?: {[name: string]: string}
		): Promise<{
				body: PageCTProcess;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/change-tracking-rest/v1.0/ct-processes'
																								;

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
					if (status !== undefined) {
						localVarQueryParameters['status'] = JSON.stringify(ObjectSerializer.serialize(status, "Array<number>"));
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
						return {body: ObjectSerializer.deserialize(await response.json(), "PageCTProcess"), response};
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
				 * @param ctProcessId
				 * @param description
				 * @param name
		 * @param headers Optional custom request headers
		 */
		public async postCTProcessRevert(
					ctProcessId: number,
					description?: string,
					name?: string,
			headers?: {[name: string]: string}
		): Promise<{
				body?: any;
			response: Response;
		}> {
			const localVarPath = this._basePath + '/change-tracking-rest/v1.0/ct-processes/{ctProcessId}/revert'
						.replace('{ctProcessId}',encodeURIComponent(ctProcessId))
												;

						if (ctProcessId === null || ctProcessId === undefined) {
							throw new Error('Required parameter ctProcessId was null or undefined when calling postCTProcessRevert.');
						}

			const localVarQueryParameters: any = {};

					if (description !== undefined) {
						localVarQueryParameters['description'] = JSON.stringify(ObjectSerializer.serialize(description, "string"));
					}
					if (name !== undefined) {
						localVarQueryParameters['name'] = JSON.stringify(ObjectSerializer.serialize(name, "string"));
					}

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