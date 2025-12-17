import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrl: './grid-list.component.scss',
  standalone:true,
  imports: [
    MaterialModule
  ]
})
export class GridListComponent {
  code1 = '\n'+
'<mat-grid-list cols="2" rowHeight="2:1">\n'+
'  <mat-grid-tile>1</mat-grid-tile>\n'+
'  <mat-grid-tile>2</mat-grid-tile>\n'+
'  <mat-grid-tile>3</mat-grid-tile>\n'+
'  <mat-grid-tile>4</mat-grid-tile>\n'+
'</mat-grid-list>\n';
}
