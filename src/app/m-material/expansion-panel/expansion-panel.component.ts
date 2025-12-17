import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrl: './expansion-panel.component.scss',
  standalone:true,
  imports : [
    MaterialModule
  ]
})
export class ExpansionPanelComponent {
c1 = "\n"+
'<mat-expansion-panel hideToggle>\n'+
'  <mat-expansion-panel-header>\n'+
'    <mat-panel-title>\n'+
'      This is the expansion title\n'+
'    </mat-panel-title>\n'+
'    <mat-panel-description>\n'+
'      This is a summary of the content\n'+
'    </mat-panel-description>\n'+
'  </mat-expansion-panel-header>\n'+
'  <p>This is the primary content of the panel.</p>\n'+
'</mat-expansion-panel>\n';

c2 = '\n<mat-expansion-panel hideToggle>\n';

c3 = "\n"+
'<mat-action-row>\n'+
'  <button mat-button color="primary" (click)="nextStep()">Next</button>\n'+
'</mat-action-row>\n';

c4 = '\n<mat-expansion-panel disabled>\n';

c5 = '\n<mat-accordion class="example-headers-align" multi>\n';

c6 = "\n"+
'<mat-expansion-panel>\n'+
'  <mat-expansion-panel-header>\n'+
'    This is the expansion title\n'+
'  </mat-expansion-panel-header>\n'+
'  \n'+
'  <ng-template matExpansionPanelContent>\n'+
'    Some deferred content\n'+
'  </ng-template>\n'+
'</mat-expansion-panel>\n';

  code1 = "\n"+
'<mat-accordion>\n'+
'  <mat-expansion-panel hideToggle>\n'+
'    <mat-expansion-panel-header>\n'+
'      <mat-panel-title>\n'+
'        This is the expansion title\n'+
'      </mat-panel-title>\n'+
'      <mat-panel-description>\n'+
'        This is a summary of the content\n'+
'      </mat-panel-description>\n'+
'    </mat-expansion-panel-header>\n'+
'    <p>This is the primary content of the panel.</p>\n'+
'  </mat-expansion-panel>\n'+
'  <mat-expansion-panel (opened)="panelOpenState = true"\n'+
'                       (closed)="panelOpenState = false">\n'+
'    <mat-expansion-panel-header>\n'+
'      <mat-panel-title>\n'+
'        Self aware panel\n'+
'      </mat-panel-title>\n'+
'      <mat-panel-description>\n'+
'        Currently I am {{panelOpenState ? \''+'open\''+' : \''+'closed\''+'}}\n'+
'      </mat-panel-description>\n'+
'    </mat-expansion-panel-header>\n'+
'    <p>I\''+'m visible because I am open</p>\n'+
'  </mat-expansion-panel>\n'+
'</mat-accordion>\n';

  code2 = "\n"+
  "import {Component} from '@angular/core';\n"+
  "import {MatExpansionModule} from '@angular/material/expansion';\n"+
  "\n"+
  "@Component({\n"+
  "  selector: 'expansion-overview-example',\n"+
  "  templateUrl: 'expansion-overview-example.html',\n"+
  "  standalone: true,\n"+
  "  imports: [MatExpansionModule],\n"+
  "})\n"+
  "export class ExpansionOverviewExample {\n"+
    "  panelOpenState = false;\n"+
    "}\n";

  panelOpenState = false;
}
