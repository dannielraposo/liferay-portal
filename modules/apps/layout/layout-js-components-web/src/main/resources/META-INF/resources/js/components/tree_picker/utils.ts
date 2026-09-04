/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {openToast} from 'frontend-js-components-web';

export function openErrorToast(
	message: string = Liferay.Language.get('an-unexpected-error-occurred')
) {
	openToast({
		message,
		title: Liferay.Language.get('error'),
		type: 'danger',
	});
}
