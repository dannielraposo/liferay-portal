/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.exportimport.rest.internal.resource.v1_0;

import com.liferay.exportimport.kernel.lar.ExportImportDateUtil;
import com.liferay.exportimport.kernel.lar.ExportImportHelper;
import com.liferay.exportimport.kernel.lar.PortletDataContextFactory;
import com.liferay.exportimport.lar.DeletionSystemEventExporter;
import com.liferay.exportimport.portlet.data.handler.provider.PortletDataHandlerProvider;
import com.liferay.exportimport.rest.dto.v1_0.ExportPreview;
import com.liferay.exportimport.rest.dto.v1_0.PreviewPortletDataHandler;
import com.liferay.exportimport.rest.internal.util.DateRangeUtil;
import com.liferay.exportimport.rest.internal.util.GroupUtil;
import com.liferay.exportimport.rest.internal.util.PermissionUtil;
import com.liferay.exportimport.rest.internal.util.PreviewPortletDataHandlerUtil;
import com.liferay.exportimport.rest.resource.v1_0.ExportPreviewResource;
import com.liferay.portal.kernel.model.Group;
import com.liferay.portal.kernel.model.Portlet;
import com.liferay.portal.kernel.service.PortletLocalService;
import com.liferay.portal.kernel.util.DateRange;
import com.liferay.portal.kernel.util.GetterUtil;
import com.liferay.portal.kernel.util.ListUtil;
import com.liferay.portal.kernel.util.Validator;
import com.liferay.staging.StagingGroupHelper;

import jakarta.ws.rs.NotFoundException;

import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.component.annotations.ServiceScope;

/**
 * @author Daniel Raposo
 */
@Component(
	properties = "OSGI-INF/liferay/rest/v1_0/export-preview.properties",
	scope = ServiceScope.PROTOTYPE, service = ExportPreviewResource.class
)
public class ExportPreviewResourceImpl extends BaseExportPreviewResourceImpl {

	@Override
	public ExportPreview getAssetLibraryExportPreview(
			String assetLibraryExternalReferenceCode, String dateRangeType,
			Date endDate, Date startDate)
		throws Exception {

		Group group = GroupUtil.getAssetLibraryGroup(
			contextCompany.getCompanyId(), assetLibraryExternalReferenceCode,
			groupLocalService);

		return _getExportPreview(
			dateRangeType, endDate, group, 0, null, startDate);
	}

	@Override
	public ExportPreview getAssetLibraryPortletExportPreview(
			String assetLibraryExternalReferenceCode, String portletId,
			String dateRangeType, Date endDate, Long plid, Date startDate)
		throws Exception {

		Group group = GroupUtil.getAssetLibraryGroup(
			contextCompany.getCompanyId(), assetLibraryExternalReferenceCode,
			groupLocalService);

		return _getExportPreview(
			dateRangeType, endDate, group, GetterUtil.getLong(plid), portletId,
			startDate);
	}

	@Override
	public ExportPreview getExportPreview(
			String dateRangeType, Date endDate, Date startDate)
		throws Exception {

		Group group = _stagingGroupHelper.fetchCompanyGroup(
			contextCompany.getCompanyId());

		if (group == null) {
			throw new NotFoundException();
		}

		return _getExportPreview(
			dateRangeType, endDate, group, 0, null, startDate);
	}

	@Override
	public ExportPreview getSiteExportPreview(
			String siteExternalReferenceCode, String dateRangeType,
			Date endDate, Date startDate)
		throws Exception {

		Group group = GroupUtil.getSiteGroup(
			contextCompany.getCompanyId(), siteExternalReferenceCode,
			groupLocalService);

		return _getExportPreview(
			dateRangeType, endDate, group, 0, null, startDate);
	}

	@Override
	public ExportPreview getSitePortletExportPreview(
			String siteExternalReferenceCode, String portletId,
			String dateRangeType, Date endDate, Long plid, Date startDate)
		throws Exception {

		Group group = GroupUtil.getSiteGroup(
			contextCompany.getCompanyId(), siteExternalReferenceCode,
			groupLocalService);

		return _getExportPreview(
			dateRangeType, endDate, group, GetterUtil.getLong(plid), portletId,
			startDate);
	}

	private ExportPreview _getExportPreview(
			String dateRangeType, Date endDate, Group group, long plid,
			String portletId, Date startDate)
		throws Exception {

		long groupId = group.getGroupId();

		PermissionUtil.checkExportPermission(
			contextCompany.getCompanyId(), groupId);

		boolean portletScoped = !Validator.isBlank(portletId);

		List<Portlet> portlets = null;

		if (portletScoped) {
			portlets = ListUtil.fromArray(
				_portletLocalService.getPortletById(
					contextCompany.getCompanyId(), portletId));
		}
		else {
			portlets = _exportImportHelper.getExportablePortlets(
				contextCompany.getCompanyId(), false, groupId);
		}

		DateRange dateRange = DateRangeUtil.getDateRange(
			dateRangeType, startDate, endDate);
		String range = null;

		if (dateRange != null) {
			range = ExportImportDateUtil.RANGE_DATE_RANGE;
		}

		Locale locale = contextAcceptLanguage.getPreferredLocale();

		Map<String, List<PreviewPortletDataHandler>>
			previewPortletDataHandlersMap =
				PreviewPortletDataHandlerUtil.getPreviewPortletDataHandlersMap(
					_deletionSystemEventExporter, group, locale, plid,
					_portletDataContextFactory, _portletDataHandlerProvider,
					portlet -> dateRange, portlets, portletScoped, range);

		return new ExportPreview() {
			{
				setAdditionCount(
					() -> PreviewPortletDataHandlerUtil.getAdditionCount(
						previewPortletDataHandlersMap));
				setDeletionCount(
					() -> PreviewPortletDataHandlerUtil.getDeletionCount(
						previewPortletDataHandlersMap));
				setPreviewPortletDataHandlerSections(
					() ->
						PreviewPortletDataHandlerUtil.
							toPreviewPortletDataHandlerSections(
								locale, previewPortletDataHandlersMap));
			}
		};
	}

	@Reference
	private DeletionSystemEventExporter _deletionSystemEventExporter;

	@Reference
	private ExportImportHelper _exportImportHelper;

	@Reference
	private PortletDataContextFactory _portletDataContextFactory;

	@Reference
	private PortletDataHandlerProvider _portletDataHandlerProvider;

	@Reference
	private PortletLocalService _portletLocalService;

	@Reference
	private StagingGroupHelper _stagingGroupHelper;

}