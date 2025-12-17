import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrl: './progress-spinner.component.scss',
  standalone:true,
  imports : [
    MaterialModule
  ]
})
export class ProgressSpinnerComponent {
  code1 =`
  import {Component} from '@angular/core';
  import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
  
  /**
   * @title Basic progress-spinner
   */
  @Component({
    selector: 'progress-spinner-overview-example',
    templateUrl: 'progress-spinner-overview-example.html',
    standalone: true,
    imports: [MatProgressSpinnerModule],
  })
  export class ProgressSpinnerOverviewExample {}
  `;

  code2 = `<mat-spinner></mat-spinner>`;
}
