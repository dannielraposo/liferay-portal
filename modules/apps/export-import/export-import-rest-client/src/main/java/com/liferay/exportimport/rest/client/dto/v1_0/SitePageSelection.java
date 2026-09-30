/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.exportimport.rest.client.dto.v1_0;

import com.liferay.exportimport.rest.client.function.UnsafeSupplier;
import com.liferay.exportimport.rest.client.serdes.v1_0.SitePageSelectionSerDes;

import jakarta.annotation.Generated;

import java.io.Serializable;

import java.util.Objects;

/**
 * @author Petteri Karttunen
 * @generated
 */
@Generated("")
public class SitePageSelection implements Cloneable, Serializable {

	public static SitePageSelection toDTO(String json) {
		return SitePageSelectionSerDes.toDTO(json);
	}

	public Boolean getAll() {
		return all;
	}

	public void setAll(Boolean all) {
		this.all = all;
	}

	public void setAll(UnsafeSupplier<Boolean, Exception> allUnsafeSupplier) {
		try {
			all = allUnsafeSupplier.get();
		}
		catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	protected Boolean all;

	public SitePageSelectionEntry[] getSitePageSelectionEntries() {
		return sitePageSelectionEntries;
	}

	public void setSitePageSelectionEntries(
		SitePageSelectionEntry[] sitePageSelectionEntries) {

		this.sitePageSelectionEntries = sitePageSelectionEntries;
	}

	public void setSitePageSelectionEntries(
		UnsafeSupplier<SitePageSelectionEntry[], Exception>
			sitePageSelectionEntriesUnsafeSupplier) {

		try {
			sitePageSelectionEntries =
				sitePageSelectionEntriesUnsafeSupplier.get();
		}
		catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	protected SitePageSelectionEntry[] sitePageSelectionEntries;

	public Visibility getVisibility() {
		return visibility;
	}

	public String getVisibilityAsString() {
		if (visibility == null) {
			return null;
		}

		return visibility.toString();
	}

	public void setVisibility(Visibility visibility) {
		this.visibility = visibility;
	}

	public void setVisibility(
		UnsafeSupplier<Visibility, Exception> visibilityUnsafeSupplier) {

		try {
			visibility = visibilityUnsafeSupplier.get();
		}
		catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	protected Visibility visibility;

	@Override
	public SitePageSelection clone() throws CloneNotSupportedException {
		return (SitePageSelection)super.clone();
	}

	@Override
	public boolean equals(Object object) {
		if (this == object) {
			return true;
		}

		if (!(object instanceof SitePageSelection)) {
			return false;
		}

		SitePageSelection sitePageSelection = (SitePageSelection)object;

		return Objects.equals(toString(), sitePageSelection.toString());
	}

	@Override
	public int hashCode() {
		String string = toString();

		return string.hashCode();
	}

	public String toString() {
		return SitePageSelectionSerDes.toJSON(this);
	}

	public static enum Visibility {

		PRIVATE("PRIVATE"), PUBLIC("PUBLIC");

		public static Visibility create(String value) {
			for (Visibility visibility : values()) {
				if (Objects.equals(visibility.getValue(), value) ||
					Objects.equals(visibility.name(), value)) {

					return visibility;
				}
			}

			return null;
		}

		public String getValue() {
			return _value;
		}

		@Override
		public String toString() {
			return _value;
		}

		private Visibility(String value) {
			_value = value;
		}

		private final String _value;

	}

}
// LIFERAY-REST-BUILDER-HASH:-1631994040