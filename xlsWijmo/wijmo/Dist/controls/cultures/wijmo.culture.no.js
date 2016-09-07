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
* Wijmo culture file: no (Norwegian)
*/
var wijmo;
(function (wijmo) {
    wijmo.culture = {
        Globalize: {
            name: 'no',
            displayName: 'Norwegian',
            numberFormat: {
                '.': ',',
                ',': ' ',
                percent: { pattern: ['-n %', 'n %'] },
                currency: { decimals: 2, symbol: 'kr', pattern: ['-$ n', '$ n'] }
            },
            calendar: {
                '/': '.',
                ':': '.',
                firstDay: 1,
                days: ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'],
                daysAbbr: ['søn.', 'man.', 'tir.', 'ons.', 'tor.', 'fre.', 'lør.'],
                months: ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'],
                monthsAbbr: ['jan', 'feb', 'mar', 'apr', 'mai', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'des'],
                am: ['a.m.', 'a'],
                pm: ['p.m.', 'p'],
                eras: ['e.Kr.'],
                patterns: {
                    d: 'dd.MM.yyyy', D: 'dddd d. MMMM yyyy',
                    f: 'dddd d. MMMM yyyy HH.mm', F: 'dddd d. MMMM yyyy HH.mm.ss',
                    t: 'HH.mm', T: 'HH.mm.ss',
                    m: 'd.MMMM.', M: 'd.MMMM.',
                    y: 'MMMM yyyy', Y: 'MMMM yyyy',
                    g: 'dd.MM.yyyy HH.mm', G: 'dd.MM.yyyy HH.mm.ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} elementer valgt'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value} </b>({count:n0} artikler)'
        },
        FlexGridFilter: {
            // filter
            ascending: '\u2191 Stigende',
            descending: '\u2193 Synkende',
            apply: 'Bruk',
            clear: 'Fjern',
            conditions: 'Filtrer etter tilstand',
            values: 'Filtrer etter verdi',
            // value filter
            search: 'Søk',
            selectAll: 'Velg alle',
            null: '(ingenting)',
            // condition filter
            header: 'Vis elementer der verdien',
            and: 'og',
            or: 'eller',
            stringOperators: [
                { name: '(ikke angitt)', op: null },
                { name: 'Tilsvarer', op: 0 },
                { name: 'Tilsvarer ikke', op: 1 },
                { name: 'Begynner med', op: 6 },
                { name: 'Slutter med', op: 7 },
                { name: 'Inneholder', op: 8 },
                { name: 'Inneholder ikke', op: 9 }
            ],
            numberOperators: [
                { name: '(ikke angitt)', op: null },
                { name: 'Tilsvarer', op: 0 },
                { name: 'Tilsvarer ikke', op: 1 },
                { name: 'Er større enn', op: 2 },
                { name: 'Er større enn eller lik som', op: 3 },
                { name: 'Er mindre enn', op: 4 },
                { name: 'Er mindre enn eller lik som', op: 5 }
            ],
            dateOperators: [
                { name: '(ikke angitt)', op: null },
                { name: 'Tilsvarer', op: 0 },
                { name: 'Er før', op: 4 },
                { name: 'Er etter', op: 3 }
            ],
            booleanOperators: [
                { name: '(ikke angitt)', op: null },
                { name: 'Tilsvarer', op: 0 },
                { name: 'Tilsvarer ikke', op: 1 }
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
//# sourceMappingURL=wijmo.culture.no.js.map
