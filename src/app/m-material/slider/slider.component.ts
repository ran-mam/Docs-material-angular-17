import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  standalone:true,
  imports:[
    MaterialModule
  ]
})
export class SliderComponent {

  c1 = `
<mat-slider min="1" max="5" step="0.5" value="1.5">
  <input matSliderThumb>
</mat-slider>
  `

  c2 =`
<mat-slider>
  <input matSliderStartThumb>
  <input matSliderEndThumb>
</mat-slider>
  `

  c3 = `
<mat-slider discrete>
  <input matSliderThumb>
</mat-slider>
  `

  c4 = `
<mat-slider showTickMarks>
  <input matSliderThumb>
</mat-slider>
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
import {Component} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

/**
 * @title Range slider
 */
@Component({
  selector: 'slider-range-example',
  templateUrl: 'slider-range-example.html',
  styleUrl: 'slider-range-example.css',
  standalone: true,
  imports: [MatSliderModule],
})
export class SliderRangeExample {}
  `

  code4 = `
<mat-slider min="200" max="500">
  <input value="300" matSliderStartThumb>
  <input value="400" matSliderEndThumb>
</mat-slider>
  `

  code5 = `
import {Component} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

/**
 * @title Slider with custom thumb label formatting.
 */
@Component({
  selector: 'slider-formatting-example',
  templateUrl: 'slider-formatting-example.html',
  styleUrl: 'slider-formatting-example.css',
  standalone: true,
  imports: [MatSliderModule],
})
export class SliderFormattingExample {
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return '\${value}';
  }
}
  `

  code6 = `
<mat-slider min="0" max="100000" step="1000" showTickMarks discrete [displayWith]="formatLabel">
  <input matSliderThumb>
</mat-slider>
  `

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return '\${value}';
  }
}
