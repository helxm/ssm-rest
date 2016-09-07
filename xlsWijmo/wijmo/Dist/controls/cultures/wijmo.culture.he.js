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
/*
* Wijmo culture file: he (Hebrew)
*/
var wijmo;
(function (wijmo) {
    wijmo.culture = {
        Globalize: {
            name: 'he',
            displayName: 'Hebrew',
            numberFormat: {
                '.': '.',
                ',': ',',
                percent: { pattern: ['-n%', 'n%'] },
                currency: { decimals: 2, symbol: '₪', pattern: ['$-n', '$ n'] }
            },
            calendar: {
                '/': '/',
                ':': ':',
                firstDay: 0,
                days: ['יום ראשון', 'יום שני', 'יום שלישי', 'יום רביעי', 'יום חמישי', 'יום שישי', 'שבת'],
                daysAbbr: ['יום א', 'יום ב', 'יום ג', 'יום ד', 'יום ה', 'יום ו', 'שבת'],
                months: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
                monthsAbbr: ['ינו', 'פבר', 'מרץ', 'אפר', 'מאי', 'יונ', 'יול', 'אוג', 'ספט', 'אוק', 'נוב', 'דצמ'],
                am: ['AM', 'A'],
                pm: ['PM', 'P'],
                eras: ['לספירה'],
                patterns: {
                    d: 'dd/MM/yyyy', D: 'dddd dd MMMM yyyy',
                    f: 'dddd dd MMMM yyyy HH:mm', F: 'dddd dd MMMM yyyy HH:mm:ss',
                    t: 'HH:mm', T: 'HH:mm:ss',
                    m: 'dd MMMM', M: 'dd MMMM',
                    y: 'MMMM yyyy', Y: 'MMMM yyyy',
                    g: 'dd/MM/yyyy HH:mm', G: 'dd/MM/yyyy HH:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        MultiSelect: {
            itemsSelected: 'פריטים שנבחרו  {count:n0}'
        },
        FlexGrid: {
            groupHeaderFormat: '(פריטים {count:n0})<b> {value}</b> :{name}'
        },
        FlexGridFilter: {
            // filter
            ascending: '\u2191 סדר עולה',
            descending: '\u2193 סדר יורד',
            apply: 'החל',
            clear: 'נקה',
            conditions: 'סנן לפי תנאי',
            values: 'סנן לפי ערך',
            // value filter
            search: 'חפש',
            selectAll: 'בחר הכל',
            null: '(כלום)',
            // condition filter
            header: 'הצג פריטים כאשר הערך',
            and: 'וכן',
            or: 'או',
            stringOperators: [
                { name: '(לא מוגדר)', op: null },
                { name: 'שווה ל-', op: 0 },
                { name: 'לא שווה ל-', op: 1 },
                { name: 'מתחיל ב-', op: 6 },
                { name: 'מסתיים ב-', op: 7 },
                { name: 'מכיל', op: 8 },
                { name: 'לא מכיל', op: 9 }
            ],
            numberOperators: [
                { name: '(לא מוגדר)', op: null },
                { name: 'שווה ל-', op: 0 },
                { name: 'לא שווה ל-', op: 1 },
                { name: 'גדול מ-', op: 2 },
                { name: 'גדול או שווה ל-', op: 3 },
                { name: 'קטן מ-', op: 4 },
                { name: 'קטן או שווה ל-', op: 5 }
            ],
            dateOperators: [
                { name: '(לא מוגדר)', op: null },
                { name: 'שווה ל-', op: 0 },
                { name: 'לפני', op: 4 },
                { name: 'אחרי', op: 3 }
            ],
            booleanOperators: [
                { name: '(לא מוגדר)', op: null },
                { name: 'שווה ל-', op: 0 },
                { name: 'לא שווה ל-', op: 1 }
            ]
        },
        olap: {
            PivotFieldEditor: {
                dialogHeader: 'Field settings:',
                header: 'Header:',
                summary: 'Summary:',
                showAs: 'Show As:',
                weighBy: 'Weigh by:',
                sort: 'Sort:',
                filter: 'Filter:',
                format: 'Format:',
                sample: 'Sample:',
                edit: 'Edit...',
                clear: 'Clear',
                ok: 'OK',
                cancel: 'Cancel',
                none: '(none)',
                sorts: {
                    asc: 'Ascending',
                    desc: 'Descending'
                },
                aggs: {
                    sum: 'Sum',
                    cnt: 'Count',
                    avg: 'Average',
                    max: 'Max',
                    min: 'Min',
                    rng: 'Range',
                    std: 'StdDev',
                    var: 'Var',
                    stdp: 'StdDevPop',
                    varp: 'VarPop'
                },
                calcs: {
                    noCalc: 'No Calculation',
                    dRow: 'Difference from previous row',
                    dRowPct: '% Difference from previous row',
                    dCol: 'Difference from previous column',
                    dColPct: '% Difference from previous column'
                },
                formats: {
                    n0: 'Integer (n0)',
                    n2: 'Float (n2)',
                    c: 'Currency (c)',
                    p0: 'Percentage (p0)',
                    p2: 'Percentage (p2)',
                    n2c: 'Thousands (n2,)',
                    n2cc: 'Millions (n2,,)',
                    n2ccc: 'Billions (n2,,,)',
                    d: 'Date (d)',
                    MMMMddyyyy: 'Month Day Year (MMMM dd, yyyy)',
                    dMyy: 'Day Month Year (d/M/yy)',
                    ddMyy: 'Day Month Year (dd/M/yy)',
                    dMyyyy: 'Day Month Year (dd/M/yyyy)',
                    MMMyyyy: 'Month Year (MMM yyyy)',
                    MMMMyyyy: 'Month Year (MMMM yyyy)',
                    yyyyQq: 'Year Quarter (yyyy "Q"q)',
                    FYEEEEQU: 'Fiscal Year Quarter ("FY"EEEE "Q"U)'
                }
            },
            PivotEngine: {
                grandTotal: 'Grand Total',
                subTotal: 'Subtotal'
            },
            PivotPanel: {
                fields: 'Choose fields to add to report',
                drag: 'Drag fields between areas below:',
                filters: 'Filters',
                cols: 'Columns',
                rows: 'Rows',
                vals: 'Values',
                defer: 'Defer Updates',
                update: 'Update'
            },
            _ListContextMenu: {
                up: 'Move Up',
                down: 'Move Down',
                first: 'Move do Beginning',
                last: 'Move to End',
                filter: 'Move to Report Filter',
                rows: 'Move to Row Labels',
                cols: 'Move to Column Labels',
                vals: 'Move to Values',
                remove: 'Remove Field',
                edit: 'Field Settings...',
                detail: 'Show Detail...'
            },
            PivotChart: {
                by: 'by',
                and: 'and'
            },
            DetailDialog: {
                header: 'Detail View:',
                ok: 'OK',
                items: '{cnt:n0} items',
                item: '{cnt} item',
                row: 'Row',
                col: 'Column'
            }
        }
    };
})(wijmo || (wijmo = {}));
;
//# sourceMappingURL=wijmo.culture.he.js.map
