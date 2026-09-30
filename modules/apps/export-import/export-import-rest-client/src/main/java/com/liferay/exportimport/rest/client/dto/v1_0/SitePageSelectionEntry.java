/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.exportimport.rest.client.dto.v1_0;

import com.liferay.exportimport.rest.client.function.UnsafeSupplier;
import com.liferay.exportimport.rest.client.serdes.v1_0.SitePageSelectionEntrySerDes;

import jakarta.annotation.Generated;

import java.io.Serializable;

import java.util.Objects;

/**
 * @author Petteri Karttunen
 * @generated
 */
@Generated("")
public class SitePageSelectionEntry implements Cloneable, Serializable {

	public static SitePageSelectionEntry toDTO(String json) {
		return SitePageSelectionEntrySerDes.toDTO(json);
	}

	public Boolean getExcluded() {
		return excluded;
	}

	public void setExcluded(Boolean excluded) {
		this.excluded = excluded;
	}

	public void setExcluded(
		UnsafeSupplier<Boolean, Exception> excludedUnsafeSupplier) {

		try {
			excluded = excludedUnsafeSupplier.get();
		}
		catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	protected Boolean excluded;

	public Boolean getIncludeDescendants() {
		return includeDescendants;
	}

	public void setIncludeDescendants(Boolean includeDescendants) {
		this.includeDescendants = includeDescendants;
	}

	public void setIncludeDescendants(
		UnsafeSupplier<Boolean, Exception> includeDescendantsUnsafeSupplier) {

		try {
			includeDescendants = includeDescendantsUnsafeSupplier.get();
		}
		catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	protected Boolean includeDescendants;

	public String getSitePageExternalReferenceCode() {
		return sitePageExternalReferenceCode;
	}

	public void setSitePageExternalReferenceCode(
		String sitePageExternalReferenceCode) {

		this.sitePageExternalReferenceCode = sitePageExternalReferenceCode;
	}

	public void setSitePageExternalReferenceCode(
		UnsafeSupplier<String, Exception>
			sitePageExternalReferenceCodeUnsafeSupplier) {

		try {
			sitePageExternalReferenceCode =
				sitePageExternalReferenceCodeUnsafeSupplier.get();
		}
		catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	protected String sitePageExternalReferenceCode;

	@Override
	public SitePageSelectionEntry clone() throws CloneNotSupportedException {
		return (SitePageSelectionEntry)super.clone();
	}

	@Override
	public boolean equals(Object object) {
		if (this == object) {
			return true;
		}

		if (!(object instanceof SitePageSelectionEntry)) {
			return false;
		}

		SitePageSelectionEntry sitePageSelectionEntry =
			(SitePageSelectionEntry)object;

		return Objects.equals(toString(), sitePageSelectionEntry.toString());
	}

	@Override
	public int hashCode() {
		String string = toString();

		return string.hashCode();
	}

	public String toString() {
		return SitePageSelectionEntrySerDes.toJSON(this);
	}

}
// LIFERAY-REST-BUILDER-HASH:458294218