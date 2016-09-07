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
* Contains Angular 2 components for the <b>wijmo</b> module.
*
* <b>wijmo.angular2.core</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjCore from 'wijmo/wijmo.angular2.core';
* &nbsp;
* &#64;Component({
*     directives: [wjCore.WjTooltip],
*     template: '&lt;span [wjTooltip]="'Greeting'"&gt;Hello&lt;/span&gt;',
*     selector: 'my-cmp',
* })
* export class MyCmp {
* }</pre>
*
*/
import { ElementRef, Injector, DynamicComponentLoader, EventEmitter, AfterViewInit } from '@angular/core';
import * as ngCore from '@angular/core';
/**
 * Angular 2 directive for the @see:Tooltip class.
 *
 * Use the <b>wjTooltip</b> directive to add tooltips to elements on the page.
 * The wjTooltip directive supports HTML content, smart positioning, and touch.
 *
 * The wjTooltip directive is specified as a parameter added to the
 * element that the tooltip applies to. The parameter value is the tooltip
 * text or the id of an element that contains the text. For example:
 *
 * <pre>&lt;p [wjTooltip]="'#fineprint'" &gt;
 *     Regular paragraph content...&lt;/p&gt;
 * ...
 * &lt;div id="fineprint" style="display:none"&gt;
 *   &lt;h3&gt;Important Note&lt;/h3&gt;
 *   &lt;p&gt;
 *     Data for the current quarter is estimated
 *     by pro-rating etc.&lt;/p&gt;
 * &lt;/div&gt;</pre>
 */
export declare class WjTooltip implements ngCore.OnDestroy {
    private elRef;
    private static _toolTip;
    private _toolTipText;
    constructor(elRef: ElementRef, injector: Injector);
    wjTooltip: string;
    ngOnDestroy(): void;
}
/**
 * TBD
 */
export declare class WjComponentLoader implements AfterViewInit {
    private _dcl;
    private _elementRef;
    private _component;
    private _properties;
    private _cmpRef;
    private _isViewInit;
    private _anchor;
    propertiesChange: EventEmitter<{}>;
    constructor(_dcl: DynamicComponentLoader, _elementRef: ElementRef);
    component: any;
    properties: Object;
    ngAfterViewInit(): void;
    private _createComponent();
    private _updateProperties();
    private _addPropListener(component, propName, propChange);
}
/**
 * TBD: ngBindHtml analogue
 */
export declare class WjHtmlLoader implements AfterViewInit {
    private _dcl;
    private _elementRef;
    private _components;
    private _bindingContext;
    private _bindings;
    private _cmpRef;
    private _anchor;
    html: string;
    constructor(_dcl: DynamicComponentLoader, _elementRef: ElementRef);
    components: any[];
    bindingContext: Object;
    ngAfterViewInit(): void;
    private _createComponent();
}
