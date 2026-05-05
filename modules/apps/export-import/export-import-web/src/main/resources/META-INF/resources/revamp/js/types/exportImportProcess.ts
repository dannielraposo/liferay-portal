/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ContentSelection} from '../components/forms/content_selector/ContentSelector';

export interface ExportRequest {
	contentSelection?: ContentSelection;
	fileName: string;
	range?: 'all' | 'dateRange' | 'last';
}
