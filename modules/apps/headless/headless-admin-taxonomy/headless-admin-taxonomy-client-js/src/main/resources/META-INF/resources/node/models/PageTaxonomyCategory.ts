/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Facet } from './Facet';
import type { TaxonomyCategory } from './TaxonomyCategory';
export type PageTaxonomyCategory = {
    actions?: Record<string, Record<string, string>>;
    facets?: Array<Facet>;
    items?: Array<TaxonomyCategory>;
    lastPage?: number;
    page?: number;
    pageSize?: number;
    totalCount?: number;
};

