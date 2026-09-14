/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.headless.admin.site.client.serdes.v1_0;

import com.liferay.headless.admin.site.client.dto.v1_0.SitePageTreeNode;
import com.liferay.headless.admin.site.client.json.BaseJSONParser;

import jakarta.annotation.Generated;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.TreeMap;

/**
 * @author Rubén Pulido
 * @generated
 */
@Generated("")
public class SitePageTreeNodeSerDes {

	public static SitePageTreeNode toDTO(String json) {
		SitePageTreeNodeJSONParser sitePageTreeNodeJSONParser =
			new SitePageTreeNodeJSONParser();

		return sitePageTreeNodeJSONParser.parseToDTO(json);
	}

	public static SitePageTreeNode[] toDTOs(String json) {
		SitePageTreeNodeJSONParser sitePageTreeNodeJSONParser =
			new SitePageTreeNodeJSONParser();

		return sitePageTreeNodeJSONParser.parseToDTOs(json);
	}

	public static String toJSON(SitePageTreeNode sitePageTreeNode) {
		if (sitePageTreeNode == null) {
			return "null";
		}

		StringBuilder sb = new StringBuilder();

		sb.append("{");

		if (sitePageTreeNode.getAncestorSitePageTreeNodes() != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"ancestorSitePageTreeNodes\": ");

			sb.append("[");

			for (int i = 0;
				 i < sitePageTreeNode.getAncestorSitePageTreeNodes().length;
				 i++) {

				sb.append(
					String.valueOf(
						sitePageTreeNode.getAncestorSitePageTreeNodes()[i]));

				if ((i + 1) <
						sitePageTreeNode.
							getAncestorSitePageTreeNodes().length) {

					sb.append(", ");
				}
			}

			sb.append("]");
		}

		if (sitePageTreeNode.getDescendantSitePagesCount() != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"descendantSitePagesCount\": ");

			sb.append(sitePageTreeNode.getDescendantSitePagesCount());
		}

		if (sitePageTreeNode.getExternalReferenceCode() != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"externalReferenceCode\": ");

			sb.append("\"");

			sb.append(_escape(sitePageTreeNode.getExternalReferenceCode()));

			sb.append("\"");
		}

		if (sitePageTreeNode.getHasChildSitePages() != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"hasChildSitePages\": ");

			sb.append(sitePageTreeNode.getHasChildSitePages());
		}

		if (sitePageTreeNode.getName() != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"name\": ");

			sb.append("\"");

			sb.append(_escape(sitePageTreeNode.getName()));

			sb.append("\"");
		}

		if (sitePageTreeNode.getParentSitePageExternalReferenceCode() != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"parentSitePageExternalReferenceCode\": ");

			sb.append("\"");

			sb.append(
				_escape(
					sitePageTreeNode.getParentSitePageExternalReferenceCode()));

			sb.append("\"");
		}

		if (sitePageTreeNode.getType() != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"type\": ");

			sb.append("\"");
			sb.append(sitePageTreeNode.getType());
			sb.append("\"");
		}

		sb.append("}");

		return sb.toString();
	}

	public static Map<String, Object> toMap(String json) {
		SitePageTreeNodeJSONParser sitePageTreeNodeJSONParser =
			new SitePageTreeNodeJSONParser();

		return sitePageTreeNodeJSONParser.parseToMap(json);
	}

	public static Map<String, String> toMap(SitePageTreeNode sitePageTreeNode) {
		if (sitePageTreeNode == null) {
			return null;
		}

		Map<String, String> map = new TreeMap<>();

		if (sitePageTreeNode.getAncestorSitePageTreeNodes() == null) {
			map.put("ancestorSitePageTreeNodes", null);
		}
		else {
			map.put(
				"ancestorSitePageTreeNodes",
				String.valueOf(
					sitePageTreeNode.getAncestorSitePageTreeNodes()));
		}

		if (sitePageTreeNode.getDescendantSitePagesCount() == null) {
			map.put("descendantSitePagesCount", null);
		}
		else {
			map.put(
				"descendantSitePagesCount",
				String.valueOf(sitePageTreeNode.getDescendantSitePagesCount()));
		}

		if (sitePageTreeNode.getExternalReferenceCode() == null) {
			map.put("externalReferenceCode", null);
		}
		else {
			map.put(
				"externalReferenceCode",
				String.valueOf(sitePageTreeNode.getExternalReferenceCode()));
		}

		if (sitePageTreeNode.getHasChildSitePages() == null) {
			map.put("hasChildSitePages", null);
		}
		else {
			map.put(
				"hasChildSitePages",
				String.valueOf(sitePageTreeNode.getHasChildSitePages()));
		}

		if (sitePageTreeNode.getName() == null) {
			map.put("name", null);
		}
		else {
			map.put("name", String.valueOf(sitePageTreeNode.getName()));
		}

		if (sitePageTreeNode.getParentSitePageExternalReferenceCode() == null) {
			map.put("parentSitePageExternalReferenceCode", null);
		}
		else {
			map.put(
				"parentSitePageExternalReferenceCode",
				String.valueOf(
					sitePageTreeNode.getParentSitePageExternalReferenceCode()));
		}

		if (sitePageTreeNode.getType() == null) {
			map.put("type", null);
		}
		else {
			map.put("type", String.valueOf(sitePageTreeNode.getType()));
		}

		return map;
	}

	public static class SitePageTreeNodeJSONParser
		extends BaseJSONParser<SitePageTreeNode> {

		@Override
		protected SitePageTreeNode createDTO() {
			return new SitePageTreeNode();
		}

		@Override
		protected SitePageTreeNode[] createDTOArray(int size) {
			return new SitePageTreeNode[size];
		}

		@Override
		protected boolean parseMaps(String jsonParserFieldName) {
			if (Objects.equals(
					jsonParserFieldName, "ancestorSitePageTreeNodes")) {

				return false;
			}
			else if (Objects.equals(
						jsonParserFieldName, "descendantSitePagesCount")) {

				return false;
			}
			else if (Objects.equals(
						jsonParserFieldName, "externalReferenceCode")) {

				return false;
			}
			else if (Objects.equals(jsonParserFieldName, "hasChildSitePages")) {
				return false;
			}
			else if (Objects.equals(jsonParserFieldName, "name")) {
				return false;
			}
			else if (Objects.equals(
						jsonParserFieldName,
						"parentSitePageExternalReferenceCode")) {

				return false;
			}
			else if (Objects.equals(jsonParserFieldName, "type")) {
				return false;
			}

			return false;
		}

		@Override
		protected void setField(
			SitePageTreeNode sitePageTreeNode, String jsonParserFieldName,
			Object jsonParserFieldValue) {

			if (Objects.equals(
					jsonParserFieldName, "ancestorSitePageTreeNodes")) {

				if (jsonParserFieldValue != null) {
					Object[] jsonParserFieldValues =
						(Object[])jsonParserFieldValue;

					SitePageTreeNode[] ancestorSitePageTreeNodesArray =
						new SitePageTreeNode[jsonParserFieldValues.length];

					for (int i = 0; i < ancestorSitePageTreeNodesArray.length;
						 i++) {

						ancestorSitePageTreeNodesArray[i] =
							SitePageTreeNodeSerDes.toDTO(
								(String)jsonParserFieldValues[i]);
					}

					sitePageTreeNode.setAncestorSitePageTreeNodes(
						ancestorSitePageTreeNodesArray);
				}
			}
			else if (Objects.equals(
						jsonParserFieldName, "descendantSitePagesCount")) {

				if (jsonParserFieldValue != null) {
					sitePageTreeNode.setDescendantSitePagesCount(
						Integer.valueOf((String)jsonParserFieldValue));
				}
			}
			else if (Objects.equals(
						jsonParserFieldName, "externalReferenceCode")) {

				if (jsonParserFieldValue != null) {
					sitePageTreeNode.setExternalReferenceCode(
						(String)jsonParserFieldValue);
				}
			}
			else if (Objects.equals(jsonParserFieldName, "hasChildSitePages")) {
				if (jsonParserFieldValue != null) {
					sitePageTreeNode.setHasChildSitePages(
						(Boolean)jsonParserFieldValue);
				}
			}
			else if (Objects.equals(jsonParserFieldName, "name")) {
				if (jsonParserFieldValue != null) {
					sitePageTreeNode.setName((String)jsonParserFieldValue);
				}
			}
			else if (Objects.equals(
						jsonParserFieldName,
						"parentSitePageExternalReferenceCode")) {

				if (jsonParserFieldValue != null) {
					sitePageTreeNode.setParentSitePageExternalReferenceCode(
						(String)jsonParserFieldValue);
				}
			}
			else if (Objects.equals(jsonParserFieldName, "type")) {
				if (jsonParserFieldValue != null) {
					sitePageTreeNode.setType(
						SitePageTreeNode.Type.create(
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
// LIFERAY-REST-BUILDER-HASH:-1317765787