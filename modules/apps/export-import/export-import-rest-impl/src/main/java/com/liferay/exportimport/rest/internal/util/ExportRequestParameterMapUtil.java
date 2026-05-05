/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.exportimport.rest.internal.util;

import com.liferay.exportimport.kernel.lar.ExportImportDateUtil;
import com.liferay.exportimport.kernel.lar.PortletDataHandlerKeys;
import com.liferay.exportimport.rest.dto.v1_0.ExportRequest;

import java.util.HashMap;
import java.util.Map;

/**
 * @author Daniel Raposo
 */
public class ExportRequestParameterMapUtil {

	public static Map<String, String[]> toParameterMap(
		ExportRequest exportRequest) {

		Map<String, String[]> parameterMap = new HashMap<>();

		Map<String, ?> contentSelection = exportRequest.getContentSelection();

		if (contentSelection != null) {
			for (Object sectionValue : contentSelection.values()) {
				if (sectionValue instanceof Map) {
					_walk((Map<String, ?>)sectionValue, parameterMap);
				}
			}
		}

		String range = exportRequest.getRangeAsString();

		if (range == null) {
			range = ExportImportDateUtil.RANGE_ALL;
		}

		parameterMap.put("range", new String[] {range});

		parameterMap.putIfAbsent(
			PortletDataHandlerKeys.DELETIONS, new String[] {"false"});
		parameterMap.putIfAbsent(
			PortletDataHandlerKeys.PERMISSIONS, new String[] {"false"});
		parameterMap.putIfAbsent(
			PortletDataHandlerKeys.PORTLET_ARCHIVED_SETUPS_ALL,
			new String[] {"true"});
		parameterMap.putIfAbsent(
			PortletDataHandlerKeys.PORTLET_CONFIGURATION_ALL,
			new String[] {"true"});
		parameterMap.putIfAbsent(
			PortletDataHandlerKeys.PORTLET_DATA, new String[] {"true"});
		parameterMap.putIfAbsent(
			PortletDataHandlerKeys.PORTLET_DATA_CONTROL_DEFAULT,
			new String[] {"false"});
		parameterMap.putIfAbsent(
			PortletDataHandlerKeys.PORTLET_SETUP_ALL, new String[] {"true"});
		parameterMap.putIfAbsent(
			PortletDataHandlerKeys.PORTLET_USER_PREFERENCES_ALL,
			new String[] {"true"});

		return parameterMap;
	}

	private static void _walk(
		Map<String, ?> selection, Map<String, String[]> parameterMap) {

		for (Map.Entry<String, ?> entry : selection.entrySet()) {
			Object value = entry.getValue();

			if ((value instanceof Boolean) && !(Boolean)value) {
				continue;
			}

			String name = entry.getKey();

			if (value instanceof String) {
				parameterMap.put(name, new String[] {(String)value});

				continue;
			}

			parameterMap.put(name, new String[] {"true"});

			if (value instanceof Map) {
				_walk((Map<String, ?>)value, parameterMap);
			}
		}
	}

}