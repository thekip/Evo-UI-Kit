import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'evo-segmented-bar-button',
    templateUrl: './evo-segmented-bar-button.component.html',
    styleUrls: [ './evo-segmented-bar-button.component.scss' ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoSegmentedBarButtonComponent),
            multi: true,
        },
    ],
})
export class EvoSegmentedBarButtonComponent implements ControlValueAccessor {
    @Input() name: string;
    @Input() value: string;

    private _selectedValue: any;

    constructor() {
    }

    onChange = (_) => {};
    onTouched = () => {};

    get selectedValue() {
        return this._selectedValue;
    }

    writeValue(value) {
        this._selectedValue = value;
    }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouched = fn;
    }

    onInputChange(value) {
        this._selectedValue = value;
        this.onChange(value);
    }
}