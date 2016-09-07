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
* Wijmo culture file: fi (Finnish)
*/
var wijmo;
(function (wijmo) {
    wijmo.culture = {
        Globalize: {
            name: 'fi',
            displayName: 'Finnish',
            numberFormat: {
                '.': ',',
                ',': ' ',
                percent: { pattern: ['-n %', 'n %'] },
                currency: { decimals: 2, symbol: '€', pattern: ['-n $', 'n $'] }
            },
            calendar: {
                '/': '.',
                ':': '.',
                firstDay: 1,
                days: ['sunnuntaina', 'maanantaina', 'tiistaina', 'keskiviikkona', 'torstaina', 'perjantaina', 'lauantaina'],
                daysAbbr: ['su', 'ma', 'ti', 'ke', 'to', 'pe', 'la'],
                months: ['tammikuu', 'helmikuu', 'maaliskuu', 'huhtikuu', 'toukokuu', 'kesäkuu', 'heinäkuu', 'elokuu', 'syyskuu', 'lokakuu', 'marraskuu', 'joulukuu'],
                monthsAbbr: ['tammi', 'helmi', 'maalis', 'huhti', 'touko', 'kesä', 'heinä', 'elo', 'syys', 'loka', 'marras', 'joulu'],
                am: ['ap.', 'a'],
                pm: ['ip.', 'i'],
                eras: ['jKr.'],
                patterns: {
                    d: 'd.M.yyyy', D: 'dddd d. MMMM yyyy',
                    f: 'dddd d. MMMM yyyy H.mm', F: 'dddd d. MMMM yyyy H.mm.ss',
                    t: 'H.mm', T: 'H.mm.ss',
                    m: 'd. MMMM', M: 'd. MMMM',
                    y: 'MMMM yyyy', Y: 'MMMM yyyy',
                    g: 'd.M.yyyy H.mm', G: 'd.M.yyyy H.mm.ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} kohdetta valittu'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value} </b>({count:n0} tuotteet)'
        },
        FlexGridFilter: {
            // filter
            ascending: '\u2191 Nouseva',
            descending: '\u2193 Laskeva',
            apply: 'Käytä',
            clear: 'Tyhjennä',
            conditions: 'Suodata kunnon mukaan',
            values: 'Suodata arvon mukaan',
            // value filter
            search: 'Haku',
            selectAll: 'Valitse kaikki',
            null: '(ei mitään)',
            // condition filter
            header: 'Näytä kohteet, joissa arvo',
            and: 'Ja',
            or: 'Tai',
            stringOperators: [
                { name: '(ei asetettu)', op: null },
                { name: 'On yhtä kuin', op: 0 },
                { name: 'On eri suuri kuin', op: 1 },
                { name: 'Alkaa merkillä', op: 6 },
                { name: 'Päättyy merkkiin', op: 7 },
                { name: 'Sisältää', op: 8 },
                { name: 'Ei sisällä', op: 9 }
            ],
            numberOperators: [
                { name: '(ei asetettu)', op: null },
                { name: 'On yhtä kuin', op: 0 },
                { name: 'On eri suuri kuin', op: 1 },
                { name: 'On suurempi kuin', op: 2 },
                { name: 'On suurempi tai yhtä suuri kuin', op: 3 },
                { name: 'On pienempi kuin', op: 4 },
                { name: 'On pienempi tai yhtä suuri kuin', op: 5 }
            ],
            dateOperators: [
                { name: '(ei asetettu)', op: null },
                { name: 'On yhtä kuin', op: 0 },
                { name: 'On ennen', op: 4 },
                { name: 'On jälkeen', op: 3 }
            ],
            booleanOperators: [
                { name: '(ei asetettu)', op: null },
                { name: 'On yhtä kuin', op: 0 },
                { name: 'On eri suuri kuin', op: 1 }
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
//# sourceMappingURL=wijmo.culture.fi.js.map
