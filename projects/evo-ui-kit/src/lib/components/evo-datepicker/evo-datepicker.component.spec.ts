import { createHostComponentFactory, SpectatorWithHost } from '@netbasal/spectator';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { EvoDatepickerComponent, EvoUiClassDirective } from '../../evo-ui-kit.module';
import Russian from 'flatpickr/dist/l10n/ru.js';
import { FlatpickrOptions } from './flatpickr-options.interface';
import { IMaskModule } from 'angular-imask';

const initialDate = '03.08.2018';
const options: FlatpickrOptions = {
    locale: Russian.ru,
    defaultDate: initialDate,
    dateFormat: 'd.m.Y',
    maxDate: '05.09.2018',
};

@Component({ selector: 'evo-host-component', template: `` })
class TestHostComponent {
    form: FormGroup;
    options = options;
    constructor(
        private formBuilder: FormBuilder
    ) {
        this.form = this.formBuilder.group({
            date: [initialDate, []]
        });
    }
}

fdescribe('EvoDatepickerComponent', () => {
    let host: SpectatorWithHost<EvoDatepickerComponent, TestHostComponent>;
    let hostComponent: TestHostComponent;
    let inputEl: HTMLInputElement;
    let calendarEl: HTMLElement;

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
        // calendarEl.remove();
    });

    it(`should have input element with initial date, after construction`, () => {
        expect(inputEl.value).toEqual(initialDate);
        calendarEl.remove();
    });

    it(`should open calendar, after click input`, () => {
        host.click('.evo-datepicker__opener');
        expect(calendarEl.classList.contains('open')).toBeTruthy();
        calendarEl.remove();
    });

});
