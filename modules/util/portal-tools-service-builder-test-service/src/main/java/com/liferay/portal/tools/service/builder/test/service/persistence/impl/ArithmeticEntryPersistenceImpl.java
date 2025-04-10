/**
 * SPDX-FileCopyrightText: (c) 2025 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.portal.tools.service.builder.test.service.persistence.impl;

import com.liferay.petra.string.StringBundler;
import com.liferay.portal.kernel.dao.orm.EntityCache;
import com.liferay.portal.kernel.dao.orm.FinderCache;
import com.liferay.portal.kernel.dao.orm.FinderPath;
import com.liferay.portal.kernel.dao.orm.Query;
import com.liferay.portal.kernel.dao.orm.QueryUtil;
import com.liferay.portal.kernel.dao.orm.Session;
import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.service.persistence.impl.BasePersistenceImpl;
import com.liferay.portal.kernel.util.GetterUtil;
import com.liferay.portal.kernel.util.OrderByComparator;
import com.liferay.portal.kernel.util.PropsKeys;
import com.liferay.portal.kernel.util.PropsUtil;
import com.liferay.portal.spring.extender.service.ServiceReference;
import com.liferay.portal.tools.service.builder.test.exception.NoSuchArithmeticEntryException;
import com.liferay.portal.tools.service.builder.test.model.ArithmeticEntry;
import com.liferay.portal.tools.service.builder.test.model.ArithmeticEntryTable;
import com.liferay.portal.tools.service.builder.test.model.impl.ArithmeticEntryImpl;
import com.liferay.portal.tools.service.builder.test.model.impl.ArithmeticEntryModelImpl;
import com.liferay.portal.tools.service.builder.test.service.persistence.ArithmeticEntryPersistence;
import com.liferay.portal.tools.service.builder.test.service.persistence.ArithmeticEntryUtil;

import java.io.Serializable;

import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * The persistence implementation for the arithmetic entry service.
 *
 * <p>
 * Caching information and settings can be found in <code>portal.properties</code>
 * </p>
 *
 * @author Brian Wing Shun Chan
 * @generated
 */
public class ArithmeticEntryPersistenceImpl
	extends BasePersistenceImpl<ArithmeticEntry>
	implements ArithmeticEntryPersistence {

	/*
	 * NOTE FOR DEVELOPERS:
	 *
	 * Never modify or reference this class directly. Always use <code>ArithmeticEntryUtil</code> to access the arithmetic entry persistence. Modify <code>service.xml</code> and rerun ServiceBuilder to regenerate this class.
	 */
	public static final String FINDER_CLASS_NAME_ENTITY =
		ArithmeticEntryImpl.class.getName();

	public static final String FINDER_CLASS_NAME_LIST_WITH_PAGINATION =
		FINDER_CLASS_NAME_ENTITY + ".List1";

	public static final String FINDER_CLASS_NAME_LIST_WITHOUT_PAGINATION =
		FINDER_CLASS_NAME_ENTITY + ".List2";

	private FinderPath _finderPathWithPaginationFindAll;
	private FinderPath _finderPathWithoutPaginationFindAll;
	private FinderPath _finderPathCountAll;

	public ArithmeticEntryPersistenceImpl() {
		setModelClass(ArithmeticEntry.class);

		setModelImplClass(ArithmeticEntryImpl.class);
		setModelPKClass(long.class);

		setTable(ArithmeticEntryTable.INSTANCE);
	}

	/**
	 * Caches the arithmetic entry in the entity cache if it is enabled.
	 *
	 * @param arithmeticEntry the arithmetic entry
	 */
	@Override
	public void cacheResult(ArithmeticEntry arithmeticEntry) {
		entityCache.putResult(
			ArithmeticEntryImpl.class, arithmeticEntry.getPrimaryKey(),
			arithmeticEntry);
	}

	private int _valueObjectFinderCacheListThreshold;

	/**
	 * Caches the arithmetic entries in the entity cache if it is enabled.
	 *
	 * @param arithmeticEntries the arithmetic entries
	 */
	@Override
	public void cacheResult(List<ArithmeticEntry> arithmeticEntries) {
		if ((_valueObjectFinderCacheListThreshold == 0) ||
			((_valueObjectFinderCacheListThreshold > 0) &&
			 (arithmeticEntries.size() >
				 _valueObjectFinderCacheListThreshold))) {

			return;
		}

		for (ArithmeticEntry arithmeticEntry : arithmeticEntries) {
			if (entityCache.getResult(
					ArithmeticEntryImpl.class,
					arithmeticEntry.getPrimaryKey()) == null) {

				cacheResult(arithmeticEntry);
			}
		}
	}

	/**
	 * Clears the cache for all arithmetic entries.
	 *
	 * <p>
	 * The <code>EntityCache</code> and <code>FinderCache</code> are both cleared by this method.
	 * </p>
	 */
	@Override
	public void clearCache() {
		entityCache.clearCache(ArithmeticEntryImpl.class);

		finderCache.clearCache(ArithmeticEntryImpl.class);
	}

	/**
	 * Clears the cache for the arithmetic entry.
	 *
	 * <p>
	 * The <code>EntityCache</code> and <code>FinderCache</code> are both cleared by this method.
	 * </p>
	 */
	@Override
	public void clearCache(ArithmeticEntry arithmeticEntry) {
		entityCache.removeResult(ArithmeticEntryImpl.class, arithmeticEntry);
	}

	@Override
	public void clearCache(List<ArithmeticEntry> arithmeticEntries) {
		for (ArithmeticEntry arithmeticEntry : arithmeticEntries) {
			entityCache.removeResult(
				ArithmeticEntryImpl.class, arithmeticEntry);
		}
	}

	@Override
	public void clearCache(Set<Serializable> primaryKeys) {
		finderCache.clearCache(ArithmeticEntryImpl.class);

		for (Serializable primaryKey : primaryKeys) {
			entityCache.removeResult(ArithmeticEntryImpl.class, primaryKey);
		}
	}

	/**
	 * Creates a new arithmetic entry with the primary key. Does not add the arithmetic entry to the database.
	 *
	 * @param arithmeticEntryId the primary key for the new arithmetic entry
	 * @return the new arithmetic entry
	 */
	@Override
	public ArithmeticEntry create(long arithmeticEntryId) {
		ArithmeticEntry arithmeticEntry = new ArithmeticEntryImpl();

		arithmeticEntry.setNew(true);
		arithmeticEntry.setPrimaryKey(arithmeticEntryId);

		return arithmeticEntry;
	}

	/**
	 * Removes the arithmetic entry with the primary key from the database. Also notifies the appropriate model listeners.
	 *
	 * @param arithmeticEntryId the primary key of the arithmetic entry
	 * @return the arithmetic entry that was removed
	 * @throws NoSuchArithmeticEntryException if a arithmetic entry with the primary key could not be found
	 */
	@Override
	public ArithmeticEntry remove(long arithmeticEntryId)
		throws NoSuchArithmeticEntryException {

		return remove((Serializable)arithmeticEntryId);
	}

	/**
	 * Removes the arithmetic entry with the primary key from the database. Also notifies the appropriate model listeners.
	 *
	 * @param primaryKey the primary key of the arithmetic entry
	 * @return the arithmetic entry that was removed
	 * @throws NoSuchArithmeticEntryException if a arithmetic entry with the primary key could not be found
	 */
	@Override
	public ArithmeticEntry remove(Serializable primaryKey)
		throws NoSuchArithmeticEntryException {

		Session session = null;

		try {
			session = openSession();

			ArithmeticEntry arithmeticEntry = (ArithmeticEntry)session.get(
				ArithmeticEntryImpl.class, primaryKey);

			if (arithmeticEntry == null) {
				if (_log.isDebugEnabled()) {
					_log.debug(_NO_SUCH_ENTITY_WITH_PRIMARY_KEY + primaryKey);
				}

				throw new NoSuchArithmeticEntryException(
					_NO_SUCH_ENTITY_WITH_PRIMARY_KEY + primaryKey);
			}

			return remove(arithmeticEntry);
		}
		catch (NoSuchArithmeticEntryException noSuchEntityException) {
			throw noSuchEntityException;
		}
		catch (Exception exception) {
			throw processException(exception);
		}
		finally {
			closeSession(session);
		}
	}

	@Override
	protected ArithmeticEntry removeImpl(ArithmeticEntry arithmeticEntry) {
		Session session = null;

		try {
			session = openSession();

			if (!session.contains(arithmeticEntry)) {
				arithmeticEntry = (ArithmeticEntry)session.get(
					ArithmeticEntryImpl.class,
					arithmeticEntry.getPrimaryKeyObj());
			}

			if (arithmeticEntry != null) {
				session.delete(arithmeticEntry);
			}
		}
		catch (Exception exception) {
			throw processException(exception);
		}
		finally {
			closeSession(session);
		}

		if (arithmeticEntry != null) {
			clearCache(arithmeticEntry);
		}

		return arithmeticEntry;
	}

	@Override
	public ArithmeticEntry updateImpl(ArithmeticEntry arithmeticEntry) {
		boolean isNew = arithmeticEntry.isNew();

		Session session = null;

		try {
			session = openSession();

			if (isNew) {
				session.save(arithmeticEntry);
			}
			else {
				arithmeticEntry = (ArithmeticEntry)session.merge(
					arithmeticEntry);
			}
		}
		catch (Exception exception) {
			throw processException(exception);
		}
		finally {
			closeSession(session);
		}

		entityCache.putResult(
			ArithmeticEntryImpl.class, arithmeticEntry, false, true);

		if (isNew) {
			arithmeticEntry.setNew(false);
		}

		arithmeticEntry.resetOriginalValues();

		return arithmeticEntry;
	}

	/**
	 * Returns the arithmetic entry with the primary key or throws a <code>com.liferay.portal.kernel.exception.NoSuchModelException</code> if it could not be found.
	 *
	 * @param primaryKey the primary key of the arithmetic entry
	 * @return the arithmetic entry
	 * @throws NoSuchArithmeticEntryException if a arithmetic entry with the primary key could not be found
	 */
	@Override
	public ArithmeticEntry findByPrimaryKey(Serializable primaryKey)
		throws NoSuchArithmeticEntryException {

		ArithmeticEntry arithmeticEntry = fetchByPrimaryKey(primaryKey);

		if (arithmeticEntry == null) {
			if (_log.isDebugEnabled()) {
				_log.debug(_NO_SUCH_ENTITY_WITH_PRIMARY_KEY + primaryKey);
			}

			throw new NoSuchArithmeticEntryException(
				_NO_SUCH_ENTITY_WITH_PRIMARY_KEY + primaryKey);
		}

		return arithmeticEntry;
	}

	/**
	 * Returns the arithmetic entry with the primary key or throws a <code>NoSuchArithmeticEntryException</code> if it could not be found.
	 *
	 * @param arithmeticEntryId the primary key of the arithmetic entry
	 * @return the arithmetic entry
	 * @throws NoSuchArithmeticEntryException if a arithmetic entry with the primary key could not be found
	 */
	@Override
	public ArithmeticEntry findByPrimaryKey(long arithmeticEntryId)
		throws NoSuchArithmeticEntryException {

		return findByPrimaryKey((Serializable)arithmeticEntryId);
	}

	/**
	 * Returns the arithmetic entry with the primary key or returns <code>null</code> if it could not be found.
	 *
	 * @param arithmeticEntryId the primary key of the arithmetic entry
	 * @return the arithmetic entry, or <code>null</code> if a arithmetic entry with the primary key could not be found
	 */
	@Override
	public ArithmeticEntry fetchByPrimaryKey(long arithmeticEntryId) {
		return fetchByPrimaryKey((Serializable)arithmeticEntryId);
	}

	/**
	 * Returns all the arithmetic entries.
	 *
	 * @return the arithmetic entries
	 */
	@Override
	public List<ArithmeticEntry> findAll() {
		return findAll(QueryUtil.ALL_POS, QueryUtil.ALL_POS, null);
	}

	/**
	 * Returns a range of all the arithmetic entries.
	 *
	 * <p>
	 * Useful when paginating results. Returns a maximum of <code>end - start</code> instances. <code>start</code> and <code>end</code> are not primary keys, they are indexes in the result set. Thus, <code>0</code> refers to the first result in the set. Setting both <code>start</code> and <code>end</code> to <code>QueryUtil#ALL_POS</code> will return the full result set. If <code>orderByComparator</code> is specified, then the query will include the given ORDER BY logic. If <code>orderByComparator</code> is absent, then the query will include the default ORDER BY logic from <code>ArithmeticEntryModelImpl</code>.
	 * </p>
	 *
	 * @param start the lower bound of the range of arithmetic entries
	 * @param end the upper bound of the range of arithmetic entries (not inclusive)
	 * @return the range of arithmetic entries
	 */
	@Override
	public List<ArithmeticEntry> findAll(int start, int end) {
		return findAll(start, end, null);
	}

	/**
	 * Returns an ordered range of all the arithmetic entries.
	 *
	 * <p>
	 * Useful when paginating results. Returns a maximum of <code>end - start</code> instances. <code>start</code> and <code>end</code> are not primary keys, they are indexes in the result set. Thus, <code>0</code> refers to the first result in the set. Setting both <code>start</code> and <code>end</code> to <code>QueryUtil#ALL_POS</code> will return the full result set. If <code>orderByComparator</code> is specified, then the query will include the given ORDER BY logic. If <code>orderByComparator</code> is absent, then the query will include the default ORDER BY logic from <code>ArithmeticEntryModelImpl</code>.
	 * </p>
	 *
	 * @param start the lower bound of the range of arithmetic entries
	 * @param end the upper bound of the range of arithmetic entries (not inclusive)
	 * @param orderByComparator the comparator to order the results by (optionally <code>null</code>)
	 * @return the ordered range of arithmetic entries
	 */
	@Override
	public List<ArithmeticEntry> findAll(
		int start, int end,
		OrderByComparator<ArithmeticEntry> orderByComparator) {

		return findAll(start, end, orderByComparator, true);
	}

	/**
	 * Returns an ordered range of all the arithmetic entries.
	 *
	 * <p>
	 * Useful when paginating results. Returns a maximum of <code>end - start</code> instances. <code>start</code> and <code>end</code> are not primary keys, they are indexes in the result set. Thus, <code>0</code> refers to the first result in the set. Setting both <code>start</code> and <code>end</code> to <code>QueryUtil#ALL_POS</code> will return the full result set. If <code>orderByComparator</code> is specified, then the query will include the given ORDER BY logic. If <code>orderByComparator</code> is absent, then the query will include the default ORDER BY logic from <code>ArithmeticEntryModelImpl</code>.
	 * </p>
	 *
	 * @param start the lower bound of the range of arithmetic entries
	 * @param end the upper bound of the range of arithmetic entries (not inclusive)
	 * @param orderByComparator the comparator to order the results by (optionally <code>null</code>)
	 * @param useFinderCache whether to use the finder cache
	 * @return the ordered range of arithmetic entries
	 */
	@Override
	public List<ArithmeticEntry> findAll(
		int start, int end,
		OrderByComparator<ArithmeticEntry> orderByComparator,
		boolean useFinderCache) {

		FinderPath finderPath = null;
		Object[] finderArgs = null;

		if ((start == QueryUtil.ALL_POS) && (end == QueryUtil.ALL_POS) &&
			(orderByComparator == null)) {

			if (useFinderCache) {
				finderPath = _finderPathWithoutPaginationFindAll;
				finderArgs = FINDER_ARGS_EMPTY;
			}
		}
		else if (useFinderCache) {
			finderPath = _finderPathWithPaginationFindAll;
			finderArgs = new Object[] {start, end, orderByComparator};
		}

		List<ArithmeticEntry> list = null;

		if (useFinderCache) {
			list = (List<ArithmeticEntry>)finderCache.getResult(
				finderPath, finderArgs, this);
		}

		if (list == null) {
			StringBundler sb = null;
			String sql = null;

			if (orderByComparator != null) {
				sb = new StringBundler(
					2 + (orderByComparator.getOrderByFields().length * 2));

				sb.append(_SQL_SELECT_ARITHMETICENTRY);

				appendOrderByComparator(
					sb, _ORDER_BY_ENTITY_ALIAS, orderByComparator);

				sql = sb.toString();
			}
			else {
				sql = _SQL_SELECT_ARITHMETICENTRY;

				sql = sql.concat(ArithmeticEntryModelImpl.ORDER_BY_JPQL);
			}

			Session session = null;

			try {
				session = openSession();

				Query query = session.createQuery(sql);

				list = (List<ArithmeticEntry>)QueryUtil.list(
					query, getDialect(), start, end);

				cacheResult(list);

				if (useFinderCache) {
					finderCache.putResult(finderPath, finderArgs, list);
				}
			}
			catch (Exception exception) {
				throw processException(exception);
			}
			finally {
				closeSession(session);
			}
		}

		return list;
	}

	/**
	 * Removes all the arithmetic entries from the database.
	 *
	 */
	@Override
	public void removeAll() {
		for (ArithmeticEntry arithmeticEntry : findAll()) {
			remove(arithmeticEntry);
		}
	}

	/**
	 * Returns the number of arithmetic entries.
	 *
	 * @return the number of arithmetic entries
	 */
	@Override
	public int countAll() {
		Long count = (Long)finderCache.getResult(
			_finderPathCountAll, FINDER_ARGS_EMPTY, this);

		if (count == null) {
			Session session = null;

			try {
				session = openSession();

				Query query = session.createQuery(_SQL_COUNT_ARITHMETICENTRY);

				count = (Long)query.uniqueResult();

				finderCache.putResult(
					_finderPathCountAll, FINDER_ARGS_EMPTY, count);
			}
			catch (Exception exception) {
				throw processException(exception);
			}
			finally {
				closeSession(session);
			}
		}

		return count.intValue();
	}

	@Override
	protected EntityCache getEntityCache() {
		return entityCache;
	}

	@Override
	protected String getPKDBName() {
		return "arithmeticEntryId";
	}

	@Override
	protected String getSelectSQL() {
		return _SQL_SELECT_ARITHMETICENTRY;
	}

	@Override
	protected Map<String, Integer> getTableColumnsMap() {
		return ArithmeticEntryModelImpl.TABLE_COLUMNS_MAP;
	}

	/**
	 * Initializes the arithmetic entry persistence.
	 */
	public void afterPropertiesSet() {
		_valueObjectFinderCacheListThreshold = GetterUtil.getInteger(
			PropsUtil.get(PropsKeys.VALUE_OBJECT_FINDER_CACHE_LIST_THRESHOLD));

		_finderPathWithPaginationFindAll = new FinderPath(
			FINDER_CLASS_NAME_LIST_WITH_PAGINATION, "findAll", new String[0],
			new String[0], true);

		_finderPathWithoutPaginationFindAll = new FinderPath(
			FINDER_CLASS_NAME_LIST_WITHOUT_PAGINATION, "findAll", new String[0],
			new String[0], true);

		_finderPathCountAll = new FinderPath(
			FINDER_CLASS_NAME_LIST_WITHOUT_PAGINATION, "countAll",
			new String[0], new String[0], false);

		ArithmeticEntryUtil.setPersistence(this);
	}

	public void destroy() {
		ArithmeticEntryUtil.setPersistence(null);

		entityCache.removeCache(ArithmeticEntryImpl.class.getName());
	}

	@ServiceReference(type = EntityCache.class)
	protected EntityCache entityCache;

	@ServiceReference(type = FinderCache.class)
	protected FinderCache finderCache;

	private static final String _SQL_SELECT_ARITHMETICENTRY =
		"SELECT arithmeticEntry FROM ArithmeticEntry arithmeticEntry";

	private static final String _SQL_COUNT_ARITHMETICENTRY =
		"SELECT COUNT(arithmeticEntry) FROM ArithmeticEntry arithmeticEntry";

	private static final String _ORDER_BY_ENTITY_ALIAS = "arithmeticEntry.";

	private static final String _NO_SUCH_ENTITY_WITH_PRIMARY_KEY =
		"No ArithmeticEntry exists with the primary key ";

	private static final Log _log = LogFactoryUtil.getLog(
		ArithmeticEntryPersistenceImpl.class);

	@Override
	protected FinderCache getFinderCache() {
		return finderCache;
	}

}