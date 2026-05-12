/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {RequestPortletDataHandler} from './portletDataHandler';

export interface ExportRequest {
	fileName: string;
	range?: 'all' | 'dateRange' | 'last';
	requestPortletDataHandlers?: RequestPortletDataHandler[];
}
