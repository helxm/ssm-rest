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
* Contains Angular 2 components for the <b>wijmo.gauge</b> module.
*
* <b>wijmo.angular2.gauge</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjGauge from 'wijmo/wijmo.angular2.gauge';
* &nbsp;
* &#64;Component({
*     directives: [wjGauge.WjLinearGauge],
*     template: '&lt;wj-linear-gauge [(value)]="amount" [isReadOnly]="false"&gt;&lt;/wj-linear-gauge&gt;',
*     selector: 'my-cmp',
* })
* export class MyCmp {
*     amount = 0;
* }</pre>
*
*/
import { ElementRef, Injector } from '@angular/core';
/**
 * Angular 2 component for the @see:LinearGauge control.
 *
 * Use the <b>wj-linear-gauge</b> component to add <b>LinearGauge</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjLinearGauge</b> component is derived from the <b>LinearGauge</b> control and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-linear-gauge</b> component may contain @see:wijmo/wijmo.angular2.gauge.WjRange
 * child directive.
*/
export declare class WjLinearGauge extends wijmo.gauge.LinearGauge {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:BulletGraph control.
 *
 * Use the <b>wj-bullet-graph</b> component to add <b>BulletGraph</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjBulletGraph</b> component is derived from the <b>BulletGraph</b> control and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-bullet-graph</b> component may contain @see:wijmo/wijmo.angular2.gauge.WjRange
 * child directive.
*/
export declare class WjBulletGraph extends wijmo.gauge.BulletGraph {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:RadialGauge control.
 *
 * Use the <b>wj-radial-gauge</b> component to add <b>RadialGauge</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjRadialGauge</b> component is derived from the <b>RadialGauge</b> control and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-radial-gauge</b> component may contain @see:wijmo/wijmo.angular2.gauge.WjRange
 * child directive.
*/
export declare class WjRadialGauge extends wijmo.gauge.RadialGauge {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:WjFlexChart @see:Range object.
 *
 * The <b>wj-range</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.gauge.WjLinearGauge, @see:wijmo/wijmo.angular2.gauge.WjRadialGauge
 * or @see:wijmo/wijmo.angular2.gauge.WjBulletGraph component.
 *
 * Use the <b>wj-range</b> component to add <b>Range</b> objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjRange</b> component is derived from the <b>Range</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjRange extends wijmo.gauge.Range {
    constructor(elRef: ElementRef, injector: Injector);
}
