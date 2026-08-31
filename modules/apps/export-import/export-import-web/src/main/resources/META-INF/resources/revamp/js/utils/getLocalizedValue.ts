/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

export default function getLocalizedValue(
	localizedValues: Record<string, string> | null | undefined
): string {
	if (!localizedValues) {
		return '';
	}

	const defaultLanguageId = Liferay.ThemeDisplay.getDefaultLanguageId();

	const languageKeys = [
		Liferay.ThemeDisplay.getBCP47LanguageId(),
		Liferay.ThemeDisplay.getLanguageId(),
		defaultLanguageId.replace('_', '-'),
		defaultLanguageId,
	];

	for (const languageKey of languageKeys) {
		const value = localizedValues[languageKey];

		if (value) {
			return value;
		}
	}

	return Object.values(localizedValues)[0] ?? '';
}
