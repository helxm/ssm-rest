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
* Contains Angular 2 components for the <b>wijmo.grid.filter</b> module.
*
* <b>wijmo.angular2.grid.filter</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjFilter from 'wijmo/wijmo.angular2.grid.filter';
* import * as wjGrid from 'wijmo/wijmo.angular2.grid';
* &nbsp;
* &#64;Component({
*     directives: [wjGrid.WjFlexGrid, wjFilter.WjFlexGridFilter],
*     template: `
*       &lt;wj-flex-grid [itemsSource]="data"&gt;
*           &lt;wj-flex-grid-filter [filterColumns]="['country', 'expenses']"&gt;&lt;/wj-flex-grid-filter&gt;
*       &lt;/wj-flex-grid&gt;`,
*     selector: 'my-cmp',
* })
* export class MyCmp {
*     data: any[];
* }</pre>
*
*/
import { Injector, ElementRef } from '@angular/core';
/**
    * Angular 2 component for the @see:FlexGrid @see:FlexGridFilter object.
    *
    * The <b>wj-flex-grid-filter</b> component must be contained in a
    * @see:wijmo/wijmo.angular2.grid.WjFlexGrid component.
    *
    * Use the <b>wj-flex-grid-filter</b> component to add <b>FlexGridFilter</b> objects to your
    * Angular 2 applications. For details about Angular 2 markup syntax, see
    * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
    *
    * The <b>WjFlexGridFilter</b> component is derived from the <b>FlexGridFilter</b> class and
    * inherits all its properties, events and methods.
*/
export declare class WjFlexGridFilter extends wijmo.grid.filter.FlexGridFilter {
    constructor(elRef: ElementRef, injector: Injector);
}
