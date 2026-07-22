/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

// eslint-disable-next-line @liferay/portal/no-cross-module-deep-import
import {checkAccessibility} from '@liferay/layout-js-components-web/test/__lib__/index';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import '@testing-library/jest-dom';

import PublishScheduler from '../../../../../../../src/main/resources/META-INF/resources/revamp/js/pages/publish/components/scheduler/PublishScheduler';
import {
	IntervalUnit,
	ScheduleValues,
	getInitialScheduleValues,
} from '../../../../../../../src/main/resources/META-INF/resources/revamp/js/pages/publish/components/scheduler/types';

function renderPublishScheduler(
	partialScheduleValues: Partial<ScheduleValues>,
	onChange: (scheduleValues: ScheduleValues) => void = jest.fn()
) {
	return render(
		<PublishScheduler
			onChange={onChange}
			timeZones={[
				{label: '(UTC) Coordinated Universal Time', value: 'UTC'},
			]}
			value={{
				...getInitialScheduleValues('UTC'),
				...partialScheduleValues,
			}}
		/>
	);
}

describe('PublishScheduler', () => {
	it('shows the summary once the start date is set', () => {
		renderPublishScheduler({
			enabled: true,
			startDateTime: '2026-08-22 09:30',
		});

		expect(
			screen.getByText('publishes-once-on-x-at-x-and-does-not-repeat')
		).toBeInTheDocument();
	});

	it('hides the summary while there is no start date', () => {
		renderPublishScheduler({enabled: true});

		expect(
			screen.queryByText('publishes-once-on-x-at-x-and-does-not-repeat')
		).not.toBeInTheDocument();
	});

	it('shows the weekday buttons for a weekly repetition', async () => {
		const onChange = jest.fn();

		renderPublishScheduler(
			{enabled: true, unit: IntervalUnit.Week},
			onChange
		);

		expect(screen.getByRole('button', {name: 'mon'})).toHaveAttribute(
			'aria-pressed',
			'true'
		);
		expect(screen.getByRole('button', {name: 'thu'})).toHaveAttribute(
			'aria-pressed',
			'false'
		);

		await userEvent.click(screen.getByRole('button', {name: 'thu'}));

		expect(onChange).toHaveBeenCalledWith(
			expect.objectContaining({weekDays: [2, 5]})
		);
	});

	it('resets the interval when the repetition unit changes', async () => {
		const onChange = jest.fn();

		renderPublishScheduler(
			{enabled: true, interval: 10, unit: IntervalUnit.Day},
			onChange
		);

		await userEvent.selectOptions(
			screen.getByRole('combobox', {name: 'repeat'}),
			IntervalUnit.Month
		);

		expect(onChange).toHaveBeenCalledWith(
			expect.objectContaining({interval: 1, unit: IntervalUnit.Month})
		);
	});

	it('has no accessibility violations', async () => {
		const {container} = renderPublishScheduler({
			enabled: true,
			startDateTime: '2026-08-22 09:30',
		});

		await checkAccessibility({context: container});
	});
});
