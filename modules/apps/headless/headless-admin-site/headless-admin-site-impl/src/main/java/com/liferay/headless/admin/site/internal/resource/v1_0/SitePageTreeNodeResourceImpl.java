/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.headless.admin.site.internal.resource.v1_0;

import com.liferay.headless.admin.site.dto.v1_0.SitePage;
import com.liferay.headless.admin.site.dto.v1_0.SitePageTreeNode;
import com.liferay.headless.admin.site.internal.dto.v1_0.util.SitePageTypeUtil;
import com.liferay.headless.admin.site.internal.util.EnabledUtil;
import com.liferay.headless.admin.site.internal.util.SitePageUtil;
import com.liferay.headless.admin.site.resource.v1_0.SitePageTreeNodeResource;
import com.liferay.headless.common.spi.util.GroupUtil;
import com.liferay.petra.string.StringBundler;
import com.liferay.portal.kernel.model.Layout;
import com.liferay.portal.kernel.model.LayoutConstants;
import com.liferay.portal.kernel.service.LayoutLocalService;
import com.liferay.portal.kernel.service.LayoutService;
import com.liferay.portal.kernel.util.Validator;
import com.liferay.portal.vulcan.fields.NestedField;
import com.liferay.portal.vulcan.fields.NestedFieldId;
import com.liferay.portal.vulcan.pagination.Page;
import com.liferay.portal.vulcan.pagination.Pagination;

import jakarta.ws.rs.BadRequestException;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.component.annotations.ServiceScope;

/**
 * @author Daniel Raposo
 */
@Component(
	properties = "OSGI-INF/liferay/rest/v1_0/site-page-tree-node.properties",
	property = "nested.field.support=true", scope = ServiceScope.PROTOTYPE,
	service = SitePageTreeNodeResource.class
)
public class SitePageTreeNodeResourceImpl
	extends BaseSitePageTreeNodeResourceImpl {

	@Override
	public SitePageTreeNode getSiteSitePageTreeNode(
			String siteExternalReferenceCode,
			String sitePageTreeNodeExternalReferenceCode)
		throws Exception {

		Layout layout = _getLayout(
			siteExternalReferenceCode, sitePageTreeNodeExternalReferenceCode);

		return _toSitePageTreeNode(
			layout,
			_getChildLayoutIdsMap(
				layout.getGroupId(), layout.isPrivateLayout()));
	}

	@NestedField(
		parentClass = SitePageTreeNode.class,
		value = "ancestorSitePageTreeNodes"
	)
	@Override
	public Page<SitePageTreeNode>
			getSiteSitePageTreeNodeAncestorSitePageTreeNodesPage(
				String siteExternalReferenceCode,
				@NestedFieldId(value = "externalReferenceCode") String
					sitePageTreeNodeExternalReferenceCode)
		throws Exception {

		Layout layout = _getLayout(
			siteExternalReferenceCode, sitePageTreeNodeExternalReferenceCode);

		List<Layout> ancestorLayouts = layout.getAncestors();

		Collections.reverse(ancestorLayouts);

		Map<Long, List<Long>> childLayoutIdsMap = _getChildLayoutIdsMap(
			layout.getGroupId(), layout.isPrivateLayout());

		return Page.of(
			transform(
				ancestorLayouts,
				ancestorLayout -> _toSitePageTreeNode(
					ancestorLayout, childLayoutIdsMap)));
	}

	@Override
	public Page<SitePageTreeNode> getSiteSitePageTreeNodesPage(
			String siteExternalReferenceCode,
			String parentSitePageExternalReferenceCode, Boolean privateLayout,
			String search, Pagination pagination)
		throws Exception {

		long groupId = GroupUtil.getGroupId(
			true, contextCompany.getCompanyId(), siteExternalReferenceCode);

		EnabledUtil.checkGetSiteSitePagesPageEnabled(
			contextCompany, groupId, privateLayout);

		if (Validator.isNotNull(search)) {
			Map<Long, List<Long>> childLayoutIdsMap = _getChildLayoutIdsMap(
				groupId, privateLayout);

			return Page.of(
				transform(
					_layoutService.getLayouts(
						groupId, privateLayout, search, _TYPES,
						pagination.getStartPosition(),
						pagination.getEndPosition(), null),
					layout -> _toSitePageTreeNode(layout, childLayoutIdsMap)),
				pagination,
				_layoutService.getLayoutsCount(
					groupId, privateLayout, search, _TYPES));
		}

		long parentLayoutId = LayoutConstants.DEFAULT_PARENT_LAYOUT_ID;

		if (Validator.isNotNull(parentSitePageExternalReferenceCode)) {
			Layout parentLayout =
				_layoutLocalService.fetchLayoutByExternalReferenceCode(
					parentSitePageExternalReferenceCode, groupId);

			if (parentLayout == null) {
				return Page.of(Collections.emptyList());
			}

			if (parentLayout.isPrivateLayout() != privateLayout) {
				throw new BadRequestException(
					StringBundler.concat(
						"Unable to list the child pages of the ",
						parentLayout.isPrivateLayout() ? "private" : "public",
						" page with external reference code \"",
						parentSitePageExternalReferenceCode, "\""));
			}

			parentLayoutId = parentLayout.getLayoutId();
		}

		Map<Long, List<Long>> childLayoutIdsMap = _getChildLayoutIdsMap(
			groupId, privateLayout);

		return Page.of(
			transform(
				_layoutService.getLayouts(
					groupId, privateLayout, parentLayoutId, false,
					pagination.getStartPosition(), pagination.getEndPosition()),
				layout -> _toSitePageTreeNode(layout, childLayoutIdsMap)),
			pagination,
			_layoutService.getLayoutsCount(
				groupId, privateLayout, parentLayoutId));
	}

	private Map<Long, List<Long>> _getChildLayoutIdsMap(
		long groupId, boolean privateLayout) {

		String key = StringBundler.concat(
			SitePageTreeNodeResourceImpl.class.getName(), "#", groupId, "#",
			privateLayout);

		Map<Long, List<Long>> childLayoutIdsMap =
			(Map<Long, List<Long>>)contextHttpServletRequest.getAttribute(key);

		if (childLayoutIdsMap != null) {
			return childLayoutIdsMap;
		}

		childLayoutIdsMap = new HashMap<>();

		for (Layout layout :
				_layoutService.getLayouts(groupId, privateLayout)) {

			List<Long> layoutIds = childLayoutIdsMap.computeIfAbsent(
				layout.getParentLayoutId(),
				parentLayoutId -> new ArrayList<>());

			layoutIds.add(layout.getLayoutId());
		}

		contextHttpServletRequest.setAttribute(key, childLayoutIdsMap);

		return childLayoutIdsMap;
	}

	private int _getDescendantLayoutsCount(
		long layoutId, Map<Long, List<Long>> childLayoutIdsMap) {

		int descendantLayoutsCount = 0;

		for (long childLayoutId :
				childLayoutIdsMap.getOrDefault(
					layoutId, Collections.emptyList())) {

			descendantLayoutsCount++;

			descendantLayoutsCount += _getDescendantLayoutsCount(
				childLayoutId, childLayoutIdsMap);
		}

		return descendantLayoutsCount;
	}

	private Layout _getLayout(
			String siteExternalReferenceCode,
			String sitePageTreeNodeExternalReferenceCode)
		throws Exception {

		long groupId = GroupUtil.getGroupId(
			true, contextCompany.getCompanyId(), siteExternalReferenceCode);

		Layout layout = SitePageUtil.getSitePageLayout(
			groupId, sitePageTreeNodeExternalReferenceCode);

		EnabledUtil.checkGetSiteSitePagesPageEnabled(
			contextCompany, groupId, layout.isPrivateLayout());

		return layout;
	}

	private SitePageTreeNode _toSitePageTreeNode(
		Layout layout, Map<Long, List<Long>> childLayoutIdsMap) {

		return new SitePageTreeNode() {
			{
				setDescendantSitePagesCount(
					() -> _getDescendantLayoutsCount(
						layout.getLayoutId(), childLayoutIdsMap));
				setExternalReferenceCode(layout::getExternalReferenceCode);
				setHasChildSitePages(
					() -> childLayoutIdsMap.containsKey(layout.getLayoutId()));
				setName(
					() -> layout.getName(
						contextAcceptLanguage.getPreferredLocale()));
				setParentSitePageExternalReferenceCode(
					() -> {
						Layout parentLayout = _layoutLocalService.fetchLayout(
							layout.getGroupId(), layout.isPrivateLayout(),
							layout.getParentLayoutId());

						if (parentLayout == null) {
							return null;
						}

						return parentLayout.getExternalReferenceCode();
					});
				setType(
					() -> {
						SitePage.Type type = SitePageTypeUtil.toExternalType(
							layout.getType());

						if (type == null) {
							return null;
						}

						return SitePageTreeNode.Type.create(type.getValue());
					});
			}
		};
	}

	private static final String[] _TYPES = {
		LayoutConstants.TYPE_CONTENT, LayoutConstants.TYPE_EMBEDDED,
		LayoutConstants.TYPE_LINK_TO_LAYOUT, LayoutConstants.TYPE_NODE,
		LayoutConstants.TYPE_PORTLET, LayoutConstants.TYPE_URL
	};

	@Reference
	private LayoutLocalService _layoutLocalService;

	@Reference
	private LayoutService _layoutService;

}