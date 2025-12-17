import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  standalone : true,
  imports : [
    MaterialModule,
  ]
})
export class TabsComponent {

  c1 = `
<mat-tab-group>
  <mat-tab label="First"> Content 1 </mat-tab>
  <mat-tab label="Second"> Content 2 </mat-tab>
  <mat-tab label="Third"> Content 3 </mat-tab>
</mat-tab-group>
  `

  c2 = `
<ng-template mat-tab-label>
  <mat-icon class="example-tab-icon">thumb_up</mat-icon>
  First
</ng-template>
  `

  c3 = `
  <mat-tab-group dynamicHeight>
  `

  c4 = `
<nav mat-tab-nav-bar [backgroundColor]="background" [tabPanel]="tabPanel">
  @for (link of links; track link) {
    <a mat-tab-link
      (click)="activeLink = link"
      [active]="activeLink == link"> {{link}} </a>
  }
  <a mat-tab-link disabled>Disabled Link</a>
</nav>
<mat-tab-nav-panel #tabPanel></mat-tab-nav-panel>
  `

  c5 = `
<mat-tab label="First">
  <ng-template matTabContent>
    Content 1 - Loaded: {{getTimeLoaded(1) | date:'medium'}}
  </ng-template>
</mat-tab>
  `

  c6 = `
  <mat-tab-group mat-stretch-tabs="false" mat-align-tabs="start">
  `

  c7 = `
<mat-tab-group animationDuration="2000ms">
  `

  code1 = `
import {Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

/**
 * @title Basic use of the tab group
 */
@Component({
  selector: 'tab-group-basic-example',
  templateUrl: 'tab-group-basic-example.html',
  standalone: true,
  imports: [MatTabsModule],
})
export class TabGroupBasicExample {}
  `;

  code2 = `
<mat-tab-group>
  <mat-tab label="First"> Content 1 </mat-tab>
  <mat-tab label="Second"> Content 2 </mat-tab>
  <mat-tab label="Third"> Content 3 </mat-tab>
</mat-tab-group>
  `;


}
