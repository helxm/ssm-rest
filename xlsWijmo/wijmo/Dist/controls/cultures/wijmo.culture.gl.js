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
* Wijmo culture file: gl (Galician)
*/
var wijmo;
(function (wijmo) {
    wijmo.culture = {
        Globalize: {
            name: 'gl',
            displayName: 'Galician',
            numberFormat: {
                '.': ',',
                ',': '.',
                percent: { pattern: ['-n%', 'n%'] },
                currency: { decimals: 2, symbol: '€', pattern: ['-$n', '$n'] }
            },
            calendar: {
                '/': '/',
                ':': ':',
                firstDay: 1,
                days: ['domingo', 'luns', 'martes', 'mércores', 'xoves', 'venres', 'sábado'],
                daysAbbr: ['dom', 'lun', 'mar', 'mér', 'xov', 'ven', 'sáb'],
                months: ['Xaneiro', 'Febreiro', 'Marzo', 'Abril', 'Maio', 'Xuño', 'Xullo', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Decembro'],
                monthsAbbr: ['Xan', 'Feb', 'Mar', 'Abr', 'Mai', 'Xuñ', 'Xul', 'Ago', 'Set', 'Out', 'Nov', 'Dec'],
                am: ['a.m.', 'a'],
                pm: ['p.m.', 'p'],
                eras: ['d.C.'],
                patterns: {
                    d: 'dd/MM/yyyy', D: 'dddd dd MMMM yyyy',
                    f: 'dddd dd MMMM yyyy HH:mm', F: 'dddd dd MMMM yyyy HH:mm:ss',
                    t: 'HH:mm', T: 'HH:mm:ss',
                    m: 'd MMMM', M: 'd MMMM',
                    y: 'MMMM yyyy', Y: 'MMMM yyyy',
                    g: 'dd/MM/yyyy HH:mm', G: 'dd/MM/yyyy HH:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} elementos seleccionados'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value} </b>({count:n0} elementos)'
        },
        FlexGridFilter: {
            // filter
            ascending: '\u2191 Ascendente',
            descending: '\u2193 Descendente',
            apply: 'Aplicar',
            clear: 'Borrar',
            conditions: 'Filtrar por condición',
            values: 'Filtrar por valor',
            // value filter
            search: 'Buscar',
            selectAll: 'Seleccionar todo',
            null: '(nada)',
            // condition filter
            header: 'Mostrar elementos onde o valor',
            and: 'E',
            or: 'Ou',
            stringOperators: [
                { name: '(non establecido)', op: null },
                { name: 'Igual a', op: 0 },
                { name: 'Non igual a', op: 1 },
                { name: 'Comeza por', op: 6 },
                { name: 'Finaliza con', op: 7 },
                { name: 'Contén', op: 8 },
                { name: 'Non contén', op: 9 }
            ],
            numberOperators: [
                { name: '(non establecido)', op: null },
                { name: 'Igual a', op: 0 },
                { name: 'Non igual a', op: 1 },
                { name: 'É maior que', op: 2 },
                { name: 'É maior que ou igual a', op: 3 },
                { name: 'É menor que', op: 4 },
                { name: 'É menor que ou igual a', op: 5 }
            ],
            dateOperators: [
                { name: '(non establecido)', op: null },
                { name: 'Igual a', op: 0 },
                { name: 'É anterior a', op: 4 },
                { name: 'É posterior a', op: 3 }
            ],
            booleanOperators: [
                { name: '(non establecido)', op: null },
                { name: 'Igual a', op: 0 },
                { name: 'Non igual a', op: 1 }
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
//# sourceMappingURL=wijmo.culture.gl.js.map
