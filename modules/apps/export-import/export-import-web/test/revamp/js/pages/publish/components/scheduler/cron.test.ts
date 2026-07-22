/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {
	fromCronExpression,
	toCronExpression,
	toWallClockDateTime,
	toZonedDate,
} from '../../../../../../../src/main/resources/META-INF/resources/revamp/js/pages/publish/components/scheduler/cron';
import {
	IntervalUnit,
	LAST_WEEKDAY_ORDINAL,
	RepeatType,
	ScheduleValues,
	getInitialScheduleValues,
} from '../../../../../../../src/main/resources/META-INF/resources/revamp/js/pages/publish/components/scheduler/types';

function buildScheduleValues(
	partialScheduleValues: Partial<ScheduleValues>
): ScheduleValues {
	return {
		...getInitialScheduleValues('UTC'),
		enabled: true,
		startDateTime: '2026-07-20 15:30',
		...partialScheduleValues,
	};
}

describe('toCronExpression', () => {
	it('produces a one-time cron from the start date parts', () => {
		expect(
			toCronExpression(buildScheduleValues({unit: IntervalUnit.Never}))
		).toBe('0 30 15 20 7 ? 2026');
	});

	it('produces a daily interval cron', () => {
		expect(
			toCronExpression(
				buildScheduleValues({interval: 2, unit: IntervalUnit.Day})
			)
		).toBe('0 30 15 1/2 * ? *');
	});

	it('produces a weekly cron with the selected days', () => {
		expect(
			toCronExpression(
				buildScheduleValues({
					unit: IntervalUnit.Week,
					weekDays: [2, 4],
				})
			)
		).toBe('0 30 15 ? * MON,WED/1 *');
	});

	it('produces a monthly cron with the selected day of the month', () => {
		expect(
			toCronExpression(
				buildScheduleValues({
					interval: 3,
					monthDay: 15,
					unit: IntervalUnit.Month,
				})
			)
		).toBe('0 30 15 15 1/3 ? *');
	});

	it('produces a monthly cron with the selected ordinal weekday', () => {
		expect(
			toCronExpression(
				buildScheduleValues({
					repeatType: RepeatType.DayOfWeek,
					unit: IntervalUnit.Month,
					weekday: 5,
					weekdayOrdinal: '4',
				})
			)
		).toBe('0 30 15 ? 1/1 THU#4 *');
	});

	it('produces a monthly cron with the last weekday of the month', () => {
		expect(
			toCronExpression(
				buildScheduleValues({
					repeatType: RepeatType.DayOfWeek,
					unit: IntervalUnit.Month,
					weekday: 6,
					weekdayOrdinal: LAST_WEEKDAY_ORDINAL,
				})
			)
		).toBe('0 30 15 ? 1/1 FRIL *');
	});

	it('produces a yearly cron with the selected month and day', () => {
		expect(
			toCronExpression(
				buildScheduleValues({
					month: 6,
					monthDay: 4,
					unit: IntervalUnit.Year,
				})
			)
		).toBe('0 30 15 4 7 ? 2026/1');
	});

	it('produces a yearly cron with the selected ordinal weekday on the start month', () => {
		expect(
			toCronExpression(
				buildScheduleValues({
					repeatType: RepeatType.DayOfWeek,
					unit: IntervalUnit.Year,
					weekday: 2,
					weekdayOrdinal: '1',
				})
			)
		).toBe('0 30 15 ? 7 MON#1 2026/1');
	});

	it('keeps the picked wall-clock time regardless of the time zone', () => {
		const scheduleValues = buildScheduleValues({
			unit: IntervalUnit.Never,
		});

		expect(
			toCronExpression({...scheduleValues, timeZoneId: 'Asia/Tokyo'})
		).toBe(
			toCronExpression({
				...scheduleValues,
				timeZoneId: 'America/New_York',
			})
		);
	});
});

describe('fromCronExpression', () => {
	it('parses a one-time cron', () => {
		expect(fromCronExpression('0 30 15 20 7 ? 2026')).toEqual({
			unit: IntervalUnit.Never,
		});
	});

	it('parses a daily interval cron', () => {
		expect(fromCronExpression('0 30 15 1/2 * ? *')).toEqual({
			interval: 2,
			unit: IntervalUnit.Day,
		});
	});

	it('parses a weekly cron with the selected days', () => {
		expect(fromCronExpression('0 30 15 ? * MON,WED/1 *')).toEqual({
			interval: 1,
			unit: IntervalUnit.Week,
			weekDays: [2, 4],
		});
	});

	it('parses a monthly cron with the selected day of the month', () => {
		expect(fromCronExpression('0 30 15 15 1/3 ? *')).toEqual({
			interval: 3,
			monthDay: 15,
			repeatType: RepeatType.DayOfMonth,
			unit: IntervalUnit.Month,
		});
	});

	it('parses a monthly cron with the selected ordinal weekday', () => {
		expect(fromCronExpression('0 30 15 ? 1/1 THU#4 *')).toEqual({
			interval: 1,
			repeatType: RepeatType.DayOfWeek,
			unit: IntervalUnit.Month,
			weekday: 5,
			weekdayOrdinal: '4',
		});

		expect(fromCronExpression('0 30 15 ? 1/1 FRIL *')).toEqual({
			interval: 1,
			repeatType: RepeatType.DayOfWeek,
			unit: IntervalUnit.Month,
			weekday: 6,
			weekdayOrdinal: LAST_WEEKDAY_ORDINAL,
		});
	});

	it('parses a yearly cron with the selected month and day', () => {
		expect(fromCronExpression('0 30 15 4 7 ? 2026/1')).toEqual({
			interval: 1,
			month: 6,
			monthDay: 4,
			repeatType: RepeatType.DayOfMonth,
			unit: IntervalUnit.Year,
		});
	});

	it('parses a yearly cron with the selected ordinal weekday', () => {
		expect(fromCronExpression('0 30 15 ? 7 MON#1 2026/1')).toEqual({
			interval: 1,
			repeatType: RepeatType.DayOfWeek,
			unit: IntervalUnit.Year,
			weekday: 2,
			weekdayOrdinal: '1',
		});
	});

	it('returns null for an unparseable expression', () => {
		expect(fromCronExpression('not a cron')).toBeNull();
	});
});

describe('toWallClockDateTime', () => {
	it('formats the instant as a wall-clock date time in the time zone', () => {
		expect(
			toWallClockDateTime('2026-07-20T19:30:00.000Z', 'America/New_York')
		).toBe('2026-07-20 15:30');

		expect(toWallClockDateTime('2026-07-20T19:30:00.000Z', 'UTC')).toBe(
			'2026-07-20 19:30'
		);
	});
});

describe('toZonedDate', () => {
	it('interprets the wall-clock time in the given time zone', () => {
		expect(
			toZonedDate('2026-07-20 15:30', 'America/New_York').toISOString()
		).toBe('2026-07-20T19:30:00.000Z');

		expect(
			toZonedDate('2026-07-20 15:30', 'Asia/Tokyo').toISOString()
		).toBe('2026-07-20T06:30:00.000Z');

		expect(toZonedDate('2026-07-20 15:30', 'UTC').toISOString()).toBe(
			'2026-07-20T15:30:00.000Z'
		);
	});
});
