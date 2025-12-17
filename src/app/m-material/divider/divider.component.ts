import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrl: './divider.component.scss',
  standalone: true,
  imports: [
    MaterialModule
  ]
})
export class DividerComponent {

  c1 = "\n <mat-divider></mat-divider>\n";

  c2 = '\n<mat-divider [inset]="true"></mat-divider>\n';

  c3 = '\n<mat-divider [vertical]="true"></mat-divider>\n';

  c4 = "\n" +
    '<mat-list>\n' +
    '  <h3 mat-subheader>Folders</h3>\n' +
    '  @for (folder of folders; track folder) {\n' +
    '     <mat-list-item>\n' +
    '        <mat-icon mat-list-icon>folder</mat-icon>\n' +
    '        <h4 mat-line>{{folder.name}}</h4>\n' +
    '        <p mat-line class="demo-2">{{folder.updated}}</p>\n' +
    '        @if (!$last) {\n' +
    '           <mat-divider [inset]="true"></mat-divider>\n' +
    '        }\n' +
    '     </mat-list-item>\n' +
    '  }\n' +
    '  <mat-divider></mat-divider>\n' +
    '  <h3 mat-subheader>Notes</h3>\n' +
    '  @for (note of notes; track node) {\n' +
    '     <mat-list-item>\n' +
    '        <mat-icon mat-list-icon>note</mat-icon>\n' +
    '        <h4 mat-line>{{note.name}}</h4>\n' +
    '        <p mat-line class="demo-2"> {{note.updated}} </p>\n' +
    '     </mat-list-item>\n' +
    '  }\n' +
    '</mat-list>\n';

  code1 = '\n' +
    "import {Component} from '@angular/core';\n" +
    "import {MatDividerModule} from '@angular/material/divider';\n" +
    "import {MatListModule} from '@angular/material/list';\n" +
    "\n" +
    "@Component({\n" +
    "  selector: 'divider-overview-example',\n" +
    "  templateUrl: 'divider-overview-example.html',\n" +
    "  standalone: true,\n" +
    "  imports: [MatListModule, MatDividerModule],\n" +
    "})\n" +
    "export class DividerOverviewExample {}\n";


  code2 = '\n' +
    '<mat-list>\n' +
    '  <mat-list-item>Item 1</mat-list-item>\n' +
    '  <mat-divider></mat-divider>\n' +
    '  <mat-list-item>Item 2</mat-list-item>\n' +
    '  <mat-divider></mat-divider>\n' +
    '  <mat-list-item>Item 3</mat-list-item>\n' +
    '</mat-list>\n';



}
