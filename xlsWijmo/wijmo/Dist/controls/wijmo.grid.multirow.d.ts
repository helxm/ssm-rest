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
declare module wijmo.grid.multirow {
    /**
     * Extends the @see:Row to provide additional information for multi-row records.
     */
    class _MultiRow extends Row {
        _idxData: number;
        _idxRecord: number;
        /**
         * Initializes a new instance of the @see:Row class.
         *
         * @param dataItem The data item that this row is bound to.
         * @param dataIndex The index of the record within the items source.
         * @param recordIndex The index of this row within the record (data item).
         */
        constructor(dataItem: any, dataIndex: number, recordIndex: number);
        /**
         * Gets the index of this row within the record (data item) it represents.
         */
        recordIndex: number;
        /**
         * Gets the index of this row within the data source collection.
         */
        dataIndex: number;
    }
}

declare module wijmo.grid.multirow {
    /**
     * Extends the @see:Column class to with a @see:colspan property to
     * describe a cell in a @see:_CellGroup.
     */
    class _Cell extends Column {
        _row: number;
        _col: number;
        _colspan: number;
        _rowspan: number;
        /**
         * Initializes a new instance of the @see:_Cell class.
         *
         * @param options JavaScript object containing initialization data for the @see:_Cell.
         */
        constructor(options?: any);
        /**
         * Gets or sets the number of physical columns spanned by this @see:_Cell.
         */
        colspan: number;
    }
}

declare module wijmo.grid.multirow {
    /**
     * Describes a group of cells that may span multiple rows and columns.
     */
    class _CellGroup extends _Cell {
        _g: MultiRow;
        _colstart: number;
        _cells: _Cell[];
        _rng: CellRange[];
        _cols: ColumnCollection;
        /**
         * Initializes a new instance of the @see:_CellGroup class.
         *
         * @param grid @see:MultiRow that owns this @see:_CellGroup.
         * @param options JavaScript object containing initialization data for the new @see:_CellGroup.
         */
        constructor(grid: MultiRow, options?: any);
        _copy(key: string, value: any): boolean;
        cells: _Cell[];
        closeGroup(rowsPerItem: number): void;
        getColumnWidth(c: number): any;
        getMergedRange(p: GridPanel, r: number, c: number): CellRange;
        getBindingColumn(p: GridPanel, r: number, c: number): Column;
    }
}

declare module wijmo.grid.multirow {
    /**
     * Provides custom merging for @see:MultiRow controls.
     */
    class _MergeManager extends MergeManager {
        /**
         * Gets a @see:CellRange that specifies the merged extent of a cell
         * in a @see:GridPanel.
         *
         * @param p The @see:GridPanel that contains the range.
         * @param r The index of the row that contains the cell.
         * @param c The index of the column that contains the cell.
         * @param clip Whether to clip the merged range to the grid's current view range.
         * @return A @see:CellRange that specifies the merged range, or null if the cell is not merged.
         */
        getMergedRange(p: GridPanel, r: number, c: number, clip?: boolean): CellRange;
    }
}

declare module wijmo.grid.multirow {
    /**
     * Manages the new row template used to add rows to the grid.
     */
    class _AddNewHandler extends wijmo.grid._AddNewHandler {
        /**
         * Initializes a new instance of the @see:_AddNewHandler class.
         *
         * @param grid @see:FlexGrid that owns this @see:_AddNewHandler.
         */
        constructor(grid: FlexGrid);
        /**
         * Updates the new row template to ensure it's visible only if the grid is
         * bound to a data source that supports adding new items, and that it is
         * in the right position.
         */
        updateNewRowTemplate(): void;
    }
}

/**
 * Defines the @see:MultiRow control and associated classes.
 */
declare module wijmo.grid.multirow {
    /**
     * Extends the @see:FlexGrid control to provide multiple rows per item.
     *
     * Use the @see:layoutDefinition property to define the layout of the rows
     * used to display each data item.
     *
     * A few @see:FlexGrid properties are disabled in the @see:MultiRow control
     * because they would interfere with the custom multi-row layouts.
     * The list of disabled properties includes @see:allowMerging and
     * @see:childItemsPath.
     */
    class MultiRow extends FlexGrid {
        _rowsPerItem: number;
        _layoutDef: any[];
        _cellBindingGroups: _CellGroup[];
        _cellGroupsByColumn: any;
        _centerVert: boolean;
        _collapsedHeaders: boolean;
        _btnCollapse: HTMLElement;
        /**
         * Initializes a new instance of the @see:MultiRow class.
         *
         * In most cases, the @see:options parameter will include the value for the
         * @see:layoutDefinition property.
         *
         * @param element The DOM element that will host the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets an array that defines the layout of the rows used to display each data item.
         *
         * The array contains a list of cell group objects which have the following properties:
         *
         * <ul>
         * <li><b>header</b>: Group header (shown when the headers are collapsed)</li>
         * <li><b>colspan</b>: Number of grid columns spanned by the group</li>
         * <li><b>cells</b>: Array of cell objects, which extend @see:Column with a <b>colspan</b> property.</li>
         * </ul>
         *
         * When the @see:layoutDefinition property is set, the grid scans the cells in each
         * group as follows:
         *
         * <ol>
         * <li>The grid calculates the group's colspan as the max between the group's own colspan
         * and the widest cell in the group.</li>
         * <li>If the cell fits the current row within the group, it is added to the current row.</li>
         * <li>If it doesn't fit, it is added to a new row.</li>
         * </ol>
         *
         * When all groups are ready, the grid calculates the number of rows per record to the maximum
         * rowspan of all groups, and adds rows to each group to pad their height as needed.
         *
         * This scheme is simple and flexible. For example:
         * <pre>{ header: 'Group 1', cells: [{ binding: 'c1' }, { bnding: 'c2'}, { binding: 'c3' }]}</pre>
         *
         * The group has colspan 1, so there will be one cell per column. The result is:
         * <pre>
         * | C1 |
         * | C2 |
         * | C3 |
         * </pre>
         *
         * To create a group with two columns, set the group's colspan property:
         *
         * <pre>{ header: 'Group 1', colspan: 2, cells:[{ binding: 'c1' }, { binding: 'c2'}, { binding: 'c3' }]}</pre>
         *
         * The cells will wrap as follows:
         * <pre>
         * | C1  | C2 |
         * | C3       |
         * </pre>
         *
         * Note that the last cell spans two columns (to fill the group).
         *
         * You can also specify the colspan on individual cells rather than on the group:
         *
         * <pre>{ header: 'Group 1', cells: [{binding: 'c1', colspan: 2 }, { bnding: 'c2'}, { binding: 'c3' }]}</pre>
         *
         * Now the first cell has colspan 2, so the result is:
         * <pre>
         * | C1       |
         * | C2 |  C3 |
         * </pre>
         *
         * Because cells extend the @see:Column class, you can add all the usual @see:Column
         * properties to any cells:
         * <pre>
         * { header: 'Group 1', cells: [
         *    { binding: 'c1', colspan: 2 },
         *    { bnding: 'c2'},
         *    { binding: 'c3', format: 'n0', required: false, etc... }
         * ]}</pre>
         */
        layoutDefinition: any[];
        /**
         * Gets the number of rows used do display each item.
         *
         * This value is calculated automatically based on the value
         * of the @see:layoutDefinition property.
         */
        rowsPerItem: number;
        /**
         * Gets the @see:Column object used to bind a data item to a grid cell.
         *
         * @param p @see:GridPanel that contains the cell.
         * @param r Index of the row that contains the cell.
         * @param c Index of the column that contains the cell.
         */
        getBindingColumn(p: GridPanel, r: number, c: number): Column;
        /**
         * Gets or sets a value that determines whether the content of cells
         * that span multiple rows should be vertically centered.
         */
        centerHeadersVertically: boolean;
        /**
         * Gets or sets a value that determines whether column headers
         * should be collapsed and displayed as a single row displaying
         * the group headers.
         *
         * If you set the @see:collapsedHeaders property to true,
         * remember to set the header property of every group in order
         * to avoid empty headers.
         */
        collapsedHeaders: boolean;
        /**
         * Gets or sets a value that determines whether the grid should display
         * a button in the column header panel to allow users to collapse and
         * expand the column headers.
         *
         * If the button is visible, clicking on it will cause the grid to
         * toggle the value of the @see:collapsedHeaders property.
         */
        showHeaderCollapseButton: boolean;
        _addBoundRow(items: any[], index: number): void;
        _addNode(items: any[], index: number, level: number): void;
        _bindColumns(): void;
        _updateColumnTypes(): void;
        _getBindingColumn(p: GridPanel, r: Number, c: Column): Column;
        _cvCollectionChanged(sender: any, e: collections.NotifyCollectionChangedEventArgs): void;
        _parseCellGroups(groups: any[]): _CellGroup[];
        _formatItem(s: MultiRow, e: FormatItemEventArgs): void;
        _updateButtonGlyph(): void;
    }
}

