import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MaterialModule } from '../../material.module';
import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { Observable, map, startWith } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ThemePalette } from '@angular/material/core';

export interface Fruit {
  name: string;
}

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.scss',
  standalone: true,
  imports: [
    MaterialModule,
    MatChipsModule,
    AsyncPipe,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ChipsComponent {

  c1 = '\n' +
    '<mat-chip disabled>Orange</mat-chip>\n';

  c2 = '\n' +
    '<mat-chip disabled>Orange</mat-chip>\n';

  c3 = '\n' +
    '<mat-chip-row disabled>Orange</mat-chip-row>\n';

  c4 = '\n' +
    '<mat-chip-option>\n' +
    '    Orange\n' +
    '    <button matChipRemove aria-label="Remove orange">\n' +
    '      <mat-icon>cancel</mat-icon>\n' +
    '    </button>\n' +
    '</mat-chip-option>\n';

  c5 = '\n' +
    '@NgModule({\n' +
    '  providers: [\n' +
    '    {\n' +
    '      provide: MAT_CHIPS_DEFAULT_OPTIONS,\n' +
    '      useValue: {\n' +
    '        separatorKeyCodes: [COMMA, SPACE]\n' +
    '      }\n' +
    '    }\n' +
    '  ]\n';

  c6 = '\n' +
    '<mat-chip-listbox aria-label="select a shirt size">\n' +
    '  <mat-chip-option> Small </mat-chip-option>\n' +
    '  <mat-chip-option> Medium </mat-chip-option>\n' +
    '  <mat-chip-option> Large </mat-chip-option>\n' +
    '</mat-chip-listbox>\n';

  c7 = '\n' +
    '<mat-form-field>\n' +
    '  <mat-chip-grid #myChipGrid [(ngModel)]="mySelection"\n' +
    '    aria-label="enter sandwich fillings">\n' +
    '    @for (filling of fillings; track filling) {\n' +
    '      <mat-chip-row (removed)="remove(filling)">\n' +
    '        {{filling.name}}\n' +
    '        <button matChipRemove>\n' +
    '          <mat-icon>cancel</mat-icon>\n' +
    '        </button>\n' +
    '      </mat-chip-row>\n' +
    '    }\n' +
    '    <input [matChipInputFor]="myChipGrid"\n' +
    '           [matChipInputSeparatorKeyCodes]="separatorKeysCodes"\n' +
    '           (matChipInputTokenEnd)="add($event)" />\n' +
    '  </mat-chip-grid>\n' +
    '</mat-form-field>\n';

  c8 = '\n' +
    '<mat-chip-set role="list">\n' +
    '  <mat-chip role="listitem"> Sugar </mat-chip>\n' +
    '  <mat-chip role="listitem"> Spice </mat-chip>\n' +
    '  <mat-chip role="listitem"> Everything Nice </mat-chip>\n' +
    '</mat-chip-set>\n';

  c9 = '\n' +
    '<mat-chip-set>\n' +
    '  <mat-chip> John </mat-chip>\n' +
    '  <mat-chip> Paul </mat-chip>\n' +
    '  <mat-chip> James </mat-chip>\n' +
    '</mat-chip-set>\n';

  code1 = '\n' +
    "import {Component} from '@angular/core';\n" +
    "import {MatChipsModule} from '@angular/material/chips';\n" +
    "\n" +
    "@Component({\n" +
    "  selector: 'chips-overview-example',\n" +
    "  templateUrl: 'chips-overview-example.html',\n" +
    "  standalone: true,\n" +
    "  imports: [MatChipsModule],\n" +
    "})\n" +
    "export class ChipsOverviewExample {}\n";

  code2 = '\n' +
    '<mat-chip-listbox aria-label="Fish selection">\n' +
    '  <mat-chip-option>One fish</mat-chip-option>\n' +
    '  <mat-chip-option>Two fish</mat-chip-option>\n' +
    '  <mat-chip-option color="accent" selected>Accent fish</mat-chip-option>\n' +
    '  <mat-chip-option color="warn">Warn fish</mat-chip-option>\n' +
    '</mat-chip-listbox>\n';

  code3 = '\n' +
    "import {COMMA, ENTER} from '@angular/cdk/keycodes';\n" +
    "import {Component, inject} from '@angular/core';\n" +
    "import {MatChipEditedEvent, MatChipInputEvent, MatChipsModule} from '@angular/material/chips';\n" +
    "import {MatIconModule} from '@angular/material/icon';\n" +
    "import {MatFormFieldModule} from '@angular/material/form-field';\n" +
    "import {LiveAnnouncer} from '@angular/cdk/a11y';\n" +
    "\n" +
    "export interface Fruit {\n" +
    "  name: string;\n" +
    "}\n" +
    "\n" +
    "@Component({\n" +
    "  selector: 'chips-input-example',\n" +
    "  templateUrl: 'chips-input-example.html',\n" +
    "  styleUrl: 'chips-input-example.css',\n" +
    "  standalone: true,\n" +
    "  imports: [MatFormFieldModule, MatChipsModule, MatIconModule],\n" +
    "})\n" +
    "export class ChipsInputExample {\n" +
    "  addOnBlur = true;\n" +
    "  readonly separatorKeysCodes = [ENTER, COMMA] as const;\n" +
    "  fruits: Fruit[] = [{name: 'Lemon'}, {name: 'Lime'}, {name: 'Apple'}];\n" +

    "  announcer = inject(LiveAnnouncer);\n" +

    "  add(event: MatChipInputEvent): void {\n" +
    "    const value = (event.value || '').trim();\n" +
    "    if (value) {\n" +
    "      this.fruits.push({name: value});\n" +
    "    }\n" +

    "    event.chipInput!.clear();\n" +
    "  }\n" +

    "  remove(fruit: Fruit): void {\n" +
    "    const index = this.fruits.indexOf(fruit);\n" +

    "    if (index >= 0) {\n" +
    "      this.fruits.splice(index, 1);\n" +
    "      this.announcer.announce(`Removed ${fruit}`);\n" +
    "    }\n" +
    "  }\n" +

    "  edit(fruit: Fruit, event: MatChipEditedEvent) {\n" +
    "    const value = event.value.trim();\n" +
    "    if (!value) {\n" +
    "      this.remove(fruit);\n" +
    "      return;\n" +
    "    }\n" +
    "    const index = this.fruits.indexOf(fruit);\n" +
    "    if (index >= 0) {\n" +
    "      this.fruits[index].name = value;\n" +
    "    }\n" +
    "  }\n" +
    "}\n";

  code4 = "\n" +
    '<mat-form-field class="example-chip-list">\n' +
    '  <mat-label>Favorite Fruits</mat-label>\n' +
    '  <mat-chip-grid #chipGrid aria-label="Enter fruits">\n' +
    '    @for (fruit of fruits; track fruit) {\n' +
    '      <mat-chip-row\n' +
    '        (removed)="remove(fruit)"\n' +
    '        [editable]="true"\n' +
    '        (edited)="edit(fruit, $event)"\n' +
    '        [aria-description]="\'' + 'press enter to edit \'' + 'fruit.name">\n' +
    '        {{fruit.name}}\n' +
    '        <button matChipRemove [attr.aria-label]="\'' + 'remove \'' + '+ fruit.name">\n' +
    '          <mat-icon>cancel</mat-icon>\n' +
    '        </button>\n' +
    '      </mat-chip-row>\n' +
    '    }\n' +
    '    <input placeholder="New fruit..."\n' +
    '           [matChipInputFor]="chipGrid"\n' +
    '           [matChipInputSeparatorKeyCodes]="separatorKeysCodes"\n' +
    '           [matChipInputAddOnBlur]="addOnBlur"\n' +
    '           (matChipInputTokenEnd)="add($event)"/>\n' +
    '  </mat-chip-grid>\n' +
    '</mat-form-field>\n';

  code5 = '\n' +
    "import {COMMA, ENTER} from '@angular/cdk/keycodes';\n" +
    "import {Component, ElementRef, ViewChild, inject} from '@angular/core';\n" +
    "import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';\n" +
    "import {MatAutocompleteSelectedEvent, MatAutocompleteModule} from '@angular/material/autocomplete';\n" +
    "import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';\n" +
    "import {Observable} from 'rxjs';\n" +
    "import {map, startWith} from 'rxjs/operators';\n" +
    "import {MatIconModule} from '@angular/material/icon';\n" +
    "import {AsyncPipe} from '@angular/common';\n" +
    "import {MatFormFieldModule} from '@angular/material/form-field';\n" +
    "import {LiveAnnouncer} from '@angular/cdk/a11y';\n" +
    "\n" +
    "@Component({\n" +
    "  selector: 'chips-autocomplete-example',\n" +
    "  templateUrl: 'chips-autocomplete-example.html',\n" +
    "  styleUrl: 'chips-autocomplete-example.css',\n" +
    "  standalone: true,\n" +
    "  imports: [\n" +
    "    FormsModule,\n" +
    "    MatFormFieldModule,\n" +
    "    MatChipsModule,\n" +
    "    MatIconModule,\n" +
    "    MatAutocompleteModule,\n" +
    "    ReactiveFormsModule,\n" +
    "    AsyncPipe,\n" +
    "  ],\n" +
    "})\n" +
    "export class ChipsAutocompleteExample {\n" +
    "  separatorKeysCodes: number[] = [ENTER, COMMA];\n" +
    "  fruitCtrl = new FormControl('');\n" +
    "  filteredFruits: Observable<string[]>;\n" +
    "  fruits: string[] = ['Lemon'];\n" +
    "  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];\n" +
    " \n" +
    "   @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;\n" +
    " \n" +
    "   announcer = inject(LiveAnnouncer);\n" +
    " \n" +
    "   constructor() {\n" +
    "     this.filteredFruits = this.fruitCtrl.valueChanges.pipe(\n" +
    "       startWith(null),\n" +
    "       map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),\n" +
    "     );\n" +
    "   }\n" +
    " \n" +
    "   add(event: MatChipInputEvent): void {\n" +
    "     const value = (event.value || '').trim();\n" +
    " \n" +
    "     // Add our fruit\n" +
    "     if (value) {\n" +
    "       this.fruits.push(value);\n" +
    "     }\n" +
    " \n" +
    "     // Clear the input value\n" +
    "     event.chipInput!.clear();\n" +
    " \n" +
    "    this.fruitCtrl.setValue(null);\n" +
    "  }\n" +
    " \n" +
    " remove(fruit: string): void {\n" +
    "    const index = this.fruits.indexOf(fruit);\n" +
    "\n" +
    "   if (index >= 0) {\n" +
    "      this.fruits.splice(index, 1);\n" +
    "\n" +
    "      this.announcer.announce(`Removed ${fruit}`);\n" +
    "    }\n" +
    "  }\n" +
    "\n" +
    "  selected(event: MatAutocompleteSelectedEvent): void {\n" +
    "    this.fruits.push(event.option.viewValue);\n" +
    "    this.fruitInput.nativeElement.value = '';\n" +
    "    this.fruitCtrl.setValue(null);\n" +
    "  }\n" +
    " \n" +
    "   private _filter(value: string): string[] {\n" +
    "    const filterValue = value.toLowerCase();\n" +
    "\n" +
    "    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));\n" +
    " }\n" +
    "}  \n";

  code6 = '\n' +
    '<form>\n' +
    '  <mat-form-field class="example-chip-list">\n' +
    '    <mat-label>Favorite Fruits</mat-label>\n' +
    '    <mat-chip-grid #chipGrid aria-label="Fruit selection">\n' +
    '      @for (fruit of fruits; track fruit) {\n' +
    '        <mat-chip-row (removed)="remove(fruit)">\n' +
    '          {{fruit}}\n' +
    '          <button matChipRemove [attr.aria-label]="\'' + 'remove \'' + 'fruit">\n' +
    '            <mat-icon>cancel</mat-icon>\n' +
    '          </button>\n' +
    '        </mat-chip-row>\n' +
    '      }\n' +
    '    </mat-chip-grid>\n' +
    '    <input placeholder="New Fruit..." #fruitInput [formControl]="fruitCtrl"\n' +
    '      [matChipInputFor]="chipGrid" [matAutocomplete]="auto"\n' +
    '      [matChipInputSeparatorKeyCodes]="separatorKeysCodes"\n' +
    '      (matChipInputTokenEnd)="add($event)"/>\n' +
    '    <mat-autocomplete #auto="matAutocomplete" (optionSelected)="selected($event)">\n' +
    '      @for (fruit of filteredFruits | async; track fruit) {\n' +
    '        <mat-option [value]="fruit">{{fruit}}</mat-option>\n' +
    '      }\n' +
    '    </mat-autocomplete>\n' +
    '  </mat-form-field>\n' +
    '</form>\n';

  code7 = '\n' +
    "import {Component} from '@angular/core';\n" +
    "import {MatChipsModule} from '@angular/material/chips';\n" +
    "\n" +
    "@Component({\n" +
    "  selector: 'chips-avatar-example',\n" +
    "  templateUrl: 'chips-avatar-example.html',\n" +
    "  styleUrl: 'chips-avatar-example.css',\n" +
    "  standalone: true,\n" +
    "  imports: [MatChipsModule],\n" +
    "})\n" +
    "export class ChipsAvatarExample {}\n";

  code8 = '\n' +
    '<mat-chip-set aria-label="Dog selection">\n' +
    '  <mat-chip>\n' +
    '    <img matChipAvatar src="https://material.angular.io/assets/img/examples/shiba1.jpg" alt="Photo of a Shiba Inu"/>\n' +
    '    Dog one\n' +
    '  </mat-chip>\n' +
    '  <mat-chip color="primary">\n' +
    '    <img matChipAvatar src="https://material.angular.io/assets/img/examples/shiba1.jpg" alt="Photo of a Shiba Inu"/>\n' +
    '    Dog two\n' +
    '  </mat-chip>\n' +
    '  <mat-chip color="accent">\n' +
    '    <img matChipAvatar src="https://material.angular.io/assets/img/examples/shiba1.jpg" alt="Photo of a Shiba Inu"/>\n' +
    '    Dog three\n' +
    '  </mat-chip>\n' +
    '</mat-chip-set>\n';

  code9 = '\n' +
    "import {Component} from '@angular/core';\n" +
    "import {ThemePalette} from '@angular/material/core';\n" +
    "import {MatChipsModule} from '@angular/material/chips';\n" +
    "\n" +
    "export interface ChipColor {\n" +
    "  name: string;\n" +
    "  color: ThemePalette;\n" +
    "}\n" +
    "\n" +
    "@Component({\n" +
    "  selector: 'chips-stacked-example',\n" +
    "  templateUrl: 'chips-stacked-example.html',\n" +
    "  styleUrl: 'chips-stacked-example.css',\n" +
    "  standalone: true,\n" +
    "  imports: [MatChipsModule],\n" +
    "})\n" +
    "export class ChipsStackedExample {\n" +
    "  availableColors: ChipColor[] = [\n" +
    "    {name: 'none', color: undefined},\n" +
    "    {name: 'Primary', color: 'primary'},\n" +
    "    {name: 'Accent', color: 'accent'},\n" +
    "    {name: 'Warn', color: 'warn'},\n" +
    "  ];\n" +
    "}\n";

  code10 = '\n' +
    '<mat-chip-listbox class="mat-mdc-chip-set-stacked" aria-label="Color selection">\n' +
    '  @for (chip of availableColors; track chip) {\n' +
    '    <mat-chip-option selected [color]="chip.color">{{chip.name}}</mat-chip-option>\n' +
    '  }\n' +
    '</mat-chip-listbox\n';

  // input chips
  addOnBlur = true;
  readonly separatorKeysCodes1 = [ENTER, COMMA] as const;
  fruits1: Fruit[] = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];

  announcer1 = inject(LiveAnnouncer);

  add1(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.fruits1.push({ name: value });
    }

    event.chipInput!.clear();
  }

  remove1(fruit: Fruit): void {
    const index = this.fruits1.indexOf(fruit);

    if (index >= 0) {
      this.fruits1.splice(index, 1);

      this.announcer1.announce(`Removed ${fruit}`);
    }
  }

  edit1(fruit: Fruit, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.remove1(fruit);
      return;
    }
    const index = this.fruits1.indexOf(fruit);
    if (index >= 0) {
      this.fruits1[index].name = value;
    }
  }

  // autocomplete
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl2 = new FormControl('');
  filteredFruits2: Observable<string[]>;
  fruits2: string[] = ['Lemon'];
  allFruits2: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput!: ElementRef<HTMLInputElement>;

  announcer2 = inject(LiveAnnouncer);

  constructor() {
    this.filteredFruits2 = this.fruitCtrl2.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter2(fruit) : this.allFruits2.slice())),
    );
  }

  add2(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits2.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl2.setValue(null);
  }

  remove2(fruit: string): void {
    const index = this.fruits2.indexOf(fruit);

    if (index >= 0) {
      this.fruits2.splice(index, 1);

      this.announcer2.announce(`Removed ${fruit}`);
    }
  }

  selected2(event: MatAutocompleteSelectedEvent): void {
    this.fruits2.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl2.setValue(null);
  }

  private _filter2(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits2.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

  availableColors: ChipColor[] = [
    { name: 'none', color: undefined },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' },
  ];

}
