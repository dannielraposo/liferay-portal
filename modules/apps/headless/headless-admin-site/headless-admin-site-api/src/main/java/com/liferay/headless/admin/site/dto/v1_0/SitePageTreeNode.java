/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.headless.admin.site.dto.v1_0;

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
 * @author Rubén Pulido
 * @generated
 */
@Generated("")
@GraphQLName(
	description = "A page of a layout set as a node of the page tree. The tree is read from the page hierarchy itself, so a node is available as soon as the page exists.",
	value = "SitePageTreeNode"
)
@io.swagger.v3.oas.annotations.media.Schema(
	description = "A page of a layout set as a node of the page tree. The tree is read from the page hierarchy itself, so a node is available as soon as the page exists."
)
@JsonFilter("Liferay.Vulcan")
@XmlRootElement(name = "SitePageTreeNode")
public class SitePageTreeNode implements Serializable {

	public static SitePageTreeNode toDTO(String json) {
		return ObjectMapperUtil.readValue(SitePageTreeNode.class, json);
	}

	public static SitePageTreeNode unsafeToDTO(String json) {
		return ObjectMapperUtil.unsafeReadValue(SitePageTreeNode.class, json);
	}

	@io.swagger.v3.oas.annotations.media.Schema(
		description = "The pages above this page, from the root page down to the parent. This field is not returned by default. It can be requested via nestedFields."
	)
	@Valid
	public SitePageTreeNode[] getAncestorSitePageTreeNodes() {
		if (_ancestorSitePageTreeNodesSupplier != null) {
			ancestorSitePageTreeNodes =
				_ancestorSitePageTreeNodesSupplier.get();

			_ancestorSitePageTreeNodesSupplier = null;
		}

		return ancestorSitePageTreeNodes;
	}

	public void setAncestorSitePageTreeNodes(
		SitePageTreeNode[] ancestorSitePageTreeNodes) {

		this.ancestorSitePageTreeNodes = ancestorSitePageTreeNodes;

		_ancestorSitePageTreeNodesSupplier = null;
	}

	@JsonIgnore
	public void setAncestorSitePageTreeNodes(
		UnsafeSupplier<SitePageTreeNode[], Exception>
			ancestorSitePageTreeNodesUnsafeSupplier) {

		_ancestorSitePageTreeNodesSupplier = () -> {
			try {
				return ancestorSitePageTreeNodesUnsafeSupplier.get();
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
		description = "The pages above this page, from the root page down to the parent. This field is not returned by default. It can be requested via nestedFields."
	)
	@JsonProperty(access = JsonProperty.Access.READ_ONLY)
	protected SitePageTreeNode[] ancestorSitePageTreeNodes;

	@JsonIgnore
	private Supplier<SitePageTreeNode[]> _ancestorSitePageTreeNodesSupplier;

	@io.swagger.v3.oas.annotations.media.Schema(
		description = "The number of pages below this page, at every depth."
	)
	public Integer getDescendantSitePagesCount() {
		if (_descendantSitePagesCountSupplier != null) {
			descendantSitePagesCount = _descendantSitePagesCountSupplier.get();

			_descendantSitePagesCountSupplier = null;
		}

		return descendantSitePagesCount;
	}

	public void setDescendantSitePagesCount(Integer descendantSitePagesCount) {
		this.descendantSitePagesCount = descendantSitePagesCount;

		_descendantSitePagesCountSupplier = null;
	}

	@JsonIgnore
	public void setDescendantSitePagesCount(
		UnsafeSupplier<Integer, Exception>
			descendantSitePagesCountUnsafeSupplier) {

		_descendantSitePagesCountSupplier = () -> {
			try {
				return descendantSitePagesCountUnsafeSupplier.get();
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
		description = "The number of pages below this page, at every depth."
	)
	@JsonProperty(access = JsonProperty.Access.READ_ONLY)
	protected Integer descendantSitePagesCount;

	@JsonIgnore
	private Supplier<Integer> _descendantSitePagesCountSupplier;

	@io.swagger.v3.oas.annotations.media.Schema
	public String getExternalReferenceCode() {
		if (_externalReferenceCodeSupplier != null) {
			externalReferenceCode = _externalReferenceCodeSupplier.get();

			_externalReferenceCodeSupplier = null;
		}

		return externalReferenceCode;
	}

	public void setExternalReferenceCode(String externalReferenceCode) {
		this.externalReferenceCode = externalReferenceCode;

		_externalReferenceCodeSupplier = null;
	}

	@JsonIgnore
	public void setExternalReferenceCode(
		UnsafeSupplier<String, Exception> externalReferenceCodeUnsafeSupplier) {

		_externalReferenceCodeSupplier = () -> {
			try {
				return externalReferenceCodeUnsafeSupplier.get();
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
	@JsonProperty(access = JsonProperty.Access.READ_ONLY)
	protected String externalReferenceCode;

	@JsonIgnore
	private Supplier<String> _externalReferenceCodeSupplier;

	@io.swagger.v3.oas.annotations.media.Schema
	public Boolean getHasChildSitePages() {
		if (_hasChildSitePagesSupplier != null) {
			hasChildSitePages = _hasChildSitePagesSupplier.get();

			_hasChildSitePagesSupplier = null;
		}

		return hasChildSitePages;
	}

	public void setHasChildSitePages(Boolean hasChildSitePages) {
		this.hasChildSitePages = hasChildSitePages;

		_hasChildSitePagesSupplier = null;
	}

	@JsonIgnore
	public void setHasChildSitePages(
		UnsafeSupplier<Boolean, Exception> hasChildSitePagesUnsafeSupplier) {

		_hasChildSitePagesSupplier = () -> {
			try {
				return hasChildSitePagesUnsafeSupplier.get();
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
	@JsonProperty(access = JsonProperty.Access.READ_ONLY)
	protected Boolean hasChildSitePages;

	@JsonIgnore
	private Supplier<Boolean> _hasChildSitePagesSupplier;

	@io.swagger.v3.oas.annotations.media.Schema
	public String getName() {
		if (_nameSupplier != null) {
			name = _nameSupplier.get();

			_nameSupplier = null;
		}

		return name;
	}

	public void setName(String name) {
		this.name = name;

		_nameSupplier = null;
	}

	@JsonIgnore
	public void setName(UnsafeSupplier<String, Exception> nameUnsafeSupplier) {
		_nameSupplier = () -> {
			try {
				return nameUnsafeSupplier.get();
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
	@JsonProperty(access = JsonProperty.Access.READ_ONLY)
	protected String name;

	@JsonIgnore
	private Supplier<String> _nameSupplier;

	@io.swagger.v3.oas.annotations.media.Schema
	public String getParentSitePageExternalReferenceCode() {
		if (_parentSitePageExternalReferenceCodeSupplier != null) {
			parentSitePageExternalReferenceCode =
				_parentSitePageExternalReferenceCodeSupplier.get();

			_parentSitePageExternalReferenceCodeSupplier = null;
		}

		return parentSitePageExternalReferenceCode;
	}

	public void setParentSitePageExternalReferenceCode(
		String parentSitePageExternalReferenceCode) {

		this.parentSitePageExternalReferenceCode =
			parentSitePageExternalReferenceCode;

		_parentSitePageExternalReferenceCodeSupplier = null;
	}

	@JsonIgnore
	public void setParentSitePageExternalReferenceCode(
		UnsafeSupplier<String, Exception>
			parentSitePageExternalReferenceCodeUnsafeSupplier) {

		_parentSitePageExternalReferenceCodeSupplier = () -> {
			try {
				return parentSitePageExternalReferenceCodeUnsafeSupplier.get();
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
	@JsonProperty(access = JsonProperty.Access.READ_ONLY)
	protected String parentSitePageExternalReferenceCode;

	@JsonIgnore
	private Supplier<String> _parentSitePageExternalReferenceCodeSupplier;

	@io.swagger.v3.oas.annotations.media.Schema
	@JsonGetter("type")
	@Valid
	public Type getType() {
		if (_typeSupplier != null) {
			type = _typeSupplier.get();

			_typeSupplier = null;
		}

		return type;
	}

	@JsonIgnore
	public String getTypeAsString() {
		Type type = getType();

		if (type == null) {
			return null;
		}

		return type.toString();
	}

	public void setType(Type type) {
		this.type = type;

		_typeSupplier = null;
	}

	@JsonIgnore
	public void setType(UnsafeSupplier<Type, Exception> typeUnsafeSupplier) {
		_typeSupplier = () -> {
			try {
				return typeUnsafeSupplier.get();
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
	@JsonProperty(access = JsonProperty.Access.READ_ONLY)
	protected Type type;

	@JsonIgnore
	private Supplier<Type> _typeSupplier;

	@Override
	public boolean equals(Object object) {
		if (this == object) {
			return true;
		}

		if (!(object instanceof SitePageTreeNode)) {
			return false;
		}

		SitePageTreeNode sitePageTreeNode = (SitePageTreeNode)object;

		return Objects.equals(toString(), sitePageTreeNode.toString());
	}

	@Override
	public int hashCode() {
		String string = toString();

		return string.hashCode();
	}

	public String toString() {
		StringBundler sb = new StringBundler();

		sb.append("{");

		SitePageTreeNode[] ancestorSitePageTreeNodes =
			getAncestorSitePageTreeNodes();

		if (ancestorSitePageTreeNodes != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"ancestorSitePageTreeNodes\": ");

			sb.append("[");

			for (int i = 0; i < ancestorSitePageTreeNodes.length; i++) {
				sb.append(String.valueOf(ancestorSitePageTreeNodes[i]));

				if ((i + 1) < ancestorSitePageTreeNodes.length) {
					sb.append(", ");
				}
			}

			sb.append("]");
		}

		Integer descendantSitePagesCount = getDescendantSitePagesCount();

		if (descendantSitePagesCount != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"descendantSitePagesCount\": ");

			sb.append(descendantSitePagesCount);
		}

		String externalReferenceCode = getExternalReferenceCode();

		if (externalReferenceCode != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"externalReferenceCode\": ");

			sb.append("\"");

			sb.append(_escape(externalReferenceCode));

			sb.append("\"");
		}

		Boolean hasChildSitePages = getHasChildSitePages();

		if (hasChildSitePages != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"hasChildSitePages\": ");

			sb.append(hasChildSitePages);
		}

		String name = getName();

		if (name != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"name\": ");

			sb.append("\"");

			sb.append(_escape(name));

			sb.append("\"");
		}

		String parentSitePageExternalReferenceCode =
			getParentSitePageExternalReferenceCode();

		if (parentSitePageExternalReferenceCode != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"parentSitePageExternalReferenceCode\": ");

			sb.append("\"");

			sb.append(_escape(parentSitePageExternalReferenceCode));

			sb.append("\"");
		}

		Type type = getType();

		if (type != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"type\": ");

			sb.append("\"");
			sb.append(type);
			sb.append("\"");
		}

		sb.append("}");

		return sb.toString();
	}

	@io.swagger.v3.oas.annotations.media.Schema(
		accessMode = io.swagger.v3.oas.annotations.media.Schema.AccessMode.READ_ONLY,
		defaultValue = "com.liferay.headless.admin.site.dto.v1_0.SitePageTreeNode",
		name = "x-class-name"
	)
	public String xClassName;

	@GraphQLName("Type")
	public static enum Type {

		CONTENT_PAGE("ContentPage"), EMBEDDED_PAGE("EmbeddedPage"),
		LINK_TO_PAGE_PAGE("LinkToPagePage"), LINK_TO_URL_PAGE("LinkToURLPage"),
		PAGE_SET_PAGE("PageSetPage"), WIDGET_PAGE("WidgetPage");

		@JsonCreator
		public static Type create(String value) {
			if ((value == null) || value.equals("")) {
				return null;
			}

			for (Type type : values()) {
				if (Objects.equals(type.getValue(), value)) {
					return type;
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

		private Type(String value) {
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
// LIFERAY-REST-BUILDER-HASH:1732526694