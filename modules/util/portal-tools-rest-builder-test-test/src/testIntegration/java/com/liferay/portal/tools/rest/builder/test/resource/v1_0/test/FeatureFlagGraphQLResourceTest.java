/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.portal.tools.rest.builder.test.resource.v1_0.test;

import com.liferay.arquillian.extension.junit.bridge.junit.Arquillian;
import com.liferay.portal.kernel.json.JSONFactoryUtil;
import com.liferay.portal.kernel.json.JSONObject;
import com.liferay.portal.kernel.json.JSONUtil;
import com.liferay.portal.kernel.test.rule.AggregateTestRule;
import com.liferay.portal.kernel.util.PortalUtil;
import com.liferay.portal.kernel.util.PropsValues;
import com.liferay.portal.test.rule.FeatureFlag;
import com.liferay.portal.test.rule.LiferayIntegrationTestRule;
import com.liferay.portal.tools.rest.builder.test.client.http.HttpInvoker;

import org.junit.Assert;
import org.junit.ClassRule;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;

/**
 * @author Alejandro Tardín
 */
@RunWith(Arquillian.class)
public class FeatureFlagGraphQLResourceTest {

	@ClassRule
	@Rule
	public static final AggregateTestRule aggregateTestRule =
		new LiferayIntegrationTestRule();

	@FeatureFlag(enable = false, value = _FEATURE_FLAG_KEY)
	@Test
	public void testMethodFeatureFlagDisabled() throws Exception {
		JSONObject dataJSONObject = JSONUtil.getValueAsJSONObject(
			_invoke("query {featureFlagMethodTestEntities {totalCount}}"),
			"JSONObject/data");

		Assert.assertTrue(dataJSONObject.isNull(_QUERY_FIELD));

		Assert.assertEquals(404, _getErrno(_invoke(_DELETE_MUTATION)));
	}

	@FeatureFlag(enable = false, value = _FEATURE_FLAG_KEY)
	@Test
	public void testMethodFeatureFlagDoesNotGuardSiblingOperation()
		throws Exception {

		JSONObject dataJSONObject = JSONUtil.getValueAsJSONObject(
			_invoke(
				"mutation {createFeatureFlagMethodTestEntity(" +
					"featureFlagMethodTestEntity: {}) {id}}"),
			"JSONObject/data");

		Assert.assertFalse(
			dataJSONObject.isNull("createFeatureFlagMethodTestEntity"));
	}

	@FeatureFlag(_FEATURE_FLAG_KEY)
	@Test
	public void testMethodFeatureFlagEnabled() throws Exception {
		Assert.assertEquals(
			0,
			JSONUtil.getValueAsLong(
				_invoke("query {featureFlagMethodTestEntities {totalCount}}"),
				"JSONObject/data", "JSONObject/" + _QUERY_FIELD,
				"Object/totalCount"));
		Assert.assertTrue(
			JSONUtil.getValueAsBoolean(
				_invoke(_DELETE_MUTATION), "JSONObject/data",
				"Object/deleteFeatureFlagMethodTestEntity"));
	}

	private int _getErrno(JSONObject jsonObject) {
		return JSONUtil.getValueAsJSONObject(
			jsonObject, "JSONArray/errors", "Object/0", "JSONObject/extensions",
			"JSONObject/exception"
		).getInt(
			"errno"
		);
	}

	private JSONObject _invoke(String query) throws Exception {
		HttpInvoker httpInvoker = HttpInvoker.newHttpInvoker();

		httpInvoker.body(
			JSONUtil.put(
				"query", query
			).toString(),
			"application/json");
		httpInvoker.httpMethod(HttpInvoker.HttpMethod.POST);
		httpInvoker.path(
			"http://localhost:" + PortalUtil.getPortalServerPort(false) +
				"/o/graphql");
		httpInvoker.userNameAndPassword(
			"test@liferay.com:" + PropsValues.DEFAULT_ADMIN_PASSWORD);

		HttpInvoker.HttpResponse httpResponse = httpInvoker.invoke();

		return JSONFactoryUtil.createJSONObject(httpResponse.getContent());
	}

	private static final String _DELETE_MUTATION =
		"mutation {deleteFeatureFlagMethodTestEntity(" +
			"featureFlagMethodTestEntityId: 1)}";

	private static final String _FEATURE_FLAG_KEY = "METHOD-123";

	private static final String _QUERY_FIELD = "featureFlagMethodTestEntities";

}