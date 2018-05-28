import { Injectable, ContentChild, Input, Directive, ElementRef, IterableDiffers, KeyValueDiffers, Renderer2, ChangeDetectionStrategy, Component, EventEmitter, Inject, Output, forwardRef, ViewChild, NgModule, defineInjectable } from '@angular/core';
import { FormControlDirective, FormControlName, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { NgClass, CommonModule } from '@angular/common';
import { TextMaskModule } from 'angular2-text-mask';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EvoUiKitService {
    constructor() { }
}
EvoUiKitService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
EvoUiKitService.ctorParameters = () => [];
/** @nocollapse */ EvoUiKitService.ngInjectableDef = defineInjectable({ factory: function EvoUiKitService_Factory() { return new EvoUiKitService(); }, token: EvoUiKitService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EvoUiKitComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
EvoUiKitComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-evo-ui-kit',
                template: `
    <p>
      evo-ui-kit works!
    </p>
  `,
                styles: []
            },] },
];
/** @nocollapse */
EvoUiKitComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EvoButtonComponent {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
        this.disabled = false;
        this._loading = false;
    }
    /**
     * @return {?}
     */
    get totalClasses() {
        const /** @type {?} */ classes = [];
        if (this.size) {
            classes.push(this.size);
        }
        if (this.color) {
            classes.push(this.color);
        }
        if (this._loading) {
            classes.push('loading');
        }
        if (this.disabled) {
            classes.push('disabled');
        }
        return classes;
    }
    /**
     * @return {?}
     */
    get totalStyles() {
        const /** @type {?} */ result = {};
        if (this._loading) {
            result['width'] = `${this.clientWidth}px`;
        }
        return result;
    }
    /**
     * @return {?}
     */
    get loading() {
        return this._loading;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set loading(value) {
        this.clientWidth = this.elRef.nativeElement.getBoundingClientRect().width;
        this._loading = value;
    }
}
EvoButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'evo-button',
                template: `<div class="evo-button" [evoUiClass]="totalClasses" [ngStyle]="totalStyles">
    <span *ngIf="!loading">
        <ng-content></ng-content>
    </span>
    <span *ngIf="loading" class="evo-button__dots">
        <span class="evo-button__dot"></span>
        <span class="evo-button__dot"></span>
        <span class="evo-button__dot"></span>
    </span>
</div>
`,
                styles: [`@-webkit-keyframes fx{50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{opacity:0}}@keyframes fx{50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{opacity:0}}.evo-button{display:inline-block;padding:0 30px;height:44px;line-height:44px;vertical-align:middle;text-align:center;background-image:none;white-space:nowrap;font-family:museo,Arial,sans-serif;font-weight:700;font-size:16px;color:#fff;text-transform:uppercase;border-radius:30px;background-color:#ff7800;border:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:0;cursor:pointer;transition:background-color .3s,color .3s,border .3s}.evo-button:hover{background-color:#ff9d47;color:#fff}.evo-button:active,.evo-button:focus{background-color:#cc6000;color:#fff;outline:0}.evo-button:disabled,.evo-button_disabled{background:#d6d6d6!important;border-color:#d6d6d6!important;color:#fff!important;cursor:not-allowed}.evo-button_lined{background-color:#fff;color:#ff7800;border:1px solid #ff7800}.evo-button_lined:hover{background-color:#ff7800;color:#fff}.evo-button_lined:active,.evo-button_lined:focus{background-color:#cc6000;color:#fff;border-color:#cc6000}.evo-button_darkblue{background-color:#546e7a}.evo-button_darkblue:hover{background-color:#7596a5}.evo-button_darkblue:active,.evo-button_darkblue:focus{background-color:#283239}.evo-button_darkblue-lined{background-color:#fff;color:#546e7a;border:1px solid #546e7a}.evo-button_darkblue-lined:hover{background-color:#546e7a;color:#fff}.evo-button_darkblue-lined:active,.evo-button_darkblue-lined:focus{background-color:#283239;color:#fff;border-color:#283239}.evo-button_green{background-color:#8bc34a}.evo-button_green:hover{background-color:#a2cf6e}.evo-button_green:active,.evo-button_green:focus{background-color:#6f9c3b}.evo-button_green-lined{background-color:#fff;color:#8bc34a;border:1px solid #8bc34a}.evo-button_green-lined:hover{background-color:#8bc34a;color:#fff}.evo-button_green-lined:active,.evo-button_green-lined:focus{background-color:#6f9c3b;color:#fff;border-color:#6f9c3b}.evo-button_purple{background-color:#ab4ac3}.evo-button_purple:hover{background-color:#cc58e8}.evo-button_purple:active,.evo-button_purple:focus{background-color:#9335ab}.evo-button_full-width{width:100%;text-align:center}.evo-button_small{padding:0 20px;height:30px;line-height:30px;font-size:14px}.evo-button_large{padding:0 40px;height:60px;line-height:60px;font-size:18px}.evo-button_icon{padding-left:22px;padding-right:22px;display:inline-flex;align-items:center}.evo-button_loading{pointer-events:none;position:relative}.evo-button__dots{position:absolute;top:50%;left:50%;margin-left:-30px;margin-top:-5px}.evo-button__dot{width:10px;height:10px;border-radius:50%;float:left;background:currentColor;margin:0 5px;-webkit-transform:scale(0);transform:scale(0);-webkit-animation:1s infinite fx;animation:1s infinite fx}.evo-button__dot:nth-child(2){-webkit-animation:1s .3s infinite fx;animation:1s .3s infinite fx}.evo-button__dot:nth-child(3){-webkit-animation:1s .6s infinite fx;animation:1s .6s infinite fx}`],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
EvoButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
EvoButtonComponent.propDecorators = {
    color: [{ type: Input }],
    disabled: [{ type: Input }],
    size: [{ type: Input }],
    loading: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const EvoControlStates = {
    valid: 'valid',
    invalid: 'invalid',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EvoControlStateManager {
    /**
     * @param {?} control
     * @param {?=} extraStates
     */
    constructor(control, extraStates) {
        this.control = control;
    }
    /**
     * @return {?}
     */
    get currentState() {
        // TODO merge conditions with extraStates
        return {
            valid: this.control.dirty && this.control.touched && this.control.valid,
            invalid: this.control.dirty && this.control.touched && this.control.invalid,
        };
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EvoBaseControl {
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.formControlName && this.formControlName.control) {
            this.control = this.formControlName.control;
        }
        else if (this.formControlDirective && this.formControlDirective.control) {
            this.control = this.formControlDirective.control;
        }
        if (this.control) {
            this.stateManager = new EvoControlStateManager(this.control, this.state);
        }
        else {
            throw new Error('No template driven forms allowed with EvoUi kit');
        }
    }
    /**
     * @return {?}
     */
    get showErrors() {
        return this.stateManager.currentState[EvoControlStates.invalid];
    }
}
EvoBaseControl.propDecorators = {
    formControlName: [{ type: ContentChild, args: [FormControlName,] }],
    formControlDirective: [{ type: ContentChild, args: [FormControlDirective,] }],
    state: [{ type: Input }],
    errorsMessages: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EvoCheckboxComponent extends EvoBaseControl {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
        this.onChange(value);
    }
    /**
     * @return {?}
     */
    get checkboxClass() {
        return {
            'invalid': this.stateManager.currentState[EvoControlStates.invalid]
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setDisabledState(state) {
        this.disabled = state;
    }
}
EvoCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'evo-checkbox',
                template: `<label class="evo-checkbox">
    <input class="evo-checkbox__input"
           type="checkbox"
           [evoUiClass]="checkboxClass"
           [disabled]="disabled"
           [(ngModel)]="value">
    <span class="evo-checkbox__text">
        <ng-content></ng-content>
    </span>
</label>
<evo-control-error *ngIf="showErrors"
                   [errors]="control.errors"
                   [errorsMessages]="errorsMessages"></evo-control-error>
`,
                styles: [`.evo-checkbox{margin:0}.evo-checkbox__input{display:none}.evo-checkbox__text{position:relative;display:inline-block;padding-left:26px;color:#212121;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.evo-checkbox__text:before{content:'';position:absolute;top:2px;left:0;width:16px;height:16px;background-color:#fff;border:1px solid #dbdbdb;border-radius:3px}input:checked+.evo-checkbox__text:before{border-color:#448aff;background:url("data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3Csvg version%3D%221.1%22 id%3D%22%D0%A1%D0%BB%D0%BE%D0%B9_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 width%3D%2210px%22 height%3D%227px%22 viewBox%3D%220 0 10 7%22 enable-background%3D%22new 0 0 10 7%22 xml%3Aspace%3D%22preserve%22%3E%3Cpath id%3D%22path0_fill%22 fill%3D%22%23FFFFFF%22 d%3D%22M9.7%2C0.3c0.4%2C0.4%2C0.4%2C1%2C0%2C1.4l-5%2C5C4.4%2C7%2C3.9%2C7.1%2C3.5%2C6.9c-0.2%2C0-0.3-0.1-0.4-0.3L0.3%2C3.8%09c-0.4-0.4-0.4-1%2C0-1.4c0.4-0.4%2C1-0.4%2C1.4%2C0l2.2%2C2.2l4.3-4.3C8.6-0.1%2C9.3-0.1%2C9.7%2C0.3z%22%2F%3E%3C%2Fsvg%3E") center no-repeat #448aff}input:disabled:not(:checked)+.evo-checkbox__text{cursor:default}input:disabled:not(:checked)+.evo-checkbox__text:before{background-color:#f6f6f6}input:disabled:checked+.evo-checkbox__text{cursor:default}input:disabled:checked+.evo-checkbox__text:before{opacity:.5}input.evo-checkbox_invalid+.evo-checkbox__text:before{border-color:#f22}`],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => EvoCheckboxComponent),
                        multi: true
                    }
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EvoControlErrorComponent {
    constructor() {
        this.showCount = 1;
        this.defaultErrorMessages = {
            required: 'Заполните поле',
            email: 'Неправильно указана почта',
            phone: 'Введите телефон',
        };
    }
    /**
     * @return {?}
     */
    get errorsMap() {
        const /** @type {?} */ errorMessages = Object.assign({}, this.defaultErrorMessages, (this.errorsMessages || {}));
        const /** @type {?} */ errorKeys = Object.keys(this.errors);
        return errorKeys.map((key) => errorMessages[key]);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    showError(index) {
        return ++index <= this.showCount;
    }
}
EvoControlErrorComponent.decorators = [
    { type: Component, args: [{
                selector: 'evo-control-error',
                template: `<div class="evo-error" *ngFor="let errorMsg of errorsMap; let i = index;">
    <span *ngIf="showError(i)">{{ errorMsg }}</span>
</div>
`,
                styles: [`.evo-error{font-size:14px;color:#f22;font-style:italic;margin-top:10px}`],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
EvoControlErrorComponent.propDecorators = {
    errors: [{ type: Input }],
    errorsMessages: [{ type: Input }],
    showCount: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EvoInputComponent extends EvoBaseControl {
    constructor() {
        super();
        this.type = 'text';
        this.tooltipShown = false;
        this.disabled = false;
        this.focused = false;
        this.tooltipVisibilityTimeout = false;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.autoFocus) {
            this.inputElement.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (value || this._value) {
            this._value = value;
            this.onChange(value);
        }
    }
    /**
     * @return {?}
     */
    get inputClass() {
        return {
            'focused': this.focused,
            'disabled': this.disabled,
            'valid': this.stateManager.currentState[EvoControlStates.valid],
            'invalid': this.stateManager.currentState[EvoControlStates.invalid]
        };
    }
    /**
     * @return {?}
     */
    get hasAdditional() {
        return !!this.tooltip;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value) {
            this.value = value;
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setDisabledState(state) {
        this.disabled = state;
    }
    /**
     * @return {?}
     */
    onFocus() {
        if (!this.focused) {
            this.focused = true;
        }
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.focused = false;
        this.onTouched();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onTooltipClick(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    /**
     * @return {?}
     */
    hideTooltip() {
        this.tooltipVisibilityTimeout = true;
        setTimeout(() => {
            if (this.tooltipVisibilityTimeout) {
                this.tooltipShown = false;
            }
        }, 25);
    }
    /**
     * @return {?}
     */
    showTooltip() {
        this.tooltipShown = true;
        this.tooltipVisibilityTimeout = false;
    }
}
EvoInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'evo-input',
                template: `<div class="evo-input" [evoUiClass]="inputClass">
    <label class="evo-input__container">
        <input #input
               *ngIf="!mask"
               class="evo-input__field"
               (focus)="onFocus()"
               (blur)="onBlur()"
               type="{{ type }}"
               placeholder="{{ placeholder }}"
               [(ngModel)]="value"
               [disabled]="disabled">
        <input #input
               *ngIf="mask"
               class="evo-input__field"
               (focus)="onFocus()"
               (blur)="onBlur()"
               type="{{ type }}"
               placeholder="{{ placeholder }}"
               [(ngModel)]="value"
               [textMask]="mask"
               [disabled]="disabled">
        <div class="evo-input__additional"
             *ngIf="hasAdditional">
            <div class="evo-input__tooltip"
                 *ngIf="tooltip"
                 (mouseenter)="showTooltip()"
                 (mouseleave)="hideTooltip()"
                 (click)="onTooltipClick($event)">?</div>
            <div *ngIf="tooltip && tooltipShown"
                 (click)="onTooltipClick($event)"
                 (mouseenter)="showTooltip()"
                 (mouseleave)="hideTooltip()"
                 class="evo-input__tooltip-label">{{ tooltip }}</div>
        </div>
    </label>
</div>
<evo-control-error *ngIf="showErrors"
                   [errors]="control.errors"
                   [errorsMessages]="errorsMessages"></evo-control-error>
`,
                styles: [`.evo-input{display:flex;width:100%;height:48px;line-height:48px;white-space:nowrap;background-color:#fff;background-image:none;border:1px solid #dbdbdb;border-radius:4px;transition:box-shadow .3s,border .3s;outline:0}.evo-input__container{display:flex;align-items:center;margin:0;width:100%;height:100%;border-radius:4px;cursor:text}.evo-input_focused{box-shadow:0 0 2px 0 #546e7a!important;border:1px solid #546e7a}.evo-input_disabled{background-color:#f6f6f6!important;color:#9b9b9b}.evo-input_disabled .evo-input__container{cursor:default}.evo-input_valid{border-color:#8bc34a}.evo-input_invalid{border-color:#f22}.evo-input__field{height:100%;border:none;margin:0;padding:0 20px;outline:0;font-size:16px;font-weight:400;color:#000;flex-grow:1;border-radius:4px;width:100%}.evo-input__field::-webkit-input-placeholder{color:#9b9b9b}.evo-input__field::-moz-placeholder{color:#9b9b9b;opacity:1}.evo-input__field:-ms-input-placeholder{color:#9b9b9b}.evo-input__field:disabled{background-color:#f6f6f6!important;color:#9b9b9b}.evo-input__field:not(:last-child){padding-right:0}.evo-input__tooltip{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:0 10px;width:24px;height:24px;border-radius:50%;background:#eceff1;line-height:24px;text-align:center;font-family:"Open Sans",Arial,sans-serif;font-size:18px;font-weight:600;color:#546e7a;cursor:pointer}.evo-input__tooltip-label{position:absolute;width:100%;top:calc(100% - 2px);left:0;background-color:#fff8e6;z-index:1;border-radius:4px;padding:10px 10px 10px 20px;color:#212121;display:flex;box-shadow:0 4px 12px 0 rgba(0,0,0,.2);line-height:normal;white-space:normal;cursor:default}.evo-input__tooltip-label:before{content:'';top:-20px;left:calc(100% - 34px);border:10px solid transparent;border-bottom:10px solid #fff8e6;position:absolute;pointer-events:none}@media (min-width:1200px){.evo-input__tooltip-label{left:calc(50% - 22px)}.evo-input__tooltip-label:before{content:'';top:-20px;left:calc(50% - 12px);border:10px solid transparent;border-bottom:10px solid #fff8e6;position:absolute}}`],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => EvoInputComponent),
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
EvoInputComponent.ctorParameters = () => [];
EvoInputComponent.propDecorators = {
    autoFocus: [{ type: Input }],
    mask: [{ type: Input }],
    placeholder: [{ type: Input }],
    tooltip: [{ type: Input }],
    type: [{ type: Input }],
    _value: [{ type: Input, args: ['value',] }],
    inputElement: [{ type: ViewChild, args: ['input',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const EvoBannerTypes = {
    large: 'large',
    small: 'small',
    fullWidth: 'full-width',
};
const ɵ0 = window;
class EvoBannerComponent {
    /**
     * @param {?} window
     */
    constructor(window) {
        this.window = window;
        this.type = EvoBannerTypes.small;
        this.bannerClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    onBannerClick() {
        this.bannerClick.emit(this.banner);
    }
}
EvoBannerComponent.decorators = [
    { type: Component, args: [{
                selector: 'evo-banner',
                template: `<a class="evo-banner"
   target="_blank"
   [attr.href]="banner?.url"
   (click)="onBannerClick()"
   [evoUiClass]="type"
   [ngStyle]="{'background-color': banner?.background}">
    <div class="evo-banner__content">
        <div class="evo-banner__title">{{ banner?.title }}</div>
        <button class="btn btn-white promo-btn"
                [ngStyle]="{'color': banner?.background}"
                *ngIf="banner?.button">{{ banner?.button }}</button>
    </div>
    <img class="evo-banner__img"
         src="{{ banner?.image }}"
         alt="{{ banner?.title }}">
</a>
`,
                styles: [`.evo-banner{display:block;position:relative;height:430px;padding:12px 20px;border-radius:6px;overflow:hidden;color:#fff;cursor:pointer;transition:box-shadow .3s}.evo-banner:hover{box-shadow:0 4px 12px rgba(0,0,0,.2)}.evo-banner__content{position:relative;z-index:2}.evo-banner__content .promo-btn{height:40px;padding:0 20px;min-width:156px;font-weight:600;font-size:14px;text-transform:uppercase;display:table-cell;vertical-align:middle}.evo-banner__content .promo-btn:hover{background:#fff}.evo-banner__content .promo-btn:active{box-shadow:none}.evo-banner__content .promo-btn span{font-size:18px}.evo-banner__title{font-family:museo,Arial,sans-serif;font-weight:700;line-height:1.3;font-size:30px;margin-bottom:10px}.evo-banner__description{font-size:14px;line-height:1.3;margin-top:20px;margin-bottom:10px}.evo-banner__img{position:absolute;bottom:0;right:0;width:290px;height:290px}.evo-banner_full-width{padding:20px}.evo-banner_full-width .evo-banner__title{line-height:38px}@media (min-width:768px){.evo-banner{padding:30px 40px}.evo-banner__content{max-width:60%}.evo-banner__description{max-width:250px}.evo-banner__img{width:430px;height:430px}.evo-banner_full-width{height:240px;padding:30px}.evo-banner_full-width .evo-banner__content{max-width:50%}.evo-banner_full-width .evo-banner__title{font-size:36px;line-height:44px}.evo-banner_full-width .evo-banner__img{height:240px;width:240px}}@media (min-width:1200px){.evo-banner{padding:30px 40px}.evo-banner__content{max-width:63%}.evo-banner_small{height:210px;padding:20px}.evo-banner_small .evo-banner__title{font-size:20px;margin-bottom:20px}.evo-banner_small .promo-btn{height:32px}.evo-banner_small .evo-banner__img{width:210px;height:210px}.evo-banner_full-width .evo-banner__content{max-width:63%}}`],
                providers: [
                    { provide: 'Window', useValue: ɵ0 }
                ],
            },] },
];
/** @nocollapse */
EvoBannerComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['Window',] }] }
];
EvoBannerComponent.propDecorators = {
    banner: [{ type: Input }],
    type: [{ type: Input }],
    bannerClick: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ isObject = (item) => item != null && typeof item === 'object';
const /** @type {?} */ isString = (item) => typeof item === 'string';
const /** @type {?} */ isArray = (item) => Array.isArray(item);
class EvoUiClassDirective extends NgClass {
    /**
     * @param {?} _iterableDiffers
     * @param {?} _keyValueDiffers
     * @param {?} _ngEl
     * @param {?} _renderer
     */
    constructor(_iterableDiffers, _keyValueDiffers, _ngEl, _renderer) {
        super(_iterableDiffers, _keyValueDiffers, _ngEl, _renderer);
        this.prefix = _ngEl.nativeElement.classList[0];
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set setterOfClass(data) {
        if (isArray(data)) {
            data = data.map((className) => `${this.prefix}_${className}`);
        }
        else if (isObject(data)) {
            data = Object.keys(data).reduce((newData, key) => {
                newData[`${this.prefix}_${key}`] = data[key];
                return newData;
            }, {});
        }
        else if (isString(data)) {
            data = data
                .split(' ')
                .map((myClass) => `${this.prefix}_${myClass}`)
                .join(' ');
        }
        else {
            throw new Error('Data type not allowed!');
        }
        this.ngClass = data;
    }
}
EvoUiClassDirective.decorators = [
    { type: Directive, args: [{
                selector: '[evoUiClass]'
            },] },
];
/** @nocollapse */
EvoUiClassDirective.ctorParameters = () => [
    { type: IterableDiffers },
    { type: KeyValueDiffers },
    { type: ElementRef },
    { type: Renderer2 }
];
EvoUiClassDirective.propDecorators = {
    setterOfClass: [{ type: Input, args: ['evoUiClass',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EvoHeaderComponent {
    constructor() {
        this.size = 'h1';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
EvoHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'evo-header',
                template: `<span class="header" [ngClass]="{
  'header_orange': color==='white',
  'header_h1': size==='h1',
  'header_h2': size==='h2',
  'header_h3': size==='h3',
  'header_h4': size==='h4'
}">
  <ng-content></ng-content>
</span>`,
                styles: [`.header{font-family:museo,Arial,sans-serif;font-weight:700;color:#333f48;display:block}.header_h1{font-size:30px;line-height:38px}@media (min-width:768px){.header_h1{font-size:36px;line-height:44px}}.header_h2{font-size:24px;line-height:32px}@media (min-width:768px){.header_h2{font-size:30px;line-height:38px}}.header_h3{font-size:18px;line-height:26px}@media (min-width:768px){.header_h3{font-size:24px;line-height:32px}}.header_h4{font-size:14px;line-height:22px}@media (min-width:768px){.header_h4{font-size:18px;line-height:26px}}.header_orange{color:#fff}`]
            },] },
];
/** @nocollapse */
EvoHeaderComponent.ctorParameters = () => [];
EvoHeaderComponent.propDecorators = {
    size: [{ type: Input }],
    color: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ components = [
    EvoButtonComponent,
    EvoCheckboxComponent,
    EvoControlErrorComponent,
    EvoInputComponent,
    EvoBannerComponent,
    EvoHeaderComponent,
];
const /** @type {?} */ directives = [
    EvoUiClassDirective,
];
const /** @type {?} */ bundle = [
    ...components,
    ...directives
];
class EvoUiKitModule {
}
EvoUiKitModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    TextMaskModule,
                ],
                declarations: [
                    EvoUiKitComponent,
                    ...bundle,
                ],
                exports: [
                    EvoUiKitComponent,
                    ...bundle,
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { EvoUiKitService, EvoUiKitComponent, EvoUiKitModule, EvoBaseControl as ɵc, EvoBannerComponent as ɵf, EvoButtonComponent as ɵa, EvoCheckboxComponent as ɵb, EvoControlErrorComponent as ɵd, EvoHeaderComponent as ɵg, EvoInputComponent as ɵe, EvoUiClassDirective as ɵh };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLXVpLWtpdC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vZXZvLXVpLWtpdC9saWIvZXZvLXVpLWtpdC5zZXJ2aWNlLnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9ldm8tdWkta2l0LmNvbXBvbmVudC50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tcG9uZW50cy9ldm8tYnV0dG9uL2V2by1idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21tb24vZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci9ldm8tY29udHJvbC1zdGF0ZXMuZW51bS50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tbW9uL2V2by1jb250cm9sLXN0YXRlLW1hbmFnZXIvZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tbW9uL2V2by1iYXNlLWNvbnRyb2wudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLWNoZWNrYm94L2V2by1jaGVja2JveC5jb21wb25lbnQudHMiLCJuZzovL2V2by11aS1raXQvbGliL2NvbXBvbmVudHMvZXZvLWNvbnRyb2wtZXJyb3IvZXZvLWNvbnRyb2wtZXJyb3IuY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21wb25lbnRzL2V2by1pbnB1dC9ldm8taW5wdXQuY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9jb21wb25lbnRzL2V2by1iYW5uZXIvZXZvLWJhbm5lci5jb21wb25lbnQudHMiLCJuZzovL2V2by11aS1raXQvbGliL2RpcmVjdGl2ZXMvZXZvLXVpLWNsYXNzLmRpcmVjdGl2ZS50cyIsIm5nOi8vZXZvLXVpLWtpdC9saWIvY29tcG9uZW50cy9ldm8taGVhZGVyL2V2by1oZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9ldm8tdWkta2l0L2xpYi9ldm8tdWkta2l0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEV2b1VpS2l0U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1ldm8tdWkta2l0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIGV2by11aS1raXQgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEV2b1VpS2l0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBlbnVtIEV2b0J1dHRvblNpemVzIHtcbiAgICBmdWxsV2lkdGggPSAnZnVsbC13aWR0aCcsXG4gICAgc21hbGwgPSAnc21hbGwnLFxuICAgIGxhcmdlID0gJ2xhcmdlJyxcbn1cblxuZXhwb3J0IGVudW0gRXZvQnV0dG9uU3R5bGVzIHtcbiAgICBsaW5lZCA9ICdsaW5lZCcsXG4gICAgZGFya2JsdWUgPSAnZGFya2JsdWUnLFxuICAgIGRhcmtibHVlTGluZWQgPSAnZGFya2JsdWUtbGluZWQnLFxuICAgIGdyZWVuID0gJ2dyZWVuJyxcbiAgICBncmVlbmxpbmVkID0gJ2dyZWVuLWxpbmVkJyxcbiAgICBwdXJwbGUgPSAncHVycGxlJ1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2V2by1idXR0b24nLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImV2by1idXR0b25cIiBbZXZvVWlDbGFzc109XCJ0b3RhbENsYXNzZXNcIiBbbmdTdHlsZV09XCJ0b3RhbFN0eWxlc1wiPlxuICAgIDxzcGFuICpuZ0lmPVwiIWxvYWRpbmdcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cImxvYWRpbmdcIiBjbGFzcz1cImV2by1idXR0b25fX2RvdHNcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJldm8tYnV0dG9uX19kb3RcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXZvLWJ1dHRvbl9fZG90XCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImV2by1idXR0b25fX2RvdFwiPjwvc3Bhbj5cbiAgICA8L3NwYW4+XG48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYEAtd2Via2l0LWtleWZyYW1lcyBmeHs1MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX0xMDAle29wYWNpdHk6MH19QGtleWZyYW1lcyBmeHs1MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX0xMDAle29wYWNpdHk6MH19LmV2by1idXR0b257ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzowIDMwcHg7aGVpZ2h0OjQ0cHg7bGluZS1oZWlnaHQ6NDRweDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7dGV4dC1hbGlnbjpjZW50ZXI7YmFja2dyb3VuZC1pbWFnZTpub25lO3doaXRlLXNwYWNlOm5vd3JhcDtmb250LWZhbWlseTptdXNlbyxBcmlhbCxzYW5zLXNlcmlmO2ZvbnQtd2VpZ2h0OjcwMDtmb250LXNpemU6MTZweDtjb2xvcjojZmZmO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtib3JkZXItcmFkaXVzOjMwcHg7YmFja2dyb3VuZC1jb2xvcjojZmY3ODAwO2JvcmRlcjpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvdXRsaW5lOjA7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4zcyxjb2xvciAuM3MsYm9yZGVyIC4zc30uZXZvLWJ1dHRvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZjlkNDc7Y29sb3I6I2ZmZn0uZXZvLWJ1dHRvbjphY3RpdmUsLmV2by1idXR0b246Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojY2M2MDAwO2NvbG9yOiNmZmY7b3V0bGluZTowfS5ldm8tYnV0dG9uOmRpc2FibGVkLC5ldm8tYnV0dG9uX2Rpc2FibGVke2JhY2tncm91bmQ6I2Q2ZDZkNiFpbXBvcnRhbnQ7Ym9yZGVyLWNvbG9yOiNkNmQ2ZDYhaW1wb3J0YW50O2NvbG9yOiNmZmYhaW1wb3J0YW50O2N1cnNvcjpub3QtYWxsb3dlZH0uZXZvLWJ1dHRvbl9saW5lZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6I2ZmNzgwMDtib3JkZXI6MXB4IHNvbGlkICNmZjc4MDB9LmV2by1idXR0b25fbGluZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmY3ODAwO2NvbG9yOiNmZmZ9LmV2by1idXR0b25fbGluZWQ6YWN0aXZlLC5ldm8tYnV0dG9uX2xpbmVkOmZvY3Vze2JhY2tncm91bmQtY29sb3I6I2NjNjAwMDtjb2xvcjojZmZmO2JvcmRlci1jb2xvcjojY2M2MDAwfS5ldm8tYnV0dG9uX2RhcmtibHVle2JhY2tncm91bmQtY29sb3I6IzU0NmU3YX0uZXZvLWJ1dHRvbl9kYXJrYmx1ZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiM3NTk2YTV9LmV2by1idXR0b25fZGFya2JsdWU6YWN0aXZlLC5ldm8tYnV0dG9uX2RhcmtibHVlOmZvY3Vze2JhY2tncm91bmQtY29sb3I6IzI4MzIzOX0uZXZvLWJ1dHRvbl9kYXJrYmx1ZS1saW5lZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzU0NmU3YTtib3JkZXI6MXB4IHNvbGlkICM1NDZlN2F9LmV2by1idXR0b25fZGFya2JsdWUtbGluZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojNTQ2ZTdhO2NvbG9yOiNmZmZ9LmV2by1idXR0b25fZGFya2JsdWUtbGluZWQ6YWN0aXZlLC5ldm8tYnV0dG9uX2RhcmtibHVlLWxpbmVkOmZvY3Vze2JhY2tncm91bmQtY29sb3I6IzI4MzIzOTtjb2xvcjojZmZmO2JvcmRlci1jb2xvcjojMjgzMjM5fS5ldm8tYnV0dG9uX2dyZWVue2JhY2tncm91bmQtY29sb3I6IzhiYzM0YX0uZXZvLWJ1dHRvbl9ncmVlbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNhMmNmNmV9LmV2by1idXR0b25fZ3JlZW46YWN0aXZlLC5ldm8tYnV0dG9uX2dyZWVuOmZvY3Vze2JhY2tncm91bmQtY29sb3I6IzZmOWMzYn0uZXZvLWJ1dHRvbl9ncmVlbi1saW5lZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzhiYzM0YTtib3JkZXI6MXB4IHNvbGlkICM4YmMzNGF9LmV2by1idXR0b25fZ3JlZW4tbGluZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojOGJjMzRhO2NvbG9yOiNmZmZ9LmV2by1idXR0b25fZ3JlZW4tbGluZWQ6YWN0aXZlLC5ldm8tYnV0dG9uX2dyZWVuLWxpbmVkOmZvY3Vze2JhY2tncm91bmQtY29sb3I6IzZmOWMzYjtjb2xvcjojZmZmO2JvcmRlci1jb2xvcjojNmY5YzNifS5ldm8tYnV0dG9uX3B1cnBsZXtiYWNrZ3JvdW5kLWNvbG9yOiNhYjRhYzN9LmV2by1idXR0b25fcHVycGxlOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2NjNThlOH0uZXZvLWJ1dHRvbl9wdXJwbGU6YWN0aXZlLC5ldm8tYnV0dG9uX3B1cnBsZTpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiM5MzM1YWJ9LmV2by1idXR0b25fZnVsbC13aWR0aHt3aWR0aDoxMDAlO3RleHQtYWxpZ246Y2VudGVyfS5ldm8tYnV0dG9uX3NtYWxse3BhZGRpbmc6MCAyMHB4O2hlaWdodDozMHB4O2xpbmUtaGVpZ2h0OjMwcHg7Zm9udC1zaXplOjE0cHh9LmV2by1idXR0b25fbGFyZ2V7cGFkZGluZzowIDQwcHg7aGVpZ2h0OjYwcHg7bGluZS1oZWlnaHQ6NjBweDtmb250LXNpemU6MThweH0uZXZvLWJ1dHRvbl9pY29ue3BhZGRpbmctbGVmdDoyMnB4O3BhZGRpbmctcmlnaHQ6MjJweDtkaXNwbGF5OmlubGluZS1mbGV4O2FsaWduLWl0ZW1zOmNlbnRlcn0uZXZvLWJ1dHRvbl9sb2FkaW5ne3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246cmVsYXRpdmV9LmV2by1idXR0b25fX2RvdHN7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTttYXJnaW4tbGVmdDotMzBweDttYXJnaW4tdG9wOi01cHh9LmV2by1idXR0b25fX2RvdHt3aWR0aDoxMHB4O2hlaWdodDoxMHB4O2JvcmRlci1yYWRpdXM6NTAlO2Zsb2F0OmxlZnQ7YmFja2dyb3VuZDpjdXJyZW50Q29sb3I7bWFyZ2luOjAgNXB4Oy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKTstd2Via2l0LWFuaW1hdGlvbjoxcyBpbmZpbml0ZSBmeDthbmltYXRpb246MXMgaW5maW5pdGUgZnh9LmV2by1idXR0b25fX2RvdDpudGgtY2hpbGQoMil7LXdlYmtpdC1hbmltYXRpb246MXMgLjNzIGluZmluaXRlIGZ4O2FuaW1hdGlvbjoxcyAuM3MgaW5maW5pdGUgZnh9LmV2by1idXR0b25fX2RvdDpudGgtY2hpbGQoMyl7LXdlYmtpdC1hbmltYXRpb246MXMgLjZzIGluZmluaXRlIGZ4O2FuaW1hdGlvbjoxcyAuNnMgaW5maW5pdGUgZnh9YF0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRXZvQnV0dG9uQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBjb2xvcjogRXZvQnV0dG9uU3R5bGVzO1xuICAgIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gICAgQElucHV0KCkgc2l6ZTogRXZvQnV0dG9uU2l6ZXM7XG5cbiAgICBwcml2YXRlIF9sb2FkaW5nID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBjbGllbnRXaWR0aDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZikge1xuXG4gICAgfVxuXG4gICAgZ2V0IHRvdGFsQ2xhc3NlcygpOiBzdHJpbmdbXSB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXM6IHN0cmluZ1tdID0gW107XG5cbiAgICAgICAgaWYgKHRoaXMuc2l6ZSkge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuc2l6ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb2xvcikge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2xvYWRpbmcpIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCgnbG9hZGluZycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCgnZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjbGFzc2VzO1xuICAgIH1cblxuICAgIGdldCB0b3RhbFN0eWxlcygpOiB7W3N0eWxlS2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgICAgICAgaWYgKHRoaXMuX2xvYWRpbmcpIHtcbiAgICAgICAgICAgIHJlc3VsdFsnd2lkdGgnXSA9IGAke3RoaXMuY2xpZW50V2lkdGh9cHhgO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBnZXQgbG9hZGluZygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRpbmc7XG4gICAgfVxuXG4gICAgQElucHV0KCkgc2V0IGxvYWRpbmcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5jbGllbnRXaWR0aCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgdGhpcy5fbG9hZGluZyA9IHZhbHVlO1xuICAgIH1cbn1cbiIsImV4cG9ydCBlbnVtIEV2b0NvbnRyb2xTdGF0ZXMge1xuICB2YWxpZCA9ICd2YWxpZCcsXG4gIGludmFsaWQgPSAnaW52YWxpZCcsXG59XG4iLCJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJRXZvQ29udHJvbFN0YXRlIH0gZnJvbSAnLi9ldm8tY29udHJvbC1zdGF0ZS5pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgRXZvQ29udHJvbFN0YXRlTWFuYWdlciB7XG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcblxuICBjb25zdHJ1Y3Rvcihjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsIGV4dHJhU3RhdGVzPzogSUV2b0NvbnRyb2xTdGF0ZSkge1xuICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2w7XG4gIH1cblxuICBnZXQgY3VycmVudFN0YXRlKCk6IElFdm9Db250cm9sU3RhdGUge1xuICAgIC8vIFRPRE8gbWVyZ2UgY29uZGl0aW9ucyB3aXRoIGV4dHJhU3RhdGVzXG5cbiAgICByZXR1cm4ge1xuICAgICAgdmFsaWQ6IHRoaXMuY29udHJvbC5kaXJ0eSAmJiB0aGlzLmNvbnRyb2wudG91Y2hlZCAmJiB0aGlzLmNvbnRyb2wudmFsaWQsXG4gICAgICBpbnZhbGlkOiB0aGlzLmNvbnRyb2wuZGlydHkgJiYgdGhpcy5jb250cm9sLnRvdWNoZWQgJiYgdGhpcy5jb250cm9sLmludmFsaWQsXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ29udGVudENoaWxkLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBGb3JtQ29udHJvbERpcmVjdGl2ZSwgRm9ybUNvbnRyb2xOYW1lIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSUV2b0NvbnRyb2xTdGF0ZSB9IGZyb20gJy4vZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci9ldm8tY29udHJvbC1zdGF0ZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRXZvQ29udHJvbFN0YXRlTWFuYWdlciB9IGZyb20gJy4vZXZvLWNvbnRyb2wtc3RhdGUtbWFuYWdlci9ldm8tY29udHJvbC1zdGF0ZS1tYW5hZ2VyJztcbmltcG9ydCB7IElFdm9Db250cm9sRXJyb3IgfSBmcm9tICcuLi9jb21wb25lbnRzL2V2by1jb250cm9sLWVycm9yL2V2by1jb250cm9sLWVycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdm9Db250cm9sU3RhdGVzIH0gZnJvbSAnLi9ldm8tY29udHJvbC1zdGF0ZS1tYW5hZ2VyL2V2by1jb250cm9sLXN0YXRlcy5lbnVtJztcblxuZXhwb3J0IGNsYXNzIEV2b0Jhc2VDb250cm9sIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBDb250ZW50Q2hpbGQoRm9ybUNvbnRyb2xOYW1lKSBmb3JtQ29udHJvbE5hbWU6IEZvcm1Db250cm9sTmFtZTtcbiAgQENvbnRlbnRDaGlsZChGb3JtQ29udHJvbERpcmVjdGl2ZSkgZm9ybUNvbnRyb2xEaXJlY3RpdmU6IEZvcm1Db250cm9sRGlyZWN0aXZlO1xuICBASW5wdXQoKSBzdGF0ZTogSUV2b0NvbnRyb2xTdGF0ZTtcbiAgQElucHV0KCkgZXJyb3JzTWVzc2FnZXM6IElFdm9Db250cm9sRXJyb3I7XG5cbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sO1xuICBzdGF0ZU1hbmFnZXI6IEV2b0NvbnRyb2xTdGF0ZU1hbmFnZXI7XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICh0aGlzLmZvcm1Db250cm9sTmFtZSAmJiB0aGlzLmZvcm1Db250cm9sTmFtZS5jb250cm9sKSB7XG4gICAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLmZvcm1Db250cm9sTmFtZS5jb250cm9sO1xuICAgIH0gZWxzZSBpZiAodGhpcy5mb3JtQ29udHJvbERpcmVjdGl2ZSAmJiB0aGlzLmZvcm1Db250cm9sRGlyZWN0aXZlLmNvbnRyb2wpIHtcbiAgICAgIHRoaXMuY29udHJvbCA9IHRoaXMuZm9ybUNvbnRyb2xEaXJlY3RpdmUuY29udHJvbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb250cm9sKSB7XG4gICAgICB0aGlzLnN0YXRlTWFuYWdlciA9IG5ldyBFdm9Db250cm9sU3RhdGVNYW5hZ2VyKHRoaXMuY29udHJvbCwgdGhpcy5zdGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gdGVtcGxhdGUgZHJpdmVuIGZvcm1zIGFsbG93ZWQgd2l0aCBFdm9VaSBraXQnKTtcbiAgICB9XG4gIH1cblxuICBnZXQgc2hvd0Vycm9ycygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZU1hbmFnZXIuY3VycmVudFN0YXRlW0V2b0NvbnRyb2xTdGF0ZXMuaW52YWxpZF07XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBFdm9Db250cm9sU3RhdGVzIH0gZnJvbSAnLi4vLi4vY29tbW9uL2V2by1jb250cm9sLXN0YXRlLW1hbmFnZXIvZXZvLWNvbnRyb2wtc3RhdGVzLmVudW0nO1xuaW1wb3J0IHsgRXZvQmFzZUNvbnRyb2wgfSBmcm9tICcuLi8uLi9jb21tb24vZXZvLWJhc2UtY29udHJvbCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdldm8tY2hlY2tib3gnLFxuICAgIHRlbXBsYXRlOiBgPGxhYmVsIGNsYXNzPVwiZXZvLWNoZWNrYm94XCI+XG4gICAgPGlucHV0IGNsYXNzPVwiZXZvLWNoZWNrYm94X19pbnB1dFwiXG4gICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgIFtldm9VaUNsYXNzXT1cImNoZWNrYm94Q2xhc3NcIlxuICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJldm8tY2hlY2tib3hfX3RleHRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvc3Bhbj5cbjwvbGFiZWw+XG48ZXZvLWNvbnRyb2wtZXJyb3IgKm5nSWY9XCJzaG93RXJyb3JzXCJcbiAgICAgICAgICAgICAgICAgICBbZXJyb3JzXT1cImNvbnRyb2wuZXJyb3JzXCJcbiAgICAgICAgICAgICAgICAgICBbZXJyb3JzTWVzc2FnZXNdPVwiZXJyb3JzTWVzc2FnZXNcIj48L2V2by1jb250cm9sLWVycm9yPlxuYCxcbiAgICBzdHlsZXM6IFtgLmV2by1jaGVja2JveHttYXJnaW46MH0uZXZvLWNoZWNrYm94X19pbnB1dHtkaXNwbGF5Om5vbmV9LmV2by1jaGVja2JveF9fdGV4dHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nLWxlZnQ6MjZweDtjb2xvcjojMjEyMTIxO2N1cnNvcjpwb2ludGVyOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uZXZvLWNoZWNrYm94X190ZXh0OmJlZm9yZXtjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlO3RvcDoycHg7bGVmdDowO3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgI2RiZGJkYjtib3JkZXItcmFkaXVzOjNweH1pbnB1dDpjaGVja2VkKy5ldm8tY2hlY2tib3hfX3RleHQ6YmVmb3Jle2JvcmRlci1jb2xvcjojNDQ4YWZmO2JhY2tncm91bmQ6dXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQyUzRnhtbCB2ZXJzaW9uJTNEJTIyMS4wJTIyIGVuY29kaW5nJTNEJTIydXRmLTglMjIlM0YlM0UlM0NzdmcgdmVyc2lvbiUzRCUyMjEuMSUyMiBpZCUzRCUyMiVEMCVBMSVEMCVCQiVEMCVCRSVEMCVCOV8xJTIyIHhtbG5zJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJTIyIHhtbG5zJTNBeGxpbmslM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjE5OTklMkZ4bGluayUyMiB4JTNEJTIyMHB4JTIyIHklM0QlMjIwcHglMjIlMDkgd2lkdGglM0QlMjIxMHB4JTIyIGhlaWdodCUzRCUyMjdweCUyMiB2aWV3Qm94JTNEJTIyMCAwIDEwIDclMjIgZW5hYmxlLWJhY2tncm91bmQlM0QlMjJuZXcgMCAwIDEwIDclMjIgeG1sJTNBc3BhY2UlM0QlMjJwcmVzZXJ2ZSUyMiUzRSUzQ3BhdGggaWQlM0QlMjJwYXRoMF9maWxsJTIyIGZpbGwlM0QlMjIlMjNGRkZGRkYlMjIgZCUzRCUyMk05LjclMkMwLjNjMC40JTJDMC40JTJDMC40JTJDMSUyQzAlMkMxLjRsLTUlMkM1QzQuNCUyQzclMkMzLjklMkM3LjElMkMzLjUlMkM2LjljLTAuMiUyQzAtMC4zLTAuMS0wLjQtMC4zTDAuMyUyQzMuOCUwOWMtMC40LTAuNC0wLjQtMSUyQzAtMS40YzAuNC0wLjQlMkMxLTAuNCUyQzEuNCUyQzBsMi4yJTJDMi4ybDQuMy00LjNDOC42LTAuMSUyQzkuMy0wLjElMkM5LjclMkMwLjN6JTIyJTJGJTNFJTNDJTJGc3ZnJTNFXCIpIGNlbnRlciBuby1yZXBlYXQgIzQ0OGFmZn1pbnB1dDpkaXNhYmxlZDpub3QoOmNoZWNrZWQpKy5ldm8tY2hlY2tib3hfX3RleHR7Y3Vyc29yOmRlZmF1bHR9aW5wdXQ6ZGlzYWJsZWQ6bm90KDpjaGVja2VkKSsuZXZvLWNoZWNrYm94X190ZXh0OmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOiNmNmY2ZjZ9aW5wdXQ6ZGlzYWJsZWQ6Y2hlY2tlZCsuZXZvLWNoZWNrYm94X190ZXh0e2N1cnNvcjpkZWZhdWx0fWlucHV0OmRpc2FibGVkOmNoZWNrZWQrLmV2by1jaGVja2JveF9fdGV4dDpiZWZvcmV7b3BhY2l0eTouNX1pbnB1dC5ldm8tY2hlY2tib3hfaW52YWxpZCsuZXZvLWNoZWNrYm94X190ZXh0OmJlZm9yZXtib3JkZXItY29sb3I6I2YyMn1gXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFdm9DaGVja2JveENvbXBvbmVudCksXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBFdm9DaGVja2JveENvbXBvbmVudCBleHRlbmRzIEV2b0Jhc2VDb250cm9sIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gICAgcHVibGljIGRpc2FibGVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfdmFsdWU6IGJvb2xlYW47XG5cbiAgICBvbkNoYW5nZSA9IChfKSA9PiB7fTtcbiAgICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICAgIGdldCB2YWx1ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cblxuICAgIHNldCB2YWx1ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXQgY2hlY2tib3hDbGFzcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdpbnZhbGlkJzogdGhpcy5zdGF0ZU1hbmFnZXIuY3VycmVudFN0YXRlW0V2b0NvbnRyb2xTdGF0ZXMuaW52YWxpZF1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgICB9XG5cbiAgICBzZXREaXNhYmxlZFN0YXRlKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBzdGF0ZTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUV2b0NvbnRyb2xFcnJvciB7XG4gICAgW2Vycm9yOiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZXZvLWNvbnRyb2wtZXJyb3InLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImV2by1lcnJvclwiICpuZ0Zvcj1cImxldCBlcnJvck1zZyBvZiBlcnJvcnNNYXA7IGxldCBpID0gaW5kZXg7XCI+XG4gICAgPHNwYW4gKm5nSWY9XCJzaG93RXJyb3IoaSlcIj57eyBlcnJvck1zZyB9fTwvc3Bhbj5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgLmV2by1lcnJvcntmb250LXNpemU6MTRweDtjb2xvcjojZjIyO2ZvbnQtc3R5bGU6aXRhbGljO21hcmdpbi10b3A6MTBweH1gXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBFdm9Db250cm9sRXJyb3JDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIGVycm9yczogYW55O1xuICAgIEBJbnB1dCgpIGVycm9yc01lc3NhZ2VzOiBJRXZvQ29udHJvbEVycm9yO1xuICAgIEBJbnB1dCgpIHNob3dDb3VudCA9IDE7XG5cbiAgICBwcml2YXRlIGRlZmF1bHRFcnJvck1lc3NhZ2VzOiBJRXZvQ29udHJvbEVycm9yID0ge1xuICAgICAgICByZXF1aXJlZDogJ8OQwpfDkMKww5DCv8OQwr7DkMK7w5DCvcOQwrjDkcKCw5DCtSDDkMK/w5DCvsOQwrvDkMK1JyxcbiAgICAgICAgZW1haWw6ICfDkMKdw5DCtcOQwr/DkcKAw5DCsMOQwrLDkMK4w5DCu8ORwozDkMK9w5DCviDDkcKDw5DCusOQwrDDkMK3w5DCsMOQwr3DkMKwIMOQwr/DkMK+w5HCh8ORwoLDkMKwJyxcbiAgICAgICAgcGhvbmU6ICfDkMKSw5DCssOQwrXDkMK0w5DCuMORwoLDkMK1IMORwoLDkMK1w5DCu8OQwrXDkcKEw5DCvsOQwr0nLFxuICAgIH07XG5cbiAgICBnZXQgZXJyb3JzTWFwKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlcyA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMuZGVmYXVsdEVycm9yTWVzc2FnZXMsXG4gICAgICAgICAgICAuLi4odGhpcy5lcnJvcnNNZXNzYWdlcyB8fCB7fSlcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXJyb3JLZXlzID0gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpO1xuICAgICAgICByZXR1cm4gZXJyb3JLZXlzLm1hcCgoa2V5KSA9PiBlcnJvck1lc3NhZ2VzW2tleV0pO1xuICAgIH1cblxuICAgIHNob3dFcnJvcihpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiArK2luZGV4IDw9IHRoaXMuc2hvd0NvdW50O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBFdm9Db250cm9sU3RhdGVzIH0gZnJvbSAnLi4vLi4vY29tbW9uL2V2by1jb250cm9sLXN0YXRlLW1hbmFnZXIvZXZvLWNvbnRyb2wtc3RhdGVzLmVudW0nO1xuaW1wb3J0IHsgRXZvQmFzZUNvbnRyb2wgfSBmcm9tICcuLi8uLi9jb21tb24vZXZvLWJhc2UtY29udHJvbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V2by1pbnB1dCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImV2by1pbnB1dFwiIFtldm9VaUNsYXNzXT1cImlucHV0Q2xhc3NcIj5cbiAgICA8bGFiZWwgY2xhc3M9XCJldm8taW5wdXRfX2NvbnRhaW5lclwiPlxuICAgICAgICA8aW5wdXQgI2lucHV0XG4gICAgICAgICAgICAgICAqbmdJZj1cIiFtYXNrXCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwiZXZvLWlucHV0X19maWVsZFwiXG4gICAgICAgICAgICAgICAoZm9jdXMpPVwib25Gb2N1cygpXCJcbiAgICAgICAgICAgICAgIChibHVyKT1cIm9uQmx1cigpXCJcbiAgICAgICAgICAgICAgIHR5cGU9XCJ7eyB0eXBlIH19XCJcbiAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3sgcGxhY2Vob2xkZXIgfX1cIlxuICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgPGlucHV0ICNpbnB1dFxuICAgICAgICAgICAgICAgKm5nSWY9XCJtYXNrXCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwiZXZvLWlucHV0X19maWVsZFwiXG4gICAgICAgICAgICAgICAoZm9jdXMpPVwib25Gb2N1cygpXCJcbiAgICAgICAgICAgICAgIChibHVyKT1cIm9uQmx1cigpXCJcbiAgICAgICAgICAgICAgIHR5cGU9XCJ7eyB0eXBlIH19XCJcbiAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3sgcGxhY2Vob2xkZXIgfX1cIlxuICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICBbdGV4dE1hc2tdPVwibWFza1wiXG4gICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImV2by1pbnB1dF9fYWRkaXRpb25hbFwiXG4gICAgICAgICAgICAgKm5nSWY9XCJoYXNBZGRpdGlvbmFsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZvLWlucHV0X190b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgKm5nSWY9XCJ0b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwic2hvd1Rvb2x0aXAoKVwiXG4gICAgICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cImhpZGVUb29sdGlwKClcIlxuICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25Ub29sdGlwQ2xpY2soJGV2ZW50KVwiPj88L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJ0b29sdGlwICYmIHRvb2x0aXBTaG93blwiXG4gICAgICAgICAgICAgICAgIChjbGljayk9XCJvblRvb2x0aXBDbGljaygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwic2hvd1Rvb2x0aXAoKVwiXG4gICAgICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cImhpZGVUb29sdGlwKClcIlxuICAgICAgICAgICAgICAgICBjbGFzcz1cImV2by1pbnB1dF9fdG9vbHRpcC1sYWJlbFwiPnt7IHRvb2x0aXAgfX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9sYWJlbD5cbjwvZGl2PlxuPGV2by1jb250cm9sLWVycm9yICpuZ0lmPVwic2hvd0Vycm9yc1wiXG4gICAgICAgICAgICAgICAgICAgW2Vycm9yc109XCJjb250cm9sLmVycm9yc1wiXG4gICAgICAgICAgICAgICAgICAgW2Vycm9yc01lc3NhZ2VzXT1cImVycm9yc01lc3NhZ2VzXCI+PC9ldm8tY29udHJvbC1lcnJvcj5cbmAsXG4gIHN0eWxlczogW2AuZXZvLWlucHV0e2Rpc3BsYXk6ZmxleDt3aWR0aDoxMDAlO2hlaWdodDo0OHB4O2xpbmUtaGVpZ2h0OjQ4cHg7d2hpdGUtc3BhY2U6bm93cmFwO2JhY2tncm91bmQtY29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWltYWdlOm5vbmU7Ym9yZGVyOjFweCBzb2xpZCAjZGJkYmRiO2JvcmRlci1yYWRpdXM6NHB4O3RyYW5zaXRpb246Ym94LXNoYWRvdyAuM3MsYm9yZGVyIC4zcztvdXRsaW5lOjB9LmV2by1pbnB1dF9fY29udGFpbmVye2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtib3JkZXItcmFkaXVzOjRweDtjdXJzb3I6dGV4dH0uZXZvLWlucHV0X2ZvY3VzZWR7Ym94LXNoYWRvdzowIDAgMnB4IDAgIzU0NmU3YSFpbXBvcnRhbnQ7Ym9yZGVyOjFweCBzb2xpZCAjNTQ2ZTdhfS5ldm8taW5wdXRfZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZjZmNmY2IWltcG9ydGFudDtjb2xvcjojOWI5YjlifS5ldm8taW5wdXRfZGlzYWJsZWQgLmV2by1pbnB1dF9fY29udGFpbmVye2N1cnNvcjpkZWZhdWx0fS5ldm8taW5wdXRfdmFsaWR7Ym9yZGVyLWNvbG9yOiM4YmMzNGF9LmV2by1pbnB1dF9pbnZhbGlke2JvcmRlci1jb2xvcjojZjIyfS5ldm8taW5wdXRfX2ZpZWxke2hlaWdodDoxMDAlO2JvcmRlcjpub25lO21hcmdpbjowO3BhZGRpbmc6MCAyMHB4O291dGxpbmU6MDtmb250LXNpemU6MTZweDtmb250LXdlaWdodDo0MDA7Y29sb3I6IzAwMDtmbGV4LWdyb3c6MTtib3JkZXItcmFkaXVzOjRweDt3aWR0aDoxMDAlfS5ldm8taW5wdXRfX2ZpZWxkOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOiM5YjliOWJ9LmV2by1pbnB1dF9fZmllbGQ6Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6IzliOWI5YjtvcGFjaXR5OjF9LmV2by1pbnB1dF9fZmllbGQ6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOiM5YjliOWJ9LmV2by1pbnB1dF9fZmllbGQ6ZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZjZmNmY2IWltcG9ydGFudDtjb2xvcjojOWI5YjlifS5ldm8taW5wdXRfX2ZpZWxkOm5vdCg6bGFzdC1jaGlsZCl7cGFkZGluZy1yaWdodDowfS5ldm8taW5wdXRfX3Rvb2x0aXB7LXdlYmtpdC10b3VjaC1jYWxsb3V0Om5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO21hcmdpbjowIDEwcHg7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kOiNlY2VmZjE7bGluZS1oZWlnaHQ6MjRweDt0ZXh0LWFsaWduOmNlbnRlcjtmb250LWZhbWlseTpcIk9wZW4gU2Fuc1wiLEFyaWFsLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE4cHg7Zm9udC13ZWlnaHQ6NjAwO2NvbG9yOiM1NDZlN2E7Y3Vyc29yOnBvaW50ZXJ9LmV2by1pbnB1dF9fdG9vbHRpcC1sYWJlbHtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO3RvcDpjYWxjKDEwMCUgLSAycHgpO2xlZnQ6MDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY4ZTY7ei1pbmRleDoxO2JvcmRlci1yYWRpdXM6NHB4O3BhZGRpbmc6MTBweCAxMHB4IDEwcHggMjBweDtjb2xvcjojMjEyMTIxO2Rpc3BsYXk6ZmxleDtib3gtc2hhZG93OjAgNHB4IDEycHggMCByZ2JhKDAsMCwwLC4yKTtsaW5lLWhlaWdodDpub3JtYWw7d2hpdGUtc3BhY2U6bm9ybWFsO2N1cnNvcjpkZWZhdWx0fS5ldm8taW5wdXRfX3Rvb2x0aXAtbGFiZWw6YmVmb3Jle2NvbnRlbnQ6Jyc7dG9wOi0yMHB4O2xlZnQ6Y2FsYygxMDAlIC0gMzRweCk7Ym9yZGVyOjEwcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWJvdHRvbToxMHB4IHNvbGlkICNmZmY4ZTY7cG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6bm9uZX1AbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpey5ldm8taW5wdXRfX3Rvb2x0aXAtbGFiZWx7bGVmdDpjYWxjKDUwJSAtIDIycHgpfS5ldm8taW5wdXRfX3Rvb2x0aXAtbGFiZWw6YmVmb3Jle2NvbnRlbnQ6Jyc7dG9wOi0yMHB4O2xlZnQ6Y2FsYyg1MCUgLSAxMnB4KTtib3JkZXI6MTBweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItYm90dG9tOjEwcHggc29saWQgI2ZmZjhlNjtwb3NpdGlvbjphYnNvbHV0ZX19YF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXZvSW5wdXRDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRXZvSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBFdm9CYXNlQ29udHJvbCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgYXV0b0ZvY3VzOiBib29sZWFuO1xuICBASW5wdXQoKSBtYXNrOiBhbnk7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRvb2x0aXA6IHN0cmluZztcbiAgQElucHV0KCkgdHlwZSA9ICd0ZXh0JztcbiAgQElucHV0KCd2YWx1ZScpIF92YWx1ZTogc3RyaW5nO1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JykgaW5wdXRFbGVtZW50O1xuXG4gIG9uQ2hhbmdlO1xuICBvblRvdWNoZWQ7XG5cbiAgcHVibGljIHRvb2x0aXBTaG93biA9IGZhbHNlO1xuXG4gIHB1YmxpYyBkaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIGZvY3VzZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSB0b29sdGlwVmlzaWJpbGl0eVRpbWVvdXQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHZhbHVlIHx8IHRoaXMuX3ZhbHVlKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGlucHV0Q2xhc3MoKToge1tjc3NDbGFzczogc3RyaW5nXTogYm9vbGVhbn0ge1xuICAgIHJldHVybiB7XG4gICAgICAnZm9jdXNlZCc6IHRoaXMuZm9jdXNlZCxcbiAgICAgICdkaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAndmFsaWQnOiB0aGlzLnN0YXRlTWFuYWdlci5jdXJyZW50U3RhdGVbRXZvQ29udHJvbFN0YXRlcy52YWxpZF0sXG4gICAgICAnaW52YWxpZCc6IHRoaXMuc3RhdGVNYW5hZ2VyLmN1cnJlbnRTdGF0ZVtFdm9Db250cm9sU3RhdGVzLmludmFsaWRdXG4gICAgfTtcbiAgfVxuXG4gIGdldCBoYXNBZGRpdGlvbmFsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMudG9vbHRpcDtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBzdGF0ZTtcbiAgfVxuXG4gIG9uRm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmZvY3VzZWQpIHtcbiAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgb25CbHVyKCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gIH1cblxuICBvblRvb2x0aXBDbGljayhldmVudDogYW55KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGhpZGVUb29sdGlwKCkge1xuICAgIHRoaXMudG9vbHRpcFZpc2liaWxpdHlUaW1lb3V0ID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnRvb2x0aXBWaXNpYmlsaXR5VGltZW91dCkge1xuICAgICAgICB0aGlzLnRvb2x0aXBTaG93biA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sIDI1KTtcbiAgfVxuXG4gIHNob3dUb29sdGlwKCkge1xuICAgIHRoaXMudG9vbHRpcFNob3duID0gdHJ1ZTtcbiAgICB0aGlzLnRvb2x0aXBWaXNpYmlsaXR5VGltZW91dCA9IGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9TZXJpYWxpemFibGUnO1xuXG5leHBvcnQgZW51bSBFdm9CYW5uZXJUeXBlcyB7XG4gIGxhcmdlID0gJ2xhcmdlJyxcbiAgc21hbGwgPSAnc21hbGwnLFxuICBmdWxsV2lkdGggPSAnZnVsbC13aWR0aCcsXG59XG5cbmV4cG9ydCBlbnVtIEV2b0Jhbm5lckxvY2F0aW9ucyB7XG4gIG1haW4gPSAnTWFpbicsXG4gIGNhdGVnb3J5ID0gJ0NhdGVnb3J5J1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElFdm9CYW5uZXJBbmFseXRpY3Mge1xuICB1cmw6IHN0cmluZztcbiAgZGF0YToge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGNyZWF0aXZlOiBzdHJpbmc7XG4gICAgcG9zaXRpb246IHN0cmluZztcbiAgICBkaW1lbnNpb243Pzogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgRXZvQmFubmVyIGV4dGVuZHMgU2VyaWFsaXphYmxlIHtcbiAgYmFja2dyb3VuZDogc3RyaW5nO1xuICBiYW5uZXJQb3NpdGlvbk5hbWVzID0ge1xuICAgIFtFdm9CYW5uZXJMb2NhdGlvbnMubWFpbl06IFtcbiAgICAgICdtYWluJyxcbiAgICAgICd0b3AnLFxuICAgICAgJ2JvdHRvbSdcbiAgICBdLFxuICAgIFtFdm9CYW5uZXJMb2NhdGlvbnMuY2F0ZWdvcnldOiBbXG4gICAgICAnbWFpbidcbiAgICBdXG4gIH07XG4gIGJ1dHRvbjogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xuICBpbWFnZTogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgc3VwZXIoZGF0YSk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXZvLWJhbm5lcicsXG4gIHRlbXBsYXRlOiBgPGEgY2xhc3M9XCJldm8tYmFubmVyXCJcbiAgIHRhcmdldD1cIl9ibGFua1wiXG4gICBbYXR0ci5ocmVmXT1cImJhbm5lcj8udXJsXCJcbiAgIChjbGljayk9XCJvbkJhbm5lckNsaWNrKClcIlxuICAgW2V2b1VpQ2xhc3NdPVwidHlwZVwiXG4gICBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBiYW5uZXI/LmJhY2tncm91bmR9XCI+XG4gICAgPGRpdiBjbGFzcz1cImV2by1iYW5uZXJfX2NvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImV2by1iYW5uZXJfX3RpdGxlXCI+e3sgYmFubmVyPy50aXRsZSB9fTwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi13aGl0ZSBwcm9tby1idG5cIlxuICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsnY29sb3InOiBiYW5uZXI/LmJhY2tncm91bmR9XCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImJhbm5lcj8uYnV0dG9uXCI+e3sgYmFubmVyPy5idXR0b24gfX08L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8aW1nIGNsYXNzPVwiZXZvLWJhbm5lcl9faW1nXCJcbiAgICAgICAgIHNyYz1cInt7IGJhbm5lcj8uaW1hZ2UgfX1cIlxuICAgICAgICAgYWx0PVwie3sgYmFubmVyPy50aXRsZSB9fVwiPlxuPC9hPlxuYCxcbiAgc3R5bGVzOiBbYC5ldm8tYmFubmVye2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7aGVpZ2h0OjQzMHB4O3BhZGRpbmc6MTJweCAyMHB4O2JvcmRlci1yYWRpdXM6NnB4O292ZXJmbG93OmhpZGRlbjtjb2xvcjojZmZmO2N1cnNvcjpwb2ludGVyO3RyYW5zaXRpb246Ym94LXNoYWRvdyAuM3N9LmV2by1iYW5uZXI6aG92ZXJ7Ym94LXNoYWRvdzowIDRweCAxMnB4IHJnYmEoMCwwLDAsLjIpfS5ldm8tYmFubmVyX19jb250ZW50e3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6Mn0uZXZvLWJhbm5lcl9fY29udGVudCAucHJvbW8tYnRue2hlaWdodDo0MHB4O3BhZGRpbmc6MCAyMHB4O21pbi13aWR0aDoxNTZweDtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjE0cHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2Rpc3BsYXk6dGFibGUtY2VsbDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LmV2by1iYW5uZXJfX2NvbnRlbnQgLnByb21vLWJ0bjpob3ZlcntiYWNrZ3JvdW5kOiNmZmZ9LmV2by1iYW5uZXJfX2NvbnRlbnQgLnByb21vLWJ0bjphY3RpdmV7Ym94LXNoYWRvdzpub25lfS5ldm8tYmFubmVyX19jb250ZW50IC5wcm9tby1idG4gc3Bhbntmb250LXNpemU6MThweH0uZXZvLWJhbm5lcl9fdGl0bGV7Zm9udC1mYW1pbHk6bXVzZW8sQXJpYWwsc2Fucy1zZXJpZjtmb250LXdlaWdodDo3MDA7bGluZS1oZWlnaHQ6MS4zO2ZvbnQtc2l6ZTozMHB4O21hcmdpbi1ib3R0b206MTBweH0uZXZvLWJhbm5lcl9fZGVzY3JpcHRpb257Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MS4zO21hcmdpbi10b3A6MjBweDttYXJnaW4tYm90dG9tOjEwcHh9LmV2by1iYW5uZXJfX2ltZ3twb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDtyaWdodDowO3dpZHRoOjI5MHB4O2hlaWdodDoyOTBweH0uZXZvLWJhbm5lcl9mdWxsLXdpZHRoe3BhZGRpbmc6MjBweH0uZXZvLWJhbm5lcl9mdWxsLXdpZHRoIC5ldm8tYmFubmVyX190aXRsZXtsaW5lLWhlaWdodDozOHB4fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuZXZvLWJhbm5lcntwYWRkaW5nOjMwcHggNDBweH0uZXZvLWJhbm5lcl9fY29udGVudHttYXgtd2lkdGg6NjAlfS5ldm8tYmFubmVyX19kZXNjcmlwdGlvbnttYXgtd2lkdGg6MjUwcHh9LmV2by1iYW5uZXJfX2ltZ3t3aWR0aDo0MzBweDtoZWlnaHQ6NDMwcHh9LmV2by1iYW5uZXJfZnVsbC13aWR0aHtoZWlnaHQ6MjQwcHg7cGFkZGluZzozMHB4fS5ldm8tYmFubmVyX2Z1bGwtd2lkdGggLmV2by1iYW5uZXJfX2NvbnRlbnR7bWF4LXdpZHRoOjUwJX0uZXZvLWJhbm5lcl9mdWxsLXdpZHRoIC5ldm8tYmFubmVyX190aXRsZXtmb250LXNpemU6MzZweDtsaW5lLWhlaWdodDo0NHB4fS5ldm8tYmFubmVyX2Z1bGwtd2lkdGggLmV2by1iYW5uZXJfX2ltZ3toZWlnaHQ6MjQwcHg7d2lkdGg6MjQwcHh9fUBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7LmV2by1iYW5uZXJ7cGFkZGluZzozMHB4IDQwcHh9LmV2by1iYW5uZXJfX2NvbnRlbnR7bWF4LXdpZHRoOjYzJX0uZXZvLWJhbm5lcl9zbWFsbHtoZWlnaHQ6MjEwcHg7cGFkZGluZzoyMHB4fS5ldm8tYmFubmVyX3NtYWxsIC5ldm8tYmFubmVyX190aXRsZXtmb250LXNpemU6MjBweDttYXJnaW4tYm90dG9tOjIwcHh9LmV2by1iYW5uZXJfc21hbGwgLnByb21vLWJ0bntoZWlnaHQ6MzJweH0uZXZvLWJhbm5lcl9zbWFsbCAuZXZvLWJhbm5lcl9faW1ne3dpZHRoOjIxMHB4O2hlaWdodDoyMTBweH0uZXZvLWJhbm5lcl9mdWxsLXdpZHRoIC5ldm8tYmFubmVyX19jb250ZW50e21heC13aWR0aDo2MyV9fWBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6ICdXaW5kb3cnLCAgdXNlVmFsdWU6IHdpbmRvdyB9XG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEV2b0Jhbm5lckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGJhbm5lcjogRXZvQmFubmVyO1xuICBASW5wdXQoKSB0eXBlOiBFdm9CYW5uZXJUeXBlcyA9IEV2b0Jhbm5lclR5cGVzLnNtYWxsO1xuXG4gIEBPdXRwdXQoKSBiYW5uZXJDbGljazogRXZlbnRFbWl0dGVyPEV2b0Jhbm5lcj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2b0Jhbm5lcj4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KCdXaW5kb3cnKSBwcml2YXRlIHdpbmRvdzogYW55LFxuICApIHtcbiAgfVxuXG4gIG9uQmFubmVyQ2xpY2soKSB7XG4gICAgdGhpcy5iYW5uZXJDbGljay5lbWl0KHRoaXMuYmFubmVyKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgSXRlcmFibGVEaWZmZXJzLCBLZXlWYWx1ZURpZmZlcnMsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDbGFzcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmNvbnN0IGlzT2JqZWN0ID0gKGl0ZW0pID0+IGl0ZW0gIT0gbnVsbCAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCc7XG5jb25zdCBpc1N0cmluZyA9IChpdGVtKSA9PiB0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZyc7XG5jb25zdCBpc0FycmF5ID0gKGl0ZW0pID0+IEFycmF5LmlzQXJyYXkoaXRlbSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tldm9VaUNsYXNzXSdcbn0pXG5leHBvcnQgY2xhc3MgRXZvVWlDbGFzc0RpcmVjdGl2ZSBleHRlbmRzIE5nQ2xhc3Mge1xuICBASW5wdXQoJ2V2b1VpQ2xhc3MnKVxuICBzZXQgc2V0dGVyT2ZDbGFzcyhkYXRhOiBhbnkpIHtcbiAgICBpZiAoaXNBcnJheShkYXRhKSkge1xuICAgICAgZGF0YSA9IGRhdGEubWFwKChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7dGhpcy5wcmVmaXh9XyR7Y2xhc3NOYW1lfWApO1xuICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIGRhdGEgPSBPYmplY3Qua2V5cyhkYXRhKS5yZWR1Y2UoKG5ld0RhdGE6IGFueSwga2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgbmV3RGF0YVtgJHt0aGlzLnByZWZpeH1fJHtrZXl9YF0gPSBkYXRhW2tleV07XG4gICAgICAgIHJldHVybiBuZXdEYXRhO1xuICAgICAgfSwge30pO1xuICAgIH0gZWxzZSBpZiAoaXNTdHJpbmcoZGF0YSkpIHtcbiAgICAgIGRhdGEgPSBkYXRhXG4gICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgIC5tYXAoKG15Q2xhc3MpID0+IGAke3RoaXMucHJlZml4fV8ke215Q2xhc3N9YClcbiAgICAgICAgLmpvaW4oJyAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEYXRhIHR5cGUgbm90IGFsbG93ZWQhJyk7XG4gICAgfVxuXG4gICAgdGhpcy5uZ0NsYXNzID0gZGF0YTtcbiAgfVxuXG4gIG5nQ2xhc3M6IGFueTtcblxuICBwcml2YXRlIHByZWZpeDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKF9pdGVyYWJsZURpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycywgX2tleVZhbHVlRGlmZmVyczogS2V5VmFsdWVEaWZmZXJzLFxuICAgICAgICBfbmdFbDogRWxlbWVudFJlZiwgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICBzdXBlcihfaXRlcmFibGVEaWZmZXJzLCBfa2V5VmFsdWVEaWZmZXJzLCBfbmdFbCwgX3JlbmRlcmVyKTtcbiAgICB0aGlzLnByZWZpeCA9IF9uZ0VsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0WzBdO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXZvLWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgPHNwYW4gY2xhc3M9XCJoZWFkZXJcIiBbbmdDbGFzc109XCJ7XG4gICdoZWFkZXJfb3JhbmdlJzogY29sb3I9PT0nd2hpdGUnLFxuICAnaGVhZGVyX2gxJzogc2l6ZT09PSdoMScsXG4gICdoZWFkZXJfaDInOiBzaXplPT09J2gyJyxcbiAgJ2hlYWRlcl9oMyc6IHNpemU9PT0naDMnLFxuICAnaGVhZGVyX2g0Jzogc2l6ZT09PSdoNCdcbn1cIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9zcGFuPmAsXG4gIHN0eWxlczogW2AuaGVhZGVye2ZvbnQtZmFtaWx5Om11c2VvLEFyaWFsLHNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOiMzMzNmNDg7ZGlzcGxheTpibG9ja30uaGVhZGVyX2gxe2ZvbnQtc2l6ZTozMHB4O2xpbmUtaGVpZ2h0OjM4cHh9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5oZWFkZXJfaDF7Zm9udC1zaXplOjM2cHg7bGluZS1oZWlnaHQ6NDRweH19LmhlYWRlcl9oMntmb250LXNpemU6MjRweDtsaW5lLWhlaWdodDozMnB4fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuaGVhZGVyX2gye2ZvbnQtc2l6ZTozMHB4O2xpbmUtaGVpZ2h0OjM4cHh9fS5oZWFkZXJfaDN7Zm9udC1zaXplOjE4cHg7bGluZS1oZWlnaHQ6MjZweH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7LmhlYWRlcl9oM3tmb250LXNpemU6MjRweDtsaW5lLWhlaWdodDozMnB4fX0uaGVhZGVyX2g0e2ZvbnQtc2l6ZToxNHB4O2xpbmUtaGVpZ2h0OjIycHh9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5oZWFkZXJfaDR7Zm9udC1zaXplOjE4cHg7bGluZS1oZWlnaHQ6MjZweH19LmhlYWRlcl9vcmFuZ2V7Y29sb3I6I2ZmZn1gXVxufSlcbmV4cG9ydCBjbGFzcyBFdm9IZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHNpemU6ICdoMScgfCAnaDInIHwgJ2gzJyB8ICdoNCcgPSAnaDEnO1xuICBASW5wdXQoKSBjb2xvcjogJ3doaXRlJyB8ICdibGFjayc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVGV4dE1hc2tNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi10ZXh0LW1hc2snO1xuXG5pbXBvcnQgeyBFdm9VaUtpdENvbXBvbmVudCB9IGZyb20gJy4vZXZvLXVpLWtpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1idXR0b24vZXZvLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvQ2hlY2tib3hDb21wb25lbnQgIH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1jaGVja2JveC9ldm8tY2hlY2tib3guY29tcG9uZW50JztcbmltcG9ydCB7IEV2b0NvbnRyb2xFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tY29udHJvbC1lcnJvci9ldm8tY29udHJvbC1lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLWlucHV0L2V2by1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvQmFubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1iYW5uZXIvZXZvLWJhbm5lci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBFdm9VaUNsYXNzRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2V2by11aS1jbGFzcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRXZvSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1oZWFkZXIvZXZvLWhlYWRlci5jb21wb25lbnQnO1xuXG5jb25zdCBjb21wb25lbnRzOiBhbnkgPSBbXG4gIEV2b0J1dHRvbkNvbXBvbmVudCxcbiAgRXZvQ2hlY2tib3hDb21wb25lbnQsXG4gIEV2b0NvbnRyb2xFcnJvckNvbXBvbmVudCxcbiAgRXZvSW5wdXRDb21wb25lbnQsXG4gIEV2b0Jhbm5lckNvbXBvbmVudCxcbiAgRXZvSGVhZGVyQ29tcG9uZW50LFxuXTtcblxuY29uc3QgZGlyZWN0aXZlczogYW55ID0gW1xuICBFdm9VaUNsYXNzRGlyZWN0aXZlLFxuXTtcblxuY29uc3QgYnVuZGxlOiBhbnkgPSBbXG4gIC4uLmNvbXBvbmVudHMsXG4gIC4uLmRpcmVjdGl2ZXNcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgVGV4dE1hc2tNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEV2b1VpS2l0Q29tcG9uZW50LFxuICAgIC4uLmJ1bmRsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEV2b1VpS2l0Q29tcG9uZW50LFxuICAgIC4uLmJ1bmRsZSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBFdm9VaUtpdE1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtJQU9FLGlCQUFpQjs7O1lBTGxCLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztBQ0pEO0lBYUUsaUJBQWlCOzs7O0lBRWpCLFFBQVE7S0FDUDs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7OztHQUlUO2dCQUNELE1BQU0sRUFBRSxFQUFFO2FBQ1g7Ozs7Ozs7OztBQ1ZEOzs7O0lBeUNJLFlBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FB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