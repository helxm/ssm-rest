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
/**
* Extension that defines the @see:FlexGridXlsxConverter class that provides client-side Excel xlsx file save/load capabilities
* for the @see:FlexGrid control.
*/
declare module wijmo.grid.xlsx {
    /**
     * This class provides static <b>load</b> and <b>save</b> methods for loading and saving of the @see:FlexGrid control
     * from/to Excel xlsx files.
     */
    class FlexGridXlsxConverter {
        static export(grid: any, exportOption?: IFlexGridXlsxExportOptions): wijmo.xlsx.IXlsxFileContent;
        static import(fileContent: any, grid: FlexGrid, importOption?: IFlexGridXlsxImportOptions, moreSheets?: FlexGrid[]): void;
        static toWorkbookOM(flex: any, exportOption?: IFlexGridXlsxExportOptions): wijmo.xlsx.IWorkbook;
        static fromWorkbookOM(workbook: wijmo.xlsx.IWorkbook, flex: FlexGrid, importOption?: IFlexGridXlsxImportOptions, moreSheets?: FlexGrid[]): void;
        /**
         * Save the @see:FlexGrid instance to @see:Workbook instance.
         *
         * For example:
         * <pre>// This sample exports FlexGrid content to an xlsx
         * // click.
         * &nbsp;
         * // HTML
         * &lt;button
         *     onclick="saveXlsx('FlexGrid.xlsx')"&gt;
         *     Save
         * &lt;/button&gt;
         * &nbsp;
         * // JavaScript
         * function saveXlsx(fileName) {
         *     // Save the flexGrid to xlsx file.
         *     wijmo.grid.xlsx.FlexGridXlsxConverter.save(flexGrid,
         *             { includeColumnHeaders: true }, fileName);
         * }</pre>
         *
         * @param grid FlexGrid that will be saved.
         * @param options Options to use when saving the grid (including whether to save row and column headers, sheet name, etc)
         * @param fileName Name of the file that will be generated.
         * @return A @see:Workbook object that can be used to customize the workbook before saving it (with the Workbook.save method).
         */
        static save(grid: FlexGrid, options?: IFlexGridXlsxOptions, fileName?: any): wijmo.xlsx.Workbook;
        /**
         * Loads an @see:Workbook instance or a Blob object containing xlsx file content to @see:FlexGrid instance.
         *
         * For example:
         * <pre>// This sample opens an xlsx file chosen via Open File
         * // dialog and fills FlexGrid with the content of the first
         * // sheet.
         * &nbsp;
         * // HTML
         * &lt;input type="file"
         *     id="importFile"
         *     accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
         * /&gt;
         * &lt;div id="flexHost"&gt;&lt;/&gt;
         * &nbsp;
         * // JavaScript
         * var flexGrid = new wijmo.grid.FlexGrid("#flexHost"),
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
         *             wijmo.grid.xlsx.FlexGridXlsxConverter.load(flexGrid, reader.result,
         *                 { includeColumnHeaders: true });
         *         };
         *         reader.readAsArrayBuffer(file);
         *     }
         * }</pre>
         *
         * @param grid FlexGrid that will load the workBook object.
         * @param workbook An Workbook instance or a Blob instance or a base 64 stirng or an ArrayBuffer containing xlsx file content.
         * @param options Options to use when load the workBook object to @see:FlexGrid instance (including whether to save row and column headers, sheet name, etc)
         */
        static load(grid: FlexGrid, workbook: any, options?: IFlexGridXlsxOptions): void;
        private static _exportFlexGrid(flex, file, exportOption);
        private static _loadToFlexGrid(grid, workbook, options);
        private static _parseFlexGridRowToSheetRow(panel, workbookRow, rowIndex, startColIndex, columnSettings, includeCellStyles, fakeCell, isGroupRow, groupLevel);
        private static _parseCellStyle(cellStyle);
        private static _parseBorder(cellStyle);
        private static _parseEgdeBorder(cellStyle, edge);
        private static _parseToExcelFontFamily(fontFamily);
        private static _parseToExcelFormula(formula, isDate);
        private static _parseToFlexSheetFormula(excelFormula);
        private static _getColumnSetting(column, defaultWidth);
        private static _toExcelHAlign(value);
        private static _getColumnCount(sheetData);
        private static _getRowCount(sheetData, columnCnt);
        private static _numAlpha(i);
        private static _getItemType(item);
        private static _setColumn(columns, columnIndex, item);
        private static _getItemValue(item);
        private static _getCellStyle(panel, fakeCell, r, c);
        private static _resetCellStyle(cell);
        private static _extend(dst, src);
        private static _checkParentCollapsed(groupCollapsedSettings, groupLevel);
    }
    /**
     * Defines additional worksheet properties that can be accesses via the dynamic <b>wj_sheetInfo</b> property
     * of the @see:FlexGrid instance.
     */
    interface IExtendedSheetInfo {
        /**
         * The sheet name.
         */
        name: string;
        /**
         * Sheet visibility.
         */
        visible: boolean;
        /**
         * Styled cells in the sheet
         */
        styledCells: any;
        /**
         * Merged ranges in the sheet
         */
        mergedRanges: any;
        /**
         * Contains an array of font names used in the sheet.
         */
        fonts: string[];
    }
    interface IFlexGridXlsxExportOptions {
        includeColumnHeader?: boolean;
        /**
         * Indicates whether to include column headers as first rows in the generated xlsx file.
         */
        includeColumnHeaders?: boolean;
        /**
         * Indicates whether to include row headers as first columns in the generated xlsx file.
         */
        includeRowHeaders?: boolean;
        needGetCellStyle?: boolean;
        /**
         * Indicates whether cells styling should be included in the generated xlsx file.
         */
        includeCellStyles?: boolean;
        /**
         * Index of the active sheet in the xlsx file.
         */
        activeWorksheet?: number;
    }
    interface IFlexGridXlsxImportOptions {
        /**
         * Indicates whether to treat the first xlsx file row as containing column header names.
         */
        includeColumnHeader: boolean;
    }
    /**
     * FlexGrid Xlsx conversion options
     */
    interface IFlexGridXlsxOptions {
        /**
         * The index of the sheet in the workbook.
         */
        sheetIndex?: number;
        /**
         * The name of the sheet.
         */
        sheetName?: string;
        /**
         * The visible of the sheet.
         */
        sheetVisible?: boolean;
        /**
         * Indicates whether to include column headers as first rows in the generated xlsx file.
         */
        includeColumnHeaders?: boolean;
        /**
         * Indicates whether to include column headers as first rows in the generated xlsx file.
         */
        includeRowHeaders?: boolean;
        /**
         * Indicates whether cells styling should be included in the generated xlsx file.
         */
        includeCellStyles?: boolean;
        /**
         * Index or name of the active sheet in the xlsx file.
         */
        activeWorksheet?: any;
    }
}

