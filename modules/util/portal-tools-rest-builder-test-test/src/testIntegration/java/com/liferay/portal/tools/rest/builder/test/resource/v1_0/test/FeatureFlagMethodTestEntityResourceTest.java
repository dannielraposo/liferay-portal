/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.portal.tools.rest.builder.test.resource.v1_0.test;

import com.liferay.arquillian.extension.junit.bridge.junit.Arquillian;
import com.liferay.portal.configuration.test.util.ConfigurationTestUtil;
import com.liferay.portal.kernel.feature.flag.constants.FeatureFlagConstants;
import com.liferay.portal.kernel.json.JSONObject;
import com.liferay.portal.kernel.json.JSONUtil;
import com.liferay.portal.kernel.test.util.HTTPTestUtil;
import com.liferay.portal.kernel.test.util.RandomTestUtil;
import com.liferay.portal.kernel.util.HashMapBuilder;
import com.liferay.portal.kernel.util.HashMapDictionaryBuilder;
import com.liferay.portal.kernel.util.Http;
import com.liferay.portal.kernel.util.PropsUtil;
import com.liferay.portal.test.rule.FeatureFlag;

import org.junit.Assert;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;

/**
 * @author Alejandro Tardín
 */
@RunWith(Arquillian.class)
public class FeatureFlagMethodTestEntityResourceTest
	extends BaseFeatureFlagMethodTestEntityResourceTestCase {

	@Ignore
	@Override
	@Test
	public void testBatchEngineDeleteImportTask() throws Exception {
		super.testBatchEngineDeleteImportTask();
	}

	@FeatureFlag(enable = false, value = _FEATURE_FLAG_KEY)
	@Override
	@Test
	public void testDeleteFeatureFlagMethodTestEntity() throws Exception {
		_testDeleteFeatureFlagMethodTestEntityWhenFeatureFlagIsDisabled();
		_testDeleteFeatureFlagMethodTestEntityWhenFeatureFlagIsEnabled();
	}

	@FeatureFlag(enable = false, value = _FEATURE_FLAG_KEY)
	@Override
	@Test
	public void testDeleteFeatureFlagMethodTestEntityBatch() throws Exception {
		_testDeleteFeatureFlagMethodTestEntityBatchWhenFeatureFlagIsDisabled();
		_testDeleteFeatureFlagMethodTestEntityBatchWhenFeatureFlagIsEnabled();
	}

	@FeatureFlag(enable = false, value = _FEATURE_FLAG_KEY)
	@Override
	@Test
	public void testGetFeatureFlagMethodTestEntitiesPage() throws Exception {
		_testGetFeatureFlagMethodTestEntitiesPageWhenFeatureFlagIsDisabled();
		_testGetFeatureFlagMethodTestEntitiesPageWhenFeatureFlagIsEnabled();
		_testGetFeatureFlagMethodTestEntitiesPageWhenOperationIdIsExcluded();
	}

	@FeatureFlag(enable = false, value = _FEATURE_FLAG_KEY)
	@Override
	@Test
	public void testGraphQLDeleteFeatureFlagMethodTestEntity()
		throws Exception {

		_testGraphQLDeleteFeatureFlagMethodTestEntityWhenFeatureFlagIsDisabled();
		_testGraphQLDeleteFeatureFlagMethodTestEntityWhenFeatureFlagIsEnabled();
	}

	@FeatureFlag(enable = false, value = _FEATURE_FLAG_KEY)
	@Override
	@Test
	public void testGraphQLGetFeatureFlagMethodTestEntitiesPage()
		throws Exception {

		_testGraphQLGetFeatureFlagMethodTestEntitiesPageWhenFeatureFlagIsDisabled();
		_testGraphQLGetFeatureFlagMethodTestEntitiesPageWhenFeatureFlagIsEnabled();
	}

	@FeatureFlag(enable = false, value = _FEATURE_FLAG_KEY)
	@Override
	@Test
	public void testGraphQLPostFeatureFlagMethodTestEntity() throws Exception {
		_testGraphQLPostFeatureFlagMethodTestEntityWhenFeatureFlagIsDisabled();
	}

	@FeatureFlag(enable = false, value = _FEATURE_FLAG_KEY)
	@Override
	@Test
	public void testPostFeatureFlagMethodTestEntity() throws Exception {
		_testPostFeatureFlagMethodTestEntityWhenFeatureFlagIsDisabled();
	}

	private int _getErrno(JSONObject jsonObject) {
		JSONObject exceptionJSONObject = JSONUtil.getValueAsJSONObject(
			jsonObject, "JSONArray/errors", "Object/0", "JSONObject/extensions",
			"JSONObject/exception");

		return exceptionJSONObject.getInt("errno");
	}

	private boolean _hasFeatureFlagExtension() throws Exception {
		String json = HTTPTestUtil.invokeToString(
			null, "portal-tools-rest-builder-test/v1.0/openapi.json",
			Http.Method.GET);

		return json.contains("x-feature-flag");
	}

	private boolean _hasOperation(String httpMethod, String path)
		throws Exception {

		JSONObject jsonObject = HTTPTestUtil.invokeToJSONObject(
			null, "portal-tools-rest-builder-test/v1.0/openapi.json",
			Http.Method.GET);

		JSONObject pathsJSONObject = jsonObject.getJSONObject("paths");

		String versionedPath = "/v1.0/" + path;

		if (!pathsJSONObject.has(versionedPath)) {
			return false;
		}

		JSONObject pathJSONObject = pathsJSONObject.getJSONObject(
			versionedPath);

		return pathJSONObject.has(httpMethod);
	}

	private void _setFeatureFlagEnabled(boolean enabled) {
		PropsUtil.set(
			FeatureFlagConstants.getKey(_FEATURE_FLAG_KEY),
			String.valueOf(enabled));
	}

	private void _testDeleteFeatureFlagMethodTestEntityBatchWhenFeatureFlagIsDisabled()
		throws Exception {

		_setFeatureFlagEnabled(false);

		assertHttpResponseStatusCode(
			404,
			featureFlagMethodTestEntityResource.
				deleteFeatureFlagMethodTestEntityBatchHttpResponse(
					null,
					JSONUtil.putAll(
						JSONUtil.put("id", RandomTestUtil.randomLong()))));

		Assert.assertFalse(_hasOperation("delete", _PATH + "/batch"));
	}

	private void _testDeleteFeatureFlagMethodTestEntityBatchWhenFeatureFlagIsEnabled()
		throws Exception {

		_setFeatureFlagEnabled(true);

		testDeleteFeatureFlagMethodTestEntityBatch_deleteFeatureFlagMethodTestEntity(
			202, null, RandomTestUtil.randomLong());

		Assert.assertTrue(_hasOperation("delete", _PATH + "/batch"));
	}

	private void _testDeleteFeatureFlagMethodTestEntityWhenFeatureFlagIsDisabled()
		throws Exception {

		_setFeatureFlagEnabled(false);

		assertHttpResponseStatusCode(
			404,
			featureFlagMethodTestEntityResource.
				deleteFeatureFlagMethodTestEntityHttpResponse(
					RandomTestUtil.randomLong()));

		Assert.assertFalse(
			_hasOperation(
				"delete", _PATH + "/{featureFlagMethodTestEntityId}"));
	}

	private void _testDeleteFeatureFlagMethodTestEntityWhenFeatureFlagIsEnabled()
		throws Exception {

		_setFeatureFlagEnabled(true);

		assertHttpResponseStatusCode(
			204,
			featureFlagMethodTestEntityResource.
				deleteFeatureFlagMethodTestEntityHttpResponse(
					RandomTestUtil.randomLong()));

		Assert.assertTrue(
			_hasOperation(
				"delete", _PATH + "/{featureFlagMethodTestEntityId}"));
	}

	private void _testGetFeatureFlagMethodTestEntitiesPageWhenFeatureFlagIsDisabled()
		throws Exception {

		_setFeatureFlagEnabled(false);

		assertHttpResponseStatusCode(
			404,
			featureFlagMethodTestEntityResource.
				getFeatureFlagMethodTestEntitiesPageHttpResponse());
		assertHttpResponseStatusCode(
			404,
			featureFlagMethodTestEntityResource.
				postFeatureFlagMethodTestEntitiesPageExportBatchHttpResponse(
					null, null, null));
		Assert.assertEquals(
			200,
			HTTPTestUtil.invokeToHttpCode(
				null, "portal-tools-rest-builder-test/v1.0/test-entities",
				Http.Method.GET));

		Assert.assertFalse(_hasOperation("get", _PATH));
		Assert.assertFalse(_hasOperation("post", _PATH + "/export-batch"));
		Assert.assertTrue(_hasOperation("get", "test-entities"));
	}

	private void _testGetFeatureFlagMethodTestEntitiesPageWhenFeatureFlagIsEnabled()
		throws Exception {

		_setFeatureFlagEnabled(true);

		assertHttpResponseStatusCode(
			200,
			featureFlagMethodTestEntityResource.
				getFeatureFlagMethodTestEntitiesPageHttpResponse());
		assertHttpResponseStatusCode(
			202,
			featureFlagMethodTestEntityResource.
				postFeatureFlagMethodTestEntitiesPageExportBatchHttpResponse(
					null, null, null));

		Assert.assertFalse(_hasFeatureFlagExtension());
		Assert.assertTrue(_hasOperation("get", _PATH));
		Assert.assertTrue(_hasOperation("post", _PATH + "/export-batch"));
	}

	private void _testGetFeatureFlagMethodTestEntitiesPageWhenOperationIdIsExcluded()
		throws Exception {

		String pid = ConfigurationTestUtil.createFactoryConfiguration(
			"com.liferay.portal.vulcan.internal.configuration." +
				"VulcanConfiguration",
			HashMapDictionaryBuilder.<String, Object>put(
				"excludedOperationIds", "getFeatureFlagMethodTestEntitiesPage"
			).put(
				"graphQLEnabled", true
			).put(
				"path", "/portal-tools-rest-builder-test"
			).put(
				"restEnabled", true
			).build());

		try {
			_setFeatureFlagEnabled(true);

			assertHttpResponseStatusCode(
				409,
				featureFlagMethodTestEntityResource.
					getFeatureFlagMethodTestEntitiesPageHttpResponse());

			Assert.assertFalse(_hasOperation("get", _PATH));
			Assert.assertTrue(_hasOperation("post", _PATH));

			_setFeatureFlagEnabled(false);

			assertHttpResponseStatusCode(
				404,
				featureFlagMethodTestEntityResource.
					getFeatureFlagMethodTestEntitiesPageHttpResponse());
		}
		finally {
			ConfigurationTestUtil.deleteConfiguration(pid);
		}
	}

	private void _testGraphQLDeleteFeatureFlagMethodTestEntityWhenFeatureFlagIsDisabled()
		throws Exception {

		_setFeatureFlagEnabled(false);

		Assert.assertEquals(
			404,
			_getErrno(
				invokeGraphQLMutation(
					new GraphQLField(
						"deleteFeatureFlagMethodTestEntity",
						HashMapBuilder.<String, Object>put(
							"featureFlagMethodTestEntityId",
							RandomTestUtil.randomLong()
						).build()))));
	}

	private void _testGraphQLDeleteFeatureFlagMethodTestEntityWhenFeatureFlagIsEnabled()
		throws Exception {

		_setFeatureFlagEnabled(true);

		Assert.assertTrue(
			JSONUtil.getValueAsBoolean(
				invokeGraphQLMutation(
					new GraphQLField(
						"deleteFeatureFlagMethodTestEntity",
						HashMapBuilder.<String, Object>put(
							"featureFlagMethodTestEntityId",
							RandomTestUtil.randomLong()
						).build())),
				"JSONObject/data", "Object/deleteFeatureFlagMethodTestEntity"));
	}

	private void _testGraphQLGetFeatureFlagMethodTestEntitiesPageWhenFeatureFlagIsDisabled()
		throws Exception {

		_setFeatureFlagEnabled(false);

		Assert.assertEquals(
			404,
			_getErrno(
				invokeGraphQLQuery(
					new GraphQLField(
						"featureFlagMethodTestEntities",
						new GraphQLField("totalCount")))));
	}

	private void _testGraphQLGetFeatureFlagMethodTestEntitiesPageWhenFeatureFlagIsEnabled()
		throws Exception {

		_setFeatureFlagEnabled(true);

		Assert.assertEquals(
			0,
			JSONUtil.getValueAsLong(
				invokeGraphQLQuery(
					new GraphQLField(
						"featureFlagMethodTestEntities",
						new GraphQLField("totalCount"))),
				"JSONObject/data", "JSONObject/featureFlagMethodTestEntities",
				"Object/totalCount"));
	}

	private void _testGraphQLPostFeatureFlagMethodTestEntityWhenFeatureFlagIsDisabled()
		throws Exception {

		_setFeatureFlagEnabled(false);

		JSONObject dataJSONObject = JSONUtil.getValueAsJSONObject(
			invokeGraphQLMutation(
				new GraphQLField(
					"createFeatureFlagMethodTestEntity",
					HashMapBuilder.<String, Object>put(
						"featureFlagMethodTestEntity", "{}"
					).build(),
					new GraphQLField("id"))),
			"JSONObject/data");

		Assert.assertFalse(
			dataJSONObject.isNull("createFeatureFlagMethodTestEntity"));
	}

	private void _testPostFeatureFlagMethodTestEntityWhenFeatureFlagIsDisabled()
		throws Exception {

		_setFeatureFlagEnabled(false);

		assertHttpResponseStatusCode(
			200,
			featureFlagMethodTestEntityResource.
				postFeatureFlagMethodTestEntityHttpResponse(
					randomFeatureFlagMethodTestEntity()));

		Assert.assertTrue(_hasOperation("post", _PATH));
		Assert.assertTrue(_hasOperation("post", _PATH + "/batch"));
	}

	private static final String _FEATURE_FLAG_KEY = "METHOD-123";

	private static final String _PATH = "feature-flag-method-test-entities";

}