import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EvoBaseControl } from '../../common/evo-base-control';
import { IOptions } from './typings/options';


export enum EvoRadioGroupThemes {
    light = 'light',
    segment = 'segment',
}

export enum EvoRadioGroupDirections {
    row = 'row',
    column = 'column',
}

@Component({
    selector: 'evo-radio-group',
    templateUrl: './evo-radio-group.component.html',
    styleUrls: [ './evo-radio-group.component.scss' ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoRadioGroupComponent),
            multi: true,
        },
    ],
})
export class EvoRadioGroupComponent extends EvoBaseControl implements ControlValueAccessor, OnInit {
    @Input() options: IOptions;
    @Input('value') _value?: string;
    @Input() theme: EvoRadioGroupThemes;
    @Input() direction: EvoRadioGroupDirections;

    public formGroup;
    private disabled = false;

    onChange = (_) => {};
    onTouched = () => {};

    constructor(private formBuilder: FormBuilder) {
        super();
    }

    get value(): string {
        return this._value;
    }

    set value(value: string) {
        this._value = value;
        this.onChange(value);
    }

    ngOnInit() {
        this.createFormGroup();
    }

    writeValue(value: string): void {
        this.value = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(state: boolean): void {
        this.disabled = state;
    }

    /**
    * Геттер на возможные варианты отчета в формате массива
    * презентационного текста для радио группа
    */
    get optionArray(): IOptions[] {
        return this.generateOptionArray(this.options);
    }

    /**
    * Генерирует из опций массив
    * @param source объект с вариантами
    */
    private generateOptionArray(source: IOptions): IOptions[] {
        const array = [];

        for (const key in source) {
            if (source.hasOwnProperty(key)) {
                array.push(source[key]);
            }
        }

        return array;
    }

    /**
    * Создание группы
    */
    private createFormGroup(): void {
        this.formGroup = this.formBuilder.group({
            value: [ this.value ],
        });
    }

    /**
    * Обработчик на смену значения
    * @param value значение
    */
    public onChangedValue(value: string): void {
        this.value = value;
    }

    get totalClasses(): string[] {
        const classes: string[] = [];

        if (this.theme) {
            classes.push(this.theme);
        }

        if (this.direction) {
            classes.push(this.direction);
        }

        return classes;
    }
}
