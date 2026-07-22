/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.exportimport.rest.resource.v1_0.test;

import com.liferay.arquillian.extension.junit.bridge.junit.Arquillian;
import com.liferay.blogs.constants.BlogsPortletKeys;
import com.liferay.blogs.model.BlogsEntry;
import com.liferay.exportimport.changeset.constants.ChangesetPortletKeys;
import com.liferay.exportimport.kernel.lar.ExportImportDateUtil;
import com.liferay.exportimport.kernel.lar.PortletDataHandlerControl;
import com.liferay.exportimport.kernel.lar.PortletDataHandlerKeys;
import com.liferay.exportimport.kernel.model.ExportImportConfiguration;
import com.liferay.exportimport.kernel.service.ExportImportConfigurationLocalService;
import com.liferay.exportimport.kernel.staging.StagingUtil;
import com.liferay.exportimport.rest.client.dto.v1_0.ProcessProgress;
import com.liferay.exportimport.rest.client.dto.v1_0.PublishProcess;
import com.liferay.exportimport.rest.client.dto.v1_0.PublishProcessRequest;
import com.liferay.exportimport.rest.client.dto.v1_0.RequestPortletDataHandler;
import com.liferay.exportimport.rest.client.dto.v1_0.RequestPortletDataHandlerControl;
import com.liferay.exportimport.rest.client.pagination.Page;
import com.liferay.exportimport.rest.client.pagination.Pagination;
import com.liferay.exportimport.rest.client.resource.v1_0.PublishProcessResource;
import com.liferay.exportimport.test.util.ExportImportTestUtil;
import com.liferay.journal.model.JournalArticle;
import com.liferay.layout.test.util.LayoutTestUtil;
import com.liferay.petra.string.StringPool;
import com.liferay.portal.background.task.model.BackgroundTask;
import com.liferay.portal.background.task.service.BackgroundTaskLocalService;
import com.liferay.portal.kernel.backgroundtask.BackgroundTaskStatus;
import com.liferay.portal.kernel.backgroundtask.BackgroundTaskStatusRegistryUtil;
import com.liferay.portal.kernel.backgroundtask.constants.BackgroundTaskConstants;
import com.liferay.portal.kernel.messaging.DestinationNames;
import com.liferay.portal.kernel.messaging.Message;
import com.liferay.portal.kernel.model.Group;
import com.liferay.portal.kernel.model.User;
import com.liferay.portal.kernel.scheduler.SchedulerEngineHelperUtil;
import com.liferay.portal.kernel.scheduler.StorageType;
import com.liferay.portal.kernel.scheduler.messaging.SchedulerResponse;
import com.liferay.portal.kernel.service.GroupLocalService;
import com.liferay.portal.kernel.service.LayoutLocalService;
import com.liferay.portal.kernel.service.UserLocalService;
import com.liferay.portal.kernel.test.util.GroupTestUtil;
import com.liferay.portal.kernel.test.util.RandomTestUtil;
import com.liferay.portal.kernel.test.util.TestPropsValues;
import com.liferay.portal.kernel.test.util.UserTestUtil;
import com.liferay.portal.kernel.util.ArrayUtil;
import com.liferay.portal.kernel.util.GetterUtil;
import com.liferay.portal.kernel.util.LocaleUtil;
import com.liferay.portal.kernel.util.MapUtil;
import com.liferay.portal.kernel.util.PortalUtil;
import com.liferay.portal.kernel.util.Time;
import com.liferay.portal.test.log.LogCapture;
import com.liferay.portal.test.log.LoggerTestUtil;
import com.liferay.portal.test.rule.Inject;
import com.liferay.staging.StagingGroupHelper;

import java.io.Serializable;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

/**
 * @author Daniel Raposo
 */
@RunWith(Arquillian.class)
public class PublishProcessResourceTest
	extends BasePublishProcessResourceTestCase {

	@Before
	@Override
	public void setUp() throws Exception {
		super.setUp();

		UserTestUtil.setUser(TestPropsValues.getUser());

		GroupTestUtil.enableLocalStaging(irrelevantGroup);
		GroupTestUtil.enableLocalStaging(testGroup);

		String password = RandomTestUtil.randomString();

		_user = UserTestUtil.addUser(testCompany, password);

		_publishProcessResource = PublishProcessResource.builder(
		).authentication(
			_user.getEmailAddress(), password
		).endpoint(
			testCompany.getVirtualHostname(),
			PortalUtil.getPortalServerPort(false), "http"
		).locale(
			LocaleUtil.getDefault()
		).build();
	}

	@After
	@Override
	public void tearDown() throws Exception {
		super.tearDown();

		_userLocalService.deleteUser(_user);
	}

	@Override
	@Test
	public void testGetSitePublishProcessesPage() throws Exception {
		Page<PublishProcess> page =
			publishProcessResource.getSitePublishProcessesPage(
				testGroup.getExternalReferenceCode(), null, null, null,
				Pagination.of(1, 10), null);

		Assert.assertTrue(
			"Enabling local staging must trigger an initial publish that is " +
				"listed among the site's publish processes",
			page.getTotalCount() >= 1);

		super.testGetSitePublishProcessesPage();
	}

	@Override
	@Test
	public void testPostPublishProcessRelaunch() throws Exception {
		PublishProcess publishProcess = _addPublishProcess(
			testGroup.getExternalReferenceCode(),
			RandomTestUtil.randomString());

		PublishProcess relaunchedPublishProcess =
			publishProcessResource.postPublishProcessRelaunch(
				publishProcess.getId());

		Assert.assertNotNull(relaunchedPublishProcess);
		Assert.assertNotEquals(
			publishProcess.getId(), relaunchedPublishProcess.getId());
	}

	@Override
	@Test
	public void testPostSitePublishProcess() throws Exception {
		assertHttpResponseStatusCode(
			403,
			_publishProcessResource.postSitePublishProcessHttpResponse(
				testGroup.getExternalReferenceCode(),
				new PublishProcessRequest() {
					{
						name = RandomTestUtil.randomString();
					}
				}));

		try (LogCapture logCapture = LoggerTestUtil.configureLog4JLogger(
				"com.liferay.portal.vulcan.internal.jaxrs.exception.mapper." +
					"WebApplicationExceptionMapper",
				LoggerTestUtil.WARN)) {

			Date now = new Date();

			assertHttpResponseStatusCode(
				400,
				publishProcessResource.postSitePublishProcessHttpResponse(
					testGroup.getExternalReferenceCode(),
					new PublishProcessRequest() {
						{
							endDate = new Date(now.getTime() - Time.HOUR);
							name = RandomTestUtil.randomString();
							startDate = now;
						}
					}));

			Group group = GroupTestUtil.addGroup();

			try {
				assertHttpResponseStatusCode(
					400,
					publishProcessResource.postSitePublishProcessHttpResponse(
						group.getExternalReferenceCode(),
						new PublishProcessRequest() {
							{
								name = RandomTestUtil.randomString();
							}
						}));
			}
			finally {
				GroupTestUtil.deleteGroup(group);
			}
		}

		LayoutTestUtil.addTypePortletLayout(
			_getStagingGroup(testGroup.getExternalReferenceCode()));

		int layoutsCount = _layoutLocalService.getLayoutsCount(
			testGroup.getGroupId(), false);

		String publishProcessName = RandomTestUtil.randomString();

		PublishProcess publishProcess = _addPublishProcess(
			testGroup.getExternalReferenceCode(), publishProcessName);

		Assert.assertEquals(publishProcessName, publishProcess.getName());
		assertValid(publishProcess);

		Assert.assertEquals(
			layoutsCount + 1,
			_layoutLocalService.getLayoutsCount(testGroup.getGroupId(), false));

		_assertScheduledPublishProcess(
			ExportImportDateUtil.RANGE_ALL, null, null, null);
		_assertScheduledPublishProcess(
			ExportImportDateUtil.RANGE_LAST,
			PublishProcessRequest.DateRangeType.LAST,
			new Date(System.currentTimeMillis() - Time.HOUR), null);
		_assertScheduledPublishProcess(
			ExportImportDateUtil.RANGE_DATE_RANGE, null,
			new Date(System.currentTimeMillis() - (2 * Time.HOUR)),
			new Date(System.currentTimeMillis() - Time.HOUR));
		_assertScheduledPublishProcess(
			ExportImportDateUtil.RANGE_DATE_RANGE, null,
			new Date(System.currentTimeMillis() - (2 * Time.HOUR)), null);

		_assertScheduledPublishProcess(
			ExportImportDateUtil.RANGE_FROM_LAST_PUBLISH_DATE,
			PublishProcessRequest.DateRangeType.FROM_LAST_PUBLISH_DATE, null,
			null);
		_assertScheduledPublishProcess(
			ExportImportDateUtil.RANGE_FROM_LAST_PUBLISH_DATE,
			PublishProcessRequest.DateRangeType.FROM_LAST_PUBLISH_DATE, null,
			null,
			new RequestPortletDataHandler() {
				{
					name =
						PortletDataHandlerKeys.PORTLET_DATA +
							StringPool.UNDERLINE + BlogsPortletKeys.BLOGS;
					requestPortletDataHandlerControls =
						new RequestPortletDataHandlerControl[] {
							new RequestPortletDataHandlerControl() {
								{
									name =
										PortletDataHandlerControl.
											getNamespacedName(
												"blogs", "entries");
								}
							}
						};
				}
			});
	}

	@Override
	protected PublishProcess testDeletePublishProcess_addPublishProcess()
		throws Exception {

		return _addPublishProcess(
			testGroup.getExternalReferenceCode(),
			RandomTestUtil.randomString());
	}

	@Override
	protected PublishProcess testGetPublishProcess_addPublishProcess()
		throws Exception {

		return _addPublishProcess(
			testGroup.getExternalReferenceCode(),
			RandomTestUtil.randomString());
	}

	@Override
	protected ProcessProgress testGetPublishProcessProgress_addProcessProgress(
			long publishProcessId, ProcessProgress processProgress)
		throws Exception {

		BackgroundTaskStatus backgroundTaskStatus =
			BackgroundTaskStatusRegistryUtil.registerBackgroundTaskStatus(
				publishProcessId, null);

		backgroundTaskStatus.setAttribute(
			"allModelAdditionCountersTotal", 100L);
		backgroundTaskStatus.setAttribute(
			"currentModelAdditionCountersTotal", 50L);

		return new ProcessProgress() {
			{
				percentage = 50;
			}
		};
	}

	@Override
	protected PublishProcess testGetSitePublishProcessesPage_addPublishProcess(
			String siteExternalReferenceCode, PublishProcess publishProcess)
		throws Exception {

		return _addPublishProcess(
			siteExternalReferenceCode, publishProcess.getName());
	}

	@Override
	protected Map<String, Map<String, String>>
			testGetSitePublishProcessesPage_getExpectedActions(
				String siteExternalReferenceCode)
		throws Exception {

		return new HashMap<>();
	}

	private PublishProcess _addPublishProcess(
			String siteExternalReferenceCode, String publishProcessName)
		throws Exception {

		PublishProcess publishProcess =
			publishProcessResource.postSitePublishProcess(
				siteExternalReferenceCode,
				new PublishProcessRequest() {
					{
						name = publishProcessName;
					}
				});

		ExportImportTestUtil.retryAssert(
			1, TimeUnit.SECONDS, 30, TimeUnit.SECONDS,
			() -> {
				BackgroundTask backgroundTask =
					_backgroundTaskLocalService.getBackgroundTask(
						publishProcess.getId());

				Assert.assertEquals(
					BackgroundTaskConstants.STATUS_SUCCESSFUL,
					backgroundTask.getStatus());
			});

		return publishProcess;
	}

	private void _assertScheduledPublishProcess(
			String expectedRange,
			PublishProcessRequest.DateRangeType publishProcessDateRangeType,
			Date publishProcessStartDate, Date publishProcessEndDate,
			RequestPortletDataHandler...
				publishProcessRequestPortletDataHandlers)
		throws Exception {

		Group liveGroup = _stagingGroupHelper.fetchLocalLiveGroup(
			_getStagingGroup(testGroup.getExternalReferenceCode()));

		String groupName = StagingUtil.getSchedulerGroupName(
			DestinationNames.LAYOUTS_LOCAL_PUBLISHER, liveGroup.getGroupId());

		PublishProcess publishProcess =
			publishProcessResource.postSitePublishProcess(
				testGroup.getExternalReferenceCode(),
				new PublishProcessRequest() {
					{
						cronExpression = "0 0 3 * * ?";
						dateRangeType = publishProcessDateRangeType;
						endDate = publishProcessEndDate;
						name = RandomTestUtil.randomString();
						requestPortletDataHandlers =
							publishProcessRequestPortletDataHandlers;
						startDate = publishProcessStartDate;
						timeZoneId = "UTC";
					}
				});

		SchedulerResponse schedulerResponse =
			SchedulerEngineHelperUtil.getScheduledJob(
				publishProcess.getJobName(), groupName, StorageType.PERSISTED);

		Message message = schedulerResponse.getMessage();

		ExportImportConfiguration exportImportConfiguration =
			_exportImportConfigurationLocalService.getExportImportConfiguration(
				GetterUtil.getLong(message.getPayload()));

		Map<String, Serializable> settingsMap =
			exportImportConfiguration.getSettingsMap();

		Map<String, String[]> parameterMap =
			(Map<String, String[]>)settingsMap.get("parameterMap");

		Assert.assertEquals(
			expectedRange, MapUtil.getString(parameterMap, "range"));

		if (expectedRange.equals(
				ExportImportDateUtil.RANGE_FROM_LAST_PUBLISH_DATE)) {

			Assert.assertTrue(
				MapUtil.getBoolean(
					parameterMap,
					PortletDataHandlerKeys.PORTLET_DATA + StringPool.UNDERLINE +
						ChangesetPortletKeys.CHANGESET));

			Assert.assertFalse(
				MapUtil.getBoolean(
					parameterMap, PortletDataHandlerKeys.PORTLET_DATA_ALL));

			if (ArrayUtil.isEmpty(publishProcessRequestPortletDataHandlers)) {
				Assert.assertFalse(
					parameterMap.containsKey(BlogsEntry.class.getName()));
			}
			else {
				Assert.assertTrue(
					MapUtil.getBoolean(
						parameterMap, BlogsEntry.class.getName()));
				Assert.assertFalse(
					parameterMap.containsKey(JournalArticle.class.getName()));
			}
		}

		if (expectedRange.equals(ExportImportDateUtil.RANGE_DATE_RANGE)) {
			Assert.assertEquals(
				publishProcessEndDate != null,
				parameterMap.containsKey("endDateSecond"));
			Assert.assertEquals(
				publishProcessEndDate != null,
				parameterMap.containsKey("endDateYear"));
			Assert.assertTrue(parameterMap.containsKey("startDateSecond"));
			Assert.assertTrue(parameterMap.containsKey("startDateYear"));
		}
		else if (expectedRange.equals(ExportImportDateUtil.RANGE_LAST)) {
			Assert.assertEquals("1", MapUtil.getString(parameterMap, "last"));
		}
	}

	private Group _getStagingGroup(String siteExternalReferenceCode) {
		return _stagingGroupHelper.fetchLocalStagingGroup(
			_groupLocalService.fetchGroupByExternalReferenceCode(
				siteExternalReferenceCode, testCompany.getCompanyId()));
	}

	@Inject
	private BackgroundTaskLocalService _backgroundTaskLocalService;

	@Inject
	private ExportImportConfigurationLocalService
		_exportImportConfigurationLocalService;

	@Inject
	private GroupLocalService _groupLocalService;

	@Inject
	private LayoutLocalService _layoutLocalService;

	private PublishProcessResource _publishProcessResource;

	@Inject
	private StagingGroupHelper _stagingGroupHelper;

	private User _user;

	@Inject
	private UserLocalService _userLocalService;

}