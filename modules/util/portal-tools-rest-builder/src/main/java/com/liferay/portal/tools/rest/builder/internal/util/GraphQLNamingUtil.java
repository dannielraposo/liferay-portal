/**
 * SPDX-FileCopyrightText: (c) 2025 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.portal.tools.rest.builder.internal.util;

import com.liferay.portal.kernel.util.StringUtil;
import com.liferay.portal.tools.rest.builder.internal.freemarker.tool.java.JavaMethodSignature;

import java.util.List;

/**
 * @author Javier Gamarra
 * @see    com.liferay.portal.tools.rest.builder.internal.util.GraphQLNamingUtil
 */
public class GraphQLNamingUtil {

	public static String getGraphQLMutationName(String methodName) {
		methodName = methodName.replaceFirst("post", "create");

		return methodName.replaceFirst("put", "update");
	}

	public static String getGraphQLPropertyName(
		JavaMethodSignature javaMethodSignature, List<String> methodNames) {

		String methodName = javaMethodSignature.getMethodName();
		String parentSchemaName = javaMethodSignature.getParentSchemaName();
		String returnType = javaMethodSignature.getReturnType();

		if (!methodName.endsWith("SitesPage") &&
			!methodNames.contains(methodName.replaceFirst("Site", "")) &&
			StringUtil.equals(parentSchemaName, "Site")) {

			methodName = methodName.replaceFirst("Site", "");
		}

		if (!methodName.endsWith("AssetLibrariesPage") &&
			!methodNames.contains(
				methodName.replaceFirst("AssetLibrary", "")) &&
			!methodNames.contains(
				methodName.replaceFirst("AssetLibrary", "Site")) &&
			StringUtil.equals(parentSchemaName, "AssetLibrary")) {

			methodName = methodName.replaceFirst("AssetLibrary", "");
		}

		methodName = methodName.replaceFirst("get", "");

		if ((returnType.contains("Collection<") ||
			 (returnType.contains("Page<") &&
			  (methodName.lastIndexOf("Page") != -1))) &&
			methodName.contains("Page")) {

			methodName = methodName.substring(
				0, methodName.lastIndexOf("Page"));
		}

		return StringUtil.lowerCaseFirstLetter(methodName);
	}

}