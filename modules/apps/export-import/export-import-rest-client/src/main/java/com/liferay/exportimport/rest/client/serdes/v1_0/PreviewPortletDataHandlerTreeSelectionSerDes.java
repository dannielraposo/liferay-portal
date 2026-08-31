/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.exportimport.rest.client.serdes.v1_0;

import com.liferay.exportimport.rest.client.dto.v1_0.PreviewPortletDataHandlerControl;
import com.liferay.exportimport.rest.client.dto.v1_0.PreviewPortletDataHandlerTreeSelection;
import com.liferay.exportimport.rest.client.json.BaseJSONParser;

import jakarta.annotation.Generated;

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
public class PreviewPortletDataHandlerTreeSelectionSerDes {

	public static PreviewPortletDataHandlerTreeSelection toDTO(String json) {
		PreviewPortletDataHandlerTreeSelectionJSONParser
			previewPortletDataHandlerTreeSelectionJSONParser =
				new PreviewPortletDataHandlerTreeSelectionJSONParser();

		return previewPortletDataHandlerTreeSelectionJSONParser.parseToDTO(
			json);
	}

	public static PreviewPortletDataHandlerTreeSelection[] toDTOs(String json) {
		PreviewPortletDataHandlerTreeSelectionJSONParser
			previewPortletDataHandlerTreeSelectionJSONParser =
				new PreviewPortletDataHandlerTreeSelectionJSONParser();

		return previewPortletDataHandlerTreeSelectionJSONParser.parseToDTOs(
			json);
	}

	public static String toJSON(
		PreviewPortletDataHandlerTreeSelection
			previewPortletDataHandlerTreeSelection) {

		if (previewPortletDataHandlerTreeSelection == null) {
			return "null";
		}

		StringBuilder sb = new StringBuilder();

		sb.append("{");

		if (previewPortletDataHandlerTreeSelection.getDisabled() != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"disabled\": ");

			sb.append(previewPortletDataHandlerTreeSelection.getDisabled());
		}

		if (previewPortletDataHandlerTreeSelection.getLabel() != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"label\": ");

			sb.append("\"");

			sb.append(
				_escape(previewPortletDataHandlerTreeSelection.getLabel()));

			sb.append("\"");
		}

		if (previewPortletDataHandlerTreeSelection.getName() != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"name\": ");

			sb.append("\"");

			sb.append(
				_escape(previewPortletDataHandlerTreeSelection.getName()));

			sb.append("\"");
		}

		if (previewPortletDataHandlerTreeSelection.
				getPreviewPortletDataHandlerControls() != null) {

			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"previewPortletDataHandlerControls\": ");

			sb.append("[");

			for (int i = 0;
				 i < previewPortletDataHandlerTreeSelection.
					 getPreviewPortletDataHandlerControls().length;
				 i++) {

				sb.append(
					String.valueOf(
						previewPortletDataHandlerTreeSelection.
							getPreviewPortletDataHandlerControls()[i]));

				if ((i + 1) < previewPortletDataHandlerTreeSelection.
						getPreviewPortletDataHandlerControls().length) {

					sb.append(", ");
				}
			}

			sb.append("]");
		}

		if (previewPortletDataHandlerTreeSelection.getType() != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"type\": ");

			sb.append("\"");
			sb.append(previewPortletDataHandlerTreeSelection.getType());
			sb.append("\"");
		}

		sb.append("}");

		return sb.toString();
	}

	public static Map<String, Object> toMap(String json) {
		PreviewPortletDataHandlerTreeSelectionJSONParser
			previewPortletDataHandlerTreeSelectionJSONParser =
				new PreviewPortletDataHandlerTreeSelectionJSONParser();

		return previewPortletDataHandlerTreeSelectionJSONParser.parseToMap(
			json);
	}

	public static Map<String, String> toMap(
		PreviewPortletDataHandlerTreeSelection
			previewPortletDataHandlerTreeSelection) {

		if (previewPortletDataHandlerTreeSelection == null) {
			return null;
		}

		Map<String, String> map = new TreeMap<>();

		if (previewPortletDataHandlerTreeSelection.getDisabled() == null) {
			map.put("disabled", null);
		}
		else {
			map.put(
				"disabled",
				String.valueOf(
					previewPortletDataHandlerTreeSelection.getDisabled()));
		}

		if (previewPortletDataHandlerTreeSelection.getLabel() == null) {
			map.put("label", null);
		}
		else {
			map.put(
				"label",
				String.valueOf(
					previewPortletDataHandlerTreeSelection.getLabel()));
		}

		if (previewPortletDataHandlerTreeSelection.getName() == null) {
			map.put("name", null);
		}
		else {
			map.put(
				"name",
				String.valueOf(
					previewPortletDataHandlerTreeSelection.getName()));
		}

		if (previewPortletDataHandlerTreeSelection.
				getPreviewPortletDataHandlerControls() == null) {

			map.put("previewPortletDataHandlerControls", null);
		}
		else {
			map.put(
				"previewPortletDataHandlerControls",
				String.valueOf(
					previewPortletDataHandlerTreeSelection.
						getPreviewPortletDataHandlerControls()));
		}

		if (previewPortletDataHandlerTreeSelection.getType() == null) {
			map.put("type", null);
		}
		else {
			map.put(
				"type",
				String.valueOf(
					previewPortletDataHandlerTreeSelection.getType()));
		}

		return map;
	}

	public static class PreviewPortletDataHandlerTreeSelectionJSONParser
		extends BaseJSONParser<PreviewPortletDataHandlerTreeSelection> {

		@Override
		protected PreviewPortletDataHandlerTreeSelection createDTO() {
			return new PreviewPortletDataHandlerTreeSelection();
		}

		@Override
		protected PreviewPortletDataHandlerTreeSelection[] createDTOArray(
			int size) {

			return new PreviewPortletDataHandlerTreeSelection[size];
		}

		@Override
		protected boolean parseMaps(String jsonParserFieldName) {
			if (Objects.equals(jsonParserFieldName, "disabled")) {
				return false;
			}
			else if (Objects.equals(jsonParserFieldName, "label")) {
				return false;
			}
			else if (Objects.equals(jsonParserFieldName, "name")) {
				return false;
			}
			else if (Objects.equals(
						jsonParserFieldName,
						"previewPortletDataHandlerControls")) {

				return false;
			}
			else if (Objects.equals(jsonParserFieldName, "type")) {
				return false;
			}

			return false;
		}

		@Override
		protected void setField(
			PreviewPortletDataHandlerTreeSelection
				previewPortletDataHandlerTreeSelection,
			String jsonParserFieldName, Object jsonParserFieldValue) {

			if (Objects.equals(jsonParserFieldName, "disabled")) {
				if (jsonParserFieldValue != null) {
					previewPortletDataHandlerTreeSelection.setDisabled(
						(Boolean)jsonParserFieldValue);
				}
			}
			else if (Objects.equals(jsonParserFieldName, "label")) {
				if (jsonParserFieldValue != null) {
					previewPortletDataHandlerTreeSelection.setLabel(
						(String)jsonParserFieldValue);
				}
			}
			else if (Objects.equals(jsonParserFieldName, "name")) {
				if (jsonParserFieldValue != null) {
					previewPortletDataHandlerTreeSelection.setName(
						(String)jsonParserFieldValue);
				}
			}
			else if (Objects.equals(
						jsonParserFieldName,
						"previewPortletDataHandlerControls")) {

				if (jsonParserFieldValue != null) {
					Object[] jsonParserFieldValues =
						(Object[])jsonParserFieldValue;

					PreviewPortletDataHandlerControl[]
						previewPortletDataHandlerControlsArray =
							new PreviewPortletDataHandlerControl
								[jsonParserFieldValues.length];

					for (int i = 0;
						 i < previewPortletDataHandlerControlsArray.length;
						 i++) {

						previewPortletDataHandlerControlsArray[i] =
							PreviewPortletDataHandlerControlSerDes.toDTO(
								(String)jsonParserFieldValues[i]);
					}

					previewPortletDataHandlerTreeSelection.
						setPreviewPortletDataHandlerControls(
							previewPortletDataHandlerControlsArray);
				}
			}
			else if (Objects.equals(jsonParserFieldName, "type")) {
				if (jsonParserFieldValue != null) {
					previewPortletDataHandlerTreeSelection.setType(
						PreviewPortletDataHandlerTreeSelection.Type.create(
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
// LIFERAY-REST-BUILDER-HASH:-1861521738