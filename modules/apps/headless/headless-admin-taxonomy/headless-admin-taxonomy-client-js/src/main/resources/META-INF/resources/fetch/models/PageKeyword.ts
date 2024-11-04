/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Facet } from './Facet';
import type { Keyword } from './Keyword';
export type PageKeyword = {
    actions?: Record<string, Record<string, string>>;
    facets?: Array<Facet>;
    items?: Array<Keyword>;
    lastPage?: number;
    page?: number;
    pageSize?: number;
    totalCount?: number;
};

