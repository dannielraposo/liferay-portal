/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.portal.tools.rest.builder.test.internal.graphql.query.v2_0;

import com.liferay.petra.function.UnsafeConsumer;
import com.liferay.petra.function.UnsafeFunction;
import com.liferay.portal.kernel.service.GroupLocalService;
import com.liferay.portal.kernel.service.ResourceActionLocalService;
import com.liferay.portal.kernel.service.ResourcePermissionLocalService;
import com.liferay.portal.kernel.service.RoleLocalService;
import com.liferay.portal.tools.rest.builder.test.dto.v2_0.FeatureFlagAPITestEntity;
import com.liferay.portal.tools.rest.builder.test.resource.v2_0.FeatureFlagAPITestEntityResource;
import com.liferay.portal.vulcan.accept.language.AcceptLanguage;
import com.liferay.portal.vulcan.graphql.annotation.GraphQLField;
import com.liferay.portal.vulcan.graphql.annotation.GraphQLName;
import com.liferay.portal.vulcan.pagination.Page;
import com.liferay.portal.vulcan.pagination.Pagination;

import jakarta.annotation.Generated;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import jakarta.ws.rs.core.UriInfo;

import java.util.Map;
import java.util.function.BiFunction;

import org.osgi.service.component.ComponentServiceObjects;

/**
 * @author Alejandro Tardín
 * @generated
 */
@Generated("")
public class Query {

	public static void
		setFeatureFlagAPITestEntityResourceComponentServiceObjects(
			ComponentServiceObjects<FeatureFlagAPITestEntityResource>
				featureFlagAPITestEntityResourceComponentServiceObjects) {

		_featureFlagAPITestEntityResourceComponentServiceObjects =
			featureFlagAPITestEntityResourceComponentServiceObjects;
	}

	/**
	 * Invoke this method with the command line:
	 *
	 * curl -H 'Content-Type: text/plain; charset=utf-8' -X 'POST' 'http://localhost:8080/o/graphql' -d $'{"query": "query {featureFlagAPITestEntities(page: ___, pageSize: ___){items {__}, page, pageSize, totalCount}}"}' -u 'test@liferay.com:test'
	 */
	@GraphQLField
	public FeatureFlagAPITestEntityPage featureFlagAPITestEntities(
			@GraphQLName("pageSize") int pageSize,
			@GraphQLName("page") int page)
		throws Exception {

		if (!com.liferay.portal.kernel.feature.flag.FeatureFlagManagerUtil.
				isEnabled(_company.getCompanyId(), "API-123")) {

			throw new jakarta.ws.rs.NotFoundException();
		}

		return _applyComponentServiceObjects(
			_featureFlagAPITestEntityResourceComponentServiceObjects,
			this::_populateResourceContext,
			featureFlagAPITestEntityResource ->
				new FeatureFlagAPITestEntityPage(
					featureFlagAPITestEntityResource.
						getFeatureFlagAPITestEntitiesPage(
							Pagination.of(page, pageSize))));
	}

	@GraphQLName("FeatureFlagAPITestEntityPage")
	public class FeatureFlagAPITestEntityPage {

		public FeatureFlagAPITestEntityPage(Page featureFlagAPITestEntityPage) {
			actions = featureFlagAPITestEntityPage.getActions();

			items = featureFlagAPITestEntityPage.getItems();
			lastPage = featureFlagAPITestEntityPage.getLastPage();
			page = featureFlagAPITestEntityPage.getPage();
			pageSize = featureFlagAPITestEntityPage.getPageSize();
			totalCount = featureFlagAPITestEntityPage.getTotalCount();
		}

		@GraphQLField
		protected Map<String, Map<String, String>> actions;

		@GraphQLField
		protected java.util.Collection<FeatureFlagAPITestEntity> items;

		@GraphQLField
		protected long lastPage;

		@GraphQLField
		protected long page;

		@GraphQLField
		protected long pageSize;

		@GraphQLField
		protected long totalCount;

	}

	private <T, R, E1 extends Throwable, E2 extends Throwable> R
			_applyComponentServiceObjects(
				ComponentServiceObjects<T> componentServiceObjects,
				UnsafeConsumer<T, E1> unsafeConsumer,
				UnsafeFunction<T, R, E2> unsafeFunction)
		throws E1, E2 {

		T resource = componentServiceObjects.getService();

		try {
			unsafeConsumer.accept(resource);

			return unsafeFunction.apply(resource);
		}
		finally {
			componentServiceObjects.ungetService(resource);
		}
	}

	private void _populateResourceContext(
			FeatureFlagAPITestEntityResource featureFlagAPITestEntityResource)
		throws Exception {

		featureFlagAPITestEntityResource.setContextAcceptLanguage(
			_acceptLanguage);
		featureFlagAPITestEntityResource.setContextCompany(_company);
		featureFlagAPITestEntityResource.setContextHttpServletRequest(
			_httpServletRequest);
		featureFlagAPITestEntityResource.setContextHttpServletResponse(
			_httpServletResponse);
		featureFlagAPITestEntityResource.setContextUriInfo(_uriInfo);
		featureFlagAPITestEntityResource.setContextUser(_user);
		featureFlagAPITestEntityResource.setGroupLocalService(
			_groupLocalService);
		featureFlagAPITestEntityResource.setResourceActionLocalService(
			_resourceActionLocalService);
		featureFlagAPITestEntityResource.setResourcePermissionLocalService(
			_resourcePermissionLocalService);
		featureFlagAPITestEntityResource.setRoleLocalService(_roleLocalService);
	}

	private static ComponentServiceObjects<FeatureFlagAPITestEntityResource>
		_featureFlagAPITestEntityResourceComponentServiceObjects;

	private AcceptLanguage _acceptLanguage;
	private com.liferay.portal.kernel.model.Company _company;
	private BiFunction
		<Object, String, com.liferay.portal.kernel.search.filter.Filter>
			_filterBiFunction;
	private GroupLocalService _groupLocalService;
	private HttpServletRequest _httpServletRequest;
	private HttpServletResponse _httpServletResponse;
	private ResourceActionLocalService _resourceActionLocalService;
	private ResourcePermissionLocalService _resourcePermissionLocalService;
	private RoleLocalService _roleLocalService;
	private BiFunction<Object, String, com.liferay.portal.kernel.search.Sort[]>
		_sortsBiFunction;
	private UriInfo _uriInfo;
	private com.liferay.portal.kernel.model.User _user;

}
// LIFERAY-REST-BUILDER-HASH:1787328229