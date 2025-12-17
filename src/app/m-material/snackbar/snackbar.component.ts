import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PizzaPartyAnnotatedComponent } from './pizza.component';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss',
  standalone : true,
  imports : [
    MaterialModule,FormsModule
  ]
})
export class SnackbarComponent {

  c1 = `
// Simple message.
let snackBarRef = snackBar.open('Message archived');

// Simple message with an action.
let snackBarRef = snackBar.open('Message archived', 'Undo');

// Load the given component into the snackbar.
let snackBarRef = snackBar.openFromComponent(MessageArchivedComponent);
  `

  c2 =`
  snackBarRef.afterDismissed().subscribe(() => {
    console.log('The snackbar was dismissed');
  });
  
  
  snackBarRef.onAction().subscribe(() => {
    console.log('The snackbar action was triggered!');
  });
  
  snackBarRef.dismiss();
  `

  c3 = `
  snackBar.open('Message archived', 'Undo', {
    duration: 3000
  });
  `

  c4 = `
  snackBar.openFromComponent(MessageArchivedComponent, {
    data: 'some data'
  });
  `

  c5 = `
import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

@Component({
  selector: 'your-snackbar',
  template: 'passed in {{ data }}',
})
export class MessageArchivedComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string) { }
}
  `

  c6 = `
  @NgModule({
    providers: [
      {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
    ]
  })
  `

  code1 = `
import {Component} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

/**
 * @title Basic slider
 */
@Component({
  selector: 'slider-overview-example',
  templateUrl: 'slider-overview-example.html',
  styleUrl: 'slider-overview-example.css',
  standalone: true,
  imports: [MatSliderModule],
})
export class SliderOverviewExample {}
  `

  code2 = `
<mat-slider>
  <input matSliderThumb>
</mat-slider>
  `

  code3 = `
import {Component, inject} from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

/**
 * @title Snack-bar with an annotated custom component
 */
@Component({
  selector: 'snack-bar-annotated-component-example',
  templateUrl: 'snack-bar-annotated-component-example.html',
  styleUrl: 'snack-bar-annotated-component-example.css',
  standalone: true,
  imports: [MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule],
})
export class SnackBarAnnotatedComponentExample {
  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyAnnotatedComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}

@Component({
  selector: 'snack-bar-annotated-component-example-snack',
  templateUrl: 'snack-bar-annotated-component-example-snack.html',
  styles: '
    :host {
      display: flex;
    }

    .example-pizza-party {
      color: hotpink;
    }
  ',
  standalone: true,
  imports: [MatButtonModule, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction],
})
export class PizzaPartyAnnotatedComponent {
  snackBarRef = inject(MatSnackBarRef);
}
  `

  code4 = `
<mat-form-field>
  <mat-label>Snack bar duration (seconds)</mat-label>
  <input type="number" [(ngModel)]="durationInSeconds" matInput>
</mat-form-field>

<button mat-stroked-button (click)="openSnackBar()" aria-label="Show an example snack-bar">
  Pizza party
</button>
  `

// Basic snacck bar



openSnackBar1(message: string, action: string) {
  this._snackBar.open(message, action);
}

  // Snack-bar with an annotated custom component
  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar2() {
    this._snackBar.openFromComponent(PizzaPartyAnnotatedComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

}
