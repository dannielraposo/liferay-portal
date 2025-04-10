/**
 * SPDX-FileCopyrightText: (c) 2025 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.portal.tools.service.builder.test.service.persistence.test;

import com.liferay.arquillian.extension.junit.bridge.junit.Arquillian;
import com.liferay.portal.kernel.dao.orm.ActionableDynamicQuery;
import com.liferay.portal.kernel.dao.orm.DynamicQuery;
import com.liferay.portal.kernel.dao.orm.DynamicQueryFactoryUtil;
import com.liferay.portal.kernel.dao.orm.ProjectionFactoryUtil;
import com.liferay.portal.kernel.dao.orm.QueryUtil;
import com.liferay.portal.kernel.dao.orm.RestrictionsFactoryUtil;
import com.liferay.portal.kernel.test.rule.AggregateTestRule;
import com.liferay.portal.kernel.test.util.RandomTestUtil;
import com.liferay.portal.kernel.transaction.Propagation;
import com.liferay.portal.kernel.util.IntegerWrapper;
import com.liferay.portal.kernel.util.OrderByComparator;
import com.liferay.portal.kernel.util.OrderByComparatorFactoryUtil;
import com.liferay.portal.test.rule.LiferayIntegrationTestRule;
import com.liferay.portal.test.rule.PersistenceTestRule;
import com.liferay.portal.test.rule.TransactionalTestRule;
import com.liferay.portal.tools.service.builder.test.exception.NoSuchArithmeticEntryException;
import com.liferay.portal.tools.service.builder.test.model.ArithmeticEntry;
import com.liferay.portal.tools.service.builder.test.service.ArithmeticEntryLocalServiceUtil;
import com.liferay.portal.tools.service.builder.test.service.persistence.ArithmeticEntryPersistence;
import com.liferay.portal.tools.service.builder.test.service.persistence.ArithmeticEntryUtil;

import java.io.Serializable;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.ClassRule;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;

/**
 * @generated
 */
@RunWith(Arquillian.class)
public class ArithmeticEntryPersistenceTest {

	@ClassRule
	@Rule
	public static final AggregateTestRule aggregateTestRule =
		new AggregateTestRule(
			new LiferayIntegrationTestRule(), PersistenceTestRule.INSTANCE,
			new TransactionalTestRule(
				Propagation.REQUIRED,
				"com.liferay.portal.tools.service.builder.test.service"));

	@Before
	public void setUp() {
		_persistence = ArithmeticEntryUtil.getPersistence();

		Class<?> clazz = _persistence.getClass();

		_dynamicQueryClassLoader = clazz.getClassLoader();
	}

	@After
	public void tearDown() throws Exception {
		Iterator<ArithmeticEntry> iterator = _arithmeticEntries.iterator();

		while (iterator.hasNext()) {
			_persistence.remove(iterator.next());

			iterator.remove();
		}
	}

	@Test
	public void testCreate() throws Exception {
		long pk = RandomTestUtil.nextLong();

		ArithmeticEntry arithmeticEntry = _persistence.create(pk);

		Assert.assertNotNull(arithmeticEntry);

		Assert.assertEquals(arithmeticEntry.getPrimaryKey(), pk);
	}

	@Test
	public void testRemove() throws Exception {
		ArithmeticEntry newArithmeticEntry = addArithmeticEntry();

		_persistence.remove(newArithmeticEntry);

		ArithmeticEntry existingArithmeticEntry =
			_persistence.fetchByPrimaryKey(newArithmeticEntry.getPrimaryKey());

		Assert.assertNull(existingArithmeticEntry);
	}

	@Test
	public void testUpdateNew() throws Exception {
		addArithmeticEntry();
	}

	@Test
	public void testUpdateExisting() throws Exception {
		long pk = RandomTestUtil.nextLong();

		ArithmeticEntry newArithmeticEntry = _persistence.create(pk);

		newArithmeticEntry.setNumber1(RandomTestUtil.nextLong());

		newArithmeticEntry.setNumber2(RandomTestUtil.nextLong());

		_arithmeticEntries.add(_persistence.update(newArithmeticEntry));

		ArithmeticEntry existingArithmeticEntry = _persistence.findByPrimaryKey(
			newArithmeticEntry.getPrimaryKey());

		Assert.assertEquals(
			existingArithmeticEntry.getArithmeticEntryId(),
			newArithmeticEntry.getArithmeticEntryId());
		Assert.assertEquals(
			existingArithmeticEntry.getNumber1(),
			newArithmeticEntry.getNumber1());
		Assert.assertEquals(
			existingArithmeticEntry.getNumber2(),
			newArithmeticEntry.getNumber2());
	}

	@Test
	public void testFindByPrimaryKeyExisting() throws Exception {
		ArithmeticEntry newArithmeticEntry = addArithmeticEntry();

		ArithmeticEntry existingArithmeticEntry = _persistence.findByPrimaryKey(
			newArithmeticEntry.getPrimaryKey());

		Assert.assertEquals(existingArithmeticEntry, newArithmeticEntry);
	}

	@Test(expected = NoSuchArithmeticEntryException.class)
	public void testFindByPrimaryKeyMissing() throws Exception {
		long pk = RandomTestUtil.nextLong();

		_persistence.findByPrimaryKey(pk);
	}

	@Test
	public void testFindAll() throws Exception {
		_persistence.findAll(
			QueryUtil.ALL_POS, QueryUtil.ALL_POS, getOrderByComparator());
	}

	protected OrderByComparator<ArithmeticEntry> getOrderByComparator() {
		return OrderByComparatorFactoryUtil.create(
			"ArithmeticEntry", "arithmeticEntryId", true, "number1", true,
			"number2", true);
	}

	@Test
	public void testFetchByPrimaryKeyExisting() throws Exception {
		ArithmeticEntry newArithmeticEntry = addArithmeticEntry();

		ArithmeticEntry existingArithmeticEntry =
			_persistence.fetchByPrimaryKey(newArithmeticEntry.getPrimaryKey());

		Assert.assertEquals(existingArithmeticEntry, newArithmeticEntry);
	}

	@Test
	public void testFetchByPrimaryKeyMissing() throws Exception {
		long pk = RandomTestUtil.nextLong();

		ArithmeticEntry missingArithmeticEntry = _persistence.fetchByPrimaryKey(
			pk);

		Assert.assertNull(missingArithmeticEntry);
	}

	@Test
	public void testFetchByPrimaryKeysWithMultiplePrimaryKeysWhereAllPrimaryKeysExist()
		throws Exception {

		ArithmeticEntry newArithmeticEntry1 = addArithmeticEntry();
		ArithmeticEntry newArithmeticEntry2 = addArithmeticEntry();

		Set<Serializable> primaryKeys = new HashSet<Serializable>();

		primaryKeys.add(newArithmeticEntry1.getPrimaryKey());
		primaryKeys.add(newArithmeticEntry2.getPrimaryKey());

		Map<Serializable, ArithmeticEntry> arithmeticEntries =
			_persistence.fetchByPrimaryKeys(primaryKeys);

		Assert.assertEquals(2, arithmeticEntries.size());
		Assert.assertEquals(
			newArithmeticEntry1,
			arithmeticEntries.get(newArithmeticEntry1.getPrimaryKey()));
		Assert.assertEquals(
			newArithmeticEntry2,
			arithmeticEntries.get(newArithmeticEntry2.getPrimaryKey()));
	}

	@Test
	public void testFetchByPrimaryKeysWithMultiplePrimaryKeysWhereNoPrimaryKeysExist()
		throws Exception {

		long pk1 = RandomTestUtil.nextLong();

		long pk2 = RandomTestUtil.nextLong();

		Set<Serializable> primaryKeys = new HashSet<Serializable>();

		primaryKeys.add(pk1);
		primaryKeys.add(pk2);

		Map<Serializable, ArithmeticEntry> arithmeticEntries =
			_persistence.fetchByPrimaryKeys(primaryKeys);

		Assert.assertTrue(arithmeticEntries.isEmpty());
	}

	@Test
	public void testFetchByPrimaryKeysWithMultiplePrimaryKeysWhereSomePrimaryKeysExist()
		throws Exception {

		ArithmeticEntry newArithmeticEntry = addArithmeticEntry();

		long pk = RandomTestUtil.nextLong();

		Set<Serializable> primaryKeys = new HashSet<Serializable>();

		primaryKeys.add(newArithmeticEntry.getPrimaryKey());
		primaryKeys.add(pk);

		Map<Serializable, ArithmeticEntry> arithmeticEntries =
			_persistence.fetchByPrimaryKeys(primaryKeys);

		Assert.assertEquals(1, arithmeticEntries.size());
		Assert.assertEquals(
			newArithmeticEntry,
			arithmeticEntries.get(newArithmeticEntry.getPrimaryKey()));
	}

	@Test
	public void testFetchByPrimaryKeysWithNoPrimaryKeys() throws Exception {
		Set<Serializable> primaryKeys = new HashSet<Serializable>();

		Map<Serializable, ArithmeticEntry> arithmeticEntries =
			_persistence.fetchByPrimaryKeys(primaryKeys);

		Assert.assertTrue(arithmeticEntries.isEmpty());
	}

	@Test
	public void testFetchByPrimaryKeysWithOnePrimaryKey() throws Exception {
		ArithmeticEntry newArithmeticEntry = addArithmeticEntry();

		Set<Serializable> primaryKeys = new HashSet<Serializable>();

		primaryKeys.add(newArithmeticEntry.getPrimaryKey());

		Map<Serializable, ArithmeticEntry> arithmeticEntries =
			_persistence.fetchByPrimaryKeys(primaryKeys);

		Assert.assertEquals(1, arithmeticEntries.size());
		Assert.assertEquals(
			newArithmeticEntry,
			arithmeticEntries.get(newArithmeticEntry.getPrimaryKey()));
	}

	@Test
	public void testActionableDynamicQuery() throws Exception {
		final IntegerWrapper count = new IntegerWrapper();

		ActionableDynamicQuery actionableDynamicQuery =
			ArithmeticEntryLocalServiceUtil.getActionableDynamicQuery();

		actionableDynamicQuery.setPerformActionMethod(
			new ActionableDynamicQuery.PerformActionMethod<ArithmeticEntry>() {

				@Override
				public void performAction(ArithmeticEntry arithmeticEntry) {
					Assert.assertNotNull(arithmeticEntry);

					count.increment();
				}

			});

		actionableDynamicQuery.performActions();

		Assert.assertEquals(count.getValue(), _persistence.countAll());
	}

	@Test
	public void testDynamicQueryByPrimaryKeyExisting() throws Exception {
		ArithmeticEntry newArithmeticEntry = addArithmeticEntry();

		DynamicQuery dynamicQuery = DynamicQueryFactoryUtil.forClass(
			ArithmeticEntry.class, _dynamicQueryClassLoader);

		dynamicQuery.add(
			RestrictionsFactoryUtil.eq(
				"arithmeticEntryId",
				newArithmeticEntry.getArithmeticEntryId()));

		List<ArithmeticEntry> result = _persistence.findWithDynamicQuery(
			dynamicQuery);

		Assert.assertEquals(1, result.size());

		ArithmeticEntry existingArithmeticEntry = result.get(0);

		Assert.assertEquals(existingArithmeticEntry, newArithmeticEntry);
	}

	@Test
	public void testDynamicQueryByPrimaryKeyMissing() throws Exception {
		DynamicQuery dynamicQuery = DynamicQueryFactoryUtil.forClass(
			ArithmeticEntry.class, _dynamicQueryClassLoader);

		dynamicQuery.add(
			RestrictionsFactoryUtil.eq(
				"arithmeticEntryId", RandomTestUtil.nextLong()));

		List<ArithmeticEntry> result = _persistence.findWithDynamicQuery(
			dynamicQuery);

		Assert.assertEquals(0, result.size());
	}

	@Test
	public void testDynamicQueryByProjectionExisting() throws Exception {
		ArithmeticEntry newArithmeticEntry = addArithmeticEntry();

		DynamicQuery dynamicQuery = DynamicQueryFactoryUtil.forClass(
			ArithmeticEntry.class, _dynamicQueryClassLoader);

		dynamicQuery.setProjection(
			ProjectionFactoryUtil.property("arithmeticEntryId"));

		Object newArithmeticEntryId = newArithmeticEntry.getArithmeticEntryId();

		dynamicQuery.add(
			RestrictionsFactoryUtil.in(
				"arithmeticEntryId", new Object[] {newArithmeticEntryId}));

		List<Object> result = _persistence.findWithDynamicQuery(dynamicQuery);

		Assert.assertEquals(1, result.size());

		Object existingArithmeticEntryId = result.get(0);

		Assert.assertEquals(existingArithmeticEntryId, newArithmeticEntryId);
	}

	@Test
	public void testDynamicQueryByProjectionMissing() throws Exception {
		DynamicQuery dynamicQuery = DynamicQueryFactoryUtil.forClass(
			ArithmeticEntry.class, _dynamicQueryClassLoader);

		dynamicQuery.setProjection(
			ProjectionFactoryUtil.property("arithmeticEntryId"));

		dynamicQuery.add(
			RestrictionsFactoryUtil.in(
				"arithmeticEntryId", new Object[] {RandomTestUtil.nextLong()}));

		List<Object> result = _persistence.findWithDynamicQuery(dynamicQuery);

		Assert.assertEquals(0, result.size());
	}

	protected ArithmeticEntry addArithmeticEntry() throws Exception {
		long pk = RandomTestUtil.nextLong();

		ArithmeticEntry arithmeticEntry = _persistence.create(pk);

		arithmeticEntry.setNumber1(RandomTestUtil.nextLong());

		arithmeticEntry.setNumber2(RandomTestUtil.nextLong());

		_arithmeticEntries.add(_persistence.update(arithmeticEntry));

		return arithmeticEntry;
	}

	private List<ArithmeticEntry> _arithmeticEntries =
		new ArrayList<ArithmeticEntry>();
	private ArithmeticEntryPersistence _persistence;
	private ClassLoader _dynamicQueryClassLoader;

}