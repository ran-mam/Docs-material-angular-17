import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss',
  standalone:true,
  imports :[
    MaterialModule
  ]
})
export class RadioButtonComponent {
  code1 =`
  import {Component} from '@angular/core';
  import {MatRadioModule} from '@angular/material/radio';
  
  /**
   * @title Basic radios
   */
  @Component({
    selector: 'radio-overview-example',
    templateUrl: 'radio-overview-example.html',
    styleUrl: 'radio-overview-example.css',
    standalone: true,
    imports: [MatRadioModule],
  })
  export class RadioOverviewExample {}
  `;

  code2= `
<mat-radio-group aria-label="Select an option">
  <mat-radio-button value="1">Option 1</mat-radio-button>
  <mat-radio-button value="2">Option 2</mat-radio-button>
</mat-radio-group>
  `;

  c1 = `
providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'accent' },
}]  
`

c2 =`
<mat-radio-button [aria-label]="getMultipleChoiceAnswer()">
</mat-radio-button>
`
}
