/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.object.rest.internal.util;

import com.liferay.petra.sql.dsl.expression.Expression;
import com.liferay.petra.sql.dsl.expression.Predicate;
import com.liferay.portal.odata.filter.expression.BinaryExpression;
import com.liferay.portal.kernel.util.DateFormatFactoryUtil;

import java.util.Date;
import java.text.DateFormat;
import java.text.ParseException;

/**
 * @author Daniel Raposo
 */
public class DateTimeExpressionConverterUtil {

	private static final DateFormat _dateTimeDateFormat =
		DateFormatFactoryUtil.getSimpleDateFormat(
			"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

	private static final DateFormat _dateTimeNoMillisDateFormat =
		DateFormatFactoryUtil.getSimpleDateFormat(
			"yyyy-MM-dd'T'HH:mm:ss'Z'");

	public static <T> Predicate getDateTimePredicate(
		Expression<T> expression, BinaryExpression.Operation operation,
		T value) {

		if (operation == BinaryExpression.Operation.EQ) {
			return expression.gte(adjustToStartOfMillis(value))
				.and(expression.lte(adjustToEndOfMillis(value)));
		}
		else if (operation == BinaryExpression.Operation.NE) {
			return expression.lt(adjustToStartOfMillis(value))
				.or(expression.gt(adjustToEndOfMillis(value)));
		}
		else if (operation == BinaryExpression.Operation.GT) {
			return expression.gt(adjustToEndOfMillis(value));
		}
		else if (operation == BinaryExpression.Operation.GE) {
			return expression.gte(adjustToStartOfMillis(value));
		}
		else if (operation == BinaryExpression.Operation.LT) {
			return expression.lt(adjustToStartOfMillis(value));
		}
		else if (operation == BinaryExpression.Operation.LE) {
			return expression.lte(adjustToEndOfMillis(value));
		}

		return null;
	}

	private static <T> T adjustToStartOfMillis(T value) {
		if (value instanceof String) {
			String dateString = (String) value;
			if (dateString.contains(".")) {
				dateString = dateString.substring(0, dateString.indexOf(".")) + "Z";
			}

			if (!dateString.matches("\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z")) {
				throw new IllegalArgumentException("Invalid date format: " + value);
			}

			try {
				Date date = _dateTimeNoMillisDateFormat.parse(dateString);
				return (T) _dateTimeDateFormat.format(date);
			}
			catch (ParseException parseException) {
				throw new IllegalArgumentException(
					"Unable to parse date from " + dateString, parseException);
			}
		}

		return value;
	}

	private static <T> T adjustToEndOfMillis(T value) {
		if (value instanceof String) {
			String dateString = (String) value;
			if (dateString.contains(".")) {
				dateString = dateString.substring(0, dateString.indexOf(".")) + "Z";
			}

			if (!dateString.matches("\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z")) {
				throw new IllegalArgumentException("Invalid date format: " + value);
			}

			try {
				Date date = _dateTimeNoMillisDateFormat.parse(dateString);
				date.setTime(date.getTime() + 999);
				return (T) _dateTimeDateFormat.format(date);
			}
			catch (ParseException parseException) {
				throw new IllegalArgumentException(
					"Unable to parse date from " + dateString, parseException);
			}
		}

		return value;
	}
}