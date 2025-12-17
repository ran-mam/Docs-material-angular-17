import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe, Location, NgIf } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

export interface User {
  name: string;
}



@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss',
  standalone: true,
  imports: [
    MaterialModule,
    FormsModule,
    AsyncPipe,
    ReactiveFormsModule,
    NgIf
  ]
})


export class AutocompleteComponent implements OnInit {


  code1 = '\n' +
    '<mat-autocomplete #auto="matAutocomplete">\n' +
    '    @for (option of options; track option) {\n' +
    '        <mat-option [value]="option">{{option}}</mat-option>\n' +
    '     }\n' +
    '</mat-autocomplete>';

  code2 = '\n' +
    '<input type="text"+\n' +
    '     placeholder="Pick one"\n' +
    '     aria-label="Number"\n' +
    '     matInput\n' +
    '     [formControl]="myControl"\n' +
    '     [matAutocomplete]="auto">';

  code3 = '\n' +
    "import { Component, OnInit } from '@angular/core';\n" +
    "import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';\n" +
    "import { Observable } from 'rxjs';\n" +
    "import { map, startWith } from 'rxjs/operators';\n" +
    "import { AsyncPipe } from '@angular/common';\n" +
    "import { MaterialModule } from '../../material.module';\n" +
    "@Component({\n" +
    "    selector: 'app-autocomplete',\n" +
    "    templateUrl: './autocomplete.component.html',\n" +
    "    styleUrl: './autocomplete.component.scss',\n" +
    "    standalone: true,\n" +
    "    imports: [\n" +
    "        MaterialModule,\n" +
    "        FormsModule,\n" +
    "        AsyncPipe,\n" +
    "        ReactiveFormsModule\n" +
    "    ]\n" +
    "})\n" +
    "export class AutocompleteComponent implements OnInit {\n" +
    "    myControl = new FormControl('');\n" +
    "    options: string[] = ['One', 'Two', 'Three'];\n" +
    "    filteredOptions?: Observable<string[]>;\n" +
    "    ngOnInit() {\n" +
    "        this.filteredOptions = this.myControl.valueChanges.pipe(\n" +
    "            startWith(''),\n" +
    "            map(value => this._filter(value || '')),\n" +
    "        );\n" +
    "    }\n" +
    "}\n";

  code4 = '\n' +
    '<form class="example-form">\n' +
    '    <mat-form-field class="example-full-width">\n' +
    '    <mat-label>Number</mat-label>\n' +
    '    <input type="text"\n' +
    '    placeholder="Pick one"\n' +
    '    aria-label="Number"\n' +
    '    matInput\n' +
    '    [formControl]="myControl"\n' +
    '    [matAutocomplete]="auto">\n' +
    '    <mat-autocomplete #auto="matAutocomplete">\n' +
    '        @for (option of filteredOptions | async; track option) {\n' +
    '            <mat-option [value]="option">{{option}}</mat-option>\n' +
    '        }\n' +
    '    </mat-autocomplete>\n' +
    '    </mat-form-field>\n' +
    '</form>;\n';

  code5 = '\n' +
    "import {Component, OnInit} from '@angular/core';\n" +
    "import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';\n" +
    "import {Observable} from 'rxjs';\n" +
    "import {map, startWith} from 'rxjs/operators';\n" +
    "import {AsyncPipe} from '@angular/common';\n" +
    "import {MatAutocompleteModule} from '@angular/material/autocomplete';\n" +
    "import {MatInputModule} from '@angular/material/input';\n" +
    "import {MatFormFieldModule} from '@angular/material/form-field';\n" +
    "export interface User {\n" +
    "  name: string;\n" +
    "}\n" +
    "@Component({\n" +
    "  selector: 'autocomplete-display-example',\n" +
    "  templateUrl: 'autocomplete-display-example.html',\n" +
    "  styleUrl: 'autocomplete-display-example.css',\n" +
    "  standalone: true,\n" +
    "  imports: [\n" +
    "    FormsModule,\n" +
    "    MatFormFieldModule,\n" +
    "    MatInputModule,\n" +
    "    MatAutocompleteModule,\n" +
    "    ReactiveFormsModule,\n" +
    "    AsyncPipe,\n" +
    "  ],\n" +
    "})\n" +
    "export class AutocompleteDisplayExample implements OnInit {\n" +
    "  myControl = new FormControl<string | User>('');\n" +
    "  options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];\n" +
    "  filteredOptions: Observable<User[]>;\n" +
    "  ngOnInit() {\n" +
    "    this.filteredOptions = this.myControl.valueChanges.pipe(\n" +
    "      startWith(''),\n" +
    "      map(value => {\n" +
    "        const name = typeof value === 'string' ? value : value?.name;\n" +
    "        return name ? this._filter(name as string) : this.options.slice();\n" +
    "      }),\n" +
    "    );\n" +
    "  }\n" +
    "  displayFn(user: User): string {\n" +
    "    return user && user.name ? user.name : '';\n" +
    "  }\n" +
    "  private _filter(name: string): User[] {\n" +
    "    const filterValue = name.toLowerCase();\n" +
    "   return this.options.filter(option => option.name.toLowerCase().includes(filterValue));\n" +
    "  }\n" +
    "}\n";


  code6 = '\n' +
    '<form class="example-form">\n' +
    '  <mat-form-field class="example-full-width">\n' +
    '    <mat-label>Assignee</mat-label>\n' +
    '    <input type="text" matInput [formControl]="myControl" [matAutocomplete]="auto">\n' +
    '    <mat-autocomplete #auto="matAutocomplete" [displayWith]="displayFn">\n' +
    '      @for (option of filteredOptions | async; track option) {\n' +
    '        <mat-option [value]="option">{{option.name}}</mat-option>\n' +
    '      }\n' +
    '    </mat-autocomplete\n' +
    '  </mat-form-field>\n' +
    '</form>\n';

  code7 = '\n' +
    "import {Component, ElementRef, ViewChild} from '@angular/core';\n" +
    "import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';\n" +
    "import {AsyncPipe} from '@angular/common';\n" +
    "import {MatAutocompleteModule} from '@angular/material/autocomplete';\n" +
    "import {MatInputModule} from '@angular/material/input';\n" +
    "import {MatFormFieldModule} from '@angular/material/form-field';\n" +
    "@Component({\n" +
    "  selector: 'autocomplete-require-selection-example',\n" +
    "  templateUrl: 'autocomplete-require-selection-example.html',\n" +
    "  styleUrl: 'autocomplete-require-selection-example.css',\n" +
    "  standalone: true,\n" +
    "  imports: [\n" +
    "    FormsModule,\n" +
    "    MatFormFieldModule,\n" +
    "    MatInputModule,\n" +
    "    MatAutocompleteModule,\n" +
    "    ReactiveFormsModule,\n" +
    "    AsyncPipe,\n" +
    "  ],\n" +
    "})\n" +
    "export class AutocompleteRequireSelectionExample {\n" +
    "  @ViewChild('input') input: ElementRef<HTMLInputElement>;\n" +
    "  myControl = new FormControl('');\n" +
    "  options: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];\n" +
    "  filteredOptions: string[];\n" +
    "  constructor() {\n" +
    "    this.filteredOptions = this.options.slice();\n" +
    "  }\n" +
    "  filter(): void {\n" +
    "    const filterValue = this.input.nativeElement.value.toLowerCase();\n" +
    "    this.filteredOptions = this.options.filter(o => o.toLowerCase().includes(filterValue));\n" +
    "  }\n" +
    "}\n";

  code8 = '\n' +
    '<form class="example-form">\n' +
    '  <mat-form-field class="example-full-width">\n' +
    '    <mat-label>Number</mat-label>\n' +
    '    <input #input\n' +
    '           type="text"\n' +
    '           placeholder="Pick one"\n' +
    '           matInput\n' +
    '           [formControl]="myControl"\n' +
    '           [matAutocomplete]="auto"\n' +
    '           (input)="filter()"\n' +
    '           (focus)="filter()">\n' +
    '    <mat-autocomplete requireSelection #auto="matAutocomplete">\n' +
    '      @for (option of filteredOptions; track option) {\n' +
    '        <mat-option [value]="option">{{option}}</mat-option>\n' +
    '      }\n' +
    '    </mat-autocomplete>\n' +
    '  </mat-form-field>\n' +
    '</form>\n';

  code9 = '\n' +
    "import {Component, OnInit} from '@angular/core';\n" +
    "import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';\n" +
    "import {Observable} from 'rxjs';\n" +
    "import {startWith, map} from 'rxjs/operators';\n" +
    "import {AsyncPipe} from '@angular/common';\n" +
    "import {MatAutocompleteModule} from '@angular/material/autocomplete';\n" +
    "@Component({\n" +
    "  selector: 'autocomplete-plain-input-example',\n" +
    "  templateUrl: 'autocomplete-plain-input-example.html',\n" +
    "  styleUrl: 'autocomplete-plain-input-example.css',\n" +
    "  standalone: true,\n" +
    "  imports: [FormsModule, MatAutocompleteModule, ReactiveFormsModule, AsyncPipe],\n" +
    "})\n" +
    "export class AutocompletePlainInputExample implements OnInit {\n" +
    "  control = new FormControl('');\n" +
    "  streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];\n" +
    "  filteredStreets: Observable<string[]>;\n" +
    "  ngOnInit() {\n" +
    "    this.filteredStreets = this.control.valueChanges.pipe(\n" +
    "      startWith(''),\n" +
    "      map(value => this._filter(value || '')),\n" +
    "    );\n" +
    "  }\n" +
    "  private _filter(value: string): string[] {\n" +
    "    const filterValue = this._normalizeValue(value);\n" +
    "    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));\n" +
    "  }\n" +
    "  private _normalizeValue(value: string): string {\n" +
    "    return value.toLowerCase().replace(/\s/g, '');\n" +
    "  }\n" +
    "}\n";

  code10 = '\n' +
    '<form class="example-form">\n' +
    '  <input type="text"\n' +
    '         placeholder="Search for a street"\n' +
    '         [formControl]="control"\n' +
    '         [matAutocomplete]="auto"\n' +
    '         class="example-input">\n' +
    '  <mat-autocomplete #auto="matAutocomplete">\n' +
    '    @for (street of filteredStreets | async; track street) {\n' +
    '      <mat-option [value]="street">{{street}}</mat-option>\n' +
    '    }\n' +
    '  </mat-autocomplete>\n' +
    '</form>\n';

  code11 = '\n' +
    '<div class="custom-wrapper-example" matAutocompleteOrigin #origin="matAutocompleteOrigin">\n' +
    '  <input\n' +
    '    matInput\n' +
    '    [formControl]="myControl"\n' +
    '    [matAutocomplete]="auto"\n' +
    '    [matAutocompleteConnectedTo]="origin">\n' +
    '</div>\n' +
    '<mat-autocomplete #auto="matAutocomplete">\n' +
    '  @for (option of options; track option) {\n' +
    '    <mat-option [value]="option">{{option}}</mat-option>\n' +
    '  }\n' +
    '</mat-autocomplete>\n';

    test = '<p>paragraph</p>';

  // Filter autocomplete
  myControl1 = new FormControl('');
  options1: string[] = ['One', 'Two', 'Three'];
  filteredOptions1?: Observable<string[]>;
  private _filter1(value: string): string[] {
    const filterValue1 = value.toLowerCase();
    return this.options1.filter(option1 => option1.toLowerCase().includes(filterValue1));
  }

  // Display value autocomplete
  myControl2 = new FormControl<string | User>('');
  options2: User[] = [{ name: 'Mary' }, { name: 'Shelley' }, { name: 'Igor' }];
  filteredOptions2?: Observable<User[]>;

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }


  private _filter2(name: string): User[] {
    const filterValue2 = name.toLowerCase();
    return this.options2.filter(option2 => option2.name.toLowerCase().includes(filterValue2));
  }

  // Require an option to be selected
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  myControl3 = new FormControl('');
  options3: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];
  filteredOptions3: string[];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.filteredOptions3 = this.options3.slice();
  }

  filter3(): void {
    const filterValue3 = this.input.nativeElement.value.toLowerCase();
    this.filteredOptions3 = this.options3.filter(option3 => option3.toLowerCase().includes(filterValue3));
  }

  // Autocomplete on a custom input element
  myControl5 = new FormControl('');
  streets5: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
  filteredStreets5?: Observable<string[]>;

  private _filter5(value: string): string[] {
    const filterValue5 = this._normalizeValue(value);
    return this.streets5.filter(street => this._normalizeValue(street).includes(filterValue5));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  // --------------------------------------
  // isCodeLoad = true;
  currentUrl = ''
  ngOnInit() {
    // setTimeout(() => {
    // this.isCodeLoad = true;
    // window.location.reload()
    // this.router.navigateByUrl('autocomplete')
    // }, 1000)

    this.filteredOptions1 = this.myControl1.valueChanges.pipe(
      startWith(''),
      map(value => this._filter1(value || '')),
    );

    this.filteredOptions2 = this.myControl2.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter2(name as string) : this.options2.slice();
      }),
    );

    this.filteredStreets5 = this.myControl5.valueChanges.pipe(
      startWith(''),
      map(value => this._filter5(value || '')),
    );

  }
}
