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
* Contains Angular 2 components for the <b>wijmo.chart.animation</b> module.
*
* <b>wijmo.angular2.chart.animation</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjAnimation from 'wijmo/wijmo.angular2.chart.animation';
* import * as wjChart from 'wijmo/wijmo.angular2.chart';
* &nbsp;
* &#64;Component({
*     directives: [wjChart.WjFlexChart, wjAnimation.WjFlexChartAnimation, wjChart.WjFlexChartSeries],
*     template: `
*       &lt;wj-flex-chart [itemsSource]="data" [bindingX]="'x'"&gt;
*           &lt;wj-flex-chart-animation [animationMode]="'Point'"&gt;&lt;/wj-flex-chart-animation&gt;
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
* Angular 2 component for the @see:WjFlexChart @see:ChartAnimation object.
*
* The <b>wj-flex-chart-animation</b> component must be contained in a
* @see:wijmo/wijmo.angular2.chart.WjFlexChart or @see:wijmo/wijmo.angular2.chart.WjFlexPie component.
*
* Use the <b>wj-flex-chart-animation</b> component to add <b>ChartAnimation</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFlexChartAnimation</b> component is derived from the <b>ChartAnimation</b> class and
* inherits all its properties, events and methods.
*/
export declare class WjFlexChartAnimation extends wijmo.chart.animation.ChartAnimation {
    constructor(elRef: ElementRef, injector: Injector);
}
