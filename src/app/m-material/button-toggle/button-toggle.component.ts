import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrl: './button-toggle.component.scss',
  standalone: true,
  imports: [
    MaterialModule
  ]
})
export class ButtonToggleComponent {
  code1 = '\n' +
    '<mat-button-toggle-group name="fontStyle" aria-label="Font Style">\n' +
    '   <mat-button-toggle value="bold">Bold</mat-button-toggle>\n' +
    '   <mat-button-toggle value="italic">Italic</mat-button-toggle>\n' +
    '   <mat-button-toggle value="underline">Underline</mat-button-toggle>\n' +
    '</mat-button-toggle-group>\n';

  code2 = '\n' +
    "import {Component} from '@angular/core';\n" +
    "import {MatButtonToggleModule} from '@angular/material/button-toggle';\n" +

    "@Component({\n" +
    "  selector: 'button-toggle-overview-example',\n" +
    "  templateUrl: 'button-toggle-overview-example.html',\n" +
    "  standalone: true,\n" +
    "  imports: [MatButtonToggleModule],\n" +
    "})\n" +
    "export class ButtonToggleOverviewExample {}\n";

  code3 = '\n' +
    "import {Component} from '@angular/core';\n" +
    "import {MatButtonToggleModule} from '@angular/material/button-toggle';\n" +
    "@Component({\n" +
    "  selector: 'button-toggle-mode-example',\n" +
    "  templateUrl: 'button-toggle-mode-example.html',\n" +
    "  standalone: true,\n" +
    "  imports: [MatButtonToggleModule],\n" +
    "})\n" +
    "export class ButtonToggleModeExample {}\n";

  code4 = '\n' +
    '<h3>Single selection</h3>\n' +
    '<mat-button-toggle-group name="favoriteColor" aria-label="Favorite Color">\n' +
    '  <mat-button-toggle value="red">Red</mat-button-toggle>\n' +
    '  <mat-button-toggle value="green">Green</mat-button-toggle>\n' +
    '  <mat-button-toggle value="blue">Blue</mat-button-toggle>\n' +
    '</mat-button-toggle-group>\n' +
    '\n' +
    '<h3>Multiple selection</h3>\n' +
    '<mat-button-toggle-group name="ingredients" aria-label="Ingredients" multiple>\n' +
    '  <mat-button-toggle value="flour">Flour</mat-button-toggle>\n' +
    '  <mat-button-toggle value="eggs">Eggs</mat-button-toggle>\n' +
    '  <mat-button-toggle value="sugar">Sugar</mat-button-toggle>\n' +
    '</mat-button-toggle-group>\n';

  code5 = '\n' +
    "import {Component} from '@angular/core';\n" +
    "import {MatButtonToggleModule} from '@angular/material/button-toggle';\n" +
    "@Component({\n" +
    "  selector: 'button-toggle-appearance-example',\n" +
    "  templateUrl: 'button-toggle-appearance-example.html',\n" +
    "  styleUrl: 'button-toggle-appearance-example.css',\n" +
    "  standalone: true,\n" +
    "  imports: [MatButtonToggleModule],\n" +
    "})\n" +
    "export class ButtonToggleAppearanceExample {}\n";

  code6 = '\n' +
    '<p>\n' +
    '  <mat-button-toggle-group name="fontStyle" aria-label="Font Style">\n' +
    '    <mat-button-toggle value="bold">Bold</mat-button-toggle>\n' +
    '    <mat-button-toggle value="italic">Italic</mat-button-toggle>\n' +
    '    <mat-button-toggle value="underline">Underline</mat-button-toggle>\n' +
    '  </mat-button-toggle-group>\n' +
    '</p>\n' +
    '\n' +
    '<p>\n' +
    '  <mat-button-toggle-group appearance="legacy" name="fontStyle" aria-label="Font Style">\n' +
    '    <mat-button-toggle value="bold">Bold</mat-button-toggle>\n' +
    '    <mat-button-toggle value="italic">Italic</mat-button-toggle>\n' +
    '    <mat-button-toggle value="underline">Underline</mat-button-toggle>\n' +
    '  </mat-button-toggle-group>\n' +
    '</p>\n';

  code7 = '\n' +
    '<mat-button-toggle [aria-label]="alertsEnabled ? \'' + 'Disable alerts\'' + ' : \'' + 'Enable alerts\'' + '">\n' +
    '  <mat-icon>notifications</mat-icon>\n' +
    '</mat-button-toggle>\n';
}
