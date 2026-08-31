/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

export interface TreePickerDataSource<T = unknown> {
	getChildren(
		parentTreePickerItem: TreePickerItem<T> | null,
		page: number
	): Promise<TreePickerPage<T>>;

	getSubtreeCount?(treePickerItem: TreePickerItem<T>): Promise<number>;

	resolveItems?(
		treePickerItems: Array<TreePickerItem<T>>
	): Promise<Array<TreePickerItem<T>>>;

	search(query: string, page: number): Promise<TreePickerPage<T>>;
}

export interface TreePickerItem<T = unknown> {
	alwaysIncludeDescendants?: boolean;
	badge?: TreePickerItemBadge;
	disabled?: boolean;
	hasChildren: boolean;
	icon?: string;
	id: string;
	label: string;
	parentId?: string | null;
	path?: string[];
	payload: T;
	title?: string;
}

export interface TreePickerItemBadge {
	label: string;
	symbol: string;
}

export interface TreePickerPage<T = unknown> {
	ancestors?: Array<TreePickerItem<T>>;
	items: Array<TreePickerItem<T>>;
	totalCount: number;
}

export type TreePickerSelectionMode = 'multiple' | 'single';

export interface TreePickerSelectionEntry<T = unknown> {
	excluded?: boolean;
	includeDescendants: boolean;
	item: TreePickerItem<T>;
}
