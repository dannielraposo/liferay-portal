/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Formik} from 'formik';
import React from 'react';

import '@testing-library/jest-dom';

import DataSelection from '../../../../src/main/resources/META-INF/resources/revamp/js/components/DataSelection';
import {
	LastRange,
	Range,
} from '../../../../src/main/resources/META-INF/resources/revamp/js/components/date_filter';
import {PORTLET_DATA_KEY_LAYOUT_SET_LAYOUTS} from '../../../../src/main/resources/META-INF/resources/revamp/js/utils/contentSelection';

const SITE_BUILDER_SECTION_KEY = 'category.site_administration.build';

describe('DataSelection', () => {
	it('selects all the pages again when the date filter changes', async () => {
		const onApplyFilter = jest.fn();
		const user = userEvent.setup();

		render(
			<Formik
				initialValues={{
					contentSelection: {
						[SITE_BUILDER_SECTION_KEY]: {
							LOOK_AND_FEEL: true,
							[PORTLET_DATA_KEY_LAYOUT_SET_LAYOUTS]: {
								all: true,
								excludedItems: ['privacy-policy'],
								privateLayout: false,
							},
						},
					},
					dateFilterValues: {range: Range.All},
				}}
				onSubmit={jest.fn()}
			>
				<DataSelection
					deletionsDescription="deletions-description"
					deletionsLabel="deletions-label"
					onApplyFilter={onApplyFilter}
					pageTreeModalConfiguration={{
						groupId: 20121,
						pageSize: 20,
						siteExternalReferenceCode: 'site',
					}}
					permissionsDescription="permissions-description"
					permissionsLabel="permissions-label"
					portletDataHandlerSections={[
						{
							key: SITE_BUILDER_SECTION_KEY,
							label: 'Site Builder',
							portletDataHandlers: [
								{label: 'Look and Feel', name: 'LOOK_AND_FEEL'},
								{
									label: 'Static Pages',
									name: PORTLET_DATA_KEY_LAYOUT_SET_LAYOUTS,
								},
							],
						},
					]}
					process="export"
					subtitle="subtitle"
					timeZoneId="UTC"
				/>
			</Formik>
		);

		expect(
			screen.getByRole('checkbox', {name: 'Site Builder'})
		).toBePartiallyChecked();

		await user.selectOptions(
			screen.getByRole('combobox', {name: 'filter-content-by'}),
			Range.Last
		);
		await user.selectOptions(
			screen.getByRole('combobox', {name: 'modified-last'}),
			LastRange.H48
		);
		await user.click(screen.getByRole('button', {name: 'show-results'}));

		expect(onApplyFilter).toHaveBeenCalledWith({
			last: LastRange.H48,
			range: Range.Last,
		});
		expect(
			screen.getByRole('checkbox', {name: 'Site Builder'})
		).toBeChecked();
	});
});
