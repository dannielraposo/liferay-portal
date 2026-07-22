/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayAlert from '@clayui/alert';
import ClayButton from '@clayui/button';
import ClayForm, {ClayCheckbox} from '@clayui/form';
import ClayLayout from '@clayui/layout';
import {sub} from 'frontend-js-web';
import React from 'react';

import FieldDatePicker from '../../../../components/forms/FieldDatePicker';
import {FieldRadio} from '../../../../components/forms/FieldRadio';
import FieldSelectWithOption from '../../../../components/forms/FieldSelectWithOption';
import {getScheduleSummary} from './summary';
import {
	DATE_TIME_FORMAT,
	IntervalUnit,
	MAX_INTERVALS,
	MONTHS,
	REPEAT_OPTIONS,
	REPEAT_TYPE_OPTIONS,
	RepeatType,
	ScheduleValues,
	TimeZoneOption,
	WEEKDAYS,
	WEEKDAY_ORDINAL_OPTIONS,
	getIntervalText,
	getWeekdayName,
} from './types';

const MONTH_DAYS = Array.from({length: 31}, (_, index) => index + 1);

const DATE_TIME_PLACEHOLDER = `${DATE_TIME_FORMAT} HH:MM`.toUpperCase();

export default function PublishScheduler({
	onChange,
	timeZones,
	value,
}: {
	onChange: (scheduleValues: ScheduleValues) => void;
	timeZones: TimeZoneOption[];
	value: ScheduleValues;
}) {
	const locale = Liferay.ThemeDisplay.getBCP47LanguageId();

	const currentYear = new Date().getFullYear();

	const set = (partial: Partial<ScheduleValues>) =>
		onChange({...value, ...partial});

	const toggleIn = (list: number[], item: number) => {
		if (!list.includes(item)) {
			return [...list, item];
		}

		if (list.length === 1) {
			return list;
		}

		return list.filter((value) => value !== item);
	};

	const repeatsOnDayOfWeek = value.repeatType === RepeatType.DayOfWeek;

	const scheduleSummary = getScheduleSummary(value);

	const intervalOptions = Array.from(
		{length: MAX_INTERVALS[value.unit]},
		(_, index) => ({
			label: getIntervalText(index + 1, value.unit, locale),
			value: index + 1,
		})
	);

	const monthDayOptions = MONTH_DAYS.map((monthDay) => ({
		label: sub(Liferay.Language.get('day-x'), String(monthDay)),
		value: monthDay,
	}));

	const weekdayOptions = WEEKDAYS.map(({value: weekday}) => ({
		label: getWeekdayName(weekday, locale),
		value: weekday,
	}));

	const repeatEverySelect = (
		<FieldSelectWithOption
			label={Liferay.Language.get('repeat-every')}
			name="publishScheduleRepeatEvery"
			onChange={(event) => set({interval: Number(event.target.value)})}
			options={intervalOptions}
			value={String(value.interval)}
		/>
	);

	return (
		<ClayLayout.Sheet className="mt-4 option-group">
			<div className="mb-3 sheet-title">
				{Liferay.Language.get('when-to-publish')}
			</div>

			<FieldRadio
				checked={!value.enabled}
				description={Liferay.Language.get(
					'starts-as-soon-as-you-publish'
				)}
				label={Liferay.Language.get('publish-now')}
				name="whenToPublish"
				onChange={() => set({enabled: false})}
				value="now"
			/>

			<FieldRadio
				checked={value.enabled}
				description={Liferay.Language.get(
					'choose-a-start-date-time-and-an-optional-recurrence'
				)}
				label={Liferay.Language.get('schedule-for-later')}
				name="whenToPublish"
				onChange={() => set({enabled: true})}
				value="schedule"
			/>

			{value.enabled && (
				<div className="mt-4">
					<ClayLayout.Row>
						<ClayLayout.Col md={6} size={12}>
							<FieldDatePicker
								dateFormat={DATE_TIME_FORMAT}
								id="publishScheduleStartDateTime"
								label={Liferay.Language.get('start-date')}
								name="publishScheduleStartDateTime"
								onChange={(startDateTime) =>
									set({
										startDateTime: startDateTime as string,
									})
								}
								placeholder={DATE_TIME_PLACEHOLDER}
								time
								value={value.startDateTime}
								years={{
									end: currentYear + 10,
									start: currentYear,
								}}
							/>
						</ClayLayout.Col>

						<ClayLayout.Col md={6} size={12}>
							<FieldSelectWithOption
								label={Liferay.Language.get('time-zone')}
								name="publishScheduleTimeZoneId"
								onChange={(event) =>
									set({timeZoneId: event.target.value})
								}
								options={timeZones}
								value={value.timeZoneId}
							/>
						</ClayLayout.Col>
					</ClayLayout.Row>

					<ClayLayout.Row>
						<ClayLayout.Col md={6} size={12}>
							<FieldSelectWithOption
								label={Liferay.Language.get('repeat')}
								name="publishScheduleRepeat"
								onChange={(event) =>
									set({
										interval: 1,
										unit: event.target
											.value as IntervalUnit,
									})
								}
								options={REPEAT_OPTIONS}
								value={value.unit}
							/>
						</ClayLayout.Col>

						{(value.unit === IntervalUnit.Day ||
							value.unit === IntervalUnit.Week) && (
							<ClayLayout.Col md={6} size={12}>
								{repeatEverySelect}
							</ClayLayout.Col>
						)}

						{(value.unit === IntervalUnit.Month ||
							value.unit === IntervalUnit.Year) && (
							<ClayLayout.Col md={6} size={12}>
								<FieldSelectWithOption
									label={Liferay.Language.get('repeat-type')}
									name="publishScheduleRepeatType"
									onChange={(event) =>
										set({
											repeatType: event.target
												.value as RepeatType,
										})
									}
									options={REPEAT_TYPE_OPTIONS}
									value={value.repeatType}
								/>
							</ClayLayout.Col>
						)}
					</ClayLayout.Row>

					{value.unit === IntervalUnit.Week && (
						<ClayLayout.Row>
							<ClayLayout.Col md={6} size={12}>
								<ClayForm.Group>
									<label>
										{Liferay.Language.get('repeat-on')}
									</label>

									<ClayButton.Group className="d-flex">
										{WEEKDAYS.map((weekday) => {
											const selected =
												value.weekDays.includes(
													weekday.value
												);

											return (
												<ClayButton
													aria-pressed={selected}
													className="flex-grow-1"
													displayType={
														selected
															? 'primary'
															: 'secondary'
													}
													key={weekday.value}
													onClick={() =>
														set({
															weekDays: toggleIn(
																value.weekDays,
																weekday.value
															),
														})
													}
												>
													{weekday.label}
												</ClayButton>
											);
										})}
									</ClayButton.Group>
								</ClayForm.Group>
							</ClayLayout.Col>
						</ClayLayout.Row>
					)}

					{value.unit === IntervalUnit.Month &&
						!repeatsOnDayOfWeek && (
							<ClayLayout.Row>
								<ClayLayout.Col md={6} size={12}>
									<FieldSelectWithOption
										label={Liferay.Language.get(
											'repeat-on'
										)}
										name="publishScheduleRepeatOnMonthDay"
										onChange={(event) =>
											set({
												monthDay: Number(
													event.target.value
												),
											})
										}
										options={monthDayOptions}
										value={String(value.monthDay)}
									/>
								</ClayLayout.Col>

								<ClayLayout.Col md={6} size={12}>
									{repeatEverySelect}
								</ClayLayout.Col>
							</ClayLayout.Row>
						)}

					{value.unit === IntervalUnit.Year &&
						!repeatsOnDayOfWeek && (
							<ClayLayout.Row>
								<ClayLayout.Col md={6} size={12}>
									<FieldSelectWithOption
										label={Liferay.Language.get(
											'repeat-on-day'
										)}
										name="publishScheduleRepeatOnDay"
										onChange={(event) =>
											set({
												monthDay: Number(
													event.target.value
												),
											})
										}
										options={monthDayOptions}
										value={String(value.monthDay)}
									/>
								</ClayLayout.Col>

								<ClayLayout.Col md={6} size={12}>
									<FieldSelectWithOption
										label={Liferay.Language.get(
											'repeat-on-month'
										)}
										name="publishScheduleRepeatOnMonth"
										onChange={(event) =>
											set({
												month: Number(
													event.target.value
												),
											})
										}
										options={MONTHS}
										value={String(value.month)}
									/>
								</ClayLayout.Col>
							</ClayLayout.Row>
						)}

					{(value.unit === IntervalUnit.Month ||
						value.unit === IntervalUnit.Year) &&
						repeatsOnDayOfWeek && (
							<ClayLayout.Row>
								<ClayLayout.Col md={6} size={12}>
									<FieldSelectWithOption
										label={Liferay.Language.get(
											'repeat-on'
										)}
										name="publishScheduleWeekdayOrdinal"
										onChange={(event) =>
											set({
												weekdayOrdinal:
													event.target.value,
											})
										}
										options={WEEKDAY_ORDINAL_OPTIONS}
										value={value.weekdayOrdinal}
									/>
								</ClayLayout.Col>

								<ClayLayout.Col md={6} size={12}>
									<FieldSelectWithOption
										label={Liferay.Language.get('weekday')}
										name="publishScheduleWeekday"
										onChange={(event) =>
											set({
												weekday: Number(
													event.target.value
												),
											})
										}
										options={weekdayOptions}
										value={String(value.weekday)}
									/>
								</ClayLayout.Col>
							</ClayLayout.Row>
						)}

					{(value.unit === IntervalUnit.Year ||
						(value.unit === IntervalUnit.Month &&
							repeatsOnDayOfWeek)) && (
						<ClayLayout.Row>
							<ClayLayout.Col md={6} size={12}>
								{repeatEverySelect}
							</ClayLayout.Col>
						</ClayLayout.Row>
					)}

					<ClayLayout.Row>
						<ClayLayout.Col md={6} size={12}>
							<FieldDatePicker
								dateFormat={DATE_TIME_FORMAT}
								disabled={value.neverEnd}
								id="publishScheduleEndDateTime"
								label={Liferay.Language.get('end-date')}
								name="publishScheduleEndDateTime"
								onChange={(endDateTime) =>
									set({
										endDateTime: endDateTime as string,
									})
								}
								placeholder={DATE_TIME_PLACEHOLDER}
								time
								value={value.endDateTime}
								years={{
									end: currentYear + 10,
									start: currentYear,
								}}
							/>
						</ClayLayout.Col>
					</ClayLayout.Row>

					<ClayCheckbox
						checked={value.neverEnd}
						label={Liferay.Language.get('never-end')}
						onChange={() => set({neverEnd: !value.neverEnd})}
					/>

					{scheduleSummary && (
						<ClayAlert
							className="mb-0 mt-3"
							displayType="info"
							title={`${Liferay.Language.get('summary')}:`}
						>
							{scheduleSummary}
						</ClayAlert>
					)}
				</div>
			)}
		</ClayLayout.Sheet>
	);
}
