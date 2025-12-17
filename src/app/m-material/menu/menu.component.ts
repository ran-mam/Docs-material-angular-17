import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  standalone: true,
  imports: [
    MaterialModule
  ]
})
export class MenuComponent {

  c1 =`<button mat-button [matMenuTriggerFor]="menu">Menu</button>`;
  
  c2 =`
  class MyComponent {
    @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  
    someMethod() {
      this.trigger.openMenu();
    }
  }
  `;
  
  c3 =`
<button mat-icon-button [matMenuTriggerFor]="menu" aria-label="Example icon-button with a menu">
  <mat-icon>more_vert</mat-icon>
</button>
<mat-menu #menu="matMenu">
  <button mat-menu-item>
    <mat-icon>dialpad</mat-icon>
    <span>Redial</span>
  </button>
  <button mat-menu-item disabled>
    <mat-icon>voicemail</mat-icon>
    <span>Check voice mail</span>
  </button>
  <button mat-menu-item>
    <mat-icon>notifications_off</mat-icon>
    <span>Disable alerts</span>
  </button>
</mat-menu>
  `;
  
  c4 =`
  <mat-menu #aboveMenu="matMenu" yPosition="above">
  `;
  
  c5 =`
<mat-menu #animals="matMenu">
  <button mat-menu-item [matMenuTriggerFor]="vertebrates">Vertebrates</button>
  <button mat-menu-item [matMenuTriggerFor]="invertebrates">Invertebrates</button>
</mat-menu>

<mat-menu #vertebrates="matMenu">
  <button mat-menu-item [matMenuTriggerFor]="fish">Fishes</button>
  <button mat-menu-item [matMenuTriggerFor]="amphibians">Amphibians</button>
  <button mat-menu-item [matMenuTriggerFor]="reptiles">Reptiles</button>
  <button mat-menu-item>Birds</button>
  <button mat-menu-item>Mammals</button>
</mat-menu>
  `;
  
  c6 =`
<mat-menu #appMenu="matMenu">
  <ng-template matMenuContent>
    <button mat-menu-item>Settings</button>
    <button mat-menu-item>Help</button>
  </ng-template>
</mat-menu>

<button mat-icon-button [matMenuTriggerFor]="appMenu">
  <mat-icon>more_vert</mat-icon>
</button>
  `;
  
  c7 =`
<mat-menu #appMenu="matMenu">
  <ng-template matMenuContent let-name="name">
    <button mat-menu-item>Settings</button>
    <button mat-menu-item>Log off {{name}}</button>
  </ng-template>
</mat-menu>

<button mat-icon-button [matMenuTriggerFor]="appMenu" [matMenuTriggerData]="{name: 'Sally'}">
  <mat-icon>more_vert</mat-icon>
</button>

<button mat-icon-button [matMenuTriggerFor]="appMenu" [matMenuTriggerData]="{name: 'Bob'}">
  <mat-icon>more_vert</mat-icon>
</button>
  `;

  code1 = `
import {Component} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

/**
 * @title Basic menu
 */
@Component({
  selector: 'menu-overview-example',
  templateUrl: 'menu-overview-example.html',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
})
export class MenuOverviewExample {}
  `

  code2 = `
<button mat-button [matMenuTriggerFor]="menu">Menu</button>
<mat-menu #menu="matMenu">
  <button mat-menu-item>Item 1</button>
  <button mat-menu-item>Item 2</button>
</mat-menu>
  `
}
