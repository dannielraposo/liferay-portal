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
import com.liferay.portal.test.rule.FeatureFlag;
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
public class FeatureFlagBatchResourceTest {

	@ClassRule
	@Rule
	public static final AggregateTestRule aggregateTestRule =
		new LiferayIntegrationTestRule();

	@FeatureFlag(enable = false, value = _FEATURE_FLAG_KEY)
	@Test
	public void testDerivedBatchEndpointsFeatureFlagDisabled()
		throws Exception {

		Assert.assertEquals(404, _getHttpCode(_EXPORT_BATCH_PATH));

		Assert.assertFalse(_hasOperation(_EXPORT_BATCH_PATH, "post"));
		Assert.assertFalse(_hasOperation(_BATCH_PATH, "delete"));

		Assert.assertTrue(_hasOperation(_BATCH_PATH, "post"));
	}

	@FeatureFlag(_FEATURE_FLAG_KEY)
	@Test
	public void testDerivedBatchEndpointsFeatureFlagEnabled() throws Exception {
		Assert.assertEquals(202, _getHttpCode(_EXPORT_BATCH_PATH));

		Assert.assertTrue(_hasOperation(_EXPORT_BATCH_PATH, "post"));
		Assert.assertTrue(_hasOperation(_BATCH_PATH, "delete"));
		Assert.assertTrue(_hasOperation(_BATCH_PATH, "post"));
	}

	private int _getHttpCode(String path) throws Exception {
		return HTTPTestUtil.invokeToHttpCode(
			null, _BASE_PATH + path, Http.Method.POST);
	}

	private boolean _hasOperation(String path, String httpMethod)
		throws Exception {

		JSONObject jsonObject = HTTPTestUtil.invokeToJSONObject(
			null, _BASE_PATH + "openapi.json", Http.Method.GET);

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

	private static final String _BATCH_PATH =
		"feature-flag-method-test-entities/batch";

	private static final String _EXPORT_BATCH_PATH =
		"feature-flag-method-test-entities/export-batch";

	private static final String _FEATURE_FLAG_KEY = "METHOD-123";

}