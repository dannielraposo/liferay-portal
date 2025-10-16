/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.batch.engine.internal.strategy;

import com.liferay.batch.engine.BatchEngineTaskItemDelegate;
import com.liferay.batch.engine.action.ImportTaskPostAction;
import com.liferay.batch.engine.action.ImportTaskPreAction;
import com.liferay.batch.engine.context.ImportTaskContext;
import com.liferay.batch.engine.exception.handler.BatchEngineImportTaskExceptionHandler;
import com.liferay.batch.engine.internal.util.ErrorMessageUtil;
import com.liferay.batch.engine.internal.util.ItemIndexThreadLocal;
import com.liferay.batch.engine.model.BatchEngineImportTask;
import com.liferay.batch.engine.service.BatchEngineImportTaskErrorLocalServiceUtil;
import com.liferay.batch.engine.strategy.BatchEngineImportStrategy;
import com.liferay.petra.function.UnsafeFunction;
import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.transaction.Propagation;
import com.liferay.portal.kernel.transaction.TransactionConfig;
import com.liferay.portal.kernel.transaction.TransactionInvokerUtil;

import java.util.Collection;
import java.util.List;

/**
 * @author Matija Petanjek
 * @author Brian Wing Shun Chan
 */
public abstract class BaseBatchEngineImportStrategy
	implements BatchEngineImportStrategy {

	public BaseBatchEngineImportStrategy(
		BatchEngineImportTask batchEngineImportTask,
		List<BatchEngineImportTaskExceptionHandler>
			batchEngineImportTaskExceptionHandlers,
		List<ImportTaskPostAction> importTaskPostActions,
		List<ImportTaskPreAction> importTaskPreActions) {

		this.batchEngineImportTask = batchEngineImportTask;
		this.batchEngineImportTaskExceptionHandlers =
			batchEngineImportTaskExceptionHandlers;
		this.importTaskPostActions = importTaskPostActions;
		this.importTaskPreActions = importTaskPreActions;
	}

	@Override
	public <T> void apply(
			BatchEngineTaskItemDelegate<T> batchEngineTaskItemDelegate,
			Collection<T> collection,
			UnsafeFunction<T, T, Exception> unsafeFunction)
		throws Exception {

		for (T item : collection) {
			try {
				ImportTaskContext importTaskContext = new ImportTaskContext();

				for (ImportTaskPreAction importTaskPreAction :
						importTaskPreActions) {

					importTaskPreAction.run(
						batchEngineImportTask, batchEngineTaskItemDelegate,
						importTaskContext, item);
				}

				T persistedItem = unsafeFunction.apply(item);

				if (persistedItem == null) {
					continue;
				}

				for (ImportTaskPostAction importTaskPostAction :
						importTaskPostActions) {

					importTaskPostAction.run(
						batchEngineImportTask, batchEngineTaskItemDelegate,
						importTaskContext, item, persistedItem);
				}
			}
			catch (Exception exception) {
				_log.error(exception);

				addBatchEngineImportTaskError(
					batchEngineImportTask, batchEngineTaskItemDelegate, item,
					ItemIndexThreadLocal.get(), exception);

				handleException(exception);
			}
			finally {
				ItemIndexThreadLocal.remove();
			}
		}
	}

	protected <T> void addBatchEngineImportTaskError(
		BatchEngineImportTask batchEngineImportTask,
		BatchEngineTaskItemDelegate<T> batchEngineTaskItemDelegate, T item,
		int itemIndex, Exception exception) {

		try {
			TransactionInvokerUtil.invoke(
				_transactionConfig,
				() -> {
					BatchEngineImportTaskErrorLocalServiceUtil.
						addBatchEngineImportTaskError(
							batchEngineImportTask.getCompanyId(),
							batchEngineImportTask.getUserId(),
							batchEngineImportTask.getBatchEngineImportTaskId(),
							item.toString(), itemIndex,
							ErrorMessageUtil.getErrorMessage(
								exception, batchEngineImportTask.getUserId()));

					batchEngineImportTaskExceptionHandlers.forEach(
						batchEngineImportTaskExceptionHandler ->
							batchEngineImportTaskExceptionHandler.handle(
								batchEngineImportTask,
								batchEngineTaskItemDelegate, exception, item));

					return null;
				});
		}
		catch (Throwable throwable) {
			throw new RuntimeException(throwable);
		}
	}

	protected abstract void handleException(Exception exception)
		throws Exception;

	protected final BatchEngineImportTask batchEngineImportTask;
	protected final List<BatchEngineImportTaskExceptionHandler>
		batchEngineImportTaskExceptionHandlers;
	protected final List<ImportTaskPostAction> importTaskPostActions;
	protected final List<ImportTaskPreAction> importTaskPreActions;

	private static final Log _log = LogFactoryUtil.getLog(
		BaseBatchEngineImportStrategy.class);

	private static final TransactionConfig _transactionConfig =
		TransactionConfig.Factory.create(
			Propagation.REQUIRES_NEW, new Class<?>[] {Exception.class});

}