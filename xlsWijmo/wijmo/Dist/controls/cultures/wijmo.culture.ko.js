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
* Wijmo culture file: ko (Korean)
*/
var wijmo;
(function (wijmo) {
    wijmo.culture = {
        Globalize: {
            name: 'ko',
            displayName: 'Korean',
            numberFormat: {
                '.': '.',
                ',': ',',
                percent: { pattern: ['-n %', 'n %'] },
                currency: { decimals: 0, symbol: '₩', pattern: ['-$n', '$n'] }
            },
            calendar: {
                '/': '-',
                ':': ':',
                firstDay: 0,
                days: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
                daysAbbr: ['일', '월', '화', '수', '목', '금', '토'],
                months: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
                monthsAbbr: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                am: ['오전', '오전'],
                pm: ['오후', '오후'],
                eras: ['서기'],
                patterns: {
                    d: 'yyyy-MM-dd', D: 'yyyy"년" M"월" d"일" dddd',
                    f: 'yyyy"년" M"월" d"일" dddd tt h:mm', F: 'yyyy"년" M"월" d"일" dddd tt h:mm:ss',
                    t: 'tt h:mm', T: 'tt h:mm:ss',
                    m: 'M월 d일', M: 'M월 d일',
                    y: 'yyyy"년" M"월"', Y: 'yyyy"년" M"월"',
                    g: 'yyyy-MM-dd tt h:mm', G: 'yyyy-MM-dd tt h:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} 항목 선택'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value} </b>({count:n0} 항목)'
        },
        FlexGridFilter: {
            // filter
            ascending: '\u2191 상승',
            descending: '\u2193 하락',
            apply: '적용',
            clear: '지움',
            conditions: '조건에 따른 필터',
            values: '값에 따른 필터',
            // value filter
            search: '검색',
            selectAll: '모두 선택',
            null: '(없음)',
            // condition filter
            header: '항목 표시: 값이',
            and: '및',
            or: '또는',
            stringOperators: [
                { name: '(설정되지 않음)', op: null },
                { name: '다음과 같을 경우', op: 0 },
                { name: '다음과 같지 않을 경우', op: 1 },
                { name: '다음의 값으로 시작하는 경우', op: 6 },
                { name: '다음의 값으로 끝나는 경우', op: 7 },
                { name: '다음의 값을 포함하는 경우', op: 8 },
                { name: '다음의 값을 포함하지 않는 경우', op: 9 }
            ],
            numberOperators: [
                { name: '(설정되지 않음)', op: null },
                { name: '다음과 같을 경우', op: 0 },
                { name: '다음과 같지 않을 경우', op: 1 },
                { name: '다음의 값보다 큰 경우', op: 2 },
                { name: '다음의 값보다 크거나 같은 경우', op: 3 },
                { name: '다음의 값보다 작은 경우', op: 4 },
                { name: '다음의 값보다 작거나 같은 경우', op: 5 }
            ],
            dateOperators: [
                { name: '(설정되지 않음)', op: null },
                { name: '다음과 같을 경우', op: 0 },
                { name: '다음의 값보다 앞에 있는 경우', op: 4 },
                { name: '다음의 값보다 뒤에 있는 경우', op: 3 }
            ],
            booleanOperators: [
                { name: '(설정되지 않음)', op: null },
                { name: '다음과 같을 경우', op: 0 },
                { name: '다음과 같지 않을 경우', op: 1 }
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
//# sourceMappingURL=wijmo.culture.ko.js.map
