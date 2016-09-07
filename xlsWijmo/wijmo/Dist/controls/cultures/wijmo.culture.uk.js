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
* Wijmo culture file: uk (Ukrainian)
*/
var wijmo;
(function (wijmo) {
    wijmo.culture = {
        Globalize: {
            name: 'uk',
            displayName: 'Ukrainian',
            numberFormat: {
                '.': ',',
                ',': ' ',
                percent: { pattern: ['-n%', 'n%'] },
                currency: { decimals: 2, symbol: '₴', pattern: ['-n$', 'n$'] }
            },
            calendar: {
                '/': '.',
                ':': ':',
                firstDay: 1,
                days: ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п\'ятниця', 'субота'],
                daysAbbr: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
                months: ['січень', 'лютий', 'березень', 'квітень', 'травень', 'червень', 'липень', 'серпень', 'вересень', 'жовтень', 'листопад', 'грудень'],
                monthsAbbr: ['Січ', 'Лют', 'Бер', 'Кві', 'Тра', 'Чер', 'Лип', 'Сер', 'Вер', 'Жов', 'Лис', 'Гру'],
                am: ['', ''],
                pm: ['', ''],
                eras: ['н.е.'],
                patterns: {
                    d: 'dd.MM.yyyy', D: 'd MMMM yyyy" р."',
                    f: 'd MMMM yyyy" р." H:mm', F: 'd MMMM yyyy" р." H:mm:ss',
                    t: 'H:mm', T: 'H:mm:ss',
                    m: 'd MMMM', M: 'd MMMM',
                    y: 'MMMM yyyy" р."', Y: 'MMMM yyyy" р."',
                    g: 'dd.MM.yyyy H:mm', G: 'dd.MM.yyyy H:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} пунктів обраний'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value} </b>({count:n0} елементи)'
        },
        FlexGridFilter: {
            // filter
            ascending: '\u2191 У порядку зростання',
            descending: '\u2193 У порядку спадання',
            apply: 'Застосувати',
            clear: 'Очистити',
            conditions: 'Фільтрувати за умовою',
            values: 'Фільтрувати за значенням',
            // value filter
            search: 'Пошук',
            selectAll: 'Шукати все',
            null: '(нічого)',
            // condition filter
            header: 'Показати елементи зі значенням',
            and: 'Та',
            or: 'Або',
            stringOperators: [
                { name: '(не встановлено)', op: null },
                { name: 'Дорівнює', op: 0 },
                { name: 'Не дорівнює', op: 1 },
                { name: 'Починається з', op: 6 },
                { name: 'Закінчується на', op: 7 },
                { name: 'Містить', op: 8 },
                { name: 'Не містить', op: 9 }
            ],
            numberOperators: [
                { name: '(не встановлено)', op: null },
                { name: 'Дорівнює', op: 0 },
                { name: 'Не дорівнює', op: 1 },
                { name: 'Більше', op: 2 },
                { name: 'Більше або дорівнює', op: 3 },
                { name: 'Менше', op: 4 },
                { name: 'Менше або дорівнює', op: 5 }
            ],
            dateOperators: [
                { name: '(не встановлено)', op: null },
                { name: 'Дорівнює', op: 0 },
                { name: 'До', op: 4 },
                { name: 'Після', op: 3 }
            ],
            booleanOperators: [
                { name: '(не встановлено)', op: null },
                { name: 'Дорівнює', op: 0 },
                { name: 'Не дорівнює', op: 1 }
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
//# sourceMappingURL=wijmo.culture.uk.js.map
