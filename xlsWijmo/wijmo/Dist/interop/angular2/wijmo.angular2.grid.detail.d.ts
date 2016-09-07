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
import { Injector, ElementRef, ViewContainerRef, TemplateRef, Renderer } from '@angular/core';
/**
 * Angular 2 directive for @see:FlexGrid @see:DetailRow templates.
 *
 * The <b>wj-flex-grid-detail</b> directive must be specified on a <b>&lt;template&gt;</b>
 * template element contained in a <b>wj-flex-grid</b> component.
 *
 * The <b>wj-flex-grid-detail</b> directive is derived from the @see:FlexGridDetailProvider
 * class that maintains detail rows visibility, with detail rows content defined as
 * an arbitrary HTML fragment within the directive tag. The fragment may contain
 * Angular 2 bindings, components and directives.
 * The <b>row</b> and
 * <b>item</b> template variables can be used in Angular 2 bindings that refer to
 * the detail row's parent @see:Row and <b>Row.dataItem</b> objects.
 *
 */
export declare class WjFlexGridDetail extends wijmo.grid.detail.FlexGridDetailProvider {
    private static _viewRefProp;
    wjFlexGridDetail: any;
    _viewContainerRef: ViewContainerRef;
    _templateRef: TemplateRef<any>;
    _domRenderer: Renderer;
    constructor(viewContainerRef: ViewContainerRef, templateRef: TemplateRef<any>, domRenderer: Renderer, elRef: ElementRef, injector: Injector);
    private _init();
}
