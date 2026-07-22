/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {sub} from 'frontend-js-web';

import {toDateTimeParts} from './cron';
import {
	IntervalUnit,
	RepeatType,
	ScheduleValues,
	WEEKDAYS,
	WEEKDAY_ORDINAL_OPTIONS,
	getIntervalText,
	getWeekdayName,
} from './types';

function toLocalDate(dateTime: string): Date {
	const {day, hour, minute, month, year} = toDateTimeParts(dateTime);

	return new Date(year, month - 1, day, hour, minute);
}

function getMonthDayText(
	month: number,
	monthDay: number,
	locale: string
): string {
	const lastDayOfMonth = new Date(2026, month + 1, 0).getDate();

	return new Date(
		2026,
		month,
		Math.min(monthDay, lastDayOfMonth)
	).toLocaleDateString(locale, {day: 'numeric', month: 'long'});
}

function getWeekdayListText(weekDays: number[], locale: string): string {
	const weekdayNames = WEEKDAYS.filter(({value}) =>
		weekDays.includes(value)
	).map(({value}) => getWeekdayName(value, locale));

	// @ts-ignore

	if (typeof Intl.ListFormat === 'function') {

		// @ts-ignore

		return new Intl.ListFormat(locale, {
			style: 'long',
			type: 'conjunction',
		}).format(weekdayNames);
	}

	return weekdayNames.join(', ');
}

function getWeekdayOrdinalLabel(weekdayOrdinal: string): string {
	return (
		WEEKDAY_ORDINAL_OPTIONS.find(({value}) => value === weekdayOrdinal)
			?.label ?? weekdayOrdinal
	);
}

function getRepeatText(scheduleValues: ScheduleValues, locale: string): string {
	const frequencyText = getIntervalText(
		scheduleValues.interval,
		scheduleValues.unit,
		locale
	);

	if (scheduleValues.unit === IntervalUnit.Day) {
		return sub(Liferay.Language.get('repeats-every-x'), frequencyText);
	}

	if (scheduleValues.unit === IntervalUnit.Week) {
		return sub(
			Liferay.Language.get('repeats-every-x-on-x'),
			frequencyText,
			getWeekdayListText(scheduleValues.weekDays, locale)
		);
	}

	if (scheduleValues.repeatType === RepeatType.DayOfWeek) {
		return sub(
			Liferay.Language.get('repeats-every-x-on-the-x'),
			frequencyText,
			`${getWeekdayOrdinalLabel(
				scheduleValues.weekdayOrdinal
			)} ${getWeekdayName(scheduleValues.weekday, locale)}`
		);
	}

	if (scheduleValues.unit === IntervalUnit.Month) {
		return sub(
			Liferay.Language.get('repeats-every-x-on-x'),
			frequencyText,
			sub(Liferay.Language.get('day-x'), String(scheduleValues.monthDay))
		);
	}

	return sub(
		Liferay.Language.get('repeats-every-x-on-x'),
		frequencyText,
		getMonthDayText(scheduleValues.month, scheduleValues.monthDay, locale)
	);
}

export function getScheduleSummary(
	scheduleValues: ScheduleValues
): string | null {
	if (!scheduleValues.enabled || !scheduleValues.startDateTime) {
		return null;
	}

	const locale = Liferay.ThemeDisplay.getBCP47LanguageId();

	const startDate = toLocalDate(scheduleValues.startDateTime);

	const startDateText = startDate.toLocaleDateString(locale);
	const timeText = startDate.toLocaleTimeString(locale, {
		hour: 'numeric',
		minute: '2-digit',
	});

	if (scheduleValues.unit === IntervalUnit.Never) {
		return sub(
			Liferay.Language.get(
				'publishes-once-on-x-at-x-and-does-not-repeat'
			),
			startDateText,
			timeText
		);
	}

	const endDate =
		!scheduleValues.neverEnd && scheduleValues.endDateTime
			? toLocalDate(scheduleValues.endDateTime)
			: null;

	const startsText = endDate
		? sub(
				Liferay.Language.get('starts-x-at-x-and-ends-x-at-x'),
				startDateText,
				timeText,
				endDate.toLocaleDateString(locale),
				endDate.toLocaleTimeString(locale, {
					hour: 'numeric',
					minute: '2-digit',
				})
			)
		: sub(
				Liferay.Language.get('starts-x-at-x-and-never-ends'),
				startDateText,
				timeText
			);

	return `${getRepeatText(scheduleValues, locale)} ${startsText}`;
}
