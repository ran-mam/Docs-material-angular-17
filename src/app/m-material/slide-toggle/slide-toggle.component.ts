import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrl: './slide-toggle.component.scss',
  standalone :true,
  imports : [
    MaterialModule
  ]
})
export class SlideToggleComponent {
  code1 = `
import {Component} from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

/**
 * @title Basic slide-toggles
 */
@Component({
  selector: 'slide-toggle-overview-example',
  templateUrl: 'slide-toggle-overview-example.html',
  standalone: true,
  imports: [MatSlideToggleModule],
})
export class SlideToggleOverviewExample {}
  `

  code2 = `
  <mat-slide-toggle>Slide me!</mat-slide-toggle>
  `

  c1 = `
<mat-slide-toggle [aria-label]="isSubscribedToEmailsMessage">
</mat-slide-toggle>
  `
}
