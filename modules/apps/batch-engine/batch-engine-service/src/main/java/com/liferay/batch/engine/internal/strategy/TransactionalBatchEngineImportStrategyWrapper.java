/**
 * SPDX-FileCopyrightText: (c) 2025 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.batch.engine.internal.strategy;

import com.liferay.batch.engine.BatchEngineTaskItemDelegate;
import com.liferay.batch.engine.strategy.BatchEngineImportStrategy;
import com.liferay.petra.function.UnsafeFunction;
import com.liferay.portal.kernel.transaction.Propagation;
import com.liferay.portal.kernel.transaction.TransactionConfig;
import com.liferay.portal.kernel.transaction.TransactionInvokerUtil;

import java.util.Collection;
import java.util.Collections;

/**
 * @author Daniel Raposo
 */
public class TransactionalBatchEngineImportStrategyWrapper
	implements BatchEngineImportStrategy {

	public TransactionalBatchEngineImportStrategyWrapper(
		BaseBatchEngineImportStrategy batchEngineImportStrategy) {

		_batchEngineImportStrategy = batchEngineImportStrategy;
	}

	@Override
	public <T> void apply(
			BatchEngineTaskItemDelegate<T> batchEngineTaskItemDelegate,
			Collection<T> collection,
			UnsafeFunction<T, T, Exception> unsafeFunction)
		throws Exception {

		for (T item : collection) {
			try {
				TransactionInvokerUtil.invoke(
					_transactionConfig,
					() -> {
						_batchEngineImportStrategy.apply(
							batchEngineTaskItemDelegate,
							Collections.singletonList(item), unsafeFunction);

						return null;
					});
			}
			catch (Throwable throwable) {
				throw new Exception(throwable.getMessage(), throwable);
			}
		}
	}

	private static final TransactionConfig _transactionConfig =
		TransactionConfig.Factory.create(
			Propagation.REQUIRES_NEW, new Class<?>[] {Exception.class});

	private final BaseBatchEngineImportStrategy _batchEngineImportStrategy;

}