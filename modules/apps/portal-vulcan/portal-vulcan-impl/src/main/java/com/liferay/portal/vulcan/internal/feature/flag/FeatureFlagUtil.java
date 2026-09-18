/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.portal.vulcan.internal.feature.flag;

import com.liferay.portal.kernel.feature.flag.FeatureFlagManagerUtil;
import com.liferay.portal.vulcan.feature.flag.FeatureFlag;

import java.lang.reflect.Method;

/**
 * @author Daniel Raposo
 */
public class FeatureFlagUtil {

	public static boolean isEnabled(long companyId, Class<?> resourceClass) {
		return _isEnabled(
			companyId, resourceClass.getAnnotation(FeatureFlag.class));
	}

	public static boolean isEnabled(
		long companyId, Method method, Class<?> resourceClass) {

		FeatureFlag featureFlag = method.getAnnotation(FeatureFlag.class);

		if (featureFlag == null) {
			return isEnabled(companyId, resourceClass);
		}

		return _isEnabled(companyId, featureFlag);
	}

	private static boolean _isEnabled(long companyId, FeatureFlag featureFlag) {
		if (featureFlag == null) {
			return true;
		}

		return FeatureFlagManagerUtil.isEnabled(companyId, featureFlag.value());
	}

}