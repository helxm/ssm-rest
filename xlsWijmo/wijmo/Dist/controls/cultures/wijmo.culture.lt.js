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
* Wijmo culture file: lt (Lithuanian)
*/
var wijmo;
(function (wijmo) {
    wijmo.culture = {
        Globalize: {
            name: 'lt',
            displayName: 'Lithuanian',
            numberFormat: {
                '.': ',',
                ',': ' ',
                percent: { pattern: ['-n %', 'n %'] },
                currency: { decimals: 2, symbol: '€', pattern: ['-n $', 'n $'] }
            },
            calendar: {
                '/': '-',
                ':': ':',
                firstDay: 1,
                days: ['sekmadienis', 'pirmadienis', 'antradienis', 'trečiadienis', 'ketvirtadienis', 'penktadienis', 'šeštadienis'],
                daysAbbr: ['sk', 'pr', 'an', 'tr', 'kt', 'pn', 'št'],
                months: ['sausis', 'vasaris', 'kovas', 'balandis', 'gegužė', 'birželis', 'liepa', 'rugpjūtis', 'rugsėjis', 'spalis', 'lapkritis', 'gruodis'],
                monthsAbbr: ['saus.', 'vas.', 'kov.', 'bal.', 'geg.', 'birž.', 'liep.', 'rugp.', 'rugs.', 'spal.', 'lapkr.', 'gruod.'],
                am: ['pr.p.', 'pr.p.'],
                pm: ['pop.', 'pop.'],
                eras: ['po Kr.'],
                patterns: {
                    d: 'yyyy-MM-dd', D: 'yyyy "m". MMMM d "d"., dddd',
                    f: 'yyyy "m". MMMM d "d"., dddd HH:mm', F: 'yyyy "m". MMMM d "d"., dddd HH:mm:ss',
                    t: 'HH:mm', T: 'HH:mm:ss',
                    m: 'MMMM d', M: 'MMMM d',
                    y: 'yyyy MMMM', Y: 'yyyy MMMM',
                    g: 'yyyy-MM-dd HH:mm', G: 'yyyy-MM-dd HH:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} vnt pasirinktas'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value} </b>({count:n0} elementai)'
        },
        FlexGridFilter: {
            // filter
            ascending: '\u2191 Didėjimo tvarka',
            descending: '\u2193 Mažėjimo tvarka',
            apply: 'Taikyti',
            clear: 'Valyti',
            conditions: 'Filtruoti pagal sąlygą',
            values: 'Filtruoti pagal reikšmę',
            // value filter
            search: 'Ieškoti',
            selectAll: 'Pasirinkti viską',
            null: '(nieko)',
            // condition filter
            header: 'Rodyti elementus, kur reikšmė',
            and: 'Ir',
            or: 'Arba',
            stringOperators: [
                { name: '(nenustatyta)', op: null },
                { name: 'Lygu', op: 0 },
                { name: 'Nelygu', op: 1 },
                { name: 'Prasideda', op: 6 },
                { name: 'Pasibaigia', op: 7 },
                { name: 'Apima', op: 8 },
                { name: 'Neapima', op: 9 }
            ],
            numberOperators: [
                { name: '(nenustatyta)', op: null },
                { name: 'Lygu', op: 0 },
                { name: 'Nelygu', op: 1 },
                { name: 'Didesnis nei', op: 2 },
                { name: 'Didesnis arba lygus', op: 3 },
                { name: 'Mažesnis nei', op: 4 },
                { name: 'Mažesnis arba lygus', op: 5 }
            ],
            dateOperators: [
                { name: '(nenustatyta)', op: null },
                { name: 'Lygu', op: 0 },
                { name: 'Yra prieš', op: 4 },
                { name: 'Yra po', op: 3 }
            ],
            booleanOperators: [
                { name: '(nenustatyta)', op: null },
                { name: 'Lygu', op: 0 },
                { name: 'Nelygu', op: 1 }
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
//# sourceMappingURL=wijmo.culture.lt.js.map
