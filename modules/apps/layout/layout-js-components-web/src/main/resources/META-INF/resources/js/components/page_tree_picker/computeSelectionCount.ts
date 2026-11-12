/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {
	PageTreePickerItem,
	PageTreePickerSelectionEntry,
} from '../../types/PageTreePicker';

function isNested<T>(
	entry: PageTreePickerSelectionEntry<T>,
	ancestorEntry: PageTreePickerSelectionEntry<T>,
	isDescendant: (itemId: string, ancestorId: string) => boolean
): boolean {
	if (entry.item.id === ancestorEntry.item.id) {
		return ancestorEntry.includeDescendants && !entry.includeDescendants;
	}

	return (
		ancestorEntry.includeDescendants &&
		isDescendant(entry.item.id, ancestorEntry.item.id)
	);
}

export default function computeSelectionCount<T>(
	entries: Array<PageTreePickerSelectionEntry<T>>,
	subtreeCountsById: Map<string, number>,
	isDescendant: (itemId: string, ancestorId: string) => boolean,
	matches: (item: PageTreePickerItem<T>) => boolean
): number {
	const getSize = (entry: PageTreePickerSelectionEntry<T>) => {
		let size = matches(entry.item) ? 1 : 0;

		if (entry.includeDescendants) {
			size += subtreeCountsById.get(entry.item.id) ?? 0;
		}

		return size;
	};

	let count = 0;

	entries.forEach((entry) => {
		if (entry.excluded) {
			return;
		}

		let regionSize = getSize(entry);

		entries.forEach((nestedEntry) => {
			if (
				nestedEntry === entry ||
				!isNested(nestedEntry, entry, isDescendant)
			) {
				return;
			}

			const intermediateEntry = entries.some(
				(otherEntry) =>
					otherEntry !== entry &&
					otherEntry !== nestedEntry &&
					isNested(nestedEntry, otherEntry, isDescendant) &&
					isNested(otherEntry, entry, isDescendant)
			);

			if (!intermediateEntry) {
				regionSize -= getSize(nestedEntry);
			}
		});

		count += Math.max(0, regionSize);
	});

	return count;
}
