/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.exportimport.rest.client.serdes.v1_0;

import com.liferay.exportimport.rest.client.dto.v1_0.SitePageSelectionEntry;
import com.liferay.exportimport.rest.client.json.BaseJSONParser;

import jakarta.annotation.Generated;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.TreeMap;

/**
 * @author Petteri Karttunen
 * @generated
 */
@Generated("")
public class SitePageSelectionEntrySerDes {

	public static SitePageSelectionEntry toDTO(String json) {
		SitePageSelectionEntryJSONParser sitePageSelectionEntryJSONParser =
			new SitePageSelectionEntryJSONParser();

		return sitePageSelectionEntryJSONParser.parseToDTO(json);
	}

	public static SitePageSelectionEntry[] toDTOs(String json) {
		SitePageSelectionEntryJSONParser sitePageSelectionEntryJSONParser =
			new SitePageSelectionEntryJSONParser();

		return sitePageSelectionEntryJSONParser.parseToDTOs(json);
	}

	public static String toJSON(SitePageSelectionEntry sitePageSelectionEntry) {
		if (sitePageSelectionEntry == null) {
			return "null";
		}

		StringBuilder sb = new StringBuilder();

		sb.append("{");

		if (sitePageSelectionEntry.getExcluded() != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"excluded\": ");

			sb.append(sitePageSelectionEntry.getExcluded());
		}

		if (sitePageSelectionEntry.getIncludeDescendants() != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"includeDescendants\": ");

			sb.append(sitePageSelectionEntry.getIncludeDescendants());
		}

		if (sitePageSelectionEntry.getSitePageExternalReferenceCode() != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"sitePageExternalReferenceCode\": ");

			sb.append("\"");

			sb.append(
				_escape(
					sitePageSelectionEntry.getSitePageExternalReferenceCode()));

			sb.append("\"");
		}

		sb.append("}");

		return sb.toString();
	}

	public static Map<String, Object> toMap(String json) {
		SitePageSelectionEntryJSONParser sitePageSelectionEntryJSONParser =
			new SitePageSelectionEntryJSONParser();

		return sitePageSelectionEntryJSONParser.parseToMap(json);
	}

	public static Map<String, String> toMap(
		SitePageSelectionEntry sitePageSelectionEntry) {

		if (sitePageSelectionEntry == null) {
			return null;
		}

		Map<String, String> map = new TreeMap<>();

		if (sitePageSelectionEntry.getExcluded() == null) {
			map.put("excluded", null);
		}
		else {
			map.put(
				"excluded",
				String.valueOf(sitePageSelectionEntry.getExcluded()));
		}

		if (sitePageSelectionEntry.getIncludeDescendants() == null) {
			map.put("includeDescendants", null);
		}
		else {
			map.put(
				"includeDescendants",
				String.valueOf(sitePageSelectionEntry.getIncludeDescendants()));
		}

		if (sitePageSelectionEntry.getSitePageExternalReferenceCode() == null) {
			map.put("sitePageExternalReferenceCode", null);
		}
		else {
			map.put(
				"sitePageExternalReferenceCode",
				String.valueOf(
					sitePageSelectionEntry.getSitePageExternalReferenceCode()));
		}

		return map;
	}

	public static class SitePageSelectionEntryJSONParser
		extends BaseJSONParser<SitePageSelectionEntry> {

		@Override
		protected SitePageSelectionEntry createDTO() {
			return new SitePageSelectionEntry();
		}

		@Override
		protected SitePageSelectionEntry[] createDTOArray(int size) {
			return new SitePageSelectionEntry[size];
		}

		@Override
		protected boolean parseMaps(String jsonParserFieldName) {
			if (Objects.equals(jsonParserFieldName, "excluded")) {
				return false;
			}
			else if (Objects.equals(
						jsonParserFieldName, "includeDescendants")) {

				return false;
			}
			else if (Objects.equals(
						jsonParserFieldName, "sitePageExternalReferenceCode")) {

				return false;
			}

			return false;
		}

		@Override
		protected void setField(
			SitePageSelectionEntry sitePageSelectionEntry,
			String jsonParserFieldName, Object jsonParserFieldValue) {

			if (Objects.equals(jsonParserFieldName, "excluded")) {
				if (jsonParserFieldValue != null) {
					sitePageSelectionEntry.setExcluded(
						(Boolean)jsonParserFieldValue);
				}
			}
			else if (Objects.equals(
						jsonParserFieldName, "includeDescendants")) {

				if (jsonParserFieldValue != null) {
					sitePageSelectionEntry.setIncludeDescendants(
						(Boolean)jsonParserFieldValue);
				}
			}
			else if (Objects.equals(
						jsonParserFieldName, "sitePageExternalReferenceCode")) {

				if (jsonParserFieldValue != null) {
					sitePageSelectionEntry.setSitePageExternalReferenceCode(
						(String)jsonParserFieldValue);
				}
			}
		}

	}

	private static String _escape(Object object) {
		String string = String.valueOf(object);

		for (String[] strings : BaseJSONParser.JSON_ESCAPE_STRINGS) {
			string = string.replace(strings[0], strings[1]);
		}

		return string;
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
			sb.append(entry.getKey());
			sb.append("\": ");

			Object value = entry.getValue();

			sb.append(_toJSON(value));

			if (iterator.hasNext()) {
				sb.append(", ");
			}
		}

		sb.append("}");

		return sb.toString();
	}

	private static String _toJSON(Object value) {
		if (value == null) {
			return "null";
		}

		if (value instanceof Collection) {
			Collection<?> collection = (Collection<?>)value;

			return _toJSON(collection.toArray());
		}

		if (value instanceof Map) {
			return _toJSON((Map)value);
		}

		Class<?> clazz = value.getClass();

		if (clazz.isArray()) {
			StringBuilder sb = new StringBuilder("[");

			Object[] values = (Object[])value;

			for (int i = 0; i < values.length; i++) {
				sb.append(_toJSON(values[i]));

				if ((i + 1) < values.length) {
					sb.append(", ");
				}
			}

			sb.append("]");

			return sb.toString();
		}

		if (value instanceof String) {
			return "\"" + _escape(value) + "\"";
		}

		return String.valueOf(value);
	}

}
// LIFERAY-REST-BUILDER-HASH:-1114665641