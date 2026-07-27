<%--
/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */
--%>

<%@ include file="/init.jsp" %>

<%
portletDisplay.setShowBackIcon(true);
portletDisplay.setURLBack(ParamUtil.getString(request, "backURL", String.valueOf(renderResponse.createRenderURL())));
portletDisplay.setURLBackTitle(portletDisplay.getPortletDisplayName());

long backgroundTaskId = GetterUtil.getLong(request.getParameter("backgroundTaskId"));

BackgroundTask backgroundTask = BackgroundTaskManagerUtil.fetchBackgroundTask(backgroundTaskId);

renderResponse.setTitle(backgroundTask.getName());

ImportReportEntriesDisplayContext importReportEntriesDisplayContext = new ImportReportEntriesDisplayContext(request, renderResponse);
%>

<clay:navigation-bar
	navigationItems='<%=
		new JSPNavigationItemList(pageContext) {
			{
				add(
					navigationItem -> {
						navigationItem.setActive(true);
						navigationItem.setHref(currentURL);
						navigationItem.setLabel(LanguageUtil.get(httpServletRequest, "report-entries"));
					});
			}
		}
	%>'
/>

<aui:form method="post" name="fm">
	<frontend-data-set:headless-display
		apiURL='<%= "/o/export-import/v1.0/publish-processes/" + backgroundTaskId + "/report-entries" %>'
		fdsActionDropdownItems="<%= importReportEntriesDisplayContext.getFDSActionDropdownItems() %>"
		id="<%= ExportImportFDSNames.PUBLISH_REPORT_ENTRIES %>"
		propsTransformer="{ImportReportFDSPropsTransformer} from exportimport-web"
		style="fluid"
	/>
</aui:form>