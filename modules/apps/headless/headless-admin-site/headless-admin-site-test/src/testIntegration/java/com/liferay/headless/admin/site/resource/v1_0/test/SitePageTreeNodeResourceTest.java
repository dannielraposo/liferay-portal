/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.headless.admin.site.resource.v1_0.test;

import com.liferay.arquillian.extension.junit.bridge.junit.Arquillian;
import com.liferay.headless.admin.site.client.dto.v1_0.SitePageTreeNode;
import com.liferay.headless.admin.site.client.http.HttpInvoker;
import com.liferay.headless.admin.site.client.pagination.Page;
import com.liferay.headless.admin.site.client.pagination.Pagination;
import com.liferay.headless.admin.site.client.resource.v1_0.SitePageTreeNodeResource;
import com.liferay.layout.test.util.LayoutTestUtil;
import com.liferay.portal.kernel.model.Group;
import com.liferay.portal.kernel.model.Layout;
import com.liferay.portal.kernel.model.LayoutConstants;
import com.liferay.portal.kernel.model.ResourceConstants;
import com.liferay.portal.kernel.model.Role;
import com.liferay.portal.kernel.model.User;
import com.liferay.portal.kernel.model.role.RoleConstants;
import com.liferay.portal.kernel.security.permission.ActionKeys;
import com.liferay.portal.kernel.service.LayoutLocalService;
import com.liferay.portal.kernel.service.ResourcePermissionLocalService;
import com.liferay.portal.kernel.service.RoleLocalService;
import com.liferay.portal.kernel.test.rule.AggregateTestRule;
import com.liferay.portal.kernel.test.util.RandomTestUtil;
import com.liferay.portal.kernel.test.util.UserTestUtil;
import com.liferay.portal.kernel.util.LocaleUtil;
import com.liferay.portal.kernel.util.PortalUtil;
import com.liferay.portal.kernel.util.PropsValues;
import com.liferay.portal.test.log.LogCapture;
import com.liferay.portal.test.log.LoggerTestUtil;
import com.liferay.portal.test.rule.FeatureFlag;
import com.liferay.portal.test.rule.Inject;
import com.liferay.portal.test.rule.LiferayIntegrationTestRule;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

import org.junit.Assert;
import org.junit.ClassRule;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;

/**
 * @author Daniel Raposo
 */
@RunWith(Arquillian.class)
public class SitePageTreeNodeResourceTest
	extends BaseSitePageTreeNodeResourceTestCase {

	@ClassRule
	@Rule
	public static final AggregateTestRule aggregateTestRule =
		new LiferayIntegrationTestRule();

	@Override
	@Test
	public void testGetSiteSitePageTreeNode() throws Exception {
		super.testGetSiteSitePageTreeNode();

		_testGetSiteSitePageTreeNodeWithDescendants();
		_testGetSiteSitePageTreeNodeWithUnknownExternalReferenceCode();
	}

	@Override
	@Test
	public void testGetSiteSitePageTreeNodeAncestorSitePageTreeNodesPage()
		throws Exception {

		super.testGetSiteSitePageTreeNodeAncestorSitePageTreeNodesPage();

		_testGetSiteSitePageTreeNodeWithAncestorSitePageTreeNodesNestedField();
	}

	@FeatureFlag("LPD-35443")
	@Override
	@Test
	public void testGetSiteSitePageTreeNodesPage() throws Exception {
		super.testGetSiteSitePageTreeNodesPage();

		_testGetSiteSitePageTreeNodesPageWithoutViewPermission();
		_testGetSiteSitePageTreeNodesPageWithParentSitePageExternalReferenceCode();
		_testGetSiteSitePageTreeNodesPageWithSearch();
	}

	@Override
	protected String[] getAdditionalAssertFieldNames() {
		return new String[] {
			"descendantSitePagesCount", "externalReferenceCode",
			"hasChildSitePages", "name", "type"
		};
	}

	@Override
	protected SitePageTreeNode testGetSiteSitePageTreeNode_addSitePageTreeNode()
		throws Exception {

		return _toSitePageTreeNode(
			0, LayoutTestUtil.addTypePortletLayout(testGroup), null);
	}

	@Override
	protected SitePageTreeNode
			testGetSiteSitePageTreeNodeAncestorSitePageTreeNodesPage_addSitePageTreeNode(
				String siteExternalReferenceCode,
				String sitePageTreeNodeExternalReferenceCode,
				SitePageTreeNode sitePageTreeNode)
		throws Exception {

		Group group = _getGroup(siteExternalReferenceCode);

		Layout layout = _layoutLocalService.getLayoutByExternalReferenceCode(
			sitePageTreeNodeExternalReferenceCode, group.getGroupId());

		int descendantLayoutsCount = 1;

		while (layout.getParentLayoutId() !=
					LayoutConstants.DEFAULT_PARENT_LAYOUT_ID) {

			layout = _layoutLocalService.getLayout(
				layout.getGroupId(), layout.isPrivateLayout(),
				layout.getParentLayoutId());

			descendantLayoutsCount++;
		}

		Layout ancestorLayout = LayoutTestUtil.addTypePortletLayout(group);

		_layoutLocalService.updateParentLayoutId(
			layout.getPlid(), ancestorLayout.getPlid());

		return _toSitePageTreeNode(
			descendantLayoutsCount, ancestorLayout, null);
	}

	@Override
	protected String
			testGetSiteSitePageTreeNodeAncestorSitePageTreeNodesPage_getIrrelevantSitePageTreeNodeExternalReferenceCode()
		throws Exception {

		Layout layout = LayoutTestUtil.addTypePortletLayout(irrelevantGroup);

		return layout.getExternalReferenceCode();
	}

	@Override
	protected String
			testGetSiteSitePageTreeNodeAncestorSitePageTreeNodesPage_getSitePageTreeNodeExternalReferenceCode()
		throws Exception {

		Layout layout = LayoutTestUtil.addTypePortletLayout(testGroup);

		return layout.getExternalReferenceCode();
	}

	@Override
	protected SitePageTreeNode
			testGetSiteSitePageTreeNodesPage_addSitePageTreeNode(
				String siteExternalReferenceCode,
				SitePageTreeNode sitePageTreeNode)
		throws Exception {

		return _toSitePageTreeNode(
			0,
			LayoutTestUtil.addTypePortletLayout(
				_getGroup(siteExternalReferenceCode)),
			null);
	}

	private Group _getGroup(String siteExternalReferenceCode) {
		if (Objects.equals(
				siteExternalReferenceCode,
				irrelevantGroup.getExternalReferenceCode())) {

			return irrelevantGroup;
		}

		return testGroup;
	}

	private void _testGetSiteSitePageTreeNodesPageWithoutViewPermission()
		throws Exception {

		Layout parentLayout = LayoutTestUtil.addTypePortletLayout(testGroup);

		Layout restrictedLayout = LayoutTestUtil.addTypePortletLayout(
			testGroup, parentLayout.getPlid());
		Layout viewableLayout = LayoutTestUtil.addTypePortletLayout(
			testGroup, parentLayout.getPlid());

		for (String roleName :
				new String[] {
					RoleConstants.GUEST, RoleConstants.SITE_MEMBER,
					RoleConstants.USER
				}) {

			Role role = _roleLocalService.getRole(
				testCompany.getCompanyId(), roleName);

			_resourcePermissionLocalService.removeResourcePermission(
				testCompany.getCompanyId(), Layout.class.getName(),
				ResourceConstants.SCOPE_INDIVIDUAL,
				String.valueOf(restrictedLayout.getPlid()), role.getRoleId(),
				ActionKeys.VIEW);
		}

		String password = RandomTestUtil.randomString();

		User user = UserTestUtil.addUser(testCompany, password);

		SitePageTreeNodeResource userSitePageTreeNodeResource =
			SitePageTreeNodeResource.builder(
			).authentication(
				user.getEmailAddress(), password
			).endpoint(
				testCompany.getVirtualHostname(),
				PortalUtil.getPortalServerPort(false), "http"
			).locale(
				LocaleUtil.getDefault()
			).build();

		Page<SitePageTreeNode> page =
			userSitePageTreeNodeResource.getSiteSitePageTreeNodesPage(
				testGroup.getExternalReferenceCode(),
				parentLayout.getExternalReferenceCode(), null, null,
				Pagination.of(1, 10));

		Assert.assertEquals(1, page.getTotalCount());

		assertEquals(
			Collections.singletonList(
				_toSitePageTreeNode(
					0, viewableLayout,
					parentLayout.getExternalReferenceCode())),
			(List<SitePageTreeNode>)page.getItems());

		assertEquals(
			_toSitePageTreeNode(1, parentLayout, null),
			userSitePageTreeNodeResource.getSiteSitePageTreeNode(
				testGroup.getExternalReferenceCode(),
				parentLayout.getExternalReferenceCode()));
		assertEquals(
			_toSitePageTreeNode(2, parentLayout, null),
			sitePageTreeNodeResource.getSiteSitePageTreeNode(
				testGroup.getExternalReferenceCode(),
				parentLayout.getExternalReferenceCode()));
	}

	private void _testGetSiteSitePageTreeNodesPageWithParentSitePageExternalReferenceCode()
		throws Exception {

		Layout parentLayout = LayoutTestUtil.addTypePortletLayout(testGroup);

		Layout childLayout = LayoutTestUtil.addTypePortletLayout(
			testGroup, parentLayout.getPlid());
		Layout childlessLayout = LayoutTestUtil.addTypePortletLayout(
			testGroup, parentLayout.getPlid());

		Layout grandchildLayout = LayoutTestUtil.addTypePortletLayout(
			testGroup, childLayout.getPlid());

		Page<SitePageTreeNode> page =
			sitePageTreeNodeResource.getSiteSitePageTreeNodesPage(
				testGroup.getExternalReferenceCode(), null, null, null,
				Pagination.of(1, 100));

		List<SitePageTreeNode> sitePageTreeNodes =
			(List<SitePageTreeNode>)page.getItems();

		assertContains(
			_toSitePageTreeNode(3, parentLayout, null), sitePageTreeNodes);

		for (SitePageTreeNode sitePageTreeNode : sitePageTreeNodes) {
			Assert.assertNull(
				sitePageTreeNode.getParentSitePageExternalReferenceCode());
		}

		page = sitePageTreeNodeResource.getSiteSitePageTreeNodesPage(
			testGroup.getExternalReferenceCode(),
			parentLayout.getExternalReferenceCode(), null, null,
			Pagination.of(1, 10));

		Assert.assertEquals(2, page.getTotalCount());

		sitePageTreeNodes = (List<SitePageTreeNode>)page.getItems();

		assertContains(
			_toSitePageTreeNode(
				1, childLayout, parentLayout.getExternalReferenceCode()),
			sitePageTreeNodes);
		assertContains(
			_toSitePageTreeNode(
				0, childlessLayout, parentLayout.getExternalReferenceCode()),
			sitePageTreeNodes);

		page = sitePageTreeNodeResource.getSiteSitePageTreeNodesPage(
			testGroup.getExternalReferenceCode(),
			childLayout.getExternalReferenceCode(), null, null,
			Pagination.of(1, 10));

		Assert.assertEquals(1, page.getTotalCount());

		assertContains(
			_toSitePageTreeNode(
				0, grandchildLayout, childLayout.getExternalReferenceCode()),
			(List<SitePageTreeNode>)page.getItems());

		page = sitePageTreeNodeResource.getSiteSitePageTreeNodesPage(
			testGroup.getExternalReferenceCode(), RandomTestUtil.randomString(),
			null, null, Pagination.of(1, 10));

		Assert.assertEquals(0, page.getTotalCount());

		try (LogCapture logCapture = LoggerTestUtil.configureLog4JLogger(
				"com.liferay.portal.vulcan.internal.jaxrs.exception.mapper." +
					"WebApplicationExceptionMapper",
				LoggerTestUtil.WARN)) {

			HttpInvoker.HttpResponse httpResponse =
				sitePageTreeNodeResource.
					getSiteSitePageTreeNodesPageHttpResponse(
						testGroup.getExternalReferenceCode(),
						parentLayout.getExternalReferenceCode(), true, null,
						Pagination.of(1, 10));

			Assert.assertEquals(400, httpResponse.getStatusCode());
		}
	}

	private void _testGetSiteSitePageTreeNodesPageWithSearch()
		throws Exception {

		Layout parentLayout = LayoutTestUtil.addTypePortletLayout(testGroup);

		Layout childLayout = LayoutTestUtil.addTypePortletLayout(
			testGroup, parentLayout.getPlid());

		LayoutTestUtil.addTypePortletLayout(testGroup);

		Page<SitePageTreeNode> page =
			sitePageTreeNodeResource.getSiteSitePageTreeNodesPage(
				testGroup.getExternalReferenceCode(),
				RandomTestUtil.randomString(), null,
				childLayout.getName(LocaleUtil.getDefault()),
				Pagination.of(1, 10));

		Assert.assertEquals(1, page.getTotalCount());

		assertEquals(
			_toSitePageTreeNode(
				0, childLayout, parentLayout.getExternalReferenceCode()),
			page.fetchFirstItem());
	}

	private void _testGetSiteSitePageTreeNodeWithAncestorSitePageTreeNodesNestedField()
		throws Exception {

		Layout parentLayout = LayoutTestUtil.addTypePortletLayout(testGroup);

		Layout childLayout = LayoutTestUtil.addTypePortletLayout(
			testGroup, parentLayout.getPlid());

		Layout grandchildLayout = LayoutTestUtil.addTypePortletLayout(
			testGroup, childLayout.getPlid());

		SitePageTreeNode sitePageTreeNode =
			sitePageTreeNodeResource.getSiteSitePageTreeNode(
				testGroup.getExternalReferenceCode(),
				grandchildLayout.getExternalReferenceCode());

		Assert.assertNull(sitePageTreeNode.getAncestorSitePageTreeNodes());

		User user = UserTestUtil.getAdminUser(testCompany.getCompanyId());

		SitePageTreeNodeResource nestedFieldsSitePageTreeNodeResource =
			SitePageTreeNodeResource.builder(
			).authentication(
				user.getEmailAddress(), PropsValues.DEFAULT_ADMIN_PASSWORD
			).endpoint(
				testCompany.getVirtualHostname(),
				PortalUtil.getPortalServerPort(false), "http"
			).locale(
				LocaleUtil.getDefault()
			).parameters(
				"nestedFields", "ancestorSitePageTreeNodes"
			).build();

		sitePageTreeNode =
			nestedFieldsSitePageTreeNodeResource.getSiteSitePageTreeNode(
				testGroup.getExternalReferenceCode(),
				grandchildLayout.getExternalReferenceCode());

		assertEquals(
			Arrays.asList(
				_toSitePageTreeNode(2, parentLayout, null),
				_toSitePageTreeNode(
					1, childLayout, parentLayout.getExternalReferenceCode())),
			Arrays.asList(sitePageTreeNode.getAncestorSitePageTreeNodes()));
	}

	private void _testGetSiteSitePageTreeNodeWithDescendants()
		throws Exception {

		Layout parentLayout = LayoutTestUtil.addTypePortletLayout(testGroup);

		Layout childLayout = LayoutTestUtil.addTypePortletLayout(
			testGroup, parentLayout.getPlid());

		LayoutTestUtil.addTypePortletLayout(testGroup, childLayout.getPlid());
		LayoutTestUtil.addTypePortletLayout(testGroup, childLayout.getPlid());

		assertEquals(
			_toSitePageTreeNode(3, parentLayout, null),
			sitePageTreeNodeResource.getSiteSitePageTreeNode(
				testGroup.getExternalReferenceCode(),
				parentLayout.getExternalReferenceCode()));
		assertEquals(
			_toSitePageTreeNode(
				2, childLayout, parentLayout.getExternalReferenceCode()),
			sitePageTreeNodeResource.getSiteSitePageTreeNode(
				testGroup.getExternalReferenceCode(),
				childLayout.getExternalReferenceCode()));
	}

	private void _testGetSiteSitePageTreeNodeWithUnknownExternalReferenceCode()
		throws Exception {

		try (LogCapture logCapture = LoggerTestUtil.configureLog4JLogger(
				"com.liferay.portal.vulcan.internal.jaxrs.exception.mapper." +
					"WebApplicationExceptionMapper",
				LoggerTestUtil.WARN)) {

			HttpInvoker.HttpResponse httpResponse =
				sitePageTreeNodeResource.getSiteSitePageTreeNodeHttpResponse(
					testGroup.getExternalReferenceCode(),
					RandomTestUtil.randomString());

			Assert.assertEquals(404, httpResponse.getStatusCode());
		}
	}

	private SitePageTreeNode _toSitePageTreeNode(
		int descendantLayoutsCount, Layout layout,
		String parentLayoutExternalReferenceCode) {

		return new SitePageTreeNode() {
			{
				descendantSitePagesCount = descendantLayoutsCount;
				externalReferenceCode = layout.getExternalReferenceCode();
				hasChildSitePages = descendantLayoutsCount > 0;
				name = layout.getName(LocaleUtil.getDefault());
				parentSitePageExternalReferenceCode =
					parentLayoutExternalReferenceCode;
				type = Type.create("WidgetPage");
			}
		};
	}

	@Inject
	private LayoutLocalService _layoutLocalService;

	@Inject
	private ResourcePermissionLocalService _resourcePermissionLocalService;

	@Inject
	private RoleLocalService _roleLocalService;

}