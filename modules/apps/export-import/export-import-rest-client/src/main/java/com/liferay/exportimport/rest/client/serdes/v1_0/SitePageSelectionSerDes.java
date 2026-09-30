/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.exportimport.rest.client.serdes.v1_0;

import com.liferay.exportimport.rest.client.dto.v1_0.SitePageSelection;
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
public class SitePageSelectionSerDes {

	public static SitePageSelection toDTO(String json) {
		SitePageSelectionJSONParser sitePageSelectionJSONParser =
			new SitePageSelectionJSONParser();

		return sitePageSelectionJSONParser.parseToDTO(json);
	}

	public static SitePageSelection[] toDTOs(String json) {
		SitePageSelectionJSONParser sitePageSelectionJSONParser =
			new SitePageSelectionJSONParser();

		return sitePageSelectionJSONParser.parseToDTOs(json);
	}

	public static String toJSON(SitePageSelection sitePageSelection) {
		if (sitePageSelection == null) {
			return "null";
		}

		StringBuilder sb = new StringBuilder();

		sb.append("{");

		if (sitePageSelection.getAll() != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"all\": ");

			sb.append(sitePageSelection.getAll());
		}

		if (sitePageSelection.getSitePageSelectionEntries() != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"sitePageSelectionEntries\": ");

			sb.append("[");

			for (int i = 0;
				 i < sitePageSelection.getSitePageSelectionEntries().length;
				 i++) {

				sb.append(
					String.valueOf(
						sitePageSelection.getSitePageSelectionEntries()[i]));

				if ((i + 1) <
						sitePageSelection.
							getSitePageSelectionEntries().length) {

					sb.append(", ");
				}
			}

			sb.append("]");
		}

		if (sitePageSelection.getVisibility() != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"visibility\": ");

			sb.append("\"");
			sb.append(sitePageSelection.getVisibility());
			sb.append("\"");
		}

		sb.append("}");

		return sb.toString();
	}

	public static Map<String, Object> toMap(String json) {
		SitePageSelectionJSONParser sitePageSelectionJSONParser =
			new SitePageSelectionJSONParser();

		return sitePageSelectionJSONParser.parseToMap(json);
	}

	public static Map<String, String> toMap(
		SitePageSelection sitePageSelection) {

		if (sitePageSelection == null) {
			return null;
		}

		Map<String, String> map = new TreeMap<>();

		if (sitePageSelection.getAll() == null) {
			map.put("all", null);
		}
		else {
			map.put("all", String.valueOf(sitePageSelection.getAll()));
		}

		if (sitePageSelection.getSitePageSelectionEntries() == null) {
			map.put("sitePageSelectionEntries", null);
		}
		else {
			map.put(
				"sitePageSelectionEntries",
				String.valueOf(
					sitePageSelection.getSitePageSelectionEntries()));
		}

		if (sitePageSelection.getVisibility() == null) {
			map.put("visibility", null);
		}
		else {
			map.put(
				"visibility",
				String.valueOf(sitePageSelection.getVisibility()));
		}

		return map;
	}

	public static class SitePageSelectionJSONParser
		extends BaseJSONParser<SitePageSelection> {

		@Override
		protected SitePageSelection createDTO() {
			return new SitePageSelection();
		}

		@Override
		protected SitePageSelection[] createDTOArray(int size) {
			return new SitePageSelection[size];
		}

		@Override
		protected boolean parseMaps(String jsonParserFieldName) {
			if (Objects.equals(jsonParserFieldName, "all")) {
				return false;
			}
			else if (Objects.equals(
						jsonParserFieldName, "sitePageSelectionEntries")) {

				return false;
			}
			else if (Objects.equals(jsonParserFieldName, "visibility")) {
				return false;
			}

			return false;
		}

		@Override
		protected void setField(
			SitePageSelection sitePageSelection, String jsonParserFieldName,
			Object jsonParserFieldValue) {

			if (Objects.equals(jsonParserFieldName, "all")) {
				if (jsonParserFieldValue != null) {
					sitePageSelection.setAll((Boolean)jsonParserFieldValue);
				}
			}
			else if (Objects.equals(
						jsonParserFieldName, "sitePageSelectionEntries")) {

				if (jsonParserFieldValue != null) {
					Object[] jsonParserFieldValues =
						(Object[])jsonParserFieldValue;

					SitePageSelectionEntry[] sitePageSelectionEntriesArray =
						new SitePageSelectionEntry
							[jsonParserFieldValues.length];

					for (int i = 0; i < sitePageSelectionEntriesArray.length;
						 i++) {

						sitePageSelectionEntriesArray[i] =
							SitePageSelectionEntrySerDes.toDTO(
								(String)jsonParserFieldValues[i]);
					}

					sitePageSelection.setSitePageSelectionEntries(
						sitePageSelectionEntriesArray);
				}
			}
			else if (Objects.equals(jsonParserFieldName, "visibility")) {
				if (jsonParserFieldValue != null) {
					sitePageSelection.setVisibility(
						SitePageSelection.Visibility.create(
							(String)jsonParserFieldValue));
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
// LIFERAY-REST-BUILDER-HASH:-2011817131