/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.exportimport.rest.internal.resource.v1_0;

import com.liferay.exportimport.kernel.background.task.BackgroundTaskExecutorNames;
import com.liferay.exportimport.kernel.configuration.ExportImportConfigurationFactory;
import com.liferay.exportimport.kernel.configuration.ExportImportConfigurationParameterMapFactory;
import com.liferay.exportimport.kernel.configuration.ExportImportConfigurationSettingsMapFactory;
import com.liferay.exportimport.kernel.configuration.constants.ExportImportConfigurationConstants;
import com.liferay.exportimport.kernel.lar.ExportImportHelper;
import com.liferay.exportimport.kernel.model.ExportImportConfiguration;
import com.liferay.exportimport.kernel.service.ExportImportConfigurationLocalService;
import com.liferay.exportimport.kernel.staging.Staging;
import com.liferay.exportimport.rest.dto.v1_0.ProcessProgress;
import com.liferay.exportimport.rest.dto.v1_0.PublishProcess;
import com.liferay.exportimport.rest.dto.v1_0.PublishProcessRequest;
import com.liferay.exportimport.rest.dto.v1_0.Status;
import com.liferay.exportimport.rest.dto.v1_0.Type;
import com.liferay.exportimport.rest.internal.util.BackgroundTaskUtil;
import com.liferay.exportimport.rest.internal.util.GroupUtil;
import com.liferay.exportimport.rest.internal.util.ParameterMapUtil;
import com.liferay.exportimport.rest.internal.util.PermissionUtil;
import com.liferay.exportimport.rest.internal.util.PreviewPortletDataHandlerUtil;
import com.liferay.exportimport.rest.resource.v1_0.PublishProcessResource;
import com.liferay.headless.delivery.dto.v1_0.util.CreatorUtil;
import com.liferay.petra.string.StringPool;
import com.liferay.portal.background.task.model.BackgroundTask;
import com.liferay.portal.background.task.service.BackgroundTaskLocalService;
import com.liferay.portal.kernel.backgroundtask.constants.BackgroundTaskConstants;
import com.liferay.portal.kernel.backgroundtask.display.BackgroundTaskDisplayFactory;
import com.liferay.portal.kernel.dao.orm.DynamicQuery;
import com.liferay.portal.kernel.dao.orm.RestrictionsFactoryUtil;
import com.liferay.portal.kernel.exception.NoSuchBackgroundTaskException;
import com.liferay.portal.kernel.json.JSONFactory;
import com.liferay.portal.kernel.json.JSONObject;
import com.liferay.portal.kernel.language.Language;
import com.liferay.portal.kernel.messaging.DestinationNames;
import com.liferay.portal.kernel.messaging.Message;
import com.liferay.portal.kernel.model.Group;
import com.liferay.portal.kernel.scheduler.SchedulerEngineHelper;
import com.liferay.portal.kernel.scheduler.StorageType;
import com.liferay.portal.kernel.scheduler.messaging.SchedulerResponse;
import com.liferay.portal.kernel.search.Sort;
import com.liferay.portal.kernel.service.LayoutService;
import com.liferay.portal.kernel.service.UserLocalService;
import com.liferay.portal.kernel.util.GetterUtil;
import com.liferay.portal.kernel.util.MapUtil;
import com.liferay.portal.kernel.util.Portal;
import com.liferay.portal.kernel.util.StringUtil;
import com.liferay.portal.kernel.util.Time;
import com.liferay.portal.kernel.util.Validator;
import com.liferay.portal.vulcan.pagination.Page;
import com.liferay.portal.vulcan.pagination.Pagination;
import com.liferay.staging.StagingGroupHelper;

import jakarta.ws.rs.BadRequestException;

import java.io.Serializable;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.component.annotations.ServiceScope;

/**
 * @author Daniel Raposo
 */
@Component(
	properties = "OSGI-INF/liferay/rest/v1_0/publish-process.properties",
	scope = ServiceScope.PROTOTYPE, service = PublishProcessResource.class
)
public class PublishProcessResourceImpl extends BasePublishProcessResourceImpl {

	@Override
	public void deletePublishProcess(Long publishProcessId) throws Exception {
		BackgroundTask backgroundTask =
			_backgroundTaskLocalService.getBackgroundTask(publishProcessId);

		PermissionUtil.checkPublishPermission(backgroundTask.getGroupId());

		_validatePublishBackgroundTask(backgroundTask);

		_backgroundTaskLocalService.deleteBackgroundTask(backgroundTask);
	}

	@Override
	public PublishProcess getPublishProcess(Long publishProcessId)
		throws Exception {

		BackgroundTask backgroundTask =
			_backgroundTaskLocalService.getBackgroundTask(publishProcessId);

		PermissionUtil.checkPublishPermission(backgroundTask.getGroupId());

		_validatePublishBackgroundTask(backgroundTask);

		return _toPublishProcess(backgroundTask);
	}

	@Override
	public ProcessProgress getPublishProcessProgress(Long publishProcessId)
		throws Exception {

		BackgroundTask backgroundTask =
			_backgroundTaskLocalService.getBackgroundTask(publishProcessId);

		PermissionUtil.checkPublishPermission(backgroundTask.getGroupId());

		_validatePublishBackgroundTask(backgroundTask);

		return new ProcessProgress() {
			{
				setPercentage(
					() -> BackgroundTaskUtil.getPercentage(
						backgroundTask.getBackgroundTaskId()));
			}
		};
	}

	@Override
	public Page<PublishProcess> getSitePublishProcessesPage(
			String siteExternalReferenceCode, Long creatorId, String search,
			Integer status, Pagination pagination, Sort[] sorts)
		throws Exception {

		Group stagingGroup = GroupUtil.getStagingGroup(
			GroupUtil.getSiteGroup(
				contextCompany.getCompanyId(), siteExternalReferenceCode,
				groupLocalService),
			_stagingGroupHelper);

		long stagingGroupId = stagingGroup.getGroupId();

		PermissionUtil.checkPublishPermission(stagingGroupId);

		List<Long> groupIds = _getPublishGroupIds(stagingGroup);

		return Page.of(
			transform(
				_getBackgroundTasks(
					creatorId, groupIds, pagination, search, sorts, status),
				this::_toPublishProcess),
			pagination,
			_backgroundTaskLocalService.dynamicQueryCount(
				_getDynamicQuery(creatorId, groupIds, search, status)));
	}

	@Override
	public PublishProcess postPublishProcessRelaunch(Long publishProcessId)
		throws Exception {

		BackgroundTask backgroundTask =
			_backgroundTaskLocalService.getBackgroundTask(publishProcessId);

		PermissionUtil.checkPublishPermission(backgroundTask.getGroupId());

		_validatePublishBackgroundTask(backgroundTask);

		ExportImportConfiguration exportImportConfiguration =
			ExportImportConfigurationFactory.cloneExportImportConfiguration(
				_exportImportConfigurationLocalService.
					getExportImportConfiguration(
						MapUtil.getLong(
							backgroundTask.getTaskContextMap(),
							"exportImportConfigurationId")));

		return _toPublishProcess(
			_backgroundTaskLocalService.getBackgroundTask(
				_staging.publishLayouts(
					contextUser.getUserId(), exportImportConfiguration)));
	}

	@Override
	public PublishProcess postSitePublishProcess(
			String siteExternalReferenceCode,
			PublishProcessRequest publishProcessRequest)
		throws Exception {

		Group stagingGroup = GroupUtil.getStagingGroup(
			GroupUtil.getSiteGroup(
				contextCompany.getCompanyId(), siteExternalReferenceCode,
				groupLocalService),
			_stagingGroupHelper);

		Group liveGroup = GroupUtil.getLiveGroup(
			stagingGroup, _stagingGroupHelper);

		Map<String, String[]> parameterMap = ParameterMapUtil.toParameterMap(
			publishProcessRequest);

		parameterMap = ParameterMapUtil.putDateRangeParameters(
			publishProcessRequest.getDateRangeTypeAsString(),
			publishProcessRequest.getStartDate(),
			publishProcessRequest.getEndDate(), parameterMap, contextUser);

		parameterMap =
			_exportImportConfigurationParameterMapFactory.buildParameterMap(
				parameterMap);

		boolean privateLayout = _isPrivateLayout(parameterMap, stagingGroup);

		long[] layoutIds = _getLayoutIds(
			parameterMap, privateLayout, stagingGroup.getGroupId());

		if (!Validator.isBlank(publishProcessRequest.getCronExpression())) {
			return _scheduleSitePublishProcess(
				layoutIds, liveGroup, parameterMap, privateLayout,
				publishProcessRequest, stagingGroup);
		}

		Map<String, Serializable> settingsMap =
			_exportImportConfigurationSettingsMapFactory.
				buildPublishLayoutLocalSettingsMap(
					contextUser, stagingGroup.getGroupId(),
					liveGroup.getGroupId(), privateLayout, layoutIds,
					parameterMap);

		ExportImportConfiguration exportImportConfiguration = null;

		String name = publishProcessRequest.getName();

		if (Validator.isBlank(name)) {
			exportImportConfiguration =
				_exportImportConfigurationLocalService.
					addDraftExportImportConfiguration(
						contextUser.getUserId(),
						ExportImportConfigurationConstants.
							TYPE_PUBLISH_LAYOUT_LOCAL,
						settingsMap);
		}
		else {
			exportImportConfiguration =
				_exportImportConfigurationLocalService.
					addDraftExportImportConfiguration(
						contextUser.getUserId(), name,
						ExportImportConfigurationConstants.
							TYPE_PUBLISH_LAYOUT_LOCAL,
						settingsMap);
		}

		return _toPublishProcess(
			_backgroundTaskLocalService.getBackgroundTask(
				_staging.publishLayouts(
					contextUser.getUserId(), exportImportConfiguration)));
	}

	private List<BackgroundTask> _getBackgroundTasks(
			Long creatorId, List<Long> groupIds, Pagination pagination,
			String search, Sort[] sorts, Integer status)
		throws Exception {

		DynamicQuery dynamicQuery = _getDynamicQuery(
			creatorId, groupIds, search, status);

		BackgroundTaskUtil.addOrders(dynamicQuery, sorts);

		return _backgroundTaskLocalService.dynamicQuery(
			dynamicQuery, pagination.getStartPosition(),
			pagination.getEndPosition());
	}

	private DynamicQuery _getDynamicQuery(
		Long creatorId, List<Long> groupIds, String search, Integer status) {

		DynamicQuery dynamicQuery = _backgroundTaskLocalService.dynamicQuery();

		dynamicQuery.add(
			RestrictionsFactoryUtil.eq(
				"companyId", contextCompany.getCompanyId()));
		dynamicQuery.add(RestrictionsFactoryUtil.in("groupId", groupIds));
		dynamicQuery.add(
			RestrictionsFactoryUtil.eq(
				"taskExecutorClassName",
				BackgroundTaskExecutorNames.
					LAYOUT_STAGING_BACKGROUND_TASK_EXECUTOR));

		if (!Validator.isBlank(search)) {
			dynamicQuery.add(
				RestrictionsFactoryUtil.ilike(
					"name", StringUtil.quote(search, StringPool.PERCENT)));
		}

		if (status != null) {
			dynamicQuery.add(RestrictionsFactoryUtil.eq("status", status));
		}

		if (creatorId != null) {
			dynamicQuery.add(RestrictionsFactoryUtil.eq("userId", creatorId));
		}

		return dynamicQuery;
	}

	private long[] _getLayoutIds(
		Map<String, String[]> parameterMap, boolean privateLayout,
		long stagingGroupId) {

		String[] values = parameterMap.get(
			privateLayout ?
				PreviewPortletDataHandlerUtil.PRIVATE_PAGES_CONTROL_NAME :
					PreviewPortletDataHandlerUtil.PUBLIC_PAGES_CONTROL_NAME);

		if ((values == null) || Boolean.parseBoolean(values[0])) {
			return _exportImportHelper.getAllLayoutIds(
				stagingGroupId, privateLayout);
		}

		return GetterUtil.getLongValues(values);
	}

	private List<Long> _getPublishGroupIds(Group stagingGroup) {
		List<Long> groupIds = new ArrayList<>();

		groupIds.add(stagingGroup.getGroupId());

		Group liveGroup = _stagingGroupHelper.fetchLocalLiveGroup(stagingGroup);

		if (liveGroup != null) {
			groupIds.add(liveGroup.getGroupId());
		}

		return groupIds;
	}

	private SchedulerResponse _getSchedulerResponse(
			String groupName, String name)
		throws Exception {

		SchedulerResponse latestSchedulerResponse = null;

		long latestExportImportConfigurationId = 0;

		for (SchedulerResponse schedulerResponse :
				_schedulerEngineHelper.getScheduledJobs(
					groupName, StorageType.PERSISTED)) {

			if (!Objects.equals(name, schedulerResponse.getDescription())) {
				continue;
			}

			Message message = schedulerResponse.getMessage();

			long exportImportConfigurationId = GetterUtil.getLong(
				message.getPayload());

			if (exportImportConfigurationId >
					latestExportImportConfigurationId) {

				latestExportImportConfigurationId = exportImportConfigurationId;
				latestSchedulerResponse = schedulerResponse;
			}
		}

		return latestSchedulerResponse;
	}

	private boolean _isPrivateLayout(
		Map<String, String[]> parameterMap, Group stagingGroup) {

		boolean privateLayout = parameterMap.containsKey(
			PreviewPortletDataHandlerUtil.PRIVATE_PAGES_CONTROL_NAME);
		boolean publicLayout = parameterMap.containsKey(
			PreviewPortletDataHandlerUtil.PUBLIC_PAGES_CONTROL_NAME);

		if (privateLayout && publicLayout) {
			throw new BadRequestException(
				"Cannot request both private and public pages");
		}

		if (privateLayout && !stagingGroup.isPrivateLayoutsEnabled()) {
			throw new BadRequestException("Private pages are not enabled");
		}

		return privateLayout;
	}

	private boolean _isScheduled(
		ExportImportConfiguration exportImportConfiguration) {

		if (exportImportConfiguration == null) {
			return false;
		}

		if (exportImportConfiguration.getType() ==
				ExportImportConfigurationConstants.
					TYPE_SCHEDULED_PUBLISH_LAYOUT_LOCAL) {

			return true;
		}

		Map<String, Serializable> settingsMap =
			exportImportConfiguration.getSettingsMap();

		Map<String, String[]> parameterMap =
			(Map<String, String[]>)settingsMap.get("parameterMap");

		if ((parameterMap != null) &&
			parameterMap.containsKey("cronExpression")) {

			return true;
		}

		return false;
	}

	private PublishProcess _scheduleSitePublishProcess(
			long[] layoutIds, Group liveGroup,
			Map<String, String[]> parameterMap, boolean privateLayout,
			PublishProcessRequest publishProcessRequest, Group stagingGroup)
		throws Exception {

		parameterMap.put(
			"cronExpression",
			new String[] {publishProcessRequest.getCronExpression()});

		String timeZoneId = publishProcessRequest.getTimeZoneId();

		if (!Validator.isBlank(timeZoneId)) {
			parameterMap.put("timeZoneId", new String[] {timeZoneId});
		}

		Date scheduleStartDate = publishProcessRequest.getScheduleStartDate();

		if (scheduleStartDate == null) {
			scheduleStartDate = new Date();
		}
		else if (scheduleStartDate.before(new Date())) {
			throw new BadRequestException(
				"The schedule start date must be in the future");
		}

		String groupName = _staging.getSchedulerGroupName(
			DestinationNames.LAYOUTS_LOCAL_PUBLISHER, liveGroup.getGroupId());
		String name = publishProcessRequest.getName();

		_layoutService.schedulePublishToLive(
			stagingGroup.getGroupId(), liveGroup.getGroupId(), privateLayout,
			layoutIds, parameterMap, groupName,
			publishProcessRequest.getCronExpression(), scheduleStartDate,
			publishProcessRequest.getScheduleEndDate(), name);

		SchedulerResponse schedulerResponse = _getSchedulerResponse(
			groupName, name);

		return new PublishProcess() {
			{
				setDateCreated(Date::new);
				setJobName(
					() -> {
						if (schedulerResponse == null) {
							return null;
						}

						return schedulerResponse.getJobName();
					});
				setName(() -> name);
			}
		};
	}

	private PublishProcess _toPublishProcess(BackgroundTask backgroundTask) {
		return new PublishProcess() {
			{
				setCreator(
					() -> CreatorUtil.toCreator(
						null, _portal,
						_userLocalService.fetchUser(
							backgroundTask.getUserId())));
				setDateCompleted(backgroundTask::getCompletionDate);
				setDateCreated(backgroundTask::getCreateDate);
				setDateModified(backgroundTask::getModifiedDate);
				setErrorMessage(
					() -> {
						JSONObject jsonObject =
							_jsonFactory.safeCreateJSONObject(
								backgroundTask.getStatusMessage(), true);

						if (jsonObject == null) {
							return backgroundTask.getStatusMessage();
						}

						return jsonObject.getString(
							"message", backgroundTask.getStatusMessage());
					});
				setId(backgroundTask::getBackgroundTaskId);
				setName(
					() ->
						_backgroundTaskDisplayFactory.getBackgroundTaskDisplay(
							backgroundTask.getBackgroundTaskId()
						).getDisplayName(
							contextHttpServletRequest
						));
				setStatus(
					() -> new Status() {
						{
							setCode(backgroundTask::getStatus);
							setLabel(
								() -> _language.get(
									contextUser.getLocale(),
									BackgroundTaskConstants.getStatusLabel(
										backgroundTask.getStatus())));
						}
					});
				setType(() -> _toType(backgroundTask));
			}
		};
	}

	private Type _toType(BackgroundTask backgroundTask) {
		boolean scheduled = _isScheduled(
			_exportImportConfigurationLocalService.
				fetchExportImportConfiguration(
					MapUtil.getLong(
						backgroundTask.getTaskContextMap(),
						"exportImportConfigurationId")));

		return new Type() {
			{
				setCode(() -> scheduled ? 1 : 0);
				setLabel(
					() -> _language.get(
						contextUser.getLocale(),
						scheduled ? "scheduled" : "manual"));
			}
		};
	}

	private void _validatePublishBackgroundTask(BackgroundTask backgroundTask)
		throws Exception {

		if (!StringUtil.equals(
				backgroundTask.getTaskExecutorClassName(),
				BackgroundTaskExecutorNames.
					LAYOUT_STAGING_BACKGROUND_TASK_EXECUTOR)) {

			throw new NoSuchBackgroundTaskException();
		}
	}

	@Reference
	private BackgroundTaskDisplayFactory _backgroundTaskDisplayFactory;

	@Reference
	private BackgroundTaskLocalService _backgroundTaskLocalService;

	@Reference
	private ExportImportConfigurationLocalService
		_exportImportConfigurationLocalService;

	@Reference
	private ExportImportConfigurationParameterMapFactory
		_exportImportConfigurationParameterMapFactory;

	@Reference
	private ExportImportConfigurationSettingsMapFactory
		_exportImportConfigurationSettingsMapFactory;

	@Reference
	private ExportImportHelper _exportImportHelper;

	@Reference
	private JSONFactory _jsonFactory;

	@Reference
	private Language _language;

	@Reference
	private LayoutService _layoutService;

	@Reference
	private Portal _portal;

	@Reference
	private SchedulerEngineHelper _schedulerEngineHelper;

	@Reference
	private Staging _staging;

	@Reference
	private StagingGroupHelper _stagingGroupHelper;

	@Reference
	private UserLocalService _userLocalService;

}