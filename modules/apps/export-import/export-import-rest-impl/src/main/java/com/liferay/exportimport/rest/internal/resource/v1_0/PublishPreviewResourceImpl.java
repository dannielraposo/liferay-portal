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
import com.liferay.exportimport.rest.dto.v1_0.PreviewPortletDataHandler;
import com.liferay.exportimport.rest.dto.v1_0.PublishPreview;
import com.liferay.exportimport.rest.internal.util.DateRangeUtil;
import com.liferay.exportimport.rest.internal.util.GroupUtil;
import com.liferay.exportimport.rest.internal.util.PermissionUtil;
import com.liferay.exportimport.rest.internal.util.PreviewPortletDataHandlerUtil;
import com.liferay.exportimport.rest.resource.v1_0.PublishPreviewResource;
import com.liferay.portal.kernel.model.Group;
import com.liferay.portal.kernel.portlet.PortletPreferencesFactory;
import com.liferay.portal.kernel.util.DateRange;
import com.liferay.portal.kernel.util.StringUtil;
import com.liferay.staging.StagingGroupHelper;

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
	properties = "OSGI-INF/liferay/rest/v1_0/publish-preview.properties",
	scope = ServiceScope.PROTOTYPE, service = PublishPreviewResource.class
)
public class PublishPreviewResourceImpl extends BasePublishPreviewResourceImpl {

	@Override
	public PublishPreview getSitePublishPreview(
			String siteExternalReferenceCode, String dateRangeType,
			Date endDate, Date startDate)
		throws Exception {

		Group stagingGroup = GroupUtil.getStagingGroup(
			GroupUtil.getSiteGroup(
				contextCompany.getCompanyId(), siteExternalReferenceCode,
				groupLocalService),
			_stagingGroupHelper);

		PermissionUtil.checkPublishPermission(stagingGroup.getGroupId());

		DateRange dateRange = null;
		String range = ExportImportDateUtil.RANGE_ALL;

		if (StringUtil.equals(
				dateRangeType,
				DateRangeUtil.DATE_RANGE_TYPE_FROM_LAST_PUBLISH_DATE)) {

			range = ExportImportDateUtil.RANGE_FROM_LAST_PUBLISH_DATE;
		}
		else {
			dateRange = DateRangeUtil.getDateRange(
				dateRangeType, startDate, endDate);

			if (dateRange != null) {
				range = ExportImportDateUtil.RANGE_DATE_RANGE;
			}
		}

		Locale locale = contextAcceptLanguage.getPreferredLocale();
		DateRange previewDateRange = dateRange;

		Map<String, List<PreviewPortletDataHandler>>
			previewPortletDataHandlersMap =
				PreviewPortletDataHandlerUtil.getPreviewPortletDataHandlersMap(
					_deletionSystemEventExporter, stagingGroup, locale, 0,
					_portletDataContextFactory, _portletDataHandlerProvider,
					portlet -> {
						if (StringUtil.equals(
								dateRangeType,
								DateRangeUtil.
									DATE_RANGE_TYPE_FROM_LAST_PUBLISH_DATE)) {

							Date lastPublishDate =
								ExportImportDateUtil.getLastPublishDate(
									_portletPreferencesFactory.
										getStrictPortletSetup(
											stagingGroup.getCompanyId(),
											stagingGroup.getGroupId(),
											portlet.getRootPortletId()));

							if (lastPublishDate != null) {
								return new DateRange(
									lastPublishDate, new Date());
							}
						}

						return previewDateRange;
					},
					_exportImportHelper.getExportablePortlets(
						stagingGroup.getCompanyId(), false,
						stagingGroup.getGroupId()),
					false, range);

		return new PublishPreview() {
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
	private PortletPreferencesFactory _portletPreferencesFactory;

	@Reference
	private StagingGroupHelper _stagingGroupHelper;

}