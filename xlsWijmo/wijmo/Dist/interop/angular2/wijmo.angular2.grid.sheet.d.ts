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
* Contains Angular 2 components for the <b>wijmo.grid.sheet</b> module.
*
* <b>wijmo.angular2.grid.sheet</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjSheet from 'wijmo/wijmo.angular2.grid.sheet';
* &nbsp;
* &#64;Component({
*     directives: [wjSheet.WjFlexSheet],
*     template: `&lt;wj-flex-sheet&gt;&lt;/wj-flex-sheet&gt;`,
*     selector: 'my-cmp',
* })
* export class MyCmp {
* }</pre>
*
*/
import { Injector, ElementRef, OnInit, OnChanges, SimpleChange } from '@angular/core';
/**
* Angular 2 component for the @see:FlexSheet control.
*
* Use the <b>wj-flex-sheet</b> component to add <b>FlexSheet</b> controls to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFlexSheet</b> component is derived from the <b>FlexSheet</b> control and
* inherits all its properties, events and methods.
*
* The <b>wj-flex-sheet</b> component may contain @see:wijmo/wijmo.angular2.grid.sheet.Sheet
* child component.
*/
export declare class WjFlexSheet extends wijmo.grid.sheet.FlexSheet {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
* Angular 2 component for the @see:WjFlexSheet @see:Sheet object.
*
* The <b>wj-sheet</b> component must be contained in a
* @see:wijmo/wijmo.angular2.grid.sheet.WjFlexSheet component.
*
* Use the <b>wj-sheet</b> component to add <b>Sheet</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjSheet</b> component is derived from the <b>Sheet</b> class and
* inherits all its properties, events and methods.
*/
export declare class WjSheet extends wijmo.grid.sheet.Sheet implements OnInit, OnChanges {
    boundRowCount: number;
    boundColumnCount: number;
    private _flexSheet;
    constructor(elRef: ElementRef, injector: Injector);
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): any;
    ngOnInit(): wijmo.grid.sheet.Sheet;
}
