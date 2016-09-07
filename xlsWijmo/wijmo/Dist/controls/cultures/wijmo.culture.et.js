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
* Wijmo culture file: et (Estonian)
*/
var wijmo;
(function (wijmo) {
    wijmo.culture = {
        Globalize: {
            name: 'et',
            displayName: 'Estonian',
            numberFormat: {
                '.': ',',
                ',': ' ',
                percent: { pattern: ['-n%', 'n%'] },
                currency: { decimals: 2, symbol: '€', pattern: ['-n $', 'n $'] }
            },
            calendar: {
                '/': '.',
                ':': ':',
                firstDay: 1,
                days: ['pühapäev', 'esmaspäev', 'teisipäev', 'kolmapäev', 'neljapäev', 'reede', 'laupäev'],
                daysAbbr: ['P', 'E', 'T', 'K', 'N', 'R', 'L'],
                months: ['jaanuar', 'veebruar', 'märts', 'aprill', 'mai', 'juuni', 'juuli', 'august', 'september', 'oktoober', 'november', 'detsember'],
                monthsAbbr: ['jaan', 'veebr', 'märts', 'apr', 'mai', 'juuni', 'juuli', 'aug', 'sept', 'okt', 'nov', 'dets'],
                am: ['e.k.', 'e'],
                pm: ['p.k.', 'p'],
                eras: ['m.a.j.'],
                patterns: {
                    d: 'dd.MM.yyyy', D: 'dddd, d. MMMM yyyy',
                    f: 'dddd, d. MMMM yyyy H:mm', F: 'dddd, d. MMMM yyyy H:mm.ss',
                    t: 'H:mm', T: 'H:mm.ss',
                    m: 'd. MMMM', M: 'd. MMMM',
                    y: 'MMMM yyyy', Y: 'MMMM yyyy',
                    g: 'dd.MM.yyyy H:mm', G: 'dd.MM.yyyy H:mm.ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} kirjed valitud'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value} </b>({count:n0} üksust)'
        },
        FlexGridFilter: {
            // filter
            ascending: '\u2191 Kasvav',
            descending: '\u2193 Kahanev',
            apply: 'Rakenda',
            clear: 'Tühjenda',
            conditions: 'Filtreeri tingimuse alusel',
            values: 'Filtreeri väärtuse alusel',
            // value filter
            search: 'Otsi',
            selectAll: 'Vali kõik',
            null: '(mitte midagi)',
            // condition filter
            header: 'Kuva üksused, mille puhul väärtus',
            and: 'Ja',
            or: 'Või',
            stringOperators: [
                { name: '(määramata)', op: null },
                { name: 'Võrdub', op: 0 },
                { name: 'Ei võrdu', op: 1 },
                { name: 'Algab väärtusega', op: 6 },
                { name: 'Lõpeb väärtusega', op: 7 },
                { name: 'Sisaldab', op: 8 },
                { name: 'Ei sisalda', op: 9 }
            ],
            numberOperators: [
                { name: '(määramata)', op: null },
                { name: 'Võrdub', op: 0 },
                { name: 'Ei võrdu', op: 1 },
                { name: 'On suurem kui', op: 2 },
                { name: 'On suurem kui või võrdub', op: 3 },
                { name: 'On väiksem kui', op: 4 },
                { name: 'On väiksem kui või võrdub', op: 5 }
            ],
            dateOperators: [
                { name: '(määramata)', op: null },
                { name: 'Võrdub', op: 0 },
                { name: 'On enne väärtust', op: 4 },
                { name: 'On pärast väärtust', op: 3 }
            ],
            booleanOperators: [
                { name: '(määramata)', op: null },
                { name: 'Võrdub', op: 0 },
                { name: 'Ei võrdu', op: 1 }
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
//# sourceMappingURL=wijmo.culture.et.js.map
