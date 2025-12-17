import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss',
  standalone: true,
  imports: [
    MaterialModule, ReactiveFormsModule,
    MatTooltipModule
  ]
})
export class TooltipComponent {
  code1 = `
import {Component} from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

/**
 * @title Basic tooltip
 */
@Component({
  selector: 'tooltip-overview-example',
  templateUrl: 'tooltip-overview-example.html',
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule],
})
export class TooltipOverviewExample {}
 `

  code2 = `
<button mat-raised-button
        matTooltip="Info about the action"
        aria-label="Button that displays a tooltip when focused or hovered over">
  Action
</button>
 `

  code3 = `
import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TooltipPosition, MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

/**
 * @title Tooltip with a custom position
 */
@Component({
  selector: 'tooltip-position-example',
  templateUrl: 'tooltip-position-example.html',
  styleUrl: 'tooltip-position-example.css',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTooltipModule,
  ],
})
export class TooltipPositionExample {
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
}
 `

  code4 = `
<mat-form-field class="example-user-input">
 <mat-label>Tooltip position</mat-label>
 <mat-select [formControl]="position">
   @for (positionOption of positionOptions; track positionOption) {
     <mat-option [value]="positionOption">{{positionOption}}</mat-option>
   }
 </mat-select>
</mat-form-field>

<button mat-raised-button
       matTooltip="Info about the action"
       [matTooltipPosition]="position.value!"
       aria-label="Button that displays a tooltip in various positions">
 Action
</button>
 `

  code5 = `
import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

/**
 * @title Tooltip with a show and hide delay
 */
@Component({
  selector: 'tooltip-delay-example',
  templateUrl: 'tooltip-delay-example.html',
  styleUrl: 'tooltip-delay-example.css',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTooltipModule,
  ],
})
export class TooltipDelayExample {
  showDelay = new FormControl(1000);
  hideDelay = new FormControl(2000);
}
 `

  code6 = `
<mat-form-field class="example-user-input">
  <mat-label>Show delay</mat-label>
  <input matInput type="number" [formControl]="showDelay"
         aria-label="Adds a delay between hovering over the button and displaying the tooltip">
  <mat-hint>milliseconds</mat-hint>
</mat-form-field>

<mat-form-field class="example-user-input">
  <mat-label>Hide delay</mat-label>
  <input matInput type="number" [formControl]="hideDelay"
         aria-label="Adds a delay between hovering away from the button and hiding the tooltip">
  <mat-hint>milliseconds</mat-hint>
</mat-form-field>

<button mat-raised-button matTooltip="Info about the action"
        [matTooltipShowDelay]="showDelay.value"
        [matTooltipHideDelay]="hideDelay.value"
        aria-label="Button that displays a tooltip with a customized delay in showing and hiding">
  Action
</button>
 `

  code7 = `
import {Component} from '@angular/core';
import {
  MAT_TOOLTIP_DEFAULT_OPTIONS,
  MatTooltipDefaultOptions,
  MatTooltipModule,
} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

/** Custom options the configure the tooltip's default show/hide delays. */
export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 1000,
  hideDelay: 1000,
  touchendHideDelay: 1000,
};

/**
 * @title Tooltip with a show and hide delay
 */
@Component({
  selector: 'tooltip-modified-defaults-example',
  templateUrl: 'tooltip-modified-defaults-example.html',
  providers: [{provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}],
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule],
})
export class TooltipModifiedDefaultsExample {}
 `

  code8 = `
<button mat-raised-button
        matTooltip="By default, I delay"
        aria-label="Button that displays a tooltip that has custom delays through a default config">
  Button with delay-default tooltip
</button>
 `

  code9 = `
import {Component} from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

/**
 * @title Tooltip that can be manually shown/hidden.
 */
@Component({
  selector: 'tooltip-manual-example',
  templateUrl: 'tooltip-manual-example.html',
  styleUrl: 'tooltip-manual-example.css',
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule],
})
export class TooltipManualExample {}
 `

  code10 = `
<div>
  <span> Click the following buttons to... </span>
  <button mat-button
          (click)="tooltip.show()"
          aria-label="Show tooltip on the button at the end of this section"
          class="example-action-button">
    show
  </button>
  <button mat-button
          (click)="tooltip.hide()"
          aria-label="Hide tooltip on the button at the end of this section"
          class="example-action-button">
    hide
  </button>
  <button mat-button
          (click)="tooltip.toggle()"
          aria-label="Show/Hide tooltip on the button at the end of this section"
          class="example-action-button">
    toggle show/hide
  </button>
</div>

<button mat-raised-button #tooltip="matTooltip"
        matTooltip="Info about the action"
        matTooltipPosition="right"
        aria-tooltip="Button that displays and hides a tooltip triggered by other buttons">
  Action
</button>
 `

  // Tooltip with a custom position
  positionOptions3: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position3 = new FormControl(this.positionOptions3[0]);

  // Tooltip with a show and hide delay
  showDelay5 = new FormControl(1000);
  hideDelay5 = new FormControl(2000);
}
