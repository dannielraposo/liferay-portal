/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import getLocalizedValue from '../../../../src/main/resources/META-INF/resources/revamp/js/utils/getLocalizedValue';

describe('getLocalizedValue', () => {
	afterEach(() => {
		(Liferay.ThemeDisplay.getBCP47LanguageId as jest.Mock).mockReturnValue(
			'en-US'
		);
		(Liferay.ThemeDisplay.getLanguageId as jest.Mock).mockReturnValue(
			'en_US'
		);
	});

	it('returns the value for the current language', () => {
		expect(getLocalizedValue({ca_ES: 'Casa', en_US: 'Home'})).toBe('Home');
	});

	it('matches the hyphenated language keys the headless APIs return', () => {
		expect(getLocalizedValue({'ca-ES': 'Casa', 'en-US': 'Home'})).toBe(
			'Home'
		);
	});

	it('falls back to the default language', () => {
		(Liferay.ThemeDisplay.getBCP47LanguageId as jest.Mock).mockReturnValue(
			'ca-ES'
		);
		(Liferay.ThemeDisplay.getLanguageId as jest.Mock).mockReturnValue(
			'ca_ES'
		);

		expect(getLocalizedValue({en_US: 'Home', fr_FR: 'Maison'})).toBe(
			'Home'
		);
		expect(getLocalizedValue({'en-US': 'Home', 'fr-FR': 'Maison'})).toBe(
			'Home'
		);
	});

	it('falls back to the first value when the default language is missing', () => {
		expect(getLocalizedValue({fr_FR: 'Maison'})).toBe('Maison');
	});

	it('returns an empty string when there are no values', () => {
		expect(getLocalizedValue(null)).toBe('');
		expect(getLocalizedValue({})).toBe('');
	});
});
