/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.exportimport.rest.internal.util;

import com.liferay.portal.kernel.util.DateRange;
import com.liferay.portal.kernel.util.StringUtil;

import jakarta.ws.rs.BadRequestException;

import java.util.Date;

/**
 * @author Daniel Raposo
 */
public class DateRangeUtil {

	public static final String DATE_RANGE_TYPE_ALL = "ALL";

	public static final String DATE_RANGE_TYPE_DATE_RANGE = "DATE_RANGE";

	public static final String DATE_RANGE_TYPE_FROM_LAST_PUBLISH_DATE =
		"FROM_LAST_PUBLISH_DATE";

	public static final String DATE_RANGE_TYPE_LAST = "LAST";

	public static DateRange getDateRange(
		String dateRangeType, Date startDate, Date endDate) {

		if (StringUtil.equals(dateRangeType, DATE_RANGE_TYPE_ALL)) {
			return null;
		}

		if (StringUtil.equals(dateRangeType, DATE_RANGE_TYPE_LAST)) {
			if (startDate == null) {
				throw new BadRequestException(
					"The last date range type needs a start date");
			}

			Date date = new Date();

			if (startDate.after(date)) {
				throw new BadRequestException(
					"The start date must be in the past for the last date " +
						"range type");
			}

			return new DateRange(startDate, date);
		}

		return _toDateRange(startDate, endDate);
	}

	private static DateRange _toDateRange(Date startDate, Date endDate) {
		if ((startDate == null) && (endDate == null)) {
			return null;
		}

		if ((startDate != null) && (endDate != null) &&
			!startDate.before(endDate)) {

			throw new BadRequestException(
				"The start date must be before the end date");
		}

		return new DateRange(
			(startDate == null) ? new Date(0) : startDate,
			(endDate == null) ? new Date() : endDate);
	}

}