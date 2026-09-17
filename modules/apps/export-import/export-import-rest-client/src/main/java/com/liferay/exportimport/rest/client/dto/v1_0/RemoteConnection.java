/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.exportimport.rest.client.dto.v1_0;

import com.liferay.exportimport.rest.client.function.UnsafeSupplier;
import com.liferay.exportimport.rest.client.serdes.v1_0.RemoteConnectionSerDes;

import jakarta.annotation.Generated;

import java.io.Serializable;

import java.util.Objects;

/**
 * @author Petteri Karttunen
 * @generated
 */
@Generated("")
public class RemoteConnection implements Cloneable, Serializable {

	public static RemoteConnection toDTO(String json) {
		return RemoteConnectionSerDes.toDTO(json);
	}

	public String getRemoteAddress() {
		return remoteAddress;
	}

	public void setRemoteAddress(String remoteAddress) {
		this.remoteAddress = remoteAddress;
	}

	public void setRemoteAddress(
		UnsafeSupplier<String, Exception> remoteAddressUnsafeSupplier) {

		try {
			remoteAddress = remoteAddressUnsafeSupplier.get();
		}
		catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	protected String remoteAddress;

	public String getRemotePathContext() {
		return remotePathContext;
	}

	public void setRemotePathContext(String remotePathContext) {
		this.remotePathContext = remotePathContext;
	}

	public void setRemotePathContext(
		UnsafeSupplier<String, Exception> remotePathContextUnsafeSupplier) {

		try {
			remotePathContext = remotePathContextUnsafeSupplier.get();
		}
		catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	protected String remotePathContext;

	public Integer getRemotePort() {
		return remotePort;
	}

	public void setRemotePort(Integer remotePort) {
		this.remotePort = remotePort;
	}

	public void setRemotePort(
		UnsafeSupplier<Integer, Exception> remotePortUnsafeSupplier) {

		try {
			remotePort = remotePortUnsafeSupplier.get();
		}
		catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	protected Integer remotePort;

	public Long getRemoteSiteId() {
		return remoteSiteId;
	}

	public void setRemoteSiteId(Long remoteSiteId) {
		this.remoteSiteId = remoteSiteId;
	}

	public void setRemoteSiteId(
		UnsafeSupplier<Long, Exception> remoteSiteIdUnsafeSupplier) {

		try {
			remoteSiteId = remoteSiteIdUnsafeSupplier.get();
		}
		catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	protected Long remoteSiteId;

	public Boolean getSecureConnection() {
		return secureConnection;
	}

	public void setSecureConnection(Boolean secureConnection) {
		this.secureConnection = secureConnection;
	}

	public void setSecureConnection(
		UnsafeSupplier<Boolean, Exception> secureConnectionUnsafeSupplier) {

		try {
			secureConnection = secureConnectionUnsafeSupplier.get();
		}
		catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	protected Boolean secureConnection;

	@Override
	public RemoteConnection clone() throws CloneNotSupportedException {
		return (RemoteConnection)super.clone();
	}

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
		return RemoteConnectionSerDes.toJSON(this);
	}

}
// LIFERAY-REST-BUILDER-HASH:-2136876629