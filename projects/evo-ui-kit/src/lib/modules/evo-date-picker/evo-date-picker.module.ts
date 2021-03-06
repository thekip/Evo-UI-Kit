import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvoDatePickerComponent } from './components/evo-date-picker/evo-date-picker.component';
import { EvoDatePickerRangeComponent } from './components/evo-date-picker-range/evo-date-picker-range.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DateLocalePipe } from './pipes/date-local.pipe';
import { DateEuroFormatPipe } from './pipes/date-euro-format.pipe';

@NgModule({
    imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
    declarations: [ EvoDatePickerComponent, EvoDatePickerRangeComponent, DateLocalePipe, DateEuroFormatPipe ],
    exports: [ EvoDatePickerComponent, EvoDatePickerRangeComponent, FormsModule ],
})
export class EvoDatePickerModule {

}
