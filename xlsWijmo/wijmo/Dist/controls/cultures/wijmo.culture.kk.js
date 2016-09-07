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
* Wijmo culture file: kk (Kazakh)
*/
var wijmo;
(function (wijmo) {
    wijmo.culture = {
        Globalize: {
            name: 'kk',
            displayName: 'Kazakh',
            numberFormat: {
                '.': ',',
                ',': ' ',
                percent: { pattern: ['-n%', 'n%'] },
                currency: { decimals: 2, symbol: '₸', pattern: ['-n $', 'n $'] }
            },
            calendar: {
                '/': '/',
                ':': ':',
                firstDay: 1,
                days: ['жексенбі', 'дүйсенбі', 'сейсенбі', 'сәрсенбі', 'бейсенбі', 'жұма', 'сенбі'],
                daysAbbr: ['жек', 'дүй', 'сей', 'сәр', 'бей', 'жұма', 'сен'],
                months: ['қаңтар', 'ақпан', 'наурыз', 'сәуір', 'мамыр', 'маусым', 'шілде', 'тамыз', 'қыркүйек', 'қазан', 'қараша', 'желтоқсан'],
                monthsAbbr: ['қаң.', 'ақп.', 'нау.', 'сәу.', 'мам.', 'мау.', 'шіл.', 'там.', 'қыр.', 'қаз.', 'қар.', 'желт.'],
                am: ['таңертеңгі', 'таңертеңгі'],
                pm: ['түстен кейінгі', 'түстен кейінгі'],
                eras: ['б.з.'],
                patterns: {
                    d: 'dd/MM/yyyy', D: 'dddd, d MMMM yyyy',
                    f: 'dddd, d MMMM yyyy HH:mm', F: 'dddd, d MMMM yyyy HH:mm:ss',
                    t: 'HH:mm', T: 'HH:mm:ss',
                    m: 'd MMMM', M: 'd MMMM',
                    y: 'MMMM yyyy', Y: 'MMMM yyyy',
                    g: 'dd/MM/yyyy HH:mm', G: 'dd/MM/yyyy HH:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} элементтер таңдалған'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value} </b>({count:n0} элемент)'
        },
        FlexGridFilter: {
            // filter
            ascending: '\u2191 Артуы бойынша',
            descending: '\u2193 Кемуі бойынша',
            apply: 'Қолдану',
            clear: 'Тазалау',
            conditions: 'Шарты бойынша сүзу',
            values: 'Мәні бойынша сүзу',
            // value filter
            search: 'Іздеу',
            selectAll: 'Бәрін бөлектеу',
            null: '(жоқ)',
            // condition filter
            header: 'Мәні мынадай элементтерді көрсету',
            and: 'Және',
            or: 'Немесе',
            stringOperators: [
                { name: '(орнатылмаған)', op: null },
                { name: 'Тең', op: 0 },
                { name: 'Тең емес', op: 1 },
                { name: 'Басталады', op: 6 },
                { name: 'Аяқталады', op: 7 },
                { name: 'Құрамында бар', op: 8 },
                { name: 'Құрамында жоқ', op: 9 }
            ],
            numberOperators: [
                { name: '(орнатылмаған)', op: null },
                { name: 'Тең', op: 0 },
                { name: 'Тең емес', op: 1 },
                { name: 'Үлкендеу', op: 2 },
                { name: 'Үлкендеу немесе тең', op: 3 },
                { name: 'Аздау', op: 4 },
                { name: 'Аздау немесе тең', op: 5 }
            ],
            dateOperators: [
                { name: '(орнатылмаған)', op: null },
                { name: 'Тең', op: 0 },
                { name: 'Бұрын', op: 4 },
                { name: 'Кейін', op: 3 }
            ],
            booleanOperators: [
                { name: '(орнатылмаған)', op: null },
                { name: 'Тең', op: 0 },
                { name: 'Тең емес', op: 1 }
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
//# sourceMappingURL=wijmo.culture.kk.js.map
