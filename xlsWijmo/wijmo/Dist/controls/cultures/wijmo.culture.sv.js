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
* Wijmo culture file: sv (Swedish)
*/
var wijmo;
(function (wijmo) {
    wijmo.culture = {
        Globalize: {
            name: 'sv',
            displayName: 'Swedish',
            numberFormat: {
                '.': ',',
                ',': ' ',
                percent: { pattern: ['-n %', 'n %'] },
                currency: { decimals: 2, symbol: 'kr', pattern: ['-n $', 'n $'] }
            },
            calendar: {
                '/': '-',
                ':': ':',
                firstDay: 1,
                days: ['söndag', 'måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag'],
                daysAbbr: ['sön', 'mån', 'tis', 'ons', 'tor', 'fre', 'lör'],
                months: ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'],
                monthsAbbr: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
                am: ['', ''],
                pm: ['', ''],
                eras: ['A.D.'],
                patterns: {
                    d: 'yyyy-MM-dd', D: '"den "d MMMM yyyy',
                    f: '"den "d MMMM yyyy HH:mm', F: '"den "d MMMM yyyy HH:mm:ss',
                    t: 'HH:mm', T: 'HH:mm:ss',
                    m: '"den "d MMMM', M: '"den "d MMMM',
                    y: 'MMMM yyyy', Y: 'MMMM yyyy',
                    g: 'yyyy-MM-dd HH:mm', G: 'yyyy-MM-dd HH:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} objekt utvalda'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value} </b>({count:n0} objekt)'
        },
        FlexGridFilter: {
            // filter
            ascending: '\u2191 Stigande',
            descending: '\u2193 Fallande',
            apply: 'Använd',
            clear: 'Rensa',
            conditions: 'Filtrera efter villkor',
            values: 'Filtrera efter värde',
            // value filter
            search: 'Sök',
            selectAll: 'Välj alla',
            null: '(inget)',
            // condition filter
            header: 'Visa artiklar där värdet',
            and: 'Och',
            or: 'Eller',
            stringOperators: [
                { name: '(ej angett)', op: null },
                { name: 'Är lika med', op: 0 },
                { name: 'Inte är lika med', op: 1 },
                { name: 'Börjar med', op: 6 },
                { name: 'Slutar med', op: 7 },
                { name: 'Innehåller', op: 8 },
                { name: 'Inte innehåller', op: 9 }
            ],
            numberOperators: [
                { name: '(ej angett)', op: null },
                { name: 'Är lika med', op: 0 },
                { name: 'Inte är lika med', op: 1 },
                { name: 'Är större än', op: 2 },
                { name: 'Är större än eller lika med', op: 3 },
                { name: 'Är mindre än', op: 4 },
                { name: 'Är mindre än eller lika med', op: 5 }
            ],
            dateOperators: [
                { name: '(ej angett)', op: null },
                { name: 'Är lika med', op: 0 },
                { name: 'Är innan', op: 4 },
                { name: 'Är efter', op: 3 }
            ],
            booleanOperators: [
                { name: '(ej angett)', op: null },
                { name: 'Är lika med', op: 0 },
                { name: 'Inte är lika med', op: 1 }
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
//# sourceMappingURL=wijmo.culture.sv.js.map
