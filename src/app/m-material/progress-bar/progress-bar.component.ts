import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
  standalone:true,
  imports :[
    MaterialModule
  ]
})
export class ProgressBarComponent {
  code1 = `
  import {Component} from '@angular/core';
  import {MatProgressBarModule} from '@angular/material/progress-bar';
  
  /**
   * @title Determinate progress-bar
   */
  @Component({
    selector: 'progress-bar-determinate-example',
    templateUrl: 'progress-bar-determinate-example.html',
    standalone: true,
    imports: [MatProgressBarModule],
  })
  export class ProgressBarDeterminateExample {}
  `;

  code2 = `
  <mat-progress-bar mode="determinate" value="40"></mat-progress-bar>
  `;

  code3 =`
import {Component} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

/**
 * @title Indeterminate progress-bar
 */
@Component({
  selector: 'progress-bar-indeterminate-example',
  templateUrl: 'progress-bar-indeterminate-example.html',
  standalone: true,
  imports: [MatProgressBarModule],
})
export class ProgressBarIndeterminateExample {}
  `;

  code4 = `
  <mat-progress-bar mode="indeterminate"></mat-progress-bar>
  `;

  code5 = `
import {Component} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

/**
 * @title Buffer progress-bar
 */
@Component({
  selector: 'progress-bar-buffer-example',
  templateUrl: 'progress-bar-buffer-example.html',
  standalone: true,
  imports: [MatProgressBarModule],
})
export class ProgressBarBufferExample {}
  `;

  code6 = `
  <mat-progress-bar mode="buffer"></mat-progress-bar>
  `;

  code7 = `
import {Component} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

/**
 * @title Query progress-bar
 */
@Component({
  selector: 'progress-bar-query-example',
  templateUrl: 'progress-bar-query-example.html',
  standalone: true,
  imports: [MatProgressBarModule],
})
export class ProgressBarQueryExample {}
  `;

  code8 = `
  <mat-progress-bar mode="query"></mat-progress-bar>
  `;
}
