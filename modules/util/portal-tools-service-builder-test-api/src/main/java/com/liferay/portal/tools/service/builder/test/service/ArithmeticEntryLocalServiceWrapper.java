/**
 * SPDX-FileCopyrightText: (c) 2025 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.portal.tools.service.builder.test.service;

import com.liferay.portal.kernel.service.ServiceWrapper;
import com.liferay.portal.kernel.service.persistence.BasePersistence;

/**
 * Provides a wrapper for {@link ArithmeticEntryLocalService}.
 *
 * @author Brian Wing Shun Chan
 * @see ArithmeticEntryLocalService
 * @generated
 */
public class ArithmeticEntryLocalServiceWrapper
	implements ArithmeticEntryLocalService,
			   ServiceWrapper<ArithmeticEntryLocalService> {

	public ArithmeticEntryLocalServiceWrapper() {
		this(null);
	}

	public ArithmeticEntryLocalServiceWrapper(
		ArithmeticEntryLocalService arithmeticEntryLocalService) {

		_arithmeticEntryLocalService = arithmeticEntryLocalService;
	}

	/**
	 * Adds the arithmetic entry to the database. Also notifies the appropriate model listeners.
	 *
	 * <p>
	 * <strong>Important:</strong> Inspect ArithmeticEntryLocalServiceImpl for overloaded versions of the method. If provided, use these entry points to the API, as the implementation logic may require the additional parameters defined there.
	 * </p>
	 *
	 * @param arithmeticEntry the arithmetic entry
	 * @return the arithmetic entry that was added
	 */
	@Override
	public com.liferay.portal.tools.service.builder.test.model.ArithmeticEntry
		addArithmeticEntry(
			com.liferay.portal.tools.service.builder.test.model.ArithmeticEntry
				arithmeticEntry) {

		return _arithmeticEntryLocalService.addArithmeticEntry(arithmeticEntry);
	}

	/**
	 * Creates a new arithmetic entry with the primary key. Does not add the arithmetic entry to the database.
	 *
	 * @param arithmeticEntryId the primary key for the new arithmetic entry
	 * @return the new arithmetic entry
	 */
	@Override
	public com.liferay.portal.tools.service.builder.test.model.ArithmeticEntry
		createArithmeticEntry(long arithmeticEntryId) {

		return _arithmeticEntryLocalService.createArithmeticEntry(
			arithmeticEntryId);
	}

	/**
	 * @throws PortalException
	 */
	@Override
	public com.liferay.portal.kernel.model.PersistedModel createPersistedModel(
			java.io.Serializable primaryKeyObj)
		throws com.liferay.portal.kernel.exception.PortalException {

		return _arithmeticEntryLocalService.createPersistedModel(primaryKeyObj);
	}

	/**
	 * Deletes the arithmetic entry from the database. Also notifies the appropriate model listeners.
	 *
	 * <p>
	 * <strong>Important:</strong> Inspect ArithmeticEntryLocalServiceImpl for overloaded versions of the method. If provided, use these entry points to the API, as the implementation logic may require the additional parameters defined there.
	 * </p>
	 *
	 * @param arithmeticEntry the arithmetic entry
	 * @return the arithmetic entry that was removed
	 */
	@Override
	public com.liferay.portal.tools.service.builder.test.model.ArithmeticEntry
		deleteArithmeticEntry(
			com.liferay.portal.tools.service.builder.test.model.ArithmeticEntry
				arithmeticEntry) {

		return _arithmeticEntryLocalService.deleteArithmeticEntry(
			arithmeticEntry);
	}

	/**
	 * Deletes the arithmetic entry with the primary key from the database. Also notifies the appropriate model listeners.
	 *
	 * <p>
	 * <strong>Important:</strong> Inspect ArithmeticEntryLocalServiceImpl for overloaded versions of the method. If provided, use these entry points to the API, as the implementation logic may require the additional parameters defined there.
	 * </p>
	 *
	 * @param arithmeticEntryId the primary key of the arithmetic entry
	 * @return the arithmetic entry that was removed
	 * @throws PortalException if a arithmetic entry with the primary key could not be found
	 */
	@Override
	public com.liferay.portal.tools.service.builder.test.model.ArithmeticEntry
			deleteArithmeticEntry(long arithmeticEntryId)
		throws com.liferay.portal.kernel.exception.PortalException {

		return _arithmeticEntryLocalService.deleteArithmeticEntry(
			arithmeticEntryId);
	}

	/**
	 * @throws PortalException
	 */
	@Override
	public com.liferay.portal.kernel.model.PersistedModel deletePersistedModel(
			com.liferay.portal.kernel.model.PersistedModel persistedModel)
		throws com.liferay.portal.kernel.exception.PortalException {

		return _arithmeticEntryLocalService.deletePersistedModel(
			persistedModel);
	}

	@Override
	public <T> T dslQuery(com.liferay.petra.sql.dsl.query.DSLQuery dslQuery) {
		return _arithmeticEntryLocalService.dslQuery(dslQuery);
	}

	@Override
	public int dslQueryCount(
		com.liferay.petra.sql.dsl.query.DSLQuery dslQuery) {

		return _arithmeticEntryLocalService.dslQueryCount(dslQuery);
	}

	@Override
	public com.liferay.portal.kernel.dao.orm.DynamicQuery dynamicQuery() {
		return _arithmeticEntryLocalService.dynamicQuery();
	}

	/**
	 * Performs a dynamic query on the database and returns the matching rows.
	 *
	 * @param dynamicQuery the dynamic query
	 * @return the matching rows
	 */
	@Override
	public <T> java.util.List<T> dynamicQuery(
		com.liferay.portal.kernel.dao.orm.DynamicQuery dynamicQuery) {

		return _arithmeticEntryLocalService.dynamicQuery(dynamicQuery);
	}

	/**
	 * Performs a dynamic query on the database and returns a range of the matching rows.
	 *
	 * <p>
	 * Useful when paginating results. Returns a maximum of <code>end - start</code> instances. <code>start</code> and <code>end</code> are not primary keys, they are indexes in the result set. Thus, <code>0</code> refers to the first result in the set. Setting both <code>start</code> and <code>end</code> to <code>com.liferay.portal.kernel.dao.orm.QueryUtil#ALL_POS</code> will return the full result set. If <code>orderByComparator</code> is specified, then the query will include the given ORDER BY logic. If <code>orderByComparator</code> is absent, then the query will include the default ORDER BY logic from <code>com.liferay.portal.tools.service.builder.test.model.impl.ArithmeticEntryModelImpl</code>.
	 * </p>
	 *
	 * @param dynamicQuery the dynamic query
	 * @param start the lower bound of the range of model instances
	 * @param end the upper bound of the range of model instances (not inclusive)
	 * @return the range of matching rows
	 */
	@Override
	public <T> java.util.List<T> dynamicQuery(
		com.liferay.portal.kernel.dao.orm.DynamicQuery dynamicQuery, int start,
		int end) {

		return _arithmeticEntryLocalService.dynamicQuery(
			dynamicQuery, start, end);
	}

	/**
	 * Performs a dynamic query on the database and returns an ordered range of the matching rows.
	 *
	 * <p>
	 * Useful when paginating results. Returns a maximum of <code>end - start</code> instances. <code>start</code> and <code>end</code> are not primary keys, they are indexes in the result set. Thus, <code>0</code> refers to the first result in the set. Setting both <code>start</code> and <code>end</code> to <code>com.liferay.portal.kernel.dao.orm.QueryUtil#ALL_POS</code> will return the full result set. If <code>orderByComparator</code> is specified, then the query will include the given ORDER BY logic. If <code>orderByComparator</code> is absent, then the query will include the default ORDER BY logic from <code>com.liferay.portal.tools.service.builder.test.model.impl.ArithmeticEntryModelImpl</code>.
	 * </p>
	 *
	 * @param dynamicQuery the dynamic query
	 * @param start the lower bound of the range of model instances
	 * @param end the upper bound of the range of model instances (not inclusive)
	 * @param orderByComparator the comparator to order the results by (optionally <code>null</code>)
	 * @return the ordered range of matching rows
	 */
	@Override
	public <T> java.util.List<T> dynamicQuery(
		com.liferay.portal.kernel.dao.orm.DynamicQuery dynamicQuery, int start,
		int end,
		com.liferay.portal.kernel.util.OrderByComparator<T> orderByComparator) {

		return _arithmeticEntryLocalService.dynamicQuery(
			dynamicQuery, start, end, orderByComparator);
	}

	/**
	 * Returns the number of rows matching the dynamic query.
	 *
	 * @param dynamicQuery the dynamic query
	 * @return the number of rows matching the dynamic query
	 */
	@Override
	public long dynamicQueryCount(
		com.liferay.portal.kernel.dao.orm.DynamicQuery dynamicQuery) {

		return _arithmeticEntryLocalService.dynamicQueryCount(dynamicQuery);
	}

	/**
	 * Returns the number of rows matching the dynamic query.
	 *
	 * @param dynamicQuery the dynamic query
	 * @param projection the projection to apply to the query
	 * @return the number of rows matching the dynamic query
	 */
	@Override
	public long dynamicQueryCount(
		com.liferay.portal.kernel.dao.orm.DynamicQuery dynamicQuery,
		com.liferay.portal.kernel.dao.orm.Projection projection) {

		return _arithmeticEntryLocalService.dynamicQueryCount(
			dynamicQuery, projection);
	}

	@Override
	public com.liferay.portal.tools.service.builder.test.model.ArithmeticEntry
		fetchArithmeticEntry(long arithmeticEntryId) {

		return _arithmeticEntryLocalService.fetchArithmeticEntry(
			arithmeticEntryId);
	}

	@Override
	public com.liferay.portal.kernel.dao.orm.ActionableDynamicQuery
		getActionableDynamicQuery() {

		return _arithmeticEntryLocalService.getActionableDynamicQuery();
	}

	/**
	 * Returns a range of all the arithmetic entries.
	 *
	 * <p>
	 * Useful when paginating results. Returns a maximum of <code>end - start</code> instances. <code>start</code> and <code>end</code> are not primary keys, they are indexes in the result set. Thus, <code>0</code> refers to the first result in the set. Setting both <code>start</code> and <code>end</code> to <code>com.liferay.portal.kernel.dao.orm.QueryUtil#ALL_POS</code> will return the full result set. If <code>orderByComparator</code> is specified, then the query will include the given ORDER BY logic. If <code>orderByComparator</code> is absent, then the query will include the default ORDER BY logic from <code>com.liferay.portal.tools.service.builder.test.model.impl.ArithmeticEntryModelImpl</code>.
	 * </p>
	 *
	 * @param start the lower bound of the range of arithmetic entries
	 * @param end the upper bound of the range of arithmetic entries (not inclusive)
	 * @return the range of arithmetic entries
	 */
	@Override
	public java.util.List
		<com.liferay.portal.tools.service.builder.test.model.ArithmeticEntry>
			getArithmeticEntries(int start, int end) {

		return _arithmeticEntryLocalService.getArithmeticEntries(start, end);
	}

	/**
	 * Returns the number of arithmetic entries.
	 *
	 * @return the number of arithmetic entries
	 */
	@Override
	public int getArithmeticEntriesCount() {
		return _arithmeticEntryLocalService.getArithmeticEntriesCount();
	}

	/**
	 * Returns the arithmetic entry with the primary key.
	 *
	 * @param arithmeticEntryId the primary key of the arithmetic entry
	 * @return the arithmetic entry
	 * @throws PortalException if a arithmetic entry with the primary key could not be found
	 */
	@Override
	public com.liferay.portal.tools.service.builder.test.model.ArithmeticEntry
			getArithmeticEntry(long arithmeticEntryId)
		throws com.liferay.portal.kernel.exception.PortalException {

		return _arithmeticEntryLocalService.getArithmeticEntry(
			arithmeticEntryId);
	}

	@Override
	public com.liferay.portal.kernel.dao.orm.IndexableActionableDynamicQuery
		getIndexableActionableDynamicQuery() {

		return _arithmeticEntryLocalService.
			getIndexableActionableDynamicQuery();
	}

	/**
	 * Returns the OSGi service identifier.
	 *
	 * @return the OSGi service identifier
	 */
	@Override
	public String getOSGiServiceIdentifier() {
		return _arithmeticEntryLocalService.getOSGiServiceIdentifier();
	}

	/**
	 * @throws PortalException
	 */
	@Override
	public com.liferay.portal.kernel.model.PersistedModel getPersistedModel(
			java.io.Serializable primaryKeyObj)
		throws com.liferay.portal.kernel.exception.PortalException {

		return _arithmeticEntryLocalService.getPersistedModel(primaryKeyObj);
	}

	/**
	 * Updates the arithmetic entry in the database or adds it if it does not yet exist. Also notifies the appropriate model listeners.
	 *
	 * <p>
	 * <strong>Important:</strong> Inspect ArithmeticEntryLocalServiceImpl for overloaded versions of the method. If provided, use these entry points to the API, as the implementation logic may require the additional parameters defined there.
	 * </p>
	 *
	 * @param arithmeticEntry the arithmetic entry
	 * @return the arithmetic entry that was updated
	 */
	@Override
	public com.liferay.portal.tools.service.builder.test.model.ArithmeticEntry
		updateArithmeticEntry(
			com.liferay.portal.tools.service.builder.test.model.ArithmeticEntry
				arithmeticEntry) {

		return _arithmeticEntryLocalService.updateArithmeticEntry(
			arithmeticEntry);
	}

	@Override
	public BasePersistence<?> getBasePersistence() {
		return _arithmeticEntryLocalService.getBasePersistence();
	}

	@Override
	public ArithmeticEntryLocalService getWrappedService() {
		return _arithmeticEntryLocalService;
	}

	@Override
	public void setWrappedService(
		ArithmeticEntryLocalService arithmeticEntryLocalService) {

		_arithmeticEntryLocalService = arithmeticEntryLocalService;
	}

	private ArithmeticEntryLocalService _arithmeticEntryLocalService;

}