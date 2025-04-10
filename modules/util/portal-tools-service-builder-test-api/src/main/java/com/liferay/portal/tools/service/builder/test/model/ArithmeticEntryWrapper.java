/**
 * SPDX-FileCopyrightText: (c) 2025 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.portal.tools.service.builder.test.model;

import com.liferay.portal.kernel.model.ModelWrapper;
import com.liferay.portal.kernel.model.wrapper.BaseModelWrapper;

import java.util.HashMap;
import java.util.Map;

/**
 * <p>
 * This class is a wrapper for {@link ArithmeticEntry}.
 * </p>
 *
 * @author Brian Wing Shun Chan
 * @see ArithmeticEntry
 * @generated
 */
public class ArithmeticEntryWrapper
	extends BaseModelWrapper<ArithmeticEntry>
	implements ArithmeticEntry, ModelWrapper<ArithmeticEntry> {

	public ArithmeticEntryWrapper(ArithmeticEntry arithmeticEntry) {
		super(arithmeticEntry);
	}

	@Override
	public Map<String, Object> getModelAttributes() {
		Map<String, Object> attributes = new HashMap<String, Object>();

		attributes.put("arithmeticEntryId", getArithmeticEntryId());
		attributes.put("number1", getNumber1());
		attributes.put("number2", getNumber2());

		return attributes;
	}

	@Override
	public void setModelAttributes(Map<String, Object> attributes) {
		Long arithmeticEntryId = (Long)attributes.get("arithmeticEntryId");

		if (arithmeticEntryId != null) {
			setArithmeticEntryId(arithmeticEntryId);
		}

		Long number1 = (Long)attributes.get("number1");

		if (number1 != null) {
			setNumber1(number1);
		}

		Long number2 = (Long)attributes.get("number2");

		if (number2 != null) {
			setNumber2(number2);
		}
	}

	@Override
	public ArithmeticEntry cloneWithOriginalValues() {
		return wrap(model.cloneWithOriginalValues());
	}

	/**
	 * Returns the arithmetic entry ID of this arithmetic entry.
	 *
	 * @return the arithmetic entry ID of this arithmetic entry
	 */
	@Override
	public long getArithmeticEntryId() {
		return model.getArithmeticEntryId();
	}

	/**
	 * Returns the number1 of this arithmetic entry.
	 *
	 * @return the number1 of this arithmetic entry
	 */
	@Override
	public long getNumber1() {
		return model.getNumber1();
	}

	/**
	 * Returns the number2 of this arithmetic entry.
	 *
	 * @return the number2 of this arithmetic entry
	 */
	@Override
	public long getNumber2() {
		return model.getNumber2();
	}

	/**
	 * Returns the primary key of this arithmetic entry.
	 *
	 * @return the primary key of this arithmetic entry
	 */
	@Override
	public long getPrimaryKey() {
		return model.getPrimaryKey();
	}

	@Override
	public void persist() {
		model.persist();
	}

	/**
	 * Sets the arithmetic entry ID of this arithmetic entry.
	 *
	 * @param arithmeticEntryId the arithmetic entry ID of this arithmetic entry
	 */
	@Override
	public void setArithmeticEntryId(long arithmeticEntryId) {
		model.setArithmeticEntryId(arithmeticEntryId);
	}

	/**
	 * Sets the number1 of this arithmetic entry.
	 *
	 * @param number1 the number1 of this arithmetic entry
	 */
	@Override
	public void setNumber1(long number1) {
		model.setNumber1(number1);
	}

	/**
	 * Sets the number2 of this arithmetic entry.
	 *
	 * @param number2 the number2 of this arithmetic entry
	 */
	@Override
	public void setNumber2(long number2) {
		model.setNumber2(number2);
	}

	/**
	 * Sets the primary key of this arithmetic entry.
	 *
	 * @param primaryKey the primary key of this arithmetic entry
	 */
	@Override
	public void setPrimaryKey(long primaryKey) {
		model.setPrimaryKey(primaryKey);
	}

	@Override
	public String toXmlString() {
		return model.toXmlString();
	}

	@Override
	protected ArithmeticEntryWrapper wrap(ArithmeticEntry arithmeticEntry) {
		return new ArithmeticEntryWrapper(arithmeticEntry);
	}

}