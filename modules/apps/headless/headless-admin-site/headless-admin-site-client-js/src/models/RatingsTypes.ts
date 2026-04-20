/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */


/**
 * @author Rubén Pulido
 * @generated
 */

	/**
	* Site applications where the default rating system can be modified to a desired ratings type.
	*/
	export class RatingsTypes {
			"blogPosting"?: 'like' | 'stacked-stars' | 'stars' | 'thumbs';
			"bookmarksEntry"?: 'like' | 'stacked-stars' | 'stars' | 'thumbs';
			"comment"?: 'like' | 'stacked-stars' | 'stars' | 'thumbs';
			"document"?: 'like' | 'stacked-stars' | 'stars' | 'thumbs';
			"knowledgeBaseArticle"?: 'like' | 'stacked-stars' | 'stars' | 'thumbs';
			"messageBoardMessage"?: 'like' | 'stacked-stars' | 'stars' | 'thumbs';
			"sitePage"?: 'like' | 'stacked-stars' | 'stars' | 'thumbs';
			"structuredContent"?: 'like' | 'stacked-stars' | 'stars' | 'thumbs';
			"wikiPage"?: 'like' | 'stacked-stars' | 'stars' | 'thumbs';

		static "discriminator": string | undefined = undefined;

	static "attributeTypeMap": Array<{
		baseName: string;
		name: string;
		type: string;
	}> = [
		{
			baseName: "blogPosting",
			name: "blogPosting",
			type: "'like' | 'stacked-stars' | 'stars' | 'thumbs'",
		},
		{
			baseName: "bookmarksEntry",
			name: "bookmarksEntry",
			type: "'like' | 'stacked-stars' | 'stars' | 'thumbs'",
		},
		{
			baseName: "comment",
			name: "comment",
			type: "'like' | 'stacked-stars' | 'stars' | 'thumbs'",
		},
		{
			baseName: "document",
			name: "document",
			type: "'like' | 'stacked-stars' | 'stars' | 'thumbs'",
		},
		{
			baseName: "knowledgeBaseArticle",
			name: "knowledgeBaseArticle",
			type: "'like' | 'stacked-stars' | 'stars' | 'thumbs'",
		},
		{
			baseName: "messageBoardMessage",
			name: "messageBoardMessage",
			type: "'like' | 'stacked-stars' | 'stars' | 'thumbs'",
		},
		{
			baseName: "sitePage",
			name: "sitePage",
			type: "'like' | 'stacked-stars' | 'stars' | 'thumbs'",
		},
		{
			baseName: "structuredContent",
			name: "structuredContent",
			type: "'like' | 'stacked-stars' | 'stars' | 'thumbs'",
		},
		{
			baseName: "wikiPage",
			name: "wikiPage",
			type: "'like' | 'stacked-stars' | 'stars' | 'thumbs'",
		},
		];

		static getAttributeTypeMap() {
				return RatingsTypes.attributeTypeMap;
		}
	}
