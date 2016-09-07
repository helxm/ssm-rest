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
* Wijmo culture file: eu (Basque)
*/
var wijmo;
(function (wijmo) {
    wijmo.culture = {
        Globalize: {
            name: 'eu',
            displayName: 'Basque',
            numberFormat: {
                '.': ',',
                ',': '.',
                percent: { pattern: ['-% n', '% n'] },
                currency: { decimals: 2, symbol: '€', pattern: ['-n $', 'n $'] }
            },
            calendar: {
                '/': '/',
                ':': ':',
                firstDay: 1,
                days: ['igandea', 'astelehena', 'asteartea', 'asteazkena', 'osteguna', 'ostirala', 'larunbata'],
                daysAbbr: ['ig.', 'al.', 'ar.', 'az.', 'og.', 'or.', 'lr.'],
                months: ['Urtarrila', 'Otsaila', 'Martxoa', 'Apirila', 'Maiatza', 'Ekaina', 'Uztaila', 'Abuztua', 'Iraila', 'Urria', 'Azaroa', 'Abendua'],
                monthsAbbr: ['Urt.', 'Ots.', 'Mar.', 'Api.', 'Mai.', 'Eka.', 'Uzt.', 'Abu.', 'Ira.', 'Urr.', 'Aza.', 'Abe.'],
                am: ['AM', 'A'],
                pm: ['PM', 'P'],
                eras: ['K.o.'],
                patterns: {
                    d: 'yyyy/MM/dd', D: 'yyyy("e")"ko" MMMM d, dddd',
                    f: 'yyyy("e")"ko" MMMM d, dddd HH:mm', F: 'yyyy("e")"ko" MMMM d, dddd HH:mm:ss',
                    t: 'HH:mm', T: 'HH:mm:ss',
                    m: 'MMMM d', M: 'MMMM d',
                    y: 'yyyy("e")"ko" MMMM', Y: 'yyyy("e")"ko" MMMM',
                    g: 'yyyy/MM/dd HH:mm', G: 'yyyy/MM/dd HH:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} elementurik hautatu'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value} </b>({count:n0} gaiak)'
        },
        FlexGridFilter: {
            // filter
            ascending: '\u2191 Goranzkoa',
            descending: '\u2193 Beheranzkoa',
            apply: 'Aplikatu',
            clear: 'Garbitu',
            conditions: 'Iragazi egoeraren arabera',
            values: 'Iragazi balioaren arabera',
            // value filter
            search: 'Bilatu',
            selectAll: 'Hautatu denak',
            null: '(ezer ez)',
            // condition filter
            header: 'Erakutsi gaiak balioaren lekuan',
            and: 'Eta',
            or: 'Edo',
            stringOperators: [
                { name: '(ezarri gabe)', op: null },
                { name: 'Berdina', op: 0 },
                { name: 'Ezberdina', op: 1 },
                { name: 'Honela hazten da', op: 6 },
                { name: 'Honela bukatzen da', op: 7 },
                { name: 'Barne dauka', op: 8 },
                { name: 'Ez dauka barne', op: 9 }
            ],
            numberOperators: [
                { name: '(ezarri gabe)', op: null },
                { name: 'Berdina', op: 0 },
                { name: 'Ezberdina', op: 1 },
                { name: 'Handiagoa da', op: 2 },
                { name: 'Handiagoa edo berdina da', op: 3 },
                { name: 'Txikiagoa da', op: 4 },
                { name: 'Txikiagoa edo berdina da', op: 5 }
            ],
            dateOperators: [
                { name: '(ezarri gabe)', op: null },
                { name: 'Berdina', op: 0 },
                { name: 'Honen aurretik', op: 4 },
                { name: 'Honen ondoren', op: 3 }
            ],
            booleanOperators: [
                { name: '(ezarri gabe)', op: null },
                { name: 'Berdina', op: 0 },
                { name: 'Ezberdina', op: 1 }
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
//# sourceMappingURL=wijmo.culture.eu.js.map
