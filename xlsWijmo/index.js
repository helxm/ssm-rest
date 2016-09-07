(function () {
    var dataGrid = null,
        gridDiv = null,
        workbook = null,
        chart = null;

    window.addEventListener('load', function () {
        window.location.href = window.location.href.split('#')[0] + '#target';
        gridDiv = document.createElement('div');
        gridDiv.classList.add('grid');


        var target = document.querySelector('#target');

        target.addEventListener('dragenter', function (e) {
            e.preventDefault();
            this.classList.remove('hover');

        });
        target.addEventListener('dragleave', function (e) {
            e.preventDefault();
            this.classList.add('hover');
        });
        target.addEventListener('dragover', function (e) {
            e.preventDefault();
            this.classList.remove('hover');
        });

        target.addEventListener('drop', function (e) {
            e.preventDefault();
            dataGrid = new wijmo.grid.FlexGrid(gridDiv);
            chart = new wijmo.chart.FlexChart('#chart');

            handleDrop(e.dataTransfer.files[0]);
            this.appendChild(gridDiv);
            dataGrid.onCellEditEnded = function (e) {
                this.refresh(false);
            }
        });

        var btnExport = document.querySelector('#export');
        btnExport.addEventListener('click', function () {
            if (dataGrid) {
                exportExcel('file');
            }
            return false;
        })
        document.querySelector('#toggle_chart_type').addEventListener('click', function () {
            if (chart) {
chart.chartType = chart.chartType === wijmo.chart.ChartType.Column ?
    wijmo.chart.ChartType.Area :
    wijmo.chart.ChartType.Column;
            }
        })

    });

    var handleDrop = function (file) {
        var reader;
        var workbook;
        if (file) {
            reader = new FileReader;
            reader.onload = function (e) {
                workbook = new wijmo.xlsx.Workbook();
                workbook.load(reader.result);
                var collectionView = new wijmo.collections.CollectionView(getCollectionView(workbook));
                dataGrid.itemsSource = collectionView;
                chart.initialize({
                    itemsSource: collectionView,
                    bindingX: 'name',
                    options: {
                        groupWidth: 15
                    },
                    series: [
                        { name: '年龄', binding: 'age' },
                    ]
                });
            };
            reader.readAsDataURL(file);
        }
    }

    var getCollectionView = function (workbook) {
        var collectionView = [];
        if (workbook) {
            var sheet = workbook.sheets[0];
            var header = [];
            for (var i = 0, length = sheet.rows.length; i < length; i++) {

                var row = sheet.rows[i];
                var rowArray = {};
                for (var j = 0, jLength = row.cells.length; j < jLength; j++) {
                    var cell = row.cells[j];
                    if (i === 0) {
                        header.push(cell.value);
                    }
                    else {
                        rowArray[header[j]] = cell.value;
                    }
                }
                if (i !== 0) {
                    collectionView.push(rowArray);
                }
            }
        }
        return collectionView;
    }

    var exportExcel = function (fileName) {
        wijmo.grid.xlsx.FlexGridXlsxConverter.save(dataGrid,
            { includeColumnHeaders: true }, fileName);

    }
})(window);