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
* Wijmo culture file: el (Greek)
*/
var wijmo;
(function (wijmo) {
    wijmo.culture = {
        Globalize: {
            name: 'el',
            displayName: 'Greek',
            numberFormat: {
                '.': ',',
                ',': '.',
                percent: { pattern: ['-n%', 'n%'] },
                currency: { decimals: 2, symbol: '€', pattern: ['-n $', 'n $'] }
            },
            calendar: {
                '/': '/',
                ':': ':',
                firstDay: 1,
                days: ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'],
                daysAbbr: ['Κυρ', 'Δευ', 'Τρι', 'Τετ', 'Πεμ', 'Παρ', 'Σαβ'],
                months: ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος'],
                monthsAbbr: ['Ιαν', 'Φεβ', 'Μαρ', 'Απρ', 'Μαϊ', 'Ιουν', 'Ιουλ', 'Αυγ', 'Σεπ', 'Οκτ', 'Νοε', 'Δεκ'],
                am: ['πμ', 'π'],
                pm: ['μμ', 'μ'],
                eras: ['μ.Χ.'],
                patterns: {
                    d: 'd/M/yyyy', D: 'dddd, d MMMM yyyy',
                    f: 'dddd, d MMMM yyyy h:mm tt', F: 'dddd, d MMMM yyyy h:mm:ss tt',
                    t: 'h:mm tt', T: 'h:mm:ss tt',
                    m: 'd MMMM', M: 'd MMMM',
                    y: 'MMMM yyyy', Y: 'MMMM yyyy',
                    g: 'd/M/yyyy h:mm tt', G: 'd/M/yyyy h:mm:ss tt',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} αντικείμενα που επιλέγονται'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value} </b>({count:n0} στοιχεία)'
        },
        FlexGridFilter: {
            // filter
            ascending: '\u2191 Με αύξουσα σειρά',
            descending: '\u2193 Με φθίνουσα σειρά',
            apply: 'Εφαρμογή',
            clear: 'Εκκαθάριση',
            conditions: 'Φιλτράρισμα ανά κατάσταση',
            values: 'Φιλτράρισμα ανά τιμή',
            // value filter
            search: 'Αναζήτηση',
            selectAll: 'Επιλογή όλων',
            null: '(τίποτα)',
            // condition filter
            header: 'Εμφάνιση στοιχείων όπου η τιμή',
            and: 'Και',
            or: 'Ή',
            stringOperators: [
                { name: '(δεν έχει οριστεί)', op: null },
                { name: 'Ισούται με', op: 0 },
                { name: 'Δεν ισούται με', op: 1 },
                { name: 'Αρχίζει με', op: 6 },
                { name: 'Τελειώνει με', op: 7 },
                { name: 'Περιέχει', op: 8 },
                { name: 'Δεν περιέχει', op: 9 }
            ],
            numberOperators: [
                { name: '(δεν έχει οριστεί)', op: null },
                { name: 'Ισούται με', op: 0 },
                { name: 'Δεν ισούται με', op: 1 },
                { name: 'Είναι μεγαλύτερη από', op: 2 },
                { name: 'Είναι μεγαλύτερη από ή ίση με', op: 3 },
                { name: 'Είναι μικρότερη από', op: 4 },
                { name: 'Είναι μικρότερη από ή ίση με', op: 5 }
            ],
            dateOperators: [
                { name: '(δεν έχει οριστεί)', op: null },
                { name: 'Ισούται με', op: 0 },
                { name: 'Είναι Πριν', op: 4 },
                { name: 'Είναι Μετά', op: 3 }
            ],
            booleanOperators: [
                { name: '(δεν έχει οριστεί)', op: null },
                { name: 'Ισούται με', op: 0 },
                { name: 'Δεν ισούται με', op: 1 }
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
//# sourceMappingURL=wijmo.culture.el.js.map
