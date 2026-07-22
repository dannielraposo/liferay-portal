/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ExportPreview} from '../types/exportImportPreview';
import {RequestResult} from './ApiHelper';
import {ExportPreviewParams, getExportPreview} from './getExportPreview';

export type PublishPreviewParams = ExportPreviewParams;

export function getPublishPreview(
	publishPreviewParams: PublishPreviewParams
): Promise<RequestResult<ExportPreview>> {
	return getExportPreview(publishPreviewParams);
}
