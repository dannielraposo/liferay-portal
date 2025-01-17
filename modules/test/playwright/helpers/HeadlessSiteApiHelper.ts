/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {Site, SiteApi} from '@liferay/headless-site-client-js';
import {promises} from 'fs';

import {zipFolder} from '../utils/zip';
import {ApiHelpers} from './ApiHelpers';

export class HeadlessSiteApiHelper {
	apiHelpers: ApiHelpers;
	basePath: string;

	constructor(apiHelpers: ApiHelpers) {
		this.apiHelpers = apiHelpers;
		this.basePath = 'headless-site/v1.0';
	}

	async createSite(site: Site): Promise<Site> {
		const siteApiClient = await this.apiHelpers.buildRestClient(SiteApi);

		return (await siteApiClient.postSite(site)).body;
	}

	async createSiteFromZip(
		site: Site,
		siteInitializerPath: string
	): Promise<Site> {
		const siteApiClient = await this.apiHelpers.buildRestClient(SiteApi);
		const zip = await zipFolder(siteInitializerPath, {
			destPath: 'site-initializer/',
		});

		const file = new File([await promises.readFile(zip)], 'siteFile');

		return (
			await siteApiClient.postSiteWithContentType({
				type: 'multipart/form-data',
				parameters: {file, site},
			})
		).body;
	}

	async getSiteByERC(externalReferenceCode: string): Promise<Site> {
		return this.apiHelpers.get(
			`${this.apiHelpers.baseUrl}${this.basePath}/sites/by-external-reference-code/${externalReferenceCode}`
		);
	}

	async deleteSite(siteId: string) {
		return this.apiHelpers.delete(
			`${this.apiHelpers.baseUrl}${this.basePath}/sites/${siteId}`
		);
	}

	async deleteSiteByERC(externalReferenceCode: string) {
		return this.apiHelpers.delete(
			`${this.apiHelpers.baseUrl}${this.basePath}/sites/by-external-reference-code/${externalReferenceCode}`
		);
	}
}
