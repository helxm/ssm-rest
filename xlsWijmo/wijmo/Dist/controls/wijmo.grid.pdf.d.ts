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
/**
* Defines the @see:FlexGridPdfConverter class used to export the @see:FlexGrid to PDF.
*/
declare module wijmo.grid.pdf {
    /**
    * Specifies how the grid content should be scaled to fit the page.
    */
    enum ScaleMode {
        /**
        * Render the grid in actual size, breaking into pages as needed.
        */
        ActualSize = 0,
        /**
        * Scale the grid, so that it fits the page width.
        */
        PageWidth = 1,
        /**
        * Scale the grid, so that it fits on a single page.
        */
        SinglePage = 2,
    }
    /**
    * Specifies whether the whole grid or just a section should be rendered.
    */
    enum ExportMode {
        /**
        * Exports all the data from grid.
        */
        All = 0,
        /**
        * Exports the current selection only.
        */
        Selection = 1,
    }
    /**
    * Represents the look and feel of a cell.
    */
    interface ICellStyle {
        /**
        * Represents the background color of a cell.
        */
        backgroundColor?: string;
        /**
        * Represents the border color of a cell.
        */
        borderColor?: string;
        /**
        * Represents the font of a cell.
        */
        font?: wijmo.pdf.PdfFont;
    }
    /**
    * Represents the look and feel of the @see:FlexGrid being exported.
    */
    interface IFlexGridStyle {
        /**
        * Specifies the cell style applied to cells within a @see:FlexGrid.
        */
        cellStyle?: ICellStyle;
        /**
        * Represents the cell style applied to odd-numbered rows of the @see:FlexGrid.
        */
        altCellStyle?: ICellStyle;
        /**
        * Represents the cell style applied to grouped rows of the @see:FlexGrid.
        */
        groupCellStyle?: ICellStyle;
        /**
        * Represents the cell style applied to row headers and column headers of
        * the @see:FlexGrid.
        */
        headerCellStyle?: ICellStyle;
    }
    /**
    * Represents the settings used by the @see:FlexGridPdfConverter.draw and
    * @see:FlexGridPdfConverter.drawToPosition methods.
    */
    interface IFlexGridDrawSettings {
        /**
        * Represents an array of custom fonts that will be embedded into the document.
        *
        * This sample illustrates how to setup the FlexGridPdfConverter to use two custom
        * fonts, Cuprum-Bold.ttf and Cuprum-Regular.ttf. The first one is applied to the
        * header cells only, while the second one is applied to all the remaining cells.
        *
        * <pre>
        *	wijmo.grid.pdf.FlexGridPdfConverter.export(flex, fileName, {
        *		embeddedFonts: [
        *			{
        *				source: 'resources/ttf/Cuprum-Bold.ttf',
        *				name: 'cuprum',
        *				style: 'normal',
        *				weight: 'bold'
        *			},
        *			{
        *				source: 'resources/ttf/Cuprum-Regular.ttf',
        *				name: 'cuprum',
        *				style: 'normal',
        *				weight: 'normal'
        *			}
        *		],
        *		styles: {
        *			cellStyle: {
        *				font: {
        *					family: 'cuprum'
        *				}
        *			},
        *			headerCellStyle: {
        *				font: {
        *					weight: 'bold'
        *				}
        *			}
        *		}
        *	});
        </pre>
        */
        embeddedFonts?: wijmo.pdf.IPdfFontFile[];
        /**
        * Determines the export mode.
        */
        exportMode?: ExportMode;
        /**
        * Determines the maximum number of pages to export.
        */
        maxPages?: number;
        /**
        * Indicates whether merged values should be repeated across pages when the merged range
        * is split on multiple pages.
        */
        repeatMergedValuesAcrossPages?: boolean;
        /**
        * Indicates whether star-sized columns widths should be recalculated against the PDF page
        * width instead of using the grid's width.
        */
        recalculateStarWidths?: boolean;
        /**
        * Represents the look and feel of an exported @see:FlexGrid.
        */
        styles?: IFlexGridStyle;
    }
    /**
    * Represents the settings used by the @see:FlexGridPdfConverter.export method.
    */
    interface IFlexGridExportSettings extends IFlexGridDrawSettings {
        /**
        * Determines the scale mode.
        */
        scaleMode?: ScaleMode;
        /**
        * Represents the options of the underlying @see:PdfDocument.
        */
        documentOptions?: any;
    }
    /**
    * Provides a functionality to export the @see:FlexGrid to PDF.
    */
    class FlexGridPdfConverter {
        private static BorderWidth;
        private static DefaultDrawSettings;
        private static DefaultExportSettings;
        /**
        * Draws the @see:FlexGrid to an existing @see:PdfDocument at the
        * (0, @wijmo.pdf.PdfDocument.y) coordinates.
        *
        * If width is not specified, then grid will be rendered in actual size,
        * breaking into pages as needed. If height is not specified, then grid will be
        * scaled to fit the width, breaking into pages vertically as needed.
        * If both, width and height are determined, then grid will be scaled to fit
        * the specified rectangle without any page breaks.
        *
        * <pre>
        *	var doc = new wijmo.pdf.PdfDocument({
        *		ended: function (sender, args) {
        *			wijmo.pdf.saveBlob(args.blob, 'FlexGrid.pdf');
        *		}
        *	});
        *
        *	wijmo.grid.pdf.FlexGridPdfConverter.draw(grid, doc, null, null, {
        *		maxPages: 10,
        *		styles: {
        *			cellStyle: {
        *				backgroundColor: '#ffffff',
        *				borderColor: '#c6c6c6'
        *			},
        *			headerCellStyle: {
        *				backgroundColor: '#eaeaea'
        *			}
        *		}
        *	});
        * </pre>
        *
        * @param flex The @see:FlexGrid instance to export.
        * @param doc The @see:PdfDocument instance to draw in.
        * @param width The width of the drawing area in points.
        * @param height The height of the drawing area in points.
        * @param settings The draw settings.
        */
        static draw(flex: wijmo.grid.FlexGrid, doc: wijmo.pdf.PdfDocument, width?: number, height?: number, settings?: IFlexGridDrawSettings): void;
        /**
        * Draws the @see:FlexGrid to an existing @see:PdfDocument instance at the
        * specified coordinates.
        *
        * If width is not specified, then grid will be rendered in actual size
        * without any page breaks.
        * If height is not specified, then grid will be scaled to fit the width
        * without any page breaks.
        * If both, width and height are determined, then grid will be scaled to fit
        * the specified rectangle without any page breaks.
        *
        * <pre>
        *	var doc = new wijmo.pdf.PdfDocument({
        *		ended: function (sender, args) {
        *			wijmo.pdf.saveBlob(args.blob, 'FlexGrid.pdf');
        *		}
        *	});
        *
        *	wijmo.grid.pdf.FlexGridPdfConverter.drawToPosition(grid, doc, new wijmo.Point(0, 0), null, null, {
        *		maxPages: 10,
        *		styles: {
        *			cellStyle: {
        *				backgroundColor: '#ffffff',
        *				borderColor: '#c6c6c6'
        *			},
        *			headerCellStyle: {
        *				backgroundColor: '#eaeaea'
        *			}
        *		}
        *	});
        * </pre>
        *
        * @param flex The @see:FlexGrid instance to export.
        * @param doc The @see:PdfDocument instance to draw in.
        * @param point The position to draw at, in points.
        * @param width The width of the drawing area in points.
        * @param height The height of the drawing area in points.
        * @param settings The draw settings.
        */
        static drawToPosition(flex: wijmo.grid.FlexGrid, doc: wijmo.pdf.PdfDocument, point: Point, width?: number, height?: number, settings?: IFlexGridDrawSettings): void;
        /**
        * Exports the @see:FlexGrid to PDF.
        *
        * <pre>
        *	wijmo.grid.pdf.FlexGridPdfConverter.export(grid, 'FlexGrid.pdf', {
        *		scaleMode: wijmo.grid.pdf.ScaleMode.PageWidth;
        *		maxPages: 10,
        *		styles: {
        *			cellStyle: {
        *				backgroundColor: '#ffffff',
        *				borderColor: '#c6c6c6'
        *			},
        *			headerCellStyle: {
        *				backgroundColor: '#eaeaea'
        *			}
        *		},
        *		documentOptions: {
        *			info: {
        *				title: 'Sample'
        *			}
        *		}
        *	});
        * </pre>
        *
        * @param flex The @see:FlexGrid instance to export.
        * @param fileName Name of the file to export.
        * @param settings The export settings.
        */
        static export(flex: wijmo.grid.FlexGrid, fileName: string, settings?: IFlexGridExportSettings): void;
        private static _draw(flex, doc, point, width, height, settings);
        private static _getScaleFactor(grid, scaleMode, rect);
        private static _getPages(flex, ranges, rect, settings, isPositionedMode, scaleFactor);
    }
}

