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
* Wijmo culture file: hi (Hindi)
*/
var wijmo;
(function (wijmo) {
    wijmo.culture = {
        Globalize: {
            name: 'hi',
            displayName: 'Hindi',
            numberFormat: {
                '.': '.',
                ',': ',',
                percent: { pattern: ['-n %', 'n %'] },
                currency: { decimals: 2, symbol: '₹', pattern: ['$ -n', '$ n'] }
            },
            calendar: {
                '/': '-',
                ':': ':',
                firstDay: 1,
                days: ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'],
                daysAbbr: ['रवि.', 'सोम.', 'मंगल.', 'बुध.', 'गुरु.', 'शुक्र.', 'शनि.'],
                months: ['जनवरी', 'फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितम्बर', 'अक्तूबर', 'नवम्बर', 'दिसम्बर'],
                monthsAbbr: ['जनवरी', 'फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितम्बर', 'अक्तूबर', 'नवम्बर', 'दिसम्बर'],
                am: ['पूर्वाह्न', 'प'],
                pm: ['अपराह्न', 'अ'],
                eras: ['A.D.'],
                patterns: {
                    d: 'dd-MM-yyyy', D: 'dd MMMM yyyy',
                    f: 'dd MMMM yyyy HH:mm', F: 'dd MMMM yyyy HH:mm:ss',
                    t: 'HH:mm', T: 'HH:mm:ss',
                    m: 'dd MMMM', M: 'dd MMMM',
                    y: 'MMMM, yyyy', Y: 'MMMM, yyyy',
                    g: 'dd-MM-yyyy HH:mm', G: 'dd-MM-yyyy HH:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
                fiscalYearOffsets: [3, 3],
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} आइटम चयनित'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value} </b>({count:n0} आइटम)'
        },
        FlexGridFilter: {
            // filter
            ascending: '\u2191 आरोही',
            descending: '\u2193 अवरोही',
            apply: 'लागू करें',
            clear: 'साफ़ करें',
            conditions: 'शर्त के अनुसार फ़िल्टर करें',
            values: 'मान के अनुसार फ़िल्टर करें',
            // value filter
            search: 'खोज',
            selectAll: 'सभी चुनें',
            null: '(कुछ नहीं)',
            // condition filter
            header: 'वे आइटम दिखाएँ जहाँ मान',
            and: 'और',
            or: 'या',
            stringOperators: [
                { name: '(सेट नहीं है)', op: null },
                { name: 'बराबर है', op: 0 },
                { name: 'बराबर नहीं है', op: 1 },
                { name: 'इससे आरंभ होता है', op: 6 },
                { name: 'इससे समाप्त होता है', op: 7 },
                { name: 'जिसमें शामिल है', op: 8 },
                { name: 'जिसमें शामिल नहीं है', op: 9 }
            ],
            numberOperators: [
                { name: '(सेट नहीं है)', op: null },
                { name: 'बराबर है', op: 0 },
                { name: 'बराबर नहीं है', op: 1 },
                { name: 'इससे अधिक है', op: 2 },
                { name: 'इससे अधिक या बराबर है', op: 3 },
                { name: 'इससे कम है', op: 4 },
                { name: 'इससे कम या बराबर है', op: 5 }
            ],
            dateOperators: [
                { name: '(सेट नहीं है)', op: null },
                { name: 'बराबर है', op: 0 },
                { name: 'इससे पहले है', op: 4 },
                { name: 'इसके बाद है', op: 3 }
            ],
            booleanOperators: [
                { name: '(सेट नहीं है)', op: null },
                { name: 'बराबर है', op: 0 },
                { name: 'बराबर नहीं है', op: 1 }
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
//# sourceMappingURL=wijmo.culture.hi.js.map
