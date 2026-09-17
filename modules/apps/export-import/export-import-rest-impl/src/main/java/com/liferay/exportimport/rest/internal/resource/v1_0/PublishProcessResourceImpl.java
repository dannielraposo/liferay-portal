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
import com.liferay.exportimport.kernel.exception.RemoteExportException;
import com.liferay.exportimport.kernel.lar.PortletDataHandlerKeys;
import com.liferay.exportimport.kernel.model.ExportImportConfiguration;
import com.liferay.exportimport.kernel.service.ExportImportConfigurationLocalService;
import com.liferay.exportimport.kernel.staging.Staging;
import com.liferay.exportimport.rest.dto.v1_0.ProcessProgress;
import com.liferay.exportimport.rest.dto.v1_0.PublishProcess;
import com.liferay.exportimport.rest.dto.v1_0.PublishProcessRequest;
import com.liferay.exportimport.rest.dto.v1_0.RemoteConnection;
import com.liferay.exportimport.rest.dto.v1_0.Status;
import com.liferay.exportimport.rest.internal.util.BackgroundTaskUtil;
import com.liferay.exportimport.rest.internal.util.GroupUtil;
import com.liferay.exportimport.rest.internal.util.LayoutUtil;
import com.liferay.exportimport.rest.internal.util.ParameterMapUtil;
import com.liferay.exportimport.rest.internal.util.PermissionUtil;
import com.liferay.exportimport.rest.resource.v1_0.PublishProcessResource;
import com.liferay.headless.delivery.dto.v1_0.util.CreatorUtil;
import com.liferay.petra.string.StringPool;
import com.liferay.portal.background.task.model.BackgroundTask;
import com.liferay.portal.background.task.service.BackgroundTaskLocalService;
import com.liferay.portal.kernel.backgroundtask.constants.BackgroundTaskConstants;
import com.liferay.portal.kernel.backgroundtask.display.BackgroundTaskDisplayFactory;
import com.liferay.portal.kernel.dao.orm.DynamicQuery;
import com.liferay.portal.kernel.dao.orm.RestrictionsFactoryUtil;
import com.liferay.portal.kernel.exception.RemoteOptionsException;
import com.liferay.portal.kernel.language.Language;
import com.liferay.portal.kernel.messaging.DestinationNames;
import com.liferay.portal.kernel.model.Group;
import com.liferay.portal.kernel.model.Layout;
import com.liferay.portal.kernel.scheduler.Trigger;
import com.liferay.portal.kernel.scheduler.TriggerFactory;
import com.liferay.portal.kernel.search.Sort;
import com.liferay.portal.kernel.security.auth.RemoteAuthException;
import com.liferay.portal.kernel.service.GroupLocalService;
import com.liferay.portal.kernel.service.LayoutLocalService;
import com.liferay.portal.kernel.service.LayoutService;
import com.liferay.portal.kernel.service.UserLocalService;
import com.liferay.portal.kernel.util.GetterUtil;
import com.liferay.portal.kernel.util.MapUtil;
import com.liferay.portal.kernel.util.Portal;
import com.liferay.portal.kernel.util.SetUtil;
import com.liferay.portal.kernel.util.StringUtil;
import com.liferay.portal.kernel.util.TimeZoneUtil;
import com.liferay.portal.kernel.util.UnicodeProperties;
import com.liferay.portal.kernel.util.Validator;
import com.liferay.portal.vulcan.pagination.Page;
import com.liferay.portal.vulcan.pagination.Pagination;
import com.liferay.staging.StagingGroupHelper;

import jakarta.ws.rs.BadRequestException;

import java.io.Serializable;

import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TimeZone;

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

		BackgroundTaskUtil.checkTaskExecutorClassName(
			backgroundTask, _CLASS_NAMES_TASK_EXECUTOR);

		_backgroundTaskLocalService.deleteBackgroundTask(backgroundTask);
	}

	@Override
	public PublishProcess getPublishProcess(Long publishProcessId)
		throws Exception {

		BackgroundTask backgroundTask =
			_backgroundTaskLocalService.getBackgroundTask(publishProcessId);

		PermissionUtil.checkPublishPermission(backgroundTask.getGroupId());

		BackgroundTaskUtil.checkTaskExecutorClassName(
			backgroundTask, _CLASS_NAMES_TASK_EXECUTOR);

		return _toPublishProcess(backgroundTask);
	}

	@Override
	public ProcessProgress getPublishProcessProgress(Long publishProcessId)
		throws Exception {

		BackgroundTask backgroundTask =
			_backgroundTaskLocalService.getBackgroundTask(publishProcessId);

		PermissionUtil.checkPublishPermission(backgroundTask.getGroupId());

		BackgroundTaskUtil.checkTaskExecutorClassName(
			backgroundTask, _CLASS_NAMES_TASK_EXECUTOR);

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
				contextCompany.getCompanyId(), siteExternalReferenceCode));

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

		BackgroundTaskUtil.checkTaskExecutorClassName(
			backgroundTask, _CLASS_NAMES_TASK_EXECUTOR);

		ExportImportConfiguration exportImportConfiguration =
			ExportImportConfigurationFactory.cloneExportImportConfiguration(
				_exportImportConfigurationLocalService.
					getExportImportConfiguration(
						MapUtil.getLong(
							backgroundTask.getTaskContextMap(),
							"exportImportConfigurationId")));

		if (StringUtil.equals(
				backgroundTask.getTaskExecutorClassName(),
				BackgroundTaskExecutorNames.
					LAYOUT_REMOTE_STAGING_BACKGROUND_TASK_EXECUTOR)) {

			Map<String, Serializable> settingsMap =
				exportImportConfiguration.getSettingsMap();

			_validateRemoteGroup(
				exportImportConfiguration.getGroupId(),
				_staging.stripProtocolFromRemoteAddress(
					MapUtil.getString(settingsMap, "remoteAddress")),
				MapUtil.getInteger(settingsMap, "remotePort"),
				MapUtil.getString(settingsMap, "remotePathContext"),
				MapUtil.getBoolean(settingsMap, "secureConnection"),
				MapUtil.getLong(settingsMap, "targetGroupId"));

			return _toPublishProcess(
				_backgroundTaskLocalService.getBackgroundTask(
					_staging.copyRemoteLayouts(exportImportConfiguration)));
		}

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
				contextCompany.getCompanyId(), siteExternalReferenceCode));

		long stagingGroupId = stagingGroup.getGroupId();

		PermissionUtil.checkPublishPermission(stagingGroupId);

		Map<String, String[]> parameterMap =
			ParameterMapUtil.putDateRangeParameters(
				publishProcessRequest.getDateRangeTypeAsString(),
				publishProcessRequest.getStartDate(),
				publishProcessRequest.getEndDate(),
				ParameterMapUtil.toParameterMap(publishProcessRequest),
				contextUser);

		parameterMap =
			_exportImportConfigurationParameterMapFactory.buildParameterMap(
				parameterMap);

		if (!stagingGroup.isStagedRemotely()) {
			parameterMap.put(
				PortletDataHandlerKeys.PERFORM_DIRECT_BINARY_IMPORT,
				new String[] {Boolean.TRUE.toString()});
		}

		boolean privateLayout = LayoutUtil.isPrivateLayout(parameterMap);

		if (privateLayout && !stagingGroup.isPrivateLayoutsEnabled()) {
			throw new BadRequestException("Private pages are not enabled");
		}

		long[] layoutIds = LayoutUtil.getLayoutIds(
			stagingGroupId, parameterMap, privateLayout);

		if (stagingGroup.isStagedRemotely()) {
			return _postSiteRemotePublishProcess(
				layoutIds, parameterMap, privateLayout, publishProcessRequest,
				stagingGroup);
		}

		if (publishProcessRequest.getRemoteConnection() != null) {
			throw new BadRequestException(
				"Remote staging is not enabled for site \"" +
					siteExternalReferenceCode + "\"");
		}

		Group liveGroup = GroupUtil.getLiveGroup(stagingGroup);

		if (!Validator.isBlank(publishProcessRequest.getCronExpression())) {
			return _scheduleSitePublishProcess(
				layoutIds, liveGroup, parameterMap, privateLayout,
				publishProcessRequest, stagingGroup);
		}

		Map<String, Serializable> settingsMap =
			_exportImportConfigurationSettingsMapFactory.
				buildPublishLayoutLocalSettingsMap(
					contextUser, stagingGroupId, liveGroup.getGroupId(),
					privateLayout, layoutIds, parameterMap);

		ExportImportConfiguration exportImportConfiguration =
			_exportImportConfigurationLocalService.
				addDraftExportImportConfiguration(
					contextUser.getUserId(), publishProcessRequest.getName(),
					ExportImportConfigurationConstants.
						TYPE_PUBLISH_LAYOUT_LOCAL,
					settingsMap);

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
			RestrictionsFactoryUtil.in(
				"taskExecutorClassName", _CLASS_NAMES_TASK_EXECUTOR));

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

	private Map<Long, Boolean> _getLayoutIdMap(
		long[] layoutIds, boolean privateLayout, Group stagingGroup) {

		Map<Long, Boolean> layoutIdMap = new LinkedHashMap<>();

		Set<Long> layoutIdsSet = SetUtil.fromArray(layoutIds);

		for (Layout layout :
				_layoutLocalService.getLayouts(
					stagingGroup.getGroupId(), privateLayout)) {

			if (layoutIdsSet.contains(layout.getLayoutId())) {
				layoutIdMap.put(layout.getPlid(), false);
			}
		}

		return layoutIdMap;
	}

	private String _getMessage(RemoteExportException remoteExportException) {
		int type = remoteExportException.getType();

		if (type == RemoteExportException.BAD_CONNECTION) {
			return "Unable to connect to the remote site at " +
				remoteExportException.getURL();
		}

		if (type == RemoteExportException.NO_GROUP) {
			return "No remote site exists with ID " +
				remoteExportException.getGroupId();
		}

		if (type == RemoteExportException.NO_PERMISSIONS) {
			return "The user does not have permission to publish to the " +
				"remote site";
		}

		if (type == RemoteExportException.SAME_GROUP) {
			return "The remote site must be different from the current site";
		}

		return "The remote site is not valid";
	}

	private String _getMessage(RemoteOptionsException remoteOptionsException) {
		int type = remoteOptionsException.getType();

		if (type == RemoteOptionsException.REMOTE_ADDRESS) {
			return "The remote address is not valid";
		}

		if (type == RemoteOptionsException.REMOTE_GROUP_ID) {
			return "The remote site ID is not valid";
		}

		if (type == RemoteOptionsException.REMOTE_PATH_CONTEXT) {
			return "The remote path context is not valid";
		}

		return "The remote port is not valid";
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

	private Date _getScheduleStartDate(
		PublishProcessRequest publishProcessRequest) {

		Date date = new Date();

		Date scheduleStartDate = publishProcessRequest.getScheduleStartDate();

		if (scheduleStartDate == null) {
			return date;
		}

		if (scheduleStartDate.before(date)) {
			throw new BadRequestException(
				"The schedule start date must be in the future");
		}

		return scheduleStartDate;
	}

	private String _getTimeZoneId(PublishProcessRequest publishProcessRequest) {
		String timeZoneId = publishProcessRequest.getTimeZoneId();

		if (!Validator.isBlank(timeZoneId)) {
			return timeZoneId;
		}

		TimeZone timeZone = TimeZoneUtil.getDefault();

		return timeZone.getID();
	}

	private boolean _isScheduled(
		ExportImportConfiguration exportImportConfiguration) {

		if (exportImportConfiguration == null) {
			return false;
		}

		if ((exportImportConfiguration.getType() ==
				ExportImportConfigurationConstants.
					TYPE_SCHEDULED_PUBLISH_LAYOUT_LOCAL) ||
			(exportImportConfiguration.getType() ==
				ExportImportConfigurationConstants.
					TYPE_SCHEDULED_PUBLISH_LAYOUT_REMOTE)) {

			return true;
		}

		Map<String, Serializable> settingsMap =
			exportImportConfiguration.getSettingsMap();

		Map<String, String[]> parameterMap =
			(Map<String, String[]>)settingsMap.get("parameterMap");

		if ((parameterMap != null) &&
			parameterMap.containsKey(ParameterMapUtil.CRON_EXPRESSION)) {

			return true;
		}

		return false;
	}

	private PublishProcess _postSiteRemotePublishProcess(
			long[] layoutIds, Map<String, String[]> parameterMap,
			boolean privateLayout, PublishProcessRequest publishProcessRequest,
			Group stagingGroup)
		throws Exception {

		Map<Long, Boolean> layoutIdMap = _getLayoutIdMap(
			layoutIds, privateLayout, stagingGroup);

		RemoteConnection remoteConnection =
			publishProcessRequest.getRemoteConnection();

		if (remoteConnection == null) {
			remoteConnection = new RemoteConnection();
		}

		UnicodeProperties typeSettingsUnicodeProperties =
			stagingGroup.getTypeSettingsProperties();

		String remoteAddress = _staging.stripProtocolFromRemoteAddress(
			GetterUtil.getString(
				remoteConnection.getRemoteAddress(),
				typeSettingsUnicodeProperties.getProperty("remoteAddress")));
		long remoteGroupId = GetterUtil.getLong(
			remoteConnection.getRemoteSiteId(),
			GetterUtil.getLong(
				typeSettingsUnicodeProperties.getProperty("remoteGroupId")));
		String remotePathContext = GetterUtil.getString(
			remoteConnection.getRemotePathContext(),
			typeSettingsUnicodeProperties.getProperty("remotePathContext"));
		int remotePort = GetterUtil.getInteger(
			remoteConnection.getRemotePort(),
			GetterUtil.getInteger(
				typeSettingsUnicodeProperties.getProperty("remotePort")));
		boolean secureConnection = GetterUtil.getBoolean(
			remoteConnection.getSecureConnection(),
			GetterUtil.getBoolean(
				typeSettingsUnicodeProperties.getProperty("secureConnection")));

		_validateRemoteGroup(
			stagingGroup.getGroupId(), remoteAddress, remotePort,
			remotePathContext, secureConnection, remoteGroupId);

		if (!Validator.isBlank(publishProcessRequest.getCronExpression())) {
			return _scheduleSiteRemotePublishProcess(
				layoutIdMap, parameterMap, privateLayout, publishProcessRequest,
				remoteAddress, remoteGroupId, remotePathContext, remotePort,
				secureConnection, stagingGroup);
		}

		Map<String, Serializable> settingsMap =
			_exportImportConfigurationSettingsMapFactory.
				buildPublishLayoutRemoteSettingsMap(
					contextUser, stagingGroup.getGroupId(), privateLayout,
					layoutIdMap, parameterMap, remoteAddress, remotePort,
					remotePathContext, secureConnection, remoteGroupId,
					privateLayout);

		ExportImportConfiguration exportImportConfiguration =
			_exportImportConfigurationLocalService.
				addDraftExportImportConfiguration(
					contextUser.getUserId(), publishProcessRequest.getName(),
					ExportImportConfigurationConstants.
						TYPE_PUBLISH_LAYOUT_REMOTE,
					settingsMap);

		return _toPublishProcess(
			_backgroundTaskLocalService.getBackgroundTask(
				_staging.copyRemoteLayouts(exportImportConfiguration)));
	}

	private PublishProcess _scheduleSitePublishProcess(
			long[] layoutIds, Group liveGroup,
			Map<String, String[]> parameterMap, boolean privateLayout,
			PublishProcessRequest publishProcessRequest, Group stagingGroup)
		throws Exception {

		Date scheduleStartDate = _getScheduleStartDate(publishProcessRequest);

		String cronExpression = publishProcessRequest.getCronExpression();
		String groupName = _staging.getSchedulerGroupName(
			DestinationNames.LAYOUTS_LOCAL_PUBLISHER, liveGroup.getGroupId());
		String name = publishProcessRequest.getName();
		String timeZoneId = _getTimeZoneId(publishProcessRequest);

		_validateCronExpression(
			cronExpression, groupName, name,
			publishProcessRequest.getScheduleEndDate(), scheduleStartDate,
			timeZoneId);

		parameterMap.put(
			ParameterMapUtil.CRON_EXPRESSION, new String[] {cronExpression});
		parameterMap.put(
			ParameterMapUtil.TIME_ZONE_ID, new String[] {timeZoneId});

		_layoutService.schedulePublishToLive(
			stagingGroup.getGroupId(), liveGroup.getGroupId(), privateLayout,
			layoutIds, parameterMap, groupName, cronExpression,
			scheduleStartDate, publishProcessRequest.getScheduleEndDate(),
			name);

		return _toPublishProcess(name);
	}

	private PublishProcess _scheduleSiteRemotePublishProcess(
			Map<Long, Boolean> layoutIdMap, Map<String, String[]> parameterMap,
			boolean privateLayout, PublishProcessRequest publishProcessRequest,
			String remoteAddress, long remoteGroupId, String remotePathContext,
			int remotePort, boolean secureConnection, Group stagingGroup)
		throws Exception {

		Date scheduleStartDate = _getScheduleStartDate(publishProcessRequest);

		String cronExpression = publishProcessRequest.getCronExpression();
		String groupName = _staging.getSchedulerGroupName(
			DestinationNames.LAYOUTS_REMOTE_PUBLISHER,
			stagingGroup.getGroupId());
		String name = publishProcessRequest.getName();
		String timeZoneId = _getTimeZoneId(publishProcessRequest);

		_validateCronExpression(
			cronExpression, groupName, name,
			publishProcessRequest.getScheduleEndDate(), scheduleStartDate,
			timeZoneId);

		parameterMap.put(
			ParameterMapUtil.CRON_EXPRESSION, new String[] {cronExpression});
		parameterMap.put(
			ParameterMapUtil.TIME_ZONE_ID, new String[] {timeZoneId});

		_layoutService.schedulePublishToRemote(
			stagingGroup.getGroupId(), privateLayout, layoutIdMap, parameterMap,
			remoteAddress, remotePort, remotePathContext, secureConnection,
			remoteGroupId, privateLayout, null, null, groupName, cronExpression,
			scheduleStartDate, publishProcessRequest.getScheduleEndDate(),
			name);

		return _toPublishProcess(name);
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
					() -> BackgroundTaskUtil.getErrorMessage(
						backgroundTask,
						contextAcceptLanguage.getPreferredLocale()));
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

	private PublishProcess _toPublishProcess(String name) {
		return new PublishProcess() {
			{
				setDateCreated(Date::new);
				setName(() -> name);
			}
		};
	}

	private PublishProcess.Type _toType(BackgroundTask backgroundTask) {
		if (_isScheduled(
				_exportImportConfigurationLocalService.
					fetchExportImportConfiguration(
						MapUtil.getLong(
							backgroundTask.getTaskContextMap(),
							"exportImportConfigurationId")))) {

			return PublishProcess.Type.SCHEDULED;
		}

		return PublishProcess.Type.MANUAL;
	}

	private void _validateCronExpression(
		String cronExpression, String groupName, String name,
		Date scheduleEndDate, Date scheduleStartDate, String timeZoneId) {

		Trigger trigger = null;

		try {
			trigger = _triggerFactory.createTrigger(
				name, groupName, scheduleStartDate, scheduleEndDate,
				cronExpression, TimeZone.getTimeZone(timeZoneId));
		}
		catch (Exception exception) {
			throw new BadRequestException(
				"The publication schedule is invalid", exception);
		}

		if (trigger.getFireDateAfter(new Date(0)) == null) {
			throw new BadRequestException(
				"The publication schedule never runs");
		}
	}

	private void _validateRemoteGroup(
			long groupId, String remoteAddress, int remotePort,
			String remotePathContext, boolean secureConnection,
			long remoteGroupId)
		throws Exception {

		try {
			_groupLocalService.validateRemote(
				groupId, remoteAddress, remotePort, remotePathContext,
				secureConnection, remoteGroupId);
		}
		catch (RemoteAuthException remoteAuthException) {
			throw new BadRequestException(
				"Unable to authenticate with the remote site",
				remoteAuthException);
		}
		catch (RemoteExportException remoteExportException) {
			throw new BadRequestException(
				_getMessage(remoteExportException), remoteExportException);
		}
		catch (RemoteOptionsException remoteOptionsException) {
			throw new BadRequestException(
				_getMessage(remoteOptionsException), remoteOptionsException);
		}
	}

	private static final String[] _CLASS_NAMES_TASK_EXECUTOR = {
		BackgroundTaskExecutorNames.
			LAYOUT_REMOTE_STAGING_BACKGROUND_TASK_EXECUTOR,
		BackgroundTaskExecutorNames.LAYOUT_STAGING_BACKGROUND_TASK_EXECUTOR
	};

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
	private GroupLocalService _groupLocalService;

	@Reference
	private Language _language;

	@Reference
	private LayoutLocalService _layoutLocalService;

	@Reference
	private LayoutService _layoutService;

	@Reference
	private Portal _portal;

	@Reference
	private Staging _staging;

	@Reference
	private StagingGroupHelper _stagingGroupHelper;

	@Reference
	private TriggerFactory _triggerFactory;

	@Reference
	private UserLocalService _userLocalService;

}