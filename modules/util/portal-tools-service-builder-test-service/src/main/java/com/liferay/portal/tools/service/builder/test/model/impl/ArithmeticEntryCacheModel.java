/**
 * SPDX-FileCopyrightText: (c) 2025 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.portal.tools.service.builder.test.model.impl;

import com.liferay.petra.lang.HashUtil;
import com.liferay.petra.string.StringBundler;
import com.liferay.portal.kernel.model.CacheModel;
import com.liferay.portal.tools.service.builder.test.model.ArithmeticEntry;

import java.io.Externalizable;
import java.io.IOException;
import java.io.ObjectInput;
import java.io.ObjectOutput;

/**
 * The cache model class for representing ArithmeticEntry in entity cache.
 *
 * @author Brian Wing Shun Chan
 * @generated
 */
public class ArithmeticEntryCacheModel
	implements CacheModel<ArithmeticEntry>, Externalizable {

	@Override
	public boolean equals(Object object) {
		if (this == object) {
			return true;
		}

		if (!(object instanceof ArithmeticEntryCacheModel)) {
			return false;
		}

		ArithmeticEntryCacheModel arithmeticEntryCacheModel =
			(ArithmeticEntryCacheModel)object;

		if (arithmeticEntryId == arithmeticEntryCacheModel.arithmeticEntryId) {
			return true;
		}

		return false;
	}

	@Override
	public int hashCode() {
		return HashUtil.hash(0, arithmeticEntryId);
	}

	@Override
	public String toString() {
		StringBundler sb = new StringBundler(7);

		sb.append("{arithmeticEntryId=");
		sb.append(arithmeticEntryId);
		sb.append(", number1=");
		sb.append(number1);
		sb.append(", number2=");
		sb.append(number2);
		sb.append("}");

		return sb.toString();
	}

	@Override
	public ArithmeticEntry toEntityModel() {
		ArithmeticEntryImpl arithmeticEntryImpl = new ArithmeticEntryImpl();

		arithmeticEntryImpl.setArithmeticEntryId(arithmeticEntryId);
		arithmeticEntryImpl.setNumber1(number1);
		arithmeticEntryImpl.setNumber2(number2);

		arithmeticEntryImpl.resetOriginalValues();

		return arithmeticEntryImpl;
	}

	@Override
	public void readExternal(ObjectInput objectInput) throws IOException {
		arithmeticEntryId = objectInput.readLong();

		number1 = objectInput.readLong();

		number2 = objectInput.readLong();
	}

	@Override
	public void writeExternal(ObjectOutput objectOutput) throws IOException {
		objectOutput.writeLong(arithmeticEntryId);

		objectOutput.writeLong(number1);

		objectOutput.writeLong(number2);
	}

	public long arithmeticEntryId;
	public long number1;
	public long number2;

}