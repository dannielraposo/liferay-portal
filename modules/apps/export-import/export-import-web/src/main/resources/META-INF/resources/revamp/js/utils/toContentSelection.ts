/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {
	PreviewPortletDataHandlerControl,
	PreviewPortletDataHandlerSection,
} from '../types/portletDataHandler';
import {
	CHOICE_NAME_PRIVATE_PAGES,
	CONTROL_NAME_TREE_SELECTION_ALL,
	CONTROL_NAME_TREE_SELECTION_EXCLUDED_ITEMS,
	CONTROL_NAME_TREE_SELECTION_EXCLUDED_SUBTREES,
	CONTROL_NAME_TREE_SELECTION_ITEMS,
	CONTROL_NAME_TREE_SELECTION_SUBTREES,
	CONTROL_NAME_VISIBILITY,
	LayoutSetSelection,
	PORTLET_DATA_KEY_LAYOUT_SET_LAYOUTS,
	PortletDataHandlerSelection,
	SECTION_KEY_CONTENT,
	SECTION_KEY_CONTENT_AND_DATA,
	SECTION_KEY_SITE_BUILDER,
} from './contentSelection';

import type {ContentSelection} from '../components/forms/content_selector/ContentSelector';

function isTrue(values: string[] | undefined): boolean {
	return values?.[0] === 'true';
}

function toLayoutSetSelection(
	publishParameters: Record<string, string[]>
): LayoutSetSelection {
	const excludedItems =
		publishParameters[CONTROL_NAME_TREE_SELECTION_EXCLUDED_ITEMS] ?? [];
	const excludedSubtrees =
		publishParameters[CONTROL_NAME_TREE_SELECTION_EXCLUDED_SUBTREES] ?? [];
	const items = publishParameters[CONTROL_NAME_TREE_SELECTION_ITEMS] ?? [];
	const subtrees =
		publishParameters[CONTROL_NAME_TREE_SELECTION_SUBTREES] ?? [];

	return {
		...(isTrue(publishParameters[CONTROL_NAME_TREE_SELECTION_ALL]) && {
			all: true,
		}),
		...(excludedItems.length && {excludedItems}),
		...(excludedSubtrees.length && {excludedSubtrees}),
		...(items.length && {items}),
		privateLayout:
			publishParameters[CONTROL_NAME_VISIBILITY]?.[0] ===
			CHOICE_NAME_PRIVATE_PAGES,
		...(subtrees.length && {subtrees}),
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

function toSelectedFlags(
	parameterNames: Record<string, string>,
	publishParameters: Record<string, string[]>
): Record<string, boolean> {
	return Object.fromEntries(
		Object.entries(parameterNames)
			.filter(([, parameterName]) =>
				isTrue(publishParameters[parameterName])
			)
			.map(([name]) => [name, true])
	);
}

export function toContentSelection(
	previewPortletDataHandlerSections: PreviewPortletDataHandlerSection[],
	publishParameters: Record<string, string[]>,
	{
		commentsAndRatingsEnabled = false,
		lookAndFeelEnabled = false,
	}: {commentsAndRatingsEnabled?: boolean; lookAndFeelEnabled?: boolean} = {}
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
				PORTLET_DATA_KEY_LAYOUT_SET_LAYOUTS
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

	if (lookAndFeelEnabled) {
		const lookAndFeel = toSelectedFlags(
			{
				logo: 'LOGO',
				sitePagesSettings: 'LAYOUT_SET_SETTINGS',
				siteTemplateSettings: 'LAYOUT_SET_PROTOTYPE_SETTINGS',
				themeSettings: 'THEME_REFERENCE',
			},
			publishParameters
		);

		if (Object.keys(lookAndFeel).length) {
			contentSelection[SECTION_KEY_SITE_BUILDER] = {
				...contentSelection[SECTION_KEY_SITE_BUILDER],
				lookAndFeel,
			};
		}
	}

	if (commentsAndRatingsEnabled) {
		const commentsAndRatings = toSelectedFlags(
			{comments: 'COMMENTS', ratings: 'RATINGS'},
			publishParameters
		);

		const sectionName = [
			SECTION_KEY_CONTENT,
			SECTION_KEY_CONTENT_AND_DATA,
		].find((contentSectionName) => contentSelection[contentSectionName]);

		if (Object.keys(commentsAndRatings).length && sectionName) {
			contentSelection[sectionName] = {
				...contentSelection[sectionName],
				commentsAndRatings,
			};
		}
	}

	if (!Object.keys(contentSelection).length) {
		return undefined;
	}

	return contentSelection;
}
