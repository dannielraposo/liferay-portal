/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.portal.vulcan.internal.feature.flag;

import com.liferay.portal.kernel.feature.flag.FeatureFlagManagerUtil;
import com.liferay.portal.vulcan.feature.flag.FeatureFlag;
import com.liferay.portal.vulcan.feature.flag.FeatureFlagChecker;

import java.lang.reflect.Method;

import java.util.Arrays;
import java.util.Objects;

import org.osgi.service.component.annotations.Component;

/**
 * @author Daniel Raposo
 * @author Carlos Correa
 */
@Component(service = FeatureFlagChecker.class)
public class FeatureFlagCheckerImpl implements FeatureFlagChecker {

	public String getFeatureFlagKey(Class<?> clazz) {
		while (clazz != null) {
			FeatureFlag featureFlag = clazz.getAnnotation(FeatureFlag.class);

			if (featureFlag != null) {
				return featureFlag.value();
			}

			clazz = clazz.getEnclosingClass();
		}

		return null;
	}

	public String getFeatureFlagKey(Method method) {
		FeatureFlag featureFlag = method.getAnnotation(FeatureFlag.class);

		if (featureFlag != null) {
			return featureFlag.value();
		}

		Class<?> declaringClass = method.getDeclaringClass();

		for (Class<?> superclass = declaringClass.getSuperclass();
			 superclass != null; superclass = superclass.getSuperclass()) {

			for (Method declaredMethod : superclass.getDeclaredMethods()) {
				if (!Objects.equals(
						declaredMethod.getName(), method.getName()) ||
					!Arrays.equals(
						declaredMethod.getParameterTypes(),
						method.getParameterTypes())) {

					continue;
				}

				featureFlag = declaredMethod.getAnnotation(FeatureFlag.class);

				if (featureFlag != null) {
					return featureFlag.value();
				}
			}
		}

		return getFeatureFlagKey(declaringClass);
	}

	public boolean isEnabled(long companyId, Class<?> clazz) {
		return _isEnabled(companyId, getFeatureFlagKey(clazz));
	}

	@Override
	public boolean isEnabled(long companyId, Method method) {
		return _isEnabled(companyId, getFeatureFlagKey(method));
	}

	private boolean _isEnabled(long companyId, String featureFlagKey) {
		if (featureFlagKey == null) {
			return true;
		}

		return FeatureFlagManagerUtil.isEnabled(companyId, featureFlagKey);
	}

}