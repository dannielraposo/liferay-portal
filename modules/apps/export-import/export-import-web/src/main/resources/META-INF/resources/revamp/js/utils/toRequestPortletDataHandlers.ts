/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ContentSelection} from '../components/forms/content_selector/ContentSelector';
import {
	PreviewPortletDataHandlerControl,
	PreviewPortletDataHandlerSection,
	RequestPortletDataHandler,
	RequestPortletDataHandlerControl,
} from '../types/portletDataHandler';
import {
	CHOICE_NAME_PRIVATE_PAGES,
	CONTROL_NAME_PAGES,
	CONTROL_NAME_TREE_SELECTION_ALL,
	CONTROL_NAME_TREE_SELECTION_EXCLUDED_ITEMS,
	CONTROL_NAME_TREE_SELECTION_EXCLUDED_SUBTREES,
	CONTROL_NAME_TREE_SELECTION_ITEMS,
	CONTROL_NAME_TREE_SELECTION_SUBTREES,
	CONTROL_NAME_VISIBILITY,
	LayoutSetSelection,
	PORTLET_DATA_KEY_LAYOUT_SET_LAYOUTS,
	PortletDataHandlerSelection,
} from './contentSelection';

export function toRequestPortletDataHandlers(
	previewPortletDataHandlerSections: PreviewPortletDataHandlerSection[],
	contentSelection: ContentSelection | undefined
): RequestPortletDataHandler[] {
	if (!contentSelection) {
		return [];
	}

	const requestPortletDataHandlers: RequestPortletDataHandler[] = [];

	for (const previewPortletDataHandlerSection of previewPortletDataHandlerSections) {
		const sectionSelection =
			contentSelection[previewPortletDataHandlerSection.name];

		if (!sectionSelection) {
			continue;
		}

		for (const previewPortletDataHandler of previewPortletDataHandlerSection.previewPortletDataHandlers ??
			[]) {
			const portletDataHandlerSelection =
				sectionSelection[previewPortletDataHandler.name];

			if (!portletDataHandlerSelection) {
				continue;
			}

			if (
				previewPortletDataHandler.name ===
				PORTLET_DATA_KEY_LAYOUT_SET_LAYOUTS
			) {
				requestPortletDataHandlers.push(
					toLayoutSetRequestPortletDataHandler(
						previewPortletDataHandler.name,
						portletDataHandlerSelection
					)
				);

				continue;
			}

			const requestPortletDataHandlerControls =
				toRequestPortletDataHandlerControls(
					previewPortletDataHandler.previewPortletDataHandlerControls,
					portletDataHandlerSelection
				);

			requestPortletDataHandlers.push({
				name: previewPortletDataHandler.name,
				...(requestPortletDataHandlerControls.length && {
					requestPortletDataHandlerControls,
				}),
			});
		}
	}

	return requestPortletDataHandlers;
}

function toRequestPortletDataHandlerControls(
	previewPortletDataHandlerControls:
		| PreviewPortletDataHandlerControl[]
		| undefined,
	portletDataHandlerSelection: PortletDataHandlerSelection
): RequestPortletDataHandlerControl[] {
	if (
		!previewPortletDataHandlerControls ||
		typeof portletDataHandlerSelection !== 'object'
	) {
		return [];
	}

	const portletDataHandlerSelections = portletDataHandlerSelection as Record<
		string,
		PortletDataHandlerSelection
	>;
	const requestPortletDataHandlerControls: RequestPortletDataHandlerControl[] =
		[];

	for (const previewPortletDataHandlerControl of previewPortletDataHandlerControls) {
		const nestedPortletDataHandlerSelection =
			portletDataHandlerSelections[previewPortletDataHandlerControl.name];

		if (!nestedPortletDataHandlerSelection) {
			continue;
		}

		if (typeof nestedPortletDataHandlerSelection === 'string') {
			requestPortletDataHandlerControls.push({
				name: previewPortletDataHandlerControl.name,
				values: [nestedPortletDataHandlerSelection],
			});

			continue;
		}

		if (nestedPortletDataHandlerSelection === true) {
			requestPortletDataHandlerControls.push({
				name: previewPortletDataHandlerControl.name,
			});

			continue;
		}

		const nestedRequestPortletDataHandlerControls =
			'previewPortletDataHandlerControls' in
			previewPortletDataHandlerControl
				? toRequestPortletDataHandlerControls(
						previewPortletDataHandlerControl.previewPortletDataHandlerControls,
						nestedPortletDataHandlerSelection as PortletDataHandlerSelection
					)
				: [];

		requestPortletDataHandlerControls.push({
			name: previewPortletDataHandlerControl.name,
			...(nestedRequestPortletDataHandlerControls.length && {
				requestPortletDataHandlerControls:
					nestedRequestPortletDataHandlerControls,
			}),
		});
	}

	return requestPortletDataHandlerControls;
}

function toLayoutSetRequestPortletDataHandler(
	name: string,
	portletDataHandlerSelection: PortletDataHandlerSelection
): RequestPortletDataHandler {
	if (typeof portletDataHandlerSelection !== 'object') {
		return {name};
	}

	const {
		all = false,
		excludedItems,
		excludedSubtrees,
		items,
		privateLayout = false,
		subtrees,
	} = portletDataHandlerSelection as LayoutSetSelection;

	const treeSelectionControls: RequestPortletDataHandlerControl[] = [];

	if (all) {
		treeSelectionControls.push({name: CONTROL_NAME_TREE_SELECTION_ALL});
	}

	const addControl = (name: string, values: string[] | undefined) => {
		if (values?.length) {
			treeSelectionControls.push({name, values});
		}
	};

	addControl(CONTROL_NAME_TREE_SELECTION_ITEMS, items);
	addControl(CONTROL_NAME_TREE_SELECTION_SUBTREES, subtrees);
	addControl(CONTROL_NAME_TREE_SELECTION_EXCLUDED_ITEMS, excludedItems);
	addControl(CONTROL_NAME_TREE_SELECTION_EXCLUDED_SUBTREES, excludedSubtrees);

	const requestPortletDataHandlerControls: RequestPortletDataHandlerControl[] =
		[
			...(privateLayout
				? [
						{
							name: CONTROL_NAME_VISIBILITY,
							values: [CHOICE_NAME_PRIVATE_PAGES],
						},
					]
				: []),
			{
				name: CONTROL_NAME_PAGES,
				requestPortletDataHandlerControls: treeSelectionControls,
			},
		];

	return {
		name,
		requestPortletDataHandlerControls,
	};
}
