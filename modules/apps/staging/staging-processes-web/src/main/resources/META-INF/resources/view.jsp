<%--
/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */
--%>

<%@ include file="/init.jsp" %>

<%
boolean showStagingConfiguration = ParamUtil.getBoolean(request, "showStagingConfiguration");
%>

<c:choose>
	<c:when test="<%= !GroupPermissionUtil.contains(permissionChecker, group, ActionKeys.VIEW_STAGING) %>">
		<div class="alert alert-info">
			<liferay-ui:message key="you-do-not-have-permission-to-access-the-requested-resource" />
		</div>
	</c:when>
	<c:when test="<%= showStagingConfiguration || (PropsValues.STAGING_LIVE_GROUP_REMOTE_STAGING_ENABLED && !group.isStaged()) || (!group.isStaged() && !group.hasLocalOrRemoteStagingGroup()) %>">

		<%
		if (group.isStaged() || group.hasLocalOrRemoteStagingGroup()) {
			portletDisplay.setShowBackIcon(true);

			portletDisplay.setURLBack(
				PortletURLBuilder.create(
					PortalUtil.getControlPanelPortletURL(request, StagingProcessesPortletKeys.STAGING_PROCESSES, PortletRequest.RENDER_PHASE)
				).setMVCPath(
					"/view.jsp"
				).buildString());
		}
		%>

		<liferay-portlet:runtime
			portletName="<%= StagingConfigurationPortletKeys.STAGING_CONFIGURATION %>"
		/>
	</c:when>
	<c:when test='<%= FeatureFlagManagerUtil.isEnabled(company.getCompanyId(), "LPD-96689") %>'>

		<%
		String tabs1 = ParamUtil.getString(request, "tabs1", "processes");

		String publishScopePath = "/o/export-import/v1.0/sites/" + liveGroup.getExternalReferenceCode();

		String newPublishURL = PortletURLBuilder.createRenderURL(
			liferayPortletResponse
		).setMVCRenderCommandName(
			"/staging_processes/view_new_publish"
		).setBackURL(
			themeDisplay.getURLCurrent()
		).setParameter(
			"groupId", liveGroup.getGroupId()
		).setParameter(
			"scheduled", tabs1.equals("scheduled")
		).buildString();

		CreationMenu publishCreationMenu = CreationMenuBuilder.addPrimaryDropdownItem(
			dropdownItem -> {
				dropdownItem.setHref(newPublishURL);
				dropdownItem.setLabel(LanguageUtil.get(request, "new"));
			}
		).build();

		FDSActionDropdownItem relaunchPublishFDSActionDropdownItem = new FDSActionDropdownItem("/o/export-import/v1.0/publish-processes/{id}/relaunch", "reload", "relaunch", LanguageUtil.get(request, "relaunch"), "post", null, "async");

		FDSActionDropdownItem deletePublishFDSActionDropdownItem =
			new FDSActionDropdownItem(
				"/o/export-import/v1.0/publish-processes/{id}", "trash", "delete", LanguageUtil.get(request, "delete"), "delete", null, "async",
				HashMapBuilder.<String, Object>put(
					"status.code", Arrays.asList(BackgroundTaskConstants.STATUS_IN_PROGRESS, BackgroundTaskConstants.STATUS_NEW, BackgroundTaskConstants.STATUS_QUEUED)
				).build());

		deletePublishFDSActionDropdownItem.setConfirmationMessage(LanguageUtil.get(request, "are-you-sure-you-want-to-delete-this"));

		FDSActionDropdownItem clearPublishFDSActionDropdownItem =
			new FDSActionDropdownItem(
				"/o/export-import/v1.0/publish-processes/{id}", "trash", "clear", LanguageUtil.get(request, "clear"), "delete", null, "async",
				HashMapBuilder.<String, Object>put(
					"status.code", Arrays.asList(BackgroundTaskConstants.STATUS_CANCELLED, BackgroundTaskConstants.STATUS_COMPLETED_WITH_ERRORS, BackgroundTaskConstants.STATUS_FAILED, BackgroundTaskConstants.STATUS_SUCCESSFUL)
				).build());

		clearPublishFDSActionDropdownItem.setConfirmationMessage(LanguageUtil.get(request, "are-you-sure-you-want-to-delete-this"));

		FDSActionDropdownItem viewReportEntriesPublishFDSActionDropdownItem =
			new FDSActionDropdownItem(
				PortletURLBuilder.create(
					PortletURLFactoryUtil.create(request, ExportImportPortletKeys.EXPORT_IMPORT, PortletRequest.RENDER_PHASE)
				).setMVCRenderCommandName(
					"/export_import/view_publish_report_entries"
				).setBackURL(
					themeDisplay.getURLCurrent()
				).setParameter(
					"backgroundTaskId", "{id}"
				).setParameter(
					"groupId", liveGroup.getGroupId()
				).setWindowState(
					LiferayWindowState.MAXIMIZED
				).buildString(),
				"list-ul", "view-report-entries", LanguageUtil.get(request, "view-report-entries"), "get", null, "link",
				HashMapBuilder.<String, Object>put(
					"status.code", Arrays.asList(BackgroundTaskConstants.STATUS_COMPLETED_WITH_ERRORS, BackgroundTaskConstants.STATUS_FAILED)
				).build());

		List<FDSActionDropdownItem> publishFDSActionDropdownItems = ListUtil.fromArray(relaunchPublishFDSActionDropdownItem, viewReportEntriesPublishFDSActionDropdownItem, deletePublishFDSActionDropdownItem, clearPublishFDSActionDropdownItem);

		FDSActionDropdownItem editScheduledPublishFDSActionDropdownItem =
			new FDSActionDropdownItem(
				PortletURLBuilder.createRenderURL(
					liferayPortletResponse
				).setMVCRenderCommandName(
					"/staging_processes/view_new_publish"
				).setBackURL(
					themeDisplay.getURLCurrent()
				).setParameter(
					"groupId", liveGroup.getGroupId()
				).setParameter(
					"jobName", "{jobName}"
				).buildString(),
				"pencil", "edit", LanguageUtil.get(request, "edit"), "get", null, "link");

		FDSActionDropdownItem unscheduleScheduledPublishFDSActionDropdownItem = new FDSActionDropdownItem(publishScopePath + "/scheduled-publish-processes/{jobName}", "trash", "unschedule", LanguageUtil.get(request, "unschedule"), "delete", null, "async");

		unscheduleScheduledPublishFDSActionDropdownItem.setConfirmationMessage(LanguageUtil.get(request, "are-you-sure-you-want-to-unschedule-this-publication"));

		String processesTabURL = PortletURLBuilder.createRenderURL(
			liferayPortletResponse
		).setTabs1(
			"processes"
		).buildString();

		String scheduledTabURL = PortletURLBuilder.createRenderURL(
			liferayPortletResponse
		).setTabs1(
			"scheduled"
		).buildString();
		%>

		<clay:navigation-bar
			navigationItems='<%=
				NavigationItemListBuilder.add(
					navigationItem -> {
						navigationItem.setActive(tabs1.equals("processes"));
						navigationItem.setHref(processesTabURL);
						navigationItem.setLabel(LanguageUtil.get(request, "processes"));
					}
				).add(
					navigationItem -> {
						navigationItem.setActive(tabs1.equals("scheduled"));
						navigationItem.setHref(scheduledTabURL);
						navigationItem.setLabel(LanguageUtil.get(request, "scheduled"));
					}
				).build()
			%>'
		/>

		<c:choose>
			<c:when test='<%= tabs1.equals("scheduled") %>'>
				<frontend-data-set:headless-display
					apiURL='<%= publishScopePath + "/scheduled-publish-processes" %>'
					creationMenu="<%= publishCreationMenu %>"
					fdsActionDropdownItems="<%= ListUtil.fromArray(editScheduledPublishFDSActionDropdownItem, unscheduleScheduledPublishFDSActionDropdownItem) %>"
					id="com_liferay_staging_processes_web_portlet_StagingProcessesPortlet-scheduledPublishProcesses"
					propsTransformer="{ScheduledPublishProcessesFDSPropsTransformer} from exportimport-web"
					style="fluid"
					uniformActionsDisplay="<%= true %>"
				/>
			</c:when>
			<c:otherwise>
				<frontend-data-set:headless-display
					apiURL='<%= publishScopePath + "/publish-processes" %>'
					creationMenu="<%= publishCreationMenu %>"
					fdsActionDropdownItems="<%= publishFDSActionDropdownItems %>"
					id="com_liferay_staging_processes_web_portlet_StagingProcessesPortlet-publishProcesses"
					propsTransformer="{PublishProcessesFDSPropsTransformer} from exportimport-web"
					style="fluid"
					uniformActionsDisplay="<%= true %>"
				/>
			</c:otherwise>
		</c:choose>
	</c:when>
	<c:otherwise>
		<liferay-util:include page="/navigation.jsp" servletContext="<%= application %>" />
	</c:otherwise>
</c:choose>