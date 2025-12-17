import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
  standalone: true,
  imports: [MatCard, ReactiveFormsModule, FormsModule, NgFor],
})
export class ReactiveFormComponent implements OnInit {

  code1 = `import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css'],
  imports: [ReactiveFormsModule],
})
export class NameEditorComponent {
  name = new FormControl('');
}`;

  code2 = `<label for="name">Name: </label>
<input id="name" type="text" [formControl]="name">`;

  code3 = `updateName() {
  this.name.setValue('Nancy');
}`;

  code4 = `<button type="button" (click)="updateName()">Update Name</button>`;

  code5 = `import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css'],
})
export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
}`;

  code6 = `<form [formGroup]="profileForm" (ngSubmit)="onSubmit()">

  <label for="first-name">First Name: </label>
  <input id="first-name" type="text" formControlName="firstName">

  <label for="last-name">Last Name: </label>
  <input id="last-name" type="text" formControlName="lastName">

  <button type="submit" class="btn btn-info fs-4" [disabled]="!profileForm.valid">Submit</button>

</form>`;

  code7 = `import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css'],
})
export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });
}`;

  code8 = `<div formGroupName="address">
  <h2>Address</h2>

  <label for="street">Street: </label>
  <input id="street" type="text" formControlName="street">

  <label for="city">City: </label>
  <input id="city" type="text" formControlName="city">

  <label for="state">State: </label>
  <input id="state" type="text" formControlName="state">

  <label for="zip">Zip Code: </label>
  <input id="zip" type="text" formControlName="zip">
</div>`;

  code9 = `profileForm !: FormGroup;

constructor(
  private fb: FormBuilder
) { }

ngOnInit(): void {
  this.profileForm = this.fb.group({
    firstName: [null, [Validators.required]],
    address: this.fb.group({
      street: [null, [Validators.required]]
    })
  })
}

updateProfile() {
  this.profileForm.patchValue({
    firstName: 'Nancy',
    address: {
      street: '123 Drew Street',
    },
  });
}`;

  code10 = `<form [formGroup]="profileForm" class="w-75">
    <label for="street">FristName: </label><br>
    <input class="form-control shadow-none border-black" type="text" formControlName="firstName">
    <div formGroupName="address" class="mt-3">
        <h2 class="text-secondary m-0">Adresse</h2>
        <label for="street">Street: </label><br>
        <input class="form-control shadow-none border-black" id="street" type="text" formControlName="street">
    </div>
    <button class="btn fs-5 btn-light mt-2" type="button" (click)="updateProfile()">Update Profile</button>
</form>`;

  code11 = `import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css'],
})
export class ProfileEditorComponent {
  profileForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
  });

  constructor(private formBuilder: FormBuilder) {}
}`;

  code12 = `profileForm = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  address: new FormGroup({
    street: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl(''),
  }),
});`;

  code13 = `profileForm = this.formBuilder.group({
  firstName: [''],
  lastName: [''],
  address: this.formBuilder.group({
    street: [''],
    city: [''],
    state: [''],
    zip: [''],
  }),
});`;

  code14 = `profileForm = this.formBuilder.group({
  firstName: ['', Validators.required],
  lastName: [''],
  address: this.formBuilder.group({
    street: [''],
    city: [''],
    state: [''],
    zip: [''],
  }),
});`;

  code15 = `profileForm !: FormGroup;

constructor(
  private fb: FormBuilder
) { }

ngOnInit(): void {
  this.profileForm = this.fb.group({
    firstName: [null, [Validators.required]],
    address: this.fb.group({
      street: [null]
    })
  })
}

submit() {
  this.formValue = JSON.stringify(this.profileForm.value);
}`;

  code16 = `<form [formGroup]="profileForm" class="w-75">
    <label for="street">FistName: </label><br>
    <input class="form-control shadow-none border-black" type="text" formControlName="firstName">
    <div formGroupName="address" class="mt-3">
        <h2 class="text-secondary m-0">Adresse</h2>
        <label for="street">Street: </label><br>
        <input class="form-control shadow-none border-black" id="street" type="text" formControlName="street">
    </div>
    <p class="mt-2">Form Status: {{ profileForm.status }}</p>
    <p>{{formValue}}</p>
    <button class="btn fs-5 btn-light mt-2" type="button" (click)="submit()">Submit</button>
</form>`;

  code17 = `<p>Form Status: {{ profileForm.status }}</p>`;

  code18 = `import { Validators } from '@angular/forms';`;

  code19 = `profileForm !: FormGroup;
formValue: any;

get aliases() {
  return this.profileForm.get('aliases') as FormArray;
}

constructor(
  private fb : FormBuilder
){}

ngOnInit(): void {
  this.profileForm = this.fb.group({
    firstName: ['', [Validators.required]],
    address: this.fb.group({
      street: ['']
    }),
    aliases: this.fb.array([this.fb.control('')]),
  })
}

addAlias() {
  this.aliases.push(this.fb.control(''));
}

submit() {
  this.formValue = JSON.stringify(this.profileForm.value);
}`;

  code20 = `<form [formGroup]="profileForm" class="w-75">
    <label for="street">FistName: </label><br>
    <input class="form-control shadow-none border-black" type="text" formControlName="firstName">
    <div formGroupName="address" class="mt-3">
        <h2 class="text-secondary m-0">Adresse</h2>
        <label for="street">Street: </label><br>
        <input class="form-control shadow-none border-black" id="street" type="text" formControlName="street">
    </div>
    <div formArrayName="aliases">
        <h2>Aliases</h2>
        <button type="button" (click)="addAlias()">+ Add another alias</button>

        <div *ngFor="let alias of aliases.controls; let i=index" class="mt-2">
            <!-- The repeated alias template -->
            <label for="alias-{{ i }}">Alias:</label>
            <input id="alias-{{ i }}" type="text" [formControlName]="i">
        </div>

        <p class="mt-2">Form Status: {{ profileForm.status }}</p>
        <p>{{formValue}}</p>
        <button class="btn fs-5 btn-light mt-2" type="button" (click)="submit()">Submit</button>
    </div>
</form>`;

  profileForm !: FormGroup;
  profileForm1 !: FormGroup;
  profileForm2 !: FormGroup;
  formValue: any;
  formValue1: any;


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: [''],
      address: this.fb.group({
        street: ['']
      })
    })

    this.profileForm1 = this.fb.group({
      firstName: ['', [Validators.required]],
      address: this.fb.group({
        street: ['']
      })
    })

    this.profileForm2 = this.fb.group({
      firstName: ['', [Validators.required]],
      address: this.fb.group({
        street: ['']
      }),
      aliases: this.fb.array([this.fb.control('')]),
    })
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }

  submit() {
    this.formValue = JSON.stringify(this.profileForm1.value);
  }

  submit1() {
    this.formValue1 = JSON.stringify(this.profileForm2.value);
  }

  get aliases() {
    return this.profileForm2?.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}

