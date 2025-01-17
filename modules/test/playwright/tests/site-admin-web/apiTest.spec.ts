/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {mergeTests} from '@playwright/test';
import {resolve} from 'path';

import {apiHelpersTest} from '../../fixtures/apiHelpersTest';
import {loginTest} from '../../fixtures/loginTest';

export const test = mergeTests(apiHelpersTest, loginTest());

test(
	'Test API generation',
	{
		tag: '@LPD-XXXXX',
	},
	async ({apiHelpers}) => {
		await apiHelpers.headlessSite.createSite({
			externalReferenceCode: 'MyERC',
			name: 'ERC Test',
		});
	}
);

test(
	'Test API generation2',
	{
		tag: '@LPD-YYYYY',
	},
	async ({apiHelpers}) => {
		await apiHelpers.headlessSite.createSiteFromZip(
			{
				externalReferenceCode: 'MyERC',
				name: 'ERC Test',
			},
			resolve(__dirname, 'site-initializer')
		);
	}
);
