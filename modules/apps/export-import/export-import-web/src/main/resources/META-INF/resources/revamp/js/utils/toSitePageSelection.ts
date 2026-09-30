/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ContentSelection} from '../components/forms/content_selector/ContentSelector';
import {
	SitePageSelection,
	SitePageSelectionEntry,
} from '../types/exportImportProcess';
import {getLayoutSetSelection} from './contentSelection';

function toSitePageSelectionEntries(
	sitePageExternalReferenceCodes: string[] | undefined,
	excluded: boolean,
	includeDescendants: boolean
): SitePageSelectionEntry[] {
	return (sitePageExternalReferenceCodes ?? []).map(
		(sitePageExternalReferenceCode) => ({
			...(excluded && {excluded}),
			...(includeDescendants && {includeDescendants}),
			sitePageExternalReferenceCode,
		})
	);
}

export function toSitePageSelection(
	contentSelection: ContentSelection | undefined
): SitePageSelection | undefined {
	const layoutSetSelection = getLayoutSetSelection(contentSelection);

	if (!layoutSetSelection) {
		return undefined;
	}

	if (layoutSetSelection === true) {
		return {all: true, visibility: 'PUBLIC'};
	}

	const {
		all = false,
		excludedItems,
		excludedSubtrees,
		items,
		privateLayout = false,
		subtrees,
	} = layoutSetSelection;

	const sitePageSelectionEntries = [
		...toSitePageSelectionEntries(items, false, false),
		...toSitePageSelectionEntries(subtrees, false, true),
		...toSitePageSelectionEntries(excludedItems, true, false),
		...toSitePageSelectionEntries(excludedSubtrees, true, true),
	];

	return {
		all,
		...(sitePageSelectionEntries.length && {sitePageSelectionEntries}),
		visibility: privateLayout ? 'PRIVATE' : 'PUBLIC',
	};
}
