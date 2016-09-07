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
* Contains Angular 2 components for the <b>wijmo.chart.finance</b> module.
*
* <b>wijmo.angular2.chart.finance</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjFinance from 'wijmo/wijmo.angular2.chart.finance';
* &nbsp;
* &#64;Component({
*     directives: [wjFinance.WjFinancialChart, wjFinance.WjFinancialChartSeries],
*     template: `
*       &lt;wj-financial-chart [itemsSource]="data" [bindingX]="'x'"&gt;
*           &lt;wj-financial-chart-series [binding]="'y'"&gt;&lt;/wj-financial-chart-series&gt;
*       &lt;/wj-financial-chart&gt;`,
*     selector: 'my-cmp',
* })
* export class MyCmp {
*     data: any[];
* }</pre>
*
*/
import { Injector, ElementRef } from '@angular/core';
/**
* Angular 2 component for the @see:FinancialChart control.
*
* Use the <b>wj-financial-chart</b> component to add <b>FinancialChart</b> controls to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFinancialChart</b> component is derived from the <b>FinancialChart</b> control and
* inherits all its properties, events and methods.
*
* The <b>wj-financial-chart</b> component may contain @see:wijmo/wijmo.angular2.chart.WjFlexChartAxis,
* @see:wijmo/wijmo.angular2.chart.WjFlexChartLegend, @see:wijmo/wijmo.angular2.chart.finance.WjFinancialChartSeries
* child components, as well as all the components from the <b>wijmo.angular2.chart.finance.analytics</b> module.
*/
export declare class WjFinancialChart extends wijmo.chart.finance.FinancialChart {
    constructor(elRef: ElementRef, injector: Injector);
    tooltipContent: any;
    labelContent: any;
}
/**
* Angular 2 component for the @see:WjFinancialChart @see:FinancialSeries object.
*
* The <b>wj-financial-chart-series</b> component must be contained in a
* @see:wijmo/wijmo.angular2.chart.finance.WjFinancialChart component.
*
* Use the <b>wj-financial-chart-series</b> component to add <b>FinancialSeries</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFinancialChartSeries</b> component is derived from the <b>FinancialSeries</b> class and
* inherits all its properties, events and methods.
*/
export declare class WjFinancialChartSeries extends wijmo.chart.finance.FinancialSeries {
    constructor(elRef: ElementRef, injector: Injector);
}
