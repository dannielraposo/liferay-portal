/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.portal.tools.rest.builder.test.internal.graphql.mutation.v2_0;

import com.liferay.petra.function.UnsafeConsumer;
import com.liferay.petra.function.UnsafeFunction;
import com.liferay.portal.kernel.service.GroupLocalService;
import com.liferay.portal.kernel.service.RoleLocalService;
import com.liferay.portal.tools.rest.builder.test.resource.v2_0.FeatureFlagAPITestEntityResource;
import com.liferay.portal.vulcan.accept.language.AcceptLanguage;
import com.liferay.portal.vulcan.batch.engine.resource.VulcanBatchEngineExportTaskResource;
import com.liferay.portal.vulcan.batch.engine.resource.VulcanBatchEngineImportTaskResource;
import com.liferay.portal.vulcan.graphql.annotation.GraphQLField;
import com.liferay.portal.vulcan.graphql.annotation.GraphQLName;

import jakarta.annotation.Generated;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.core.UriInfo;

import java.util.function.BiFunction;

import org.osgi.service.component.ComponentServiceObjects;

/**
 * @author Alejandro Tardín
 * @generated
 */
@Generated("")
public class Mutation {

	public static void
		setFeatureFlagAPITestEntityResourceComponentServiceObjects(
			ComponentServiceObjects<FeatureFlagAPITestEntityResource>
				featureFlagAPITestEntityResourceComponentServiceObjects) {

		_featureFlagAPITestEntityResourceComponentServiceObjects =
			featureFlagAPITestEntityResourceComponentServiceObjects;
	}

	@GraphQLField
	public Response createFeatureFlagAPITestEntitiesPageExportBatch(
			@GraphQLName("callbackURL") String callbackURL,
			@GraphQLName("contentType") String contentType,
			@GraphQLName("fieldNames") String fieldNames)
		throws Exception {

		if (!com.liferay.portal.kernel.feature.flag.FeatureFlagManagerUtil.
				isEnabled(_company.getCompanyId(), "API-123")) {

			throw new jakarta.ws.rs.NotFoundException();
		}

		return _applyComponentServiceObjects(
			_featureFlagAPITestEntityResourceComponentServiceObjects,
			this::_populateResourceContext,
			featureFlagAPITestEntityResource ->
				featureFlagAPITestEntityResource.
					postFeatureFlagAPITestEntitiesPageExportBatch(
						callbackURL, contentType, fieldNames));
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

	private <T, E1 extends Throwable, E2 extends Throwable> void
			_applyVoidComponentServiceObjects(
				ComponentServiceObjects<T> componentServiceObjects,
				UnsafeConsumer<T, E1> unsafeConsumer,
				UnsafeConsumer<T, E2> unsafeFunction)
		throws E1, E2 {

		T resource = componentServiceObjects.getService();

		try {
			unsafeConsumer.accept(resource);

			unsafeFunction.accept(resource);
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
		featureFlagAPITestEntityResource.setRoleLocalService(_roleLocalService);

		featureFlagAPITestEntityResource.setVulcanBatchEngineExportTaskResource(
			_vulcanBatchEngineExportTaskResource);

		featureFlagAPITestEntityResource.setVulcanBatchEngineImportTaskResource(
			_vulcanBatchEngineImportTaskResource);
	}

	private static ComponentServiceObjects<FeatureFlagAPITestEntityResource>
		_featureFlagAPITestEntityResourceComponentServiceObjects;

	private AcceptLanguage _acceptLanguage;
	private com.liferay.portal.kernel.model.Company _company;
	private GroupLocalService _groupLocalService;
	private HttpServletRequest _httpServletRequest;
	private HttpServletResponse _httpServletResponse;
	private RoleLocalService _roleLocalService;
	private BiFunction<Object, String, com.liferay.portal.kernel.search.Sort[]>
		_sortsBiFunction;
	private UriInfo _uriInfo;
	private com.liferay.portal.kernel.model.User _user;
	private VulcanBatchEngineExportTaskResource
		_vulcanBatchEngineExportTaskResource;
	private VulcanBatchEngineImportTaskResource
		_vulcanBatchEngineImportTaskResource;

}
// LIFERAY-REST-BUILDER-HASH:-1331464662