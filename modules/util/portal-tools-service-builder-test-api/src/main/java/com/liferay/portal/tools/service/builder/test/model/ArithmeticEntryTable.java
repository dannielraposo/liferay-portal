/**
 * SPDX-FileCopyrightText: (c) 2025 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.portal.tools.service.builder.test.model;

import com.liferay.petra.sql.dsl.Column;
import com.liferay.petra.sql.dsl.base.BaseTable;

import java.sql.Types;

/**
 * The table class for the &quot;ArithmeticEntry&quot; database table.
 *
 * @author Brian Wing Shun Chan
 * @see ArithmeticEntry
 * @generated
 */
public class ArithmeticEntryTable extends BaseTable<ArithmeticEntryTable> {

	public static final ArithmeticEntryTable INSTANCE =
		new ArithmeticEntryTable();

	public final Column<ArithmeticEntryTable, Long> arithmeticEntryId =
		createColumn(
			"arithmeticEntryId", Long.class, Types.BIGINT, Column.FLAG_PRIMARY);
	public final Column<ArithmeticEntryTable, Long> number1 = createColumn(
		"number1", Long.class, Types.BIGINT, Column.FLAG_DEFAULT);
	public final Column<ArithmeticEntryTable, Long> number2 = createColumn(
		"number2", Long.class, Types.BIGINT, Column.FLAG_DEFAULT);

	private ArithmeticEntryTable() {
		super("ArithmeticEntry", ArithmeticEntryTable::new);
	}

}