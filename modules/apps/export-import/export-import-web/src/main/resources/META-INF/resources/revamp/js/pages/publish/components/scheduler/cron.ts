/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {
	IntervalUnit,
	LAST_WEEKDAY_ORDINAL,
	RepeatType,
	ScheduleValues,
} from './types';

const DAY_OF_WEEK_ABBREVIATIONS: Record<number, string> = {
	1: 'SUN',
	2: 'MON',
	3: 'TUE',
	4: 'WED',
	5: 'THU',
	6: 'FRI',
	7: 'SAT',
};

type DateTimeParts = {
	day: number;
	hour: number;
	minute: number;
	month: number;
	year: number;
};

export function toDateTimeParts(dateTime: string): DateTimeParts {
	const [date, time = '00:00'] = dateTime.split(' ');

	const [year, month, day] = date.split('-').map(Number);
	const [hour, minute] = time.split(':').map(Number);

	return {day, hour, minute, month, year};
}

export function toZonedDate(dateTime: string, timeZoneId: string): Date {
	const wallClockDate = new Date(`${dateTime.replace(' ', 'T')}:00Z`);

	const timeZoneDate = new Date(
		wallClockDate.toLocaleString('en-US', {timeZone: timeZoneId})
	);
	const utcDate = new Date(
		wallClockDate.toLocaleString('en-US', {timeZone: 'UTC'})
	);

	return new Date(
		wallClockDate.getTime() - (timeZoneDate.getTime() - utcDate.getTime())
	);
}

export function toWallClockDateTime(
	isoDateTime: string,
	timeZoneId: string
): string {
	const dateTimeFormatParts = new Intl.DateTimeFormat('en-CA', {
		day: '2-digit',
		hour: '2-digit',
		hourCycle: 'h23',
		minute: '2-digit',
		month: '2-digit',
		timeZone: timeZoneId,
		year: 'numeric',
	} as Intl.DateTimeFormatOptions).formatToParts(new Date(isoDateTime));

	const getPart = (type: string) =>
		dateTimeFormatParts.find(
			(dateTimeFormatPart) => dateTimeFormatPart.type === type
		)?.value ?? '';

	return `${getPart('year')}-${getPart('month')}-${getPart(
		'day'
	)} ${getPart('hour')}:${getPart('minute')}`;
}

function toDayOfWeekExpression(scheduleValues: ScheduleValues): string {
	const dayOfWeekAbbreviation =
		DAY_OF_WEEK_ABBREVIATIONS[scheduleValues.weekday];

	if (scheduleValues.weekdayOrdinal === LAST_WEEKDAY_ORDINAL) {
		return `${dayOfWeekAbbreviation}L`;
	}

	return `${dayOfWeekAbbreviation}#${scheduleValues.weekdayOrdinal}`;
}

function fromDayOfWeekExpression(
	dayOfWeekExpression: string
): Partial<ScheduleValues> {
	let dayOfWeekAbbreviation = dayOfWeekExpression;
	let weekdayOrdinal = '1';

	if (dayOfWeekExpression.includes('#')) {
		[dayOfWeekAbbreviation, weekdayOrdinal] =
			dayOfWeekExpression.split('#');
	}
	else if (dayOfWeekExpression.endsWith('L')) {
		dayOfWeekAbbreviation = dayOfWeekExpression.slice(0, -1);
		weekdayOrdinal = LAST_WEEKDAY_ORDINAL;
	}

	return {
		repeatType: RepeatType.DayOfWeek,
		weekday: toWeekday(dayOfWeekAbbreviation),
		weekdayOrdinal,
	};
}

function toWeekday(dayOfWeekAbbreviation: string): number {
	const entry = Object.entries(DAY_OF_WEEK_ABBREVIATIONS).find(
		([, abbreviation]) => abbreviation === dayOfWeekAbbreviation
	);

	return entry ? Number(entry[0]) : 2;
}

export function fromCronExpression(
	cronExpression: string
): Partial<ScheduleValues> | null {
	const parts = cronExpression.trim().split(/\s+/);

	if (parts.length < 6) {
		return null;
	}

	const [, , , dayOfMonth, month, dayOfWeek, year = '*'] = parts;

	if (dayOfWeek !== '?' && dayOfWeek !== '*') {
		if (dayOfWeek.includes('#') || dayOfWeek.endsWith('L')) {
			if (month.includes('/')) {
				return {
					...fromDayOfWeekExpression(dayOfWeek),
					interval: Number(month.split('/')[1]) || 1,
					unit: IntervalUnit.Month,
				};
			}

			return {
				...fromDayOfWeekExpression(dayOfWeek),
				interval: Number(year.split('/')[1]) || 1,
				unit: IntervalUnit.Year,
			};
		}

		const [dayOfWeekList, interval = '1'] = dayOfWeek.split('/');

		return {
			interval: Number(interval) || 1,
			unit: IntervalUnit.Week,
			weekDays: dayOfWeekList.split(',').map(toWeekday),
		};
	}

	if (month === '*' && dayOfMonth.includes('/')) {
		return {
			interval: Number(dayOfMonth.split('/')[1]) || 1,
			unit: IntervalUnit.Day,
		};
	}

	if (month.includes('/')) {
		return {
			interval: Number(month.split('/')[1]) || 1,
			monthDay: Number(dayOfMonth) || 1,
			repeatType: RepeatType.DayOfMonth,
			unit: IntervalUnit.Month,
		};
	}

	if (year.includes('/')) {
		return {
			interval: Number(year.split('/')[1]) || 1,
			month: (Number(month) || 1) - 1,
			monthDay: Number(dayOfMonth) || 1,
			repeatType: RepeatType.DayOfMonth,
			unit: IntervalUnit.Year,
		};
	}

	return {unit: IntervalUnit.Never};
}

export function toCronExpression(scheduleValues: ScheduleValues): string {
	const {day, hour, minute, month, year} = toDateTimeParts(
		scheduleValues.startDateTime
	);

	if (scheduleValues.unit === IntervalUnit.Never) {
		return `0 ${minute} ${hour} ${day} ${month} ? ${year}`;
	}

	const interval = scheduleValues.interval > 0 ? scheduleValues.interval : 1;

	if (scheduleValues.unit === IntervalUnit.Week) {
		const days = scheduleValues.weekDays.length
			? scheduleValues.weekDays
			: [2];

		const dayOfWeek = days
			.map((weekDay) => DAY_OF_WEEK_ABBREVIATIONS[weekDay])
			.join(',');

		return `0 ${minute} ${hour} ? * ${dayOfWeek}/${interval} *`;
	}

	if (scheduleValues.unit === IntervalUnit.Month) {
		if (scheduleValues.repeatType === RepeatType.DayOfWeek) {
			return `0 ${minute} ${hour} ? 1/${interval} ${toDayOfWeekExpression(
				scheduleValues
			)} *`;
		}

		return `0 ${minute} ${hour} ${scheduleValues.monthDay} 1/${interval} ? *`;
	}

	if (scheduleValues.unit === IntervalUnit.Year) {
		if (scheduleValues.repeatType === RepeatType.DayOfWeek) {
			return `0 ${minute} ${hour} ? ${month} ${toDayOfWeekExpression(
				scheduleValues
			)} ${year}/${interval}`;
		}

		return `0 ${minute} ${hour} ${scheduleValues.monthDay} ${
			scheduleValues.month + 1
		} ? ${year}/${interval}`;
	}

	return `0 ${minute} ${hour} 1/${interval} * ? *`;
}
