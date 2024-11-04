/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {HeadlessAdminTaxonomyClient} from '../../../apps/headless/headless-admin-taxonomy/headless-admin-taxonomy-client-js/src/main/resources/META-INF/resources/node';
import {ApiHelpers} from './ApiHelpers';

export interface postTaxonomyVocabularyTaxonomyCategoryProps {
	name: string;
	name_i18n?: {['ES-es']: string};
	vocabularyId: number;
}

export class HeadlessAdminTaxonomyApiHelper {
	readonly apiHelpers: ApiHelpers;
	readonly basePath: string;

	constructor(apiHelpers: ApiHelpers) {
		this.apiHelpers = apiHelpers;
		this.basePath = 'headless-admin-taxonomy/v1.0';
	}

	/**
	 * It allows getting a category by vocabulary.
	 *
	 * @param vocabularyId the parent vocabulary id
	 */

	async getTaxonomyCategoryByVocabularyId(vocabularyId: number) {
		const headlessAdminTaxonomyClient =
			await this.apiHelpers.buildRestClient(HeadlessAdminTaxonomyClient);

		return headlessAdminTaxonomyClient.taxonomyCategory.getTaxonomyVocabularyTaxonomyCategoriesPage(
			{taxonomyVocabularyId: vocabularyId}
		);
	}

	/**
	 * It allows getting a vocabulary by site.
	 *
	 * @param siteId the id of the site in which the vocabulary will be created
	 */

	async getTaxonomyVocabularyBySiteId(siteId: any) {
		const headlessAdminTaxonomyClient =
			await this.apiHelpers.buildRestClient(HeadlessAdminTaxonomyClient);

		return headlessAdminTaxonomyClient.taxonomyVocabulary.getSiteTaxonomyVocabulariesPage(
			{siteId}
		);
	}

	/**
	 * It allows creating a vocabulary inside a site.
	 *
	 * @param siteId the id of the site in which the vocabulary will be created
	 * @param name the name of the vocabulary
	 * @param [assetTypes] the asset types to which the vocabulary can be used
	 */

	async postSiteTaxonomyVocabulary({
		assetTypes,
		name,
		siteId,
	}: {
		assetTypes?: AssetType[];
		name: string;
		siteId: any;
	}) {
		const headlessAdminTaxonomyClient =
			await this.apiHelpers.buildRestClient(HeadlessAdminTaxonomyClient);

		return headlessAdminTaxonomyClient.taxonomyVocabulary.postSiteTaxonomyVocabulary(
			{
				requestBody: {assetTypes, name},
				siteId,
			}
		);
	}

	/**
	 * It allows creating a category inside a vocabulary.
	 *
	 * @param name the name of the category
	 * @param name_i18n the name of the category
	 * @param vocabularyId the parent vocabulary id
	 */

	async postTaxonomyVocabularyTaxonomyCategory({
		name,
		name_i18n,
		vocabularyId,
	}: {
		name: string;
		name_i18n: Record<string, string>;
		vocabularyId: number;
	}) {
		const headlessAdminTaxonomyClient =
			await this.apiHelpers.buildRestClient(HeadlessAdminTaxonomyClient);

		return headlessAdminTaxonomyClient.taxonomyCategory.postTaxonomyVocabularyTaxonomyCategory(
			{
				requestBody: {name, name_i18n},
				taxonomyVocabularyId: vocabularyId,
			}
		);
	}

	/**
	 * It allows partially update a category name
	 *
	 * @param name the new name of the category
	 * @param id the category id
	 */

	async patchTaxonomyCategory({id, name}: {id: any; name: string}) {
		const headlessAdminTaxonomyClient =
			await this.apiHelpers.buildRestClient(HeadlessAdminTaxonomyClient);

		return headlessAdminTaxonomyClient.taxonomyCategory.patchTaxonomyCategory(
			{requestBody: {name}, taxonomyCategoryId: id}
		);
	}

	/**
	 * It allows creating a tag inside a site.
	 *
	 * @param name the name of the tag
	 * @param siteId the id of the site in which the tag will be created
	 */

	async postSiteKeyword({name, siteId}: {name: string; siteId: any}) {
		const headlessAdminTaxonomyClient =
			await this.apiHelpers.buildRestClient(HeadlessAdminTaxonomyClient);

		return headlessAdminTaxonomyClient.keyword.postSiteKeyword({
			requestBody: {name},
			siteId,
		});
	}

	/**
	 * It allows creating a tag inside an asset library
	 *
	 * @param name the name of the tag
	 * @param depotEntryId the id of the asset library in which the tag will be created
	 */

	async postAssetLibraryKeyword({
		depotEntryId,
		name,
	}: {
		depotEntryId: any;
		name: string;
	}) {
		const headlessAdminTaxonomyClient =
			await this.apiHelpers.buildRestClient(HeadlessAdminTaxonomyClient);

		return headlessAdminTaxonomyClient.keyword.postAssetLibraryKeyword({
			assetLibraryId: depotEntryId,
			requestBody: {name},
		});
	}

	/**
	 * It allows deleting a tag.
	 *
	 * @param id the id of the tag
	 */

	async deleteKeyword({id}: {id: number}) {
		const headlessAdminTaxonomyClient =
			await this.apiHelpers.buildRestClient(HeadlessAdminTaxonomyClient);

		return headlessAdminTaxonomyClient.keyword.deleteKeyword({
			keywordId: id,
		});
	}
}
