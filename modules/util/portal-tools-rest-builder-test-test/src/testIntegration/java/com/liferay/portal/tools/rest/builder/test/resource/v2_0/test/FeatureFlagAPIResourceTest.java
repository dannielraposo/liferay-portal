/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.portal.tools.rest.builder.test.resource.v2_0.test;

import com.liferay.arquillian.extension.junit.bridge.junit.Arquillian;
import com.liferay.portal.kernel.test.rule.AggregateTestRule;
import com.liferay.portal.kernel.test.util.HTTPTestUtil;
import com.liferay.portal.kernel.test.util.TestPropsValues;
import com.liferay.portal.kernel.util.Http;
import com.liferay.portal.test.rule.FeatureFlag;
import com.liferay.portal.test.rule.Inject;
import com.liferay.portal.test.rule.LiferayIntegrationTestRule;
import com.liferay.portal.vulcan.application.HeadlessApplicationProvider;

import java.util.ArrayList;
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
 * @author Alejandro Tardín
 */
@RunWith(Arquillian.class)
public class FeatureFlagAPIResourceTest {

	@ClassRule
	@Rule
	public static final AggregateTestRule aggregateTestRule =
		new LiferayIntegrationTestRule();

	@FeatureFlag(enable = false, value = _FEATURE_FLAG_KEY)
	@Test
	public void testFeatureFlagDisabled() throws Exception {
		Assert.assertEquals(404, _getHttpCode("v2.0/openapi.json"));
		Assert.assertEquals(
			404, _getHttpCode("v2.0/feature-flag-api-test-entities"));
		Assert.assertEquals(200, _getHttpCode("v1.0/openapi.json"));

		Assert.assertEquals(
			Collections.singletonList("v1.0"), _getOpenAPIDocumentVersions());
	}

	@FeatureFlag(_FEATURE_FLAG_KEY)
	@Test
	public void testFeatureFlagEnabled() throws Exception {
		Assert.assertEquals(200, _getHttpCode("v2.0/openapi.json"));
		Assert.assertEquals(
			200, _getHttpCode("v2.0/feature-flag-api-test-entities"));

		Assert.assertEquals(
			Arrays.asList("v1.0", "v2.0"), _getOpenAPIDocumentVersions());
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

			List<String> versions = new ArrayList<>();

			for (HeadlessApplicationProvider.OpenAPIDocument openAPIDocument :
					application.getOpenAPIDocuments()) {

				versions.add(openAPIDocument.getVersion());
			}

			return versions;
		}

		return Collections.emptyList();
	}

	private static final String _FEATURE_FLAG_KEY = "API-123";

	@Inject
	private HeadlessApplicationProvider _headlessApplicationProvider;

}