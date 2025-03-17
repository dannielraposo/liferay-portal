/**
 * SPDX-FileCopyrightText: (c) 2025 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

	import {SiteApi} from './siteApi';

	export * from './siteApi';

/**
 * @author Rubén Pulido
 * @generated
 */

export class HttpError extends Error {
	constructor(
		public body: any,
		public response: Response,
		public statusCode: number
	) {
		super('HTTP request failed');
		this.name = 'HttpError';
	}
}

export const APIS = [
	SiteApi,
];