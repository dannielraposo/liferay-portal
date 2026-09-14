/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.headless.admin.site.client.dto.v1_0;

import com.liferay.headless.admin.site.client.function.UnsafeSupplier;
import com.liferay.headless.admin.site.client.serdes.v1_0.SitePageTreeNodeSerDes;

import jakarta.annotation.Generated;

import java.io.Serializable;

import java.util.Objects;

/**
 * @author Rubén Pulido
 * @generated
 */
@Generated("")
public class SitePageTreeNode implements Cloneable, Serializable {

	public static SitePageTreeNode toDTO(String json) {
		return SitePageTreeNodeSerDes.toDTO(json);
	}

	public SitePageTreeNode[] getAncestorSitePageTreeNodes() {
		return ancestorSitePageTreeNodes;
	}

	public void setAncestorSitePageTreeNodes(
		SitePageTreeNode[] ancestorSitePageTreeNodes) {

		this.ancestorSitePageTreeNodes = ancestorSitePageTreeNodes;
	}

	public void setAncestorSitePageTreeNodes(
		UnsafeSupplier<SitePageTreeNode[], Exception>
			ancestorSitePageTreeNodesUnsafeSupplier) {

		try {
			ancestorSitePageTreeNodes =
				ancestorSitePageTreeNodesUnsafeSupplier.get();
		}
		catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	protected SitePageTreeNode[] ancestorSitePageTreeNodes;

	public Integer getDescendantSitePagesCount() {
		return descendantSitePagesCount;
	}

	public void setDescendantSitePagesCount(Integer descendantSitePagesCount) {
		this.descendantSitePagesCount = descendantSitePagesCount;
	}

	public void setDescendantSitePagesCount(
		UnsafeSupplier<Integer, Exception>
			descendantSitePagesCountUnsafeSupplier) {

		try {
			descendantSitePagesCount =
				descendantSitePagesCountUnsafeSupplier.get();
		}
		catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	protected Integer descendantSitePagesCount;

	public String getExternalReferenceCode() {
		return externalReferenceCode;
	}

	public void setExternalReferenceCode(String externalReferenceCode) {
		this.externalReferenceCode = externalReferenceCode;
	}

	public void setExternalReferenceCode(
		UnsafeSupplier<String, Exception> externalReferenceCodeUnsafeSupplier) {

		try {
			externalReferenceCode = externalReferenceCodeUnsafeSupplier.get();
		}
		catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	protected String externalReferenceCode;

	public Boolean getHasChildSitePages() {
		return hasChildSitePages;
	}

	public void setHasChildSitePages(Boolean hasChildSitePages) {
		this.hasChildSitePages = hasChildSitePages;
	}

	public void setHasChildSitePages(
		UnsafeSupplier<Boolean, Exception> hasChildSitePagesUnsafeSupplier) {

		try {
			hasChildSitePages = hasChildSitePagesUnsafeSupplier.get();
		}
		catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	protected Boolean hasChildSitePages;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setName(UnsafeSupplier<String, Exception> nameUnsafeSupplier) {
		try {
			name = nameUnsafeSupplier.get();
		}
		catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	protected String name;

	public String getParentSitePageExternalReferenceCode() {
		return parentSitePageExternalReferenceCode;
	}

	public void setParentSitePageExternalReferenceCode(
		String parentSitePageExternalReferenceCode) {

		this.parentSitePageExternalReferenceCode =
			parentSitePageExternalReferenceCode;
	}

	public void setParentSitePageExternalReferenceCode(
		UnsafeSupplier<String, Exception>
			parentSitePageExternalReferenceCodeUnsafeSupplier) {

		try {
			parentSitePageExternalReferenceCode =
				parentSitePageExternalReferenceCodeUnsafeSupplier.get();
		}
		catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	protected String parentSitePageExternalReferenceCode;

	public Type getType() {
		return type;
	}

	public String getTypeAsString() {
		if (type == null) {
			return null;
		}

		return type.toString();
	}

	public void setType(Type type) {
		this.type = type;
	}

	public void setType(UnsafeSupplier<Type, Exception> typeUnsafeSupplier) {
		try {
			type = typeUnsafeSupplier.get();
		}
		catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	protected Type type;

	@Override
	public SitePageTreeNode clone() throws CloneNotSupportedException {
		return (SitePageTreeNode)super.clone();
	}

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
		return SitePageTreeNodeSerDes.toJSON(this);
	}

	public static enum Type {

		CONTENT_PAGE("ContentPage"), EMBEDDED_PAGE("EmbeddedPage"),
		LINK_TO_PAGE_PAGE("LinkToPagePage"), LINK_TO_URL_PAGE("LinkToURLPage"),
		PAGE_SET_PAGE("PageSetPage"), WIDGET_PAGE("WidgetPage");

		public static Type create(String value) {
			for (Type type : values()) {
				if (Objects.equals(type.getValue(), value) ||
					Objects.equals(type.name(), value)) {

					return type;
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

		private Type(String value) {
			_value = value;
		}

		private final String _value;

	}

}
// LIFERAY-REST-BUILDER-HASH:1098036910