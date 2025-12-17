import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatDatepicker } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import moment, { Moment } from 'moment';
import { Router } from '@angular/router';


// import * as _moment from 'moment';
// import { default as _rollupMoment, Moment } from 'moment';


export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

// const moment = _rollupMoment || _moment;

@Component({
  selector: 'app-datepicker',
  templateUrl: './date.component.html',
  styleUrl: './date.component.scss',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MaterialModule,
    JsonPipe,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DateComponent implements OnInit {

  c1 = '\n' +
    '<input matInput [matDatepicker]="picker">\n' +
    '<mat-hint>MM/DD/YYYY</mat-hint>\n' +
    '<mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>\n' +
    '<mat-datepicker #picker></mat-datepicker>\n';

  c2 = '\n' +
    '<mat-form-field>\n' +
    '  <mat-label>Choose a date</mat-label>\n' +
    '  <input matInput [matDatepicker]="picker">\n' +
    '  <mat-hint>MM/DD/YYYY</mat-hint>\n' +
    '  <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>\n' +
    '  <mat-datepicker #picker></mat-datepicker>\n' +
    '</mat-form-field>\n';

  c3 = '\n' +
    '<mat-date-range-input>\n' +
    '  <input matStartDate placeholder="Start date">\n' +
    '  <input matEndDate placeholder="End date">\n' +
    '</mat-date-range-input>\n';

  c4 = '\n' +
    '<mat-date-range-picker #picker></mat-date-range-picker>\n';

  c5 = '\n' +
    '<mat-date-range-input [rangePicker]="picker">\n' +
    '  <input matStartDate placeholder="Start date">\n' +
    '  <input matEndDate placeholder="End date">\n' +
    '</mat-date-range-input>\n' +
    '<mat-date-range-picker #picker></mat-date-range-picker>\n';

  code1 = '\n' +
    "import {Component} from '@angular/core';\n" +
    "import {MatDatepickerModule} from '@angular/material/datepicker';\n" +
    "import {MatInputModule} from '@angular/material/input';\n" +
    "import {MatFormFieldModule} from '@angular/material/form-field';\n" +
    "import {provideNativeDateAdapter} from '@angular/material/core';\n" +
    "\n" +
    "@Component({\n" +
    "  selector: 'datepicker-overview-example',\n" +
    "  templateUrl: 'datepicker-overview-example.html',\n" +
    "  standalone: true,\n" +
    "  providers: [provideNativeDateAdapter()],\n" +
    "  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],\n" +
    "})\n" +
    "export class DatepickerOverviewExample {}\n";

  code2 = '\n' +
    '<mat-form-field>\n' +
    '  <mat-label>Choose a date</mat-label>\n' +
    '  <input matInput [matDatepicker]="picker">\n' +
    '  <mat-hint>MM/DD/YYYY</mat-hint>\n' +
    '  <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>\n' +
    '  <mat-datepicker #picker></mat-datepicker>\n' +
    '</mat-form-field>\n';

  code3 = '\n' +
    "import {Component} from '@angular/core';\n" +
    "import {MatIconModule} from '@angular/material/icon';\n" +
    "import {MatDatepickerModule} from '@angular/material/datepicker';\n" +
    "import {MatInputModule} from '@angular/material/input';\n" +
    "import {MatFormFieldModule} from '@angular/material/form-field';\n" +
    "import {provideNativeDateAdapter} from '@angular/material/core';\n" +
    "\n" +
    "@Component({\n" +
    "  selector: 'datepicker-custom-icon-example',\n" +
    "  templateUrl: 'datepicker-custom-icon-example.html',\n" +
    "  standalone: true,\n" +
    "  providers: [provideNativeDateAdapter()],\n" +
    "  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatIconModule],\n" +
    "})\n" +
    "export class DatepickerCustomIconExample {}\n";

  code4 = '\n' +
    '<mat-form-field class="example-full-width">\n' +
    '  <mat-label>Choose a date</mat-label>\n' +
    '  <input matInput [matDatepicker]="picker">\n' +
    '  <mat-hint>MM/DD/YYYY</mat-hint>\n' +
    '  <mat-datepicker-toggle matIconSuffix [for]="picker">\n' +
    '    <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\n' +
    '  </mat-datepicker-toggle>\n' +
    '  <mat-datepicker #picker></mat-datepicker>\n' +
    '</mat-form-field>\n';

  code5 = '\n' +
    "import {Component} from '@angular/core';\n" +
    "import {provideNativeDateAdapter} from '@angular/material/core';\n" +
    "import {MatDatepickerModule} from '@angular/material/datepicker';\n" +
    "import {MatFormFieldModule} from '@angular/material/form-field';\n" +
    "\n" +
    "@Component({\n" +
    "  selector: 'date-range-picker-overview-example',\n" +
    "  templateUrl: 'date-range-picker-overview-example.html',\n" +
    "  standalone: true,\n" +
    "  imports: [MatFormFieldModule, MatDatepickerModule],\n" +
    "  providers: [provideNativeDateAdapter()],\n" +
    "})\n" +
    "export class DateRangePickerOverviewExample {}\n";

  code6 = '\n' +
    '<mat-form-field>\n' +
    '  <mat-label>Enter a date range</mat-label>\n' +
    '  <mat-date-range-input [rangePicker]="picker">\n' +
    '    <input matStartDate placeholder="Start date">\n' +
    '    <input matEndDate placeholder="End date">\n' +
    '  </mat-date-range-input>\n' +
    '  <mat-hint>MM/DD/YYYY – MM/DD/YYYY</mat-hint>\n' +
    '  <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>\n' +
    '  <mat-date-range-picker #picker></mat-date-range-picker>\n' +
    '</mat-form-field>\n';

  code7 = '\n' +
    "import {Component} from '@angular/core';\n" +
    "import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';\n" +
    "import {JsonPipe} from '@angular/common';\n" +
    "import {MatDatepickerModule} from '@angular/material/datepicker';\n" +
    "import {MatFormFieldModule} from '@angular/material/form-field';\n" +
    "import {provideNativeDateAdapter} from '@angular/material/core';\n" +
    "\n" +
    "@Component({\n" +
    "  selector: 'date-range-picker-forms-example',\n" +
    "  templateUrl: 'date-range-picker-forms-example.html',\n" +
    "  standalone: true,\n" +
    "  providers: [provideNativeDateAdapter()],\n" +
    "  imports: [MatFormFieldModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, JsonPipe],\n" +
    "})\n" +
    "export class DateRangePickerFormsExample {\n" +
    "  range = new FormGroup({\n" +
    "    start: new FormControl<Date | null>(null),\n" +
    "    end: new FormControl<Date | null>(null),\n" +
    "  });\n" +
    "}\n";

  code8 = '\n' +
    '<mat-form-field>\n' +
    '  <mat-label>Enter a date range</mat-label>\n' +
    '  <mat-date-range-input [formGroup]="range" [rangePicker]="picker">\n' +
    '    <input matStartDate formControlName="start" placeholder="Start date">\n' +
    '    <input matEndDate formControlName="end" placeholder="End date">\n' +
    '  </mat-date-range-input>\n' +
    '  <mat-hint>MM/DD/YYYY – MM/DD/YYYY</mat-hint>\n' +
    '  <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>\n' +
    '  <mat-date-range-picker #picker></mat-date-range-picker>\n' +
    '\n' +
    '  @if (range.controls.start.hasError(\'' + 'matStartDateInvalid\'' + ')) {\n' +
    '    <mat-error>Invalid start date</mat-error>\n' +
    '  }\n' +
    '  @if (range.controls.end.hasError(\'' + 'matEndDateInvalid\'' + ')) {\n' +
    '    <mat-error>Invalid end date</mat-error>\n' +
    '  }\n' +
    '</mat-form-field>\n' +
    '\n' +
    '<p>Selected range: {{range.value | json}}</p>\n';

  code9 = '\n' +
    "import {Component} from '@angular/core';\n" +
    "import {MatDatepickerModule} from '@angular/material/datepicker';\n" +
    "import {MatInputModule} from '@angular/material/input';\n" +
    "import {MatFormFieldModule} from '@angular/material/form-field';\n" +
    "import {provideNativeDateAdapter} from '@angular/material/core';\n" +
    "\n" +
    "@Component({\n" +
    "  selector: 'datepicker-start-view-example',\n" +
    "  templateUrl: 'datepicker-start-view-example.html',\n" +
    "  standalone: true,\n" +
    "  providers: [provideNativeDateAdapter()],\n" +
    "  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],\n" +
    "})\n" +
    "export class DatepickerStartViewExample {\n" +
    "  startDate = new Date(1990, 0, 1);\n" +
    "}\n";

  code10 = '\n' +
    '<mat-form-field>n' +
    '  <mat-label>Choose a date</mat-label>n' +
    '  <input matInput [matDatepicker]="picker">n' +
    '  <mat-hint>MM/DD/YYYY</mat-hint>n' +
    '  <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>n' +
    '  <mat-datepicker #picker startView="year" [startAt]="startDate"></mat-datepicker>n' +
    '</mat-form-field>\n';


  code11 = '\n' +
    "import {Component, ViewEncapsulation} from '@angular/core';\n" +
    "import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';\n" +
    "import {provideMomentDateAdapter} from '@angular/material-moment-adapter';\n" +
    "import {MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker';\n" +
    "import * as _moment from 'moment';\n" +
    "import {default as _rollupMoment, Moment} from 'moment';\n" +
    "import {MatInputModule} from '@angular/material/input';\n" +
    "import {MatFormFieldModule} from '@angular/material/form-field';\n" +
    "\n" +
    "const moment = _rollupMoment || _moment;\n" +
    " \n" +
    "export const MY_FORMATS = {\n" +
    "  parse: {\n" +
    "    dateInput: 'MM/YYYY',\n" +
    "  },\n" +
    "  display: {\n" +
    "    dateInput: 'MM/YYYY',\n" +
    "    monthYearLabel: 'MMM YYYY',\n" +
    "    dateA11yLabel: 'LL',\n" +
    "    monthYearA11yLabel: 'MMMM YYYY',\n" +
    "  },\n" +
    "};\n" +
    "\n" +
    "@Component({\n" +
    "  selector: 'datepicker-views-selection-example',\n" +
    "  templateUrl: 'datepicker-views-selection-example.html',\n" +
    "  styleUrl: 'datepicker-views-selection-example.css',\n" +
    "  providers: [\n" +
    "    provideMomentDateAdapter(MY_FORMATS),\n" +
    "  ],\n" +
    "  encapsulation: ViewEncapsulation.None,\n" +
    "  standalone: true,\n" +
    "  imports: [\n" +
    "    MatFormFieldModule,\n" +
    "    MatInputModule,\n" +
    "    MatDatepickerModule,\n" +
    "    FormsModule,\n" +
    "    ReactiveFormsModule,\n" +
    "  ],\n" +
    "})\n" +
    "export class DatepickerViewsSelectionExample {\n" +
    "  date = new FormControl(moment());\n" +
    "\n" +
    "  setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {\n" +
    "    const ctrlValue = this.date.value ?? moment();\n" +
    "    ctrlValue.month(normalizedMonthAndYear.month());\n" +
    "    ctrlValue.year(normalizedMonthAndYear.year());\n" +
    "    this.date.setValue(ctrlValue);\n" +
    "    datepicker.close();\n" +
    "  }\n" +
    "}\n";

  code12 = '\n' +
    '<mat-form-field>\n' +
    '  <mat-label>Month and Year</mat-label>\n' +
    '  <input matInput [matDatepicker]="dp" [formControl]="date">\n' +
    '  <mat-hint>MM/YYYY</mat-hint>\n' +
    '  <mat-datepicker-toggle matIconSuffix [for]="dp"></mat-datepicker-toggle>\n' +
    '  <mat-datepicker #dp\n' +
    '                  startView="multi-year"\n' +
    '                  (monthSelected)="setMonthAndYear($event, dp)"\n' +
    '                  panelClass="example-month-picker">\n' +
    '  </mat-datepicker>\n' +
    '</mat-form-field>\n';

  code13 = '\n' +
    "import {Component} from '@angular/core';\n" +
    "import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';\n" +
    "import {MatDatepickerModule} from '@angular/material/datepicker';\n" +
    "import {MatInputModule} from '@angular/material/input';\n" +
    "import {MatFormFieldModule} from '@angular/material/form-field';\n" +
    "import {provideNativeDateAdapter} from '@angular/material/core';\n" +
    "\n" +
    "@Component({\n" +
    "  selector: 'datepicker-value-example',\n" +
    "  templateUrl: 'datepicker-value-example.html',\n" +
    "  styleUrl: 'datepicker-value-example.css',\n" +
    "  standalone: true,\n" +
    "  providers: [provideNativeDateAdapter()],\n" +
    "  imports: [\n" +
    "    MatFormFieldModule,\n" +
    "    MatInputModule,\n" +
    "    MatDatepickerModule,\n" +
    "    FormsModule,\n" +
    "    ReactiveFormsModule,\n" +
    "  ],\n" +
    "})\n" +
    "export class DatepickerValueExample {\n" +
    "  date = new FormControl(new Date());\n" +
    "  serializedDate = new FormControl(new Date().toISOString());\n" +
    "}\n";

  code14 = '\n' +
    '<mat-form-field>\n' +
    '  <mat-label>Angular forms</mat-label>\n' +
    '  <input matInput [matDatepicker]="picker1" [formControl]="date">\n' +
    '  <mat-hint>MM/DD/YYYY</mat-hint>\n' +
    '  <mat-datepicker-toggle matIconSuffix [for]="picker1"></mat-datepicker-toggle>\n' +
    '  <mat-datepicker #picker1></mat-datepicker>\n' +
    '</mat-form-field>\n' +
    '\n' +
    '<mat-form-field>\n' +
    '  <mat-label>Angular forms (w/ deserialization)</mat-label>\n' +
    '  <input matInput [matDatepicker]="picker2"\n' +
    '         [formControl]="serializedDate">\n' +
    '  <mat-hint>MM/DD/YYYY</mat-hint>\n' +
    '  <mat-datepicker-toggle matIconSuffix [for]="picker2"></mat-datepicker-toggle>\n' +
    '  <mat-datepicker #picker2></mat-datepicker>\n' +
    '</mat-form-field>\n' +
    '\n' +
    '<mat-form-field>\n' +
    '  <mat-label>Value binding</mat-label>\n' +
    '  <input matInput [matDatepicker]="picker3" [value]="date.value">\n' +
    '  <mat-hint>MM/DD/YYYY</mat-hint>\n' +
    '  <mat-datepicker-toggle matIconSuffix [for]="picker3"></mat-datepicker-toggle>\n' +
    '  <mat-datepicker #picker3></mat-datepicker>\n' +
    '</mat-form-field>\n';

  code15 = '\n' +
    "import {Component} from '@angular/core';\n" +
    "import {MatDatepickerModule} from '@angular/material/datepicker';\n" +
    "import {MatInputModule} from '@angular/material/input';\n" +
    "import {MatFormFieldModule} from '@angular/material/form-field';\n" +
    "import {provideNativeDateAdapter} from '@angular/material/core';\n" +
    " \n" +
    "@Component({\n" +
    "  selector: 'datepicker-color-example',\n" +
    "  templateUrl: 'datepicker-color-example.html',\n" +
    "  styleUrl: 'datepicker-color-example.css',\n" +
    "  standalone: true,\n" +
    "  providers: [provideNativeDateAdapter()],\n" +
    "  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],\n" +
    "})\n" +
    "export class DatepickerColorExample {}\n" +
    "  \n";

  code16 = '\n' +
    '<mat-form-field color="accent">\n' +
    '    <mat-label>Inherited calendar color</mat-label>\n' +
    '    <input matInput [matDatepicker]="picker1">\n' +
    '    <mat-hint>MM/DD/YYYY</mat-hint>\n' +
    '    <mat-datepicker-toggle matIconSuffix [for]="picker1"></mat-datepicker-toggle>\n' +
    '    <mat-datepicker #picker1></mat-datepicker>\n' +
    '  </mat-form-field>\n' +
    '  \n' +
    '  <mat-form-field color="accent">\n' +
    '    <mat-label>Custom calendar color</mat-label>\n' +
    '    <input matInput [matDatepicker]="picker2">\n' +
    '    <mat-hint>MM/DD/YYYY</mat-hint>\n' +
    '    <mat-datepicker-toggle matIconSuffix [for]="picker2"></mat-datepicker-toggle>\n' +
    '    <mat-datepicker #picker2 color="primary"></mat-datepicker>\n' +
    '  </mat-form-field>\n';

  code17 = '\n' +
    "import {Component} from '@angular/core';\n" +
    "import {MatDatepickerModule} from '@angular/material/datepicker';\n" +
    "import {MatInputModule} from '@angular/material/input';\n" +
    "import {MatFormFieldModule} from '@angular/material/form-field';\n" +
    "import {provideNativeDateAdapter} from '@angular/material/core';\n" +
    "\n" +
    "@Component({\n" +
    "  selector: 'datepicker-min-max-example',\n" +
    "  templateUrl: 'datepicker-min-max-example.html',\n" +
    "  standalone: true,\n" +
    "  providers: [provideNativeDateAdapter()],\n" +
    "  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],\n" +
    "})\n" +
    "export class DatepickerMinMaxExample {\n" +
    "  minDate: Date;\n" +
    "  maxDate: Date;\n" +
    "\n" +
    "  constructor() {\n" +
    "    const currentYear = new Date().getFullYear();\n" +
    "    this.minDate = new Date(currentYear - 20, 0, 1);\n" +
    "    this.maxDate = new Date(currentYear + 1, 11, 31);\n" +
    "  }\n" +
    "}\n";


  code18 = '\n' +
    '<mat-form-field class="example-full-width">\n' +
    '  <mat-label>Choose a date</mat-label>\n' +
    '  <input matInput [min]="minDate" [max]="maxDate" [matDatepicker]="picker">\n' +
    '  <mat-hint>MM/DD/YYYY</mat-hint>\n' +
    '  <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>\n' +
    '  <mat-datepicker #picker></mat-datepicker>\n' +
    '</mat-form-field>\n';

  code19 = '\n' +
    "import {Component} from '@angular/core';\n" +
    "import {MatDatepickerModule} from '@angular/material/datepicker';\n" +
    "import {MatInputModule} from '@angular/material/input';\n" +
    "import {MatFormFieldModule} from '@angular/material/form-field';\n" +
    "import {provideNativeDateAdapter} from '@angular/material/core';\n" +
    "\n" +
    "@Component({\n" +
    "  selector: 'datepicker-filter-example',\n" +
    "  templateUrl: 'datepicker-filter-example.html',\n" +
    "  standalone: true,\n" +
    "  providers: [provideNativeDateAdapter()],\n" +
    "  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],\n" +
    "})\n" +
    "export class DatepickerFilterExample {\n" +
    "  myFilter = (d: Date | null): boolean => {\n" +
    "    const day = (d || new Date()).getDay();\n" +
    "    return day !== 0 && day !== 6;\n" +
    "  };\n" +
    "}\n";

  code20 = '\n' +
    '<mat-form-field class="example-full-width">\n' +
    '  <mat-label>Choose a date</mat-label>\n' +
    '  <input matInput [matDatepickerFilter]="myFilter" [matDatepicker]="picker">\n' +
    '  <mat-hint>MM/DD/YYYY</mat-hint>\n' +
    '  <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>\n' +
    '  <mat-datepicker #picker></mat-datepicker>\n' +
    '</mat-form-field>\n';


  // Date range picker forms integration
  range7 = new FormGroup({
    start7: new FormControl<Date | null>(null),
    end7: new FormControl<Date | null>(null),
  });


  // Datepicker start date
  startDate9 = new Date(1990, 0, 1);

  // Datepicker emulating a Year and month picker
  date11 = new FormControl(moment());

  setMonthAndYear11(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date11.value ?? moment();
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date11.setValue(ctrlValue);
    datepicker.close();
  }

  // Datepicker selected value
  date13 = new FormControl(new Date());
  serializedDate13 = new FormControl(new Date().toISOString());

  // Datepicker palette colors
  minDate17: Date;
  maxDate17: Date;

  constructor(
    private router : Router
  ) {
    const currentYear = new Date().getFullYear();
    this.minDate17 = new Date(currentYear - 20, 0, 1);
    this.maxDate17 = new Date(currentYear + 1, 11, 31);
  }

  ngOnInit(): void {
    this.reload();
  }
  
  reload() {
    this.router.navigateByUrl('datePicker');
  }
}
