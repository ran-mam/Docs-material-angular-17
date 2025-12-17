import { Component, Injectable, OnInit } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable, map } from 'rxjs';
import { StepperOrientation } from '@angular/cdk/stepper';
import { AsyncPipe } from '@angular/common';
import { MatStepperIntl } from '@angular/material/stepper';
import { Router } from '@angular/router';

@Injectable()
export class StepperIntl extends MatStepperIntl {
  // the default optional label text, if unspecified is "Optional"
  override optionalLabel = 'Optional Label';
}

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
  standalone: true,
  imports: [
    MaterialModule, ReactiveFormsModule, AsyncPipe, FormsModule
  ]
})
export class StepperComponent implements OnInit {
  c1 = `
  <mat-step [stepControl]="secondFormGroup" label="Fill out your address">
  `

  c2 = `
  <mat-step [stepControl]="secondFormGroup" label="Fill out your address">
  `

  c3 = `
  <mat-stepper labelPosition="bottom" #stepper>
  `

  c4 = `
<button mat-button matStepperPrevious>Back</button>
<button mat-button matStepperNext>Next</button>
  `

  c5 = `
<form [formGroup]="formGroup">
  <mat-stepper formArrayName="formArray" linear>
    <mat-step formGroupName="0" [stepControl]="formArray.get([0])">
      ...
      <div>
        <button mat-button matStepperNext type="button">Next</button>
      </div>
    </mat-step>
    <mat-step formGroupName="1" [stepControl]="formArray.get([1])">
      ...
      <div>
        <button mat-button matStepperPrevious type="button">Back</button>
        <button mat-button matStepperNext type="button">Next</button>
      </div>
    </mat-step>
    ...
  </mat-stepper>
</form>
  `

  c6 = `
<mat-stepper orientation="vertical" linear>
  <mat-step [stepControl]="formGroup1">
    <form [formGroup]="formGroup1">
      ...
    </form>
  </mat-step>
  <mat-step [stepControl]="formGroup2">
    <form [formGroup]="formGroup2">
      ...
    </form>
  </mat-step>
</mat-stepper>
  `

  c7 = `
  <mat-step [stepControl]="secondFormGroup" [optional]="isOptional">
  `

  c8 = `
  <mat-step [stepControl]="firstFormGroup" [editable]="isEditable">
  `

  c9 = `
<ng-template matStepperIcon="phone">
  <mat-icon>call_end</mat-icon>
</ng-template>
<ng-template matStepperIcon="chat">
  <mat-icon>forum</mat-icon>
</ng-template>
</mat-stepper>
  `

  c10 = `
<mat-stepper>
  <mat-step label="Step 1" state="phone">
    <p>Put down your phones.</p>
    <div>
      <button mat-button matStepperNext>Next</button>
    </div>
  </mat-step>
  <mat-step label="Step 2" state="chat">
    <p>Socialize with each other.</p>
    <div>
      <button mat-button matStepperPrevious>Back</button>
      <button mat-button matStepperNext>Next</button>
    </div>
  </mat-step>
  <mat-step label="Step 3">
    <p>You're welcome.</p>
  </mat-step>

  <!-- Icon overrides. -->
  <ng-template matStepperIcon="phone">
    <mat-icon>call_end</mat-icon>
  </ng-template>
  <ng-template matStepperIcon="chat">
    <mat-icon>forum</mat-icon>
  </ng-template>
</mat-stepper>
  `

  c11 = `
  @NgModule({
    providers: [
      {
        provide: STEPPER_GLOBAL_OPTIONS,
        useValue: { displayDefaultIndicatorType: false }
      }
    ]
  })
  `

  c12 = `
  @NgModule({
    providers: [
      {
        provide: STEPPER_GLOBAL_OPTIONS,
        useValue: { showError: true }
      }
    ]
  })
  `

  c13 = `
  @NgModule({
    imports: [MatStepperModule],
    providers: [
      {provide: MatStepperIntl, useClass: MyIntl},
    ],
  })
  export class MyApp {}
  `

  code1 = `
import {Component} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';

/**
 * @title Stepper overview
 */
@Component({
  selector: 'stepper-overview-example',
  templateUrl: 'stepper-overview-example.html',
  styleUrl: 'stepper-overview-example.css',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class StepperOverviewExample {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}
}
  `

  code2 = `
<button mat-raised-button (click)="isLinear = !isLinear" id="toggle-linear">
  {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}
</button>
<mat-stepper [linear]="isLinear" #stepper>
  <mat-step [stepControl]="firstFormGroup">
    <form [formGroup]="firstFormGroup">
      <ng-template matStepLabel>Fill out your name</ng-template>
      <mat-form-field>
        <mat-label>Name</mat-label>
        <input matInput placeholder="Last name, First name" formControlName="firstCtrl" required>
      </mat-form-field>
      <div>
        <button mat-button matStepperNext>Next</button>
      </div>
    </form>
  </mat-step>
  <mat-step [stepControl]="secondFormGroup" label="Fill out your address">
    <form [formGroup]="secondFormGroup">
      <mat-form-field>
        <mat-label>Address</mat-label>
        <input matInput formControlName="secondCtrl" placeholder="Ex. 1 Main St, New York, NY"
               required>
      </mat-form-field>
      <div>
        <button mat-button matStepperPrevious>Back</button>
        <button mat-button matStepperNext>Next</button>
      </div>
    </form>
  </mat-step>
  <mat-step>
    <ng-template matStepLabel>Done</ng-template>
    <p>You are now done.</p>
    <div>
      <button mat-button matStepperPrevious>Back</button>
      <button mat-button (click)="stepper.reset()">Reset</button>
    </div>
  </mat-step>
</mat-stepper>
  `

  code3 = `
import {Component} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';

/**
 * @title Stepper vertical
 */
@Component({
  selector: 'stepper-vertical-example',
  templateUrl: 'stepper-vertical-example.html',
  styleUrl: 'stepper-vertical-example.css',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class StepperVerticalExample {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}
}

  `

  code4 = `
<button mat-raised-button (click)="isLinear = !isLinear" id="toggle-linear">
  {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}
</button>
<mat-stepper orientation="vertical" [linear]="isLinear" #stepper>
  <mat-step [stepControl]="firstFormGroup">
    <form [formGroup]="firstFormGroup">
      <ng-template matStepLabel>Fill out your name</ng-template>
      <mat-form-field>
        <mat-label>Name</mat-label>
        <input matInput placeholder="Last name, First name" formControlName="firstCtrl" required>
      </mat-form-field>
      <div>
        <button mat-button matStepperNext>Next</button>
      </div>
    </form>
  </mat-step>
  <mat-step [stepControl]="secondFormGroup">
    <form [formGroup]="secondFormGroup">
      <ng-template matStepLabel>Fill out your address</ng-template>
      <mat-form-field>
        <mat-label>Address</mat-label>
        <input matInput formControlName="secondCtrl" placeholder="Ex. 1 Main St, New York, NY"
               required>
      </mat-form-field>
      <div>
        <button mat-button matStepperPrevious>Back</button>
        <button mat-button matStepperNext>Next</button>
      </div>
    </form>
  </mat-step>
  <mat-step>
    <ng-template matStepLabel>Done</ng-template>
    <p>You are now done.</p>
    <div>
      <button mat-button matStepperPrevious>Back</button>
      <button mat-button (click)="stepper.reset()">Reset</button>
    </div>
  </mat-step>
</mat-stepper>
  `

  code5 = `
import {Component} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';

/**
 * @title Stepper header position
 */
@Component({
  selector: 'stepper-header-position-example',
  templateUrl: 'stepper-header-position-example.html',
  standalone: true,
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class StepperHeaderPositionExample {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}
}
  `

  code6 = `
<mat-stepper headerPosition="bottom" #stepper>
  <mat-step [stepControl]="firstFormGroup">
    <form [formGroup]="firstFormGroup">
      <ng-template matStepLabel>Fill out your name</ng-template>
      <mat-form-field>
        <input matInput placeholder="Last name, First name" formControlName="firstCtrl" required>
      </mat-form-field>
      <div>
        <button mat-button matStepperNext>Next</button>
      </div>
    </form>
  </mat-step>
  <mat-step [stepControl]="secondFormGroup" optional>
    <form [formGroup]="secondFormGroup">
      <ng-template matStepLabel>Fill out your address</ng-template>
      <mat-form-field>
        <input matInput placeholder="Address" formControlName="secondCtrl" required>
      </mat-form-field>
      <div>
        <button mat-button matStepperPrevious>Back</button>
        <button mat-button matStepperNext>Next</button>
      </div>
    </form>
  </mat-step>
  <mat-step>
    <ng-template matStepLabel>Done</ng-template>
    You are now done.
    <div>
      <button mat-button matStepperPrevious>Back</button>
      <button mat-button (click)="stepper.reset()">Reset</button>
    </div>
  </mat-step>
</mat-stepper>
  `

  code7 = `
import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';

/**
 * @title Stepper animations
 */
@Component({
  selector: 'stepper-animations-example',
  templateUrl: 'stepper-animations-example.html',
  styleUrl: 'stepper-animations-example.css',
  standalone: true,
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class StepperAnimationsExample {
  constructor(private _formBuilder: FormBuilder) {}
  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});
}
  `

  code8 = `
<div class="example-input-wrapper">
  <label for="duration">Animation duration:</label>
  <input id="duration" value="2000" type="number" min="0" step="100" #duration>
</div>

<mat-vertical-stepper [linear]="false" #stepper [animationDuration]="duration.value">
  <mat-step [stepControl]="firstFormGroup">
    <form [formGroup]="firstFormGroup">
      <ng-template matStepLabel>Fill out your name</ng-template>
      <mat-form-field>
        <input matInput placeholder="Last name, First name" formControlName="firstCtrl" required>
      </mat-form-field>
      <div>
        <button mat-button matStepperNext>Next</button>
      </div>
    </form>
  </mat-step>
  <mat-step [stepControl]="secondFormGroup">
    <form [formGroup]="secondFormGroup">
      <ng-template matStepLabel>Fill out your address</ng-template>
      <mat-form-field>
        <input matInput placeholder="Address" formControlName="secondCtrl" required>
      </mat-form-field>
      <div>
        <button mat-button matStepperPrevious>Back</button>
        <button mat-button matStepperNext>Next</button>
      </div>
    </form>
  </mat-step>
  <mat-step>
    <ng-template matStepLabel>Done</ng-template>
    You are now done.
    <div>
      <button mat-button matStepperPrevious>Back</button>
      <button mat-button (click)="stepper.reset()">Reset</button>
    </div>
  </mat-step>
</mat-vertical-stepper>
  `

  code9 = `
import {Component} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';

/**
 * @title Stepper with customized states
 */
@Component({
  selector: 'stepper-states-example',
  templateUrl: 'stepper-states-example.html',
  styleUrl: 'stepper-states-example.css',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
  standalone: true,
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class StepperStatesExample {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}
}
  `

  code10 = `
<mat-stepper #stepper>
  <mat-step [stepControl]="firstFormGroup">
    <form [formGroup]="firstFormGroup">
      <ng-template matStepLabel>Fill out your name</ng-template>
      <mat-form-field>
        <mat-label>Name</mat-label>
        <input matInput placeholder="Last name, First name" formControlName="firstCtrl" required>
      </mat-form-field>
      <div>
        <button mat-button matStepperNext>Next</button>
      </div>
    </form>
  </mat-step>
  <mat-step [stepControl]="secondFormGroup">
    <form [formGroup]="secondFormGroup">
      <ng-template matStepLabel>Fill out your address</ng-template>
      <mat-form-field>
        <mat-label>Address</mat-label>
        <input matInput formControlName="secondCtrl" placeholder="Ex. 1 Main St, New York, NY"
               required>
      </mat-form-field>
      <div>
        <button mat-button matStepperPrevious>Back</button>
        <button mat-button matStepperNext>Next</button>
      </div>
    </form>
  </mat-step>
  <mat-step>
    <ng-template matStepLabel>Done</ng-template>
    <p>You are now done.</p>
    <div>
      <button mat-button matStepperPrevious>Back</button>
      <button mat-button (click)="stepper.reset()">Reset</button>
    </div>
  </mat-step>
</mat-stepper>

<mat-stepper>
  <mat-step label="Step 1" state="phone">
    <p>Put down your phones.</p>
    <div>
      <button mat-button matStepperNext>Next</button>
    </div>
  </mat-step>
  <mat-step label="Step 2" state="chat">
    <p>Socialize with each other.</p>
    <div>
      <button mat-button matStepperPrevious>Back</button>
      <button mat-button matStepperNext>Next</button>
    </div>
  </mat-step>
  <mat-step label="Step 3">
    <p>You're welcome.</p>
  </mat-step>

  <!-- Icon overrides. -->
  <ng-template matStepperIcon="phone">
    <mat-icon>call_end</mat-icon>
  </ng-template>
  <ng-template matStepperIcon="chat">
    <mat-icon>forum</mat-icon>
  </ng-template>
</mat-stepper>
  `

  code11 = `
import {Component} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';

/**
 * @title Stepper that displays errors in the steps
 */
@Component({
  selector: 'stepper-errors-example',
  templateUrl: 'stepper-errors-example.html',
  styleUrl: 'stepper-errors-example.css',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
  standalone: true,
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class StepperErrorsExample {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}
}
  `

  code12 = `
<mat-stepper #stepper>
  <mat-step [stepControl]="firstFormGroup" errorMessage="Name is required.">
    <form [formGroup]="firstFormGroup">
      <ng-template matStepLabel>Fill out your name</ng-template>
      <mat-form-field>
        <mat-label>Name</mat-label>
        <input matInput placeholder="Last name, First name" formControlName="firstCtrl" required>
      </mat-form-field>
      <div>
        <p>Go to a different step to see the error state</p>
        <button mat-button matStepperNext>Next</button>
      </div>
    </form>
  </mat-step>
  <mat-step [stepControl]="secondFormGroup" errorMessage="Address is required.">
    <form [formGroup]="secondFormGroup">
      <ng-template matStepLabel>Fill out your address</ng-template>
      <mat-form-field>
        <mat-label>Address</mat-label>
        <input matInput placeholder="Ex. 1 Main St, New York, NY" formControlName="secondCtrl"
               required>
      </mat-form-field>
      <div>
        <p>Go to a different step to see the error state</p>
        <button mat-button matStepperPrevious>Back</button>
        <button mat-button matStepperNext>Next</button>
      </div>
    </form>
  </mat-step>
  <mat-step>
    <ng-template matStepLabel>Done</ng-template>
    <p>You are now done.</p>
    <div>
      <button mat-button matStepperPrevious>Back</button>
      <button mat-button (click)="stepper.reset()">Reset</button>
    </div>
  </mat-step>
</mat-stepper>
  `

  code13 = `
import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';

/**
 * @title Stepper lazy content rendering
 */
@Component({
  selector: 'stepper-lazy-content-example',
  templateUrl: 'stepper-lazy-content-example.html',
  standalone: true,
  imports: [MatStepperModule, MatButtonModule],
})
export class StepperLazyContentExample {}
  `

  code14 = `
<mat-stepper orientation="vertical">
  <mat-step>
    <ng-template matStepLabel>Step 1</ng-template>
    <ng-template matStepContent>
      <p>This content was rendered lazily</p>
      <button mat-button matStepperNext>Next</button>
    </ng-template>
  </mat-step>
  <mat-step>
    <ng-template matStepLabel>Step 2</ng-template>
    <ng-template matStepContent>
      <p>This content was also rendered lazily</p>
      <button mat-button matStepperPrevious>Back</button>
      <button mat-button matStepperNext>Next</button>
    </ng-template>
  </mat-step>
  <mat-step>
    <ng-template matStepLabel>Step 3</ng-template>
    <p>This content was rendered eagerly</p>
    <button mat-button matStepperPrevious>Back</button>
  </mat-step>
</mat-stepper>
  `

  code15 = `
import {Component} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation, MatStepperModule} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AsyncPipe} from '@angular/common';

/**
 * @title Stepper responsive
 */
@Component({
  selector: 'stepper-responsive-example',
  templateUrl: 'stepper-responsive-example.html',
  styleUrl: 'stepper-responsive-example.css',
  standalone: true,
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AsyncPipe,
  ],
})
export class StepperResponsiveExample {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver,
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }
}
  `

  code16 = `
  @switch (stepperOrientation | async) {
    @case ('horizontal') {
      <div>Make your screen smaller to see a vertical stepper</div>
    }
    @case ('vertical') {
      <div>Make your screen larger to see a horizontal stepper</div>
    }
  }
  
  <mat-stepper
    class="example-stepper"
    [orientation]="(stepperOrientation | async)!">
    <mat-step [stepControl]="firstFormGroup" label="Fill out your name">
      <form [formGroup]="firstFormGroup">
        <mat-form-field>
          <mat-label>Name</mat-label>
          <input matInput placeholder="Last name, First name" formControlName="firstCtrl" required>
        </mat-form-field>
        <div>
          <button mat-button matStepperNext>Next</button>
        </div>
      </form>
    </mat-step>
    <mat-step [stepControl]="secondFormGroup" label="Fill out your address">
      <form [formGroup]="secondFormGroup">
        <mat-form-field>
          <mat-label>Address</mat-label>
          <input matInput formControlName="secondCtrl" placeholder="Ex. 1 Main St, New York, NY"
                 required>
        </mat-form-field>
        <div>
          <button mat-button matStepperPrevious>Back</button>
          <button mat-button matStepperNext>Next</button>
        </div>
      </form>
    </mat-step>
    <mat-step [stepControl]="thirdFormGroup" label="Fill out your phone number">
      <form [formGroup]="thirdFormGroup">
        <mat-form-field>
          <mat-label>Phone number</mat-label>
          <input matInput formControlName="thirdCtrl" placeholder="Ex. 12345678" required>
        </mat-form-field>
        <div>
          <button mat-button matStepperPrevious>Back</button>
          <button mat-button matStepperNext>Next</button>
        </div>
      </form>
    </mat-step>
    <mat-step>
      <ng-template matStepLabel>Done</ng-template>
      <p>You are now done.</p>
      <div>
        <button mat-button matStepperPrevious>Back</button>
      </div>
    </mat-step>
  </mat-stepper>
  `

  code17 = `
import {Component, Injectable} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatStepperIntl, MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';

@Injectable()
export class StepperIntl extends MatStepperIntl {
  // the default optional label text, if unspecified is "Optional"
  override optionalLabel = 'Optional Label';
}

/**
 * @title Stepper that uses the MatStepperIntl service
 */
@Component({
  selector: 'stepper-intl-example',
  templateUrl: 'stepper-intl-example.html',
  styleUrl: 'stepper-intl-example.css',
  providers: [{provide: MatStepperIntl, useClass: StepperIntl}],
  standalone: true,
  imports: [
    MatRadioModule,
    FormsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class StepperIntlExample {
  optionalLabelText: string;
  optionalLabelTextChoices: string[] = ['Option 1', 'Option 2', 'Option 3'];
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(
    private _formBuilder: FormBuilder,
    private _matStepperIntl: MatStepperIntl,
  ) {}

  updateOptionalLabel() {
    this._matStepperIntl.optionalLabel = this.optionalLabelText;
    // Required for the optional label text to be updated
    // Notifies the MatStepperIntl service that a change has been made
    this._matStepperIntl.changes.next();
  }
}

  `

  code18 = `
<label for="demo-optional-label-group">Pick the text for the optional label</label>
<mat-radio-group
  id="demo-optional-label-group"
  class="demo-radio-group"
  [(ngModel)]="optionalLabelText"
  (ngModelChange)="updateOptionalLabel()">
  @for (optionalLabelTextChoice of optionalLabelTextChoices; track optionalLabelTextChoice) {
    <mat-radio-button
      class="demo-radio-button"
      [value]="optionalLabelTextChoice">{{optionalLabelTextChoice}}</mat-radio-button>
  }
</mat-radio-group>
<mat-stepper class="demo-stepper" #stepper>
  <mat-step [stepControl]="firstFormGroup">
    <form [formGroup]="firstFormGroup">
      <ng-template matStepLabel>Fill out your name</ng-template>
      <mat-form-field class="demo-form-field">
        <mat-label>Name</mat-label>
        <input
          matInput
          placeholder="Last name, First name"
          formControlName="firstCtrl"
          required
        />
      </mat-form-field>
      <div>
        <button mat-button matStepperNext>Next</button>
      </div>
    </form>
  </mat-step>
  <mat-step
    [stepControl]="secondFormGroup"
    label="Fill out your address"
    optional>
    <form [formGroup]="secondFormGroup">
      <mat-form-field>
        <mat-label>Address</mat-label>
        <input
          matInput
          formControlName="secondCtrl"
          placeholder="Ex. 1 Main St, New York, NY"
        />
      </mat-form-field>
      <div>
        <button mat-button matStepperPrevious>Back</button>
        <button mat-button matStepperNext>Next</button>
      </div>
    </form>
  </mat-step>
  <mat-step>
    <ng-template matStepLabel>Done</ng-template>
    <p>You are now done.</p>
    <div>
      <button mat-button matStepperPrevious>Back</button>
      <button mat-button (click)="stepper.reset()">Reset</button>
    </div>
  </mat-step>
</mat-stepper>
  `

  constructor(
    private _formBuilder: FormBuilder, 
    breakpointObserver: BreakpointObserver, 
    private _matStepperIntl: MatStepperIntl,
    private router : Router
  ) {
    this.stepperOrientation15 = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }
  ngOnInit(): void {
    this.reload();
  }
  // stepper overview
  firstFormGroup1 = this._formBuilder.group({
    firstCtrl1: ['', Validators.required],
  });
  secondFormGroup1 = this._formBuilder.group({
    secondCtrl1: ['', Validators.required],
  });
  isLinear1 = false;

  // stepper vertical
  firstFormGroup3 = this._formBuilder.group({
    firstCtrl3: ['', Validators.required],
  });
  secondFormGroup3 = this._formBuilder.group({
    secondCtrl3: ['', Validators.required],
  });
  isLinear3 = false;

  // Stepper header position
  firstFormGroup5 = this._formBuilder.group({
    firstCtrl5: ['', Validators.required],
  });
  secondFormGroup5 = this._formBuilder.group({
    secondCtrl5: ['', Validators.required],
  });

  // stepper animations
  firstFormGroup7: FormGroup = this._formBuilder.group({ firstCtrl: [''] });
  secondFormGroup7: FormGroup = this._formBuilder.group({ secondCtrl: [''] });

  // stepper with customers states
  firstFormGroup9 = this._formBuilder.group({
    firstCtrl9: ['', Validators.required],
  });
  secondFormGroup9 = this._formBuilder.group({
    secondCtrl9: ['', Validators.required],
  });

  // Stepper that displays errors in the steps
  firstFormGroup11 = this._formBuilder.group({
    firstCtrl11: ['', Validators.required],
  });
  secondFormGroup11 = this._formBuilder.group({
    secondCtrl11: ['', Validators.required],
  });

  // Responseive stepper
  firstFormGroup15 = this._formBuilder.group({
    firstCtrl15: ['', Validators.required],
  });
  secondFormGroup15 = this._formBuilder.group({
    secondCtrl15: ['', Validators.required],
  });
  thirdFormGroup15 = this._formBuilder.group({
    thirdCtrl15: ['', Validators.required],
  });
  stepperOrientation15: Observable<StepperOrientation>;

  // Stepper that uses the MatStepperIntl service
  optionalLabelText17!: string;
  optionalLabelTextChoices17: string[] = ['Option 1', 'Option 2', 'Option 3'];
  firstFormGroup17 = this._formBuilder.group({
    firstCtrl17: ['', Validators.required],
  });
  secondFormGroup17 = this._formBuilder.group({
    secondCtrl17: ['', Validators.required],
  });

  updateOptionalLabel17() {
    this._matStepperIntl.optionalLabel = this.optionalLabelText17;
    // Required for the optional label text to be updated
    // Notifies the MatStepperIntl service that a change has been made
    this._matStepperIntl.changes.next();
  }

  reload() {
    // this.router.navigate([decodeURI(this.router.url)]);
    this.router.navigateByUrl('stepper');
  }

}
