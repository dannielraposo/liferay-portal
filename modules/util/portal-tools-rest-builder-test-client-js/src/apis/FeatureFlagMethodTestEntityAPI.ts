/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ObjectSerializer} from '../utils/SerDes';

		import {FeatureFlagMethodTestEntity} from '../models/FeatureFlagMethodTestEntity';
		import {PageFeatureFlagMethodTestEntity} from '../models/PageFeatureFlagMethodTestEntity';

/**
 * @author Alejandro Tardín
 * @generated
 */

export class FeatureFlagMethodTestEntityAPI {
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
				 * @param featureFlagMethodTestEntityId
		 * @param headers Optional custom request headers
		 */
		public async deleteFeatureFlagMethodTestEntity(
						featureFlagMethodTestEntityId: number,
			headers?: {[name: string]: string},
		): Promise<{
				body?: any;
			response: Response;
		}> {

			const path = this._basePath + "/portal-tools-rest-builder-test/v1.0/feature-flag-method-test-entities/{featureFlagMethodTestEntityId}"
						.replace("{featureFlagMethodTestEntityId}",encodeURIComponent(featureFlagMethodTestEntityId))
				;

			const queryParameters: any = {};

						if (featureFlagMethodTestEntityId === null || featureFlagMethodTestEntityId === undefined) {
							throw new Error("Required parameter featureFlagMethodTestEntityId was null or undefined when calling deleteFeatureFlagMethodTestEntity.");
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
		 * 
		 * @param headers Optional custom request headers
		 */
		public async getFeatureFlagMethodTestEntitiesPage(
			headers?: {[name: string]: string},
		): Promise<{
				body: PageFeatureFlagMethodTestEntity;
			response: Response;
		}> {

			const path = this._basePath + "/portal-tools-rest-builder-test/v1.0/feature-flag-method-test-entities"
;

			const queryParameters: any = {};

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
						return {body: ObjectSerializer.deserialize(await response.json(), "PageFeatureFlagMethodTestEntity"), response};
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
		 		* @param requestBody Request body that can be one of multiple content types
		 * @param headers Optional custom request headers
		 */
		public async postFeatureFlagMethodTestEntityWithContentType(
					requestBody:
							{
								parameters: {
										featureFlagMethodTestEntity?: FeatureFlagMethodTestEntity
								},
								type: "application/json"
							}
								|
							{
								parameters: {
										featureFlagMethodTestEntity?: FeatureFlagMethodTestEntity
								},
								type: "application/xml"
							}
								,
			headers?: {[name: string]: string},
		): Promise<{
				body: FeatureFlagMethodTestEntity;
			response: Response;
		}> {
				let body;
						if (requestBody.type === "application/json") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.featureFlagMethodTestEntity, "FeatureFlagMethodTestEntity"));
						}
						if (requestBody.type === "application/xml") {
								body = JSON.stringify(ObjectSerializer.serialize(requestBody.parameters.featureFlagMethodTestEntity, "FeatureFlagMethodTestEntity"));
						}

			const path = this._basePath + "/portal-tools-rest-builder-test/v1.0/feature-flag-method-test-entities"
;

			const queryParameters: any = {};

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
						return {body: ObjectSerializer.deserialize(await response.json(), "FeatureFlagMethodTestEntity"), response};
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
					 *  - Default method for JSON body
						 * @param featureFlagMethodTestEntity
					 */
					public async postFeatureFlagMethodTestEntity(
							featureFlagMethodTestEntity?: FeatureFlagMethodTestEntity,
						headers?: {[name: string]: string}
					): Promise<{
							body: FeatureFlagMethodTestEntity;
						response: Response;
					}> {
						return this.postFeatureFlagMethodTestEntityWithContentType(
							{
								parameters: {
										featureFlagMethodTestEntity: featureFlagMethodTestEntity
								},
								type: "application/json"
							},
							headers
						);
					}
}