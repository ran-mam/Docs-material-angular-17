import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  standalone: true,
  imports: [
    MaterialModule,
  ]
})
export class CardComponent {
  code1 = '\n' +
    "import {Component} from '@angular/core';\n" +
    "import {MatCardModule} from '@angular/material/card';\n" +
    "@Component({\n" +
    "  selector: 'card-overview-example',\n" +
    "  templateUrl: 'card-overview-example.html',\n" +
    "  standalone: true,\n" +
    "  imports: [MatCardModule],\n" +
    "})\n" +
    "export class CardOverviewExample {}";


  code2 = '\n' +
    "<mat-card>\n" +
    "  <mat-card-content>Simple card</mat-card-content>\n" +
    "</mat-card>";
}
