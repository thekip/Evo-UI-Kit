import { FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { Subject, concat, of, from } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError, map, mergeMap } from 'rxjs/operators';
import { EvoUiKitModule } from 'evo-ui-kit';

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*',
    'Authorization': 'Token 6a62e779b984f0353e87931ebc384d2c736aafa9',
};

const searchCity$ = new Subject();
const searchParty$ = new Subject();
const searchFio$ = new Subject();

storiesOf('Components/Autocomplete', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                EvoUiKitModule,
            ],
        }),
    )
    .add('default', () => ({
        template: `
        <form [formGroup]="form">
            <p>Search City</p>
            <br>
            <evo-autocomplete
                [items]="cities$ | async"
                bindLabel="label"
                bindValue="value"
                formControlName="cityFiasId"
                [loading]="isSearch"
                [typeahead]="searchCity$"></evo-autocomplete>
        </form>
        <pre>{{form.value | json}}</pre>
        <div style="margin-top: 20px; text-align: center;">
            Full documentation <a href="https://ng-select.github.io/ng-select#/" target="_blank">here</a>
        </div>
        `,
        props: {
            form: (new FormBuilder()).group({
                cityFiasId: [ '', [ Validators.required ] ],
            }),
            isSearch: false,
            searchCity$,
            cities$: concat(
                of([]), // Initial Value
                searchCity$.pipe(
                    debounceTime(400),
                    distinctUntilChanged(),
                    switchMap((query) => {
                        if (!query) { return of([]); }
                        this.isSearch = true;
                        return from(fetch('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', {
                            method: 'POST', headers,
                            body: JSON.stringify({ query: query, count: 6 }),
                        })).pipe(
                            mergeMap((res) => from(res.json())),
                            catchError(() => of([])), // Empty list on Error
                            map((res) => {
                                this.isSearch = false;
                                return res['suggestions'].map(s => ({ value: s.data.city_fias_id, data: s.data, label: s.value }));
                            }),
                        );
                    }),
                ),
            ),
        },
    }))
    .add('with item templates', () => ({
        template: `
        <form [formGroup]="form">
            <p>Search Party</p>
            <br>
            <evo-autocomplete
                [items]="parties$ | async"
                bindLabel="label"
                bindValue="value"
                formControlName="inn"
                [loading]="isSearch"
                [typeahead]="searchParty$">

                <!-- Custom Selected Option Template -->
                <ng-template #labelTemp let-item="item">
                    <div class="search-item" *ngIf="item?.label">
                        <div class="search-item__line">⭐ {{item.label}} - {{item.data?.inn}}</div>
                    </div>
                </ng-template>

                <!-- Custom Option Template -->
                <ng-template #optionTemp let-item="item" let-index="index" let-searchTerm="searchTerm">
                    <div class="search-item">
                        <div class="search-item__line">Поиск: {{searchTerm}}</div>
                        <div class="search-item__line">{{index + 1}}. {{item.label}} - {{item.data?.inn}}</div>
                    </div>
                </ng-template>

                </evo-autocomplete>
        </form>
        <pre>{{form.value | json}}</pre>
        <div style="margin-top: 20px; text-align: center;">
            Full documentation <a href="https://ng-select.github.io/ng-select#/" target="_blank">here</a>
        </div>
        `,
        props: {
            form: (new FormBuilder()).group({
                inn: [ '', [ Validators.required ] ],
            }),
            isSearch: false,
            searchParty$,
            parties$: concat(
                of([]), // Initial Value
                searchParty$.pipe(
                    debounceTime(400),
                    distinctUntilChanged(),
                    switchMap((query) => {
                        if (!query) { return of([]); }
                        this.isSearch = true;
                        return from(fetch('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party', {
                            method: 'POST', headers,
                            body: JSON.stringify({ query: query, count: 6 }),
                        })).pipe(
                            mergeMap((res) => from(res.json())),
                            catchError(() => of([])), // Empty list on Error
                            map(res => {
                                this.isSearch = false;
                                return res['suggestions'].map(s => ({ value: s.data.inn, label: s.value, data: s.data }));
                            }),
                        );
                    }),
                ),
            ),
        },
    }))
    .add('with item change event', () => ({
        template: `
        <form [formGroup]="form">
            <p>Search by Fullname and split in parts</p>
            <br>
            <evo-autocomplete
                [items]="fios$ | async"
                bindLabel="label"
                bindValue="value"
                formControlName="fullname"
                [loading]="isSearch"
                [typeahead]="searchFio$"
                (change)="onChange($event)">
                </evo-autocomplete>
        </form>
        <pre>{{form.value | json}}</pre>
        <div style="margin-top: 20px; text-align: center;">
            Full documentation <a href="https://ng-select.github.io/ng-select#/" target="_blank">here</a>
        </div>
        `,
        props: {
            form: (new FormBuilder()).group({
                fullname: [ '', [ Validators.required ] ],
                name: [ '', [] ],
                surname: [ '', [] ],
                patronymic: [ '', [] ],
            }),
            isSearch: false,
            searchFio$,
            onChange: function(item) {
                const { name, surname, patronymic } = item.data;
                this.form.patchValue({
                    name: name || '',
                    surname: surname || '',
                    patronymic: patronymic || '',
                });
            },
            fios$: concat(
                of([]), // Initial Value
                searchFio$.pipe(
                    debounceTime(400),
                    distinctUntilChanged(),
                    switchMap((query) => {
                        if (!query) { return of([]); }
                        this.isSearch = true;
                        return from(fetch('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fio', {
                            method: 'POST', headers,
                            body: JSON.stringify({ query: query, count: 6 }),
                        })).pipe(
                            mergeMap((res) => from(res.json())),
                            catchError(() => of([])), // Empty list on Error
                            map(res => {
                                this.isSearch = false;
                                return res['suggestions'].map(s => ({
                                    value: s.unrestricted_value,
                                    label: s.unrestricted_value,
                                    data: s.data,
                                }));
                            }),
                        );
                    }),
                ),
            ),
        },
    }))
    .add('with loading state', () => ({
        template: `
        <form [formGroup]="form">
            <p>Loading state</p>
            <br>
            <evo-autocomplete
                [items]="items"
                formControlName="name"
                [loading]="loading">
                </evo-autocomplete>
            <br>
            <evo-button size="small" (click)="loading = !loading">Toggle loading state</evo-button>
        </form>
        <div style="margin-top: 20px; text-align: center;">
            Full documentation <a href="https://ng-select.github.io/ng-select#/" target="_blank">here</a>
        </div>
        `,
        props: {
            items: [ {
                label: 'One',
                value: 1,
            } ],
            form: (new FormBuilder()).group({
                name: [ '', [] ],
            }),
            loading: true,
        },
    }));
