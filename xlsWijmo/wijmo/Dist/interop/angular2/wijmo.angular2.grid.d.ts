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
import { ElementRef, ViewContainerRef, TemplateRef } from '@angular/core';
import { Injector, Renderer } from '@angular/core';
import * as ngCore from '@angular/core';
/**
 * Angular 2 component for the @see:FlexGrid control.
 *
 * Use the <b>wj-flex-grid</b> component to add <b>FlexGrid</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>. For example:
 *
 * <pre>&lt;p&gt;Here is a data bound FlexGrid control with four columns:&lt;/p&gt;
 * &lt;wj-flex-grid [itemsSource]="data"&gt;
 *   &lt;wj-flex-grid-column
 *     [header]="'Country'"
 *     [binding]="'country'"&gt;
 *   &lt;/wj-flex-grid-column&gt;
 *   &lt;wj-flex-grid-column
 *     [header]="'Sales'"
 *     [binding]="'sales'"&gt;
 *   &lt;/wj-flex-grid-column&gt;
 *   &lt;wj-flex-grid-column
 *     [header]="'Expenses'"
 *     [binding]="'expenses'"&gt;
 *   &lt;/wj-flex-grid-column&gt;
 *   &lt;wj-flex-grid-column
 *     [header]="'Downloads'"
 *     [binding]="'downloads'"&gt;
 *   &lt;/wj-flex-grid-column&gt;
 * &lt;/wj-flex-grid&gt;</pre>
 *
 * The <b>WjFlexGrid</b> component is derived from the <b>FlexGrid</b> control and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-flex-grid</b> component may contain @see:wijmo/wijmo.angular2.grid.WjFlexGridColumn,
 * @see:wijmo/wijmo.angular2.grid.WjFlexGridCellTemplate,
 * @see:wijmo/wijmo.angular2.grid.detail.WjFlexGridDetail and
 * @see:wijmo/wijmo.angular2.grid.filter.WjFlexGridFilter child components.
*/
export declare class WjFlexGrid extends wijmo.grid.FlexGrid {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:FlexGrid @see:Column control.
 *
 * The <b>wj-flex-grid-column</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.grid.WjFlexGrid component.
 *
 * Use the <b>wj-flex-grid-column</b> component to add <b>Column</b> objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexGridColumn</b> component is derived from the <b>Column</b> class and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-flex-grid-column</b> component may contain
 * @see:wijmo/wijmo.angular2.grid.WjFlexGridCellTemplate child directives.
*/
export declare class WjFlexGridColumn extends wijmo.grid.Column {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
* Defines the type of cell to which to apply the template. This value is specified in the <b>cellType</b> attribute
* of the @see:wijmo/wijmo.angular2.grid.WjFlexGridCellTemplate directive.
*/
export declare enum CellTemplateType {
    /** Defines a regular (data) cell. */
    Cell = 0,
    /** Defines a cell in edit mode. */
    CellEdit = 1,
    /** Defines a column header cell. */
    ColumnHeader = 2,
    /** Defines a row header cell. */
    RowHeader = 3,
    /** Defines a row header cell in edit mode. */
    RowHeaderEdit = 4,
    /** Defines a top left cell. */
    TopLeft = 5,
    /** Defines a group header cell in a group row. */
    GroupHeader = 6,
    /** Defines a regular cell in a group row. */
    Group = 7,
    /** Defines a cell in a new row template. */
    NewCellTemplate = 8,
}
/**
* Angular 2 directive for the @see:FlexGrid cell templates.
*
* The <b>wjFlexGridCellTemplate</b> directive defines a template for a certain
* cell type in @see:FlexGrid, should be defined on a <b>&lt;template&gt;</b> element
* and must contain a <b>cellType</b> attribute that
* specifies the @see:wijmo/wijmo.angular2.grid.CellTemplateType. Depending on the template's cell type,
* the <b>&lt;template&gt;</b> element with the <b>wjFlexGridCellTemplate</b> directive must be a child
* of either @see:wijmo/wijmo.angular2.grid.WjFlexGrid
* or @see:wijmo/wijmo.angular2.grid.WjFlexGridColumn directives.
*
* Column-specific cell templates must be contained in <b>wj-flex-grid-column</b>
* components, and cells that are not column-specific (like row header or top left cells)
* must be contained in the <b>wj-flex-grid</b> component.
*
* The <b>&lt;template&gt;</b> element with the <b>wjFlexGridCellTemplate</b> directive
* may contain an arbitrary HTML fragment with Angular 2 interpolation expressions and
* other components and directives.
*
* Bindings in HTML fragment can use the <b>cell</b> local template variable containing the cell context object,
* with the <b>col</b>, <b>row</b> and <b>item</b> properties that refer to the @see:Column,
* @see:Row and <b>Row.dataItem</b> objects pertaining to the cell.
*
* For cell types like <b>Group</b> and <b>CellEdit</b>, an additional <b>value</b>
* property containing an unformatted cell value is provided. For example, here is a
* FlexGrid control with templates for row headers and for the Country column's regular
* and column header cells:
*
* <pre>import * as wjGrid from 'wijmo/wijmo.angular2.grid';
* &nbsp;
* &#64;Component({
*     directives: [wjGrid.WjFlexGrid, wjGrid.WjFlexGridColumn, wjGrid.WjFlexGridCellTemplate],
*     template: `
* &lt;wj-flex-grid [itemsSource]="data"&gt;
*   &lt;template wjFlexGridCellTemplate [cellType]="'RowHeader'" let-cell="cell"&gt;
*     {&#8203;{cell.row.index}}
*   &lt;/template&gt;
*   &lt;template wjFlexGridCellTemplate [cellType]="'RowHeaderEdit'"&gt;
*     ...
*   &lt;/template&gt;
* &nbsp;
*   &lt;wj-flex-grid-column [header]="'Country'" [binding]="'country'"&gt;
*     &lt;template wjFlexGridCellTemplate [cellType]="'ColumnHeader'" let-cell="cell"&gt;
*       &lt;img src="resources/globe.png" /&gt;
*         {&#8203;{cell.col.header}}
*     &lt;/template&gt;
*     &lt;template wjFlexGridCellTemplate [cellType]="'Cell'" let-cell="cell"&gt;
*       &lt;img src="resources/{&#8203;{cell.item.country}}.png" /&gt;
*       {&#8203;{cell.item.country}}
*     &lt;/template&gt;
*   &lt;/wj-flex-grid-column&gt;
*   &lt;wj-flex-grid-column [header]="'Sales'" [binding]="'sales'"&gt;&lt;/wj-flex-grid-column&gt;
* &lt;/wj-flex-grid&gt;
* `,
*     selector: 'my-cmp',
* })
* export class MyCmp {
*     data: any[];
* }</pre>
*
* For more detailed information on specific cell type templates refer to the
* documentation for the @see:wijmo/wijmo.angular2.grid.CellTemplateType enumeration.
*
* The <b>wjFlexGridCellTemplate</b> directive supports the following attributes:
*
* <dl class="dl-horizontal">
*   <dt>cellType</dt>
*   <dd>
*     The <b>CellTemplateType</b> value defining the type of cell the template applies to.
*   </dd>
*   <dt>cellOverflow</dt>
*   <dd>
*     Defines the <b>style.overflow</b> property value for cells.
*   </dd>
* </dl>
*
* The <b>cellType</b> attribute takes any of the following enumerated values:
*
* <p><b>Cell</b><p>
* Defines a regular (data) cell template. Must be a child of the @see:wijmo/wijmo.angular2.grid.WjFlexGridColumn component.
* For example, this cell template shows flags in the Country column's cells:
*
* <pre>&lt;wj-flex-grid-column [header]="'Country'" [binding]="'country'"&gt;
*   &lt;template wjFlexGridCellTemplate [cellType]="'Cell'" let-cell="cell"&gt;
*     &lt;img src="resources/{&#8203;{cell.item.country}}.png" /&gt;
*     {&#8203;{cell.item.country}}
*   &lt;/template&gt;
* &lt;/wj-flex-grid-column&gt;</pre>
*
* For a hierarchical @see:FlexGrid (that is, one with the <b>childItemsPath</b> property
* specified), if no <b>Group</b> template is provided, non-header cells in group rows in
* this @see:Column also use this template.
*
* <p><b>CellEdit</b></p>
*
* Defines a template for a cell in edit mode. Must be a child of the @see:wijmo/wijmo.angular2.grid.WjFlexGridColumn component.
* This cell type has an additional <b>cell.value</b> property available for binding. It contains the
* original cell value before editing, and the updated value after editing.

* For example, here is a template that uses the Wijmo @see:InputNumber control as an editor
* for the "Sales" column:
*
* <pre>&lt;wj-flex-grid-column [header]="'Sales'" [binding]="'sales'"&gt;
*   &lt;template wjFlexGridCellTemplate [cellType]="'CellEdit'"&gt;
*     &lt;wj-input-number [(value)]="cell.value" [step]="1"&gt;&lt;/wj-input-number&gt;
*   &lt;/template&gt;
* &lt;/wj-flex-grid-column&gt;</pre>
*
* <p><b>ColumnHeader</b></p>
*
* Defines a template for a column header cell. Must be a child of the @see:wijmo/wijmo.angular2.grid.WjFlexGridColumn component.
* For example, this template adds an image to the header of the "Country" column:
*
* <pre>&lt;wj-flex-grid-column [header]="'Country'" [binding]="'country'"&gt;
*   &lt;template wjFlexGridCellTemplate [cellType]="'ColumnHeader'" let-cell="cell"&gt;
*     &lt;img src="resources/globe.png" /&gt;
*       {&#8203;{cell.col.header}}
*   &lt;/template&gt;
* &lt;/wj-flex-grid-column&gt;</pre>
*
* <p><b>RowHeader</b></p>
*
* Defines a template for a row header cell. Must be a child of the @see:wijmo/wijmo.angular2.grid.WjFlexGrid component.
* For example, this template shows row indices in the row headers:
*
* <pre>&lt;wj-flex-grid [itemsSource]="data"&gt;
*   &lt;template wjFlexGridCellTemplate [cellType]="'RowHeader'" let-cell="cell"&gt;
*     {&#8203;{cell.row.index + 1}}
*   &lt;/template&gt;
* &lt;/wj-flex-grid&gt;</pre>
*
* Note that this template is applied to a row header cell, even if it is in a row that is
* in edit mode. In order to provide an edit-mode version of a row header cell with alternate
* content, define the <b>RowHeaderEdit</b> template.
*
* <p><b>RowHeaderEdit</b></p>
*
* Defines a template for a row header cell in edit mode. Must be a child of the
* @see:wijmo/wijmo.angular2.grid.WjFlexGrid component. For example, this template shows dots in the header
* of rows being edited:
*
* <pre>&lt;wj-flex-grid [itemsSource]="data"&gt;
*   &lt;template wjFlexGridCellTemplate [cellType]="'RowHeaderEdit'"&gt;
*     ...
*   &lt;/template&gt;
* &lt;/wj-flex-grid&gt;</pre>
*
* To add the standard edit-mode indicator to cells where the <b>RowHeader</b> template
* applies, use the following <b>RowHeaderEdit</b> template:
*
* <pre>&lt;wj-flex-grid [itemsSource]="data"&gt;
*   &lt;template wjFlexGridCellTemplate [cellType]="'RowHeaderEdit'"&gt;
*     {&#8203;{&amp;#x270e;}}
*   &lt;/template&gt;
* &lt;/wj-flex-grid&gt;</pre>
*
* <p><b>TopLeft</b></p>
*
* Defines a template for the top left cell. Must be a child of the @see:wijmo/wijmo.angular2.grid.WjFlexGrid component.
* For example, this template shows a down/right glyph in the top-left cell of the grid:
*
* <pre>&lt;wj-flex-grid [itemsSource]="data"&gt;
*   &lt;template wjFlexGridCellTemplate [cellType]="'TopLeft'"&gt;
*     &lt;span class="wj-glyph-down-right"&gt;&lt;/span&gt;
*   &lt;/template&gt;
* &lt;/wj-flex-grid&gt;</pre>
*
* <p><b>GroupHeader</b></p>
*
* Defines a template for a group header cell in a @see:GroupRow, Must be a child of the @see:wijmo/wijmo.angular2.grid.WjFlexGridColumn component.
*
* The <b>cell.row</b> property contains an instance of the <b>GroupRow</b> class. If the grouping comes
* from the a @see:CollectionView, the <b>cell.item</b> property references the @see:CollectionViewGroup object.
*
* For example, this template uses a checkbox element as an expand/collapse toggle:
*
* <pre>&lt;wj-flex-grid-column [header]="'Country'" [binding]="'country'"&gt;
*   &lt;template wjFlexGridCellTemplate [cellType]="'GroupHeader'" let-cell="cell"&gt;
*     &lt;input type="checkbox" [(ngModel)]="cell.row.isCollapsed"/&gt;
*     {&#8203;{cell.item.name}} ({&#8203;{cell.item.items.length}} items)
*   &lt;/template&gt;
* &lt;/wj-flex-grid-column&gt;</pre>
*
* <p><b>Group</b></p>
*
* Defines a template for a regular cell (not a group header) in a @see:GroupRow. Must be a child of the
* @see:wijmo/wijmo.angular2.grid.WjFlexGridColumn component. This cell type has an additional <b>cell.value</b> property available for
* binding. In cases where columns have the <b>aggregate</b> property specified, it contains the unformatted
* aggregate value.
*
* For example, this template shows an aggregate's value and kind for group row cells in the "Sales"
* column:
*
* <pre>&lt;wj-flex-grid-column [header]="'Sales'" [binding]="'sales'" [aggregate]="'Avg'"&gt;
*   &lt;template wjFlexGridCellTemplate [cellType]="'Group'" let-cell="cell"&gt;
*     Average: {&#8203;{cell.value | number:'1.0-0'}}
*   &lt;/template&gt;
* &lt;/wj-flex-grid-column&gt;</pre>
*
* <p><b>NewCellTemplate</b><p>
* Defines a cell in a new row template. Must be a child of the @see:wijmo/wijmo.angular2.grid.WjFlexGridColumn component.
* Note that the <b>cell.item</b> property is undefined for this type of a cell.
* For example, this cell template shows a placeholder in the Date column's cell in the "new row" item:
*
* <pre>&lt;wj-flex-grid-column [header]="'Date'" [binding]="'date'"&gt;
*   &lt;template wjFlexGridCellTemplate [cellType]="'NewCellTemplate'"&gt;
*     Enter a date here
*   &lt;/template&gt;
* &lt;/wj-flex-grid-column&gt;</pre>
*/
export declare class WjFlexGridCellTemplate implements ngCore.OnInit, ngCore.OnDestroy {
    viewContainerRef: ViewContainerRef;
    templateRef: TemplateRef<any>;
    elRef: ElementRef;
    private domRenderer;
    wjFlexGridCellTemplate: any;
    cellTypeStr: string;
    cellOverflow: string;
    cellType: CellTemplateType;
    valuePaths: Object;
    grid: WjFlexGrid;
    column: WjFlexGridColumn;
    ownerControl: any;
    constructor(viewContainerRef: ViewContainerRef, templateRef: TemplateRef<any>, elRef: ElementRef, domRenderer: Renderer, injector: Injector);
    static _getTemplContextProp(templateType: CellTemplateType): string;
    ngOnInit(): void;
    ngOnDestroy(): void;
    _instantiateTemplate(parent: HTMLElement): {
        viewRef: ngCore.EmbeddedViewRef<any>;
        rootElement: Element;
    };
    private _attachToControl();
}
