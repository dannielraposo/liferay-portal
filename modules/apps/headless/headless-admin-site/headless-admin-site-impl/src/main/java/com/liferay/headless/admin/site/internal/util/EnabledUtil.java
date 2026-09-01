/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.headless.admin.site.internal.util;

import com.liferay.exportimport.kernel.lar.ExportImportThreadLocal;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.feature.flag.FeatureFlagManagerUtil;
import com.liferay.portal.kernel.lazy.referencing.LazyReferencingThreadLocal;
import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.model.Company;
import com.liferay.portal.kernel.security.permission.ActionKeys;
import com.liferay.portal.kernel.security.permission.PermissionChecker;
import com.liferay.portal.kernel.security.permission.PermissionThreadLocal;
import com.liferay.portal.kernel.service.permission.GroupPermissionUtil;

/**
 * @author Alejandro Tardín
 */
public class EnabledUtil {

	public static void checkAddWidgetPageEnabled(Company company) {
		if (LazyReferencingThreadLocal.isEnabled() ||
			ExportImportThreadLocal.isExportInProcess() ||
			ExportImportThreadLocal.isImportInProcess() ||
			ExportImportThreadLocal.isStagingInProcess()) {

			return;
		}

		FeatureFlagManagerUtil.checkEnabled(
			company.getCompanyId(), "LPD-76864");
	}

	public static void checkEnabled(Company company) {
		checkEnabled(company, false);
	}

	public static void checkEnabled(Company company, boolean privateLayout) {
		if (LazyReferencingThreadLocal.isEnabled() ||
			ExportImportThreadLocal.isExportInProcess() ||
			ExportImportThreadLocal.isImportInProcess() ||
			ExportImportThreadLocal.isStagingInProcess()) {

			return;
		}

		FeatureFlagManagerUtil.checkEnabled(
			company.getCompanyId(), "LPD-35443");

		if (privateLayout) {
			FeatureFlagManagerUtil.checkEnabled(
				company.getCompanyId(), "LPD-38869");
		}
	}

	public static void checkGetSiteSitePagesPageEnabled(
		Company company, long groupId, boolean privateLayout) {

		if (LazyReferencingThreadLocal.isEnabled() ||
			ExportImportThreadLocal.isExportInProcess() ||
			ExportImportThreadLocal.isImportInProcess() ||
			ExportImportThreadLocal.isStagingInProcess()) {

			return;
		}

		if (!_hasExportImportPermission(groupId)) {
			FeatureFlagManagerUtil.checkEnabled(
				company.getCompanyId(), "LPD-35443");
		}

		if (privateLayout) {
			FeatureFlagManagerUtil.checkEnabled(
				company.getCompanyId(), "LPD-38869");
		}
	}

	public static void checkPageSpecificationVersionEnabled(Company company) {
		FeatureFlagManagerUtil.checkEnabled(
			company.getCompanyId(), "LPD-10622");
	}

	private static boolean _hasExportImportPermission(long groupId) {
		try {
			PermissionChecker permissionChecker =
				PermissionThreadLocal.getPermissionChecker();

			if (GroupPermissionUtil.contains(
					permissionChecker, groupId,
					ActionKeys.EXPORT_IMPORT_LAYOUTS) ||
				GroupPermissionUtil.contains(
					permissionChecker, groupId, ActionKeys.PUBLISH_STAGING)) {

				return true;
			}

			return false;
		}
		catch (PortalException portalException) {
			_log.error(portalException);

			return false;
		}
	}

	private static final Log _log = LogFactoryUtil.getLog(EnabledUtil.class);

}