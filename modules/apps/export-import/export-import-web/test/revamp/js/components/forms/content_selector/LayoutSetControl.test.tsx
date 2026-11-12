/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {DateModifiedRange} from '@liferay/layout-js-components-web';

// eslint-disable-next-line @liferay/portal/no-cross-module-deep-import
import {checkAccessibility} from '@liferay/layout-js-components-web/test/__lib__/index';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import '@testing-library/jest-dom';

import LayoutSetControl from '../../../../../../src/main/resources/META-INF/resources/revamp/js/components/forms/content_selector/LayoutSetControl';
import {DateFilter} from '../../../../../../src/main/resources/META-INF/resources/revamp/js/types/exportImportProcess';
import {PortletDataHandlerSelection} from '../../../../../../src/main/resources/META-INF/resources/revamp/js/utils/contentSelection';

const mockPageTreePickerModal = jest.fn((_props: unknown) => null);

jest.mock('@liferay/layout-js-components-web', () => ({
	PageTreePickerModal: (props: unknown) => mockPageTreePickerModal(props),
}));

function renderLayoutSetControl({
	dateFilter,
	onChange = jest.fn(),
	portletDataHandlerSelection = {all: true, privateLayout: false},
}: {
	dateFilter?: DateFilter;
	onChange?: jest.Mock;
	portletDataHandlerSelection?: PortletDataHandlerSelection;
} = {}) {
	return render(
		<LayoutSetControl
			label="Pages"
			onChange={onChange}
			pageTreeModalConfiguration={{
				dateFilter,
				groupId: 20121,
				pageSize: 20,
				privateLayoutsAvailable: false,
				siteExternalReferenceCode: 'site',
			}}
			portletDataHandlerSelection={portletDataHandlerSelection}
		/>
	);
}

describe('LayoutSetControl', () => {
	afterEach(() => {
		jest.restoreAllMocks();
	});

	it('shows the pages as partially selected when some pages are excluded', () => {
		renderLayoutSetControl({
			portletDataHandlerSelection: {
				all: true,
				excludedItems: ['excluded'],
				privateLayout: false,
			},
		});

		const checkbox = screen.getByRole('checkbox', {name: 'Pages'});

		expect(checkbox).not.toBeChecked();
		expect(checkbox).toBePartiallyChecked();
	});

	it('selects all pages when a partially selected checkbox is clicked', async () => {
		const user = userEvent.setup();

		const portletDataHandlerSelections: PortletDataHandlerSelection[] = [
			{all: true, excludedItems: ['excluded'], privateLayout: false},
			{items: ['item'], privateLayout: false},
		];

		for (const portletDataHandlerSelection of portletDataHandlerSelections) {
			const onChange = jest.fn();

			const {unmount} = renderLayoutSetControl({
				onChange,
				portletDataHandlerSelection,
			});

			await user.click(screen.getByRole('checkbox', {name: 'Pages'}));

			expect(onChange).toHaveBeenCalledWith({
				all: true,
				privateLayout: false,
			});

			unmount();
		}
	});

	it('limits the page picker to the pages modified in the date filter', async () => {
		jest.spyOn(Date, 'now').mockReturnValue(
			Date.parse('2026-11-12T12:00:00.000Z')
		);

		const user = userEvent.setup();

		const cases: Array<{
			dateFilter: DateFilter | undefined;
			dateModifiedRange: DateModifiedRange | undefined;
		}> = [
			{
				dateFilter: {
					endDate: '2026-11-10T00:00:00.000Z',
					startDate: '2026-11-01T00:00:00.000Z',
					type: 'DateRange',
				},
				dateModifiedRange: {
					endDate: '2026-11-10T00:00:00.000Z',
					startDate: '2026-11-01T00:00:00.000Z',
				},
			},
			{
				dateFilter: {type: 'FromLastPublishDate'},
				dateModifiedRange: undefined,
			},
			{
				dateFilter: {hours: 24, type: 'LastHours'},
				dateModifiedRange: {startDate: '2026-11-11T12:00:00.000Z'},
			},
			{dateFilter: undefined, dateModifiedRange: undefined},
		];

		for (const {dateFilter, dateModifiedRange} of cases) {
			mockPageTreePickerModal.mockClear();

			const {unmount} = renderLayoutSetControl({dateFilter});

			await user.click(screen.getByRole('button', {name: 'select-x'}));

			expect(mockPageTreePickerModal).toHaveBeenLastCalledWith(
				expect.objectContaining({dateModifiedRange})
			);

			unmount();
		}
	});

	it('has no accessibility violations', async () => {
		const {container} = renderLayoutSetControl();

		await checkAccessibility({bestPractices: true, context: container});
	});
});
