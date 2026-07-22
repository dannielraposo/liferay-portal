/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {
	PreviewPortletDataHandlerControl,
	PreviewPortletDataHandlerSection,
} from '../types/portletDataHandler';
import {
	LAYOUT_SET_LAYOUTS_PORTLET_DATA_KEY,
	LayoutSetSelection,
	PRIVATE_PAGES_CONTROL_NAME,
	PUBLIC_PAGES_CONTROL_NAME,
	PortletDataHandlerSelection,
} from './contentSelection';

import type {ContentSelection} from '../components/forms/content_selector/ContentSelector';

function isTrue(values: string[] | undefined): boolean {
	return values?.[0] === 'true';
}

function toLayoutSetSelection(
	publishParameters: Record<string, string[]>
): LayoutSetSelection {
	const privateLayout = PRIVATE_PAGES_CONTROL_NAME in publishParameters;

	const values =
		publishParameters[PRIVATE_PAGES_CONTROL_NAME] ??
		publishParameters[PUBLIC_PAGES_CONTROL_NAME] ??
		[];

	const layoutIds = values.map(Number).filter((layoutId) => !isNaN(layoutId));

	return {
		...(layoutIds.length && {layoutIds}),
		privateLayout,
	};
}

function toPortletDataHandlerSelection(
	previewPortletDataHandlerControls:
		| PreviewPortletDataHandlerControl[]
		| undefined,
	publishParameters: Record<string, string[]>
): PortletDataHandlerSelection {
	if (!previewPortletDataHandlerControls?.length) {
		return true;
	}

	const selections: Record<string, PortletDataHandlerSelection> = {};

	for (const previewPortletDataHandlerControl of previewPortletDataHandlerControls) {
		const values = publishParameters[previewPortletDataHandlerControl.name];

		if (!values) {
			continue;
		}

		if (previewPortletDataHandlerControl.type === 'Choice') {
			selections[previewPortletDataHandlerControl.name] = values[0];

			continue;
		}

		selections[previewPortletDataHandlerControl.name] =
			toPortletDataHandlerSelection(
				previewPortletDataHandlerControl.previewPortletDataHandlerControls,
				publishParameters
			);
	}

	return selections;
}

export function toContentSelection(
	previewPortletDataHandlerSections: PreviewPortletDataHandlerSection[],
	publishParameters: Record<string, string[]>
): ContentSelection | undefined {
	const contentSelection: ContentSelection = {};

	for (const previewPortletDataHandlerSection of previewPortletDataHandlerSections) {
		const sectionSelection: Record<string, PortletDataHandlerSelection> =
			{};

		for (const previewPortletDataHandler of previewPortletDataHandlerSection.previewPortletDataHandlers ??
			[]) {
			if (!isTrue(publishParameters[previewPortletDataHandler.name])) {
				continue;
			}

			if (
				previewPortletDataHandler.name ===
				LAYOUT_SET_LAYOUTS_PORTLET_DATA_KEY
			) {
				sectionSelection[previewPortletDataHandler.name] =
					toLayoutSetSelection(
						publishParameters
					) as PortletDataHandlerSelection;

				continue;
			}

			sectionSelection[previewPortletDataHandler.name] =
				toPortletDataHandlerSelection(
					previewPortletDataHandler.previewPortletDataHandlerControls,
					publishParameters
				);
		}

		if (Object.keys(sectionSelection).length) {
			contentSelection[previewPortletDataHandlerSection.name] =
				sectionSelection;
		}
	}

	if (!Object.keys(contentSelection).length) {
		return undefined;
	}

	return contentSelection;
}
