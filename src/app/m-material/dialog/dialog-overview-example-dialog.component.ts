import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DialogData } from './dialog.component';


  @Component({
   selector: 'dialog-overview-example-dialog',
   templateUrl: './dialog-overview-example-dialog.component.html',
   standalone: true,
   imports: [
     MatFormFieldModule,
     MatInputModule,
     FormsModule,
     MatButtonModule,
     MatDialogTitle,
     MatDialogContent,
     MatDialogActions,
     MatDialogClose,
   ],
 })
 export class DialogOverviewExampleDialog {
   constructor(
     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
     @Inject(MAT_DIALOG_DATA) public data: DialogData,
   ) {}
 
   onNoClick(): void {
     this.dialogRef.close();
   }
 }
