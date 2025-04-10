/**
 * SPDX-FileCopyrightText: (c) 2025 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.portal.tools.service.builder.test.service.persistence;

import com.liferay.portal.kernel.service.persistence.BasePersistence;
import com.liferay.portal.tools.service.builder.test.exception.NoSuchArithmeticEntryException;
import com.liferay.portal.tools.service.builder.test.model.ArithmeticEntry;

import org.osgi.annotation.versioning.ProviderType;

/**
 * The persistence interface for the arithmetic entry service.
 *
 * <p>
 * Caching information and settings can be found in <code>portal.properties</code>
 * </p>
 *
 * @author Brian Wing Shun Chan
 * @see ArithmeticEntryUtil
 * @generated
 */
@ProviderType
public interface ArithmeticEntryPersistence
	extends BasePersistence<ArithmeticEntry> {

	/*
	 * NOTE FOR DEVELOPERS:
	 *
	 * Never modify or reference this interface directly. Always use {@link ArithmeticEntryUtil} to access the arithmetic entry persistence. Modify <code>service.xml</code> and rerun ServiceBuilder to regenerate this interface.
	 */

	/**
	 * Caches the arithmetic entry in the entity cache if it is enabled.
	 *
	 * @param arithmeticEntry the arithmetic entry
	 */
	public void cacheResult(ArithmeticEntry arithmeticEntry);

	/**
	 * Caches the arithmetic entries in the entity cache if it is enabled.
	 *
	 * @param arithmeticEntries the arithmetic entries
	 */
	public void cacheResult(java.util.List<ArithmeticEntry> arithmeticEntries);

	/**
	 * Creates a new arithmetic entry with the primary key. Does not add the arithmetic entry to the database.
	 *
	 * @param arithmeticEntryId the primary key for the new arithmetic entry
	 * @return the new arithmetic entry
	 */
	public ArithmeticEntry create(long arithmeticEntryId);

	/**
	 * Removes the arithmetic entry with the primary key from the database. Also notifies the appropriate model listeners.
	 *
	 * @param arithmeticEntryId the primary key of the arithmetic entry
	 * @return the arithmetic entry that was removed
	 * @throws NoSuchArithmeticEntryException if a arithmetic entry with the primary key could not be found
	 */
	public ArithmeticEntry remove(long arithmeticEntryId)
		throws NoSuchArithmeticEntryException;

	public ArithmeticEntry updateImpl(ArithmeticEntry arithmeticEntry);

	/**
	 * Returns the arithmetic entry with the primary key or throws a <code>NoSuchArithmeticEntryException</code> if it could not be found.
	 *
	 * @param arithmeticEntryId the primary key of the arithmetic entry
	 * @return the arithmetic entry
	 * @throws NoSuchArithmeticEntryException if a arithmetic entry with the primary key could not be found
	 */
	public ArithmeticEntry findByPrimaryKey(long arithmeticEntryId)
		throws NoSuchArithmeticEntryException;

	/**
	 * Returns the arithmetic entry with the primary key or returns <code>null</code> if it could not be found.
	 *
	 * @param arithmeticEntryId the primary key of the arithmetic entry
	 * @return the arithmetic entry, or <code>null</code> if a arithmetic entry with the primary key could not be found
	 */
	public ArithmeticEntry fetchByPrimaryKey(long arithmeticEntryId);

	/**
	 * Returns all the arithmetic entries.
	 *
	 * @return the arithmetic entries
	 */
	public java.util.List<ArithmeticEntry> findAll();

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
	public java.util.List<ArithmeticEntry> findAll(int start, int end);

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
	public java.util.List<ArithmeticEntry> findAll(
		int start, int end,
		com.liferay.portal.kernel.util.OrderByComparator<ArithmeticEntry>
			orderByComparator);

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
	public java.util.List<ArithmeticEntry> findAll(
		int start, int end,
		com.liferay.portal.kernel.util.OrderByComparator<ArithmeticEntry>
			orderByComparator,
		boolean useFinderCache);

	/**
	 * Removes all the arithmetic entries from the database.
	 */
	public void removeAll();

	/**
	 * Returns the number of arithmetic entries.
	 *
	 * @return the number of arithmetic entries
	 */
	public int countAll();

}