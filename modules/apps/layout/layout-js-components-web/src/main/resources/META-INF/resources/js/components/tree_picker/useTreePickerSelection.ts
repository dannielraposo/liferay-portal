/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React, {useCallback, useEffect, useRef, useState} from 'react';

import {TreePickerItem, TreePickerSelectionEntry} from './types';

interface TreePickerSelectionRule {
	descendants?: boolean;
	self?: boolean;
}

export interface TreePickerSelection<T> {
	getSelectedItems: () => Array<TreePickerItem<T>>;
	isDescendant: (itemId: string, ancestorId: string) => boolean;
	registerItems: (
		items: Array<TreePickerItem<T>>,
		parentId: string | null
	) => void;
	select: (item: TreePickerItem<T>) => void;
	selectedKeys: Set<React.Key>;
	toggleKey: (item: TreePickerItem<T>) => void;
	toggleSubtree: (item: TreePickerItem<T>) => void;
}

export default function useTreePickerSelection<T>({
	defaultRegisteredItems,
	defaultSelectedEntries,
	onSelectionChange,
}: {
	defaultRegisteredItems?: Array<TreePickerItem<T>>;
	defaultSelectedEntries?: Array<TreePickerSelectionEntry<T>>;
	onSelectionChange?: (entries: Array<TreePickerSelectionEntry<T>>) => void;
}): TreePickerSelection<T> {
	const [{itemsById, parentIdsById}] = useState(() => {
		const itemsById = new Map<string, TreePickerItem<T>>();
		const parentIdsById = new Map<string, string | null>();

		const defaultItems = [
			...(defaultRegisteredItems ?? []),
			...(defaultSelectedEntries?.map((entry) => entry.item) ?? []),
		];

		defaultItems.forEach((item) => {
			itemsById.set(item.id, item);

			if (item.parentId !== undefined) {
				parentIdsById.set(item.id, item.parentId);
			}
		});

		return {itemsById, parentIdsById};
	});

	const isEffectivelySelected = useCallback(
		(itemId: string, rulesById: Map<string, TreePickerSelectionRule>) => {
			const rule = rulesById.get(itemId);

			if (rule?.self !== undefined) {
				return rule.self;
			}

			let parentId = parentIdsById.get(itemId);

			while (parentId) {
				const parentRule = rulesById.get(parentId);

				if (parentRule?.descendants !== undefined) {
					return parentRule.descendants;
				}

				parentId = parentIdsById.get(parentId);
			}

			return false;
		},
		[parentIdsById]
	);

	const getSelectedKeys = useCallback(
		(rulesById: Map<string, TreePickerSelectionRule>) => {
			const selectedKeys = new Set<React.Key>();

			itemsById.forEach((item, itemId) => {
				if (
					!item.disabled &&
					isEffectivelySelected(itemId, rulesById)
				) {
					selectedKeys.add(itemId);
				}
			});

			return selectedKeys;
		},
		[isEffectivelySelected, itemsById]
	);

	const [rulesById, setRulesByIdState] = useState<
		Map<string, TreePickerSelectionRule>
	>(() => {
		const rulesById = new Map<string, TreePickerSelectionRule>();

		defaultSelectedEntries?.forEach((entry) => {
			const rule = rulesById.get(entry.item.id) ?? {};

			if (entry.includeDescendants) {
				rulesById.set(entry.item.id, {
					descendants: !entry.excluded,
					self: rule.self ?? !entry.excluded,
				});
			}
			else {
				rulesById.set(entry.item.id, {...rule, self: !entry.excluded});
			}
		});

		return rulesById;
	});

	const rulesByIdRef = useRef(rulesById);

	const [selectedKeys, setSelectedKeys] = useState<Set<React.Key>>(() =>
		getSelectedKeys(rulesById)
	);

	const setRulesById = useCallback(
		(nextRulesById: Map<string, TreePickerSelectionRule>) => {
			rulesByIdRef.current = nextRulesById;

			setRulesByIdState(nextRulesById);
			setSelectedKeys(getSelectedKeys(nextRulesById));
		},
		[getSelectedKeys]
	);

	const getSelectedItems = useCallback(() => {
		const selectedItems: Array<TreePickerItem<T>> = [];

		itemsById.forEach((item, itemId) => {
			if (!item.disabled && isEffectivelySelected(itemId, rulesById)) {
				selectedItems.push(item);
			}
		});

		return selectedItems;
	}, [isEffectivelySelected, itemsById, rulesById]);

	const registerItems = useCallback(
		(items: Array<TreePickerItem<T>>, parentId: string | null) => {
			items.forEach((item) => {
				itemsById.set(item.id, {...item});

				parentIdsById.set(
					item.id,
					item.parentId === undefined ? parentId : item.parentId
				);
			});

			setSelectedKeys(getSelectedKeys(rulesByIdRef.current));
		},
		[getSelectedKeys, itemsById, parentIdsById]
	);

	const isDescendant = useCallback(
		(itemId: string, ancestorId: string) => {
			let parentId = parentIdsById.get(itemId);

			while (parentId) {
				if (parentId === ancestorId) {
					return true;
				}

				parentId = parentIdsById.get(parentId);
			}

			return false;
		},
		[parentIdsById]
	);

	const select = useCallback(
		(item: TreePickerItem<T>) => {
			setRulesById(new Map([[item.id, {self: true}]]));
		},
		[setRulesById]
	);

	const toggleKey = useCallback(
		(item: TreePickerItem<T>) => {
			const nextRulesById = new Map(rulesByIdRef.current);

			const selected = isEffectivelySelected(item.id, nextRulesById);

			const {descendants} = nextRulesById.get(item.id) ?? {};

			nextRulesById.delete(item.id);

			const rule: TreePickerSelectionRule = {};

			if (descendants !== undefined) {
				rule.descendants = descendants;
			}

			if (
				descendants !== undefined ||
				isEffectivelySelected(item.id, nextRulesById) === selected
			) {
				rule.self = !selected;
			}

			if (Object.keys(rule).length) {
				nextRulesById.set(item.id, rule);
			}

			setRulesById(nextRulesById);
		},
		[isEffectivelySelected, setRulesById]
	);

	const toggleSubtree = useCallback(
		(item: TreePickerItem<T>) => {
			const nextRulesById = new Map(rulesByIdRef.current);

			const selected = isEffectivelySelected(item.id, nextRulesById);

			nextRulesById.delete(item.id);

			nextRulesById.forEach((rule, ruleItemId) => {
				if (isDescendant(ruleItemId, item.id)) {
					nextRulesById.delete(ruleItemId);
				}
			});

			if (isEffectivelySelected(item.id, nextRulesById) === selected) {
				nextRulesById.set(item.id, {
					self: !selected,
					...(item.hasChildren && {descendants: !selected}),
				});
			}

			setRulesById(nextRulesById);
		},
		[isDescendant, isEffectivelySelected, setRulesById]
	);

	const onSelectionChangeRef = useRef(onSelectionChange);

	useEffect(() => {
		onSelectionChangeRef.current = onSelectionChange;
	}, [onSelectionChange]);

	useEffect(() => {
		const entries: Array<TreePickerSelectionEntry<T>> = [];

		rulesById.forEach((rule, itemId) => {
			const item = itemsById.get(itemId);

			if (!item) {
				return;
			}

			if (rule.descendants !== undefined) {
				entries.push({
					excluded: !rule.descendants,
					includeDescendants: true,
					item,
				});
			}

			if (rule.self !== undefined && rule.self !== rule.descendants) {
				entries.push({
					excluded: !rule.self,
					includeDescendants: false,
					item,
				});
			}
		});

		onSelectionChangeRef.current?.(entries);
	}, [itemsById, rulesById]);

	return {
		getSelectedItems,
		isDescendant,
		registerItems,
		select,
		selectedKeys,
		toggleKey,
		toggleSubtree,
	};
}
