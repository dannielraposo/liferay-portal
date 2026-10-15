/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.exportimport.rest.internal.util;

import com.liferay.exportimport.rest.dto.v1_0.PortletDataHandlerTreeSelection;
import com.liferay.portal.kernel.model.Layout;
import com.liferay.portal.kernel.util.ArrayUtil;
import com.liferay.portal.kernel.util.GetterUtil;
import com.liferay.portal.kernel.util.MapUtil;

import jakarta.ws.rs.BadRequestException;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

/**
 * @author Daniel Raposo
 */
public class LayoutUtil {

	public static long[] getLayoutIds(
		List<Layout> layouts, Map<String, String[]> parameterMap) {

		if (!MapUtil.getBoolean(
				parameterMap,
				PortletDataHandlerUtil.PORTLET_DATA_HANDLER_NAME_LAYOUT_SET) ||
			!MapUtil.getBoolean(
				parameterMap, PortletDataHandlerUtil.CONTROL_NAME_PAGES)) {

			return new long[0];
		}

		Map<Long, Layout> layoutsMap = new HashMap<>();

		for (Layout layout : layouts) {
			layoutsMap.put(layout.getLayoutId(), layout);
		}

		PortletDataHandlerTreeSelection portletDataHandlerTreeSelection =
			ParameterMapUtil.getPortletDataHandlerTreeSelection(
				PortletDataHandlerUtil.CONTROL_NAME_PAGES, parameterMap);

		Set<String> excludedItemExternalReferenceCodes =
			_getExternalReferenceCodes(
				portletDataHandlerTreeSelection.
					getExcludedItemExternalReferenceCodes(),
				layouts);
		Set<String> excludedSubtreeExternalReferenceCodes =
			_getExternalReferenceCodes(
				portletDataHandlerTreeSelection.
					getExcludedSubtreeExternalReferenceCodes(),
				layouts);
		Set<String> itemExternalReferenceCodes = _getExternalReferenceCodes(
			portletDataHandlerTreeSelection.getItemExternalReferenceCodes(),
			layouts);
		Set<String> subtreeExternalReferenceCodes = _getExternalReferenceCodes(
			portletDataHandlerTreeSelection.getSubtreeExternalReferenceCodes(),
			layouts);

		List<Long> layoutIds = new ArrayList<>();

		for (Layout layout : layouts) {
			if (!_isSelected(
					GetterUtil.getBoolean(
						portletDataHandlerTreeSelection.getSelectAll(), true),
					excludedItemExternalReferenceCodes,
					excludedSubtreeExternalReferenceCodes,
					itemExternalReferenceCodes, layout, layoutsMap,
					subtreeExternalReferenceCodes)) {

				continue;
			}

			layoutIds.add(layout.getLayoutId());
		}

		return ArrayUtil.toLongArray(layoutIds);
	}

	public static boolean isPrivateLayout(Map<String, String[]> parameterMap) {
		return Objects.equals(
			MapUtil.getString(
				parameterMap, PortletDataHandlerUtil.CONTROL_NAME_VISIBILITY),
			PortletDataHandlerUtil.CHOICE_NAME_PRIVATE_PAGES);
	}

	private static Set<String> _getExternalReferenceCodes(
		String[] externalReferenceCodes, List<Layout> layouts) {

		Set<String> externalReferenceCodesSet = new HashSet<>();

		for (String externalReferenceCode :
				GetterUtil.getStringValues(externalReferenceCodes)) {

			if (!_hasLayout(externalReferenceCode, layouts)) {
				throw new BadRequestException(
					"No page exists with external reference code \"" +
						externalReferenceCode + "\"");
			}

			externalReferenceCodesSet.add(externalReferenceCode);
		}

		return externalReferenceCodesSet;
	}

	private static boolean _hasLayout(
		String externalReferenceCode, List<Layout> layouts) {

		for (Layout layout : layouts) {
			if (Objects.equals(
					externalReferenceCode, layout.getExternalReferenceCode())) {

				return true;
			}
		}

		return false;
	}

	private static boolean _isSelected(
		boolean all, Set<String> excludedItemExternalReferenceCodes,
		Set<String> excludedSubtreeExternalReferenceCodes,
		Set<String> itemExternalReferenceCodes, Layout layout,
		Map<Long, Layout> layoutsMap,
		Set<String> subtreeExternalReferenceCodes) {

		if (itemExternalReferenceCodes.contains(
				layout.getExternalReferenceCode())) {

			return true;
		}

		if (excludedItemExternalReferenceCodes.contains(
				layout.getExternalReferenceCode())) {

			return false;
		}

		while (layout != null) {
			if (subtreeExternalReferenceCodes.contains(
					layout.getExternalReferenceCode())) {

				return true;
			}

			if (excludedSubtreeExternalReferenceCodes.contains(
					layout.getExternalReferenceCode())) {

				return false;
			}

			layout = layoutsMap.get(layout.getParentLayoutId());
		}

		return all;
	}

}