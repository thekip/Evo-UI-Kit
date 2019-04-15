import { createHostComponentFactory, SpectatorWithHost } from '@netbasal/spectator';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { EvoDatepickerComponent, EvoUiClassDirective } from '../../evo-ui-kit.module';
import Russian from 'flatpickr/dist/l10n/ru.js';
import { FlatpickrOptions } from './flatpickr-options.interface';
import { IMaskModule } from 'angular-imask';


const pad = (num: number) => num < 10 ? '0' + num : num;

const formatDate = (date: Date): string => {
    const d = pad(date.getDate());
    const m = pad(date.getMonth() + 1);
    const y = date.getFullYear();
    return `${d}.${m}.${y}`;
};

fdescribe('EvoDatepickerComponent', () => {

    const initialDate = '03.08.2018';
    const nextDate = '04.08.2018';
    const options: FlatpickrOptions = {
        locale: Russian.ru,
        defaultDate: initialDate,
        dateFormat: 'd.m.Y',
        maxDate: '05.08.2018',
        allowInput: true,
    };

    @Component({ selector: 'evo-host-component', template: `` })
    class TestHostComponent {
        form: FormGroup;
        options = options;
        constructor(private formBuilder: FormBuilder) {
            this.form = this.formBuilder.group({
                date: [initialDate, []]
            });
        }
    }

    let host: SpectatorWithHost<EvoDatepickerComponent, TestHostComponent>;
    let hostComponent: TestHostComponent;
    let inputEl: HTMLInputElement;
    let calendarEl: HTMLElement;

    const selectCalendarDate = (selector: string) => {
        const dateEl = calendarEl.querySelector(selector);
        const event = new MouseEvent('mousedown', { bubbles: true });
        dateEl.dispatchEvent(event);
    };

    const createHost = createHostComponentFactory({
        component: EvoDatepickerComponent,
        declarations: [EvoUiClassDirective],
        imports: [FormsModule, ReactiveFormsModule, IMaskModule],
        host: TestHostComponent,
    });

    beforeEach(() => {
        host = createHost(`
                <div [formGroup]="form">
                    <evo-datepicker formControlName="date" [config]="options"></evo-datepicker>
                </div>`);
        hostComponent = host.hostComponent;
        inputEl = host.query('.evo-datepicker__input');
        calendarEl = document.body.querySelector('.flatpickr-calendar');
    });

    afterEach(() => {
        // #### TODO: Implement ngOnDestroy
        calendarEl.remove();
    });

    it(`should have input element with initial date, after construction`, () => {
        expect(inputEl.value).toEqual(initialDate);
    });

    it(`should open calendar, after click input`, () => {
        host.click('.evo-datepicker__opener');
        expect(calendarEl.classList.contains('open')).toBeTruthy();
    });

    it(`should change date, after click next date in calendar`, () => {
        host.click('.evo-datepicker__opener');
        selectCalendarDate('.flatpickr-day.selected + .flatpickr-day');
        const newDate: Date = host.hostComponent.form.get('date').value[0];
        expect(formatDate(newDate)).toEqual(nextDate);
        expect(inputEl.value).toEqual(nextDate);
    });

    it(`should keep initial date if disabled date was clicked`, () => {
        host.click('.evo-datepicker__opener');
        selectCalendarDate('.flatpickr-day.disabled');
        const newDate: string = host.hostComponent.form.get('date').value;
        expect(newDate).toEqual(initialDate);
        expect(inputEl.value).toEqual(initialDate);
    });
});
