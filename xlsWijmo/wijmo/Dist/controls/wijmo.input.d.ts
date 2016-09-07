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
declare module wijmo.input {
    /**
     * DropDown control (abstract).
     *
     * Contains an input element and a button used to show or hide the drop-down.
     *
     * Derived classes must override the _createDropDown method to create whatever
     * editor they want to show in the drop down area (a list of items, a calendar,
     * a color editor, etc).
     */
    class DropDown extends Control {
        _tbx: HTMLInputElement;
        _elRef: HTMLElement;
        _btn: HTMLElement;
        _dropDown: HTMLElement;
        _showBtn: boolean;
        _autoExpand: boolean;
        _cssClass: string;
        _oldText: string;
        /**
         * Gets or sets the template used to instantiate @see:DropDown controls.
         */
        static controlTemplate: string;
        /**
         * Initializes a new instance of the @see:DropDown class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the text shown on the control.
         */
        text: string;
        /**
         * Gets the HTML input element hosted by the control.
         *
         * Use this property in situations where you want to customize the
         * attributes of the input element.
         */
        inputElement: HTMLInputElement;
        /**
         * Gets or sets the string shown as a hint when the control is empty.
         */
        placeholder: string;
        /**
         * Gets or sets a value that indicates whether the drop down is currently visible.
         */
        isDroppedDown: boolean;
        /**
         * Gets the drop down element shown when the @see:isDroppedDown
         * property is set to true.
         */
        dropDown: HTMLElement;
        /**
         * Gets or sets a CSS class name to add to the control's drop-down element.
         *
         * This property is useful when styling the drop-down element, because it is
         * shown as a child of the document body rather than as a child of the control
         * itself, which prevents using CSS selectors based on the parent control.
         */
        dropDownCssClass: string;
        /**
         * Gets or sets a value that indicates whether the control should display a drop-down button.
         */
        showDropDownButton: boolean;
        /**
         * Gets or sets a value that indicates whether the control should automatically expand the
         * selection to whole words/numbers when the control is clicked.
         */
        autoExpandSelection: boolean;
        /**
         * Sets the focus to the control and selects all its content.
         */
        selectAll(): void;
        /**
         * Occurs when the value of the @see:text property changes.
         */
        textChanged: Event;
        /**
         * Raises the @see:textChanged event.
         */
        onTextChanged(e?: EventArgs): void;
        /**
         * Occurs before the drop down is shown or hidden.
         */
        isDroppedDownChanging: Event;
        /**
         * Raises the @see:isDroppedDownChanging event.
         */
        onIsDroppedDownChanging(e: CancelEventArgs): boolean;
        /**
         * Occurs after the drop down is shown or hidden.
         */
        isDroppedDownChanged: Event;
        /**
         * Raises the @see:isDroppedDownChanged event.
         */
        onIsDroppedDownChanged(e?: EventArgs): void;
        onGotFocus(e?: EventArgs): void;
        onLostFocus(e?: EventArgs): void;
        containsFocus(): boolean;
        dispose(): void;
        refresh(fullUpdate?: boolean): void;
        _handleResize(): void;
        _expandSelection(): void;
        _getCharType(text: string, pos: number): number;
        _keydown(e: KeyboardEvent): void;
        _btnclick(e: MouseEvent): void;
        _setText(text: string, fullMatch: boolean): void;
        _updateBtn(): void;
        _createDropDown(): void;
        _commitText(): void;
        _updateDropDown(): void;
    }
}

declare module wijmo.input {
    /**
     * The @see:Calendar control displays a one-month calendar and allows users
     * to select a date.
     *
     * You may use the @see:min and @see:max properties to restrict the range
     * of dates that the user can select.
     *
     * For details about using the @see:min and @see:max properties, please see the
     * <a href="static/minMax.html">Using the min and max properties</a> topic.
     *
     * Use the @see:value property to get or set the currently selected date.
     *
     * The example below shows a <b>Date</b> value with date and time information
     * using an @see:InputDate and an @see:InputTime control. Notice how both controls
     * are bound to the same controller variable, and each edits the appropriate information
     * (either date or time). The example also shows a @see:Calendar control that allows
     * users to select the date with a single click.
     *
     * @fiddle:vgc3Y
     */
    class Calendar extends Control {
        private _tblHdr;
        private _tblMonth;
        private _tblYear;
        private _tdMonth;
        private _spMonth;
        private _btnPrev;
        private _btnToday;
        private _btnNext;
        private _value;
        private _currMonth;
        private _firstDay;
        private _min;
        private _max;
        private _fdw;
        private _itemFormatter;
        private _itemValidator;
        /**
         * Gets or sets the template used to instantiate @see:Calendar controls.
         */
        static controlTemplate: string;
        /**
         * Initializes a new instance of the @see:Calendar class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the currently selected date.
         */
        value: Date;
        /**
         * Gets or sets the earliest date that the user can select in the calendar.
         *
         * For details about using the @see:min and @see:max properties, please see the
         * <a href="static/minMax.html">Using the min and max properties</a> topic.
         */
        min: Date;
        /**
         * Gets or sets the latest date that the user can select in the calendar.
         *
         * For details about using the @see:min and @see:max properties, please see the
         * <a href="static/minMax.html">Using the min and max properties</a> topic.
         */
        max: Date;
        /**
         * Gets or sets a value that represents the first day of the week,
         * the one displayed in the first column of the calendar.
         *
         * Setting this property to null causes the calendar to use the default
         * for the current culture. In the English culture, the first day of the
         * week is Sunday (0); in most European cultures, the first day of the
         * week is Monday (1).
         */
        firstDayOfWeek: number;
        /**
         * Gets or sets the month displayed in the calendar.
         */
        displayMonth: Date;
        /**
         * Gets or sets a value indicating whether the control displays the header
         * area with the current month and navigation buttons.
         */
        showHeader: boolean;
        /**
         * Gets or sets a value indicating whether the calendar displays a month or a year.
         */
        monthView: boolean;
        /**
         * Gets or sets a formatter function to customize dates in the calendar.
         *
         * The formatter function can add any content to any date. It allows
         * complete customization of the appearance and behavior of the calendar.
         *
         * If specified, the function takes two parameters:
         * <ul>
         *     <li>the date being formatted </li>
         *     <li>the HTML element that represents the date</li>
         * </ul>
         *
         * For example, the code below shows weekends with a yellow background:
         * <pre>
         * calendar.itemFormatter = function(date, element) {
         *   var day = date.getDay();
         *   element.style.backgroundColor = day == 0 || day == 6 ? 'yellow' : '';
         * }
         * </pre>
         */
        itemFormatter: Function;
        /**
         * Gets or sets a validator function to determine whether dates are valid for selection.
         *
         * If specified, the validator function should take one parameter representing the
         * date to be tested, and should return false if the date is invalid and should not
         * be selectable.
         *
         * For example, the code below shows weekends in a disabled state and prevents users
         * from selecting those dates:
         * <pre>
         * calendar.itemValidator = function(date) {
         *   var weekday = date.getDay();
         *   return weekday != 0 && weekday != 6;
         * }
         * </pre>
         */
        itemValidator: Function;
        /**
         * Occurs after a new date is selected.
         */
        valueChanged: Event;
        /**
         * Raises the @see:valueChanged event.
         */
        onValueChanged(e?: EventArgs): void;
        /**
         * Occurs after the @see:displayMonth property changes.
         */
        displayMonthChanged: Event;
        /**
         * Raises the @see:displayMonthChanged event.
         */
        onDisplayMonthChanged(e?: EventArgs): void;
        /**
         * Occurs when an element representing a day in the calendar has been created.
         *
         * This event can be used to format calendar items for display. It is similar
         * in purpose to the @see:itemFormatter property, but has the advantage
         * of allowing multiple independent handlers.
         *
         * For example, the code below uses the @see:formatItem event to disable weekends
         * so they appear dimmed in the calendar:
         *
         * <pre>// disable Sundays and Saturdays
         * calendar.formatItem.addHandler(function (s, e) {
         *   var day = e.data.getDay();
         *   if (day == 0 || day == 6) {
         *     wijmo.addClass(e.item, 'wj-state-disabled');
         *   }
         * });</pre>
         */
        formatItem: Event;
        /**
         * Raises the @see:formatItem event.
         *
         * @param e @see:FormatItemEventArgs that contains the event data.
         */
        onFormatItem(e: FormatItemEventArgs): void;
        /**
         * Refreshes the control.
         *
         * @param fullUpdate Indicates whether to update the control layout as well as the content.
         */
        refresh(fullUpdate?: boolean): void;
        private _isValidDay(value);
        private _isValidMonth(value);
        private _isValidDate(value);
        private _createChildren();
        private _click(e);
        private _getCellIndex(tbl, cell);
        private _keydown(e);
        private _getMonth(date);
        private _addDays(days);
        private _addMonths(months);
        private _navigateDate(month, skip);
    }
}

declare module wijmo.input {
    /**
     * The @see:ColorPicker control allows users to select a color by clicking
     * on panels to adjust color channels (hue, saturation, brightness, alpha).
     *
     * Use the @see:value property to get or set the currently selected color.
     *
     * The control is used as a drop-down for the @see:InputColor control.
     *
     * @fiddle:84xvsz90
     */
    class ColorPicker extends Control {
        _hsb: number[];
        _alpha: number;
        _value: string;
        _palette: string[];
        _eSB: HTMLElement;
        _eHue: HTMLElement;
        _eAlpha: HTMLElement;
        _cSB: HTMLElement;
        _cHue: HTMLElement;
        _cAlpha: HTMLElement;
        _ePal: HTMLElement;
        _ePreview: HTMLElement;
        _eText: HTMLElement;
        _htDown: Element;
        /**
         * Gets or sets the template used to instantiate @see:ColorPicker controls.
         */
        static controlTemplate: string;
        static _tplCursor: string;
        /**
         * Initializes a new instance of the @see:ColorPicker class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets a value indicating whether the @see:ColorPicker allows users
         * to edit the color's alpha channel (transparency).
         */
        showAlphaChannel: boolean;
        /**
         * Gets or sets a value indicating whether the @see:ColorPicker shows a string representation
         * of the current color.
         */
        showColorString: boolean;
        /**
         * Gets or sets the currently selected color.
         */
        value: string;
        /**
         * Gets or sets an array that contains the colors in the palette.
         *
         * The palette contains ten colors, represented by an array with
         * ten strings. The first two colors are usually white and black.
         */
        palette: string[];
        /**
         * Occurs when the color changes.
         */
        valueChanged: Event;
        /**
         * Raises the @see:valueChanged event.
         */
        onValueChanged(): void;
        _mouseDown(e: MouseEvent): void;
        _mouseMove(e: MouseEvent): void;
        _mouseUp(e: MouseEvent): void;
        _updateColor(): void;
        _updatePalette(): void;
        _makePalEntry(color: Color, margin: any): HTMLElement;
        _updatePanels(): void;
        _getTargetPanel(e: MouseEvent): HTMLElement;
    }
}

declare module wijmo.input {
    /**
     * The @see:ListBox control displays a list of items which may contain
     * plain text or HTML, and allows users to select items with the mouse or
     * the keyboard.
     *
     * Use the @see:selectedIndex property to determine which item is currently
     * selected.
     *
     * You can populate a @see:ListBox using an array of strings or you can use
     * an array of objects, in which case the @see:displayPath property determines
     * which object property is displayed on the list.
     *
     * To display HTML rather than plain text, set the @see:isContentHtml property
     * to true.
     *
     * The example below creates a @see:ListBox control and populates it using
     * a 'countries' array. The control updates its @see:selectedIndex and
     * @see:selectedItem properties as the user moves the selection.
     *
     * @fiddle:8HnLx
     */
    class ListBox extends Control {
        _items: any;
        _cv: collections.ICollectionView;
        _itemFormatter: Function;
        _pathDisplay: string;
        _pathValue: string;
        _pathChecked: string;
        _html: boolean;
        _checkedItems: any[];
        _checking: boolean;
        _search: string;
        _toSearch: number;
        /**
         * Initializes a new instance of the @see:ListBox class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Refreshes the list.
         */
        refresh(): void;
        /**
         * Gets or sets the array or @see:ICollectionView object that contains the list items.
         */
        itemsSource: any;
        /**
         * Gets the @see:ICollectionView object used as the item source.
         */
        collectionView: collections.ICollectionView;
        /**
         * Gets or sets a value indicating whether items contain plain text or HTML.
         */
        isContentHtml: boolean;
        /**
         * Gets or sets a function used to customize the values shown on the list.
         * The function takes two arguments, the item index and the default text or html, and
         * returns the new text or html to display.
         *
         * If the formatting function needs a scope (i.e. a meaningful 'this'
         * value), then remember to set the filter using the 'bind' function to
         * specify the 'this' object. For example:
         *
         * <pre>
         *   listBox.itemFormatter = customItemFormatter.bind(this);
         *   function customItemFormatter(index, content) {
         *     if (this.makeItemBold(index)) {
         *       content = '&lt;b&gt;' + content + '&lt;/b&gt;';
         *     }
         *     return content;
         *   }
         * </pre>
         */
        itemFormatter: Function;
        /**
         * Gets or sets the name of the property to use as the visual representation of the items.
         */
        displayMemberPath: string;
        /**
         * Gets or sets the name of the property used to get the @see:selectedValue
         * from the @see:selectedItem.
         */
        selectedValuePath: string;
        /**
         * Gets or sets the name of the property used to control the checkboxes
         * placed next to each item.
         *
         * Use this property to create multi-select lisboxes.
         * When an item is checked or unchecked, the control raises the @see:itemChecked event.
         * Use the @see:selectedItem property to retrieve the item that was checked or unchecked,
         * or use the @see:checkedItems property to retrieve the list of items that are currently
         * checked.
         */
        checkedMemberPath: string;
        /**
         * Gets the string displayed for the item at a given index.
         *
         * The string may be plain text or HTML, depending on the setting
         * of the @see:isContentHtml property.
         *
         * @param index The index of the item.
         */
        getDisplayValue(index: number): string;
        /**
         * Gets the text displayed for the item at a given index (as plain text).
         *
         * @param index The index of the item.
         */
        getDisplayText(index: number): string;
        /**
         * Gets or sets the index of the currently selected item.
         */
        selectedIndex: number;
        /**
         * Gets or sets the item that is currently selected.
         */
        selectedItem: any;
        /**
         * Gets or sets the value of the @see:selectedItem obtained using the @see:selectedValuePath.
         */
        selectedValue: any;
        /**
         * Gets or sets the maximum height of the list.
         */
        maxHeight: number;
        /**
         * Highlights the selected item and scrolls it into view.
         */
        showSelection(): void;
        /**
         * Gets the checked state of an item on the list.
         *
         * This method is applicable only on multi-select listboxes
         * (see the @see:checkedMemberPath property).
         *
         * @param index Item index.
         */
        getItemChecked(index: number): boolean;
        /**
         * Sets the checked state of an item on the list.
         *
         * This method is applicable only on multi-select listboxes
         * (see the @see:checkedMemberPath property).
         *
         * @param index Item index.
         * @param checked Item's new checked state.
         */
        setItemChecked(index: number, checked: boolean): void;
        /**
         * Toggles the checked state of an item on the list.
         * This method is applicable only to multi-select listboxes
         * (see the @see:checkedMemberPath property).
         *
         * @param index Item index.
         */
        toggleItemChecked(index: number): void;
        /**
         * Gets or sets an array containing the items that are currently checked.
         */
        checkedItems: any[];
        /**
         * Occurs when the value of the @see:selectedIndex property changes.
         */
        selectedIndexChanged: Event;
        /**
         * Raises the @see:selectedIndexChanged event.
         */
        onSelectedIndexChanged(e?: EventArgs): void;
        /**
         * Occurs when the list of items changes.
         */
        itemsChanged: Event;
        /**
         * Raises the @see:itemsChanged event.
         */
        onItemsChanged(e?: EventArgs): void;
        /**
         * Occurs before the list items are generated.
         */
        loadingItems: Event;
        /**
         * Raises the @see:loadingItems event.
         */
        onLoadingItems(e?: EventArgs): void;
        /**
         * Occurs after the list items are generated.
         */
        loadedItems: Event;
        /**
         * Raises the @see:loadedItems event.
         */
        onLoadedItems(e?: EventArgs): void;
        /**
         * Occurs when the current item is checked or unchecked by the user.
         *
         * This event is raised when the @see:checkedMemberPath is set to the name of a
         * property to add checkboxes to each item in the control.
         *
         * Use the @see:selectedItem property to retrieve the item that was checked or
         * unchecked.
         */
        itemChecked: Event;
        /**
         * Raises the @see:itemCheched event.
         */
        onItemChecked(e?: EventArgs): void;
        /**
         * Occurs when the value of the @see:checkedItems property changes.
         */
        checkedItemsChanged: Event;
        /**
         * Raises the @see:checkedItemsChanged event.
         */
        onCheckedItemsChanged(e?: EventArgs): void;
        /**
         * Occurs when an element representing a list item has been created.
         *
         * This event can be used to format list items for display. It is similar
         * in purpose to the @see:itemFormatter property, but has the advantage
         * of allowing multiple independent handlers.
         */
        formatItem: Event;
        /**
         * Raises the @see:formatItem event.
         *
         * @param e @see:FormatItemEventArgs that contains the event data.
         */
        onFormatItem(e: FormatItemEventArgs): void;
        _setItemChecked(index: number, checked: boolean, notify?: boolean): void;
        private _cvCollectionChanged(sender, e);
        private _cvCurrentChanged(sender, e);
        private _populateList();
        private _click(e);
        private _keydown(e);
        private _keypress(e);
        private _getCheckbox(index);
        _populateSelectElement(hostElement: HTMLElement): void;
    }
    /**
     * Provides arguments for the @see:formatItem event.
     */
    class FormatItemEventArgs extends EventArgs {
        _index: number;
        _data: any;
        _item: HTMLElement;
        /**
         * Initializes a new instance of the @see:FormatItemEventArgs class.
         *
         * @param index Index of the item being formatted.
         * @param data Data item being formatted.
         * @param item Element that represents the list item to be formatted.
         */
        constructor(index: number, data: any, item: HTMLElement);
        /**
         * Gets the index of the data item in the list.
         */
        index: number;
        /**
         * Gets the data item being formatted.
         */
        data: any;
        /**
         * Gets a reference to the element that represents the list item to be formatted.
         */
        item: HTMLElement;
    }
}

declare module wijmo.input {
    /**
     * The @see:ComboBox control allows users to pick strings from lists.
     *
     * The control automatically completes entries as the user types, and allows users
     * to show a drop-down list with the items available.
     *
     * Use the @see:selectedIndex or the @see:text properties to determine which
     * item is currently selected.
     *
     * The @see:isEditable property determines whether users can enter values that
     * are not present in the list.
     *
     * The example below creates a @see:ComboBox control and populates it with a list
     * of countries. The @see:ComboBox searches for the country as the user types.
     * The <b>isEditable</b> property is set to false, so the user is forced to
     * select one of the items in the list.
     *
     * The example also shows how to create and populate a @see:ComboBox using
     * an HTML <b>&lt;select;&gt</b> element with <b>&lt;option;&gt</b> child
     * elements.
     *
     * @fiddle:8HnLx
     */
    class ComboBox extends DropDown {
        _lbx: ListBox;
        _required: boolean;
        _editable: boolean;
        _composing: boolean;
        _deleting: boolean;
        _settingText: boolean;
        _cvt: HTMLElement;
        _hdrPath: string;
        /**
         * Initializes a new instance of the @see:ComboBox class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the array or @see:ICollectionView object that contains the items to select from.
         */
        itemsSource: any;
        /**
         * Gets the @see:ICollectionView object used as the item source.
         */
        collectionView: collections.ICollectionView;
        /**
         * Gets or sets the name of the property to use as the visual representation of the items.
         */
        displayMemberPath: string;
        /**
         * Gets or sets the name of a property to use for getting the value displayed in the
         * control's input element.
         *
         * The default value for this property is null, which causes the control to display
         * the same content in the input element as in the selected item of the drop-down list.
         *
         * Use this property if you want to de-couple the value shown in the input element
         * from the values shown in the drop-down list. For example, the input element could
         * show an item's name and the drop-down list could show additional detail.
         */
        headerPath: string;
        /**
         * Gets or sets the name of the property used to get the @see:selectedValue from the @see:selectedItem.
         */
        selectedValuePath: string;
        /**
         * Gets or sets a value indicating whether the drop-down list displays items as plain text or as HTML.
         */
        isContentHtml: boolean;
        /**
         * Gets or sets a function used to customize the values shown in the drop-down list.
         * The function takes two arguments, the item index and the default text or html, and
         * returns the new text or html to display.
         *
         * If the formatting function needs a scope (i.e. a meaningful 'this'
         * value), then remember to set the filter using the 'bind' function to
         * specify the 'this' object. For example:
         *
         * <pre>
         *   comboBox.itemFormatter = customItemFormatter.bind(this);
         *   function customItemFormatter(index, content) {
         *     if (this.makeItemBold(index)) {
         *       content = '&lt;b&gt;' + content + '&lt;/b&gt;';
         *     }
         *     return content;
         *   }
         * </pre>
         */
        itemFormatter: Function;
        /**
         * Gets or sets the index of the currently selected item in the drop-down list.
         */
        selectedIndex: number;
        /**
         * Gets or sets the item that is currently selected in the drop-down list.
         */
        selectedItem: any;
        /**
         * Gets or sets the value of the @see:selectedItem, obtained using the @see:selectedValuePath.
         */
        selectedValue: any;
        /**
         * Gets or sets a value that determines whether the control value must be set to
         * a non-null value or whether it can be set to null
         * (by deleting the content of the control).
         */
        required: boolean;
        /**
         * Gets or sets a value that enables or disables editing of the text
         * in the input element of the @see:ComboBox (defaults to false).
         */
        isEditable: boolean;
        /**
         * Gets or sets the maximum height of the drop-down list.
         */
        maxDropDownHeight: number;
        /**
         * Gets or sets the maximum width of the drop-down list.
         *
         * The width of the drop-down list is also limited by the width of
         * the control itself (that value represents the drop-down's minimum width).
         */
        maxDropDownWidth: number;
        /**
         * Gets the string displayed in the input element for the item at a
         * given index (always plain text).
         *
         * @param index The index of the item to retrieve the text for.
         */
        getDisplayText(index?: number): string;
        /**
         * Occurs when the value of the @see:selectedIndex property changes.
         */
        selectedIndexChanged: Event;
        /**
         * Raises the @see:selectedIndexChanged event.
         */
        onSelectedIndexChanged(e?: EventArgs): void;
        /**
         * Gets the index of the first item that matches a given string.
         *
         * @param text The text to search for.
         * @param fullMatch Whether to look for a full match or just the start of the string.
         * @return The index of the item, or -1 if not found.
         */
        indexOf(text: string, fullMatch: boolean): number;
        /**
         * Gets the @see:ListBox control shown in the drop-down.
         */
        listBox: ListBox;
        onLostFocus(e?: EventArgs): void;
        onIsDroppedDownChanging(e: CancelEventArgs): boolean;
        onIsDroppedDownChanged(e?: EventArgs): void;
        _updateBtn(): void;
        _createDropDown(): void;
        _setText(text: string, fullMatch: boolean): void;
        private _findNext(text, step);
        _keydown(e: KeyboardEvent): void;
        private _setSelectionRange(start, end);
        private _getSelStart();
    }
}

/**
 * Defines input controls for strings, numbers, dates, times, and colors.
 */
declare module wijmo.input {
    /**
     * The @see:AutoComplete control is an input control that allows callers
     * to customize the item list as the user types.
     *
     * The control is similar to the @see:ComboBox, except the item source is a
     * function (@see:itemsSourceFunction) rather than a static list. For example,
     * you can look up items on remote databases as the user types.
     *
     * The example below creates an @see:AutoComplete control and populates it using
     * a 'countries' array. The @see:AutoComplete searches for the country as the user
     * types, and narrows down the list of countries that match the current input.
     *
     * @fiddle:8HnLx
     */
    class AutoComplete extends ComboBox {
        private _itemsSourceFn;
        private _minLength;
        private _maxItems;
        private _itemCount;
        private _delay;
        private _cssMatch;
        private _toSearch;
        private _query;
        private _rxMatch;
        private _rxHighlight;
        private _handlingCallback;
        /**
         * Initializes a new instance of the @see:AutoComplete class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the minimum input length to trigger autocomplete suggestions.
         */
        minLength: number;
        /**
         * Gets or sets the maximum number of items to display in the drop-down list.
         */
        maxItems: number;
        /**
         * Gets or sets the delay, in milliseconds, between when a keystroke occurs
         * and when the search is performed.
         */
        delay: number;
        /**
         * Gets or sets a function that provides list items dynamically as the user types.
         *
         * The function takes three parameters:
         * <ul>
         *     <li>the query string typed by the user</li>
         *     <li>the maximum number of items to return</li>
         *     <li>the callback function to call when the results become available</li>
         * </ul>
         *
         * For example:
         * <pre>
         * autoComplete.itemsSourceFunction = function (query, max, callback) {
         *   // get results from the server
         *   var params = { query: query, max: max };
         *   $.getJSON('companycatalog.ashx', params, function (response) {
         *     // return results to the control
         *     callback(response);
         *   });
         * };
         * </pre>
         */
        itemsSourceFunction: Function;
        /**
         * Gets or sets the name of the css class used to highlight any parts
         * of the content that match the search terms.
         *
         * By default, this property is set to null, which causes the matching
         * terms to be shown in bold. You can set it to the name of a css class
         * to change the way the matches are displayed.
         *
         * The example below shows how you could use a specific css class called
         * 'match' to highlight the matches:
         *
         * <pre>
         * &lt;!-- css style for highlighting matches --&gt;
         * .match {
         *   background-color: yellow;
         *   color:black;
         * }
         * // assign css style to cssMatch property
         * autoComplete.cssMatch = 'match';
         * </pre>
         */
        cssMatch: string;
        _keydown(e: KeyboardEvent): void;
        _setText(text: string): void;
        _itemSourceFunctionCallback(result: any): void;
        onIsDroppedDownChanged(e?: EventArgs): void;
        _updateItems(): void;
        _filter(item: any): boolean;
        _defaultFormatter(index: number, text: string): string;
    }
}

declare module wijmo.input {
    /**
     * The @see:Menu control shows a text element with a drop-down list of commands that the user
     * can invoke by click or touch.
     *
     * The @see:Menu control inherits from @see:ComboBox, so you populate and style it
     * in the same way that you do the @see:ComboBox (see the @see:itemsSource property).
     *
     * The @see:Menu control adds an @see:itemClicked event that fires when the user selects
     * an item from the menu. The event handler can inspect the @see:Menu control to determine
     * which item was clicked. For example:
     *
     * <pre>
     * var menu = new wijmo.input.Menu(hostElement);
     * menu.header = 'Main Menu';
     * menu.itemsSource = ['option 1', 'option 2', 'option 3'];
     * menu.itemClicked.addHandler(function(sender, args) {
     * var menu = sender;
     *   alert('Thanks for selecting item ' + menu.selectedIndex + ' from menu ' + menu.header + '!');
     * });
     * </pre>
     *
     * The example below illustrates how you can create value pickers, command-based menus, and
     * menus that respond to the <b>itemClicked</b> event. The menus in this example are based
     * on HTML <b>&lt;select;&gt</b> and <b>&lt;option;&gt</b> elements.
     *
     * @fiddle:BX853
     */
    class Menu extends ComboBox {
        _hdr: HTMLElement;
        _closing: boolean;
        _command: any;
        _cmdPath: string;
        _cmdParamPath: string;
        _isButton: boolean;
        _defaultItem: any;
        _owner: HTMLElement;
        /**
         * Initializes a new instance of the @see:Menu class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the HTML text shown in the @see:Menu element.
         */
        header: string;
        /**
         * Gets or sets the command to execute when an item is clicked.
         *
         * Commands are objects that implement two methods:
         * <ul>
         *  <li><b>executeCommand(parameter)</b> This method executes the command.</li>
         *  <li><b>canExecuteCommand(parameter)</b> This method returns a Boolean value
         *      that determines whether the controller can execute the command.
         *      If this method returns false, the menu option is disabled.</li>
         * </ul>
         *
         * You can also set commands on individual items using the @see:commandPath
         * property.
         */
        command: any;
        /**
         * Gets or sets the name of the property that contains the command to
         * execute when the user clicks an item.
         *
         * Commands are objects that implement two methods:
         * <ul>
         *  <li><b>executeCommand(parameter)</b> This method executes the command.</li>
         *  <li><b>canExecuteCommand(parameter)</b> This method returns a Boolean value
         *      that determines whether the controller can execute the command.
         *      If this method returns false, the menu option is disabled.</li>
         * </ul>
         */
        commandPath: string;
        /**
         * Gets or sets the name of the property that contains a parameter to use with
         * the command specified by the @see:commandPath property.
         */
        commandParameterPath: string;
        /**
         * Gets or sets a value that determines whether this @see:Menu should act
         * as a split button instead of a regular menu.
         *
         * The difference between regular menus and split buttons is what happens
         * when the user clicks the menu header.
         * In regular menus, clicking the header shows or hides the menu options.
         * In split buttons, clicking the header raises the @see:menuItemClicked event
         * and/or invokes the command associated with the last option selected by
         * the user as if the user had picked the item from the drop-down list.
         *
         * If you want to differentiate between clicks on menu items and the button
         * part of a split button, check the value of the @see:isDroppedDown property
         * of the event sender. If that is true, then a menu item was clicked; if it
         * is false, then the button was clicked.
         *
         * For example, the code below implements a split button that uses the drop-down
         * list only to change the default item/command, and triggers actions only when
         * the button is clicked:
         *
         * <pre>&lt;-- view --&gt;
         * &lt;wj-menu is-button="true" header="Run" value="browser"
         *   item-clicked="menuItemClicked(s, e)"&gt;
         *   &lt;wj-menu-item value="'Internet Explorer'"&gt;Internet Explorer&lt;/wj-menu-item&gt;
         *   &lt;wj-menu-item value="'Chrome'"&gt;Chrome&lt;/wj-menu-item&gt;
         *   &lt;wj-menu-item value="'FireFox'"&gt;FireFox&lt;/wj-menu-item&gt;
         *   &lt;wj-menu-item value="'Safari'"&gt;Safari&lt;/wj-menu-item&gt;
         *   &lt;wj-menu-item value="'Opera'"&gt;Opera&lt;/wj-menu-item&gt;
         * &lt;/wj-menu&gt;
         *
         * // controller
         * $scope.browser = 'Internet Explorer';
         * $scope.menuItemClicked = function (s, e) {
         *   // if not dropped down, click was on the button
         *   if (!s.isDroppedDown) {
         *     alert('running ' + $scope.browser);
         *   }
         *}</pre>
         */
        isButton: boolean;
        /**
         * Gets or sets the element that owns this @see:Menu.
         *
         * This variable is set by the wj-context-menu directive in case a single
         * menu is used as a context menu for several different elements.
         */
        owner: HTMLElement;
        /**
         * Occurs when the user picks an item from the menu.
         *
         * The handler can determine which item was picked by reading the event sender's
         * @see:selectedIndex property.
         */
        itemClicked: Event;
        /**
         * Raises the @see:itemClicked event.
         */
        onItemClicked(e?: EventArgs): void;
        onTextChanged(e?: EventArgs): void;
        onIsDroppedDownChanged(e?: EventArgs): void;
        _raiseCommand(e?: EventArgs): void;
        _getCommand(item: any): any;
        _executeCommand(cmd: any, parm: any): void;
        _canExecuteCommand(cmd: any, parm: any): boolean;
        _enableDisableItems(): void;
    }
}

declare module wijmo.input {
    /**
     * The @see:MultiSelect control allows users to select multiple items from
     * drop-down lists that contain custom objects or simple strings.
     *
     * The @see:MultiSelect control extends @see:ComboBox, with all the usual
     * properties, including @see:itemsSource and @see:displayMemberPath.
     *
     * Like the @see:ListBox control, it has a @see:checkedMemberPath property
     * that defines the name of the property that determines whether an item is
     * checked or not.
     *
     * The items currently checked (selected) can be obtained using the
     * @see:checkedItems property.</p>
     *
     * The control header is fully customizable. By default, it shows up to two items
     * selected and the item count after that. You can change the maximum number of
     * items to display (@see:maxHeaderItems), the message shown when no items are selected
     * (@see:placeholder), and the format string used to show the item count (@see:headerFormat).
     * Or you can provide a function to generate the header content based on whatever criteria
     * your application requires (@see:headerFormatter).
     */
    class MultiSelect extends ComboBox {
        private _maxHdrItems;
        private _hdrFmt;
        private _hdrFormatter;
        static _DEF_CHECKED_PATH: string;
        /**
         * Initializes a new instance of the @see:MultiSelect class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the name of the property used to control the checkboxes
         * placed next to each item.
         */
        checkedMemberPath: string;
        /**
         * Gets or sets the maximum number of items to display on the control header.
         *
         * If no items are selected, the header displays the text specified by the
         * @see:placeholder property.
         *
         * If the number of selected items is smaller than or equal to the value of the
         * @see:maxHeaderItems property, the selected items are shown in the header.
         *
         * If the number of selected items is greater than @see:maxHeaderItems, the
         * header displays the selected item count instead.
         */
        maxHeaderItems: number;
        /**
         * Gets or sets the format string used to create the header content
         * when the control has more than @see:maxHeaderItems items checked.
         *
         * The format string may contain the '{count}' replacement string
         * which gets replaced with the number of items currently checked.
         * The default value for this property in the English culture is
         * '{count:n0} items selected'.
         */
        headerFormat: string;
        /**
         * Gets or sets a function that gets the HTML in the control header.
         *
         * By default, the control header content is determined based on the
         * @see:placeholder, @see:maxHeaderItems, and on the current selection.
         *
         * You may customize the header content by specifying a function that
         * returns a custom string based on whatever criteria your application
         * requires.
         */
        headerFormatter: Function;
        /**
         * Gets or sets an array containing the items that are currently checked.
         */
        checkedItems: any[];
        /**
         * Occurs when the value of the @see:checkedItems property changes.
         */
        checkedItemsChanged: Event;
        /**
         * Raises the @see:checkedItemsChanged event.
         */
        onCheckedItemsChanged(e?: EventArgs): void;
        refresh(fullUpdate?: boolean): void;
        onIsDroppedDownChanged(e?: EventArgs): void;
        _updateHeader(): void;
        _setText(text: string, fullMatch: boolean): void;
    }
}

declare module wijmo.input {
    /**
     * Specifies actions that trigger showing and hiding @see:Popup controls.
     */
    enum PopupTrigger {
        /** No triggers; popups must be shown and hidden using code. */
        None = 0,
        /** Show or hide when the owner element is clicked. */
        Click = 1,
        /** Hide the popup when it loses focus. */
        Blur = 2,
    }
    /**
     * Class that shows an element as a popup.
     *
     * Popups may be have @see:owner elements, in which case they behave
     * as rich tooltips that may be shown or hidden based on actions
     * specified by the @see:showTrigger and @see:hideTrigger properties.
     *
     * Popups with no owner elements behave like dialogs. They are centered
     * on the screen and displayed using the @see:show method.
     *
     * To close a @see:Popup, call the @see:hide method.
     *
     * Alternatively, any clickable elements within a @see:Popup that have
     * the classes starting with the 'wj-hide' string will hide the @see:Popup
     * when clicked and will set the @see:dialogResult property to the class
     * name so the caller may take appropriate action.
     *
     * For example, the @see:Popup below will be hidden when the user presses
     * the OK or Cancel buttons, and the @see:dialogResult property will be
     * set to either 'wj-hide-cancel' or 'wj-hide-ok':
     *
     * <pre>&lt;button id="btnPopup"&gt;Show Popup&lt;/button&gt;
     * &lt;wj-popup owner="#btnPopup" style="padding:12px"&gt;
     *   &lt;p&gt;Press one of the buttons below to hide the Popup.&lt;/p&gt;
     *   &lt;hr/&gt;
     *   &lt;button class="wj-hide-ok" ng-click="handleOK()"&gt;OK&lt;/button&gt;
     *   &lt;button class="wj-hide-cancel"&gt;Cancel&lt;/button&gt;
     * &lt;/wj-popup&gt;</pre>
     */
    class Popup extends Control {
        _owner: HTMLElement;
        _modal: boolean;
        _showTrigger: PopupTrigger;
        _hideTrigger: PopupTrigger;
        _fadeIn: boolean;
        _fadeOut: boolean;
        _click: any;
        _bkdrop: HTMLDivElement;
        _result: any;
        _resultEnter: any;
        _refreshing: boolean;
        _visible: boolean;
        /**
         * Initializes a new instance of the @see:Popup class.
         *
         * @param element The DOM element that will host the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the element that owns this @see:Popup.
         *
         * If the @see:owner is null, the @see:Popup behaves like a dialog.
         * It is centered on the screen and must be shown using the
         * @see:show method.
         */
        owner: HTMLElement;
        /**
         * Gets or sets the HTML element contained in this @see:Popup.
         */
        content: HTMLElement;
        /**
         * Gets or sets the actions that show the @see:Popup.
         *
         * By default, the @see:showTrigger property is set to @see:PopupTrigger.Click,
         * which causes the popup to appear when the user clicks the owner element.
         *
         * If you set the @see:showTrigger property to @see:PopupTrigger.None, the popup
         * will be shown only when the @see:show method is called.
         */
        showTrigger: PopupTrigger;
        /**
         * Gets or sets the actions that hide the @see:Popup.
         *
         * By default, the @see:hideTrigger property is set to @see:PopupTrigger.Blur,
         * which hides the popup when it loses focus.
         *
         * If you set the @see:hideTrigger property to @see:PopupTrigger.Click, the popup
         * will be hidden only when the owner element is clicked.
         *
         * If you set the @see:hideTrigger property to @see:PopupTrigger.None, the popup
         * will be hidden only when the @see:hide method is called.
         */
        hideTrigger: PopupTrigger;
        /**
         * Gets or sets a value that determines whether the @see:Popup should
         * use a fade-out animation when it is shown.
         */
        fadeIn: boolean;
        /**
         * Gets or sets a value that determines whether the @see:Popup should
         * use a fade-out animation when it is hidden.
         */
        fadeOut: boolean;
        /**
         * Gets or sets a value that determines whether the @see:Popup should
         * be displayed as a modal dialog.
         *
         * Modal dialogs show a dark backdrop that makes the Popup stand out from
         * other content on the page.
         *
         * If you want to make a dialog truly modal, also set the @see:hideTrigger
         * property to @see:PopupTrigger.None, so users won't be able to click the
         * backdrop to dismiss the dialog. In this case, the dialog will close only
         * if the @see:close method is called or if the user presses the Escape key.
         */
        modal: boolean;
        /**
         * Gets or sets a value that can be used for handling the content of the @see:Popup
         * after it is hidden.
         *
         * This property is set to null when the @see:Popup is displayed, and it can be
         * set in response to button click events or in the call to the @see:hide method.
         */
        dialogResult: any;
        /**
         * Gets or sets a value to be used as a @see:dialogResult when the user presses
         * the Enter key while the @see:Popup is visible.
         *
         * If the user presses Enter and the @see:dialogResultEnter property is not null,
         * the popup checks whether all its child elements are in a valid state.
         * If so, the popup is closed and the @see:dialogResult property is set to
         * the value of the @see:dialogResultEnter property.
         *
         * If the @see:Popup contains a submit button, pressing the Enter key also checks
         * for validity and closes the dialog, returning 'submit' as the @see:dialogResult.
         */
        dialogResultEnter: any;
        /**
         * Gets a value that determines whether the @see:Popup is currently visible.
         */
        isVisible: boolean;
        /**
         * Shows the @see:Popup.
         *
         * @param modal Whether to show the popup as a modal dialog. If provided, this
         * sets the value of the @see:modal property.
         */
        show(modal?: boolean): void;
        /**
         * Hides the @see:Popup.
         * @param dialogResult Optional value assigned to the @see:dialogResult property
         * before closing the @see:Popup.
         */
        hide(dialogResult?: any): void;
        /**
         * Occurs before the @see:Popup is shown.
         */
        showing: Event;
        /**
         * Raises the @see:showing event.
         */
        onShowing(e: CancelEventArgs): boolean;
        /**
         * Occurs after the @see:Popup has been shown.
         */
        shown: Event;
        /**
         * Raises the @see:shown event.
         */
        onShown(e?: EventArgs): void;
        /**
         * Occurs before the @see:Popup is hidden.
         */
        hiding: Event;
        /**
         * Raises the @see:hiding event.
         */
        onHiding(e: CancelEventArgs): boolean;
        /**
         * Occurs after the @see:Popup has been hidden.
         */
        hidden: Event;
        /**
         * Raises the @see:hidden event.
         */
        onHidden(e?: EventArgs): void;
        dispose(): void;
        onLostFocus(e?: EventArgs): void;
        refresh(fullUpdate?: boolean): void;
        _handleResize(): void;
        _handleClick(e: any): void;
        _showBackdrop(): void;
        _validateAndHide(result: any): void;
    }
}

declare module wijmo.input {
    /**
     * The @see:InputDate control allows users to type in dates using any format
     * supported by the @see:Globalize class, or to pick dates from a drop-down box
     * that shows a @see:Calendar control.
     *
     * Use the @see:min and @see:max properties to restrict the range of
     * values that the user can enter.
     *
     * For details about using the @see:min and @see:max properties, please see the
     * <a href="static/minMax.html">Using the min and max properties</a> topic.
     *
     * Use the @see:value property to gets or set the currently selected date.
     *
     * The example below shows a <b>Date</b> value (that includes date and time information)
     * using an @see:InputDate and an an @see:InputTime control. Notice how both controls
     * are bound to the same controller variable, and each edits the appropriate information
     * (either date or time). The example also shows a @see:Calendar control that you can
     * use to select the date with a single click.
     *
     * @fiddle:vgc3Y
     */
    class InputDate extends DropDown {
        _calendar: Calendar;
        _value: Date;
        _min: Date;
        _max: Date;
        _format: string;
        _required: boolean;
        _maskProvider: _MaskProvider;
        /**
         * Initializes a new instance of the @see:InputDate class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets the HTML input element hosted by the control.
         *
         * Use this property in situations where you want to customize the
         * attributes of the input element.
         */
        inputElement: HTMLInputElement;
        /**
         * Gets or sets the "type" attribute of the HTML input element hosted by the control.
         *
         * By default, this property is set to "tel", a value that causes mobile devices to
         * show a numeric keypad that includes a negative sign and a decimal separator.
         *
         * Use this property to change the default setting if the default does not work well
         * for the current culture, device, or application. In those cases, try changing
         * the value to "number" or "text."
         *
         * Note that input elements with type "number" prevent selection in Chrome and therefore
         * is not recommended. For more details, see this link:
         * http://stackoverflow.com/questions/21177489/selectionstart-selectionend-on-input-type-number-no-longer-allowed-in-chrome
         */
        inputType: string;
        /**
         * Gets or sets the current date.
         */
        value: Date;
        /**
         * Gets or sets the text shown on the control.
         */
        text: string;
        /**
         * Gets or sets a value indicating whether the control value must be a Date or whether it
         * can be set to null (by deleting the content of the control).
         */
        required: boolean;
        /**
         * Gets or sets the earliest date that the user can enter.
         *
         * For details about using the @see:min and @see:max properties, please see the
         * <a href="static/minMax.html">Using the min and max properties</a> topic.
         */
        min: Date;
        /**
         * Gets or sets the latest date that the user can enter.
         *
         * For details about using the @see:min and @see:max properties, please see the
         * <a href="static/minMax.html">Using the min and max properties</a> topic.
         */
        max: Date;
        /**
         * Gets or sets the format used to display the selected date.
         *
         * The format string is expressed as a .NET-style
         * <a href="http://msdn.microsoft.com/en-us/library/8kb3ddd4(v=vs.110).aspx" target="_blank">
         * Date format string</a>.
         */
        format: string;
        /**
         * Gets or sets a mask to use while editing.
         *
         * The mask format is the same one that the @see:wijmo.input.InputMask
         * control uses.
         *
         * If specified, the mask must be compatible with the value of
         * the @see:format property. For example, the mask '99/99/9999' can
         * be used for entering dates formatted as 'MM/dd/yyyy'.
         */
        mask: string;
        /**
         * Gets a reference to the @see:Calendar control shown in the drop-down box.
         */
        calendar: Calendar;
        /**
         * Gets or sets a validator function to determine whether dates are valid for selection.
         *
         * If specified, the validator function should take one parameter representing the
         * date to be tested, and should return false if the date is invalid and should not
         * be selectable.
         *
         * For example, the code below prevents users from selecting dates that fall on
         * weekends:
         * <pre>
         * inputDate.itemValidator = function(date) {
         *   var weekday = date.getDay();
         *   return weekday != 0 && weekday != 6;
         * }
         * </pre>
         */
        itemValidator: Function;
        /**
         * Gets or sets a formatter function to customize dates in the drop-down calendar.
         *
         * The formatter function can add any content to any date. It allows
         * complete customization of the appearance and behavior of the calendar.
         *
         * If specified, the function takes two parameters:
         * <ul>
         *     <li>the date being formatted </li>
         *     <li>the HTML element that represents the date</li>
         * </ul>
         *
         * For example, the code below shows weekends with a yellow background:
         * <pre>
         * inputDate.itemFormatter = function(date, element) {
         *   var day = date.getDay();
         *   element.style.backgroundColor = day == 0 || day == 6 ? 'yellow' : '';
         * }
         * </pre>
         */
        itemFormatter: Function;
        /**
         * Occurs after a new date is selected.
         */
        valueChanged: Event;
        /**
         * Raises the @see:valueChanged event.
         */
        onValueChanged(e?: EventArgs): void;
        refresh(): void;
        onIsDroppedDownChanged(e?: EventArgs): void;
        _createDropDown(): void;
        _updateDropDown(): void;
        _keydown(e: KeyboardEvent): void;
        _clamp(value: Date): Date;
        _commitText(): void;
        private _setDate(value, time);
        private _isValidDate(value);
    }
}

declare module wijmo.input {
    /**
     * The @see:InputTime control allows users to enter times using any format
     * supported by the @see:Globalize class, or to pick times from a drop-down
     * list.
     *
     * The @see:min, @see:max, and @see:step properties determine the values shown
     * in the list.
     *
     * For details about using the @see:min and @see:max properties, please see the
     * <a href="static/minMax.html">Using the min and max properties</a> topic.
     *
     * The @see:value property gets or sets a @see:Date object that represents the time
     * selected by the user.
     *
     * The example below shows a <b>Date</b> value (that includes date and time information)
     * using an @see:InputDate and an @see:InputTime control. Notice how both controls
     * are bound to the same controller variable, and each edits the appropriate information
     * (either date or time). The example also shows a @see:Calendar control that can be
     * used to select the date with a single click.
     *
     * @fiddle:vgc3Y
     */
    class InputTime extends ComboBox {
        _value: Date;
        _min: Date;
        _max: Date;
        _step: number;
        _format: string;
        _maskProvider: _MaskProvider;
        /**
         * Initializes a new instance of the @see:InputTime class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets the HTML input element hosted by the control.
         *
         * Use this property in situations where you want to customize the
         * attributes of the input element.
         */
        inputElement: HTMLInputElement;
        /**
         * Gets or sets the "type" attribute of the HTML input element hosted by the control.
         *
         * By default, this property is set to "tel", a value that causes mobile devices to
         * show a numeric keypad that includes a negative sign and a decimal separator.
         *
         * Use this property to change the default setting if the default does not work well
         * for the current culture, device, or application. In those cases, try changing
         * the value to "number" or "text."
         *
         * Note that input elements with type "number" prevent selection in Chrome and therefore
         * is not recommended. For more details, see this link:
         * http://stackoverflow.com/questions/21177489/selectionstart-selectionend-on-input-type-number-no-longer-allowed-in-chrome
         */
        inputType: string;
        /**
         * Gets or sets the current input time.
         */
        value: Date;
        /**
         * Gets or sets the text shown in the control.
         */
        text: string;
        /**
         * Gets or sets the earliest time that the user can enter.
         *
         * For details about using the @see:min and @see:max properties, please see the
         * <a href="static/minMax.html">Using the min and max properties</a> topic.
         */
        min: Date;
        /**
         * Gets or sets the latest time that the user can enter.
         *
         * For details about using the @see:min and @see:max properties, please see the
         * <a href="static/minMax.html">Using the min and max properties</a> topic.
         */
        max: Date;
        /**
         * Gets or sets the number of minutes between entries in the drop-down list.
         *
         * The default value for this property is 15 minutes.
         * Setting it to null, zero, or any negative value disables the drop-down.
         */
        step: number;
        /**
         * Gets or sets the format used to display the selected time (see @see:Globalize).
         *
         * The format string is expressed as a .NET-style
         * <a href="http://msdn.microsoft.com/en-us/library/8kb3ddd4(v=vs.110).aspx" target="_blank">
         * time format string</a>.
         */
        format: string;
        /**
         * Gets or sets a mask to use while the user is editing.
         *
         * The mask format is the same used by the @see:wijmo.input.InputMask
         * control.
         *
         * If specified, the mask must be compatible with the value of
         * the @see:format property. For example, you can use the mask '99:99 >LL'
         * for entering short times (format 't').
         */
        mask: string;
        /**
         * Occurs after a new time is selected.
         */
        valueChanged: Event;
        /**
         * Raises the @see:valueChanged event.
         */
        onValueChanged(e?: EventArgs): void;
        refresh(): void;
        onSelectedIndexChanged(e?: EventArgs): void;
        _updateItems(): void;
        _keydown(e: KeyboardEvent): void;
        _commitText(): void;
        private _getTime(value);
    }
}

declare module wijmo.input {
    /**
     * The @see:InputDateTime control extends the @see:InputDate control to allows users
     * to input dates and times, either by typing complete date/time values in any format
     * supported by the @see:Globalize class, or by picking dates from a drop-down calendar
     * and times from a drop-down list.
     *
     * Use the @see:min and @see:max properties to restrict the range of
     * dates that the user can enter.
     * Use the @see:timeMin and @see:timeMax properties to restrict the range of
     * times that the user can enter.
     *
     * Use the @see:value property to gets or set the currently selected date/time.
     */
    class InputDateTime extends InputDate {
        _btnTm: HTMLElement;
        _inputTime: InputTime;
        /**
         * Gets or sets the template used to instantiate @see:InputDateTime controls.
         */
        static controlTemplate: string;
        /**
         * Initializes a new instance of the @see:InputDateTime class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the earliest time that the user can enter.
         */
        timeMin: Date;
        /**
         * Gets or sets the latest time that the user can enter.
         */
        timeMax: Date;
        /**
         * Gets or sets the format used to display times in the drop-down list.
         *
         * This property does not affect the value shown in the control's input element.
         * That value is formatted using the @see:format property.
         *
         * The format string is expressed as a .NET-style
         * <a href="http://msdn.microsoft.com/en-us/library/8kb3ddd4(v=vs.110).aspx" target="_blank">
         * time format string</a>.
         */
        timeFormat: string;
        /**
         * Gets or sets the number of minutes between entries in the drop-down list of times.
         */
        timeStep: number;
        refresh(): void;
        _updateBtn(): void;
        _clamp(value: Date): Date;
        _commitText(): void;
        _setDropdown(e: HTMLElement): void;
        _updateDropDown(): void;
    }
}

declare module wijmo.input {
    /**
     * The @see:InputNumber control allows users to enter numbers.
     *
     * The control prevents users from accidentally entering invalid data and
     * formats the number as it is edited.
     *
     * Pressing the minus key reverses the sign of the value being edited,
     * regardless of cursor position.
     *
     * You may use the @see:min and @see:max properties to limit the range of
     * acceptable values, and the @see:step property to provide spinner buttons
     * that increase or decrease the value with a click.
     *
     * For details about using the @see:min and @see:max properties, please see the
     * <a href="static/minMax.html">Using the min and max properties</a> topic.
     *
     * Use the @see:value property to get or set the currently selected number.
     *
     * The example below creates several @see:InputNumber controls and shows
     * the effect of using different formats, ranges, and step values.
     *
     * @fiddle:Cf9L9
     */
    class InputNumber extends Control {
        _tbx: HTMLInputElement;
        _btnUp: HTMLElement;
        _btnDn: HTMLElement;
        _value: number;
        _min: number;
        _max: number;
        _format: string;
        _step: number;
        _showBtn: boolean;
        _required: boolean;
        _decChar: string;
        _currChar: string;
        _rxSym: RegExp;
        _oldText: string;
        _composing: boolean;
        /**
         * Gets or sets the template used to instantiate @see:InputNumber controls.
         */
        static controlTemplate: string;
        '</div>': any;
        /**
         * Initializes a new instance of the @see:InputNumber class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets the HTML input element hosted by the control.
         *
         * Use this property in situations where you want to customize the
         * attributes of the input element.
         */
        inputElement: HTMLInputElement;
        /**
         * Gets or sets the "type" attribute of the HTML input element hosted by the control.
         *
         * By default, this property is set to "tel", a value that causes mobile devices to
         * show a numeric keypad that includes a negative sign and a decimal separator.
         *
         * Use this property to change the default setting if the default does not work well
         * for the current culture, device, or application. In those cases, try changing
         * the value to "number" or "text."
         *
         * Note that input elements with type "number" prevent selection in Chrome and therefore
         * is not recommended. For more details, see this link:
         * http://stackoverflow.com/questions/21177489/selectionstart-selectionend-on-input-type-number-no-longer-allowed-in-chrome
         */
        inputType: string;
        /**
         * Gets or sets the current value of the control.
         */
        value: number;
        /**
         * Gets or sets a value indicating whether the control value must be a number or whether it
         * can be set to null (by deleting the content of the control).
         */
        required: boolean;
        /**
         * Gets or sets the smallest number that the user can enter.
         *
         * For details about using the @see:min and @see:max properties, please see the
         * <a href="static/minMax.html">Using the min and max properties</a> topic.
         */
        min: number;
        /**
         * Gets or sets the largest number that the user can enter.
         *
         * For details about using the @see:min and @see:max properties, please see the
         * <a href="static/minMax.html">Using the min and max properties</a> topic.
         */
        max: number;
        /**
         * Gets or sets the amount to add or subtract to the @see:value property
         * when the user clicks the spinner buttons.
         */
        step: number;
        /**
         * Gets or sets the format used to display the number being edited (see @see:Globalize).
         *
         * The format string is expressed as a .NET-style
         * <a href="http://msdn.microsoft.com/en-us/library/dwhawy9k(v=vs.110).aspx" target="_blank">
         * standard numeric format string</a>.
         */
        format: string;
        /**
         * Gets or sets the text shown in the control.
         */
        text: string;
        /**
         * Gets or sets the string shown as a hint when the control is empty.
         */
        placeholder: string;
        /**
         * Gets or sets a value indicating whether the control displays spinner buttons
         * to increment or decrement the value (the step property must be set to a
         * value other than zero).
         */
        showSpinner: boolean;
        /**
         * Sets the focus to the control and selects all its content.
         */
        selectAll(): void;
        /**
         * Occurs when the value of the @see:text property changes.
         */
        textChanged: Event;
        /**
         * Raises the @see:textChanged event.
         */
        onTextChanged(e?: EventArgs): void;
        /**
         * Occurs when the value of the @see:value property changes.
         */
        valueChanged: Event;
        /**
         * Raises the @see:valueChanged event.
         */
        onValueChanged(e?: EventArgs): void;
        onGotFocus(e: EventArgs): void;
        onLostFocus(e?: EventArgs): void;
        refresh(fullUpdate?: boolean): void;
        private _updateSymbols();
        private _clamp(value);
        private _isNumeric(chr, digitsOnly?);
        private _getInputRange(digitsOnly?);
        private _moveToDigit();
        private _updateBtn();
        private _setText(text);
        private _keypress(e);
        private _keydown(e);
        private _input(e);
        private _clickSpinner(e);
        private _increment(step);
        private _getSelStart();
    }
}

declare module wijmo.input {
    /**
     * The @see:InputMask control provides a way to govern what a user is allowed to input.
     *
     * The control prevents users from accidentally entering invalid data and
     * saves time by skipping over literals (such as slashes in dates) as the user types.
     *
     * The mask used to validate the input is defined by the @see:mask property,
     * which may contain one or more of the following special characters:
     *
     *  <dl class="dl-horizontal">
     *      <dt>0</dt>      <dd>Digit.</dd>
     *      <dt>9</dt>      <dd>Digit or space.</dd>
     *      <dt>#</dt>      <dd>Digit, sign, or space.</dd>
     *      <dt>L</dt>      <dd>Letter.</dd>
     *      <dt>l</dt>      <dd>Letter or space.</dd>
     *      <dt>A</dt>      <dd>Alphanumeric.</dd>
     *      <dt>a</dt>      <dd>Alphanumeric or space.</dd>
     *      <dt>.</dt>      <dd>Localized decimal point.</dd>
     *      <dt>,</dt>      <dd>Localized thousand separator.</dd>
     *      <dt>:</dt>      <dd>Localized time separator.</dd>
     *      <dt>/</dt>      <dd>Localized date separator.</dd>
     *      <dt>$</dt>      <dd>Localized currency symbol.</dd>
     *      <dt>&lt;</dt>   <dd>Converts characters that follow to lowercase.</dd>
     *      <dt>&gt;</dt>   <dd>Converts characters that follow to uppercase.</dd>
     *      <dt>|</dt>      <dd>Disables case conversion.</dd>
     *      <dt>\</dt>      <dd>Escapes any character, turning it into a literal.</dd>
     *      <dt>All others</dt><dd>Literals.</dd>
     *  </dl>
     */
    class InputMask extends Control {
        _tbx: HTMLInputElement;
        _maskProvider: _MaskProvider;
        /**
         * Gets or sets the template used to instantiate @see:InputMask controls.
         */
        static controlTemplate: string;
        '</div>': any;
        /**
         * Initializes a new instance of the @see:InputMask class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets the HTML input element hosted by the control.
         *
         * Use this property in situations where you want to customize the
         * attributes of the input element.
         */
        inputElement: HTMLInputElement;
        /**
         * Gets or sets the text currently shown in the control.
         */
        value: string;
        /**
         * Gets or sets the raw value of the control (excluding mask literals).
         *
         * The raw value of the control excludes prompt and literal characters.
         * For example, if the @see:mask property is set to "AA-9999" and the
         * user enters the value "AB-1234", the @see:rawText property will return
         * "AB1234", excluding the hyphen that is part of the mask.
         */
        rawValue: string;
        /**
         * Gets or sets the mask used to validate the input as the user types.
         *
         * The mask is defined as a string with one or more of the masking
         * characters listed in the @see:InputMask topic.
         */
        mask: string;
        /**
         * Gets or sets the symbol used to show input positions in the control.
         */
        promptChar: string;
        /**
         * Gets or sets the string shown as a hint when the control is empty.
         */
        placeholder: string;
        /**
         * Gets a value that indicates whether the mask has been completely filled.
         */
        maskFull: boolean;
        /**
         * Sets the focus to the control and selects all its content.
         */
        selectAll(): void;
        /**
         * Occurs when the value of the @see:value property changes.
         */
        valueChanged: Event;
        /**
         * Raises the @see:valueChanged event.
         */
        onValueChanged(e?: EventArgs): void;
        refresh(fullUpdate?: boolean): void;
    }
}

declare module wijmo.input {
    /**
     * The @see:InputColor control allows users to select colors by typing in
     * HTML-supported color strings, or to pick colors from a drop-down
     * that shows a @see:ColorPicker control.
     *
     * Use the @see:value property to get or set the currently selected color.
     *
     * @fiddle:84xvsz90
     */
    class InputColor extends DropDown {
        _ePreview: HTMLElement;
        _colorPicker: ColorPicker;
        _value: string;
        _required: boolean;
        /**
         * Initializes a new instance of the @see:InputColor class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the current color.
         */
        value: string;
        /**
         * Gets or sets the text shown on the control.
         */
        text: string;
        /**
         * Gets or sets a value indicating whether the control value must be a color or whether it
         * can be set to null (by deleting the content of the control).
         */
        required: boolean;
        /**
         * Gets or sets a value indicating whether the @see:ColorPicker allows users
         * to edit the color's alpha channel (transparency).
         */
        showAlphaChannel: boolean;
        /**
         * Gets a reference to the @see:ColorPicker control shown in the drop-down.
         */
        colorPicker: ColorPicker;
        /**
         * Occurs after a new color is selected.
         */
        valueChanged: Event;
        /**
         * Raises the @see:valueChanged event.
         */
        onValueChanged(e?: EventArgs): void;
        _createDropDown(): void;
        _keydown(e: KeyboardEvent): void;
        _commitText(): void;
    }
}

