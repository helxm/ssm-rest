﻿/*
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
* Wijmo culture file: lv (Latvian)
*/
var wijmo;
(function (wijmo) {
    wijmo.culture = {
        Globalize: {
            name: 'lv',
            displayName: 'Latvian',
            numberFormat: {
                '.': ',',
                ',': ' ',
                percent: { pattern: ['-n%', 'n%'] },
                currency: { decimals: 2, symbol: '€', pattern: ['-$n', '$n'] }
            },
            calendar: {
                '/': '.',
                ':': ':',
                firstDay: 1,
                days: ['svētdiena', 'pirmdiena', 'otrdiena', 'trešdiena', 'ceturtdiena', 'piektdiena', 'sestdiena'],
                daysAbbr: ['Sv', 'Pr', 'Ot', 'Tr', 'Ce', 'Pk', 'Se'],
                months: ['Janvāris', 'Februāris', 'Marts', 'Aprīlis', 'Maijs', 'Jūnijs', 'Jūlijs', 'Augusts', 'Septembris', 'Oktobris', 'Novembris', 'Decembris'],
                monthsAbbr: ['Janv.', 'Febr.', 'Marts', 'Apr.', 'Maijs', 'Jūn.', 'Jūl.', 'Aug.', 'Sept.', 'Okt.', 'Nov.', 'Dec.'],
                am: ['priekšpusdienā', 'priekšpusdienā'],
                pm: ['pēcpusdienā', 'pēcpusdienā'],
                eras: ['m.ē.'],
                patterns: {
                    d: 'dd.MM.yyyy', D: 'dddd, yyyy. "gada" d. MMMM',
                    f: 'dddd, yyyy. "gada" d. MMMM HH:mm', F: 'dddd, yyyy. "gada" d. MMMM HH:mm:ss',
                    t: 'HH:mm', T: 'HH:mm:ss',
                    m: 'd. MMMM', M: 'd. MMMM',
                    y: 'yyyy. "g". MMMM', Y: 'yyyy. "g". MMMM',
                    g: 'dd.MM.yyyy HH:mm', G: 'dd.MM.yyyy HH:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} priekšmeti izvēlēts'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value} </b>({count:n0} vienumi)'
        },
        FlexGridFilter: {
            // filter
            ascending: '\u2191 Augošā secībā',
            descending: '\u2193 Dilstošā secībā',
            apply: 'Lietot',
            clear: 'Notīrīt',
            conditions: 'Filtrēt pēc stāvokļa',
            values: 'Filtrēt pēc vērtības',
            // value filter
            search: 'Meklēt',
            selectAll: 'Atlasīt visu',
            null: '(nekas)',
            // condition filter
            header: 'Rādīt vienumus, kur vērtība',
            and: 'un',
            or: 'vai',
            stringOperators: [
                { name: '(nav iestatīta)', op: null },
                { name: 'ir vienāda ar', op: 0 },
                { name: 'nav vienāda ar', op: 1 },
                { name: 'sākas ar', op: 6 },
                { name: 'beidzas ar', op: 7 },
                { name: 'satur', op: 8 },
                { name: 'nesatur', op: 9 }
            ],
            numberOperators: [
                { name: '(nav iestatīta)', op: null },
                { name: 'ir vienāda ar', op: 0 },
                { name: 'nav vienāda ar', op: 1 },
                { name: 'ir lielāka nekā', op: 2 },
                { name: 'ir lielāka nekā vai vienāda ar', op: 3 },
                { name: 'ir mazāka nekā', op: 4 },
                { name: 'ir mazāka nekā vai vienāda ar', op: 5 }
            ],
            dateOperators: [
                { name: '(nav iestatīta)', op: null },
                { name: 'ir vienāda ar', op: 0 },
                { name: 'ir pirms', op: 4 },
                { name: 'ir pēc', op: 3 }
            ],
            booleanOperators: [
                { name: '(nav iestatīta)', op: null },
                { name: 'ir vienāda ar', op: 0 },
                { name: 'nav vienāda ar', op: 1 }
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
//# sourceMappingURL=wijmo.culture.lv.js.map
