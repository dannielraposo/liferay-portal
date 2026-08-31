/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import '@testing-library/jest-dom';

import TreePickerPanel from '../../../src/main/resources/META-INF/resources/js/components/tree_picker/TreePickerPanel';
import {
	TreePickerDataSource,
	TreePickerItem,
	TreePickerSelectionEntry,
} from '../../../src/main/resources/META-INF/resources/js/components/tree_picker/types';
import checkAccessibility from '../../__lib__/checkAccessibility';

const PAGE_SIZE = 2;

function expandItem(label: string) {
	const treeItem = screen
		.getByText(label)
		.closest('[role="treeitem"]') as HTMLElement;

	fireEvent.click(
		treeItem.querySelector('.component-expander') as HTMLElement
	);
}

function createItem(
	id: string,
	hasChildren: boolean = false
): TreePickerItem<string> {
	return {hasChildren, id, label: `Label ${id}`, payload: id};
}

function createDataSource(
	childrenByParentId: Record<string, Array<TreePickerItem<string>>>
): TreePickerDataSource<string> {
	return {
		getChildren: (parentTreePickerItem, page) => {
			const items =
				childrenByParentId[parentTreePickerItem?.id ?? 'root'] ?? [];

			return Promise.resolve({
				items: items.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
				totalCount: items.length,
			});
		},
		search: (query, page) => {
			const items = Object.values(childrenByParentId)
				.flat()
				.filter((item) =>
					item.label.toLowerCase().includes(query.toLowerCase())
				);

			return Promise.resolve({
				items: items.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
				totalCount: items.length,
			});
		},
	};
}

function createDefaultChildrenByParentId() {
	return {
		a: [createItem('a1'), createItem('a2')],
		root: [createItem('a', true), createItem('b')],
	};
}

async function renderTreePicker({
	childrenByParentId = createDefaultChildrenByParentId(),
	onSelectionChange = () => {},
	...props
}: {
	childrenByParentId?: Record<string, Array<TreePickerItem<string>>>;
	onSelectionChange?: (
		entries: Array<TreePickerSelectionEntry<string>>
	) => void;
} & Partial<React.ComponentProps<typeof TreePickerPanel<string>>> = {}) {
	const result = render(
		<TreePickerPanel
			dataSource={createDataSource(childrenByParentId)}
			onSelectionChange={(entries) => onSelectionChange(entries)}
			{...props}
		/>
	);

	await screen.findByText('Label a');

	return result;
}

describe('TreePicker', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('renders the root items', async () => {
		await renderTreePicker();

		expect(screen.getByText('Label a')).toBeInTheDocument();
		expect(screen.getByText('Label b')).toBeInTheDocument();
	});

	it('loads the children when a node is expanded', async () => {
		await renderTreePicker();

		expandItem('Label a');

		expect(await screen.findByText('Label a1')).toBeInTheDocument();
		expect(screen.getByText('Label a2')).toBeInTheDocument();
	});

	it('emits a single entry without descendants on a plain selection', async () => {
		const onSelectionChange = jest.fn();

		await renderTreePicker({onSelectionChange});

		await userEvent.click(screen.getByRole('checkbox', {name: 'Label b'}));

		await waitFor(() =>
			expect(onSelectionChange).toHaveBeenLastCalledWith([
				{
					excluded: false,
					includeDescendants: false,
					item: createItem('b'),
				},
			])
		);
	});

	it('checks the lazily loaded children of a shift selected parent', async () => {
		await renderTreePicker();

		fireEvent.click(screen.getByRole('checkbox', {name: 'Label a'}), {
			shiftKey: true,
		});

		expandItem('Label a');

		await screen.findByText('Label a1');

		expect(screen.getByRole('checkbox', {name: 'Label a1'})).toBeChecked();
		expect(screen.getByRole('checkbox', {name: 'Label a2'})).toBeChecked();
	});

	it('selects the loaded children with a shift selection', async () => {
		const onSelectionChange = jest.fn();

		await renderTreePicker({onSelectionChange});

		expandItem('Label a');

		await screen.findByText('Label a1');

		fireEvent.click(screen.getByRole('checkbox', {name: 'Label a'}), {
			shiftKey: true,
		});

		await waitFor(() =>
			expect(
				screen.getByRole('checkbox', {name: 'Label a1'})
			).toBeChecked()
		);

		expect(screen.getByRole('checkbox', {name: 'Label a2'})).toBeChecked();

		expect(onSelectionChange).toHaveBeenLastCalledWith([
			{
				excluded: false,
				includeDescendants: true,
				item: expect.objectContaining({id: 'a'}),
			},
		]);
	});

	it('marks a collapsed parent as including its descendants', async () => {
		const onSelectionChange = jest.fn();

		await renderTreePicker({onSelectionChange});

		fireEvent.click(screen.getByRole('checkbox', {name: 'Label a'}), {
			shiftKey: true,
		});

		await waitFor(() =>
			expect(onSelectionChange).toHaveBeenLastCalledWith([
				{
					excluded: false,
					includeDescendants: true,
					item: expect.objectContaining({id: 'a'}),
				},
			])
		);
	});

	it('keeps the children selected when a shift selected parent is deselected', async () => {
		const onSelectionChange = jest.fn();

		await renderTreePicker({onSelectionChange});

		expandItem('Label a');

		await screen.findByText('Label a1');

		fireEvent.click(screen.getByRole('checkbox', {name: 'Label a'}), {
			shiftKey: true,
		});

		await waitFor(() =>
			expect(
				screen.getByRole('checkbox', {name: 'Label a1'})
			).toBeChecked()
		);

		await userEvent.click(screen.getByRole('checkbox', {name: 'Label a'}));

		await waitFor(() =>
			expect(
				screen.getByRole('checkbox', {name: 'Label a'})
			).not.toBeChecked()
		);

		expect(screen.getByRole('checkbox', {name: 'Label a1'})).toBeChecked();
		expect(screen.getByRole('checkbox', {name: 'Label a2'})).toBeChecked();

		expect(onSelectionChange).toHaveBeenLastCalledWith([
			{
				excluded: false,
				includeDescendants: true,
				item: expect.objectContaining({id: 'a'}),
			},
			{
				excluded: true,
				includeDescendants: false,
				item: expect.objectContaining({id: 'a'}),
			},
		]);
	});

	it('excludes a deselected child while its parent subtree stays selected', async () => {
		const onSelectionChange = jest.fn();

		await renderTreePicker({onSelectionChange});

		expandItem('Label a');

		await screen.findByText('Label a1');

		fireEvent.click(screen.getByRole('checkbox', {name: 'Label a'}), {
			shiftKey: true,
		});

		await waitFor(() =>
			expect(
				screen.getByRole('checkbox', {name: 'Label a1'})
			).toBeChecked()
		);

		await userEvent.click(screen.getByRole('checkbox', {name: 'Label a1'}));

		await waitFor(() =>
			expect(
				screen.getByRole('checkbox', {name: 'Label a1'})
			).not.toBeChecked()
		);

		expect(screen.getByRole('checkbox', {name: 'Label a'})).toBeChecked();
		expect(screen.getByRole('checkbox', {name: 'Label a2'})).toBeChecked();

		expect(onSelectionChange).toHaveBeenLastCalledWith([
			{
				excluded: false,
				includeDescendants: true,
				item: expect.objectContaining({id: 'a'}),
			},
			{
				excluded: true,
				includeDescendants: false,
				item: expect.objectContaining({id: 'a1'}),
			},
		]);
	});

	it('selects one item at a time in the single selection mode', async () => {
		const onItemSelect = jest.fn();
		const onSelectionChange = jest.fn();

		await renderTreePicker({
			onItemSelect,
			onSelectionChange,
			selectionMode: 'single',
		});

		expect(screen.queryByRole('checkbox')).not.toBeInTheDocument();

		await userEvent.click(screen.getByText('Label a'));

		expect(onItemSelect).toHaveBeenLastCalledWith(
			expect.objectContaining({id: 'a'})
		);

		await userEvent.click(screen.getByText('Label b'));

		expect(onItemSelect).toHaveBeenLastCalledWith(
			expect.objectContaining({id: 'b'})
		);

		await waitFor(() =>
			expect(onSelectionChange).toHaveBeenLastCalledWith([
				{
					excluded: false,
					includeDescendants: false,
					item: expect.objectContaining({id: 'b'}),
				},
			])
		);
	});

	it('renders a disabled item as disabled', async () => {
		const childrenByParentId = createDefaultChildrenByParentId();

		childrenByParentId.root = [
			createItem('a', true),
			{...createItem('c'), disabled: true},
		];

		await renderTreePicker({childrenByParentId});

		expect(
			screen.getByText('Label c').closest('[role="treeitem"]')
		).toHaveClass('disabled');

		expect(
			screen.queryByRole('checkbox', {name: 'Label c'})
		).not.toBeInTheDocument();
	});

	it('renders the badge and the title of an item', async () => {
		const badgedItem = {
			...createItem('c'),
			badge: {label: 'Restricted Page', symbol: 'password-policies'},
			title: '/c',
		};

		const childrenByParentId = createDefaultChildrenByParentId();

		childrenByParentId.root = [createItem('a', true), badgedItem];

		await renderTreePicker({childrenByParentId});

		expect(await screen.findByTitle('/c')).toHaveTextContent('Label c');

		expect(screen.getByTitle('Restricted Page')).toBeInTheDocument();
	});

	it('notifies when the last item is deselected', async () => {
		const onSelectionChange = jest.fn();

		await renderTreePicker({onSelectionChange});

		await userEvent.click(screen.getByRole('checkbox', {name: 'Label b'}));

		await userEvent.click(screen.getByRole('checkbox', {name: 'Label b'}));

		await waitFor(() =>
			expect(onSelectionChange).toHaveBeenLastCalledWith([])
		);
	});

	it('loads more children on demand', async () => {
		await renderTreePicker({
			childrenByParentId: {
				a: [createItem('a1'), createItem('a2'), createItem('a3')],
				root: [createItem('a', true)],
			},
		});

		expandItem('Label a');

		await screen.findByText('Label a2');

		expect(screen.queryByText('Label a3')).not.toBeInTheDocument();

		await userEvent.click(
			screen.getByRole('button', {name: 'load-more-results'})
		);

		expect(await screen.findByText('Label a3')).toBeInTheDocument();

		expect(
			screen.queryByRole('button', {name: 'load-more-results'})
		).not.toBeInTheDocument();
	});

	it('loads more root items on demand', async () => {
		await renderTreePicker({
			childrenByParentId: {
				root: [createItem('a'), createItem('b'), createItem('c')],
			},
		});

		expect(screen.queryByText('Label c')).not.toBeInTheDocument();

		await userEvent.click(
			screen.getByRole('button', {name: 'load-more-results'})
		);

		expect(await screen.findByText('Label c')).toBeInTheDocument();
	});

	it('has no accessibility violations', async () => {
		const {container} = await renderTreePicker();

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
