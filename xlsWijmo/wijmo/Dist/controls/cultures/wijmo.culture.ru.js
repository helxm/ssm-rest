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
* Wijmo culture file: ru (Russian)
*/
var wijmo;
(function (wijmo) {
    wijmo.culture = {
        Globalize: {
            name: 'ru',
            displayName: 'Russian',
            numberFormat: {
                '.': ',',
                ',': ' ',
                percent: { pattern: ['-n%', 'n%'] },
                currency: { decimals: 2, symbol: '₽', pattern: ['-n $', 'n $'] }
            },
            calendar: {
                '/': '.',
                ':': ':',
                firstDay: 1,
                days: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
                daysAbbr: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
                months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                monthsAbbr: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
                am: ['', ''],
                pm: ['', ''],
                eras: ['н.э.'],
                patterns: {
                    d: 'dd.MM.yyyy', D: 'd MMMM yyyy "г."',
                    f: 'd MMMM yyyy "г." H:mm', F: 'd MMMM yyyy "г." H:mm:ss',
                    t: 'H:mm', T: 'H:mm:ss',
                    m: 'd MMMM', M: 'd MMMM',
                    y: 'MMMM yyyy', Y: 'MMMM yyyy',
                    g: 'dd.MM.yyyy H:mm', G: 'dd.MM.yyyy H:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} пунктов выбрано'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value} </b>({count:n0} наименований)'
        },
        FlexGridFilter: {
            // filter
            ascending: '\u2191 По возрастанию',
            descending: '\u2193 По убыванию',
            apply: 'Применить',
            clear: 'Очистить',
            conditions: 'Фильтр по условию',
            values: 'Фильтр по значению',
            // value filter
            search: 'Поиск',
            selectAll: 'Выбрать все',
            null: '(ничего)',
            // condition filter
            header: 'Показать элементы, значение которых',
            and: 'И',
            or: 'Или',
            stringOperators: [
                { name: '(не задано)', op: null },
                { name: 'равно', op: 0 },
                { name: 'не равно', op: 1 },
                { name: 'начинается с', op: 6 },
                { name: 'заканчивается на', op: 7 },
                { name: 'содержит', op: 8 },
                { name: 'не содержит', op: 9 }
            ],
            numberOperators: [
                { name: '(не задано)', op: null },
                { name: 'равно', op: 0 },
                { name: 'не равно', op: 1 },
                { name: 'больше, чем', op: 2 },
                { name: 'больше или равно', op: 3 },
                { name: 'меньше, чем', op: 4 },
                { name: 'меньше или равно', op: 5 }
            ],
            dateOperators: [
                { name: '(не задано)', op: null },
                { name: 'равно', op: 0 },
                { name: 'до', op: 4 },
                { name: 'после', op: 3 }
            ],
            booleanOperators: [
                { name: '(не задано)', op: null },
                { name: 'равно', op: 0 },
                { name: 'не равно', op: 1 }
            ]
        },
        olap: {
            PivotFieldEditor: {
                dialogHeader: 'Настройки поля:',
                header: 'Заголовок:',
                summary: 'Итог:',
                showAs: 'Показывать как:',
                weighBy: 'Вес:',
                sort: 'Сортировка:',
                filter: 'Фильтр:',
                format: 'Формат:',
                sample: 'Пример:',
                edit: 'Редактировать...',
                clear: 'Отменить',
                ok: 'ОК',
                cancel: 'Отказаться',
                none: '(нет)',
                sorts: {
                    asc: 'По возрастанию',
                    desc: 'По убыванию'
                },
                aggs: {
                    sum: 'Сумма',
                    cnt: 'Количество',
                    avg: 'Среднее',
                    max: 'Максимум',
                    min: 'Минимум',
                    rng: 'Интервал',
                    std: 'СтдОткл',
                    var: 'Дисп',
                    stdp: 'СтдОтклГенСов',
                    varp: 'ДиспГенСов'
                },
                calcs: {
                    noCalc: 'Без вычислений',
                    dRow: 'Разница с предыдущей строкой',
                    dRowPct: 'Разница с предыдущей строкой в %',
                    dCol: 'Разница с предыдущей колонкой',
                    dColPct: 'Разница с предыдущей колонкой в %'
                },
                formats: {
                    n0: 'Целое (n0)',
                    n2: 'Дробное (n2)',
                    c: 'Валюта (c)',
                    p0: 'Процент (p0)',
                    p2: 'Процент (p2)',
                    n2c: 'Тысячи (n2,)',
                    n2cc: 'Миллионы (n2,,)',
                    n2ccc: 'Миллиарды (n2,,,)',
                    d: 'Дата (d)',
                    MMMMddyyyy: 'Месяц День Год (MMMM dd, yyyy)',
                    dMyy: 'День Месяц Год (d/M/yy)',
                    ddMyy: 'День Месяц Год (dd/M/yy)',
                    dMyyyy: 'День Месяц Год (dd/M/yyyy)',
                    MMMyyyy: 'Месяц Год (MMM yyyy)',
                    MMMMyyyy: 'Месяц Год (MMMM yyyy)',
                    yyyyQq: 'Год Квартал (yyyy "Q"q)',
                    FYEEEEQU: 'Фискальный год Квартал ("FY"EEEE "Q"U)'
                }
            },
            PivotEngine: {
                grandTotal: 'Общий итог',
                subTotal: 'Подытог'
            },
            PivotPanel: {
                fields: 'Выберите поля отчета',
                drag: 'Перетаскивайте поля между областями:',
                filters: 'Фильтры',
                cols: 'Колонки',
                rows: 'Строки',
                vals: 'Значения',
                defer: 'Отложить обновление',
                update: 'Обновить'
            },
            _ListContextMenu: {
                up: 'Вверх',
                down: 'Вниз',
                first: 'В начало',
                last: 'В конец',
                filter: 'В Фильтры',
                rows: 'В Строки',
                cols: 'В Колонки',
                vals: 'В Значения',
                remove: 'Удалить поле',
                edit: 'Настройки поля...',
                detail: 'Детализация...'
            },
            PivotChart: {
                by: 'по',
                and: 'и'
            },
            DetailDialog: {
                header: 'Детализация:',
                ok: 'ОК',
                items: '{cnt:n0} строк',
                item: '{cnt} строка',
                row: 'Строка',
                col: 'Колонка'
            }
        }
    };
})(wijmo || (wijmo = {}));
;
//# sourceMappingURL=wijmo.culture.ru.js.map
