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
* Contains Angular 2 components for the <b>wijmo.chart.annotation</b> module.
*
* <b>wijmo.angular2.chart.annotation</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjAnnotation from 'wijmo/wijmo.angular2.chart.annotation';
* import * as wjChart from 'wijmo/wijmo.angular2.chart';
* &nbsp;
* &#64;Component({
*     directives: [wjChart.WjFlexChart, wjAnnotation.WjFlexChartAnnotationLayer,
*            wjAnnotation.WjFlexChartAnnotationCircle, wjChart.WjFlexChartSeries],
*     template: `
*       &lt;wj-flex-chart [itemsSource]="data" [bindingX]="'x'"&gt;
*           &lt;wj-flex-chart-series [binding]="'y'"&gt;&lt;/wj-flex-chart-series&gt;
*           &lt;wj-flex-chart-annotation-layer&gt;&lt;/wj-flex-chart-annotation-layer&gt;
*               &lt;wj-flex-chart-annotation-circle [radius]="40" [point]="{x: 250, y: 150}"&gt;&lt;/wj-flex-chart-annotation-circle&gt;
*           &lt;/wj-flex-chart-annotation-layer&gt;
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
* Angular 2 component for the @see:WjFlexChart @see:AnnotationLayer object.
*
* The <b>wj-flex-chart-annotation-layer</b> component must be contained in a
* @see:wijmo/wijmo.angular2.chart.WjFlexChart component.
*
* Use the <b>wj-flex-chart-annotation-layer</b> component to add <b>AnnotationLayer</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFlexChartAnnotationLayer</b> component is derived from the <b>AnnotationLayer</b> class and
* inherits all its properties, events and methods.
*
* The <b>wj-flex-chart-annotation-layer</b> component may contain child components derived from the
* @see:AnnotationBase class.
*/
export declare class WjFlexChartAnnotationLayer extends wijmo.chart.annotation.AnnotationLayer {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:WjFlexChart @see:Text annotation objects.
 *
 * The <b>wj-flex-chart-annotation-text</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.chart.annotation.WjFlexChartAnnotationLayer component.
 *
 * Use the <b>wj-flex-chart-annotation-text</b> component to add <b>Text</b> annotation objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexChartAnnotationText</b> component is derived from the <b>Text</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartAnnotationText extends wijmo.chart.annotation.Text {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:WjFlexChart @see:Ellipse annotation objects.
 *
 * The <b>wj-flex-chart-annotation-ellipse</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.chart.annotation.WjFlexChartAnnotationLayer component.
 *
 * Use the <b>wj-flex-chart-annotation-ellipse</b> component to add <b>Ellipse</b> annotation objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexChartAnnotationEllipse</b> component is derived from the <b>Ellipse</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartAnnotationEllipse extends wijmo.chart.annotation.Ellipse {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:WjFlexChart @see:Rectangle annotation objects.
 *
 * The <b>wj-flex-chart-annotation-rectangle</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.chart.annotation.WjFlexChartAnnotationLayer component.
 *
 * Use the <b>wj-flex-chart-annotation-rectangle</b> component to add <b>Rectangle</b> annotation objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexChartAnnotationRectangle</b> component is derived from the <b>Rectangle</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartAnnotationRectangle extends wijmo.chart.annotation.Rectangle {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:WjFlexChart @see:Line annotation objects.
 *
 * The <b>wj-flex-chart-annotation-line</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.chart.annotation.WjFlexChartAnnotationLayer component.
 *
 * Use the <b>wj-flex-chart-annotation-line</b> component to add <b>Line</b> annotation objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexChartAnnotationLine</b> component is derived from the <b>Line</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartAnnotationLine extends wijmo.chart.annotation.Line {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:WjFlexChart @see:Polygon annotation objects.
 *
 * The <b>wj-flex-chart-annotation-polygon</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.chart.annotation.WjFlexChartAnnotationLayer component.
 *
 * Use the <b>wj-flex-chart-annotation-polygon</b> component to add <b>Polygon</b> annotation objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexChartAnnotationPolygon</b> component is derived from the <b>Polygon</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartAnnotationPolygon extends wijmo.chart.annotation.Polygon {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:WjFlexChart @see:Circle annotation objects.
 *
 * The <b>wj-flex-chart-annotation-circle</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.chart.annotation.WjFlexChartAnnotationLayer component.
 *
 * Use the <b>wj-flex-chart-annotation-circle</b> component to add <b>Circle</b> annotation objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexChartAnnotationCircle</b> component is derived from the <b>Circle</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartAnnotationCircle extends wijmo.chart.annotation.Circle {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:WjFlexChart @see:Square annotation objects.
 *
 * The <b>wj-flex-chart-annotation-square</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.chart.annotation.WjFlexChartAnnotationLayer component.
 *
 * Use the <b>wj-flex-chart-annotation-square</b> component to add <b>Square</b> annotation objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexChartAnnotationSquare</b> component is derived from the <b>Square</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartAnnotationSquare extends wijmo.chart.annotation.Square {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:WjFlexChart @see:Image annotation objects.
 *
 * The <b>wj-flex-chart-annotation-image</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.chart.annotation.WjFlexChartAnnotationLayer component.
 *
 * Use the <b>wj-flex-chart-annotation-image</b> component to add <b>Image</b> annotation objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexChartAnnotationImage</b> component is derived from the <b>Image</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartAnnotationImage extends wijmo.chart.annotation.Image {
    constructor(elRef: ElementRef, injector: Injector);
}
