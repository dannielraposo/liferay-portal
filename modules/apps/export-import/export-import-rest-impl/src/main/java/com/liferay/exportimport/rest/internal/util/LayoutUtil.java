/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.exportimport.rest.internal.util;

import com.liferay.exportimport.kernel.lar.PortletDataHandlerKeys;
import com.liferay.layout.admin.constants.LayoutAdminPortletKeys;
import com.liferay.petra.string.StringBundler;
import com.liferay.portal.kernel.model.Layout;
import com.liferay.portal.kernel.service.LayoutLocalServiceUtil;
import com.liferay.portal.kernel.util.ArrayUtil;

import jakarta.ws.rs.BadRequestException;

import java.util.ArrayList;
import java.util.Collections;
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
		long groupId, Map<String, String[]> parameterMap,
		boolean privateLayout) {

		if (!parameterMap.containsKey(
				PortletDataHandlerKeys.PORTLET_DATA + "_" +
					LayoutAdminPortletKeys.LAYOUT_SET_LAYOUTS)) {

			return new long[0];
		}

		List<Long> layoutIds = new ArrayList<>();

		Set<Long> excludedItemLayoutIds = _getLayoutIds(
			groupId, privateLayout,
			parameterMap.get(
				PreviewPortletDataHandlerUtil.
					CONTROL_NAME_TREE_SELECTION_EXCLUDED_ITEMS));
		Set<Long> excludedSubtreeLayoutIds = _getLayoutIds(
			groupId, privateLayout,
			parameterMap.get(
				PreviewPortletDataHandlerUtil.
					CONTROL_NAME_TREE_SELECTION_EXCLUDED_SUBTREES));
		Set<Long> itemLayoutIds = _getLayoutIds(
			groupId, privateLayout,
			parameterMap.get(
				PreviewPortletDataHandlerUtil.
					CONTROL_NAME_TREE_SELECTION_ITEMS));
		Set<Long> subtreeLayoutIds = _getLayoutIds(
			groupId, privateLayout,
			parameterMap.get(
				PreviewPortletDataHandlerUtil.
					CONTROL_NAME_TREE_SELECTION_SUBTREES));

		boolean all = false;

		if (!parameterMap.containsKey(
				PreviewPortletDataHandlerUtil.CONTROL_NAME_PAGES) ||
			parameterMap.containsKey(
				PreviewPortletDataHandlerUtil.
					CONTROL_NAME_TREE_SELECTION_ALL)) {

			all = true;
		}

		List<Layout> layouts = LayoutLocalServiceUtil.getLayouts(
			groupId, privateLayout);

		Map<Long, Long> parentLayoutIds = new HashMap<>();

		for (Layout layout : layouts) {
			parentLayoutIds.put(
				layout.getLayoutId(), layout.getParentLayoutId());
		}

		for (Layout layout : layouts) {
			if (_isSelected(
					all, excludedItemLayoutIds, excludedSubtreeLayoutIds,
					itemLayoutIds, layout.getLayoutId(), parentLayoutIds,
					subtreeLayoutIds)) {

				layoutIds.add(layout.getLayoutId());
			}
		}

		return ArrayUtil.toLongArray(layoutIds);
	}

	public static boolean isPrivateLayout(Map<String, String[]> parameterMap) {
		String[] values = parameterMap.get(
			PreviewPortletDataHandlerUtil.CONTROL_NAME_VISIBILITY);

		if (ArrayUtil.isEmpty(values) ||
			Objects.equals(
				values[0],
				PreviewPortletDataHandlerUtil.CHOICE_NAME_PUBLIC_PAGES) ||
			Objects.equals(values[0], Boolean.TRUE.toString())) {

			return false;
		}

		if (Objects.equals(
				values[0],
				PreviewPortletDataHandlerUtil.CHOICE_NAME_PRIVATE_PAGES)) {

			return true;
		}

		throw new BadRequestException(
			StringBundler.concat(
				"Unable to select the pages \"", values[0], "\", expected \"",
				PreviewPortletDataHandlerUtil.CHOICE_NAME_PUBLIC_PAGES,
				"\" or \"",
				PreviewPortletDataHandlerUtil.CHOICE_NAME_PRIVATE_PAGES, "\""));
	}

	private static Set<Long> _getLayoutIds(
		long groupId, boolean privateLayout,
		String[] sitePageExternalReferenceCodes) {

		if (ArrayUtil.isEmpty(sitePageExternalReferenceCodes)) {
			return Collections.emptySet();
		}

		Set<Long> layoutIds = new HashSet<>();

		for (String sitePageExternalReferenceCode :
				sitePageExternalReferenceCodes) {

			Layout layout =
				LayoutLocalServiceUtil.fetchLayoutByExternalReferenceCode(
					sitePageExternalReferenceCode, groupId);

			if (layout == null) {
				throw new BadRequestException(
					"No page exists with external reference code \"" +
						sitePageExternalReferenceCode + "\"");
			}

			if (layout.isPrivateLayout() != privateLayout) {
				throw new BadRequestException(
					StringBundler.concat(
						"Unable to select the ",
						layout.isPrivateLayout() ? "private" : "public",
						" page with external reference code \"",
						sitePageExternalReferenceCode, "\""));
			}

			layoutIds.add(layout.getLayoutId());
		}

		return layoutIds;
	}

	private static boolean _isSelected(
		boolean all, Set<Long> excludedItemLayoutIds,
		Set<Long> excludedSubtreeLayoutIds, Set<Long> itemLayoutIds,
		long layoutId, Map<Long, Long> parentLayoutIds,
		Set<Long> subtreeLayoutIds) {

		if (itemLayoutIds.contains(layoutId)) {
			return true;
		}

		if (excludedItemLayoutIds.contains(layoutId)) {
			return false;
		}

		if (subtreeLayoutIds.contains(layoutId)) {
			return true;
		}

		if (excludedSubtreeLayoutIds.contains(layoutId)) {
			return false;
		}

		Long parentLayoutId = parentLayoutIds.get(layoutId);

		while ((parentLayoutId != null) && (parentLayoutId != 0)) {
			if (subtreeLayoutIds.contains(parentLayoutId)) {
				return true;
			}

			if (excludedSubtreeLayoutIds.contains(parentLayoutId)) {
				return false;
			}

			parentLayoutId = parentLayoutIds.get(parentLayoutId);
		}

		return all;
	}

}