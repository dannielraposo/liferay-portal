/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.exportimport.rest.client.serdes.v1_0;

import com.liferay.exportimport.rest.client.dto.v1_0.RemoteConnection;
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
public class RemoteConnectionSerDes {

	public static RemoteConnection toDTO(String json) {
		RemoteConnectionJSONParser remoteConnectionJSONParser =
			new RemoteConnectionJSONParser();

		return remoteConnectionJSONParser.parseToDTO(json);
	}

	public static RemoteConnection[] toDTOs(String json) {
		RemoteConnectionJSONParser remoteConnectionJSONParser =
			new RemoteConnectionJSONParser();

		return remoteConnectionJSONParser.parseToDTOs(json);
	}

	public static String toJSON(RemoteConnection remoteConnection) {
		if (remoteConnection == null) {
			return "null";
		}

		StringBuilder sb = new StringBuilder();

		sb.append("{");

		if (remoteConnection.getRemoteAddress() != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"remoteAddress\": ");

			sb.append("\"");

			sb.append(_escape(remoteConnection.getRemoteAddress()));

			sb.append("\"");
		}

		if (remoteConnection.getRemotePathContext() != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"remotePathContext\": ");

			sb.append("\"");

			sb.append(_escape(remoteConnection.getRemotePathContext()));

			sb.append("\"");
		}

		if (remoteConnection.getRemotePort() != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"remotePort\": ");

			sb.append(remoteConnection.getRemotePort());
		}

		if (remoteConnection.getRemoteSiteId() != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"remoteSiteId\": ");

			sb.append(remoteConnection.getRemoteSiteId());
		}

		if (remoteConnection.getSecureConnection() != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"secureConnection\": ");

			sb.append(remoteConnection.getSecureConnection());
		}

		sb.append("}");

		return sb.toString();
	}

	public static Map<String, Object> toMap(String json) {
		RemoteConnectionJSONParser remoteConnectionJSONParser =
			new RemoteConnectionJSONParser();

		return remoteConnectionJSONParser.parseToMap(json);
	}

	public static Map<String, String> toMap(RemoteConnection remoteConnection) {
		if (remoteConnection == null) {
			return null;
		}

		Map<String, String> map = new TreeMap<>();

		if (remoteConnection.getRemoteAddress() == null) {
			map.put("remoteAddress", null);
		}
		else {
			map.put(
				"remoteAddress",
				String.valueOf(remoteConnection.getRemoteAddress()));
		}

		if (remoteConnection.getRemotePathContext() == null) {
			map.put("remotePathContext", null);
		}
		else {
			map.put(
				"remotePathContext",
				String.valueOf(remoteConnection.getRemotePathContext()));
		}

		if (remoteConnection.getRemotePort() == null) {
			map.put("remotePort", null);
		}
		else {
			map.put(
				"remotePort", String.valueOf(remoteConnection.getRemotePort()));
		}

		if (remoteConnection.getRemoteSiteId() == null) {
			map.put("remoteSiteId", null);
		}
		else {
			map.put(
				"remoteSiteId",
				String.valueOf(remoteConnection.getRemoteSiteId()));
		}

		if (remoteConnection.getSecureConnection() == null) {
			map.put("secureConnection", null);
		}
		else {
			map.put(
				"secureConnection",
				String.valueOf(remoteConnection.getSecureConnection()));
		}

		return map;
	}

	public static class RemoteConnectionJSONParser
		extends BaseJSONParser<RemoteConnection> {

		@Override
		protected RemoteConnection createDTO() {
			return new RemoteConnection();
		}

		@Override
		protected RemoteConnection[] createDTOArray(int size) {
			return new RemoteConnection[size];
		}

		@Override
		protected boolean parseMaps(String jsonParserFieldName) {
			if (Objects.equals(jsonParserFieldName, "remoteAddress")) {
				return false;
			}
			else if (Objects.equals(jsonParserFieldName, "remotePathContext")) {
				return false;
			}
			else if (Objects.equals(jsonParserFieldName, "remotePort")) {
				return false;
			}
			else if (Objects.equals(jsonParserFieldName, "remoteSiteId")) {
				return false;
			}
			else if (Objects.equals(jsonParserFieldName, "secureConnection")) {
				return false;
			}

			return false;
		}

		@Override
		protected void setField(
			RemoteConnection remoteConnection, String jsonParserFieldName,
			Object jsonParserFieldValue) {

			if (Objects.equals(jsonParserFieldName, "remoteAddress")) {
				if (jsonParserFieldValue != null) {
					remoteConnection.setRemoteAddress(
						(String)jsonParserFieldValue);
				}
			}
			else if (Objects.equals(jsonParserFieldName, "remotePathContext")) {
				if (jsonParserFieldValue != null) {
					remoteConnection.setRemotePathContext(
						(String)jsonParserFieldValue);
				}
			}
			else if (Objects.equals(jsonParserFieldName, "remotePort")) {
				if (jsonParserFieldValue != null) {
					remoteConnection.setRemotePort(
						Integer.valueOf((String)jsonParserFieldValue));
				}
			}
			else if (Objects.equals(jsonParserFieldName, "remoteSiteId")) {
				if (jsonParserFieldValue != null) {
					remoteConnection.setRemoteSiteId(
						Long.valueOf((String)jsonParserFieldValue));
				}
			}
			else if (Objects.equals(jsonParserFieldName, "secureConnection")) {
				if (jsonParserFieldValue != null) {
					remoteConnection.setSecureConnection(
						(Boolean)jsonParserFieldValue);
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
// LIFERAY-REST-BUILDER-HASH:1069353954