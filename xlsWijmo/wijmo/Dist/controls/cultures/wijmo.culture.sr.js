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
* Wijmo culture file: sr (Serbian)
*/
var wijmo;
(function (wijmo) {
    wijmo.culture = {
        Globalize: {
            name: 'sr',
            displayName: 'Serbian',
            numberFormat: {
                '.': ',',
                ',': '.',
                percent: { pattern: ['-n%', 'n%'] },
                currency: { decimals: 0, symbol: 'RSD', pattern: ['-n $', 'n $'] }
            },
            calendar: {
                '/': '.',
                ':': '.',
                firstDay: 1,
                days: ['nedelja', 'ponedeljak', 'utorak', 'sreda', 'četvrtak', 'petak', 'subota'],
                daysAbbr: ['ned', 'pon', 'uto', 'sre', 'čet', 'pet', 'sub'],
                months: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'],
                monthsAbbr: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'avg', 'sep', 'okt', 'nov', 'dec'],
                am: ['pre podne', 'pre podne'],
                pm: ['po podne', 'po podne'],
                eras: ['n. e.'],
                patterns: {
                    d: 'd.M.yyyy.', D: 'dddd, dd. MMMM yyyy.',
                    f: 'dddd, dd. MMMM yyyy. HH.mm', F: 'dddd, dd. MMMM yyyy. HH.mm.ss',
                    t: 'HH.mm', T: 'HH.mm.ss',
                    m: 'd. MMMM', M: 'd. MMMM',
                    y: 'MMMM yyyy.', Y: 'MMMM yyyy.',
                    g: 'd.M.yyyy. HH.mm', G: 'd.M.yyyy. HH.mm.ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} stavki odabrano'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value} </b>({count:n0} stavke)'
        },
        FlexGridFilter: {
            // filter
            ascending: '\u2191 Rastuće',
            descending: '\u2193 Opadajuće',
            apply: 'Primeni',
            clear: 'Obriši',
            conditions: 'Filtriraj prema uslovu',
            values: 'Filtriraj prema vrednosti',
            // value filter
            search: 'Traži',
            selectAll: 'Izaberi sve',
            null: '(ništa)',
            // condition filter
            header: 'Prikaži stavke gde je vredbnost',
            and: 'I',
            or: 'Ili',
            stringOperators: [
                { name: '(nije postavljeno)', op: null },
                { name: 'Jednako', op: 0 },
                { name: 'Nije jednako', op: 1 },
                { name: 'Počinje sa', op: 6 },
                { name: 'Završava sa', op: 7 },
                { name: 'Sadrži', op: 8 },
                { name: 'Ne sadrži', op: 9 }
            ],
            numberOperators: [
                { name: '(nije postavljeno)', op: null },
                { name: 'Jednako', op: 0 },
                { name: 'Nije jednako', op: 1 },
                { name: 'Veće od', op: 2 },
                { name: 'Veće od ili jednako', op: 3 },
                { name: 'Manje od', op: 4 },
                { name: 'Manje od ili jednako', op: 5 }
            ],
            dateOperators: [
                { name: '(nije postavljeno)', op: null },
                { name: 'Jednako', op: 0 },
                { name: 'Pre', op: 4 },
                { name: 'Posle', op: 3 }
            ],
            booleanOperators: [
                { name: '(nije postavljeno)', op: null },
                { name: 'Jednako', op: 0 },
                { name: 'Nije jednako', op: 1 }
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
//# sourceMappingURL=wijmo.culture.sr.js.map
