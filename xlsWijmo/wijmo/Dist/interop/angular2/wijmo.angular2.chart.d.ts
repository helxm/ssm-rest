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
import { ElementRef, Injector } from '@angular/core';
/**
 * Angular 2 component for the @see:FlexChart control.
 *
 * Use the <b>wj-flex-chart</b> component to add <b>FlexChart</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexChart</b> component is derived from the <b>FlexChart</b> control and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-flex-chart</b> component may contain @see:wijmo/wijmo.angular2.chart.WjFlexChartAxis,
 * @see:wijmo/wijmo.angular2.chart.WjFlexChartSeries, @see:wijmo/wijmo.angular2.chart.WjFlexChartLegend
 * and @see:wijmo/wijmo.angular2.chart.WjFlexChartDataLabel child components.
*/
export declare class WjFlexChart extends wijmo.chart.FlexChart {
    constructor(elRef: ElementRef, injector: Injector);
    tooltipContent: any;
    labelContent: any;
}
/**
 * Angular 2 component for the @see:FlexPie control.
 *
 * Use the <b>wj-flex-pie</b> component to add <b>FlexPie</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexPie</b> component is derived from the <b>FlexPie</b> control and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-flex-pie</b> component may contain @see:wijmo/wijmo.angular2.chart.WjFlexChartLegend
 * and @see:wijmo/wijmo.angular2.chart.WjFlexPieDataLabel child components.
*/
export declare class WjFlexPie extends wijmo.chart.FlexPie {
    constructor(elRef: ElementRef, injector: Injector);
    tooltipContent: any;
    labelContent: any;
}
/**
 * Angular 2 component for the @see:WjFlexChart @see:Axis control.
 *
 * The <b>wj-flex-chart-axis</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.chart.WjFlexChart component.
 *
 * Use the <b>wj-flex-chart-axis</b> component to add <b>Axis</b> objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexChartAxis</b> component is derived from the <b>Axis</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartAxis extends wijmo.chart.Axis {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:WjFlexChart @see:Legend control.
 *
 * The <b>wj-flex-chart-legend</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.chart.WjFlexChart component.
 *
 * Use the <b>wj-flex-chart-legend</b> component to add <b>Legend</b> objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexChartLegend</b> component is derived from the <b>Legend</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartLegend extends wijmo.chart.Legend {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:WjFlexChart @see:DataLabel control.
 *
 * The <b>wj-flex-chart-data-label</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.chart.WjFlexChart component.
 *
 * Use the <b>wj-flex-chart-data-label</b> component to add <b>DataLabel</b> objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexChartDataLabel</b> component is derived from the <b>DataLabel</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartDataLabel extends wijmo.chart.DataLabel {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:WjFlexPie @see:PieDataLabel control.
 *
 * The <b>wj-flex-pie-data-label</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.chart.WjFlexPie component.
 *
 * Use the <b>wj-flex-pie-data-label</b> component to add <b>PieDataLabel</b> objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexPieDataLabel</b> component is derived from the <b>PieDataLabel</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexPieDataLabel extends wijmo.chart.PieDataLabel {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:WjFlexChart @see:Series object.
 *
 * The <b>wj-flex-chart-series</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.chart.WjFlexChart component.
 *
 * Use the <b>wj-flex-chart-series</b> component to add <b>Series</b> objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexChartSeries</b> component is derived from the <b>Series</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartSeries extends wijmo.chart.Series {
    static SiblingId: string;
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:WjFlexChart @see:LineMarker control.
 *
 * The <b>wj-flex-line-marker</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.chart.WjFlexChart component.
 *
 * Use the <b>wj-flex-line-marker</b> component to add <b>LineMarker</b> objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexChartLineMarker</b> component is derived from the <b>LineMarker</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartLineMarker extends wijmo.chart.LineMarker {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:WjFlexChart @see:DataPoint objects.
 *
 * The <b>wj-flex-chart-data-point</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.chart.WjFlexChart component.
 *
 * Use the <b>wj-flex-chart-data-point</b> component to add <b>DataPoint</b> objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexChartDataPoint</b> component is derived from the <b>DataPoint</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartDataPoint extends wijmo.chart.DataPoint {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:WjFlexChart @see:PlotArea objects.
 *
 * The <b>wj-flex-chart-plot-area</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.chart.WjFlexChart component.
 *
 * Use the <b>wj-flex-chart-plot-area</b> component to add <b>PlotArea</b> objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexChartPlotArea</b> component is derived from the <b>PlotArea</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartPlotArea extends wijmo.chart.PlotArea {
    constructor(elRef: ElementRef, injector: Injector);
}
