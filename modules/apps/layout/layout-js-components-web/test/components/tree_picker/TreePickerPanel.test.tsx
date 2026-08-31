/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import '@testing-library/jest-dom';
import {openToast} from 'frontend-js-components-web';

import TreePickerPanel from '../../../src/main/resources/META-INF/resources/js/components/tree_picker/TreePickerPanel';
import {
	TreePickerDataSource,
	TreePickerItem,
} from '../../../src/main/resources/META-INF/resources/js/components/tree_picker/types';
import checkAccessibility from '../../__lib__/checkAccessibility';

function createItem(
	id: string,
	hasChildren: boolean = false
): TreePickerItem<string> {
	return {
		hasChildren,
		id,
		label: `Label ${id}`,
		path: ['Site', `Label ${id}`],
		payload: id,
	};
}

const DATA_SOURCE: TreePickerDataSource<string> = {
	getChildren: () =>
		Promise.resolve({
			items: [createItem('a', true), createItem('b')],
			totalCount: 2,
		}),
	search: (query) => {
		const items = [createItem('a', true), createItem('b')].filter((item) =>
			item.label.toLowerCase().includes(query.toLowerCase())
		);

		return Promise.resolve({items, totalCount: items.length});
	},
};

async function renderTreePickerPanel({onSelectionChange = () => {}} = {}) {
	const result = render(
		<TreePickerPanel
			dataSource={DATA_SOURCE}
			onSelectionChange={onSelectionChange}
		/>
	);

	await screen.findByText('Label a');

	return result;
}

jest.mock('frontend-js-components-web', () => ({
	...(jest.requireActual('frontend-js-components-web') as object),
	openToast: jest.fn(),
}));

describe('TreePickerPanel', () => {
	beforeEach(() => {
		(Liferay.Language.get as jest.Mock).mockImplementation(
			(key: string) => {
				if (key === 'x-item-selected') {
					return '{0} item-selected';
				}

				if (key === 'x-items-selected') {
					return '{0} items-selected';
				}

				return key;
			}
		);

		jest.clearAllMocks();
	});

	afterEach(() => {
		(Liferay.Language.get as jest.Mock).mockImplementation(
			(key: string) => key
		);
	});

	it('renders the tree', async () => {
		await renderTreePickerPanel();

		expect(screen.getByText('Label b')).toBeInTheDocument();
	});

	it('replaces the tree with highlighted search results', async () => {
		await renderTreePickerPanel();

		await userEvent.type(screen.getByRole('textbox'), 'Label b');

		expect(
			await screen.findByText('Label b', {selector: 'mark'})
		).toBeInTheDocument();

		expect(screen.queryByRole('treeitem')).not.toBeInTheDocument();
		expect(screen.getByText('Site')).toBeInTheDocument();
	});

	it('reports the selection made from the search results', async () => {
		const onSelectionChange = jest.fn();

		await renderTreePickerPanel({onSelectionChange});

		await userEvent.type(screen.getByRole('textbox'), 'Label b');

		await screen.findByText('Label b', {selector: 'mark'});

		await userEvent.click(screen.getByRole('checkbox'));

		await waitFor(() =>
			expect(onSelectionChange).toHaveBeenLastCalledWith(
				[
					{
						excluded: false,
						includeDescendants: false,
						item: expect.objectContaining({id: 'b'}),
					},
				],
				expect.any(Array)
			)
		);
	});

	it('reports a failed count instead of showing an inexact one', async () => {
		render(
			<TreePickerPanel
				dataSource={{
					getChildren: DATA_SOURCE.getChildren,
					getSubtreeCount: () => Promise.reject(new Error()),
					search: DATA_SOURCE.search,
				}}
			/>
		);

		await screen.findByText('Label a');

		fireEvent.click(screen.getByRole('checkbox', {name: 'Label a'}), {
			shiftKey: true,
		});

		await waitFor(() =>
			expect(openToast).toHaveBeenCalledWith(
				expect.objectContaining({type: 'danger'})
			)
		);

		expect(screen.queryByText(/item-selected/)).not.toBeInTheDocument();
		expect(screen.queryByText('nothing-selected')).not.toBeInTheDocument();
	});

	it('shows the selection count while items are selected', async () => {
		await renderTreePickerPanel();

		await userEvent.click(screen.getByRole('checkbox', {name: 'Label b'}));

		expect(screen.getByText('1 item-selected')).toBeInTheDocument();

		await userEvent.click(screen.getByRole('checkbox', {name: 'Label b'}));

		await waitFor(() =>
			expect(screen.queryByText(/item-selected/)).not.toBeInTheDocument()
		);
	});

	it('has no accessibility violations', async () => {
		const {container} = await renderTreePickerPanel();

		await checkAccessibility({
			bestPractices: true,
			context: {

				// TODO Drop exclude once ClayTreeView names its expander buttons and only owns rendered groups

				exclude: ['.component-expander', '[aria-owns]'],
				include: [container],
			},
		});
	});
});
