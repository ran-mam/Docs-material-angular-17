import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module'
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetOverviewExampleSheet } from './BottomSheetOverviewExampleSheet.component';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrl: './bottom-sheet.component.scss',
  standalone: true,
  imports: [
    MaterialModule
  ]
})
export class BottomSheetComponent {
  code1 = '\n' +
    "import {Component} from '@angular/core';\n" +
    "import {\n" +
    "  MatBottomSheet,\n" +
    "  MatBottomSheetModule,\n" +
    "  MatBottomSheetRef,\n" +
    "} from '@angular/material/bottom-sheet';\n" +
    "import {MatListModule} from '@angular/material/list';\n" +
    "import {MatButtonModule} from '@angular/material/button';\n" +
    "@Component({\n" +
    "  selector: 'bottom-sheet-overview-example',\n" +
    "  templateUrl: 'bottom-sheet-overview-example.html',\n" +
    "  standalone: true,\n" +
    "  imports: [MatButtonModule, MatBottomSheetModule],\n" +
    "})\n" +
    "export class BottomSheetOverviewExample {\n" +
    "  constructor(private _bottomSheet: MatBottomSheet) {}\n" +
    "  openBottomSheet(): void {\n" +
    "    this._bottomSheet.open(BottomSheetOverviewExampleSheet);\n" +
    "  }\n" +
    "}\n";

  code2 = '\n' +
    "const bottomSheetRef = bottomSheet.open(SocialShareComponent, {\n" +
    "  ariaLabel: 'Share on social media'\n" +
    "});\n";

  code3 = '\n' +
    "bottomSheetRef.afterDismissed().subscribe(() => {\n" +
    "  console.log('Bottom sheet has been dismissed.');\n" +
    "});\n" +
    "bottomSheetRef.dismiss();\n";

  code4 = '\n' +
    "const bottomSheetRef = bottomSheet.open(HobbitSheet, {\n" +
    "  data: { names: ['Frodo', 'Bilbo'] },\n" +
    "});\n";

  code5 = '\n' +
    "import {Component, Inject} from '@angular/core';\n" +
    "import {MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';\n" +
    "@Component({\n" +
    "  selector: 'hobbit-sheet',\n" +
    "  template: 'passed in {{ data.names }}',\n" +
    "})\n" +
    "export class HobbitSheet {\n" +
    "  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: {names: string[]}) { }\n" +
    "}\n";

  code6 = '\n' +
    "@NgModule({\n" +
    "  providers: [\n" +
    "    {provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}\n" +
    "  ]\n" +
    "})\n";

  code7 = '\n' +
    "const bottomSheetRef = bottomSheet.open(FileTypeChooser);\n" +
    "bottomSheetRef.afterDismissed().subscribe(() => {\n" +
    "});\n";

  constructor(private _bottomSheet: MatBottomSheet) { }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
}
