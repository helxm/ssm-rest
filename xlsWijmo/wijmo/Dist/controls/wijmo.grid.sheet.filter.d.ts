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
declare module wijmo.grid.sheet.filter {
    /**
     * Defines a value filter for a column on a @see:FlexSheet control.
     *
     * Value filters contain an explicit list of values that should be
     * displayed by the sheet.
     */
    class FlexSheetValueFilter extends wijmo.grid.filter.ValueFilter {
        /**
         * Gets a value that indicates whether a value passes the filter.
         *
         * @param value The value to test.
         */
        apply(value: any): boolean;
    }
}

declare module wijmo.grid.sheet.filter {
    /**
     * The editor used to inspect and modify @see:FlexSheetValueFilter objects.
     *
     * This class is used by the @see:FlexSheetFilter class; you
     * rarely use it directly.
     */
    class FlexSheetValueFilterEditor extends wijmo.grid.filter.ValueFilterEditor {
        /**
         * Updates editor with current filter settings.
         */
        updateEditor(): void;
    }
}

declare module wijmo.grid.sheet.filter {
    /**
     * Defines a condition filter for a column on a @see:FlexSheet control.
     *
     * Condition filters contain two conditions that may be combined
     * using an 'and' or an 'or' operator.
     *
     * This class is used by the @see:FlexSheetFilter class; you will
     * rarely use it directly.
     */
    class FlexSheetConditionFilter extends wijmo.grid.filter.ConditionFilter {
        /**
        * Returns a value indicating whether a value passes this filter.
        *
        * @param value The value to test.
        */
        apply(value: any): boolean;
    }
}

declare module wijmo.grid.sheet.filter {
    /**
     * Defines a filter for a column on a @see:FlexSheet control.
     *
     * The @see:FlexSheetColumnFilter contains a @see:FlexSheetConditionFilter and a
     * @see:FlexSheetValueFilter; only one of them may be active at a time.
     *
     * This class is used by the @see:FlexSheetFilter class; you
     * rarely use it directly.
     */
    class FlexSheetColumnFilter extends wijmo.grid.filter.ColumnFilter {
        /**
         * Initializes a new instance of the @see:FlexSheetColumnFilter class.
         *
         * @param owner The @see:FlexSheetFilter that owns this column filter.
         * @param column The @see:Column to filter.
         */
        constructor(owner: FlexSheetFilter, column: Column);
    }
}

declare module wijmo.grid.sheet.filter {
    /**
     * The editor used to inspect and modify column filters.
     *
     * This class is used by the @see:FlexSheetFilter class; you
     * rarely use it directly.
     */
    class FlexSheetColumnFilterEditor extends wijmo.grid.filter.ColumnFilterEditor {
        /**
         * Initializes a new instance of the @see:FlexSheetColumnFilterEditor class.
         *
         * @param element The DOM element that hosts the control, or a selector
         * for the host element (e.g. '#theCtrl').
         * @param filter The @see:FlexSheetColumnFilter to edit.
         * @param sortButtons Whether to show sort buttons in the editor.
         */
        constructor(element: any, filter: FlexSheetColumnFilter, sortButtons?: boolean);
        _showFilter(filterType: wijmo.grid.filter.FilterType): void;
        private _sortBtnClick(e, asceding);
        private cloneElement(element);
    }
}

declare module wijmo.grid.sheet.filter {
    /**
     * Implements an Excel-style filter for @see:FlexSheet controls.
     *
     * To enable filtering on a @see:FlexSheet control, create an instance
     * of the @see:FlexSheetFilter and pass the grid as a parameter to the
     * constructor.
     */
    class FlexSheetFilter extends wijmo.grid.filter.FlexGridFilter {
        /**
         * Gets or sets the current filter definition as a JSON string.
         */
        filterDefinition: string;
        /**
         * Applies the current column filters to the sheet.
         */
        apply(): void;
        /**
         * Shows the filter editor for the given grid column.
         *
         * @param col The @see:Column that contains the filter to edit.
         * @param ht A @see:HitTestInfo object containing the range of the cell that triggered the filter display.
         */
        editColumnFilter(col: any, ht?: HitTestInfo): void;
        /**
         * Gets the filter for the given column.
         *
         * @param col The @see:Column that the filter applies to (or column name or index).
         * @param create Whether to create the filter if it does not exist.
         */
        getColumnFilter(col: any, create?: boolean): FlexSheetColumnFilter;
    }
}

