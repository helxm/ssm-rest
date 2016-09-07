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
* Wijmo culture file: bg (Bulgarian)
*/
var wijmo;
(function (wijmo) {
    wijmo.culture = {
        Globalize: {
            name: 'bg',
            displayName: 'Bulgarian',
            numberFormat: {
                '.': ',',
                ',': ' ',
                percent: { pattern: ['-n %', 'n %'] },
                currency: { decimals: 2, symbol: 'лв.', pattern: ['-n $', 'n $'] }
            },
            calendar: {
                '/': '.',
                ':': ':',
                firstDay: 1,
                days: ['неделя', 'понеделник', 'вторник', 'сряда', 'четвъртък', 'петък', 'събота'],
                daysAbbr: ['нед', 'пон', 'вт', 'ср', 'четв', 'пет', 'съб'],
                months: ['януари', 'февруари', 'март', 'април', 'май', 'юни', 'юли', 'август', 'септември', 'октомври', 'ноември', 'декември'],
                monthsAbbr: ['яну', 'фев', 'мар', 'апр', 'май', 'юни', 'юли', 'авг', 'сеп', 'окт', 'ное', 'дек'],
                am: ['', ''],
                pm: ['', ''],
                eras: ['след новата ера'],
                patterns: {
                    d: 'd.M.yyyy "г."', D: 'dd MMMM yyyy "г."',
                    f: 'dd MMMM yyyy "г." H:mm', F: 'dd MMMM yyyy "г." H:mm:ss',
                    t: 'H:mm', T: 'H:mm:ss',
                    m: 'd MMMM', M: 'd MMMM',
                    y: 'MMMM yyyy "г."', Y: 'MMMM yyyy "г."',
                    g: 'd.M.yyyy "г." H:mm', G: 'd.M.yyyy "г." H:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} позиции избрани'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value} </b>({count:n0} елементи)'
        },
        FlexGridFilter: {
            // filter
            ascending: '\u2191 Възходящо',
            descending: '\u2193 Низходящо',
            apply: 'Приложи',
            clear: 'Изчисти',
            conditions: 'Филтриране по състояние',
            values: 'Филтриране по стойност',
            // value filter
            search: 'Търсене',
            selectAll: 'Избери всички',
            null: '(нищо)',
            // condition filter
            header: 'Показване на елементи със стойност',
            and: 'И',
            or: 'Или',
            stringOperators: [
                { name: '(не е зададено)', op: null },
                { name: 'Е равно на', op: 0 },
                { name: 'Не е равно на', op: 1 },
                { name: 'Започва с', op: 6 },
                { name: 'Завършва с', op: 7 },
                { name: 'Съдържа', op: 8 },
                { name: 'Не съдържа', op: 9 }
            ],
            numberOperators: [
                { name: '(не е зададено)', op: null },
                { name: 'Е равно на', op: 0 },
                { name: 'Не е равно на', op: 1 },
                { name: 'Е по-голямо от', op: 2 },
                { name: 'Е по-голямо или равно на', op: 3 },
                { name: 'Е по-малко от', op: 4 },
                { name: 'Е по-малко или равно на', op: 5 }
            ],
            dateOperators: [
                { name: '(не е зададено)', op: null },
                { name: 'Е равно на', op: 0 },
                { name: 'Е преди', op: 4 },
                { name: 'Е след', op: 3 }
            ],
            booleanOperators: [
                { name: '(не е зададено)', op: null },
                { name: 'Е равно на', op: 0 },
                { name: 'Не е равно на', op: 1 }
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
//# sourceMappingURL=wijmo.culture.bg.js.map
