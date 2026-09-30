/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.exportimport.rest.dto.v1_0;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonFilter;
import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonValue;

import com.liferay.petra.function.UnsafeSupplier;
import com.liferay.petra.string.StringBundler;
import com.liferay.portal.kernel.json.JSONFactoryUtil;
import com.liferay.portal.kernel.util.StringUtil;
import com.liferay.portal.vulcan.graphql.annotation.GraphQLField;
import com.liferay.portal.vulcan.graphql.annotation.GraphQLName;
import com.liferay.portal.vulcan.util.ObjectMapperUtil;

import jakarta.annotation.Generated;

import jakarta.validation.Valid;

import jakarta.xml.bind.annotation.XmlRootElement;

import java.io.Serializable;

import java.util.Arrays;
import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.function.Supplier;

/**
 * @author Petteri Karttunen
 * @generated
 */
@Generated("")
@GraphQLName(
	description = "The pages to include. A page follows its own entry for itself, then its own entry for its descendants, then the nearest ancestor with an entry that includes descendants, then `all`. Omitting the field includes no pages.",
	value = "SitePageSelection"
)
@io.swagger.v3.oas.annotations.media.Schema(
	description = "The pages to include. A page follows its own entry for itself, then its own entry for its descendants, then the nearest ancestor with an entry that includes descendants, then `all`. Omitting the field includes no pages."
)
@JsonFilter("Liferay.Vulcan")
@XmlRootElement(name = "SitePageSelection")
public class SitePageSelection implements Serializable {

	public static SitePageSelection toDTO(String json) {
		return ObjectMapperUtil.readValue(SitePageSelection.class, json);
	}

	public static SitePageSelection unsafeToDTO(String json) {
		return ObjectMapperUtil.unsafeReadValue(SitePageSelection.class, json);
	}

	@io.swagger.v3.oas.annotations.media.Schema(
		description = "Includes every page of the chosen visibility. The entries refine the selection."
	)
	public Boolean getAll() {
		if (_allSupplier != null) {
			all = _allSupplier.get();

			_allSupplier = null;
		}

		return all;
	}

	public void setAll(Boolean all) {
		this.all = all;

		_allSupplier = null;
	}

	@JsonIgnore
	public void setAll(UnsafeSupplier<Boolean, Exception> allUnsafeSupplier) {
		_allSupplier = () -> {
			try {
				return allUnsafeSupplier.get();
			}
			catch (RuntimeException runtimeException) {
				throw runtimeException;
			}
			catch (Exception exception) {
				throw new RuntimeException(exception);
			}
		};
	}

	@GraphQLField(
		description = "Includes every page of the chosen visibility. The entries refine the selection."
	)
	@JsonProperty(access = JsonProperty.Access.READ_WRITE)
	protected Boolean all;

	@JsonIgnore
	private Supplier<Boolean> _allSupplier;

	@io.swagger.v3.oas.annotations.media.Schema
	@Valid
	public SitePageSelectionEntry[] getSitePageSelectionEntries() {
		if (_sitePageSelectionEntriesSupplier != null) {
			sitePageSelectionEntries = _sitePageSelectionEntriesSupplier.get();

			_sitePageSelectionEntriesSupplier = null;
		}

		return sitePageSelectionEntries;
	}

	public void setSitePageSelectionEntries(
		SitePageSelectionEntry[] sitePageSelectionEntries) {

		this.sitePageSelectionEntries = sitePageSelectionEntries;

		_sitePageSelectionEntriesSupplier = null;
	}

	@JsonIgnore
	public void setSitePageSelectionEntries(
		UnsafeSupplier<SitePageSelectionEntry[], Exception>
			sitePageSelectionEntriesUnsafeSupplier) {

		_sitePageSelectionEntriesSupplier = () -> {
			try {
				return sitePageSelectionEntriesUnsafeSupplier.get();
			}
			catch (RuntimeException runtimeException) {
				throw runtimeException;
			}
			catch (Exception exception) {
				throw new RuntimeException(exception);
			}
		};
	}

	@GraphQLField
	@JsonProperty(access = JsonProperty.Access.READ_WRITE)
	protected SitePageSelectionEntry[] sitePageSelectionEntries;

	@JsonIgnore
	private Supplier<SitePageSelectionEntry[]>
		_sitePageSelectionEntriesSupplier;

	@io.swagger.v3.oas.annotations.media.Schema
	@JsonGetter("visibility")
	@Valid
	public Visibility getVisibility() {
		if (_visibilitySupplier != null) {
			visibility = _visibilitySupplier.get();

			_visibilitySupplier = null;
		}

		return visibility;
	}

	@JsonIgnore
	public String getVisibilityAsString() {
		Visibility visibility = getVisibility();

		if (visibility == null) {
			return null;
		}

		return visibility.toString();
	}

	public void setVisibility(Visibility visibility) {
		this.visibility = visibility;

		_visibilitySupplier = null;
	}

	@JsonIgnore
	public void setVisibility(
		UnsafeSupplier<Visibility, Exception> visibilityUnsafeSupplier) {

		_visibilitySupplier = () -> {
			try {
				return visibilityUnsafeSupplier.get();
			}
			catch (RuntimeException runtimeException) {
				throw runtimeException;
			}
			catch (Exception exception) {
				throw new RuntimeException(exception);
			}
		};
	}

	@GraphQLField
	@JsonProperty(access = JsonProperty.Access.READ_WRITE)
	protected Visibility visibility;

	@JsonIgnore
	private Supplier<Visibility> _visibilitySupplier;

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
		StringBundler sb = new StringBundler();

		sb.append("{");

		Boolean all = getAll();

		if (all != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"all\": ");

			sb.append(all);
		}

		SitePageSelectionEntry[] sitePageSelectionEntries =
			getSitePageSelectionEntries();

		if (sitePageSelectionEntries != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"sitePageSelectionEntries\": ");

			sb.append("[");

			for (int i = 0; i < sitePageSelectionEntries.length; i++) {
				sb.append(String.valueOf(sitePageSelectionEntries[i]));

				if ((i + 1) < sitePageSelectionEntries.length) {
					sb.append(", ");
				}
			}

			sb.append("]");
		}

		Visibility visibility = getVisibility();

		if (visibility != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"visibility\": ");

			sb.append("\"");
			sb.append(visibility);
			sb.append("\"");
		}

		sb.append("}");

		return sb.toString();
	}

	@io.swagger.v3.oas.annotations.media.Schema(
		accessMode = io.swagger.v3.oas.annotations.media.Schema.AccessMode.READ_ONLY,
		defaultValue = "com.liferay.exportimport.rest.dto.v1_0.SitePageSelection",
		name = "x-class-name"
	)
	public String xClassName;

	@GraphQLName("Visibility")
	public static enum Visibility {

		PRIVATE("PRIVATE"), PUBLIC("PUBLIC");

		@JsonCreator
		public static Visibility create(String value) {
			if ((value == null) || value.equals("")) {
				return null;
			}

			for (Visibility visibility : values()) {
				if (Objects.equals(visibility.getValue(), value)) {
					return visibility;
				}
			}

			throw new IllegalArgumentException("Invalid enum value: " + value);
		}

		@JsonValue
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

	private static String _escape(Object object) {
		return StringUtil.replace(
			String.valueOf(object), _JSON_ESCAPE_STRINGS[0],
			_JSON_ESCAPE_STRINGS[1]);
	}

	private static boolean _isArray(Object value) {
		if (value == null) {
			return false;
		}

		Class<?> clazz = value.getClass();

		return clazz.isArray();
	}

	private static String _toJSON(Map<String, ?> map) {
		StringBuilder sb = new StringBuilder("{");

		@SuppressWarnings("unchecked")
		Set set = map.entrySet();

		@SuppressWarnings("unchecked")
		Iterator<Map.Entry<String, ?>> iterator = set.iterator();

		while (iterator.hasNext()) {
			Map.Entry<String, ?> entry = iterator.next();

			sb.append("\"");
			sb.append(_escape(entry.getKey()));
			sb.append("\": ");

			Object value = entry.getValue();

			if (_isArray(value)) {
				sb.append("[");

				Object[] valueArray = (Object[])value;

				for (int i = 0; i < valueArray.length; i++) {
					if (valueArray[i] instanceof Map) {
						sb.append(_toJSON((Map<String, ?>)valueArray[i]));
					}
					else if (valueArray[i] instanceof String) {
						sb.append("\"");
						sb.append(valueArray[i]);
						sb.append("\"");
					}
					else {
						sb.append(valueArray[i]);
					}

					if ((i + 1) < valueArray.length) {
						sb.append(", ");
					}
				}

				sb.append("]");
			}
			else if (value instanceof Map) {
				sb.append(_toJSON((Map<String, ?>)value));
			}
			else if (value instanceof String) {
				sb.append("\"");
				sb.append(_escape(value));
				sb.append("\"");
			}
			else {
				sb.append(value);
			}

			if (iterator.hasNext()) {
				sb.append(", ");
			}
		}

		sb.append("}");

		return sb.toString();
	}

	private static String _toJSON(Object value) {
		if (value instanceof Collection) {
			return String.valueOf(
				JSONFactoryUtil.createJSONArray((Collection<?>)value));
		}
		else if (value instanceof Map) {
			return String.valueOf(
				JSONFactoryUtil.createJSONObject((Map<?, ?>)value));
		}
		else if (value instanceof Object[]) {
			return String.valueOf(
				JSONFactoryUtil.createJSONArray(
					Arrays.asList((Object[])value)));
		}
		else if (value instanceof String) {
			return StringBundler.concat("\"", _escape(value), "\"");
		}

		return String.valueOf(value);
	}

	private static final String[][] _JSON_ESCAPE_STRINGS = {
		{"\\", "\"", "\b", "\f", "\n", "\r", "\t"},
		{"\\\\", "\\\"", "\\b", "\\f", "\\n", "\\r", "\\t"}
	};

	private Map<String, Serializable> _extendedProperties;

}
// LIFERAY-REST-BUILDER-HASH:334729798