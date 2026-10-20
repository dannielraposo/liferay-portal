/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {
	LastRange,
	Range,
} from '../../../../src/main/resources/META-INF/resources/revamp/js/components/date_filter';
import {toDateFilterValues} from '../../../../src/main/resources/META-INF/resources/revamp/js/utils/toDateFilterValues';

describe('toDateFilterValues', () => {
	it('defaults to the all range', () => {
		expect(toDateFilterValues({name: 'Weekly'}, 'UTC')).toEqual({
			range: Range.All,
		});
	});

	it('maps the from last publish date range', () => {
		expect(
			toDateFilterValues(
				{dateFilter: {type: 'FromLastPublishDate'}, name: 'Weekly'},
				'UTC'
			)
		).toEqual({range: Range.FromLastPublishDate});
	});

	it('maps the last hours to the matching option', () => {
		expect(
			toDateFilterValues(
				{
					dateFilter: {hours: 24, type: 'LastHours'},
					name: 'Weekly',
				},
				'UTC'
			)
		).toEqual({last: LastRange.H24, range: Range.Last});

		expect(
			toDateFilterValues(
				{
					dateFilter: {hours: 168, type: 'LastHours'},
					name: 'Weekly',
				},
				'UTC'
			)
		).toEqual({last: LastRange.D7, range: Range.Last});
	});

	it('maps unmapped last hours to the closest option', () => {
		expect(
			toDateFilterValues(
				{
					dateFilter: {hours: 11, type: 'LastHours'},
					name: 'Weekly',
				},
				'UTC'
			)
		).toEqual({last: LastRange.H12, range: Range.Last});

		expect(
			toDateFilterValues(
				{
					dateFilter: {hours: 300, type: 'LastHours'},
					name: 'Weekly',
				},
				'UTC'
			)
		).toEqual({last: LastRange.D7, range: Range.Last});
	});

	it('falls back to the all range for unusable last hours', () => {
		expect(
			toDateFilterValues(
				{
					dateFilter: {hours: 0, type: 'LastHours'},
					name: 'Weekly',
				},
				'UTC'
			)
		).toEqual({range: Range.All});
	});

	it('rebuilds the date range in the given time zone', () => {
		expect(
			toDateFilterValues(
				{
					dateFilter: {
						endDate: '2026-10-20T09:30:00Z',
						startDate: '2026-08-22T13:05:00Z',
						type: 'DateRange',
					},
					name: 'Weekly',
				},
				'Europe/Madrid'
			)
		).toEqual({
			endDate: '2026-10-20 11:30',
			range: Range.DateRange,
			startDate: '2026-08-22 15:05',
		});
	});

	it('leaves a missing bound of the date range empty', () => {
		expect(
			toDateFilterValues(
				{
					dateFilter: {
						endDate: '2026-10-20T09:30:00Z',
						type: 'DateRange',
					},
					name: 'Weekly',
				},
				'UTC'
			)
		).toEqual({
			endDate: '2026-10-20 09:30',
			range: Range.DateRange,
			startDate: '',
		});
	});

	it('ignores an unreadable date rather than building a broken date', () => {
		expect(
			toDateFilterValues(
				{
					dateFilter: {
						startDate: 'not-a-date',
						type: 'DateRange',
					},
					name: 'Weekly',
				},
				'UTC'
			)
		).toEqual({
			endDate: '',
			range: Range.DateRange,
			startDate: '',
		});
	});
});
