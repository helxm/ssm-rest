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
* Contains Angular 2 components for the <b>wijmo.chart.hierarchical</b> module.
*
* <b>wijmo.angular2.chart.hierarchical</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjHierarchical from 'wijmo/wijmo.angular2.chart.hierarchical';
* &nbsp;
* &#64;Component({
*     directives: [wjHierarchical.WjSunburst],
*     template: `
*       &lt;wj-sunburst [itemsSource]="data" [binding]="'y'" [bindingX]="'x'"&gt;
*       &lt;/wj-sunburst&gt;`,
*     selector: 'my-cmp',
* })
* export class MyCmp {
*     data: any[];
* }</pre>
*
*/
import { Injector, ElementRef } from '@angular/core';
/**
* Angular 2 component for the @see:Sunburst control.
*
* Use the <b>wj-sunburst</b> component to add <b>Sunburst</b> controls to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjSunburst</b> component is derived from the <b>Sunburst</b> control and
* inherits all its properties, events and methods.
*
* The <b>wj-sunburst</b> component may contain @see:wijmo/wijmo.angular2.chart.WjFlexChartLegend
* and @see:wijmo/wijmo.angular2.chart.WjFlexPieDataLabel child components.
*/
export declare class WjSunburst extends wijmo.chart.hierarchical.Sunburst {
    constructor(elRef: ElementRef, injector: Injector);
    tooltipContent: any;
    labelContent: any;
}
