import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../input/input.component';

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

interface Animal {
  name: string;
  sound: string;
}

interface Pokemon {
  value: string;
  viewValue: string;
}

interface PokemonGroup {
  disabled?: boolean;
  name: string;
  pokemon: Pokemon[];
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  standalone :true,
  imports :[
    MaterialModule,MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule,ReactiveFormsModule
  ]
})
export class SelectComponent {
code1 = `
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

interface Food {
  value: string;
  viewValue: string;
}

/**
 * @title Basic select
 */
@Component({
  selector: 'select-overview-example',
  templateUrl: 'select-overview-example.html',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
})
export class SelectOverviewExample {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
}
`

code2 = `
<h4>Basic mat-select</h4>
<mat-form-field>
  <mat-label>Favorite food</mat-label>
  <mat-select>
    @for (food of foods; track food) {
      <mat-option [value]="food.value">{{food.viewValue}}</mat-option>
    }
  </mat-select>
</mat-form-field>

<h4>Basic native select</h4>
<mat-form-field>
  <mat-label>Cars</mat-label>
  <select matNativeControl required>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </select>
</mat-form-field>
`

code3 = `
import {Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

/** @title Select with 2-way value binding */
@Component({
  selector: 'select-value-binding-example',
  templateUrl: 'select-value-binding-example.html',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule],
})
export class SelectValueBindingExample {
  selected = 'option2';
}
`

code4 = `
<mat-form-field>
  <mat-label>Select an option</mat-label>
  <mat-select [(value)]="selected">
    <mat-option>None</mat-option>
    <mat-option value="option1">Option 1</mat-option>
    <mat-option value="option2">Option 2</mat-option>
    <mat-option value="option3">Option 3</mat-option>
  </mat-select>
</mat-form-field>

<p>You selected: {{selected}}</p>
`

code5 = `
import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

/**
 * @title Select in a form
 */
@Component({
  selector: 'select-form-example',
  templateUrl: 'select-form-example.html',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule],
})
export class SelectFormExample {
  selectedValue: string;
  selectedCar: string;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'},
  ];
}
`

code6 = `
<form>
  <h4>mat-select</h4>
  <mat-form-field>
    <mat-label>Favorite food</mat-label>
    <mat-select [(ngModel)]="selectedValue" name="food">
      @for (food of foods; track food) {
        <mat-option [value]="food.value">{{food.viewValue}}</mat-option>
      }
    </mat-select>
  </mat-form-field>
  <p> Selected food: {{selectedValue}} </p>
  <h4>native html select</h4>
  <mat-form-field>
    <mat-label>Favorite car</mat-label>
    <select matNativeControl [(ngModel)]="selectedCar" name="car">
      <option value="" selected></option>
      @for (car of cars; track car) {
        <option [value]="car.value">{{car.viewValue}}</option>
      }
    </select>
  </mat-form-field>
  <p> Selected car: {{selectedCar}} </p>
</form>
`

code7 = `
import {Component} from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

interface Animal {
  name: string;
  sound: string;
}

/** @title Select with form field features */
@Component({
  selector: 'select-hint-error-example',
  templateUrl: 'select-hint-error-example.html',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatInputModule],
})
export class SelectHintErrorExample {
  animalControl = new FormControl<Animal | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];
}
`

code8 = `
<h4>mat select</h4>
<mat-form-field>
  <mat-label>Favorite animal</mat-label>
  <mat-select [formControl]="animalControl" required>
    <mat-option>--</mat-option>
    @for (animal of animals; track animal) {
      <mat-option [value]="animal">{{animal.name}}</mat-option>
    }
  </mat-select>
  @if (animalControl.hasError('required')) {
    <mat-error>Please choose an animal</mat-error>
  }
  <mat-hint>{{animalControl.value?.sound}}</mat-hint>
</mat-form-field>

<h4>native html select</h4>
<mat-form-field>
  <mat-label>Select your car (required)</mat-label>
  <select matNativeControl required [formControl]="selectFormControl">
    <option label="--select something --"></option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </select>
  @if (selectFormControl.hasError('required')) {
    <mat-error>This field is required</mat-error>
  }
  <mat-hint>You can pick up your favorite car here</mat-hint>
</mat-form-field>
`

code9 = `
import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';

/** @title Disabled select */
@Component({
  selector: 'select-disabled-example',
  templateUrl: 'select-disabled-example.html',
  standalone: true,
  imports: [
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
})
export class SelectDisabledExample {
  disableSelect = new FormControl(false);
}
`

code10 = `
<p>
  <mat-checkbox [formControl]="disableSelect">Disable select</mat-checkbox>
</p>

<h4>mat-select</h4>
<mat-form-field>
  <mat-label>Choose an option</mat-label>
  <mat-select [disabled]="disableSelect.value">
    <mat-option value="option1">Option 1</mat-option>
    <mat-option value="option2" disabled>Option 2 (disabled)</mat-option>
    <mat-option value="option3">Option 3</mat-option>
  </mat-select>
</mat-form-field>

<h4>native html select</h4>
<mat-form-field>
  <mat-label>Choose an option</mat-label>
  <select matNativeControl [disabled]="disableSelect.value">
    <option value="" selected></option>
    <option value="volvo">Volvo</option>
    <option value="saab" disabled>Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </select>
</mat-form-field>
`

code11 = `
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

/** @title Select with reset option */
@Component({
  selector: 'select-reset-example',
  templateUrl: 'select-reset-example.html',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
})
export class SelectResetExample {
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];
}
`

code12 = `
<h4>mat-select</h4>
<mat-form-field>
  <mat-label>State</mat-label>
  <mat-select>
    <mat-option>None</mat-option>
    @for (state of states; track state) {
      <mat-option [value]="state">{{state}}</mat-option>
    }
  </mat-select>
</mat-form-field>

<h4>native html select</h4>
<mat-form-field>
  <mat-label>Select your car</mat-label>
  <select matNativeControl id="mySelectId">
    <option value="" disabled selected></option>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </select>
</mat-form-field>
`

code13 = `
import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

interface Pokemon {
  value: string;
  viewValue: string;
}

interface PokemonGroup {
  disabled?: boolean;
  name: string;
  pokemon: Pokemon[];
}

/** @title Select with option groups */
@Component({
  selector: 'select-optgroup-example',
  templateUrl: 'select-optgroup-example.html',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatInputModule],
})
export class SelectOptgroupExample {
  pokemonControl = new FormControl('');
  pokemonGroups: PokemonGroup[] = [
    {
      name: 'Grass',
      pokemon: [
        {value: 'bulbasaur-0', viewValue: 'Bulbasaur'},
        {value: 'oddish-1', viewValue: 'Oddish'},
        {value: 'bellsprout-2', viewValue: 'Bellsprout'},
      ],
    },
    {
      name: 'Water',
      pokemon: [
        {value: 'squirtle-3', viewValue: 'Squirtle'},
        {value: 'psyduck-4', viewValue: 'Psyduck'},
        {value: 'horsea-5', viewValue: 'Horsea'},
      ],
    },
    {
      name: 'Fire',
      disabled: true,
      pokemon: [
        {value: 'charmander-6', viewValue: 'Charmander'},
        {value: 'vulpix-7', viewValue: 'Vulpix'},
        {value: 'flareon-8', viewValue: 'Flareon'},
      ],
    },
    {
      name: 'Psychic',
      pokemon: [
        {value: 'mew-9', viewValue: 'Mew'},
        {value: 'mewtwo-10', viewValue: 'Mewtwo'},
      ],
    },
  ];
}
`

code14 = `
<h4>mat-select</h4>
<mat-form-field>
  <mat-label>Pokemon</mat-label>
  <mat-select [formControl]="pokemonControl">
    <mat-option>-- None --</mat-option>
    @for (group of pokemonGroups; track group) {
      <mat-optgroup [label]="group.name"
                    [disabled]="group.disabled">
        @for (pokemon of group.pokemon; track pokemon) {
          <mat-option [value]="pokemon.value">{{pokemon.viewValue}}</mat-option>
        }
      </mat-optgroup>
    }
  </mat-select>
</mat-form-field>

<h4>native html select</h4>
<mat-form-field>
  <mat-label>Cars</mat-label>
  <select matNativeControl>
    <optgroup label="Swedish Cars">
      <option value="volvo">volvo</option>
      <option value="saab">Saab</option>
    </optgroup>
    <optgroup label="German Cars">
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </optgroup>
  </select>
</mat-form-field>

`

code15 = `
import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

/** @title Select with multiple selection */
@Component({
  selector: 'select-multiple-example',
  templateUrl: 'select-multiple-example.html',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
})
export class SelectMultipleExample {
  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}

`

code16 = `
<mat-form-field>
  <mat-label>Toppings</mat-label>
  <mat-select [formControl]="toppings" multiple>
    @for (topping of toppingList; track topping) {
      <mat-option [value]="topping">{{topping}}</mat-option>
    }
  </mat-select>
</mat-form-field>
`

code17 = `
import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

/** @title Select with custom trigger text */
@Component({
  selector: 'select-custom-trigger-example',
  templateUrl: 'select-custom-trigger-example.html',
  styleUrl: 'select-custom-trigger-example.css',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
})
export class SelectCustomTriggerExample {
  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}

`

code18 = `
<mat-form-field>
  <mat-label>Toppings</mat-label>
  <mat-select [formControl]="toppings" multiple>
    <mat-select-trigger>
      {{toppings.value?.[0] || ''}}
      @if ((toppings.value?.length || 0) > 1) {
        <span class="example-additional-selection">
          (+{{(toppings.value?.length || 0) - 1}} {{toppings.value?.length === 2 ? 'other' : 'others'}})
        </span>
      }
    </mat-select-trigger>
    @for (topping of toppingList; track topping) {
  <mat-option [value]="topping">{{topping}}</mat-option>
}
  </mat-select>
</mat-form-field>

`

code19 = `
import {Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

/** @title Select with no option ripple */
@Component({
  selector: 'select-no-ripple-example',
  templateUrl: 'select-no-ripple-example.html',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule],
})
export class SelectNoRippleExample {}

`

code20= `
<mat-form-field>
  <mat-label>Select an option</mat-label>
  <mat-select disableRipple>
    <mat-option value="1">Option 1</mat-option>
    <mat-option value="2">Option 2</mat-option>
    <mat-option value="3">Option 3</mat-option>
  </mat-select>
</mat-form-field>
`

code21= `
import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

/**
 * @title Select with custom panel styling
 */
@Component({
  selector: 'select-panel-class-example',
  templateUrl: 'select-panel-class-example.html',
  styleUrl: 'select-panel-class-example.css',
  // Encapsulation has to be disabled in order for the
  // component style to apply to the select panel.
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
})
export class SelectPanelClassExample {
  panelColor = new FormControl('red');
}

`

code22= `
<mat-form-field>
  <mat-label>Panel color</mat-label>
  <mat-select [formControl]="panelColor"
              panelClass="example-panel-{{panelColor.value}}">
    <mat-option value="red">Red</mat-option>
    <mat-option value="green">Green</mat-option>
    <mat-option value="blue">Blue</mat-option>
  </mat-select>
</mat-form-field>
`

code23 = `
import {Component} from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

/** @title Select with a custom ErrorStateMatcher */
@Component({
  selector: 'select-error-state-matcher-example',
  templateUrl: 'select-error-state-matcher-example.html',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatInputModule],
})
export class SelectErrorStateMatcherExample {
  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  nativeSelectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  matcher = new MyErrorStateMatcher();
}

`

code24 = `
<h4>mat-select</h4>
<mat-form-field>
  <mat-label>Choose one</mat-label>
  <mat-select [formControl]="selected" [errorStateMatcher]="matcher">
    <mat-option>Clear</mat-option>
    <mat-option value="valid">Valid option</mat-option>
    <mat-option value="invalid">Invalid option</mat-option>
  </mat-select>
  <mat-hint>Errors appear instantly!</mat-hint>
  @if (selected.hasError('required')) {
    <mat-error>You must make a selection</mat-error>
  }
  @if (selected.hasError('pattern') && !selected.hasError('required')) {
    <mat-error>Your selection is invalid</mat-error>
  }
</mat-form-field>

<h4>native html select</h4>
<mat-form-field class="demo-full-width">
  <mat-label>Choose one</mat-label>
  <select matNativeControl [formControl]="nativeSelectFormControl" [errorStateMatcher]="matcher">
    <option value=""></option>
    <option value="valid" selected>Valid option</option>
    <option value="invalid">Invalid option</option>
  </select>
  @if (nativeSelectFormControl.hasError('required')) {
    <mat-error>You must make a selection</mat-error>
  }
  @if (nativeSelectFormControl.hasError('pattern') && !nativeSelectFormControl.hasError('required')) {
    <mat-error>Your selection is invalid</mat-error>
  }
</mat-form-field>
`

c1 = `
@NgModule({
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
`

c2 = `
@if (isMultiple) {
  <mat-select multiple>
    ...
  </mat-select>
} @else {
  <mat-select>
    ...
  </mat-select>
}
`

// Basic select
  foods1: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  // Select with 2-way value binding
  selected3 = 'option2';

  // Select in a form
  selectedValue5?: string;
  selectedCar5?: string;

  foods5: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  cars5: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'},
  ];

  // Select with form field features
  animalControl7 = new FormControl<Animal | null>(null, Validators.required);
  selectFormControl7 = new FormControl('', Validators.required);
  animals7: Animal[] = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];

  // Disable Selected
  disableSelect9 = new FormControl(false);

  // Select with reset option
  states11: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];

  // Select with option groups
  pokemonControl = new FormControl('');
  pokemonGroups: PokemonGroup[] = [
    {
      name: 'Grass',
      pokemon: [
        {value: 'bulbasaur-0', viewValue: 'Bulbasaur'},
        {value: 'oddish-1', viewValue: 'Oddish'},
        {value: 'bellsprout-2', viewValue: 'Bellsprout'},
      ],
    },
    {
      name: 'Water',
      pokemon: [
        {value: 'squirtle-3', viewValue: 'Squirtle'},
        {value: 'psyduck-4', viewValue: 'Psyduck'},
        {value: 'horsea-5', viewValue: 'Horsea'},
      ],
    },
    {
      name: 'Fire',
      disabled: true,
      pokemon: [
        {value: 'charmander-6', viewValue: 'Charmander'},
        {value: 'vulpix-7', viewValue: 'Vulpix'},
        {value: 'flareon-8', viewValue: 'Flareon'},
      ],
    },
    {
      name: 'Psychic',
      pokemon: [
        {value: 'mew-9', viewValue: 'Mew'},
        {value: 'mewtwo-10', viewValue: 'Mewtwo'},
      ],
    },
  ];
  
  // Select with multiple selection
  toppings15 = new FormControl('');
  toppingList15: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  // Select with custom trigger text
  toppings17 = new FormControl('');
  toppingList17: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  // Select with custom panel styling
  panelColor = new FormControl('red');

  // Select with a custom ErrorStateMatcher
  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  nativeSelectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  matcher = new MyErrorStateMatcher();
}
