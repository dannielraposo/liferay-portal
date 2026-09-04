/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayButton from '@clayui/button';
import ClayEmptyState from '@clayui/empty-state';
import {ClayCheckbox} from '@clayui/form';
import ClayIcon from '@clayui/icon';
import ClayLoadingIndicator from '@clayui/loading-indicator';
import React, {useEffect, useState} from 'react';

import SearchResultsMessage from '../search_results_message/SearchResultsMessage';
import {
	TreePickerDataSource,
	TreePickerItem,
	TreePickerSelectionMode,
} from './types';
import {TreePickerSelection} from './useTreePickerSelection';

export default function TreePickerSearchResults<T>({
	dataSource,
	onError,
	onItemSelect,
	query,
	selection,
	selectionMode = 'multiple',
}: {
	dataSource: TreePickerDataSource<T>;
	onError: (error: unknown) => void;
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

		const timeoutId = setTimeout(() => {
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
				.catch((error) => !cancelled && onError(error));
		}, 500);

		return () => {
			cancelled = true;

			clearTimeout(timeoutId);
		};
	}, [dataSource, onError, query, registerItems]);

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
			.catch((error) => onError(error))
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
