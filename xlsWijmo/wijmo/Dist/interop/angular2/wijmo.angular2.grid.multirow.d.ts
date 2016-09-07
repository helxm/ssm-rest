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
* Contains Angular 2 components for the <b>wijmo.grid.multirow</b> module.
*
* <b>wijmo.angular2.grid.multirow</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjMultiRow from 'wijmo/wijmo.angular2.grid.multirow';
* &nbsp;
* &#64;Component({
*     directives: [wjMultiRow.WjMultiRow],
*     template: `&lt;wj-multi-row&gt;&lt;/wj-multi-row&gt;`,
*     selector: 'my-cmp',
* })
* export class MyCmp {
* }</pre>
*
*/
import { Injector, ElementRef } from '@angular/core';
/**
* Angular 2 component for the @see:MultiRow control.
*
* Use the <b>wj-multi-row</b> component to add <b>MultiRow</b> controls to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjMultiRow</b> component is derived from the <b>MultiRow</b> control and
* inherits all its properties, events and methods.
*
*
*/
export declare class WjMultiRow extends wijmo.grid.multirow.MultiRow {
    constructor(elRef: ElementRef, injector: Injector);
}
