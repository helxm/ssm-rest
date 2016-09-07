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
* Contains Angular 2 components for the <b>wijmo.olap</b> module.
*
* <b>wijmo.angular2.olap</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjOlap from 'wijmo/wijmo.angular2.olap';
* &nbsp;
* &#64;Component({
*     directives: [wjOlap.WjPivotGrid],
*     template: '&lt;wj-pivot-grid [itemsSource]="data"&gt;&lt;/wj-pivot-grid&gt;',
*     selector: 'my-cmp',
* })
* export class MyCmp {
*     data: any[];
* }</pre>
*
*/
import { Injector, ElementRef } from '@angular/core';
/**
* Angular 2 component for the @see:PivotGrid control.
*
* Use the <b>wj-pivot-grid</b> component to add <b>PivotGrid</b> controls to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjPivotGrid</b> component is derived from the <b>PivotGrid</b> control and
* inherits all its properties, events and methods.
*/
export declare class WjPivotGrid extends wijmo.olap.PivotGrid {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
* Angular 2 component for the @see:PivotChart control.
*
* Use the <b>wj-pivot-chart</b> component to add <b>PivotChart</b> controls to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjPivotChart</b> component is derived from the <b>PivotChart</b> control and
* inherits all its properties, events and methods.
*/
export declare class WjPivotChart extends wijmo.olap.PivotChart {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
* Angular 2 component for the @see:PivotPanel control.
*
* Use the <b>wj-pivot-panel</b> component to add <b>PivotPanel</b> controls to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjPivotPanel</b> component is derived from the <b>PivotPanel</b> control and
* inherits all its properties, events and methods.
*/
export declare class WjPivotPanel extends wijmo.olap.PivotPanel {
    constructor(elRef: ElementRef, injector: Injector);
}
