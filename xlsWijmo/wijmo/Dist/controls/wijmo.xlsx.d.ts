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
declare module wijmo.xlsx {
    function _xlsx(file: any): any;
}

/**
* The module has dependency on the external <a href="https://stuk.github.io/jszip" target="_blank">JSZip</a> library,
* which should be referenced in html page with the markup like this:
* <pre>&lt;script src="http://cdnjs.cloudflare.com/ajax/libs/jszip/2.5.0/jszip.min.js"&gt;&lt;/script&gt;</pre>
*/
declare module wijmo.xlsx {
    /**
     * Represents Excel Workbook.
     */
    class Workbook implements IWorkbook {
        /**
         * Gets or sets the name of application that generated the file that appears in the file properties.
         */
        application: string;
        /**
         * Gets or sets the name of company that generated the file that appears in the file properties.
         */
        company: string;
        /**
         * Gets or sets the creator of the xlsx file.
         */
        creator: string;
        /**
         * Gets or sets the creation time of the xlsx file.
         */
        created: Date;
        /**
         * Gets or sets the last modifier of the xlsx file.
         */
        lastModifiedBy: string;
        /**
         * Gets or sets the last modified time of the xlsx file.
         */
        modified: Date;
        /**
         * Gets or sets the index of the active sheet in the xlsx file.
         */
        activeWorksheet: number;
        private _reservedContent;
        private _sheets;
        private _styles;
        private static _alphabet;
        private static _formatMap;
        /**
         * Gets the WorkSheet array of the Workbook.
         */
        sheets: WorkSheet[];
        /**
         * Gets the styles table of the workbook.
         */
        styles: WorkbookStyle[];
        /**
         * Gets or sets the reserved content from xlsx file that flexgrid or flexsheet doesn't support yet.
         */
        reservedContent: any;
        /**
         * Saves to base 64 string containing xlsx file content and returns it. If fileName is specified then saves it to xlsx file.
         *
         * For example:
         * <pre>// This sample saves the workbook instance xlsx file, containing "Hello, Excel!" in a single cell,
         * // click.
         * &nbsp;
         * // HTML
         * &lt;button
         *     onclick="saveXlsx('Hello.xlsx')"&gt;
         *     Save
         * &lt;/button&gt;
         * &nbsp;
         * // JavaScript
         * function exportXlsx(fileName) {
         *     // Define a workbook content.
         *     var workbook = new wijmo.xlsx.Workbook(),
         *         worksheet = new wijmo.grid.xlsx.WorkSheet(),
         *         workbookRow = new wijmo.grid.xlsx.WorkbookRow(),
         *         workbookCell = new wijmo.grid.xlsx.WorkbookCell();
         *     workbookCell.value = 'Hello, Excel!';
         *     workbookRow.cells.push(workbookCell);
         *     worksheet.rows.push(workbookRow);
         *     workbook.sheets.push(worksheet);
         * &nbsp;
         *     // If the fileName is specified, the Workbook.save method exports the workbook to xlsx file and return the base64 string of the xlsx content.
         *     workbook.save(fileName);
         * }</pre>
         * <pre>// This sample saves the workbook instance to base64 string containing xlsx content "Hello, Excel!" in a single cell,
         * // click.
         * &nbsp;
         * // HTML
         * &lt;button
         *     onclick="saveXlsx()"&gt;
         *     Save
         * &lt;/button&gt;
         * &nbsp;
         * // JavaScript
         * function exportXlsx() {
         *     // Define a workbook content.
         *     var workbook = new wijmo.xlsx.Workbook(),
         *         worksheet = new wijmo.grid.xlsx.WorkSheet(),
         *         workbookRow = new wijmo.grid.xlsx.WorkbookRow(),
         *         workbookCell = new wijmo.grid.xlsx.WorkbookCell(),
         *         fileContent;
         *     workbookCell.value = 'Hello, Excel!';
         *     workbookRow.cells.push(workbookCell);
         *     worksheet.rows.push(workbookRow);
         *     workbook.sheets.push(worksheet);
         * &nbsp;
         *     // If the fileName is not specified, the Workbook.save method just return the base64 string of the xlsx content.
         *     fileContent = workbook.save();
         *     // TODO: The base64 string can be sent to server-side to generate the xlsx at server-side and etc..
         * }</pre>
         *
         * @param fileName the name of the saved xlsx file.
         */
        save(fileName?: string): string;
        /**
         * Loads from base 64 string or data url.
         *
         * For example:
         * <pre>// This sample opens an xlsx file chosen from Open File
         * // dialog and creates a workbook instance to load the file.
         * &nbsp;
         * // HTML
         * &lt;input type="file"
         *     id="importFile"
         *     accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
         * /&gt;
         * &nbsp;
         * // JavaScript
         * var workbook, // receives imported IWorkbook
         *     importFile = document.getElementById('importFile');
         * &nbsp;
         * importFile.addEventListener('change', function () {
         *     loadWorkbook();
         * });
         * &nbsp;
         * function loadWorkbook() {
         *     var reader,
         *         workbook,
         *         file = importFile.files[0];
         *     if (file) {
         *         reader = new FileReader();
         *         reader.onload = function (e) {
         *            workbook = new wijmo.xlsx.Workbook(),
         *            workbook.load(reader.result);
         *         };
         *         reader.readAsDataURL(file);
         *     }
         * }</pre>
         *
         * @param base64 the base 64 string that contains the xlsx file content.
         */
        load(base64: string): void;
        _serialize(): IWorkbook;
        _deserialize(workbookOM: IWorkbook): void;
        _addWorkSheet(workSheet: WorkSheet, sheetIndex?: number): void;
        private _saveToFile(blob, fileName);
        /**
         * Converts the wijmo date format to Excel format.
         *
         * @param format The wijmo date format.
         * @return Excel format representation.
         */
        static toXlsxDateFormat(format: string): string;
        /**
         * Converts the wijmo number format to xlsx format.
         *
         * @param format The wijmo number format.
         * @return Excel format representation.
         */
        static toXlsxNumberFormat(format: string): string;
        /**
         * Converts the xlsx multi-section format string to an array of corresponding wijmo formats.
         *
         * @param xlsxFormat The Excel format string, that may contain multiple format sections separated by semicolon.
         * @return An array of .Net format strings where each element corresponds to a separate Excel format section.
         * The returning array always contains at least one element. It can be an empty string in case the passed Excel format is empty.
         */
        static fromXlsxFormat(xlsxFormat: string): string[];
        static _parseCellFormat(format: string, isDate: boolean): string;
        static _parseExcelFormat(item: any): string;
        /**
         * Converts zero-based cell, row or column index to Excel alphanumeric representation.
         *
         * @param row The zero-based row index or a null value if only column index should be converted.
         * @param col The zero-based column index or a null value if only row index should be converted.
         * @param absolute True value indicates that absolute indexes should be returned for both row and
         *        column indexes (like $D$7). The <b>absoluteCol</b> parameter allows to redefine this value for the column index.
         * @param absoluteCol True value indicates that column index is absolute.
         * @return The alphanumeric Excel index representation.
        */
        static xlsxAddress(row: number, col: number, absolute?: boolean, absoluteCol?: boolean): string;
        /**
         * Convert Excel's alphanumeric cell, row or column index to the zero-based row/column indexes pair.
         *
         * @param xlsxIndex The alphanumeric Excel index that may include alphabetic A-based on column index
         * and/or numeric 1-based on row index, like "D15", "D" or "15". The alphabetic column index can be
         * in lower or upper case.
         * @return The object with <b>row</b> and <b>col</b> properties containing zero-based row and/or column indexes.
         * If row or column component is not specified in the alphanumeric index then corresponding returning property is undefined.
         */
        static tableAddress(xlsxIndex: string): ITableAddress;
        static _parseHAlignToString(hAlign: HAlign): string;
        static _parseStringToHAlign(hAlign: string): HAlign;
        static _parseVAlignToString(vAlign: VAlign): string;
        static _parseStringToVAlign(vAlign: string): VAlign;
        static _parseBorderTypeToString(type: BorderStyle): string;
        static _parseStringToBorderType(type: string): BorderStyle;
        private static _numAlpha(i);
        private static _alphaNum(s);
        private static _b64ToUint6(nChr);
        static _base64DecToArr(sBase64: string, nBlocksSize?: number): Uint8Array;
        private static _uint6ToB64(nUint6);
        static _base64EncArr(aBytes: Uint8Array): string;
        private _serializeWorkSheets();
        private _serializeWorkbookStyles();
        private _deserializeWorkSheets(workSheets);
        private _deserializeWorkbookStyles(workbookStyles);
    }
    /**
     * Represents the Workbook Object Model sheet definition that includes sheet properties and data.
     *
     * The sheet cells are stored in row objects and are accessible using the path like <b>sheet.rows[i].cells[j]</b>.
     */
    class WorkSheet implements IWorkSheet {
        /**
         * Gets or sets the sheet name.
         */
        name: string;
        /**
         *  Gets or sets the @see:WorkbookFrozenPane settings.
         */
        frozenPane: WorkbookFrozenPane;
        /**
         * Gets or sets a value indicating whether summary rows appear below or above detail rows.
         */
        summaryBelow: boolean;
        /**
         * Gets or sets the worksheet visibility.
         */
        visible: boolean;
        /**
         * Gets or sets the row style.
         *
         * The property defines the style for all cells in the worksheet, and can be overridden by the specific cell styles.
         */
        style: WorkbookStyle;
        private _columns;
        private _rows;
        /**
         * Gets or sets an array of sheet columns definitions.
         *
         * Each @see:WorkbookColumn object in the array describes a column at the corresponding position in xlsx sheet,
         * i.e. the column with index 0
         * corresponds to xlsx sheet column with index A, object with index 1 defines sheet column with index B, and so on. If certain column
         * has no description in xlsx file then corresponding array element is undefined for both export and import operations.
         *
         * If @see:WorkbookColumn object in the array doesn't specify the <b>width</b> property value then the default column width
         * is applied.
         */
        columns: WorkbookColumn[];
        cols: WorkbookColumn[];
        /**
         * Gets an array of sheet rows definition.
         *
         * Each @see:WorkbookRow object in the array describes a row at the corresponding position in xlsx sheet,
         * i.e. the row with index 0
         * corresponds to xlsx sheet row with index 1, object with index 1 defines sheet row with index 2, and so on. If certain row
         * has no properties and data in xlsx file then corresponding array element is undefined for both export and import operations.
         *
         * If @see:WorkbookRow object in the array doesn't specify the <b>height</b> property value then the default row height
         * is applied.
         */
        rows: WorkbookRow[];
        _serialize(): IWorkSheet;
        _deserialize(workSheetOM: IWorkSheet): void;
        _addWorkbookColumn(column: WorkbookColumn, columnIndex?: number): void;
        _addWorkbookRow(row: WorkbookRow, rowIndex?: number): void;
        private _serializeWorkbookColumns();
        private _serializeWorkbookRows();
        private _deserializeWorkbookColumns(workbookColumns);
        private _deserializeWorkbookRows(workbookRows);
        private _checkEmptyWorkSheet();
    }
    /**
     * Represents the Workbook Object Model column definition.
     */
    class WorkbookColumn implements IWorkbookColumn {
        /**
         * Gets or sets the width of the column in device-independent (1/96th inch) pixels or characters.
         *
         * The numeric value defines the width in pixels. On import the widths are always expressed in pixels.
         *
         * The string value which is a number with the 'ch' suffix, for example '10ch', defines the width in characters.
         * It has the same meaning as the column width defined via Excel UI. The width can be specified in characters
         * only for export operations.
         *
         * If width is not specified then the default width is applied.
         */
        width: any;
        /**
         * Gets or sets the column visibility.
         */
        visible: boolean;
        /**
         * Gets or sets the column style.
         *
         * The property defines the style for all cells in the column, and can be overridden by the specific cell styles.
         */
        style: WorkbookStyle;
        /**
         * Gets or sets a value indicating whether the column width is automatically adjusted to fit its cells content.
         */
        autoWidth: boolean;
        _serialize(): IWorkbookColumn;
        _deserialize(workbookColumnOM: IWorkbookColumn): void;
        private _checkEmptyWorkbookColumn();
    }
    /**
     * Represents the Workbook Object Model row definition.
     */
    class WorkbookRow implements IWorkbookRow {
        /**
         * Gets or sets the row height in device-independent (1/96th inch) pixels.
         *
         * If height is not specified then the default height is applied.
         */
        height: number;
        /**
         * Gets or sets the row visibility.
         */
        visible: boolean;
        /**
         * Gets or sets the group level of the row.
         */
        groupLevel: number;
        /**
         * Gets or sets the row style.
         *
         * The property defines the style for all cells in the row, and can be overridden by the specific cell styles.
         */
        style: WorkbookStyle;
        /**
         * Indicating if the row is in the collapsed outline state.
         */
        collapsed: boolean;
        private _cells;
        /**
         * Gets or sets an array of cells in the row.
         *
         * Each @see:WorkbookCell object in the array describes a cell at the corresponding position in the row,
         * i.e. the cell with index 0
         * pertain to column with index A, cell with index 1 defines cell pertain to column with index B, and so on. If a certain cell
         * has no definition (empty) in xlsx file then corresponding array element is undefined for both export and import operations.
         */
        cells: WorkbookCell[];
        _serialize(): IWorkbookRow;
        _deserialize(workbookRowOM: IWorkbookRow): void;
        _addWorkbookCell(cell: WorkbookCell, cellIndex?: number): void;
        private _serializeWorkbookCells();
        private _deserializeWorkbookCells(workbookCells);
        private _checkEmptyWorkbookRow();
    }
    /**
     * Represents the Workbook Object Model cell definition.
     */
    class WorkbookCell implements IWorkbookCell {
        /**
         * Gets or sets the cell value.
         *
         * The type of the value can be String, Number, Boolean or Date.
         */
        value: any;
        /**
         * Indicates whether the cell value is date or not.
         */
        isDate: boolean;
        /**
         * Gets or sets the formula of cell.
         */
        formula: string;
        /**
         * Gets or sets the style of cell.
         */
        style: WorkbookStyle;
        /**
         * Gets or sets the colSpan setting of cell.
         */
        colSpan: number;
        /**
         * Gets or sets the rowSpan setting of cell.
         */
        rowSpan: number;
        _serialize(): IWorkbookCell;
        _deserialize(workbookCellOM: IWorkbookCell): void;
        private _checkEmptyWorkbookCell();
    }
    /**
     * Workbook frozen pane definition
     */
    class WorkbookFrozenPane implements IWorkbookFrozenPane {
        /**
         * Gets or sets the number of frozen rows.
         */
        rows: number;
        /**
         * Gets or sets the number of frozen columns.
         */
        columns: number;
        _serialize(): IWorkbookFrozenPane;
        _deserialize(workbookFrozenPaneOM: IWorkbookFrozenPane): void;
    }
    /**
     * Represents the Workbook Object Model style definition used to style Excel cells, columns and rows.
     */
    class WorkbookStyle implements IWorkbookStyle {
        /**
         * Cell value format, defined using Excel format syntax.
         *
         * The description of Excel format syntax can be found
         * <a href="https://support.office.com/en-us/article/Create-or-delete-a-custom-number-format-78f2a361-936b-4c03-8772-09fab54be7f4" target="_blank">here</a>.
         *
         * You may use the <b>xlsxNumberFormat</b> and <b>xlsxDateFormat</b> static functions of the
         * @see:XlsxConverter class to convert from .Net (@see:Globalize) format to Excel format.
         */
        format: string;
        /**
         * Defines the base style that this style inherits from.
         *
         * This property is applicable for export operations only. The style gets all the properties defined in the base style,
         * and can override or augment them by setting its own properties.
         */
        basedOn: WorkbookStyle;
        /**
         * Gets or sets the font of style.
         */
        font: WorkbookFont;
        /**
         * Gets or sets a horizontal alignment of a text.
         */
        hAlign: HAlign;
        /**
         *  Gets or sets vertical alignment of a text.
         */
        vAlign: VAlign;
        /**
         * Gets or sets indenet setting of the style.
         */
        indent: number;
        /**
         * Gets or sets background setting.
         */
        fill: WorkbookFill;
        /**
         * Gets or sets border setting.
         */
        borders: WorkbookBorder;
        _serialize(): IWorkbookStyle;
        _deserialize(workbookStyleOM: IWorkbookStyle): void;
        private _checkEmptyWorkbookStyle();
    }
    /**
     * Represents the Workbook Object Model font definition.
     */
    class WorkbookFont implements IWorkbookFont {
        /**
         * Gets or sets font family name.
         */
        family: string;
        /**
         * Gets or sets the font size in device-independent (1/96th inch) pixels.
         */
        size: number;
        /**
         * Indicates whether current font is bold.
         */
        bold: boolean;
        /**
         * Indicates whether current font has the italic style applied.
         */
        italic: boolean;
        /**
         * Indicates whether current font is underlined.
         */
        underline: boolean;
        /**
         * Gets or sets the font color.
         *
         * For export, the color can be specified in any valid HTML format like 6-character dash notation or
         * rgb/rgba/hsl/hsla functional form. In case of rgba/hsla representations a specified alpha channel value
         * will be ignored.
         *
         * For import a value is always represented in the HTML 6-character dash notation, e.g. "#afbfcf".
         */
        color: string;
        _serialize(): IWorkbookFont;
        _deserialize(workbookFontOM: IWorkbookFont): void;
        private _checkEmptyWorkbookFont();
    }
    /**
     * Represents the Workbook Object Model background fill definition.
     */
    class WorkbookFill implements IWorkbookFill {
        /**
         * Gets or sets the fill color.
         *
         * For export, the color can be specified in any valid HTML format like 6-character dash notation or
         * rgb/rgba/hsl/hsla functional form. In case of rgba/hsla representations a specified alpha channel value
         * will be ignored.
         *
         * For import a value is always represented in the HTML 6-character dash notation, e.g. "#afbfcf".
         */
        color: string;
        _serialize(): IWorkbookFill;
        _deserialize(workbookFillOM: IWorkbookFill): void;
    }
    /**
     * Represents the Workbook Object Model border definition.
     */
    class WorkbookBorder implements IWorkbookBorder {
        /**
         * Gets or sets top border setting.
         */
        top: WorkbookBorderSetting;
        /**
         * Gets or sets bottom border setting.
         */
        bottom: WorkbookBorderSetting;
        /**
         * Gets or sets left border setting.
         */
        left: WorkbookBorderSetting;
        /**
         * Gets or sets right border setting.
         */
        right: WorkbookBorderSetting;
        /**
         * Gets or sets diagonal border setting.
         */
        diagonal: WorkbookBorderSetting;
        _serialize(): IWorkbookBorder;
        _deserialize(workbookBorderOM: IWorkbookBorder): void;
        private _checkEmptyWorkbookBorder();
    }
    /**
     * Represents the Workbook Object Model background setting definition.
     */
    class WorkbookBorderSetting implements IWorkbookBorderSetting {
        /**
         * Gets or sets border color.
         *
         * For export, the color can be specified in any valid HTML format like 6-character dash notation or
         * rgb/rgba/hsl/hsla functional form. In case of rgba/hsla representations a specified alpha channel value
         * will be ignored.
         *
         * For import a value is always represented in the HTML 6-character dash notation, e.g. "#afbfcf".
         */
        color: string;
        /**
         * Gets or sets border type.
         */
        style: BorderStyle;
        _serialize(): IWorkbookBorderSetting;
        _deserialize(workbookBorderSettingOM: IWorkbookBorderSetting): void;
    }
    interface IXlsxFileContent {
        /**
         * base64 string for the exporting result
         */
        base64: string;
        /**
         * converted int array for base64 string result.
         */
        base64Array: Uint8Array;
        /**
         * download link for the exported result.
         */
        href: Function;
    }
    /**
     * Represents the Workbook Object Model sheet definition that includes sheet properties and data.
     *
     * The sheet cells are stored in row objects and are accessible using the path like <b>sheet.rows[i].cells[j]</b>.
     */
    interface IWorkSheet {
        /**
         * Gets or sets the sheet name.
         */
        name?: string;
        cols?: IWorkbookColumn[];
        /**
         * Gets or sets an array of sheet columns definitions.
         *
         * Each @see:IWorkbookColumn object in the array describes a column at the corresponding position in xlsx sheet,
         * i.e. the column with index 0
         * corresponds to xlsx sheet column with index A, object with index 1 defines sheet column with index B, and so on. If certain column
         * has no description in xlsx file then corresponding array element is undefined for both export and import operations.
         *
         * If @see:IWorkbookColumn object in the array doesn't specify the <b>width</b> property value then the default column width
         * is applied.
         */
        columns?: IWorkbookColumn[];
        /**
         * Gets or sets an array of sheet rows definition.
         *
         * Each @see:IWorkbookRow object in the array describes a row at the corresponding position in xlsx sheet,
         * i.e. the column with index 0
         * corresponds to xlsx sheet row with index 1, object with index 1 defines sheet row with index 2, and so on. If certain row
         * has no properties and data in xlsx file then corresponding array element is undefined for both export and import operations.
         *
         * If @see:IWorkbookRow object in the array doesn't specify the <b>height</b> property value then the default row height
         * is applied.
         */
        rows?: IWorkbookRow[];
        /**
         *  Gets or sets the frozen pane settings.
         */
        frozenPane?: IWorkbookFrozenPane;
        /**
         * Gets or sets a value indicating whether summary rows appear below or above detail rows.
         */
        summaryBelow?: boolean;
        /**
         * Gets or sets the worksheet visibility.
         */
        visible?: boolean;
        /**
         * Gets or sets the sheet style.
         *
         * The property defines the style for all cells in the worksheet, and can be overridden by the specific cell styles.
         */
        style?: IWorkbookStyle;
    }
    /**
     * Represents the Workbook Object Model column definition.
     */
    interface IWorkbookColumn {
        /**
         * Gets or sets the width of the column in device-independent (1/96th inch) pixels or characters.
         *
         * The numeric value defines the width in pixels. On import the widths are always expressed in pixels.
         *
         * The string value which is a number with the 'ch' suffix, for example '10ch', defines the width in characters.
         * It has the same meaning as the column width defined via Excel UI. The width can be specified in characters
         * only for export operations.
         *
         * If width is not specified then the default width is applied.
         */
        width?: any;
        /**
         * Gets or sets the column visibility.
         */
        visible?: boolean;
        /**
         * Gets or sets the column style.
         *
         * The property defines the style for all cells in the column, and can be overridden by the specific cell styles.
         */
        style?: IWorkbookStyle;
        /**
         * Gets or sets a value indicating whether the column width is automatically adjusted to fit its cells content.
         */
        autoWidth?: boolean;
    }
    /**
     * Represents the Workbook Object Model row definition.
     */
    interface IWorkbookRow {
        /**
         * Gets or sets the row height in device-independent (1/96th inch) pixels.
         *
         * If height is not specified then the default height is applied.
         */
        height?: number;
        /**
         * Gets or sets the row visibility.
         */
        visible?: boolean;
        /**
         * Gets or sets the group level of the row.
         */
        groupLevel?: number;
        /**
         * Gets or sets the row style.
         *
         * The property defines the style for all cells in the row, and can be overridden by the specific cell styles.
         */
        style?: IWorkbookStyle;
        /**
         * TBD: Indicating if the row is in the collapsed outline state.
         */
        collapsed?: boolean;
        /**
         * Gets or sets an array of cells in the row.
         *
         * Each @see:IWorkbookCell object in the array describes a cell at the corresponding position in the row,
         * i.e. the cell with index 0
         * pertain to column with index A, cell with index 1 defines cell pertain to column with index B, and so on. If a certain cell
         * has no definition (empty) in xlsx file then corresponding array element is undefined for both export and import operations.
         */
        cells?: IWorkbookCell[];
    }
    /**
     * Represents the Workbook Object Model cell definition.
     */
    interface IWorkbookCell {
        /**
         * Gets or sets the cell value.
         *
         * The type of the value can be String, Number, Boolean or Date.
         */
        value?: any;
        /**
         * Indicates whether the cell value is date or not.
         */
        isDate?: boolean;
        /**
         * Cell formula
         */
        formula?: string;
        /**
         * Cell style
         */
        style?: IWorkbookStyle;
        /**
         * Cell colSpan setting
         */
        colSpan?: number;
        /**
         * Cell rowSpan setting
         */
        rowSpan?: number;
    }
    /**
     * Workbook frozen pane definition
     */
    interface IWorkbookFrozenPane {
        /**
         * Gets or sets the number of frozen rows.
         */
        rows: number;
        /**
         * Gets or sets the number of frozen columns.
         */
        columns: number;
    }
    /**
     * Represents Excel Workbook. This interface is a root of the Excel Workbook Object Model (WOM) that provides
     * an easy way to define properties and data stored in xlsx file.
     *
     * To create an xlsx file, you need to create a JavaScript object that conforms to the @see:IWorkbook interface
     * definition, with child objects defining workbook sheets and their columns, rows and cells. Then pass this object
     * to the @see:XlsxConverter class' <b>export</b> method that will return you a corresponding xlsx file content
     * which can be then saved to disk or transferred to a server.
     *
     * In order to read an xlsx file data, you need to pass the xlsx file content to the @see:XlsxConverter class'
     * <b>import</b> method which will return you a JavaScript object conforming to the @see:IWorkbook interface
     * that allows to easily inspect workbook data and properties. You may use it farther in various ways, for example
     * draw its content on HTML page or save it as a data array for processing or data binding.
     *
     */
    interface IWorkbook {
        /**
         * Defines an array of Excel Workbook sheets.
         */
        sheets: IWorkSheet[];
        /**
        * The name of application that generated the file that appears in the file properties.
        */
        application?: string;
        /**
        * The name of company that generated the file that appears in the file properties.
        */
        company?: string;
        /**
         * Creator of the xlsx file.
         */
        creator?: string;
        /**
         * Creation time of the xlsx file.
         */
        created?: Date;
        /**
         * Last modifier of the xlsx file.
         */
        lastModifiedBy?: string;
        /**
         * Last modified time of the xlsx file.
         */
        modified?: Date;
        /**
         * Index of the active sheet in the xlsx file.
         */
        activeWorksheet?: number;
        /**
         * Styles table of the workbook.
         */
        styles?: IWorkbookStyle[];
        /**
         * The reserved content for the workbook.
         */
        reservedContent?: any;
    }
    /**
     * Represents the Workbook Object Model style definition used to style Excel cells, columns and rows.
     */
    interface IWorkbookStyle {
        /**
         * Cell value format, defined using Excel format syntax.
         *
         * The description of Excel format syntax can be found
         * <a href="https://support.office.com/en-us/article/Create-or-delete-a-custom-number-format-78f2a361-936b-4c03-8772-09fab54be7f4" target="_blank">here</a>.
         *
         * You may use the <b>xlsxNumberFormat</b> and <b>xlsxDateFormat</b> static functions of the
         * @see:XlsxConverter class to convert from .Net (@see:Globalize) format to Excel format.
         */
        format?: string;
        /**
         * Defines the base style that this style inherits from.
         *
         * This property is applicable for export operations only. The style gets all the properties defined in the base style,
         * and can override or augment them by setting its own properties.
         */
        basedOn?: IWorkbookStyle;
        /**
         * Gets or sets the font properties.
         */
        font?: IWorkbookFont;
        /**
         * Gets or sets a horizontal alignment of a text.
         */
        hAlign?: HAlign;
        /**
         *  Gets or sets vertical alignment of a text.
         */
        vAlign?: VAlign;
        /**
         * Text indent.
         * It is an integer value, where an increment of 1 represents 3 spaces.
         */
        indent?: number;
        /**
         * Cell outline setting.
         */
        borders?: IWorkbookBorder;
        /**
         * Gets or sets cells background.
         */
        fill?: IWorkbookFill;
    }
    /**
     * Represents the Workbook Object Model font definition.
     */
    interface IWorkbookFont {
        /**
         * Gets or sets font family name.
         */
        family?: string;
        /**
         * Gets or sets the font size in device-independent (1/96th inch) pixels.
         */
        size?: number;
        /**
         * Gets or sets a value indicating whether this font is bold.
         */
        bold?: boolean;
        /**
         * Gets or sets a value indicating whether this font has the italic style applied.
         */
        italic?: boolean;
        /**
         * Gets or sets a value indicating whether this font is underlined.
         */
        underline?: boolean;
        /**
         * Gets or sets the font color.
         *
         * For export, the color can be specified in any valid HTML format like 6-character dash notation or
         * rgb/rgba/hsl/hsla functional form. In case of rgba/hsla representations a specified alpha channel value
         * will be ignored.
         *
         * For import a value is always represented in the HTML 6-character dash notation, e.g. "#afbfcf".
         */
        color?: string;
    }
    /**
     * Workbook cell outline definition.
     */
    interface IWorkbookBorder {
        /**
         * Top border setting.
         */
        top?: IWorkbookBorderSetting;
        /**
         * Bottom border setting.
         */
        bottom?: IWorkbookBorderSetting;
        /**
         * Left border setting.
         */
        left?: IWorkbookBorderSetting;
        /**
         * Right border setting.
         */
        right?: IWorkbookBorderSetting;
        /**
         * Diagonal border setting.
         */
        diagonal?: IWorkbookBorderSetting;
    }
    /**
     * Border style definition
     */
    interface IWorkbookBorderSetting {
        /**
         * Border color.
         *
         * For export, the color can be specified in any valid HTML format like 6-character dash notation or
         * rgb/rgba/hsl/hsla functional form. In case of rgba/hsla representations a specified alpha channel value
         * will be ignored.
         *
         * For import a value is always represented in the HTML 6-character dash notation, e.g. "#afbfcf".
         */
        color?: string;
        /**
         * Border type.
         */
        style?: BorderStyle;
    }
    /**
     * Represents the Workbook Object Model background fill definition.
     */
    interface IWorkbookFill {
        /**
         * Gets or sets the fill color.
         *
         * For export, the color can be specified in any valid HTML format like 6-character dash notation or
         * rgb/rgba/hsl/hsla functional form. In case of rgba/hsla representations a specified alpha channel value
         * will be ignored.
         *
         * For import a value is always represented in the HTML 6-character dash notation, e.g. "#afbfcf".
         */
        color?: string;
    }
    interface ITableIndex {
        /**
         * A zero-based row index.
         */
        row: number;
        /**
         * A zero-based column index.
         */
        col: number;
        /**
        * Indicates whether the original column index is absolute (for example "$D") or relative (for example "D").
        */
        absCol: boolean;
        /**
        * Indicates whether the original row index is absolute (for example "$15") or relative (for example "15").
        */
        absRow: boolean;
    }
    /**
     * Defines a cell index with zero-based row and column components, as well as the properties indicating whether
     * the index component is absolute (for example "$D") or relative (for example "D").
     */
    interface ITableAddress {
        /**
         * A zero-based row index.
         */
        row: number;
        /**
         * A zero-based column index.
         */
        col: number;
        /**
        * Indicates whether the original column index is absolute (for example "$D") or relative (for example "D").
        */
        absCol: boolean;
        /**
        * Indicates whether the original row index is absolute (for example "$15") or relative (for example "15").
        */
        absRow: boolean;
    }
    /**
     * Defines the Workbook Object Model horizontal text alignment.
     */
    enum HAlign {
        /** Alignment depends on the cell value type. */
        General = 0,
        /** Text is aligned to the left. */
        Left = 1,
        /** Text is centered. */
        Center = 2,
        /** Text is aligned to the right. */
        Right = 3,
        /** Text is replicated to fill the whole cell width. */
        Fill = 4,
        /** Text is justified. */
        Justify = 5,
    }
    /**
     * Vertical alignment
     */
    enum VAlign {
        /** Top vertical alignment */
        Top = 0,
        /** Center vertical alignment */
        Center = 1,
        /** Bottom vertical alignment */
        Bottom = 2,
        /** Justify vertical alignment */
        Justify = 3,
    }
    /**
     * Border line style
     */
    enum BorderStyle {
        /** No border */
        None = 0,
        /** Thin border */
        Thin = 1,
        /** Medium border */
        Medium = 2,
        /** Dashed border */
        Dashed = 3,
        /** Dotted border */
        Dotted = 4,
        /** Thick line border */
        Thick = 5,
        /** Double line border */
        Double = 6,
        /** Hair line border */
        Hair = 7,
        /** Medium dashed border */
        MediumDashed = 8,
        /** Thin dash dotted border */
        ThinDashDotted = 9,
        /** Medium dash dotted border */
        MediumDashDotted = 10,
        /** Thin dash dot dotted border */
        ThinDashDotDotted = 11,
        /** Medium dash dot dotted border */
        MediumDashDotDotted = 12,
        /** Slanted medium dash dotted border */
        SlantedMediumDashDotted = 13,
    }
}

declare module wijmo.xlsx {
    class XlsxConverter {
        static export(workbook: IWorkbook): IXlsxFileContent;
        static exportToFile(workbook: IWorkbook, fileName: string): void;
        static import(fileContent: any): IWorkbook;
        static xlsxDateFormat(netFormat: string): string;
        static xlsxNumberFormat(netFormat: string): string;
        static netFormat(xlsxFormat: string): string[];
        static xlsxIndex(row: number, col: number, absolute?: boolean, absoluteCol?: boolean): string;
        static numericIndex(xlsxIndex: string): ITableAddress;
    }
}

