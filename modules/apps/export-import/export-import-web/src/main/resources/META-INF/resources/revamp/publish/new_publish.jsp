<%--
/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */
--%>

<%@ include file="/revamp/init.jsp" %>

<liferay-staging:defineObjects />

<%
if (liveGroup == null) {
	liveGroup = group;
	liveGroupId = groupId;
}

String publishBackURL = ParamUtil.getString(request, "backURL", themeDisplay.getURLCurrent());

portletDisplay.setShowBackIcon(true);
portletDisplay.setURLBack(publishBackURL);

PublishSchedulerDisplayContext publishSchedulerDisplayContext = new PublishSchedulerDisplayContext(locale);

String jobName = ParamUtil.getString(request, "jobName");

renderResponse.setTitle(publishSchedulerDisplayContext.getTitle(jobName, liveGroup.getGroupId()));

String publishScopePath = "/o/export-import/v1.0/sites/" + liveGroup.getExternalReferenceCode();

String scheduledPublishBackURL = HttpComponentsUtil.setParameter(publishBackURL, liferayPortletResponse.getNamespace() + "tabs1", "scheduled");

Date lastPublishDate = null;

LayoutSet layoutSet = LayoutSetLocalServiceUtil.fetchLayoutSet((stagingGroup != null) ? stagingGroup.getGroupId() : groupId, false);

if (layoutSet != null) {
	lastPublishDate = ExportImportDateUtil.getLastPublishDate(layoutSet);
}
%>

<clay:container-fluid
	cssClass="container-form-lg"
>
	<div class="sheet">
		<span aria-hidden="true" class="loading-animation mb-9 mt-8"></span>
	</div>

	<react:component
		module="{NewPublish} from exportimport-web"
		props='<%=
			HashMapBuilder.<String, Object>put(
				"backURL", publishBackURL
			).put(
				"commentsAndRatingsEnabled", true
			).put(
				"defaultScheduled", ParamUtil.getBoolean(request, "scheduled")
			).put(
				"jobName", jobName
			).put(
				"lastPublishDate", (lastPublishDate == null) ? null : String.valueOf(lastPublishDate.toInstant())
			).put(
				"lookAndFeelEnabled", true
			).put(
				"pageTreeModalConfiguration",
				HashMapBuilder.<String, Object>put(
					"liveGroupId", liveGroup.getGroupId()
				).put(
					"pageSize", PropsValues.LAYOUT_MANAGE_PAGES_INITIAL_CHILDREN
				).put(
					"privateLayoutsAvailable", liveGroup.isPrivateLayoutsEnabled() && liveGroup.hasPrivateLayouts()
				).build()
			).put(
				"publishPreviewAPIURL", publishScopePath + "/publish-preview"
			).put(
				"publishProcessAPIURL", publishScopePath + "/publish-processes"
			).put(
				"scheduledBackURL", scheduledPublishBackURL
			).put(
				"scheduledPublishProcessesAPIURL", publishScopePath + "/scheduled-publish-processes"
			).put(
				"timeZoneId", timeZone.getID()
			).put(
				"timeZones", publishSchedulerDisplayContext.getTimeZonesJSONArray()
			).build()
		%>'
	/>
</clay:container-fluid>