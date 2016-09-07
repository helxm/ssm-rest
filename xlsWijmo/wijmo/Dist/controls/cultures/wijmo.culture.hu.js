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
* Wijmo culture file: hu (Hungarian)
*/
var wijmo;
(function (wijmo) {
    wijmo.culture = {
        Globalize: {
            name: 'hu',
            displayName: 'Hungarian',
            numberFormat: {
                '.': ',',
                ',': ' ',
                percent: { pattern: ['-n%', 'n%'] },
                currency: { decimals: 2, symbol: 'HUF', pattern: ['-n $', 'n $'] }
            },
            calendar: {
                '/': '. ',
                ':': ':',
                firstDay: 1,
                days: ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat'],
                daysAbbr: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
                months: ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december'],
                monthsAbbr: ['jan.', 'febr.', 'márc.', 'ápr.', 'máj.', 'jún.', 'júl.', 'aug.', 'szept.', 'okt.', 'nov.', 'dec.'],
                am: ['de.', 'de.'],
                pm: ['du.', 'du.'],
                eras: ['i. sz.'],
                patterns: {
                    d: 'yyyy. MM. dd.', D: 'yyyy. MMMM d., dddd',
                    f: 'yyyy. MMMM d., dddd H:mm', F: 'yyyy. MMMM d., dddd H:mm:ss',
                    t: 'H:mm', T: 'H:mm:ss',
                    m: 'MMMM d.', M: 'MMMM d.',
                    y: 'yyyy. MMMM', Y: 'yyyy. MMMM',
                    g: 'yyyy. MM. dd. H:mm', G: 'yyyy. MM. dd. H:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} kiválasztott tételek'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value} </b>({count:n0} elemek)'
        },
        FlexGridFilter: {
            // filter
            ascending: '\u2191 Növekvő',
            descending: '\u2193 Csökkenő',
            apply: 'Alkalmaz',
            clear: 'Törlés',
            conditions: 'Szűrés feltétel szerint',
            values: 'Szűrés érték szerint',
            // value filter
            search: 'Keresés',
            selectAll: 'Az összes kiválasztása',
            null: '(semmi)',
            // condition filter
            header: 'Olyan elemek megjelenítése, ahol az érték',
            and: 'És',
            or: 'Vagy',
            stringOperators: [
                { name: '(nincs megadva)', op: null },
                { name: 'Egyenlő', op: 0 },
                { name: 'Nem egyenlő', op: 1 },
                { name: 'Ezzel kezdődik', op: 6 },
                { name: 'Ezzel végződik', op: 7 },
                { name: 'Tartalmazza a következőt', op: 8 },
                { name: 'Nem tartalmazza a következőt', op: 9 }
            ],
            numberOperators: [
                { name: '(nincs megadva)', op: null },
                { name: 'Egyenlő', op: 0 },
                { name: 'Nem egyenlő', op: 1 },
                { name: 'Nagyobb, mint', op: 2 },
                { name: 'Nagyobb vagy egyenlő', op: 3 },
                { name: 'Kisebb, mint', op: 4 },
                { name: 'Kisebb vagy egyenlő', op: 5 }
            ],
            dateOperators: [
                { name: '(nincs megadva)', op: null },
                { name: 'Egyenlő', op: 0 },
                { name: 'Korábbi', op: 4 },
                { name: 'Későbbi', op: 3 }
            ],
            booleanOperators: [
                { name: '(nincs megadva)', op: null },
                { name: 'Egyenlő', op: 0 },
                { name: 'Nem egyenlő', op: 1 }
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
//# sourceMappingURL=wijmo.culture.hu.js.map
