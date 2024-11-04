/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Facet } from './Facet';
import type { TaxonomyVocabulary } from './TaxonomyVocabulary';
export type PageTaxonomyVocabulary = {
    actions?: Record<string, Record<string, string>>;
    facets?: Array<Facet>;
    items?: Array<TaxonomyVocabulary>;
    lastPage?: number;
    page?: number;
    pageSize?: number;
    totalCount?: number;
};

