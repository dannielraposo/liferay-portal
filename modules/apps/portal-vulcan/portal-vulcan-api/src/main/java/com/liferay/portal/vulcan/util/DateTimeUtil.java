/**
 * SPDX-FileCopyrightText: (c) 2025 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.portal.vulcan.util;

import com.liferay.petra.string.StringPool;
import com.liferay.portal.kernel.util.Validator;

import java.sql.Timestamp;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;

import java.util.Date;

/**
 * @author Brian Wing Shun Chan
 * @author Daniel Raposo
 */
public class DateTimeUtil {

	public static Date toDate(String value) {
		return toDate(toZonedDateTime(value));
	}

	public static Date toDate(ZonedDateTime zonedDateTime) {
		if (zonedDateTime == null) {
			return null;
		}

		return Date.from(zonedDateTime.toInstant());
	}

	public static LocalDateTime toLocalDateTime(Date date) {
		return toLocalDateTime(date, null);
	}

	public static LocalDateTime toLocalDateTime(Date date, Date defaultDate) {
		return toLocalDateTime(date, defaultDate, ZoneId.systemDefault());
	}

	public static LocalDateTime toLocalDateTime(
		Date date, Date defaultDate, ZoneId zoneId) {

		Instant instant = null;

		if (date == null) {
			if (defaultDate == null) {
				defaultDate = new Date();
			}

			instant = defaultDate.toInstant();
		}
		else {
			instant = date.toInstant();
		}

		ZonedDateTime zonedDateTime = instant.atZone(zoneId);

		return zonedDateTime.toLocalDateTime();
	}

	public static LocalDateTime toLocalDateTime(String value) {
		return toZonedDateTime(
			null, value
		).toLocalDateTime();
	}

	public static LocalDateTime toLocalDateTime(
		String timeZoneId, String value) {

		return toZonedDateTime(
			timeZoneId, value
		).toLocalDateTime();
	}

	public static Timestamp toTimestamp(String timeZoneId, String value) {
		return toTimestamp(toZonedDateTime(timeZoneId, value));
	}

	public static Timestamp toTimestamp(ZonedDateTime zonedDateTime) {
		return Timestamp.from(zonedDateTime.toInstant());
	}

	public static ZonedDateTime toZonedDateTime(String value) {
		return toZonedDateTime(null, value);
	}

	public static ZonedDateTime toZonedDateTime(
		String timeZoneId, String value) {

		String dateTimePattern = _getDateTimePattern(value);

		if (dateTimePattern == null) {
			throw new IllegalArgumentException(
				"Unable to parse date-time from " + value);
		}

		DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern(
			dateTimePattern);

		if (dateTimePattern.length() == 10) {
			LocalDateTime localDateTime = LocalDate.parse(
				value, dateTimeFormatter
			).atStartOfDay();

			return localDateTime.atZone(ZoneId.of(StringPool.UTC));
		}

		if (dateTimePattern.contains("XXX") ||
			dateTimePattern.contains("zzz")) {

			try {
				return ZonedDateTime.parse(value, dateTimeFormatter);
			}
			catch (DateTimeParseException dateTimeParseException) {
				throw new RuntimeException(dateTimeParseException);
			}
		}

		try {
			LocalDateTime localDateTime = LocalDateTime.parse(
				value, dateTimeFormatter);

			if (timeZoneId == null) {
				return localDateTime.atZone(ZoneId.of(StringPool.UTC));
			}

			return localDateTime.atZone(ZoneId.of(timeZoneId));
		}
		catch (DateTimeParseException dateTimeParseException) {
			throw new RuntimeException(dateTimeParseException);
		}
	}

	private static String _getDateTimePattern(String value) {
		if (Validator.isNull(value)) {
			return null;
		}

		if (value.length() == 10) {
			if (value.contains("-")) {
				return "yyyy-MM-dd";
			}
			else if (value.contains(" ")) {
				return "yyyy MM dd";
			}
		}

		if ((value.length() > 10) && (value.charAt(10) == 'T')) {
			if (value.length() == 16) {
				return "yyyy-MM-dd'T'HH:mm";
			}
			else if ((value.length() == 17) || (value.length() == 22)) {
				return "yyyy-MM-dd'T'HH:mmXXX";
			}
			else if (value.length() == 19) {
				return "yyyy-MM-dd'T'HH:mm:ss";
			}
			else if ((value.length() == 20) || (value.length() == 25)) {
				return "yyyy-MM-dd'T'HH:mm:ssXXX";
			}
			else if (value.length() == 23) {
				return "yyyy-MM-dd'T'HH:mm:ss.SSS";
			}
			else if ((value.length() == 24) || (value.length() == 29)) {
				return "yyyy-MM-dd'T'HH:mm:ss.SSSXXX";
			}

			return null;
		}

		if ((value.length() > 10) &&
			((value.charAt(10) == ' ') || (value.charAt(11) == ' '))) {

			if (value.length() == 16) {
				return "yyyy-MM-dd HH:mm";
			}
			else if ((value.length() == 17) || (value.length() == 22)) {
				return "yyyy-MM-dd HH:mmXXX";
			}
			else if (value.length() == 19) {
				return "yyyy-MM-dd HH:mm:ss";
			}
			else if ((value.length() == 20) || (value.length() == 25)) {
				return "yyyy-MM-dd HH:mm:ssXXX";
			}
			else if (value.length() == 21) {
				return "yyyy-MM-dd HH:mm:ss.S";
			}
			else if (value.length() == 23) {
				return "yyyy-MM-dd HH:mm:ss.SSS";
			}
			else if ((value.length() == 24) || (value.length() == 29)) {
				return "yyyy-MM-dd HH:mm:ss.SSSXXX";
			}
			else if (value.length() == 27) {
				return "dd-MMM-yyyy hh:mm:ss.SSS a";
			}
			else if (value.length() == 28) {
				return "EEE MMM dd HH:mm:ss zzz yyyy";
			}

			return null;
		}

		return null;
	}

}