/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PageTaxonomyCategory } from '../models/PageTaxonomyCategory';
import type { TaxonomyCategory } from '../models/TaxonomyCategory';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TaxonomyCategoryService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns PageTaxonomyCategory
     * @throws ApiError
     */
    public getTaxonomyCategoriesRankedPage({
        fields,
        page,
        pageSize,
        restrictFields,
        siteId,
    }: {
        fields?: string,
        page?: number,
        pageSize?: number,
        restrictFields?: string,
        siteId?: number,
    }): CancelablePromise<PageTaxonomyCategory> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/headless-admin-taxonomy/v1.0/taxonomy-categories/ranked',
            query: {
                'fields': fields,
                'page': page,
                'pageSize': pageSize,
                'restrictFields': restrictFields,
                'siteId': siteId,
            },
        });
    }
    /**
     * Retrieves a taxonomy category's child taxonomy categories. Results can be paginated, filtered, searched, and sorted.
     * @returns PageTaxonomyCategory
     * @throws ApiError
     */
    public getTaxonomyCategoryTaxonomyCategoriesPage({
        parentTaxonomyCategoryId,
        aggregationTerms,
        fields,
        filter,
        page,
        pageSize,
        restrictFields,
        search,
        sort,
    }: {
        parentTaxonomyCategoryId: string,
        aggregationTerms?: Array<string>,
        fields?: string,
        filter?: string,
        page?: number,
        pageSize?: number,
        restrictFields?: string,
        search?: string,
        sort?: string,
    }): CancelablePromise<PageTaxonomyCategory> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/headless-admin-taxonomy/v1.0/taxonomy-categories/{parentTaxonomyCategoryId}/taxonomy-categories',
            path: {
                'parentTaxonomyCategoryId': parentTaxonomyCategoryId,
            },
            query: {
                'aggregationTerms': aggregationTerms,
                'fields': fields,
                'filter': filter,
                'page': page,
                'pageSize': pageSize,
                'restrictFields': restrictFields,
                'search': search,
                'sort': sort,
            },
        });
    }
    /**
     * Inserts a new child taxonomy category.
     * @returns TaxonomyCategory
     * @throws ApiError
     */
    public postTaxonomyCategoryTaxonomyCategory({
        parentTaxonomyCategoryId,
        requestBody,
    }: {
        parentTaxonomyCategoryId: string,
        requestBody?: TaxonomyCategory,
    }): CancelablePromise<TaxonomyCategory> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/headless-admin-taxonomy/v1.0/taxonomy-categories/{parentTaxonomyCategoryId}/taxonomy-categories',
            path: {
                'parentTaxonomyCategoryId': parentTaxonomyCategoryId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Deletes the taxonomy category and returns a 204 if the operation succeeds.
     * @returns void
     * @throws ApiError
     */
    public deleteTaxonomyCategory({
        taxonomyCategoryId,
    }: {
        taxonomyCategoryId: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/headless-admin-taxonomy/v1.0/taxonomy-categories/{taxonomyCategoryId}',
            path: {
                'taxonomyCategoryId': taxonomyCategoryId,
            },
        });
    }
    /**
     * Retrieves a taxonomy category.
     * @returns TaxonomyCategory
     * @throws ApiError
     */
    public getTaxonomyCategory({
        taxonomyCategoryId,
        fields,
        restrictFields,
    }: {
        taxonomyCategoryId: string,
        fields?: string,
        restrictFields?: string,
    }): CancelablePromise<TaxonomyCategory> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/headless-admin-taxonomy/v1.0/taxonomy-categories/{taxonomyCategoryId}',
            path: {
                'taxonomyCategoryId': taxonomyCategoryId,
            },
            query: {
                'fields': fields,
                'restrictFields': restrictFields,
            },
        });
    }
    /**
     * Updates only the fields received in the request body. Other fields are left untouched.
     * @returns TaxonomyCategory
     * @throws ApiError
     */
    public patchTaxonomyCategory({
        taxonomyCategoryId,
        requestBody,
    }: {
        taxonomyCategoryId: string,
        requestBody?: TaxonomyCategory,
    }): CancelablePromise<TaxonomyCategory> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/headless-admin-taxonomy/v1.0/taxonomy-categories/{taxonomyCategoryId}',
            path: {
                'taxonomyCategoryId': taxonomyCategoryId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Replaces the taxonomy category with the information sent in the request body. Any missing fields are deleted unless they are required.
     * @returns TaxonomyCategory
     * @throws ApiError
     */
    public putTaxonomyCategory({
        taxonomyCategoryId,
        requestBody,
    }: {
        taxonomyCategoryId: string,
        requestBody?: TaxonomyCategory,
    }): CancelablePromise<TaxonomyCategory> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/headless-admin-taxonomy/v1.0/taxonomy-categories/{taxonomyCategoryId}',
            path: {
                'taxonomyCategoryId': taxonomyCategoryId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns void
     * @throws ApiError
     */
    public getTaxonomyCategoryPermissionsPage({
        taxonomyCategoryId,
        fields,
        restrictFields,
        roleNames,
    }: {
        taxonomyCategoryId: string,
        fields?: string,
        restrictFields?: string,
        roleNames?: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/headless-admin-taxonomy/v1.0/taxonomy-categories/{taxonomyCategoryId}/permissions',
            path: {
                'taxonomyCategoryId': taxonomyCategoryId,
            },
            query: {
                'fields': fields,
                'restrictFields': restrictFields,
                'roleNames': roleNames,
            },
        });
    }
    /**
     * @returns void
     * @throws ApiError
     */
    public putTaxonomyCategoryPermissionsPage({
        taxonomyCategoryId,
        requestBody,
    }: {
        taxonomyCategoryId: string,
        requestBody?: any,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/headless-admin-taxonomy/v1.0/taxonomy-categories/{taxonomyCategoryId}/permissions',
            path: {
                'taxonomyCategoryId': taxonomyCategoryId,
            },
            body: requestBody,
        });
    }
    /**
     * Retrieves a vocabulary's taxonomy categories. Results can be paginated, filtered, searched, and sorted.
     * @returns PageTaxonomyCategory
     * @throws ApiError
     */
    public getTaxonomyVocabularyTaxonomyCategoriesPage({
        taxonomyVocabularyId,
        aggregationTerms,
        fields,
        filter,
        flatten,
        page,
        pageSize,
        restrictFields,
        search,
        sort,
    }: {
        taxonomyVocabularyId: number,
        aggregationTerms?: Array<string>,
        fields?: string,
        filter?: string,
        flatten?: boolean,
        page?: number,
        pageSize?: number,
        restrictFields?: string,
        search?: string,
        sort?: string,
    }): CancelablePromise<PageTaxonomyCategory> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/headless-admin-taxonomy/v1.0/taxonomy-vocabularies/{taxonomyVocabularyId}/taxonomy-categories',
            path: {
                'taxonomyVocabularyId': taxonomyVocabularyId,
            },
            query: {
                'aggregationTerms': aggregationTerms,
                'fields': fields,
                'filter': filter,
                'flatten': flatten,
                'page': page,
                'pageSize': pageSize,
                'restrictFields': restrictFields,
                'search': search,
                'sort': sort,
            },
        });
    }
    /**
     * Inserts a new taxonomy category in a taxonomy vocabulary.
     * @returns TaxonomyCategory
     * @throws ApiError
     */
    public postTaxonomyVocabularyTaxonomyCategory({
        taxonomyVocabularyId,
        requestBody,
    }: {
        taxonomyVocabularyId: number,
        requestBody?: TaxonomyCategory,
    }): CancelablePromise<TaxonomyCategory> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/headless-admin-taxonomy/v1.0/taxonomy-vocabularies/{taxonomyVocabularyId}/taxonomy-categories',
            path: {
                'taxonomyVocabularyId': taxonomyVocabularyId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Deletes the site's taxonomy category by external reference code.
     * @returns void
     * @throws ApiError
     */
    public deleteTaxonomyVocabularyTaxonomyCategoryByExternalReferenceCode({
        taxonomyVocabularyId,
        externalReferenceCode,
    }: {
        taxonomyVocabularyId: number,
        externalReferenceCode: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/headless-admin-taxonomy/v1.0/taxonomy-vocabularies/{taxonomyVocabularyId}/taxonomy-categories/by-external-reference-code/{externalReferenceCode}',
            path: {
                'taxonomyVocabularyId': taxonomyVocabularyId,
                'externalReferenceCode': externalReferenceCode,
            },
        });
    }
    /**
     * Retrieves the site's taxonomy category by external reference code.
     * @returns TaxonomyCategory
     * @throws ApiError
     */
    public getTaxonomyVocabularyTaxonomyCategoryByExternalReferenceCode({
        taxonomyVocabularyId,
        externalReferenceCode,
        fields,
        restrictFields,
    }: {
        taxonomyVocabularyId: number,
        externalReferenceCode: string,
        fields?: string,
        restrictFields?: string,
    }): CancelablePromise<TaxonomyCategory> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/headless-admin-taxonomy/v1.0/taxonomy-vocabularies/{taxonomyVocabularyId}/taxonomy-categories/by-external-reference-code/{externalReferenceCode}',
            path: {
                'taxonomyVocabularyId': taxonomyVocabularyId,
                'externalReferenceCode': externalReferenceCode,
            },
            query: {
                'fields': fields,
                'restrictFields': restrictFields,
            },
        });
    }
    /**
     * Updates the site's taxonomy category with the given external reference code, or creates it if it not exists.
     * @returns TaxonomyCategory
     * @throws ApiError
     */
    public putTaxonomyVocabularyTaxonomyCategoryByExternalReferenceCode({
        taxonomyVocabularyId,
        externalReferenceCode,
        requestBody,
    }: {
        taxonomyVocabularyId: number,
        externalReferenceCode: string,
        requestBody?: TaxonomyCategory,
    }): CancelablePromise<TaxonomyCategory> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/headless-admin-taxonomy/v1.0/taxonomy-vocabularies/{taxonomyVocabularyId}/taxonomy-categories/by-external-reference-code/{externalReferenceCode}',
            path: {
                'taxonomyVocabularyId': taxonomyVocabularyId,
                'externalReferenceCode': externalReferenceCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
