import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from './dialog-overview-example-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
})
export class DialogComponent {

  c1 = '\n' +
    "let dialogRef = dialog.open(UserProfileComponent, {\n" +
    "  height: '400px',\n" +
    "  width: '600px',\n" +
    "});\n";

  c2 = '\n' +
    'dialogRef.afterClosed().subscribe(result => {\n' +
    '  console.log(`Dialog result: ${result}`); // Pizza!\n' +
    '});\n' +
    '\n' +
    'dialogRef.close(\'' + 'Pizza!\'' + ');\n';

  c3 = '\n' +
    '@Component({/* ... */})\n' +
    'export class YourDialog {\n' +
    '  constructor(public dialogRef: MatDialogRef<YourDialog>) { }\n' +
    '\n' +
    '  closeDialog() {\n' +
    '    this.dialogRef.close(\'' + 'Pizza!\'' + ');\n' +
    '  }\n' +
    '}\n';

  c4 = '\n' +
    '@NgModule({\n' +
    '  providers: [\n' +
    '    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}\n' +
    '  ]\n' +
    '})\n';

  c5 = '\n' +
    'let dialogRef = dialog.open(YourDialog, {\n' +
    '  data: { name: \'' + 'austin\'' + ' },\n' +
    '});\n';

  c6 = '\n' +
    "import {Component, Inject} from '@angular/core';\n" +
    "import {MAT_DIALOG_DATA} from '@angular/material/dialog';\n" +
    "\n" +
    "@Component({\n" +
    "  selector: 'your-dialog',\n" +
    "  template: 'passed in {{ data.name }}',\n" +
    "})\n" +
    "export class YourDialog {\n" +
    "  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: string}) { }\n" +
    "}\n";

  c7 = '\n' +
    '<ng-template let-data>\n' +
    '  Hello, {{data.name}}\n' +
    '</ng-template>\n';

  c8 = "\n" +
    '<h2 mat-dialog-title>Delete all elements?</h2>\n' +
    '<mat-dialog-content>This will delete all elements that are currently on this page and cannot be undone.</mat-dialog-content>\n' +
    '<mat-dialog-actions>\n' +
    '  <button mat-button mat-dialog-close>Cancel</button>\n' +
    '  <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->\n' +
    '  <button mat-button [mat-dialog-close]="true">Delete</button>\n' +
    '</mat-dialog-actions>\n';

  c9 = "\n" +
    '<button mat-button tabindex="-1">Not Tabbable</button>\n';

  c10 = '\n' +
    'const dialogRef = this.dialog.open(DialogFromMenuExampleDialog, {restoreFocus: false});\n' +
    '\n' +
    'dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());\n';

  code1 = "\n" +
    "import {Component, Inject} from '@angular/core';\n" +
    "import {\n" +
    "  MatDialog,\n" +
    "  MAT_DIALOG_DATA,\n" +
    "  MatDialogRef,\n" +
    "  MatDialogTitle,\n" +
    "  MatDialogContent,\n" +
    "  MatDialogActions,\n" +
    "  MatDialogClose,\n" +
    "} from '@angular/material/dialog';\n" +
    "import {MatButtonModule} from '@angular/material/button';\n" +
    "import {FormsModule} from '@angular/forms';\n" +
    "import {MatInputModule} from '@angular/material/input';\n" +
    "import {MatFormFieldModule} from '@angular/material/form-field';\n" +
    "\n" +
    "export interface DialogData {\n" +
    "  animal: string;\n" +
    " name: string;\n" +
    "}\n" +
    "\n" +
    "@Component({\n" +
    "  selector: 'dialog-overview-example',\n" +
    "  templateUrl: 'dialog-overview-example.html',\n" +
    "  standalone: true,\n" +
    "  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],\n" +
    "})\n" +
    "export class DialogOverviewExample {\n" +
    "   animal: string;\n" +
    "  name: string;\n" +
    "\n" +
    "   constructor(public dialog: MatDialog) {}\n" +
    "\n" +
    "  openDialog(): void {\n" +
    "    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {\n" +
    "      data: {name: this.name, animal: this.animal},\n" +
    "    });\n" +
    "\n" +
    "     dialogRef.afterClosed().subscribe(result => {\n" +
    "      console.log('The dialog was closed');\n" +
    "      this.animal = result;\n" +
    "    });\n" +
    "  }\n" +
    "}\n";

  code2 = "\n" +
    '<ol>\n' +
    '  <li>\n' +
    '    <mat-form-field>\n' +
    '      <mat-label>What\'' + 's your name?</mat-label>\n' +
    '      <input matInput [(ngModel)]="name">\n' +
    '    </mat-form-field>\n' +
    '  </li>\n' +
    '  <li>\n' +
    '    <button mat-raised-button (click)="openDialog()">Pick one</button>\n' +
    '  </li>\n' +
    '  @if (animal) {\n' +
    '    <li>You chose: <em>{{animal}}</em></li>\n' +
    '  }\n' +
    '</ol>\n';


  code3 = "\n" +
    "@Component({\n" +
    "  selector: 'dialog-overview-example-dialog',\n" +
    "  templateUrl: 'dialog-overview-example-dialog.html',\n" +
    "  standalone: true,\n" +
    "  imports: [\n" +
    "    MatFormFieldModule,\n" +
    "    MatInputModule,\n" +
    "    FormsModule,\n" +
    "    MatButtonModule,\n" +
    "    MatDialogTitle,\n" +
    "    MatDialogContent,\n" +
    "    MatDialogActions,\n" +
    "    MatDialogClose,\n" +
    "  ],\n" +
    "})\n" +
    "export class DialogOverviewExampleDialog {\n" +
    "  constructor(\n" +
    "    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,\n" +
    "    @Inject(MAT_DIALOG_DATA) public data: DialogData,\n" +
    "  ) {}\n" +
    "\n" +
    "  onNoClick(): void {\n" +
    "    this.dialogRef.close();\n" +
    "  }\n" +
    "}\n";

  code4 = "\n" +
    '<h2 mat-dialog-title>Hi {{data.name}}</h2>\n' +
    '  <mat-dialog-content>\n' +
    '    <p>What\'' + 's your favorite animal?</p>\n' +
    '    <mat-form-field>\n' +
    '      <mat-label>Favorite Animal</mat-label>\n' +
    '      <input matInput [(ngModel)]="data.animal">\n' +
    '    </mat-form-field>\n' +
    '  </mat-dialog-content>\n' +
    '  <mat-dialog-actions>\n' +
    '    <button mat-button (click)="onNoClick()">No Thanks</button>\n' +
    '    <button mat-button [mat-dialog-close]="data.animal" cdkFocusInitial>Ok</button>\n' +
    '  </mat-dialog-actions>\n';

  code5 = '\n' +
    "import {Component, Inject} from '@angular/core';\n" +
    "import {\n" +
    "  MatDialog,\n" +
    "  MAT_DIALOG_DATA,\n" +
    "  MatDialogTitle,\n" +
    "  MatDialogContent,\n" +
    "} from '@angular/material/dialog';\n" +
    "import {MatButtonModule} from '@angular/material/button';\n" +
    "\n" +
    "export interface DialogData {\n" +
    "  animal: 'panda' | 'unicorn' | 'lion';\n" +
    "}\n" +
    "\n" +
    "@Component({\n" +
    "  selector: 'dialog-data-example',\n" +
    "  templateUrl: 'dialog-data-example.html',\n" +
    "  standalone: true,\n" +
    "  imports: [MatButtonModule],\n" +
    "})\n" +
    "export class DialogDataExample {\n" +
    "  constructor(public dialog: MatDialog) {}\n" +
    "\n" +
    "  openDialog() {\n" +
    "    this.dialog.open(DialogDataExampleDialog, {\n" +
    "      data: {\n" +
    "        animal: 'panda',\n" +
    "      },\n" +
    "    });\n" +
    "  }\n" +
    "}\n";

  code6 = '\n' +
    '<button mat-button (click)="openDialog()">Open dialog</button>\n';

  code7 = '\n' +
    "@Component({\n" +
    "  selector: 'dialog-data-example-dialog',\n" +
    "  templateUrl: 'dialog-data-example-dialog.html',\n" +
    "  standalone: true,\n" +
    "  imports: [MatDialogTitle, MatDialogContent],\n" +
    "})\n" +
    "export class DialogDataExampleDialog {\n" +
    "  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}\n" +
    "}\n";

  animal?: string;
  name?: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
