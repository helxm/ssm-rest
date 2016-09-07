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
* Contains Angular 2 components for the <b>wijmo.chart.interaction</b> module.
*
* <b>wijmo.angular2.chart.interaction</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjInteraction from 'wijmo/wijmo.angular2.chart.interaction';
* import * as wjChart from 'wijmo/wijmo.angular2.chart';
* &nbsp;
* &#64;Component({
*     directives: [wjChart.WjFlexChart, wjInteraction.WjFlexChartRangeSelector, wjChart.WjFlexChartSeries],
*     template: `
*       &lt;wj-flex-chart [itemsSource]="data" [bindingX]="'x'"&gt;
*           &lt;wj-flex-chart-range-selector&gt;&lt;/wj-flex-chart-range-selector&gt;
*           &lt;wj-flex-chart-series [binding]="'y'"&gt;&lt;/wj-flex-chart-series&gt;
*       &lt;/wj-flex-chart&gt;`,
*     selector: 'my-cmp',
* })
* export class MyCmp {
*     data: any[];
* }</pre>
*
*/
import { Injector, ElementRef } from '@angular/core';
/**
* Angular 2 component for the @see:WjFlexChart @see:RangeSelector object.
*
* The <b>wj-flex-chart-range-selector</b> component must be contained in a
* @see:wijmo/wijmo.angular2.chart.WjFlexChart component.
*
* Use the <b>wj-flex-chart-range-selector</b> component to add <b>RangeSelector</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFlexChartRangeSelector</b> component is derived from the <b>RangeSelector</b> class and
* inherits all its properties, events and methods.
*/
export declare class WjFlexChartRangeSelector extends wijmo.chart.interaction.RangeSelector {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
* Angular 2 component for the @see:WjFlexChart @see:ChartGestures object.
*
* The <b>wj-flex-chart-gestures</b> component must be contained in a
* @see:wijmo/wijmo.angular2.chart.WjFlexChart component.
*
* Use the <b>wj-flex-chart-gestures</b> component to add <b>ChartGestures</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFlexChartGestures</b> component is derived from the <b>ChartGestures</b> class and
* inherits all its properties, events and methods.
*/
export declare class WjFlexChartGestures extends wijmo.chart.interaction.ChartGestures {
    constructor(elRef: ElementRef, injector: Injector);
}
