import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { merge } from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
  standalone: true,
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormFieldComponent {
  c1 = '\n' +
    "@NgModule({\n" +
    "  providers: [\n" +
    "    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}\n" +
    "  ]\n" +
    "})\n";

  code1 = '\n' +
    "import {Component} from '@angular/core';\n" +
    "import {MatSelectModule} from '@angular/material/select';\n" +
    "import {MatInputModule} from '@angular/material/input';\n" +
    "import {MatFormFieldModule} from '@angular/material/form-field';\n" +
    "\n" +
    "@Component({\n" +
    "  selector: 'form-field-overview-example',\n" +
    "  templateUrl: 'form-field-overview-example.html',\n" +
    "  styleUrl: 'form-field-overview-example.css',\n" +
    "  standalone: true,\n" +
    "  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],\n" +
    "})\n" +
    "export class FormFieldOverviewExample {}\n";

  code2 = '\n' +
    '<mat-form-field>\n' +
    ' <mat-label>Input</mat-label>\n' +
    ' <input matInput>\n' +
    '</mat-form-field>\n' +
    '<mat-form-field>\n' +
    ' <mat-label>Select</mat-label>\n' +
    ' <mat-select>\n' +
    '   <mat-option value="one">First option</mat-option>\n' +
    '   <mat-option value="two">Second option</mat-option>\n' +
    ' </mat-select>\n' +
    '</mat-form-field>\n' +
    '<mat-form-field>\n' +
    ' <mat-label>Textarea</mat-label>\n' +
    ' <textarea matInput></textarea>\n' +
    '</mat-form-field>\n';

  code3 = '\n' +
    " import {Component} from '@angular/core';\n" +
    " import {MatIconModule} from '@angular/material/icon';\n" +
    " import {MatInputModule} from '@angular/material/input';\n" +
    " import {MatFormFieldModule} from '@angular/material/form-field';\n" +
    " \n" +
    " @Component({\n" +
    "   selector: 'form-field-appearance-example',\n" +
    "   templateUrl: 'form-field-appearance-example.html',\n" +
    "   standalone: true,\n" +
    "   imports: [MatFormFieldModule, MatInputModule, MatIconModule],\n" +
    " })\n" +
    " export class FormFieldAppearanceExample {}\n";

  code4 = '\n' +
    '<p>\n' +
    ' <mat-form-field appearance="fill">\n' +
    '   <mat-label>Fill form field</mat-label>\n' +
    '   <input matInput placeholder="Placeholder">\n' +
    '   <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n' +
    '   <mat-hint>Hint</mat-hint>\n' +
    ' </mat-form-field>\n' +
    '</p>\n' +
    '<p>\n' +
    ' <mat-form-field appearance="outline">\n' +
    '   <mat-label>Outline form field</mat-label>\n' +
    '   <input matInput placeholder="Placeholder">\n' +
    '   <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n' +
    '   <mat-hint>Hint</mat-hint>\n' +
    ' </mat-form-field>\n' +
    '</p>\n';

  code5 = '\n' +
    " import {Component} from '@angular/core';\n" +
    " import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';\n" +
    " import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';\n" +
    " import {MatIconModule} from '@angular/material/icon';\n" +
    " import {MatSelectModule} from '@angular/material/select';\n" +
    " import {MatInputModule} from '@angular/material/input';\n" +
    " import {MatRadioModule} from '@angular/material/radio';\n" +
    " import {MatCheckboxModule} from '@angular/material/checkbox';\n" +
    " \n" +
    " @Component({\n" +
    "   selector: 'form-field-label-example',\n" +
    "   templateUrl: 'form-field-label-example.html',\n" +
    "   styleUrl: 'form-field-label-example.css',\n" +
    "   standalone: true,\n" +
    "   imports: [\n" +
    "     FormsModule,\n" +
    "     ReactiveFormsModule,\n" +
    "     MatCheckboxModule,\n" +
    "     MatRadioModule,\n" +
    "     MatFormFieldModule,\n" +
    "     MatInputModule,\n" +
    "     MatSelectModule,\n" +
    "     MatIconModule,\n" +
    "   ],\n" +
    " })\n" +
    " export class FormFieldLabelExample {\n" +
    "   hideRequiredControl = new FormControl(false);\n" +
    "   floatLabelControl = new FormControl('auto' as FloatLabelType);\n" +
    "   options = this._formBuilder.group({\n" +
    "     hideRequired: this.hideRequiredControl,\n" +
    "     floatLabel: this.floatLabelControl,\n" +
    "   });\n" +
    " \n" +
    "   constructor(private _formBuilder: FormBuilder) {}\n" +
    " \n" +
    "   getFloatLabelValue(): FloatLabelType {\n" +
    "     return this.floatLabelControl.value || 'auto';\n" +
    "   }\n" +
    " }\n";

  code6 = '\n' +
    '<div class="example-container">\n' +
    ' <form [formGroup]="options">\n' +
    '   <mat-checkbox [formControl]="hideRequiredControl">Hide required marker</mat-checkbox>\n' +
    '   <div>\n' +
    '     <label>Float label: </label>\n' +
    '     <mat-radio-group [formControl]="floatLabelControl">\n' +
    '       <mat-radio-button value="auto">Auto</mat-radio-button>\n' +
    '       <mat-radio-button value="always">Always</mat-radio-button>\n' +
    '     </mat-radio-group>\n' +
    '   </div>\n' +
    '\n' +
    '   <div class="example-form-fields">\n' +
    '     <mat-form-field\n' +
    '         [hideRequiredMarker]="hideRequiredControl.value"\n' +
    '         [floatLabel]="getFloatLabelValue()">\n' +
    '       <input matInput placeholder="Simple placeholder" required>\n' +
    '     </mat-form-field>\n' +
    '\n' +
    '     <mat-form-field [floatLabel]="getFloatLabelValue()">\n' +
    '       <mat-label>Both a label and a placeholder</mat-label>\n' +
    '       <input matInput placeholder="Simple placeholder">\n' +
    '     </mat-form-field>\n' +
    '\n' +
    '     <mat-form-field\n' +
    '         [hideRequiredMarker]="hideRequiredControl.value"\n' +
    '         [floatLabel]="getFloatLabelValue()">\n' +
    '       <mat-select required>\n' +
    '         <mat-option>-- None --</mat-option>\n' +
    '         <mat-option value="option">Option</mat-option>\n' +
    '       </mat-select>\n' +
    '       <mat-label><mat-icon>favorite</mat-icon> <strong> Fancy</strong> <em> label</em></mat-label>\n' +
    '     </mat-form-field>\n' +
    '   </div>\n' +
    ' </form>\n' +
    '</div>\n';

  code7 = '\n' +
    " import {Component} from '@angular/core';\n" +
    " import {MatSelectModule} from '@angular/material/select';\n" +
    " import {MatInputModule} from '@angular/material/input';\n" +
    " import {MatFormFieldModule} from '@angular/material/form-field';\n" +
    " \n" +
    " @Component({\n" +
    "   selector: 'form-field-hint-example',\n" +
    "   templateUrl: 'form-field-hint-example.html',\n" +
    "   styleUrl: 'form-field-hint-example.css',\n" +
    "   standalone: true,\n" +
    "   imports: [MatFormFieldModule, MatInputModule, MatSelectModule],\n" +
    " })\n" +
    " export class FormFieldHintExample {}\n";

  code8 = '\n' +
    '<div class="example-container">\n' +
    ' <mat-form-field hintLabel="Max 10 characters">\n' +
    '   <mat-label>Enter some input</mat-label>\n' +
    '   <input matInput #input maxlength="10" placeholder="Ex. Nougat">\n' +
    '   <mat-hint align="end">{{input.value.length}}/10</mat-hint>\n' +
    ' </mat-form-field>\n' +
    '\n' +
    ' <mat-form-field>\n' +
    '   <mat-label>Select me</mat-label>\n' +
    '   <mat-select>\n' +
    '     <mat-option value="option">Option</mat-option>\n' +
    '   </mat-select>\n' +
    '   <mat-hint align="end">Here\'' + 's the dropdown arrow ^</mat-hint>\n' +
    ' </mat-form-field>\n' +
    '</div>\n';

  code9 = '\n' +
    " import {Component} from '@angular/core';\n" +
    " import {takeUntilDestroyed} from '@angular/core/rxjs-interop';\n" +
    " import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';\n" +
    " import {MatInputModule} from '@angular/material/input';\n" +
    " import {MatFormFieldModule} from '@angular/material/form-field';\n" +
    " import {merge} from 'rxjs';\n" +
    " \n" +
    " @Component({\n" +
    "   selector: 'form-field-error-example',\n" +
    "   templateUrl: 'form-field-error-example.html',\n" +
    "   styleUrl: 'form-field-error-example.css',\n" +
    "   standalone: true,\n" +
    "   imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],\n" +
    " })\n" +
    " export class FormFieldErrorExample {\n" +
    "   email = new FormControl('', [Validators.required, Validators.email]);\n" +
    " \n" +
    "   errorMessage = '';\n" +
    " \n" +
    "   constructor() {\n" +
    "     merge(this.email.statusChanges, this.email.valueChanges)\n" +
    "       .pipe(takeUntilDestroyed())\n" +
    "       .subscribe(() => this.updateErrorMessage());\n" +
    "   }\n" +
    " \n" +
    "   updateErrorMessage() {\n" +
    "     if (this.email.hasError('required')) {\n" +
    "       this.errorMessage = 'You must enter a value';\n" +
    "     } else if (this.email.hasError('email')) {\n" +
    "       this.errorMessage = 'Not a valid email';\n" +
    "     } else {\n" +
    "       this.errorMessage = '';\n" +
    "     }\n" +
    "   }\n" +
    " }\n";


  code10 = '\n' +
    '<div class="example-container">\n' +
    ' <mat-form-field>\n' +
    '   <mat-label>Enter your email</mat-label>\n' +
    '   <input matInput\n' +
    '          placeholder="pat@example.com"\n' +
    '          [formControl]="email"\n' +
    '          (blur)="updateErrorMessage()"\n' +
    '          required>\n' +
    '   @if (email.invalid) {\n' +
    '     <mat-error>{{errorMessage}}</mat-error>\n' +
    '   }\n' +
    ' </mat-form-field>\n' +
    '</div>\n';

  code11 = '\n' +
    " import {Component} from '@angular/core';\n" +
    " import {MatIconModule} from '@angular/material/icon';\n" +
    " import {MatButtonModule} from '@angular/material/button';\n" +
    " import {MatInputModule} from '@angular/material/input';\n" +
    " import {MatFormFieldModule} from '@angular/material/form-field';\n" +
    " \n" +
    " @Component({\n" +
    "   selector: 'form-field-prefix-suffix-example',\n" +
    "   templateUrl: 'form-field-prefix-suffix-example.html',\n" +
    "   styleUrl: 'form-field-prefix-suffix-example.css',\n" +
    "   standalone: true,\n" +
    "   imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],\n" +
    " })\n" +
    " export class FormFieldPrefixSuffixExample {\n" +
    "   hide = true;\n" +
    " }\n";

  code12 = '\n' +
    '<div class="example-container">\n' +
    ' <mat-form-field>\n' +
    '   <mat-label>Enter your password</mat-label>\n' +
    '   <input matInput [type]="hide ? \'' + 'password\'' + ' : \'' + 'text\'' + '>\n' +
    '   <button mat-icon-button matSuffix (click)="hide = !hide" [attr.aria-label]="\'' + 'Hide password\'' + '" [attr.aria-pressed]="hide">\n' +
    '     <mat-icon>{{hide ? \'' + 'visibility_off\'' + ' : \'' + 'visibility\'' + '}}</mat-icon>\n' +
    '   </button>\n' +
    ' </mat-form-field>\n' +
    '\n' +
    ' <mat-form-field floatLabel="always">\n' +
    '   <mat-label>Amount</mat-label>\n' +
    '   <input matInput type="number" class="example-right-align" placeholder="0">\n' +
    '   <span matTextPrefix>$&nbsp;</span>\n' +
    '   <span matTextSuffix>.00</span>\n' +
    ' </mat-form-field>\n' +
    '</div>\n';

  code13 = '\n' +
    "import {Component} from '@angular/core';\n" +
    "import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';\n" +
    "import {ThemePalette} from '@angular/material/core';\n" +
    "import {MatSelectModule} from '@angular/material/select';\n" +
    "import {MatFormFieldModule} from '@angular/material/form-field';\n" +
    " \n" +
    "@Component({\n" +
    "   selector: 'form-field-theming-example',\n" +
    "   templateUrl: 'form-field-theming-example.html',\n" +
    "   styleUrl: 'form-field-theming-example.css',\n" +
    "   standalone: true,\n" +
    "   imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],\n" +
    " })\n" +
    " export class FormFieldThemingExample {\n" +
    "   colorControl = new FormControl('primary' as ThemePalette);\n" +
    " }\n";

  code14 = '\n' +
    '<mat-form-field [color]="colorControl.value!">\n' +
    ' <mat-label>Color</mat-label>\n' +
    ' <mat-select [formControl]="colorControl">\n' +
    '   <mat-option value="primary">Primary</mat-option>\n' +
    '   <mat-option value="accent">Accent</mat-option>\n' +
    '   <mat-option value="warn">Warn</mat-option>\n' +
    ' </mat-select>\n' +
    '</mat-form-field>\n';

  // floating label
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  constructor(private _formBuilder: FormBuilder) { 
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  // form field with error
  email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage = '';


  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'You must enter a value';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Not a valid email';
    } else {
      this.errorMessage = '';
    }
  }

  // fix and prefix
  hide = true;

  // form fild theming
  colorControl = new FormControl('primary' as ThemePalette);

}
