/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.exportimport.rest.internal.util;

import com.liferay.exportimport.constants.ExportImportConstants;
import com.liferay.exportimport.kernel.lar.ManifestSummary;
import com.liferay.exportimport.kernel.lar.PortletDataHandlerBoolean;
import com.liferay.exportimport.kernel.lar.PortletDataHandlerChoice;
import com.liferay.exportimport.kernel.lar.StagedModelType;
import com.liferay.exportimport.rest.dto.v1_0.Choice;
import com.liferay.exportimport.rest.dto.v1_0.PortletDataHandlerSection;
import com.liferay.exportimport.rest.dto.v1_0.PreviewPortletDataHandler;
import com.liferay.exportimport.rest.dto.v1_0.PreviewPortletDataHandlerControl;
import com.liferay.petra.function.UnsafeFunction;
import com.liferay.petra.function.transform.TransformUtil;
import com.liferay.portal.kernel.language.LanguageUtil;
import com.liferay.portal.kernel.model.Portlet;
import com.liferay.portal.kernel.util.ArrayUtil;
import com.liferay.portal.kernel.util.PortalUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Map;

/**
 * @author Daniel Raposo
 */
public class PortletDataHandlerSectionUtil {

	public static void addPortletDataHandlerSection(
			long companyId, Locale locale, ManifestSummary manifestSummary,
			Portlet portlet,
			com.liferay.exportimport.kernel.lar.PortletDataHandler
				portletDataHandler,
			UnsafeFunction
				<com.liferay.exportimport.kernel.lar.PortletDataHandler,
				 com.liferay.exportimport.kernel.lar.
					 PortletDataHandlerControl[],
				 Exception> portletDataHandlerControlsUnsafeFunction,
			Map<String, List<PreviewPortletDataHandler>> previewPortletDataHandlersMap)
		throws Exception {

		if ((portletDataHandler == null) ||
			!portletDataHandler.isEnabled(companyId)) {

			return;
		}

		long modelAdditionCount = Math.max(
			0L, portletDataHandler.getExportModelCount(manifestSummary));
		long modelDeletionCount = Math.max(
			0L,
			manifestSummary.getModelDeletionCount(
				portletDataHandler.getDeletionSystemEventStagedModelTypes()));

		if ((modelAdditionCount == 0) && (modelDeletionCount == 0)) {
			return;
		}

		String sectionKey = portletDataHandler.getSectionKey();

		if (sectionKey == null) {
			sectionKey = ExportImportConstants.SECTION_KEY_OTHER;
		}

		List<PreviewPortletDataHandler> previewPortletDataHandlers =
			previewPortletDataHandlersMap.computeIfAbsent(
				sectionKey, key -> new ArrayList<>());

		previewPortletDataHandlers.add(
			_toPreviewPortletDataHandler(
				modelAdditionCount, locale, manifestSummary, modelDeletionCount,
				portlet, portletDataHandler,
				portletDataHandlerControlsUnsafeFunction.apply(
					portletDataHandler)));
	}

	public static long getAdditionCount(
		Map<String, List<PreviewPortletDataHandler>>
			previewPortletDataHandlersMap) {

		long additionCount = 0;

		for (List<PreviewPortletDataHandler> previewPortletDataHandlers :
				previewPortletDataHandlersMap.values()) {

			for (PreviewPortletDataHandler previewPortletDataHandler :
					previewPortletDataHandlers) {

				additionCount +=
					previewPortletDataHandler.getAdditionCount();
			}
		}

		return additionCount;
	}

	public static long getDeletionCount(
		Map<String, List<PreviewPortletDataHandler>>
			previewPortletDataHandlersMap) {

		long deletionCount = 0;

		for (List<PreviewPortletDataHandler> previewPortletDataHandlers :
				previewPortletDataHandlersMap.values()) {

			for (PreviewPortletDataHandler previewPortletDataHandler :
					previewPortletDataHandlers) {

				deletionCount +=
					previewPortletDataHandler.getDeletionCount();
			}
		}

		return deletionCount;
	}

	public static PortletDataHandlerSection[] toPortletDataHandlerSections(
		Locale locale,
		Map<String, List<PreviewPortletDataHandler>>
			previewPortletDataHandlersMap) {

		return TransformUtil.transformToArray(
			previewPortletDataHandlersMap.entrySet(),
			entry -> new PortletDataHandlerSection() {
				{
					long additionCount = 0;
					long deletionCount = 0;

					for (PreviewPortletDataHandler previewPortletDataHandler :
							entry.getValue()) {

						additionCount +=
							previewPortletDataHandler.getAdditionCount();
						deletionCount +=
							previewPortletDataHandler.getDeletionCount();
					}

					long finalAdditionCount = additionCount;
					long finalDeletionCount = deletionCount;

					setAdditionCount(() -> finalAdditionCount);
					setDeletionCount(() -> finalDeletionCount);
					setLabel(() -> LanguageUtil.get(locale, entry.getKey()));
					setName(entry::getKey);
					setPreviewPortletDataHandlers(
						() -> entry.getValue(
						).toArray(
							new PreviewPortletDataHandler[0]
						));
				}
			},
			PortletDataHandlerSection.class);
	}

	private static PreviewPortletDataHandlerControl[] _toNestedControls(
		Locale locale, ManifestSummary manifestSummary,
		com.liferay.exportimport.kernel.lar.PortletDataHandlerControl[]
			portletDataHandlerControls) {

		if (ArrayUtil.isEmpty(portletDataHandlerControls)) {
			return null;
		}

		return TransformUtil.transform(
			portletDataHandlerControls,
			portletDataHandlerControl -> _toPreviewPortletDataHandlerControl(
				locale, manifestSummary, portletDataHandlerControl),
			PreviewPortletDataHandlerControl.class);
	}

	private static PreviewPortletDataHandler _toPreviewPortletDataHandler(
		long modelAdditionCount, Locale locale, ManifestSummary manifestSummary,
		long modelDeletionCount, Portlet portlet,
		com.liferay.exportimport.kernel.lar.PortletDataHandler
			portletDataHandler,
		com.liferay.exportimport.kernel.lar.PortletDataHandlerControl[]
			sourcePortletDataHandlerControls) {

		return new PreviewPortletDataHandler() {
			{
				setAdditionCount(() -> modelAdditionCount);
				setDeletionCount(() -> modelDeletionCount);
				setLabel(
					() -> {
						String portletTitle = portletDataHandler.getTitle(
							locale);

						if (portletTitle == null) {
							portletTitle = PortalUtil.getPortletTitle(
								portlet, locale);
						}

						return portletTitle;
					});
				setName(() -> "PORTLET_DATA_" + portlet.getPortletId());
				setPreviewPortletDataHandlerControls(
					() -> _toNestedControls(
						locale, manifestSummary,
						sourcePortletDataHandlerControls));
			}
		};
	}

	private static PreviewPortletDataHandlerControl
		_toPreviewPortletDataHandlerControl(
			Locale locale, ManifestSummary manifestSummary,
			com.liferay.exportimport.kernel.lar.PortletDataHandlerControl
				portletDataHandlerControl) {

		if (portletDataHandlerControl instanceof
				PortletDataHandlerBoolean portletDataHandlerBoolean) {

			if (portletDataHandlerBoolean.getClassName() == null) {
				return new com.liferay.exportimport.rest.dto.v1_0.
					PreviewPortletDataHandlerSetting() {

					{
						setDefaultState(
							portletDataHandlerBoolean::getDefaultState);
						setDisabled(portletDataHandlerBoolean::isDisabled);
						setLabel(
							() -> LanguageUtil.get(
								locale, portletDataHandlerBoolean.getLabel()));
						setName(
							com.liferay.exportimport.kernel.lar.
								PortletDataHandlerControl.getNamespacedName(
									portletDataHandlerBoolean.getNamespace(),
									portletDataHandlerBoolean.getName()));
						setPreviewPortletDataHandlerControls(
							() -> _toNestedControls(
								locale, manifestSummary,
								portletDataHandlerBoolean.
									getChildrenPortletDataHandlerControls()));
					}
				};
			}

			long modelAdditionCount = Math.max(
				0L,
				manifestSummary.getModelAdditionCount(
					new StagedModelType(
						portletDataHandlerBoolean.getClassName(),
						portletDataHandlerBoolean.getReferrerClassName())));
			long modelDeletionCount = Math.max(
				0L,
				manifestSummary.getModelDeletionCount(
					new StagedModelType(
						portletDataHandlerBoolean.getClassName(),
						portletDataHandlerBoolean.getReferrerClassName())));

			if ((modelAdditionCount == 0) && (modelDeletionCount == 0)) {
				return null;
			}

			return new com.liferay.exportimport.rest.dto.v1_0.
				PreviewPortletDataHandlerBoolean() {

				{
					setAdditionCount(() -> modelAdditionCount);
					setDefaultState(portletDataHandlerBoolean::getDefaultState);
					setDeletionCount(() -> modelDeletionCount);
					setDisabled(portletDataHandlerBoolean::isDisabled);
					setLabel(
						() -> LanguageUtil.get(
							locale, portletDataHandlerBoolean.getLabel()));
					setName(
						com.liferay.exportimport.kernel.lar.
							PortletDataHandlerControl.getNamespacedName(
								portletDataHandlerBoolean.getNamespace(),
								portletDataHandlerBoolean.getName()));
					setPreviewPortletDataHandlerControls(
						() -> _toNestedControls(
							locale, manifestSummary,
							portletDataHandlerBoolean.
								getChildrenPortletDataHandlerControls()));
				}
			};
		}

		if (portletDataHandlerControl instanceof
				PortletDataHandlerChoice portletDataHandlerChoice) {

			return new com.liferay.exportimport.rest.dto.v1_0.
				PreviewPortletDataHandlerChoice() {

				{
					setChoices(
						() -> TransformUtil.transform(
							portletDataHandlerChoice.getChoices(),
							choice -> new Choice() {
								{
									setLabel(
										() -> LanguageUtil.get(locale, choice));
									setName(() -> choice);
								}
							},
							Choice.class));
					setDefaultChoice(
						portletDataHandlerChoice::getDefaultChoice);
					setDisabled(portletDataHandlerChoice::isDisabled);
					setLabel(
						() -> LanguageUtil.get(
							locale, portletDataHandlerChoice.getLabel()));
					setName(
						com.liferay.exportimport.kernel.lar.
							PortletDataHandlerControl.getNamespacedName(
								portletDataHandlerChoice.getNamespace(),
								portletDataHandlerChoice.getName()));
				}
			};
		}

		return null;
	}

}
