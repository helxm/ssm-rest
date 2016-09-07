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
* Wijmo culture file: pt (Portuguese)
*/
var wijmo;
(function (wijmo) {
    wijmo.culture = {
        Globalize: {
            name: 'pt',
            displayName: 'Portuguese',
            numberFormat: {
                '.': ',',
                ',': '.',
                percent: { pattern: ['-n%', 'n%'] },
                currency: { decimals: 2, symbol: 'R$', pattern: ['-$ n', '$ n'] }
            },
            calendar: {
                '/': '/',
                ':': ':',
                firstDay: 0,
                days: ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'],
                daysAbbr: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
                months: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
                monthsAbbr: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
                am: ['', ''],
                pm: ['', ''],
                eras: ['d.C.'],
                patterns: {
                    d: 'dd/MM/yyyy', D: 'dddd, d" de "MMMM" de "yyyy',
                    f: 'dddd, d" de "MMMM" de "yyyy HH:mm', F: 'dddd, d" de "MMMM" de "yyyy HH:mm:ss',
                    t: 'HH:mm', T: 'HH:mm:ss',
                    m: 'd "de" MMMM', M: 'd "de" MMMM',
                    y: 'MMMM" de "yyyy', Y: 'MMMM" de "yyyy',
                    g: 'dd/MM/yyyy HH:mm', G: 'dd/MM/yyyy HH:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} itens selecionados'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value} </b>({count:n0} itens)'
        },
        FlexGridFilter: {
            // filter
            ascending: '\u2191 Crescente',
            descending: '\u2193 Decrescente',
            apply: 'Aplicar',
            clear: 'Remover',
            conditions: 'Condições',
            values: 'Valores',
            // value filter
            search: 'Filtro',
            selectAll: 'Selecionar todos',
            null: '(nulo)',
            // condition filter
            header: 'Mostrar itens com valor',
            and: 'E',
            or: 'Ou',
            stringOperators: [
                { name: '(nenhum)', op: null },
                { name: 'Igual a', op: 0 },
                { name: 'Diferente de', op: 1 },
                { name: 'Que inicia com', op: 6 },
                { name: 'Que termina em', op: 7 },
                { name: 'Que contém', op: 8 },
                { name: 'Que não contém', op: 9 }
            ],
            numberOperators: [
                { name: '(nenhum)', op: null },
                { name: 'Igual a', op: 0 },
                { name: 'Diferente de', op: 1 },
                { name: 'Maior que', op: 2 },
                { name: 'Maior ou igual a', op: 3 },
                { name: 'Menor que', op: 4 },
                { name: 'Menor ou igual a', op: 5 }
            ],
            dateOperators: [
                { name: '(nenhum)', op: null },
                { name: 'Igual a', op: 0 },
                { name: 'Antes de', op: 4 },
                { name: 'Depois de', op: 3 }
            ],
            booleanOperators: [
                { name: '(nenhum)', op: null },
                { name: 'Igual a', op: 0 },
                { name: 'Diferente de', op: 1 }
            ]
        },
        olap: {
            PivotFieldEditor: {
                dialogHeader: 'Configurações do Campo:',
                header: 'Título:',
                summary: 'Resumo:',
                showAs: 'Mostrar como:',
                weighBy: 'Pesar por:',
                sort: 'Ordem:',
                filter: 'Filtro:',
                format: 'Formato:',
                sample: 'Exemplo:',
                edit: 'Editar...',
                clear: 'Remover',
                ok: 'OK',
                cancel: 'Cancelar',
                none: '(nenhum)',
                sorts: {
                    asc: 'Crescente',
                    desc: 'Decrescente'
                },
                aggs: {
                    sum: 'Soma',
                    cnt: 'Contagem',
                    avg: 'Média',
                    max: 'Máximo',
                    min: 'Mínimo',
                    rng: 'Intervalo',
                    std: 'DesvPad',
                    var: 'Var',
                    stdp: 'DesvPadp',
                    varp: 'Varp'
                },
                calcs: {
                    noCalc: 'Sem Cálculo',
                    dRow: 'Diferença da linha anterior',
                    dRowPct: 'Diferença % da linha anterior',
                    dCol: 'Diferença da coluna anterior',
                    dColPct: 'Diferença % da coluna anterior'
                },
                formats: {
                    n0: 'Número Inteiro (n0)',
                    n2: 'Número (n2)',
                    c: 'Moeda (c)',
                    p0: 'Porcentagem (p0)',
                    p2: 'Porcentagem (p2)',
                    n2c: 'Milhares (n2,)',
                    n2cc: 'Milhões (n2,,)',
                    n2ccc: 'Bilhões (n2,,,)',
                    d: 'Data (d)',
                    MMMMddyyyy: 'Mês Dia Ano (MMMM dd, yyyy)',
                    dMyy: 'Dia Mês Ano (d/M/yy)',
                    ddMyy: 'Dia Mês Ano (dd/M/yy)',
                    dMyyyy: 'Dia Mês Ano (dd/M/yyyy)',
                    MMMyyyy: 'Mês Ano (MMM yyyy)',
                    MMMMyyyy: 'Mês Ano (MMMM yyyy)',
                    yyyyQq: 'Ano Trimestre (yyyy "Q"q)',
                    FYEEEEQU: 'Ano Fiscal Trimestre ("FY"EEEE "Q"U)'
                }
            },
            PivotEngine: {
                grandTotal: 'Total Geral',
                subTotal: 'Subtotal'
            },
            PivotPanel: {
                fields: 'Escolha os campos para adicionar ao relatório',
                drag: 'Arraste os campos entre as áreas abaixo:',
                filters: 'Filtros',
                cols: 'Colunas',
                rows: 'Linhas',
                vals: 'Valores',
                defer: 'Suspender Atualizacões',
                update: 'Atualizar'
            },
            _ListContextMenu: {
                up: 'Mover para cima',
                down: 'Mover para baixo',
                first: 'Mover para o início',
                last: 'Mover para o final',
                filter: 'Mover para Filtro de Relatório',
                rows: 'Mover para Rótulos de Linha',
                cols: 'Mover para Rótulos de Coluna',
                vals: 'Mover para Valores',
                remove: 'Remover o Campo',
                edit: 'Configurar o Campo...',
                detail: 'Exibir Detalhes...'
            },
            PivotChart: {
                by: 'por',
                and: 'e'
            },
            DetailDialog: {
                header: 'Detalhes:',
                ok: 'OK',
                items: '{cnt:n0} itens',
                item: '{cnt} item',
                row: 'Linha',
                col: 'Coluna'
            }
        }
    };
})(wijmo || (wijmo = {}));
;
//# sourceMappingURL=wijmo.culture.pt.js.map
