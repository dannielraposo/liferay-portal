/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.portal.tools.rest.builder.test.resource.v1_0.test;

import com.liferay.arquillian.extension.junit.bridge.junit.Arquillian;
import com.liferay.portal.kernel.json.JSONObject;
import com.liferay.portal.kernel.test.rule.AggregateTestRule;
import com.liferay.portal.kernel.test.util.HTTPTestUtil;
import com.liferay.portal.kernel.util.Http;
import com.liferay.portal.kernel.util.PropsUtil;
import com.liferay.portal.test.rule.FeatureFlag;
import com.liferay.portal.test.rule.FeatureFlags;
import com.liferay.portal.test.rule.LiferayIntegrationTestRule;

import org.junit.Assert;
import org.junit.ClassRule;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;

/**
 * @author Alejandro Tardín
 */
@RunWith(Arquillian.class)
public class FeatureFlagResourceTest {

	@ClassRule
	@Rule
	public static final AggregateTestRule aggregateTestRule =
		new LiferayIntegrationTestRule();

	@FeatureFlag(enable = false, value = _FEATURE_FLAG_KEY_CLASS)
	@Test
	public void testClassFeatureFlagDisabled() throws Exception {
		Assert.assertEquals(404, _getHttpCode(_CLASS_PATH));

		Assert.assertFalse(_hasOperation(_CLASS_PATH, "get"));
		Assert.assertFalse(
			_hasOperation(_CLASS_PATH + "/export-batch", "post"));
	}

	@FeatureFlag(_FEATURE_FLAG_KEY_CLASS)
	@Test
	public void testClassFeatureFlagEnabled() throws Exception {
		Assert.assertEquals(200, _getHttpCode(_CLASS_PATH));

		Assert.assertTrue(_hasOperation(_CLASS_PATH, "get"));
		Assert.assertTrue(_hasOperation(_CLASS_PATH + "/export-batch", "post"));
		Assert.assertFalse(_hasFeatureFlagExtension());
	}

	@FeatureFlag(enable = false, value = _FEATURE_FLAG_KEY_METHOD)
	@Test
	public void testMethodFeatureFlagDisabled() throws Exception {
		Assert.assertEquals(404, _getHttpCode(_METHOD_PATH));

		Assert.assertFalse(_hasOperation(_METHOD_PATH, "get"));
	}

	@FeatureFlag(enable = false, value = _FEATURE_FLAG_KEY_METHOD)
	@Test
	public void testMethodFeatureFlagDoesNotGuardSiblingOperation()
		throws Exception {

		Assert.assertTrue(_hasOperation(_METHOD_PATH, "post"));
	}

	@FeatureFlag(_FEATURE_FLAG_KEY_METHOD)
	@Test
	public void testMethodFeatureFlagEnabled() throws Exception {
		Assert.assertEquals(200, _getHttpCode(_METHOD_PATH));

		Assert.assertTrue(_hasOperation(_METHOD_PATH, "get"));
		Assert.assertFalse(_hasFeatureFlagExtension());
	}

	@FeatureFlag(enable = false, value = _FEATURE_FLAG_KEY_METHOD)
	@Test
	public void testTogglingFeatureFlagTakesEffectImmediately()
		throws Exception {

		Assert.assertEquals(404, _getHttpCode(_METHOD_PATH));
		Assert.assertFalse(_hasOperation(_METHOD_PATH, "get"));

		PropsUtil.set(_FEATURE_FLAG_PROPERTY_KEY, Boolean.TRUE.toString());

		Assert.assertEquals(200, _getHttpCode(_METHOD_PATH));
		Assert.assertTrue(_hasOperation(_METHOD_PATH, "get"));

		PropsUtil.set(_FEATURE_FLAG_PROPERTY_KEY, Boolean.FALSE.toString());

		Assert.assertEquals(404, _getHttpCode(_METHOD_PATH));
		Assert.assertFalse(_hasOperation(_METHOD_PATH, "get"));
	}

	@FeatureFlags(
		featureFlags = {
			@FeatureFlag(enable = false, value = _FEATURE_FLAG_KEY_CLASS),
			@FeatureFlag(enable = false, value = _FEATURE_FLAG_KEY_METHOD)
		}
	)
	@Test
	public void testUnguardedResourceMethodIsUnaffected() throws Exception {
		Assert.assertEquals(200, _getHttpCode("test-entities"));

		Assert.assertTrue(_hasOperation("test-entities", "get"));
	}

	private int _getHttpCode(String path) throws Exception {
		return HTTPTestUtil.invokeToHttpCode(
			null, _BASE_PATH + path, Http.Method.GET);
	}

	private JSONObject _getOpenAPIJSONObject() throws Exception {
		return HTTPTestUtil.invokeToJSONObject(
			null, _BASE_PATH + "openapi.json", Http.Method.GET);
	}

	private boolean _hasFeatureFlagExtension() throws Exception {
		String json = String.valueOf(_getOpenAPIJSONObject());

		return json.contains("x-feature-flag");
	}

	private boolean _hasOperation(String path, String httpMethod)
		throws Exception {

		JSONObject jsonObject = _getOpenAPIJSONObject();

		JSONObject pathsJSONObject = jsonObject.getJSONObject("paths");

		String versionedPath = "/v1.0/" + path;

		if (!pathsJSONObject.has(versionedPath)) {
			return false;
		}

		JSONObject pathJSONObject = pathsJSONObject.getJSONObject(
			versionedPath);

		return pathJSONObject.has(httpMethod);
	}

	private static final String _BASE_PATH =
		"portal-tools-rest-builder-test/v1.0/";

	private static final String _CLASS_PATH =
		"feature-flag-class-test-entities";

	private static final String _FEATURE_FLAG_KEY_CLASS = "CLASS-123";

	private static final String _FEATURE_FLAG_KEY_METHOD = "METHOD-123";

	private static final String _FEATURE_FLAG_PROPERTY_KEY =
		"feature.flag." + _FEATURE_FLAG_KEY_METHOD;

	private static final String _METHOD_PATH =
		"feature-flag-method-test-entities";

}