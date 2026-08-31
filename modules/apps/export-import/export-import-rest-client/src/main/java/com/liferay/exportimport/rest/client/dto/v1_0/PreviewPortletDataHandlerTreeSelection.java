/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.exportimport.rest.client.dto.v1_0;

import com.liferay.exportimport.rest.client.serdes.v1_0.PreviewPortletDataHandlerTreeSelectionSerDes;

import jakarta.annotation.Generated;

import java.io.Serializable;

import java.util.Objects;

/**
 * @author Petteri Karttunen
 * @generated
 */
@Generated("")
public class PreviewPortletDataHandlerTreeSelection
	extends PreviewPortletDataHandlerControl
	implements Cloneable, Serializable {

	public static PreviewPortletDataHandlerTreeSelection toDTO(String json) {
		return PreviewPortletDataHandlerTreeSelectionSerDes.toDTO(json);
	}

	@Override
	public PreviewPortletDataHandlerTreeSelection clone()
		throws CloneNotSupportedException {

		return (PreviewPortletDataHandlerTreeSelection)super.clone();
	}

	@Override
	public boolean equals(Object object) {
		if (this == object) {
			return true;
		}

		if (!(object instanceof PreviewPortletDataHandlerTreeSelection)) {
			return false;
		}

		PreviewPortletDataHandlerTreeSelection
			previewPortletDataHandlerTreeSelection =
				(PreviewPortletDataHandlerTreeSelection)object;

		return Objects.equals(
			toString(), previewPortletDataHandlerTreeSelection.toString());
	}

	@Override
	public int hashCode() {
		String string = toString();

		return string.hashCode();
	}

	public String toString() {
		return PreviewPortletDataHandlerTreeSelectionSerDes.toJSON(this);
	}

}
// LIFERAY-REST-BUILDER-HASH:-897920520