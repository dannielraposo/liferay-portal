/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.portal.tools.rest.builder.test.resource.v2_0.test;

import com.liferay.arquillian.extension.junit.bridge.junit.Arquillian;
import com.liferay.petra.function.transform.TransformUtil;
import com.liferay.portal.kernel.feature.flag.constants.FeatureFlagConstants;
import com.liferay.portal.kernel.json.JSONObject;
import com.liferay.portal.kernel.json.JSONUtil;
import com.liferay.portal.kernel.test.util.HTTPTestUtil;
import com.liferay.portal.kernel.test.util.TestPropsValues;
import com.liferay.portal.kernel.util.Http;
import com.liferay.portal.kernel.util.PropsUtil;
import com.liferay.portal.test.rule.FeatureFlag;
import com.liferay.portal.test.rule.Inject;
import com.liferay.portal.vulcan.application.HeadlessApplicationProvider;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;

/**
 * @author Alejandro Tardín
 */
@RunWith(Arquillian.class)
public class FeatureFlagApplicationTestEntityResourceTest
	extends BaseFeatureFlagApplicationTestEntityResourceTestCase {

	@FeatureFlag(enable = false, value = _FEATURE_FLAG_KEY)
	@Override
	@Test
	public void testGetFeatureFlagApplicationTestEntitiesPage()
		throws Exception {

		_testGetFeatureFlagApplicationTestEntitiesPageWhenFeatureFlagIsDisabled();
		_testGetFeatureFlagApplicationTestEntitiesPageWhenFeatureFlagIsEnabled();
	}

	private int _getHttpCode(String path) throws Exception {
		return HTTPTestUtil.invokeToHttpCode(
			null, "portal-tools-rest-builder-test/" + path, Http.Method.GET);
	}

	private List<String> _getOpenAPIDocumentVersions() throws Exception {
		for (HeadlessApplicationProvider.Application application :
				_headlessApplicationProvider.getApplications(
					TestPropsValues.getCompanyId())) {

			if (!Objects.equals(
					application.getBasePath(),
					"/portal-tools-rest-builder-test")) {

				continue;
			}

			return TransformUtil.transform(
				application.getOpenAPIDocuments(),
				HeadlessApplicationProvider.OpenAPIDocument::getVersion);
		}

		return Collections.emptyList();
	}

	private void _setFeatureFlagEnabled(boolean enabled) {
		PropsUtil.set(
			FeatureFlagConstants.getKey(_FEATURE_FLAG_KEY),
			String.valueOf(enabled));
	}

	private void _testGetFeatureFlagApplicationTestEntitiesPageWhenFeatureFlagIsDisabled()
		throws Exception {

		_setFeatureFlagEnabled(false);

		assertHttpResponseStatusCode(
			404,
			featureFlagApplicationTestEntityResource.
				getFeatureFlagApplicationTestEntitiesPageHttpResponse());
		Assert.assertEquals(200, _getHttpCode("v1.0/openapi.json"));
		Assert.assertEquals(404, _getHttpCode("v2.0/openapi.json"));

		Assert.assertEquals(
			Collections.singletonList("v1.0"), _getOpenAPIDocumentVersions());

		JSONObject exceptionJSONObject = JSONUtil.getValueAsJSONObject(
			invokeGraphQLQuery(
				new GraphQLField(
					"featureFlagApplicationTestEntities",
					new GraphQLField("totalCount"))),
			"JSONArray/errors", "Object/0", "JSONObject/extensions",
			"JSONObject/exception");

		Assert.assertEquals(404, exceptionJSONObject.getInt("errno"));
	}

	private void _testGetFeatureFlagApplicationTestEntitiesPageWhenFeatureFlagIsEnabled()
		throws Exception {

		_setFeatureFlagEnabled(true);

		assertHttpResponseStatusCode(
			200,
			featureFlagApplicationTestEntityResource.
				getFeatureFlagApplicationTestEntitiesPageHttpResponse());
		Assert.assertEquals(200, _getHttpCode("v2.0/openapi.json"));

		Assert.assertEquals(
			Arrays.asList("v1.0", "v2.0"), _getOpenAPIDocumentVersions());

		Assert.assertEquals(
			0,
			JSONUtil.getValueAsLong(
				invokeGraphQLQuery(
					new GraphQLField(
						"featureFlagApplicationTestEntities",
						new GraphQLField("totalCount"))),
				"JSONObject/data",
				"JSONObject/featureFlagApplicationTestEntities",
				"Object/totalCount"));
	}

	private static final String _FEATURE_FLAG_KEY = "APPLICATION-123";

	@Inject
	private HeadlessApplicationProvider _headlessApplicationProvider;

}