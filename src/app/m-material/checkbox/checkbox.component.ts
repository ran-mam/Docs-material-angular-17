import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { ThemePalette } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  standalone: true,
  imports: [
    MaterialModule,
    FormsModule
  ]
})
export class CheckboxComponent {

  code1 = '\n' +
    "import {Component} from '@angular/core';\n" +
    "import {ThemePalette} from '@angular/material/core';\n" +
    "import {FormsModule} from '@angular/forms';\n" +
    "import {MatCheckboxModule} from '@angular/material/checkbox';\n" +
    "export interface Task {\n" +
    "  name: string;\n" +
    "  completed: boolean;\n" +
    "  color: ThemePalette;\n" +
    "  subtasks?: Task[];\n" +
    "}\n" +

    "@Component({\n" +
    "  selector: 'checkbox-overview-example',\n" +
    "  templateUrl: 'checkbox-overview-example.html',\n" +
    "  styleUrl: 'checkbox-overview-example.css',\n" +
    "  standalone: true,\n" +
    "  imports: [MatCheckboxModule, FormsModule],\n" +
    "})\n" +
    "export class CheckboxOverviewExample {\n" +
    "  task: Task = {\n" +
    "    name: 'Indeterminate',\n" +
    "    completed: false,\n" +
    "    color: 'primary',\n" +
    "    subtasks: [\n" +
    "      {name: 'Primary', completed: false, color: 'primary'},\n" +
    "      {name: 'Accent', completed: false, color: 'accent'},\n" +
    "      {name: 'Warn', completed: false, color: 'warn'},\n" +
    "    ],\n" +
    "  };\n" +
    "\n" +
    "  allComplete: boolean = false;\n" +
    "\n" +
    "  updateAllComplete() {\n" +
    "    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);\n" +
    "  }\n" +
    "\n" +
    "  someComplete(): boolean {\n" +
    "    if (this.task.subtasks == null) {\n" +
    "      return false;\n" +
    "    }\n" +
    "    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;\n" +
    "  }\n" +
    "\n" +
    "  setAll(completed: boolean) {\n" +
    "    this.allComplete = completed;\n" +
    "    if (this.task.subtasks == null) {\n" +
    "      return;\n" +
    "    }\n" +
    "    this.task.subtasks.forEach(t => (t.completed = completed));\n" +
    "  }\n" +
    "}\n";

  code2 = '\n' +
    '<section class="example-section">\n' +
    '  <mat-checkbox class="example-margin">Check me!</mat-checkbox>\n' +
    '  <mat-checkbox class="example-margin" [disabled]="true">Disabled</mat-checkbox>\n' +
    '</section>\n' +
    '\n' +
    '<section class="example-section">\n' +
    '  <span class="example-list-section">\n' +
    '    <mat-checkbox class="example-margin"\n' +
    '                  [checked]="allComplete"\n' +
    '                  [color]="task.color"\n' +
    '                  [indeterminate]="someComplete()"\n' +
    '                  (change)="setAll($event.checked)">\n' +
    '      {{task.name}}\n' +
    '    </mat-checkbox>\n' +
    '  </span>\n' +
    '  <span class="example-list-section">\n' +
    '    <ul>\n' +
    '      @for (subtask of task.subtasks; track subtask) {\n' +
    '        <li>\n' +
    '          <mat-checkbox [(ngModel)]="subtask.completed"\n' +
    '                        [color]="subtask.color"\n' +
    '                        (ngModelChange)="updateAllComplete()">\n' +
    '            {{subtask.name}}\n' +
    '          </mat-checkbox>\n' +
    '        </li>\n' +
    '      }\n' +
    '    </ul>\n' +
    '  </span>\n' +
    '</section>\n';

  code3 = '\n' +
    "providers: [\n" +
    "  {provide: MAT_CHECKBOX_DEFAULT_OPTIONS, useValue: { clickAction: 'noop' } as MatCheckboxDefaultOptions}\n" +
    "]\n";


  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      { name: 'Primary', completed: false, color: 'primary' },
      { name: 'Accent', completed: false, color: 'accent' },
      { name: 'Warn', completed: false, color: 'warn' },
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }
}
