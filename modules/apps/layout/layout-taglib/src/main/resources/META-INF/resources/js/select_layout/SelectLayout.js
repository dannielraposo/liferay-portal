/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayEmptyState from '@clayui/empty-state';
import ClayLayout from '@clayui/layout';
import {TreePickerPanel} from '@liferay/layout-js-components-web';
import {getOpener} from 'frontend-js-web';
import PropTypes from 'prop-types';
import React, {useMemo, useRef} from 'react';

import LayoutTreeDataSource from './LayoutTreeDataSource';

const ROOT_ID = '0';

function toItemSelectorData(item) {
	const node = item.payload;

	return {
		externalReferenceCode: node.externalReferenceCode,
		groupId: node.groupId,
		id: node.id,
		layoutId: node.layoutId,
		name: node.value,
		privateLayout: node.privateLayout,
		returnType: node.returnType,
		title: node.name,
		value: node.payload,
	};
}

const SelectLayout = ({
	checkDisplayPage,
	config,
	groupId,
	itemSelectorReturnType,
	itemSelectorSaveEvent,
	multiSelection,
	nodes,
	privateLayout,
	selectedLayoutIds = [],
}) => {
	const dataSource = useMemo(
		() =>
			new LayoutTreeDataSource({
				checkDisplayPage,
				findLayoutsURL: config.findLayoutsURL,
				groupId,
				itemSelectorReturnType,
				loadMoreItemsURL: config.loadMoreItemsURL,
				maxPageSize: config.maxPageSize,
				nodes,
				privateLayout,
			}),
		[
			checkDisplayPage,
			config.findLayoutsURL,
			config.loadMoreItemsURL,
			config.maxPageSize,
			groupId,
			itemSelectorReturnType,
			nodes,
			privateLayout,
		]
	);

	const initialSelectionRef = useRef(true);

	const fire = (data) => {
		Liferay.fire(itemSelectorSaveEvent, {data});

		getOpener().Liferay.fire(itemSelectorSaveEvent, {data});
	};

	if (!nodes.length) {
		return (
			<ClayLayout.Sheet>
				<ClayEmptyState
					className="mt-0"
					description={Liferay.Language.get('there-are-no-pages')}
					imgSrc={`${themeDisplay.getPathThemeImages()}/states/empty_state.svg`}
					title={Liferay.Language.get('no-results-found')}
				/>
			</ClayLayout.Sheet>
		);
	}

	return (
		<ClayLayout.ContainerFluid className="cadmin p-0 tree-picker">
			<TreePickerPanel
				dataSource={dataSource}
				defaultExpandedIds={[ROOT_ID]}
				defaultSelectedEntries={selectedLayoutIds.map(
					(selectedLayoutId) => ({
						excluded: false,
						includeDescendants: false,
						item: {
							hasChildren: false,
							id: selectedLayoutId,
							label: selectedLayoutId,
							parentId: ROOT_ID,
							payload: null,
						},
					})
				)}
				onItemSelect={(item) => fire(toItemSelectorData(item))}
				onSelectionChange={(entries, selectedItems) => {
					if (initialSelectionRef.current) {
						initialSelectionRef.current = false;

						return;
					}

					const data = selectedItems
						.filter((item) => item.payload && item.id !== ROOT_ID)
						.map(toItemSelectorData);

					if (multiSelection && !!data.length) {
						fire(data);
					}
				}}
				selectionMode={multiSelection ? 'multiple' : 'single'}
			/>
		</ClayLayout.ContainerFluid>
	);
};

SelectLayout.propTypes = {
	checkDisplayPage: PropTypes.bool,
	config: PropTypes.object,
	groupId: PropTypes.number,
	itemSelectorReturnType: PropTypes.string,
	itemSelectorSaveEvent: PropTypes.string,
	multiSelection: PropTypes.bool,
	nodes: PropTypes.array.isRequired,
	privateLayout: PropTypes.bool,
	selectedLayoutIds: PropTypes.array,
};

export default SelectLayout;
