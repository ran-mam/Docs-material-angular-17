import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { FormControl, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  standalone:true,
  imports :[
    MaterialModule,
    FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule
  ] 
})
export class InputComponent {

  c1 = "\n"+
  "@NgModule({\n"+
    "  providers: [\n"+
      "    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}\n"+
      "  ]\n"+
      "})\n";

  code1 = '\n'+
  "import {Component} from '@angular/core';\n"+
  "import {MatInputModule} from '@angular/material/input';\n"+
  "import {MatFormFieldModule} from '@angular/material/form-field';\n"+
  "import {FormsModule} from '@angular/forms';\n"+
  "\n"+
  "@Component({\n"+
    "  selector: 'input-overview-example',\n"+
    "  styleUrl: 'input-overview-example.css',\n"+
    "  templateUrl: 'input-overview-example.html',\n"+
    "  standalone: true,\n"+
    "  imports: [FormsModule, MatFormFieldModule, MatInputModule],\n"+
    "})\n"+
    "export class InputOverviewExample {}\n";
  
  code2 = '\n'+
'<form class="example-form">\n'+
'  <mat-form-field class="example-full-width">\n'+
'    <mat-label>Favorite food</mat-label>\n'+
'    <input matInput placeholder="Ex. Pizza" value="Sushi">\n'+
'  </mat-form-field>\n'+
'\n'+
'  <mat-form-field class="example-full-width">\n'+
'    <mat-label>Leave a comment</mat-label>\n'+
'    <textarea matInput placeholder="Ex. It makes me feel..."></textarea>\n'+
'  </mat-form-field>\n'+
'</form>\n';
  
  code3 = '\n'+
  "import {Component} from '@angular/core';\n"+
  "import {\n"+
    "  FormControl,\n"+
    "  FormGroupDirective,\n"+
    "  NgForm,\n"+
    "  Validators,\n"+
    "  FormsModule,\n"+
    "  ReactiveFormsModule,\n"+
    "} from '@angular/forms';\n"+
    "import {ErrorStateMatcher} from '@angular/material/core';\n"+
    "import {MatInputModule} from '@angular/material/input';\n"+
    "import {MatFormFieldModule} from '@angular/material/form-field';\n"+
    "\n"+
    "export class MyErrorStateMatcher implements ErrorStateMatcher {\n"+
      "  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {\n"+
        "    const isSubmitted = form && form.submitted;\n"+
        "    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));\n"+
        "        }\n"+
        "}\n"+
        "\n"+
        "@Component({\n"+
          "  selector: 'input-error-state-matcher-example',\n"+
          "  templateUrl: './input-error-state-matcher-example.html',\n"+
          "  styleUrl: './input-error-state-matcher-example.css',\n"+
          "  standalone: true,\n"+
          "  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],\n"+
          "})\n"+
          "export class InputErrorStateMatcherExample {\n"+
            "  emailFormControl = new FormControl('', [Validators.required, Validators.email]);\n"+
  "  matcher = new MyErrorStateMatcher();\n"+
  "}\n";
  
  
  code4 = '\n'+
'<form class="example-form">\n'+
'  <mat-form-field class="example-full-width">\n'+
'    <mat-label>Email</mat-label>\n'+
'    <input type="email" matInput [formControl]="emailFormControl" [errorStateMatcher]="matcher"\n'+
'           placeholder="Ex. pat@example.com">\n'+
'    <mat-hint>Errors appear instantly!</mat-hint>\n'+
'    @if (emailFormControl.hasError(\''+'email\''+') && !emailFormControl.hasError(\''+'required\''+')) {\n'+
'      <mat-error>Please enter a valid email address</mat-error>\n'+
'    }\n'+
'    @if (emailFormControl.hasError(\''+'required\''+')) {\n'+
  '      <mat-error>Email is <strong>required</strong></mat-error>\n'+
  '    }\n'+
  '  </mat-form-field>\n'+
  '</form>\n';

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

}
