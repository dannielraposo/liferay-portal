/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.mcp.server.rest.internal.feature.flag;

import com.liferay.mcp.server.rest.internal.util.ToolSetUtil;
import com.liferay.portal.kernel.feature.flag.FeatureFlagListener;

import org.osgi.service.component.annotations.Component;

/**
 * @author Alejandro Tardín
 */
@Component(property = "feature.flag.key=*", service = FeatureFlagListener.class)
public class MCPServerFeatureFlagListener implements FeatureFlagListener {

	@Override
	public void onValue(
		long companyId, String featureFlagKey, boolean enabled) {

		ToolSetUtil.clearOpenAPIJSONObjectCache(companyId);
	}

}