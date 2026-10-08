/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.portal.tools.rest.builder.test.resource.v1_0.test;

import com.liferay.arquillian.extension.junit.bridge.junit.Arquillian;
import com.liferay.petra.lang.SafeCloseable;
import com.liferay.portal.kernel.feature.flag.constants.FeatureFlagConstants;
import com.liferay.portal.kernel.security.auth.CompanyThreadLocal;
import com.liferay.portal.kernel.test.AssertUtils;
import com.liferay.portal.kernel.test.util.FeatureFlagTestUtil;
import com.liferay.portal.kernel.test.util.TestPropsValues;
import com.liferay.portal.kernel.util.HashMapBuilder;
import com.liferay.portal.kernel.util.PropsUtil;
import com.liferay.portal.kernel.util.SetUtil;
import com.liferay.portal.test.rule.FeatureFlag;
import com.liferay.portal.test.rule.Inject;
import com.liferay.portal.test.rule.LiferayIntegrationTestRule;
import com.liferay.portal.tools.rest.builder.test.dto.v1_0.FeatureFlagMethodTestEntity;
import com.liferay.portal.vulcan.batch.engine.VulcanBatchEngineTaskItemDelegate;
import com.liferay.portal.vulcan.batch.engine.VulcanBatchEngineTaskItemDelegateRegistry;
import com.liferay.portal.vulcan.pagination.Page;
import com.liferay.portal.vulcan.pagination.Pagination;

import jakarta.ws.rs.NotSupportedException;

import java.io.Serializable;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import org.junit.Assert;
import org.junit.Before;
import org.junit.ClassRule;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;

/**
 * @author Carlos Correa
 */
@RunWith(Arquillian.class)
public class FeatureFlagMethodTestEntityVulcanBatchEngineTaskItemDelegateTest {

	@ClassRule
	@Rule
	public static final LiferayIntegrationTestRule liferayIntegrationTestRule =
		new LiferayIntegrationTestRule();

	@Before
	public void setUp() throws Exception {
		_vulcanBatchEngineTaskItemDelegate =
			(VulcanBatchEngineTaskItemDelegate<FeatureFlagMethodTestEntity>)
				_vulcanBatchEngineTaskItemDelegateRegistry.
					getVulcanBatchEngineTaskItemDelegate(
						TestPropsValues.getCompanyId(),
						FeatureFlagMethodTestEntity.class.getName());
	}

	@FeatureFlag(enable = false, value = _FEATURE_FLAG_KEY)
	@Test
	public void testCreate() throws Exception {
		try (SafeCloseable safeCloseable =
				CompanyThreadLocal.setCompanyIdWithSafeCloseable(
					TestPropsValues.getCompanyId())) {

			Map<String, Serializable> parameters =
				HashMapBuilder.<String, Serializable>put(
					"createStrategy", "UPSERT"
				).build();

			_setFeatureFlagEnabled(false);

			_vulcanBatchEngineTaskItemDelegate.create(
				Collections.singletonList(new FeatureFlagMethodTestEntity()),
				new HashMap<>());

			AssertUtils.assertFailure(
				NotSupportedException.class,
				"Create strategy \"UPSERT\" is not supported for " +
					"FeatureFlagMethodTestEntity",
				() -> _vulcanBatchEngineTaskItemDelegate.create(
					Collections.singletonList(
						new FeatureFlagMethodTestEntity()),
					parameters));

			_setFeatureFlagEnabled(true);

			_vulcanBatchEngineTaskItemDelegate.create(
				Collections.singletonList(new FeatureFlagMethodTestEntity()),
				parameters);
		}
	}

	@FeatureFlag(enable = false, value = _FEATURE_FLAG_KEY)
	@Test
	public void testDelete() throws Exception {
		try (SafeCloseable safeCloseable =
				CompanyThreadLocal.setCompanyIdWithSafeCloseable(
					TestPropsValues.getCompanyId())) {

			_setFeatureFlagEnabled(false);

			AssertUtils.assertFailure(
				UnsupportedOperationException.class,
				"This method needs to be implemented",
				() -> _vulcanBatchEngineTaskItemDelegate.delete(
					Collections.singletonList(
						new FeatureFlagMethodTestEntity()),
					new HashMap<>()));

			_setFeatureFlagEnabled(true);

			_vulcanBatchEngineTaskItemDelegate.delete(
				Collections.singletonList(new FeatureFlagMethodTestEntity()),
				new HashMap<>());
		}
	}

	@FeatureFlag(enable = false, value = _FEATURE_FLAG_KEY)
	@Test
	public void testGetAvailableCreateStrategies() throws Exception {
		try (SafeCloseable safeCloseable =
				CompanyThreadLocal.setCompanyIdWithSafeCloseable(
					TestPropsValues.getCompanyId())) {

			_setFeatureFlagEnabled(false);

			Assert.assertEquals(
				SetUtil.fromArray("INSERT"),
				_vulcanBatchEngineTaskItemDelegate.
					getAvailableCreateStrategies());

			_setFeatureFlagEnabled(true);

			Assert.assertEquals(
				SetUtil.fromArray("INSERT", "UPSERT"),
				_vulcanBatchEngineTaskItemDelegate.
					getAvailableCreateStrategies());
		}
	}

	@FeatureFlag(enable = false, value = _FEATURE_FLAG_KEY)
	@Test
	public void testGetAvailableUpdateStrategies() throws Exception {
		try (SafeCloseable safeCloseable =
				CompanyThreadLocal.setCompanyIdWithSafeCloseable(
					TestPropsValues.getCompanyId())) {

			_setFeatureFlagEnabled(false);

			Assert.assertEquals(
				Collections.emptySet(),
				_vulcanBatchEngineTaskItemDelegate.
					getAvailableUpdateStrategies());

			_setFeatureFlagEnabled(true);

			Assert.assertEquals(
				SetUtil.fromArray("PARTIAL_UPDATE"),
				_vulcanBatchEngineTaskItemDelegate.
					getAvailableUpdateStrategies());
		}
	}

	@FeatureFlag(enable = false, value = _FEATURE_FLAG_KEY)
	@Test
	public void testRead() throws Exception {
		try (SafeCloseable safeCloseable =
				CompanyThreadLocal.setCompanyIdWithSafeCloseable(
					TestPropsValues.getCompanyId())) {

			_setFeatureFlagEnabled(false);

			AssertUtils.assertFailure(
				UnsupportedOperationException.class,
				"This method needs to be implemented",
				() -> _vulcanBatchEngineTaskItemDelegate.read(
					null, Pagination.of(1, 20), null, new HashMap<>(), null));

			_setFeatureFlagEnabled(true);

			Page<FeatureFlagMethodTestEntity> page =
				_vulcanBatchEngineTaskItemDelegate.read(
					null, Pagination.of(1, 20), null, new HashMap<>(), null);

			Assert.assertEquals(0, page.getTotalCount());
		}
	}

	@FeatureFlag(enable = false, value = _FEATURE_FLAG_KEY)
	@Test
	public void testUpdate() throws Exception {
		try (SafeCloseable safeCloseable =
				CompanyThreadLocal.setCompanyIdWithSafeCloseable(
					TestPropsValues.getCompanyId())) {

			Map<String, Serializable> parameters =
				HashMapBuilder.<String, Serializable>put(
					"updateStrategy", "PARTIAL_UPDATE"
				).build();

			_setFeatureFlagEnabled(false);

			AssertUtils.assertFailure(
				NotSupportedException.class,
				"Update strategy \"PARTIAL_UPDATE\" is not supported for " +
					"FeatureFlagMethodTestEntity",
				() -> _vulcanBatchEngineTaskItemDelegate.update(
					Collections.singletonList(
						new FeatureFlagMethodTestEntity()),
					parameters));

			_setFeatureFlagEnabled(true);

			_vulcanBatchEngineTaskItemDelegate.update(
				Collections.singletonList(new FeatureFlagMethodTestEntity()),
				parameters);
		}
	}

	private void _setFeatureFlagEnabled(boolean enabled) throws Exception {
		PropsUtil.set(
			FeatureFlagConstants.getKey(_FEATURE_FLAG_KEY),
			String.valueOf(enabled));

		FeatureFlagTestUtil.invokeFeatureFlagListeners(
			TestPropsValues.getCompanyId(), enabled, _FEATURE_FLAG_KEY);
	}

	private static final String _FEATURE_FLAG_KEY = "METHOD-123";

	private VulcanBatchEngineTaskItemDelegate<FeatureFlagMethodTestEntity>
		_vulcanBatchEngineTaskItemDelegate;

	@Inject
	private VulcanBatchEngineTaskItemDelegateRegistry
		_vulcanBatchEngineTaskItemDelegateRegistry;

}