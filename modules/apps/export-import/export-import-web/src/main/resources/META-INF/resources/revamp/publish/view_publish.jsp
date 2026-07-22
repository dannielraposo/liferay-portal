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
%>

<frontend-data-set:headless-display
	apiURL="/o/export-import/v1.0/sites/<%= liveGroup.getExternalReferenceCode() %>/publish-processes"
	id="com_liferay_staging_processes_web_portlet_StagingProcessesPortlet-publishProcesses"
	propsTransformer="{PublishProcessesFDSPropsTransformer} from exportimport-web"
	style="fluid"
/>