/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayButton from '@clayui/button';
import ClayEmptyState from '@clayui/empty-state';
import ClayForm, {ClayCheckbox, ClayInput} from '@clayui/form';
import ClayIcon from '@clayui/icon';
import ClayLoadingIndicator from '@clayui/loading-indicator';
import {sub} from 'frontend-js-web';
import React, {useEffect, useRef, useState} from 'react';

import './TreePicker.scss';
import isNullOrUndefined from '../../utils/isNullOrUndefined';
import SearchResultsMessage from '../search_results_message/SearchResultsMessage';
import TreePicker, {openErrorToast} from './TreePicker';
import {
	TreePickerDataSource,
	TreePickerItem,
	TreePickerSelectionEntry,
	TreePickerSelectionMode,
} from './types';
import useTreePickerSelection, {
	TreePickerSelection,
} from './useTreePickerSelection';

function ShiftHint() {
	const [prefix, suffix] = Liferay.Language.get(
		'press-x-to-select-or-deselect-a-parent-node-and-all-its-child-items'
	).split('{0}');

	return (
		<p className="mb-4">
			{prefix}

			<kbd className="c-kbd c-kbd-light">⇧</kbd>

			{suffix}
		</p>
	);
}

function computeSelectionCount<T>(
	entries: Array<TreePickerSelectionEntry<T>>,
	subtreeCountsById: Map<string, number>,
	isDescendant: (itemId: string, ancestorId: string) => boolean
): number {
	const getSize = (entry: TreePickerSelectionEntry<T>) => {
		let size = isNullOrUndefined(entry.item.payload) ? 0 : 1;

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

function isNested<T>(
	entry: TreePickerSelectionEntry<T>,
	ancestorEntry: TreePickerSelectionEntry<T>,
	isDescendant: (itemId: string, ancestorId: string) => boolean
): boolean {
	if (entry.item.id === ancestorEntry.item.id) {
		return ancestorEntry.includeDescendants && !entry.includeDescendants;
	}

	return isDescendant(entry.item.id, ancestorEntry.item.id);
}

export interface TreePickerPanelProps<T> {
	dataSource: TreePickerDataSource<T>;
	defaultExpandedIds?: string[];
	defaultRegisteredItems?: Array<TreePickerItem<T>>;
	defaultSelectedEntries?: Array<TreePickerSelectionEntry<T>>;
	filterSlot?: React.ReactNode;
	onItemSelect?: (item: TreePickerItem<T>) => void;
	onSelectionChange?: (
		entries: Array<TreePickerSelectionEntry<T>>,
		items: Array<TreePickerItem<T>>
	) => void;
	selectionMode?: TreePickerSelectionMode;
}

export default function TreePickerPanel<T>({
	dataSource,
	defaultExpandedIds,
	defaultRegisteredItems,
	defaultSelectedEntries,
	filterSlot,
	onItemSelect,
	onSelectionChange,
	selectionMode = 'multiple',
}: TreePickerPanelProps<T>) {
	const [entries, setEntries] = useState<Array<TreePickerSelectionEntry<T>>>(
		defaultSelectedEntries ?? []
	);

	const selection = useTreePickerSelection<T>({
		defaultRegisteredItems,
		defaultSelectedEntries,
		onSelectionChange: setEntries,
	});

	const {getSelectedItems, isDescendant, registerItems, selectedKeys} =
		selection;

	const defaultSelectedEntriesRef = useRef(defaultSelectedEntries);

	useEffect(() => {
		const items = defaultSelectedEntriesRef.current?.map(
			(entry) => entry.item
		);

		if (!dataSource.resolveItems || !items?.length) {
			return;
		}

		let cancelled = false;

		dataSource
			.resolveItems(items)
			.then((resolvedItems) => {
				if (!cancelled) {
					registerItems(resolvedItems, null);
				}
			})
			.catch(() => {
				if (!cancelled) {
					openErrorToast();
				}
			});

		return () => {
			cancelled = true;
		};
	}, [dataSource, registerItems]);

	const onSelectionChangeRef = useRef(onSelectionChange);

	useEffect(() => {
		onSelectionChangeRef.current = onSelectionChange;
	}, [onSelectionChange]);

	useEffect(() => {
		onSelectionChangeRef.current?.(entries, getSelectedItems());
	}, [entries, getSelectedItems, selectedKeys]);

	const [query, setQuery] = useState('');
	const [searchValue, setSearchValue] = useState('');

	const [countFailed, setCountFailed] = useState(false);
	const [exactCount, setExactCount] = useState<number | null>(null);
	const [resolvingCount, setResolvingCount] = useState(false);

	const subtreeCountPromisesRef = useRef(new Map<string, Promise<number>>());

	const singleSelection = selectionMode === 'single';

	useEffect(() => {
		if (singleSelection || !dataSource.getSubtreeCount) {
			return;
		}

		let cancelled = false;

		const subtreeCountPromises = subtreeCountPromisesRef.current;

		setCountFailed(false);
		setResolvingCount(true);

		Promise.all(
			entries
				.filter((entry) => entry.includeDescendants)
				.map((entry) => {
					let subtreeCountPromise = subtreeCountPromises.get(
						entry.item.id
					);

					if (!subtreeCountPromise) {
						subtreeCountPromise = dataSource.getSubtreeCount!(
							entry.item
						);

						subtreeCountPromise.catch(() =>
							subtreeCountPromises.delete(entry.item.id)
						);

						subtreeCountPromises.set(
							entry.item.id,
							subtreeCountPromise
						);
					}

					return subtreeCountPromise.then(
						(subtreeCount) => [entry.item.id, subtreeCount] as const
					);
				})
		)
			.then((subtreeCounts) => {
				if (!cancelled) {
					setExactCount(
						computeSelectionCount(
							entries,
							new Map(subtreeCounts),
							isDescendant
						)
					);
					setResolvingCount(false);
				}
			})
			.catch(() => {
				if (!cancelled) {
					openErrorToast();

					setCountFailed(true);
					setExactCount(null);
					setResolvingCount(false);
				}
			});

		return () => {
			cancelled = true;
		};
	}, [dataSource, entries, isDescendant, selectedKeys, singleSelection]);

	const selectedItemsCount =
		exactCount ??
		getSelectedItems().filter((item) => !isNullOrUndefined(item.payload))
			.length;

	useEffect(() => {
		const timeoutId = setTimeout(() => setQuery(searchValue.trim()), 500);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [searchValue]);

	return (
		<>
			<ClayForm.Group className="m-0 p-3 tree-picker-filter">
				<ClayInput.Group>
					<ClayInput.GroupItem prepend>
						<ClayInput
							aria-label={Liferay.Language.get('search')}
							className="input-group-inset input-group-inset-after"
							onChange={(event) =>
								setSearchValue(event.target.value)
							}
							placeholder={Liferay.Language.get('search')}
							type="text"
						/>

						<ClayInput.GroupInsetItem after>
							<div className="link-monospaced">
								<ClayIcon symbol="search" />
							</div>
						</ClayInput.GroupInsetItem>
					</ClayInput.GroupItem>
				</ClayInput.Group>
			</ClayForm.Group>

			{filterSlot}

			{!singleSelection && (
				<div className="align-items-center d-flex px-3 tree-picker-count-feedback">
					{resolvingCount ? (
						<ClayLoadingIndicator
							className="m-0"
							displayType="secondary"
							size="sm"
						/>
					) : countFailed ? null : (
						<p className="m-0 text-2">
							{selectedItemsCount
								? sub(
										selectedItemsCount === 1
											? Liferay.Language.get(
													'x-item-selected'
												)
											: Liferay.Language.get(
													'x-items-selected'
												),
										selectedItemsCount
									)
								: Liferay.Language.get('nothing-selected')}
						</p>
					)}
				</div>
			)}

			<div className="p-3">
				{query ? (
					<TreePickerSearchResults
						dataSource={dataSource}
						onItemSelect={onItemSelect}
						query={query}
						selection={selection}
						selectionMode={selectionMode}
					/>
				) : (
					<>
						{!singleSelection && <ShiftHint />}

						<TreePicker<T>
							dataSource={dataSource}
							defaultExpandedIds={defaultExpandedIds}
							onItemSelect={onItemSelect}
							selection={selection}
							selectionMode={selectionMode}
						/>
					</>
				)}
			</div>
		</>
	);
}

function TreePickerSearchResults<T>({
	dataSource,
	onItemSelect,
	query,
	selection,
	selectionMode = 'multiple',
}: {
	dataSource: TreePickerDataSource<T>;
	onItemSelect?: (item: TreePickerItem<T>) => void;
	query: string;
	selection: TreePickerSelection<T>;
	selectionMode?: TreePickerSelectionMode;
}) {
	const {registerItems, select, selectedKeys, toggleKey} = selection;

	const singleSelection = selectionMode === 'single';

	const [loadingMore, setLoadingMore] = useState(false);
	const [page, setPage] = useState(1);
	const [results, setResults] = useState<Array<TreePickerItem<T>> | null>(
		null
	);
	const [totalCount, setTotalCount] = useState(0);

	useEffect(() => {
		let cancelled = false;

		setLoadingMore(false);
		setPage(1);
		setResults(null);
		setTotalCount(0);

		dataSource
			.search(query, 1)
			.then(({ancestors, items, totalCount: nextTotalCount}) => {
				if (cancelled) {
					return;
				}

				registerItems([...(ancestors ?? []), ...items], null);

				setResults(items);
				setTotalCount(nextTotalCount);
			})
			.catch(() => !cancelled && openErrorToast());

		return () => {
			cancelled = true;
		};
	}, [dataSource, query, registerItems]);

	if (!results) {
		return <ClayLoadingIndicator displayType="secondary" />;
	}

	if (totalCount === 0) {
		return (
			<>
				<SearchResultsMessage numberOfResults={totalCount} />

				<ClayEmptyState
					description={Liferay.Language.get(
						'try-again-with-a-different-search'
					)}
					imgSrc={`${Liferay.ThemeDisplay.getPathThemeImages()}/states/search_state.svg`}
					small
					title={Liferay.Language.get('no-results-found')}
				/>
			</>
		);
	}

	const loadMoreResults = () => {
		const nextPage = page + 1;

		setLoadingMore(true);

		dataSource
			.search(query, nextPage)
			.then(({ancestors, items, totalCount: nextTotalCount}) => {
				registerItems([...(ancestors ?? []), ...items], null);

				setPage(nextPage);
				setResults((previousResults) => [
					...(previousResults ?? []),
					...items,
				]);
				setTotalCount(nextTotalCount);
			})
			.catch(() => openErrorToast())
			.finally(() => setLoadingMore(false));
	};

	return (
		<>
			<SearchResultsMessage numberOfResults={totalCount} />

			<div className="pt-3">
				{results.map((item) => (
					<div
						className="align-items-center d-flex pb-2 search-result"
						key={item.id}
					>
						{!singleSelection && (
							<ClayCheckbox
								aria-label={item.label}
								checked={selectedKeys.has(item.id)}
								containerProps={{className: 'mr-3 my-0'}}
								disabled={item.disabled}
								onChange={() => toggleKey(item)}
							/>
						)}

						{item.path?.map((ancestorLabel, index) => (
							<span className="pr-2 text-secondary" key={index}>
								{ancestorLabel}

								<ClayIcon
									className="ml-2"
									symbol="angle-right-small"
								/>
							</span>
						))}

						{singleSelection ? (
							<ClayButton
								className="font-weight-semi-bold px-0 py-1 search-result-button"
								disabled={item.disabled}
								displayType="unstyled"
								onClick={() => {
									select(item);

									onItemSelect?.(item);
								}}
							>
								<HighlightedLabel
									label={item.label}
									query={query}
								/>
							</ClayButton>
						) : (
							<span className="font-weight-semi-bold p-0">
								<HighlightedLabel
									label={item.label}
									query={query}
								/>
							</span>
						)}
					</div>
				))}

				{results.length < totalCount && (
					<ClayButton
						className="load-more-btn mb-5 mt-2"
						disabled={loadingMore}
						displayType="secondary"
						onClick={loadMoreResults}
					>
						{loadingMore ? (
							<ClayLoadingIndicator
								className="mx-5"
								displayType="secondary"
								size="sm"
							/>
						) : (
							Liferay.Language.get('load-more-results')
						)}
					</ClayButton>
				)}
			</div>
		</>
	);
}

function HighlightedLabel({label, query}: {label: string; query: string}) {
	const index = label.toLowerCase().indexOf(query.toLowerCase());

	if (index < 0) {
		return <span>{label}</span>;
	}

	return (
		<>
			<span className="sr-only">{label}</span>

			<span aria-hidden={true} className="tree-picker-search-mark">
				{label.substring(0, index)}

				<mark className="px-0">
					{label.substring(index, index + query.length)}
				</mark>

				{label.substring(index + query.length)}
			</span>
		</>
	);
}
