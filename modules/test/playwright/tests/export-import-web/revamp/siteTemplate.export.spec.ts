/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {expect, mergeTests} from '@playwright/test';

import {dataApiHelpersTest} from '../../../fixtures/dataApiHelpersTest';
import {featureFlagsTest} from '../../../fixtures/featureFlagsTest';
import {loginTest} from '../../../fixtures/loginTest';
import {clickAndExpectToBeVisible} from '../../../utils/clickAndExpectToBeVisible';
import getRandomString from '../../../utils/getRandomString';
import {exportImportPagesTest} from './fixtures/exportImportPagesTest';

export const test = mergeTests(
	dataApiHelpersTest,
	exportImportPagesTest,
	featureFlagsTest({
		'LPD-38869': {enabled: false},
		'LPD-57655': {enabled: true},
		'LPS-178052': {enabled: true},
	}),
	loginTest()
);

test(
	'Can pick the site template pages when private pages are disabled',
	{tag: '@LPD-115784'},
	async ({
		apiHelpers,
		exportImportDataSelectionPage,
		exportImportPage,
		page,
	}) => {

		// Create a site template with a page

		const layoutSetPrototype =
			await apiHelpers.jsonWebServicesLayoutSetPrototype.addLayoutSetPrototypes(
				{name: `SiteTemplate-${getRandomString()}`}
			);

		apiHelpers.data.push({
			id: layoutSetPrototype.layoutSetPrototypeId,
			type: 'layoutSetPrototype',
		});

		const siteFriendlyUrlPath = `/template-${layoutSetPrototype.layoutSetPrototypeId}`;

		await page.goto(`/group${siteFriendlyUrlPath}`);

		const groupId = await page.evaluate(() =>
			String(Liferay.ThemeDisplay.getSiteGroupId())
		);

		const pageTitle = `Page-${getRandomString()}`;

		await apiHelpers.jsonWebServicesLayout.addLayout({
			groupId,
			privateLayout: 'true',
			title: pageTitle,
		});

		// Open the page tree picker of the export

		await exportImportPage.goToExport(siteFriendlyUrlPath);

		await exportImportPage.clickNew();

		await exportImportDataSelectionPage.expandSection('Site Builder');

		const pageTreePicker = page.getByRole('dialog');

		await clickAndExpectToBeVisible({
			target: pageTreePicker,
			trigger: page.getByRole('button', {name: 'Select Pages'}),
		});

		// Check the pages of the site template

		await expect(
			pageTreePicker.getByRole('checkbox', {
				exact: true,
				name: 'Pages',
			})
		).toBeVisible();
		await expect(
			pageTreePicker.getByRole('checkbox', {
				exact: true,
				name: pageTitle,
			})
		).toBeVisible();
	}
);
