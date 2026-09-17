/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.exportimport.rest.dto.v1_0;

import com.fasterxml.jackson.annotation.JsonFilter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import com.liferay.petra.function.UnsafeSupplier;
import com.liferay.petra.string.StringBundler;
import com.liferay.portal.kernel.json.JSONFactoryUtil;
import com.liferay.portal.kernel.util.StringUtil;
import com.liferay.portal.vulcan.graphql.annotation.GraphQLField;
import com.liferay.portal.vulcan.graphql.annotation.GraphQLName;
import com.liferay.portal.vulcan.util.ObjectMapperUtil;

import jakarta.annotation.Generated;

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
	description = "The remote live connection a publish process targets.",
	value = "RemoteConnection"
)
@io.swagger.v3.oas.annotations.media.Schema(
	description = "The remote live connection a publish process targets."
)
@JsonFilter("Liferay.Vulcan")
@XmlRootElement(name = "RemoteConnection")
public class RemoteConnection implements Serializable {

	public static RemoteConnection toDTO(String json) {
		return ObjectMapperUtil.readValue(RemoteConnection.class, json);
	}

	public static RemoteConnection unsafeToDTO(String json) {
		return ObjectMapperUtil.unsafeReadValue(RemoteConnection.class, json);
	}

	@io.swagger.v3.oas.annotations.media.Schema(
		description = "The remote live host or IP."
	)
	public String getRemoteAddress() {
		if (_remoteAddressSupplier != null) {
			remoteAddress = _remoteAddressSupplier.get();

			_remoteAddressSupplier = null;
		}

		return remoteAddress;
	}

	public void setRemoteAddress(String remoteAddress) {
		this.remoteAddress = remoteAddress;

		_remoteAddressSupplier = null;
	}

	@JsonIgnore
	public void setRemoteAddress(
		UnsafeSupplier<String, Exception> remoteAddressUnsafeSupplier) {

		_remoteAddressSupplier = () -> {
			try {
				return remoteAddressUnsafeSupplier.get();
			}
			catch (RuntimeException runtimeException) {
				throw runtimeException;
			}
			catch (Exception exception) {
				throw new RuntimeException(exception);
			}
		};
	}

	@GraphQLField(description = "The remote live host or IP.")
	@JsonProperty(access = JsonProperty.Access.READ_WRITE)
	protected String remoteAddress;

	@JsonIgnore
	private Supplier<String> _remoteAddressSupplier;

	@io.swagger.v3.oas.annotations.media.Schema(
		description = "The remote live path context."
	)
	public String getRemotePathContext() {
		if (_remotePathContextSupplier != null) {
			remotePathContext = _remotePathContextSupplier.get();

			_remotePathContextSupplier = null;
		}

		return remotePathContext;
	}

	public void setRemotePathContext(String remotePathContext) {
		this.remotePathContext = remotePathContext;

		_remotePathContextSupplier = null;
	}

	@JsonIgnore
	public void setRemotePathContext(
		UnsafeSupplier<String, Exception> remotePathContextUnsafeSupplier) {

		_remotePathContextSupplier = () -> {
			try {
				return remotePathContextUnsafeSupplier.get();
			}
			catch (RuntimeException runtimeException) {
				throw runtimeException;
			}
			catch (Exception exception) {
				throw new RuntimeException(exception);
			}
		};
	}

	@GraphQLField(description = "The remote live path context.")
	@JsonProperty(access = JsonProperty.Access.READ_WRITE)
	protected String remotePathContext;

	@JsonIgnore
	private Supplier<String> _remotePathContextSupplier;

	@io.swagger.v3.oas.annotations.media.Schema(
		description = "The remote live port."
	)
	public Integer getRemotePort() {
		if (_remotePortSupplier != null) {
			remotePort = _remotePortSupplier.get();

			_remotePortSupplier = null;
		}

		return remotePort;
	}

	public void setRemotePort(Integer remotePort) {
		this.remotePort = remotePort;

		_remotePortSupplier = null;
	}

	@JsonIgnore
	public void setRemotePort(
		UnsafeSupplier<Integer, Exception> remotePortUnsafeSupplier) {

		_remotePortSupplier = () -> {
			try {
				return remotePortUnsafeSupplier.get();
			}
			catch (RuntimeException runtimeException) {
				throw runtimeException;
			}
			catch (Exception exception) {
				throw new RuntimeException(exception);
			}
		};
	}

	@GraphQLField(description = "The remote live port.")
	@JsonProperty(access = JsonProperty.Access.READ_WRITE)
	protected Integer remotePort;

	@JsonIgnore
	private Supplier<Integer> _remotePortSupplier;

	@io.swagger.v3.oas.annotations.media.Schema(
		description = "The remote live site ID."
	)
	public Long getRemoteSiteId() {
		if (_remoteSiteIdSupplier != null) {
			remoteSiteId = _remoteSiteIdSupplier.get();

			_remoteSiteIdSupplier = null;
		}

		return remoteSiteId;
	}

	public void setRemoteSiteId(Long remoteSiteId) {
		this.remoteSiteId = remoteSiteId;

		_remoteSiteIdSupplier = null;
	}

	@JsonIgnore
	public void setRemoteSiteId(
		UnsafeSupplier<Long, Exception> remoteSiteIdUnsafeSupplier) {

		_remoteSiteIdSupplier = () -> {
			try {
				return remoteSiteIdUnsafeSupplier.get();
			}
			catch (RuntimeException runtimeException) {
				throw runtimeException;
			}
			catch (Exception exception) {
				throw new RuntimeException(exception);
			}
		};
	}

	@GraphQLField(description = "The remote live site ID.")
	@JsonProperty(access = JsonProperty.Access.READ_WRITE)
	protected Long remoteSiteId;

	@JsonIgnore
	private Supplier<Long> _remoteSiteIdSupplier;

	@io.swagger.v3.oas.annotations.media.Schema(
		description = "Whether to connect to the remote live over a secure network connection."
	)
	public Boolean getSecureConnection() {
		if (_secureConnectionSupplier != null) {
			secureConnection = _secureConnectionSupplier.get();

			_secureConnectionSupplier = null;
		}

		return secureConnection;
	}

	public void setSecureConnection(Boolean secureConnection) {
		this.secureConnection = secureConnection;

		_secureConnectionSupplier = null;
	}

	@JsonIgnore
	public void setSecureConnection(
		UnsafeSupplier<Boolean, Exception> secureConnectionUnsafeSupplier) {

		_secureConnectionSupplier = () -> {
			try {
				return secureConnectionUnsafeSupplier.get();
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
		description = "Whether to connect to the remote live over a secure network connection."
	)
	@JsonProperty(access = JsonProperty.Access.READ_WRITE)
	protected Boolean secureConnection;

	@JsonIgnore
	private Supplier<Boolean> _secureConnectionSupplier;

	@Override
	public boolean equals(Object object) {
		if (this == object) {
			return true;
		}

		if (!(object instanceof RemoteConnection)) {
			return false;
		}

		RemoteConnection remoteConnection = (RemoteConnection)object;

		return Objects.equals(toString(), remoteConnection.toString());
	}

	@Override
	public int hashCode() {
		String string = toString();

		return string.hashCode();
	}

	public String toString() {
		StringBundler sb = new StringBundler();

		sb.append("{");

		String remoteAddress = getRemoteAddress();

		if (remoteAddress != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"remoteAddress\": ");

			sb.append("\"");

			sb.append(_escape(remoteAddress));

			sb.append("\"");
		}

		String remotePathContext = getRemotePathContext();

		if (remotePathContext != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"remotePathContext\": ");

			sb.append("\"");

			sb.append(_escape(remotePathContext));

			sb.append("\"");
		}

		Integer remotePort = getRemotePort();

		if (remotePort != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"remotePort\": ");

			sb.append(remotePort);
		}

		Long remoteSiteId = getRemoteSiteId();

		if (remoteSiteId != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"remoteSiteId\": ");

			sb.append(remoteSiteId);
		}

		Boolean secureConnection = getSecureConnection();

		if (secureConnection != null) {
			if (sb.length() > 1) {
				sb.append(", ");
			}

			sb.append("\"secureConnection\": ");

			sb.append(secureConnection);
		}

		sb.append("}");

		return sb.toString();
	}

	@io.swagger.v3.oas.annotations.media.Schema(
		accessMode = io.swagger.v3.oas.annotations.media.Schema.AccessMode.READ_ONLY,
		defaultValue = "com.liferay.exportimport.rest.dto.v1_0.RemoteConnection",
		name = "x-class-name"
	)
	public String xClassName;

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
// LIFERAY-REST-BUILDER-HASH:-2073949830