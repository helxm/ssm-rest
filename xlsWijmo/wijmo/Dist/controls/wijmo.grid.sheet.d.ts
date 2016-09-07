/*
    *
    * Wijmo Library 5.20162.188
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the Wijmo Commercial License.
    * sales@wijmo.com
    * http://wijmo.com/products/wijmo-5/license/
    *
    */
declare module wijmo.grid.sheet {
    class _CalcEngine {
        private _owner;
        private _expression;
        private _expressLength;
        private _pointer;
        private _expressionCache;
        private _tokenTable;
        private _token;
        private _idChars;
        private _functionTable;
        private _cacheSize;
        constructor(owner: FlexSheet);
        unknownFunction: Event;
        onUnknownFunction(funcName: string, params: Array<_Expression>): _Expression;
        evaluate(expression: string, format?: string, sheet?: Sheet, rowIndex?: number, columnIndex?: number): any;
        addCustomFunction(name: string, func: Function, minParamsCount?: number, maxParamsCount?: number): void;
        _clearExpressionCache(): void;
        private _parse(expression);
        private _buildSymbolTable();
        private _registerAggregateFunction();
        private _registerMathFunction();
        private _registerLogicalFunction();
        private _registerTextFunction();
        private _registerDateFunction();
        private _registLookUpReferenceFunction();
        private _registFinacialFunction();
        private _addToken(symbol, id, type);
        private _parseExpression();
        private _parseCompareOrConcat();
        private _parseAddSub();
        private _parseMulDiv();
        private _parsePower();
        private _parseUnary();
        private _parseAtom();
        private _getToken();
        private _parseDigit();
        private _parseString();
        private _parseDate();
        private _parseSheetRef();
        private _getCellRange(identifier);
        private _parseCellRange(cell);
        private _parseCell(cell);
        private _getParameters();
        private _getAggregateResult(aggType, params, sheet?);
        private _getFlexSheetAggregateResult(aggType, params, sheet?);
        private _getItemList(params, sheet?, needParseToNum?, isGetEmptyValue?, isGetHiddenValue?, columnIndex?);
        private _countBlankCells(items);
        private _countNumberCells(items);
        private _getRankOfCellRange(num, items, order?);
        private _handleCountIfs(params, sheet?);
        private _countCellsByCriterias(itemsList, criterias, sheet?, countItems?);
        private _handleSumIfs(params, sheet?);
        private _sumCellsByCriterias(itemsList, criterias, sumItems?, sheet?);
        private _getProductOfNumbers(items);
        private _handleSubtotal(params, sheet);
        private _handleDCount(params, sheet);
        private _DCountWithCriterias(countItems, countRef, criteriaRef);
        private _getColumnIndexByField(cellExpr, field);
        private _getSheet(sheetRef);
        private _parseRightExpr(rightExpr);
        private _combineExpr(leftExpr, rightExpr);
        private _parseRegCriteria(criteria);
        private _calculateRate(params, sheet?);
        private _handleHLookup(params, sheet?);
        private _exactMatch(lookupValue, cells, sheet?, needHandleWildCard?);
        private _approximateMatch(lookupValue, cells, sheet?);
        private _checkCache(expression);
        private _ensureNonFunctionExpression(expr, sheet?);
    }
    class _Token {
        private _tokenType;
        private _tokenID;
        private _value;
        constructor(val: any, tkID: _TokenID, tkType: _TokenType);
        value: any;
        tokenID: _TokenID;
        tokenType: _TokenType;
    }
    class _FunctionDefinition {
        private _paramMax;
        private _paramMin;
        private _func;
        constructor(func: Function, paramMax?: number, paramMin?: number);
        paramMax: number;
        paramMin: number;
        func: Function;
    }
    enum _TokenType {
        COMPARE = 0,
        ADDSUB = 1,
        MULDIV = 2,
        POWER = 3,
        CONCAT = 4,
        GROUP = 5,
        LITERAL = 6,
        IDENTIFIER = 7,
    }
    enum _TokenID {
        GT = 0,
        LT = 1,
        GE = 2,
        LE = 3,
        EQ = 4,
        NE = 5,
        ADD = 6,
        SUB = 7,
        MUL = 8,
        DIV = 9,
        DIVINT = 10,
        MOD = 11,
        POWER = 12,
        CONCAT = 13,
        OPEN = 14,
        CLOSE = 15,
        END = 16,
        COMMA = 17,
        PERIOD = 18,
        ATOM = 19,
    }
}

declare module wijmo.grid.sheet {
    class _Expression {
        private _token;
        _evaluatedValue: any;
        constructor(arg?: any);
        token: _Token;
        evaluate(sheet?: Sheet, rowIndex?: number, columnIndex?: number): any;
        static toString(x: _Expression, sheet?: Sheet): string;
        static toNumber(x: _Expression, sheet?: Sheet): number;
        static toBoolean(x: _Expression, sheet?: Sheet): any;
        static toDate(x: _Expression, sheet?: Sheet): any;
        private static _toOADate(val);
        private static _fromOADate(oADate);
    }
    class _UnaryExpression extends _Expression {
        private _expr;
        constructor(arg: any, expr: _Expression);
        evaluate(sheet?: Sheet): any;
    }
    class _BinaryExpression extends _Expression {
        private _leftExpr;
        private _rightExpr;
        constructor(arg: any, leftExpr: _Expression, rightExpr: _Expression);
        evaluate(sheet?: Sheet): any;
    }
    class _CellRangeExpression extends _Expression {
        private _cells;
        private _sheetRef;
        private _flex;
        private _evalutingRange;
        constructor(cells: CellRange, sheetRef: string, flex: FlexSheet);
        evaluate(sheet?: Sheet): any;
        getValues(isGetHiddenValue?: boolean, columnIndex?: number, sheet?: Sheet): any[];
        cells: CellRange;
        sheetRef: string;
        private _getCellValue(cell, sheet?);
        private _getSheet();
    }
    class _FunctionExpression extends _Expression {
        private _funcDefinition;
        private _params;
        constructor(func: _FunctionDefinition, params: Array<_Expression>);
        evaluate(sheet?: Sheet, rowIndex?: number, columnIndex?: number): any;
    }
}

declare module wijmo.grid.sheet {
    class _UndoAction {
        _owner: FlexSheet;
        private _sheetIndex;
        constructor(owner: FlexSheet);
        sheetIndex: number;
        undo(): void;
        redo(): void;
        saveNewState(): boolean;
    }
    class _EditAction extends _UndoAction {
        private _selections;
        private _oldValues;
        private _newValues;
        private _isPaste;
        private _addingValue;
        constructor(owner: FlexSheet, selection?: CellRange);
        isPaste: boolean;
        undo(): void;
        redo(): void;
        saveNewState(): boolean;
        markIsPaste(): void;
        updateForPasting(rng: CellRange): void;
        private _checkActionState();
    }
    class _ColumnResizeAction extends _UndoAction {
        private _colIndex;
        private _panel;
        private _oldColWidth;
        private _newColWidth;
        constructor(owner: FlexSheet, panel: GridPanel, colIndex: number);
        undo(): void;
        redo(): void;
        saveNewState(): boolean;
    }
    class _RowResizeAction extends _UndoAction {
        private _rowIndex;
        private _panel;
        private _oldRowHeight;
        private _newRowHeight;
        constructor(owner: FlexSheet, panel: GridPanel, rowIndex: number);
        undo(): void;
        redo(): void;
        saveNewState(): boolean;
    }
    class _ColumnsChangedAction extends _UndoAction {
        private _oldValue;
        private _newValue;
        private _selection;
        _effecedFormulas: any;
        constructor(owner: FlexSheet);
        undo(): void;
        redo(): void;
        saveNewState(): boolean;
    }
    class _RowsChangedAction extends _UndoAction {
        private _oldValue;
        private _newValue;
        private _selection;
        _effecedFormulas: any;
        constructor(owner: FlexSheet);
        undo(): void;
        redo(): void;
        saveNewState(): boolean;
    }
    class _CellStyleAction extends _UndoAction {
        private _oldStyledCells;
        private _newStyledCells;
        constructor(owner: FlexSheet, styledCells?: any);
        undo(): void;
        redo(): void;
        saveNewState(): boolean;
    }
    class _CellMergeAction extends _UndoAction {
        private _oldMergedCells;
        private _newMergedCells;
        constructor(owner: FlexSheet);
        undo(): void;
        redo(): void;
        saveNewState(): boolean;
    }
    class _SortColumnAction extends _UndoAction {
        private _oldValue;
        private _newValue;
        constructor(owner: FlexSheet);
        undo(): void;
        redo(): void;
        saveNewState(): boolean;
    }
    class _MoveCellsAction extends _UndoAction {
        private _draggingCells;
        private _draggingColumnSetting;
        private _oldDroppingCells;
        private _newDroppingCells;
        private _oldDroppingColumnSetting;
        private _newDroppingColumnSetting;
        private _dropRange;
        private _isCopyCells;
        private _isDraggingColumns;
        constructor(owner: FlexSheet, draggingCells: CellRange, droppingCells: CellRange, isCopyCells: boolean);
        undo(): void;
        redo(): void;
        saveNewState(): boolean;
    }
}

declare module wijmo.grid.sheet {
    class _ContextMenu extends wijmo.Control {
        private _owner;
        private _insRows;
        private _delRows;
        private _insCols;
        private _delCols;
        static controlTemplate: string;
        constructor(element: any, owner: FlexSheet);
        show(e: MouseEvent, point?: wijmo.Point): void;
        hide(): void;
        private _init();
    }
}

declare module wijmo.grid.sheet {
    class _TabHolder extends wijmo.Control {
        private _owner;
        private _sheetControl;
        private _divSheet;
        private _divSplitter;
        private _divRight;
        private _funSplitterMousedown;
        private _splitterMousedownHdl;
        private _startPos;
        static controlTemplate: string;
        constructor(element: any, owner: FlexSheet);
        sheetControl: _SheetTabs;
        visible: boolean;
        getSheetBlanketSize(): number;
        adjustSize(): void;
        private _init();
        private _splitterMousedownHandler(e);
        private _splitterMousemoveHandler(e);
        private _splitterMouseupHandler(e);
        private _adjustDis(dis);
    }
}

declare module wijmo.grid.sheet {
    class _FlexSheetCellFactory extends CellFactory {
        updateCell(panel: wijmo.grid.GridPanel, r: number, c: number, cell: HTMLElement, rng?: wijmo.grid.CellRange): void;
        private _resetCellStyle(column, cell);
    }
}

/**
* Defines the @see:FlexSheet control and associated classes.
*
* The @see:FlexSheet control extends the @see:FlexGrid control to provide Excel-like
* features.
*/
declare module wijmo.grid.sheet {
    /**
     * Defines the @see:FlexSheet control.
     *
     * The @see:FlexSheet control extends the @see:FlexGrid control to provide Excel-like
     * features such as a calculation engine, multiple sheets, undo/redo, and
     * XLSX import/export.
     */
    class FlexSheet extends FlexGrid {
        private _sheets;
        private _selectedSheetIndex;
        private _tabHolder;
        private _contextMenu;
        private _divContainer;
        private _columnHeaderClicked;
        private _htDown;
        _filter: filter.FlexSheetFilter;
        private _calcEngine;
        private _functionListHost;
        private _functionList;
        private _functionTarget;
        private _undoStack;
        private _longClickTimer;
        private _cloneStyle;
        private _sortManager;
        private _dragable;
        private _isDragging;
        private _draggingColumn;
        private _draggingRow;
        private _draggingMarker;
        private _draggingTooltip;
        private _draggingCells;
        private _dropRange;
        private _wholeColumnsSelected;
        private _addingSheet;
        private _mouseMoveHdl;
        private _clickHdl;
        private _touchStartHdl;
        private _touchEndHdl;
        private _toRefresh;
        private _copiedRange;
        _enableMulSel: boolean;
        _isClicking: boolean;
        _isCopyingOrUndoing: boolean;
        _reservedContent: any;
        /**
         * Overrides the template used to instantiate @see:FlexSheet control.
         */
        static controlTemplate: string;
        /**
         * Initializes a new instance of the @see:FlexSheet class.
         *
         * @param element The DOM element that will host the control, or a jQuery selector (e.g. '#theCtrl').
         * @param options JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets the collection of @see:Sheet objects representing workbook sheets.
         */
        sheets: SheetCollection;
        /**
         * Gets or sets the index of the current sheet in the @see:FlexSheet.
         */
        selectedSheetIndex: number;
        /**
         * Gets the current @see:Sheet in the <b>FlexSheet</b>.
         */
        selectedSheet: Sheet;
        /**
         * Gets a value indicating whether the function list is opened.
         */
        isFunctionListOpen: boolean;
        /**
         * Gets or sets a value indicating whether the @see:TabHolder is visible.
         */
        isTabHolderVisible: boolean;
        /**
         * Gets the @see:UndoStack instance that controls undo and redo operations of the <b>FlexSheet</b>.
         */
        undoStack: UndoStack;
        /**
         * Gets the @see:SortManager instance that controls <b>FlexSheet</b> sorting.
         */
        sortManager: SortManager;
        /**
         * Occurs when current sheet index changed.
         */
        selectedSheetChanged: Event;
        /**
         * Raises the currentSheetChanged event.
         *
         * @param e @see:PropertyChangedEventArgs that contains the event data.
         */
        onSelectedSheetChanged(e: PropertyChangedEventArgs): void;
        /**
         * Occurs when dragging the rows or the columns of the <b>FlexSheet</b>.
         */
        draggingRowColumn: Event;
        /**
         * Raises the draggingRowColumn event.
         */
        onDraggingRowColumn(e: DraggingRowColumnEventArgs): void;
        /**
         * Occurs when dropping the rows or the columns of the <b>FlexSheet</b>.
         */
        droppingRowColumn: Event;
        /**
         * Raises the droppingRowColumn event.
         */
        onDroppingRowColumn(): void;
        /**
         * Occurs after the @see:FlexSheet loads the @see:Workbook instance
         */
        loaded: Event;
        /**
         * Raises the loaded event.
         */
        onLoaded(): void;
        /**
         * Occurs when the @see:FlexSheet meets the unknown formula.
         */
        unknownFunction: Event;
        /**
         * Raises the unknownFunction event.
         */
        onUnknownFunction(e: UnknownFunctionEventArgs): void;
        /**
         * Occurs when the @see:FlexSheet is cleared.
         */
        sheetCleared: Event;
        /**
         * Raises the sheetCleared event.
         */
        onSheetCleared(): void;
        /**
         * Overrides to refresh the sheet and @see:TabHolder.
         *
         * @param fullUpdate Whether to update the control layout as well as the content.
         */
        refresh(fullUpdate?: boolean): void;
        /**
         * Overrides the setCellData function of the base class.
         *
         * @param r Index of the row that contains the cell.
         * @param c Index, name, or binding of the column that contains the cell.
         * @param value Value to store in the cell.
         * @param coerce Whether to change the value automatically to match the column's data type.
         * @return True if the value was stored successfully, false otherwise.
         */
        setCellData(r: number, c: any, value: any, coerce?: boolean): boolean;
        /**
         * Overrides the base class method to take into account the function list.
         */
        containsFocus(): boolean;
        /**
         * Add an unbound @see:Sheet to the <b>FlexSheet</b>.
         *
         * @param sheetName The name of the Sheet.
         * @param rows The row count of the Sheet.
         * @param cols The column count of the Sheet.
         * @param pos The position in the <b>sheets</b> collection.
         * @param grid The @see:FlexGrid instance associated with the @see:Sheet. If not specified then new @see:FlexGrid instance
         * will be created.
         */
        addUnboundSheet(sheetName?: string, rows?: number, cols?: number, pos?: number, grid?: FlexGrid): Sheet;
        /**
         * Add a bound @see:Sheet to the <b>FlexSheet</b>.
         *
         * @param sheetName The name of the @see:Sheet.
         * @param source The items source for the @see:Sheet.
         * @param pos The position in the <b>sheets</b> collection.
         * @param grid The @see:FlexGrid instance associated with the @see:Sheet. If not specified then new @see:FlexGrid instance
         * will be created.
         */
        addBoundSheet(sheetName: string, source: any, pos?: number, grid?: FlexGrid): Sheet;
        /**
         * Apply the style to a range of cells.
         *
         * @param cellStyle The @see:ICellStyle object to apply.
         * @param cells An array of @see:CellRange objects to apply the style to. If not specified then
         * style is applied to the currently selected cells.
         * @param isPreview Indicates whether the applied style is just for preview.
         */
        applyCellsStyle(cellStyle: ICellStyle, cells?: CellRange[], isPreview?: boolean): void;
        /**
         * Freeze or unfreeze the columns and rows of the <b>FlexSheet</b> control.
         */
        freezeAtCursor(): void;
        /**
         * Show the filter editor.
         */
        showColumnFilter(): void;
        /**
         * Clears the content of the <b>FlexSheet</b> control.
         */
        clear(): void;
        /**
         * Gets the @see:IFormatState object describing formatting of the selected cells.
         *
         * @return The @see:IFormatState object containing formatting properties.
         */
        getSelectionFormatState(): IFormatState;
        /**
         * Inserts rows in the current @see:Sheet of the <b>FlexSheet</b> control.
         *
         * @param index The position where new rows should be added. If not specified then rows will be added
         * before the first row of the current selection.
         * @param count The numbers of rows to add. If not specified then one row will be added.
         */
        insertRows(index?: number, count?: number): void;
        /**
         * Deletes rows from the current @see:Sheet of the <b>FlexSheet</b> control.
         *
         * @param index The starting index of the deleting rows. If not specified then rows will be deleted
         * starting from the first row of the current selection.
         * @param count The numbers of rows to delete. If not specified then one row will be deleted.
         */
        deleteRows(index?: number, count?: number): void;
        /**
         * Inserts columns in the current @see:Sheet of the <b>FlexSheet</b> control.
         *
         * @param index The position where new columns should be added. If not specified then columns will be added
         * before the left column of the current selection.
         * @param count The numbers of columns to add. If not specified then one column will be added.
         */
        insertColumns(index?: number, count?: number): void;
        /**
         * Deletes columns from the current @see:Sheet of the <b>FlexSheet</b> control.
         *
         * @param index The starting index of the deleting columns. If not specified then columns will be deleted
         * starting from the first column of the current selection.
         * @param count The numbers of columns to delete. If not specified then one column will be deleted.
         */
        deleteColumns(index?: number, count?: number): void;
        /**
         * Merges the selected @see:CellRange into one cell.
         *
         * @param cells The @see:CellRange to merge.
         */
        mergeRange(cells?: CellRange): void;
        /**
         * Gets a @see:CellRange that specifies the merged extent of a cell
         * in a @see:GridPanel.
         * This method overrides the getMergedRange method of its parent class FlexGrid
         *
         * @param panel @see:GridPanel that contains the range.
         * @param r Index of the row that contains the cell.
         * @param c Index of the column that contains the cell.
         * @param clip Whether to clip the merged range to the grid's current view range.
         * @return A @see:CellRange that specifies the merged range, or null if the cell is not merged.
         */
        getMergedRange(panel: GridPanel, r: number, c: number, clip?: boolean): CellRange;
        /**
         * Evaluates a formula.
         *
         * @see:FlexSheet formulas follow the Excel syntax, including a large subset of the
         * functions supported by Excel. A complete list of the functions supported by
         * @see:FlexSheet can be found here:
         * <a href="static/FlexSheetFunctions.html">FlexSheet Functions</a>.
         *
         * @param formula The formula to evaluate. The formula may start with an optional equals sign ('=').
         * @param format If specified, defines the .Net format that will be applied to the evaluated value.
         * @param sheet The @see:Sheet whose data will be used for evaluation.
         *              If not specified then the current sheet is used.
         */
        evaluate(formula: string, format?: string, sheet?: Sheet): any;
        /**
         * Gets the evaluated cell value.
         *
         * Unlike the <b>getCellData</b> method that returns a raw data that can be a value or a formula, the <b>getCellValue</b>
         * method always returns an evaluated value, that is if the cell contains a formula then it will be evaluated first and the
         * resulting value will be returned.
         *
         * @param rowIndex The row index of the cell.
         * @param colIndex The column index of the cell.
         * @param formatted Indicates whether to return an original or a formatted value of the cell.
         * @param sheet The @see:Sheet whose value to evaluate. If not specified then the data from current sheet
         * is used.
         */
        getCellValue(rowIndex: number, colIndex: number, formatted?: boolean, sheet?: Sheet): any;
        /**
         * Open the function list.
         *
         * @param target The DOM element that toggle the function list.
         */
        showFunctionList(target: HTMLElement): void;
        /**
         * Close the function list.
         */
        hideFunctionList(): void;
        /**
         * Select previous function in the function list.
         */
        selectPreviousFunction(): void;
        /**
         * Select next function in the function list.
         */
        selectNextFunction(): void;
        /**
         * Inserts the selected function from the function list to the cell value editor.
         */
        applyFunctionToCell(): void;
        /**
         * Saves the <b>FlexSheet</b> to xlsx file.
         *
         * For example:
         * <pre>// This sample exports FlexSheet content to an xlsx
         * // click.
         * &nbsp;
         * // HTML
         * &lt;button
         *     onclick="saveXlsx('FlexSheet.xlsx')"&gt;
         *     Save
         * &lt;/button&gt;
         * &nbsp;
         * // JavaScript
         * function saveXlsx(fileName) {
         *     // Save the flexGrid to xlsx file.
         *     flexsheet.save(fileName);
         * }</pre>
         *
         * @param fileName Name of the file that will be generated.
         * @return A workbook instance containing the generated xlsx file content.
         */
        save(fileName?: string): wijmo.xlsx.Workbook;
        saveToWorkbookOM(): wijmo.xlsx.IWorkbook;
        /**
         * Loads the workbook into the <b>FlexSheet</b>.
         *
         * For example:
         * <pre>// This sample opens an xlsx file chosen via Open File
         * // dialog and fills FlexSheet
         * &nbsp;
         * // HTML
         * &lt;input type="file"
         *     id="importFile"
         *     accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
         * /&gt;
         * &lt;div id="flexHost"&gt;&lt;/&gt;
         * &nbsp;
         * // JavaScript
         * var flexSheet = new wijmo.grid.FlexSheet("#flexHost"),
         *     importFile = document.getElementById('importFile');
         * &nbsp;
         * importFile.addEventListener('change', function () {
         *     loadWorkbook();
         * });
         * &nbsp;
         * function loadWorkbook() {
         *     var reader,
         *         file = importFile.files[0];
         *     if (file) {
         *         reader = new FileReader();
         *         reader.onload = function (e) {
         *             flexSheet.load(reader.result);
         *         };
         *         reader.readAsArrayBuffer(file);
         *     }
         * }</pre>
         *
         * @param workbook An Workbook instance or a Blob instance or a base 64 stirng or an ArrayBuffer containing xlsx file content.
         */
        load(workbook: any): void;
        loadFromWorkbookOM(workbook: wijmo.xlsx.IWorkbook): void;
        /**
         * Undo the last user action.
         */
        undo(): void;
        /**
         * Redo the last user action.
         */
        redo(): void;
        /**
         * Selects a cell range and optionally scrolls it into view.
         *
         * @see:FlexSheet overrides this method to adjust the selection cell range for the merged cells in the @see:FlexSheet.
         *
         * @param rng The cell range to select.
         * @param show Indicates whether to scroll the new selection into view.
         */
        select(rng: CellRange, show?: any): void;
        /**
         * Add custom function in @see:FlexSheet.
         * @param name the name of the custom function.
         * @param func the custom function.
         * @param description the description of the custom function, it will be shown in the function autocompletion of the @see:FlexSheet.
         * @param minParamsCount the minimum count of the parameter that the function need.
         * @param maxParamsCount the maximum count of the parameter that the function need.
         *        If the count of the parameters in the custom function is arbitrary, the minParamsCount and maxParamsCount should be set to null.
         */
        addCustomFunction(name: string, func: Function, description?: string, minParamsCount?: number, maxParamsCount?: number): void;
        /**
         * Disposes of the control by removing its association with the host element.
         */
        dispose(): void;
        /**
         * Parses a string into rows and columns and applies the content to a given range.
         *
         * Override the <b>setClipString</b> method of @see:FlexGrid.
         *
         * @param text Tab and newline delimited text to parse into the grid.
         * @param rng @see:CellRange to copy. If omitted, the current selection is used.
         */
        setClipString(text: string, rng?: CellRange): void;
        _getCvIndex(index: number): number;
        private _init();
        private _initFuncsList();
        private _getFunctions();
        private _addCustomFunctionDescription(name, description);
        private _getCurrentFormulaIndex(searchText);
        private _prepareCellForEditHandler();
        private _addSheet(sheetName?, rows?, cols?, pos?, grid?);
        private _showSheet(index);
        private _selectedSheetChange(sender, e);
        private _sourceChange(sender, e);
        private _sheetVisibleChange(sender, e);
        private _applyStyleForCell(rowIndex, colIndex, cellStyle);
        private _checkCellFormat(rowIndex, colIndex, formatState);
        private _resetMergedRange(range);
        private _updateCellsForUpdatingRow(originalRowCount, index, count, isDelete?);
        private _updateCellMergeRangeForRow(currentRange, index, count, updatedMergeCell, isDelete?);
        private _updateCellsForUpdatingColumn(originalColumnCount, index, count, isDelete?);
        private _updateCellMergeRangeForColumn(currentRange, index, count, originalColumnCount, updatedMergeCell, isDelete?);
        _cloneMergedCells(): any;
        private _evaluate(formula, format?, sheet?, rowIndex?, columnIndex?);
        _copyTo(sheet: Sheet): void;
        _copyFrom(sheet: Sheet, needRefresh?: boolean): void;
        private _resetMappedColumns(flex);
        private _resetFilterDefinition();
        private _loadFromWorkbook(workbook);
        private _saveToWorkbook();
        private _mouseDown(e);
        private _mouseMove(e);
        private _mouseUp(e);
        private _click();
        private _touchStart(e);
        private _touchEnd();
        private _showDraggingMarker(e);
        private _handleDropping(e);
        private _moveCellContent(srcRowIndex, srcColIndex, desRowIndex, desColIndex, isCopyContent);
        private _exchangeCellStyle(isReverse);
        private _containsMergedCells(rng);
        private _multiSelectColumns(ht);
        private _cumulativeOffset(element);
        private _cumulativeScrollOffset(element);
        private _checkHitWithinSelection(ht);
        private _clearForEmptySheet(rowsOrColumns);
        private _containsGroupRows(cellRange);
        private _delSeletionContent();
        private _updateEffectedFormula(index, count, isAdding, isRow);
        private _isDescendant(paranet, child);
        _clearCalcEngine(): void;
        /**
         * Converts the number value to its corresponding alpha value.
         * For instance: 0, 1, 2...to a, b, c...
         * @param c The number value need to be converted.
         */
        static convertNumberToAlpha(c: number): string;
    }
    /**
     * Provides arguments for the @see:FlexSheet <b>draggingRowColumn</b> event.
     */
    class DraggingRowColumnEventArgs extends wijmo.EventArgs {
        private _isDraggingRows;
        private _isShiftKey;
        /**
         * Initializes a new instance of the @see:DraggingRowColumnEventArgs class.
         *
         * @param isDraggingRows Indicates whether the dragging event is triggered due to dragging rows or columns.
         * @param isShiftKey Indicates whether the shift key is pressed when dragging.
         */
        constructor(isDraggingRows: boolean, isShiftKey: boolean);
        /**
         * Gets a value indicating whether the event refers to dragging rows or columns.
         */
        isDraggingRows: boolean;
        /**
         * Gets a value indicating whether the shift key is pressed.
         */
        isShiftKey: boolean;
    }
    /**
     * Provides arguments for unknown function events.
     */
    class UnknownFunctionEventArgs extends EventArgs {
        private _funcName;
        private _params;
        /**
         * Gets or sets the result for the unknown funtion.
         */
        value: string;
        /**
         * Initializes a new instance of the @see:UnknownFunctionEventArgs class.
         *
         * @param funcName The name of the unknown function.
         * @param params The parameters' value list of the nuknown function.
         */
        constructor(funcName: string, params: any[]);
        /**
         * Gets the name of the unknown function.
         */
        funcName: string;
        /**
         * Gets the parameters' value list of the nuknown function.
         */
        params: any[];
    }
    /**
     * Defines the extension of the @see:GridPanel class, which is used by <b>FlexSheet</b> where
     * the base @see:FlexGrid class uses @see:GridPanel. For example, the <b>cells</b> property returns an instance
     * of this class.
     */
    class FlexSheetPanel extends GridPanel {
        /**
         * Initializes a new instance of the @see:FlexSheetPanel class.
         *
         * @param grid The @see:FlexGrid object that owns the panel.
         * @param cellType The type of cell in the panel.
         * @param rows The rows displayed in the panel.
         * @param cols The columns displayed in the panel.
         * @param element The HTMLElement that hosts the cells in the control.
         */
        constructor(grid: FlexGrid, cellType: CellType, rows: RowCollection, cols: ColumnCollection, element: HTMLElement);
        /**
         * Gets a @see:SelectedState value that indicates the selected state of a cell.
         *
         * Overrides this method to support multiple selection showSelectedHeaders for @see:FlexSheet
         *
         * @param r Specifies Row index of the cell.
         * @param c Specifies Column index of the cell.
         * @param rng @see:CellRange that contains the cell that would be included.
         */
        getSelectedState(r: number, c: number, rng: CellRange): SelectedState;
        /**
         * Sets the content of a cell in the panel.
         *
         * @param r The index of the row that contains the cell.
         * @param c The index, name, or binding of the column that contains the cell.
         * @param value The value to store in the cell.
         * @param coerce A value indicating whether to change the value automatically to match the column's data type.
         * @return Returns true if the value is stored successfully, otherwise false (failed cast).
         */
        setCellData(r: number, c: any, value: any, coerce?: boolean): boolean;
        _renderCell(r: number, c: number, vrng: CellRange, state: boolean, ctr: number): number;
    }
    /**
     * Represents a row used to display column header information for a bound sheet.
     */
    class HeaderRow extends Row {
        /**
        * Initializes a new instance of the HeaderRow class.
        */
        constructor();
    }
    /**
     * Defines the cell styling properties.
     */
    interface ICellStyle {
        /**
         * The CSS class name to add to a cell.
         */
        className?: string;
        /**
         * The font family.
         */
        fontFamily?: string;
        /**
         * The font size.
         */
        fontSize?: string;
        /**
         * The font style.
         */
        fontStyle?: string;
        /**
         * The font weight.
         */
        fontWeight?: string;
        /**
         * The text decoration.
         */
        textDecoration?: string;
        /**
         * The text alignment.
         */
        textAlign?: string;
        /**
         * The vertical alignment.
         */
        verticalAlign?: string;
        /**
         * The background color.
         */
        backgroundColor?: string;
        /**
         * The font color.
         */
        color?: string;
        /**
         * Format string for formatting the value of the cell.
         */
        format?: string;
    }
    /**
     * Defines the format states for the cells.
     */
    interface IFormatState {
        /**
         * Indicates whether the bold style is applied.
         */
        isBold?: boolean;
        /**
         * Indicates whether the italic style is applied.
         */
        isItalic?: boolean;
        /**
         * Indicates whether the underlined style is applied.
         */
        isUnderline?: boolean;
        /**
         * Gets the applied text alignment.
         */
        textAlign?: string;
        /**
         * Indicate whether the current selection is a merged cell.
         */
        isMergedCell?: boolean;
    }
}

declare module wijmo.grid.sheet {
    /**
     * Represents a sheet within the @see:FlexSheet control.
     */
    class Sheet {
        private _name;
        private _owner;
        private _rowCount;
        private _columnCount;
        private _visible;
        _unboundSortDesc: collections.ObservableArray;
        private _currentStyledCells;
        private _currentMergedRanges;
        private _grid;
        private _selectionRanges;
        private _isEmptyGrid;
        _filterDefinition: string;
        _scrollPosition: Point;
        _freezeHiddenRowCnt: number;
        _freezeHiddenColumnCnt: number;
        /**
         * Initializes a new instance of the @see:FlexSheet class.
         *
         * @param owner The owner @see: FlexSheet control.
         * @param grid The associated @see:FlexGrid control used to store the sheet data. If not specified then the
         * new <b>FlexGrid</b> control will be created.
         * @param sheetName The name of the sheet within the @see:FlexSheet control.
         * @param rows The row count for the sheet.
         * @param cols The column count for the sheet.
         */
        constructor(owner?: FlexSheet, grid?: FlexGrid, sheetName?: string, rows?: number, cols?: number);
        /**
         * Gets the associated @see:FlexGrid control used to store the sheet data.
         */
        grid: FlexGrid;
        /**
         * Gets or sets the name of the sheet.
         */
        name: string;
        /**
         * Gets or sets the sheet visibility.
         */
        visible: boolean;
        /**
         * Gets or sets the number of rows in the sheet.
         */
        rowCount: number;
        /**
         * Gets or sets the number of columns in the sheet.
         */
        columnCount: number;
        /**
         * Gets the selection array.
         */
        selectionRanges: wijmo.collections.ObservableArray;
        /**
         * Gets or sets the array or @see:ICollectionView for the @see:FlexGrid instance of the sheet.
         */
        itemsSource: any;
        _styledCells: any;
        _mergedRanges: any;
        /**
         * Occurs after the sheet name has changed.
         */
        nameChanged: Event;
        /**
         * Raises the @see:sheetNameChanged event.
         */
        onNameChanged(e: wijmo.EventArgs): void;
        /**
         * Occurs after the visible of sheet has changed.
         */
        visibleChanged: Event;
        /**
         * Raises the @see:visibleChanged event.
         */
        onVisibleChanged(e: wijmo.EventArgs): void;
        /**
         * Gets the style of specified cell.
         *
         * @param rowIndex the row index of the specified cell.
         * @param columnIndex the column index of the specified cell.
         */
        getCellStyle(rowIndex: number, columnIndex: number): ICellStyle;
        _attachOwner(owner: FlexSheet): void;
        _setValidName(validName: string): void;
        private _compareRows();
        private _createGrid();
        private _clearGrid();
        private _gridItemsSourceChanged();
    }
    /**
     * Defines the collection of the @see:Sheet objects.
     */
    class SheetCollection extends wijmo.collections.ObservableArray {
        private _current;
        /**
         * Gets or sets the index of the currently selected sheet.
         */
        selectedIndex: number;
        /**
         * Occurs when the <b>selectedIndex</b> property changes.
         */
        selectedSheetChanged: Event;
        /**
         * Raises the <b>currentChanged</b> event.
         *
         * @param e @see:PropertyChangedEventArgs that contains the event data.
         */
        onSelectedSheetChanged(e: PropertyChangedEventArgs): void;
        /**
         * Inserts an item at a specific position in the array.
         * Overrides the insert method of its base class @see:ObservableArray.
         *
         * @param index Position where the item will be added.
         * @param item Item to add to the array.
         */
        insert(index: number, item: any): void;
        /**
         * Adds one or more items to the end of the array.
         * Overrides the push method of its base class @see:ObservableArray.
         *
         * @param ...item One or more items to add to the array.
         * @return The new length of the array.
         */
        push(...item: any[]): number;
        /**
         * Removes and/or adds items to the array.
         * Overrides the splice method of its base class @see:ObservableArray.
         *
         * @param index Position where items will be added or removed.
         * @param count Number of items to remove from the array.
         * @param item Item to add to the array.
         * @return An array containing the removed elements.
         */
        splice(index: number, count: number, item?: any): any[];
        /**
         * Removes an item at a specific position in the array.
         * Overrides the removeAt method of its base class @see:ObservableArray.
         *
         * @param index Position of the item to remove.
         */
        removeAt(index: number): void;
        /**
         * Occurs after the name of the sheet in the collection has changed.
         */
        sheetNameChanged: Event;
        /**
         * Raises the <b>sheetNameChanged</b> event.
         */
        onSheetNameChanged(e: wijmo.collections.NotifyCollectionChangedEventArgs): void;
        /**
         * Occurs after the visible of the sheet in the collection has changed.
         */
        sheetVisibleChanged: Event;
        /**
         * Raises the <b>sheetVisibleChanged</b> event.
         */
        onSheetVisibleChanged(e: wijmo.collections.NotifyCollectionChangedEventArgs): void;
        /**
         * Selects the first sheet in the @see:FlexSheet control.
         */
        selectFirst(): boolean;
        /**
         * Selects the last sheet in the owner @see:FlexSheet control.
         */
        selectLast(): boolean;
        /**
         * Selects the previous sheet in the owner @see:FlexSheet control.
         */
        selectPrevious(): boolean;
        /**
         * Select the next sheet in the owner @see:FlexSheet control.
         */
        selectNext(): boolean;
        /**
         * Hides the sheet at the specified position.
         *
         * @param pos The position of the sheet to hide.
         */
        hide(pos: number): boolean;
        /**
         * Unhide and selects the @see:Sheet at the specified position.
         *
         * @param pos The position of the sheet to show.
         */
        show(pos: number): boolean;
        /**
         * Clear the SheetCollection.
         */
        clear(): void;
        /**
         * Checks whether the sheet name is valid.
         *
         * @param sheet The @see:Sheet for which the name needs to check.
         */
        isValidSheetName(sheet: Sheet): boolean;
        /**
         * Gets the valid name for the sheet.
         *
         * @param currentSheet The @see:Sheet need get the valid name.
         */
        getValidSheetName(currentSheet: Sheet): string;
        private _moveCurrentTo(pos);
        private _getSheetIndexFrom(sheetName);
        private _postprocessSheet(item);
        private _getUniqueName();
    }
    class _SheetTabs extends wijmo.Control {
        private _sheets;
        private _sheetContainer;
        private _tabContainer;
        private _sheetPage;
        private _newSheet;
        private _owner;
        private _rtl;
        private _sheetTabClicked;
        static controlTemplate: string;
        constructor(element: any, owner: FlexSheet, options?: any);
        refresh(fullUpdate: any): void;
        private _sourceChanged(sender, e?);
        private _selectedSheetChanged(sender, e);
        private _initControl();
        private _initSheetTab();
        private _initSheetPage();
        private _getSheetTabs();
        private _getSheetElement(sheetItem, isActive?);
        private _updateTabActive(pos, active);
        private _updateTabShown(sender, e);
        _adjustSize(): void;
        private _getItemIndex(container, item);
        private _updateSheetName(sender, e);
        private _scrollSheetTabContainer(currentSheetTab);
        private _adjustSheetsPosition();
        private _scrollToActiveSheet(newIndex, oldIndex);
    }
    class _UnboundSortDescription {
        private _column;
        private _ascending;
        constructor(column: wijmo.grid.Column, ascending: boolean);
        column: wijmo.grid.Column;
        ascending: boolean;
    }
}

declare module wijmo.grid.sheet {
    /**
     * Maintains sorting of the selected @see:Sheet of the @see:FlexSheet.
     */
    class SortManager {
        private _sortDescriptions;
        private _owner;
        _committedList: ColumnSortDescription[];
        /**
         * Initializes a new instance of the @see:SortManager class.
         *
         * @param owner The @see:FlexSheet control that owns this <b>SortManager</b>.
         */
        constructor(owner: FlexSheet);
        /**
         * Gets or sets the collection of the sort descriptions represented by the  @see:ColumnSortDescription objects.
         */
        sortDescriptions: wijmo.collections.CollectionView;
        /**
         * Adds a blank sorting level to the sort descriptions.
         *
         * @param columnIndex The index of the column in the FlexSheet control.
         * @param ascending The sort order for the sort level.
         */
        addSortLevel(columnIndex?: number, ascending?: boolean): void;
        /**
         * Removes the current sorting level from the sort descriptions.
         *
         * @param columnIndex The index of the column in the FlexSheet control.
         */
        deleteSortLevel(columnIndex?: number): void;
        /**
         * Adds a copy of the current sorting level to the sort descriptions.
         */
        copySortLevel(): void;
        /**
         * Updates the current sort level.
         *
         * @param columnIndex The column index for the sort level.
         * @param ascending The sort order for the sort level.
         */
        editSortLevel(columnIndex?: number, ascending?: boolean): void;
        /**
         * Moves the current sorting level to a new position.
         *
         * @param offset The offset to move the current level by.
         */
        moveSortLevel(offset: number): void;
        /**
         * Check whether the sort item of specific column exists or not
         *
         * @param columnIndex The index of the column in the FlexSheet control.
         */
        checkSortItemExists(columnIndex: any): number;
        /**
         * Commits the current sort descriptions to the FlexSheet control.
         *
         * @param undoable The boolean value indicating whether the commit sort action is undoable.
         */
        commitSort(undoable?: boolean): void;
        /**
         * Cancel the current sort descriptions to the FlexSheet control.
         */
        cancelSort(): void;
        _refresh(): void;
        private _getColumnIndex(property);
        private _getSortItem(columnIndex);
        private _scanUnboundRows();
    }
    /**
     * Describes a @see:FlexSheet column sorting criterion.
     */
    class ColumnSortDescription {
        private _columnIndex;
        private _ascending;
        /**
         * Initializes a new instance of the @see:ColumnSortDescription class.
         *
         * @param columnIndex Indicates which column to sort the rows by.
         * @param ascending The sort order.
         */
        constructor(columnIndex: number, ascending: boolean);
        /**
         * Gets or sets the column index.
         */
        columnIndex: number;
        /**
         * Gets or sets the ascending.
         */
        ascending: boolean;
    }
}

declare module wijmo.grid.sheet {
    /**
     * Controls undo and redo operations in the @see:FlexSheet.
     */
    class UndoStack {
        private MAX_STACK_SIZE;
        private _owner;
        private _stack;
        private _pointer;
        private _pendingAction;
        private _resizingTriggered;
        /**
         * Initializes a new instance of the @see:UndoStack class.
         *
         * @param owner The @see:FlexSheet control that the @see:UndoStack works for.
         */
        constructor(owner: FlexSheet);
        /**
         * Checks whether the undo action can be performed.
         */
        canUndo: boolean;
        /**
         * Checks whether the redo action can be performed.
         */
        canRedo: boolean;
        /**
         * Occurs after the undo stack has changed.
         */
        undoStackChanged: Event;
        /**
         * Raises the <b>undoStackChanged</b> event.
         */
        onUndoStackChanged(): void;
        /**
         * Undo the latest action.
         */
        undo(): void;
        /**
         * Redo the latest undone action.
         */
        redo(): void;
        _addAction(action: _UndoAction): void;
        /**
         * Clears the undo stack.
         */
        clear(): void;
        private _initCellEditAction(sender, args);
        private _initCellEditActionForPasting();
        private _afterProcessCellEditAction(self);
        private _beforeUndoRedo(action);
    }
}

