/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayAlert from '@clayui/alert';
import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import ClayLayout from '@clayui/layout';
import {Form, Formik, FormikValues} from 'formik';
import {sub} from 'frontend-js-web';
import React, {useEffect, useRef, useState} from 'react';

import DataSelection from '../../components/DataSelection';
import Footer from '../../components/Footer';
import Setup from '../../components/Setup';
import {DateFilterValues, Range} from '../../components/date_filter';
import {ContentSelection} from '../../components/forms/content_selector/ContentSelector';
import {
	FormikFieldCheckbox,
	FormikFieldText,
} from '../../components/forms/formik';
import {usePreview} from '../../hooks/usePreview';
import {deleteScheduledPublishProcess} from '../../services/deleteScheduledPublishProcess';
import {getScheduledPublishProcess} from '../../services/getScheduledPublishProcess';
import {postPublishProcess} from '../../services/postPublishProcess';
import {PagePickerConfiguration} from '../../types/pagePicker';
import {
	getSelectedDeletionCount,
	getSelectedItemsCount,
	toProcessRequestFlags,
	withSelectedLayoutSetCount,
} from '../../utils/contentSelection';
import {getProcessFormErrors} from '../../utils/getProcessFormErrors';
import {toContentSelection} from '../../utils/toContentSelection';
import {toDateFilterValues} from '../../utils/toDateFilterValues';
import {toRequestPortletDataHandlers} from '../../utils/toRequestPortletDataHandlers';
import {FormikFieldPublishScheduler} from './components/scheduler/FormikFieldPublishScheduler';
import {
	fromCronExpression,
	toCronExpression,
	toWallClockDateTime,
	toZonedDate,
} from './components/scheduler/cron';
import {getDefaultTimeZoneId} from './components/scheduler/timeZones';
import {ScheduleValues, TimeZoneOption} from './components/scheduler/types';
import {
	getInitialScheduleValues,
	getScheduleValuesErrors,
} from './components/scheduler/utils';

type RemoteConnection = {
	remoteAddress: string;
	remotePathContext: string;
	remotePort: string;
	remoteSiteId: string;
	secureConnection: boolean;
};

type PublishFormValues = {
	contentSelection: ContentSelection | undefined;
	dateFilter: DateFilterValues;
	deletions: boolean;
	name: string;
	permissions: boolean;
	remoteConnection?: RemoteConnection;
	scheduleValues: ScheduleValues;
};

export function NewPublish({
	backURL,
	commentsAndRatingsEnabled = false,
	defaultScheduled = false,
	lastPublishDate,
	lookAndFeelEnabled = false,
	pagePickerConfiguration,
	publishPreviewAPIURL,
	publishProcessAPIURL,
	remoteConnectionSettings,
	scheduledBackURL,
	scheduledPublishProcessAPIURL,
	scheduledPublishProcessId,
	timeZoneId,
	timeZones,
}: {
	backURL: string;
	commentsAndRatingsEnabled?: boolean;
	defaultScheduled?: boolean;
	lastPublishDate?: string;
	lookAndFeelEnabled?: boolean;
	pagePickerConfiguration: PagePickerConfiguration;
	publishPreviewAPIURL: string;
	publishProcessAPIURL: string;
	remoteConnectionSettings?: RemoteConnection;
	scheduledBackURL: string;
	scheduledPublishProcessAPIURL: string;
	scheduledPublishProcessId?: number;
	timeZoneId: string;
	timeZones: TimeZoneOption[];
}) {
	const {
		appliedDateFilterRef,
		error,
		handleApplyFilter,
		loading,
		preview,
		setError,
	} = usePreview(publishPreviewAPIURL);
	const [initialFormValues, setInitialFormValues] =
		useState<PublishFormValues>(() => ({
			contentSelection: undefined,
			dateFilter: {range: Range.All},
			deletions: false,
			name: '',
			permissions: false,
			remoteConnection: remoteConnectionSettings,
			scheduleValues: getInitialScheduleValues(
				getDefaultTimeZoneId(timeZones, timeZoneId),
				defaultScheduled
			),
		}));
	const editedScheduledPublishProcessId = scheduledPublishProcessId ?? 0;

	const [seeding, setSeeding] = useState(!!editedScheduledPublishProcessId);
	const seededRef = useRef(false);

	useEffect(() => {
		if (!editedScheduledPublishProcessId || !preview || seededRef.current) {
			return;
		}

		seededRef.current = true;

		getScheduledPublishProcess({
			url: `${scheduledPublishProcessAPIURL}/${editedScheduledPublishProcessId}`,
		}).then((scheduledPublishProcessResponse) => {
			if (scheduledPublishProcessResponse.error !== null) {
				setError(scheduledPublishProcessResponse.error);

				return;
			}

			const scheduledPublishProcess =
				scheduledPublishProcessResponse.data;

			const publishParameters =
				scheduledPublishProcess.publishParameters ?? {};

			const dateFilter = toDateFilterValues(publishParameters);

			handleApplyFilter(dateFilter);

			const scheduledTimeZoneId =
				publishParameters.timeZoneId?.[0] ?? timeZoneId;

			const scheduleStartDate = scheduledPublishProcess.scheduleStartDate;

			const scheduleStartDateTime = scheduleStartDate
				? toWallClockDateTime(scheduleStartDate, scheduledTimeZoneId)
				: '';

			const remoteConnection = scheduledPublishProcess.remoteConnection;

			setInitialFormValues((currentInitialFormValues) => ({
				contentSelection: toContentSelection(
					preview.previewPortletDataHandlerSections ?? [],
					publishParameters,
					{commentsAndRatingsEnabled, lookAndFeelEnabled}
				),
				dateFilter,
				deletions: publishParameters.DELETIONS?.[0] === 'true',
				name: scheduledPublishProcess.name ?? '',
				permissions: publishParameters.PERMISSIONS?.[0] === 'true',
				remoteConnection: remoteConnection
					? {
							remoteAddress: remoteConnection.remoteAddress ?? '',

							remotePathContext:
								remoteConnection.remotePathContext ?? '',
							remotePort: String(
								remoteConnection.remotePort ?? ''
							),
							remoteSiteId: String(
								remoteConnection.remoteSiteId ?? ''
							),
							secureConnection:
								remoteConnection.secureConnection ?? false,
						}
					: currentInitialFormValues.remoteConnection,
				scheduleValues: {
					...currentInitialFormValues.scheduleValues,
					enabled: true,
					endDateTime: scheduledPublishProcess.scheduleEndDate
						? toWallClockDateTime(
								scheduledPublishProcess.scheduleEndDate,
								scheduledTimeZoneId
							)
						: '',
					neverEnd: !scheduledPublishProcess.scheduleEndDate,
					startDateTime: scheduleStartDateTime,
					timeZoneId: scheduledTimeZoneId,
					...(scheduledPublishProcess.cronExpression
						? fromCronExpression(
								scheduledPublishProcess.cronExpression,
								scheduleStartDateTime
							)
						: {}),
				},
			}));

			setSeeding(false);
		});
	}, [
		commentsAndRatingsEnabled,
		editedScheduledPublishProcessId,
		handleApplyFilter,
		lookAndFeelEnabled,
		preview,
		scheduledPublishProcessAPIURL,
		setError,
		timeZoneId,
	]);

	if (error) {
		return <ClayAlert displayType="danger">{error}</ClayAlert>;
	}

	if (seeding) {
		return (
			<div className="sheet">
				<span
					aria-hidden="true"
					className="loading-animation mb-9 mt-8"
				></span>
			</div>
		);
	}

	const previewPortletDataHandlerSections =
		preview?.previewPortletDataHandlerSections ?? [];

	return (
		<Formik
			initialValues={initialFormValues}
			onSubmit={async (values) => {
				const scheduleValues = values.scheduleValues;

				const scheduled = scheduleValues.enabled;

				const scheduleFields = scheduled
					? {
							cronExpression: toCronExpression(scheduleValues),
							scheduleEndDate:
								!scheduleValues.neverEnd &&
								scheduleValues.endDateTime
									? toZonedDate(
											scheduleValues.endDateTime,
											scheduleValues.timeZoneId
										).toISOString()
									: undefined,
							scheduleStartDate: toZonedDate(
								scheduleValues.startDateTime,
								scheduleValues.timeZoneId
							).toISOString(),
							timeZoneId: scheduleValues.timeZoneId,
						}
					: {};

				const remoteConnection = values.remoteConnection;

				const remoteFields = remoteConnection
					? {
							remoteConnection: {
								remoteAddress: remoteConnection.remoteAddress,

								remotePathContext:
									remoteConnection.remotePathContext,
								remotePort: Number(remoteConnection.remotePort),
								remoteSiteId: Number(
									remoteConnection.remoteSiteId
								),
								secureConnection:
									remoteConnection.secureConnection,
							},
						}
					: {};

				const result = await postPublishProcess({
					publishProcessRequest: {
						...appliedDateFilterRef.current,
						...toProcessRequestFlags(values.contentSelection),
						...scheduleFields,
						...remoteFields,
						deletions: values.deletions,
						name: values.name,
						permissions: values.permissions,
						requestPortletDataHandlers:
							toRequestPortletDataHandlers(
								previewPortletDataHandlerSections,
								values.contentSelection
							),
					},
					url: publishProcessAPIURL,
				});

				if (result.error) {
					Liferay.Util.openToast({
						message: result.error,
						type: 'danger',
					});

					return;
				}

				if (editedScheduledPublishProcessId) {
					const deleteResult = await deleteScheduledPublishProcess({
						url: `${scheduledPublishProcessAPIURL}/${editedScheduledPublishProcessId}`,
					});

					if (deleteResult.error && deleteResult.status !== '404') {
						Liferay.Util.openToast({
							message: deleteResult.error,
							type: 'danger',
						});
					}
				}

				Liferay.Util.navigate(scheduled ? scheduledBackURL : backURL);
			}}
			validate={(values: FormikValues) => {
				const errors = getProcessFormErrors(values);

				const {cronExpression, endDateTime, startDateTime} =
					getScheduleValuesErrors(values.scheduleValues);

				const scheduleValuesError =
					startDateTime ?? cronExpression ?? endDateTime;

				if (scheduleValuesError) {
					errors.scheduleValues = scheduleValuesError;
				}

				return errors;
			}}
			validateOnMount
		>
			{(formik) => {
				const contentSelection = formik.values.contentSelection;

				return (
					<Form noValidate>
						<Setup
							placeholder={Liferay.Language.get(
								'process-name-placeholder'
							)}
							subtitle={Liferay.Language.get(
								'name-your-process-and-choose-when-to-publish'
							)}
							title={sub(
								Liferay.Language.get('x-details'),
								Liferay.Language.get('publish')
							)}
						/>

						<FormikFieldPublishScheduler
							name="scheduleValues"
							timeZones={timeZones}
						/>

						{formik.values.remoteConnection && (
							<ClayLayout.Sheet className="mt-4 option-group">
								<div className="mb-3 sheet-title">
									{Liferay.Language.get('where-to-publish')}
								</div>

								<FormikFieldText
									label={Liferay.Language.get(
										'remote-host-ip'
									)}
									name="remoteConnection.remoteAddress"
									required
								/>

								<FormikFieldText
									label={Liferay.Language.get('remote-port')}
									name="remoteConnection.remotePort"
									required
									type="number"
								/>

								<FormikFieldText
									label={Liferay.Language.get(
										'remote-path-context'
									)}
									name="remoteConnection.remotePathContext"
								/>

								<FormikFieldText
									label={Liferay.Language.get(
										'remote-site-id'
									)}
									name="remoteConnection.remoteSiteId"
									required
									type="number"
								/>

								<FormikFieldCheckbox
									label={Liferay.Language.get(
										'use-a-secure-network-connection'
									)}
									name="remoteConnection.secureConnection"
								/>
							</ClayLayout.Sheet>
						)}

						<DataSelection
							commentsAndRatingsEnabled={
								commentsAndRatingsEnabled
							}
							deletionCount={getSelectedDeletionCount(
								preview?.deletionCount,
								previewPortletDataHandlerSections,
								contentSelection
							)}
							deletionsDescription={Liferay.Language.get(
								'deletions-help'
							)}
							deletionsLabel={Liferay.Language.get(
								'replicate-individual-deletions'
							)}
							itemsCount={getSelectedItemsCount(
								preview?.additionCount,
								previewPortletDataHandlerSections,
								contentSelection
							)}
							lastPublishDate={lastPublishDate}
							loading={loading}
							lookAndFeelEnabled={lookAndFeelEnabled}
							onApplyFilter={handleApplyFilter}
							pagePickerConfiguration={{
								...pagePickerConfiguration,
								title: Liferay.Language.get('pages-to-publish'),
							}}
							permissionsDescription={Liferay.Language.get(
								'publish-permissions-help'
							)}
							permissionsLabel={Liferay.Language.get(
								'publish-permissions'
							)}
							previewPortletDataHandlerSections={withSelectedLayoutSetCount(
								previewPortletDataHandlerSections,
								contentSelection
							)}
							process="publish"
							subtitle={Liferay.Language.get(
								'select-and-filter-the-data-you-want-to-publish'
							)}
						/>

						<Footer
							actionButton={
								<ClayButton
									disabled={
										formik.isSubmitting || !formik.isValid
									}
									type="submit"
								>
									<span className="inline-item inline-item-before">
										<ClayIcon
											className="mr-1"
											symbol="change"
										/>
									</span>

									{formik.values.scheduleValues.enabled
										? remoteConnectionSettings
											? Liferay.Language.get(
													'schedule-publication-to-remote-live'
												)
											: Liferay.Language.get(
													'schedule-publication-to-live'
												)
										: remoteConnectionSettings
											? Liferay.Language.get(
													'publish-to-remote-live'
												)
											: Liferay.Language.get(
													'publish-to-live'
												)}
								</ClayButton>
							}
							backURL={backURL}
						/>
					</Form>
				);
			}}
		</Formik>
	);
}
