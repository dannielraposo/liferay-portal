/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {useField, useFormikContext} from 'formik';
import React from 'react';

import {PageTreeModalConfiguration} from '../../../pages/export/components/PageTreeModal';
import {PortletDataHandlerSection} from '../../../types/portletDataHandler';
import ContentSelector, {
	ContentSelection,
} from '../content_selector/ContentSelector';

interface FormikFieldContentSelectorProps {
	'aria-labelledby'?: string;
	'name': string;
	'pageTreeModalConfiguration'?: PageTreeModalConfiguration;
	'sections': PortletDataHandlerSection[];
}

export function FormikFieldContentSelector({
	'aria-labelledby': ariaLabelledby,
	name,
	pageTreeModalConfiguration,
	sections,
}: FormikFieldContentSelectorProps) {
	const [field, meta, helpers] = useField<ContentSelection | undefined>(name);
	const {setFieldTouched} = useFormikContext();

	return (
		<ContentSelector
			aria-labelledby={ariaLabelledby}
			errorMessage={meta.touched && meta.error ? meta.error : undefined}
			name={name}
			onChange={(newValue) => {
				helpers.setValue(newValue);
				setFieldTouched(name, true, false);
			}}
			pageTreeModalConfiguration={pageTreeModalConfiguration}
			sections={sections}
			value={field.value}
		/>
	);
}
