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
* Wijmo culture file: id (Indonesian)
*/
var wijmo;
(function (wijmo) {
    wijmo.culture = {
        Globalize: {
            name: 'id',
            displayName: 'Indonesian',
            numberFormat: {
                '.': ',',
                ',': '.',
                percent: { pattern: ['-n%', 'n%'] },
                currency: { decimals: 0, symbol: 'Rp', pattern: ['-$n', '$n'] }
            },
            calendar: {
                '/': '/',
                ':': '.',
                firstDay: 0,
                days: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
                daysAbbr: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
                months: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
                monthsAbbr: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agt', 'Sep', 'Okt', 'Nov', 'Des'],
                am: ['AM', 'A'],
                pm: ['PM', 'P'],
                eras: ['M'],
                patterns: {
                    d: 'dd/MM/yyyy', D: 'dddd, dd MMMM yyyy',
                    f: 'dddd, dd MMMM yyyy HH.mm', F: 'dddd, dd MMMM yyyy HH.mm.ss',
                    t: 'HH.mm', T: 'HH.mm.ss',
                    m: 'd MMMM', M: 'd MMMM',
                    y: 'MMMM yyyy', Y: 'MMMM yyyy',
                    g: 'dd/MM/yyyy HH.mm', G: 'dd/MM/yyyy HH.mm.ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} item yang dipilih'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value} </b>({count:n0} item)'
        },
        FlexGridFilter: {
            // filter
            ascending: '\u2191 Menaik',
            descending: '\u2193 Menurun',
            apply: 'Terapkan',
            clear: 'Bersihkan',
            conditions: 'Filter berdasarkan Kondisi',
            values: 'Filter berdasarkan Nilai',
            // value filter
            search: 'Cari',
            selectAll: 'Pilih Semua',
            null: '(tidak ada)',
            // condition filter
            header: 'Tampilkan item dengan nilai',
            and: 'Dan',
            or: 'Atau',
            stringOperators: [
                { name: '(tidak ditetapkan)', op: null },
                { name: 'Sama dengan', op: 0 },
                { name: 'Tidak sama dengan', op: 1 },
                { name: 'Dimulai dengan', op: 6 },
                { name: 'Diakhiri dengan', op: 7 },
                { name: 'Berisi', op: 8 },
                { name: 'Tidak berisi', op: 9 }
            ],
            numberOperators: [
                { name: '(tidak ditetapkan)', op: null },
                { name: 'Sama dengan', op: 0 },
                { name: 'Tidak sama dengan', op: 1 },
                { name: 'Besar dari', op: 2 },
                { name: 'Besar dari atau sama dengan', op: 3 },
                { name: 'Kurang dari', op: 4 },
                { name: 'Kurang dari atau sama dengan', op: 5 }
            ],
            dateOperators: [
                { name: '(tidak ditetapkan)', op: null },
                { name: 'Sama dengan', op: 0 },
                { name: 'Sebelum', op: 4 },
                { name: 'Setelah', op: 3 }
            ],
            booleanOperators: [
                { name: '(tidak ditetapkan)', op: null },
                { name: 'Sama dengan', op: 0 },
                { name: 'Tidak sama dengan', op: 1 }
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
//# sourceMappingURL=wijmo.culture.id.js.map
