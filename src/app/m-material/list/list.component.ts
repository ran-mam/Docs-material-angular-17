import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  standalone: true,
  imports: [
    MaterialModule
  ]
})
export class ListComponent {


  c1 = '\n' +
    '<mat-list>\n' +
    '  <mat-list-item>Pepper</mat-list-item>\n' +
    '  <mat-list-item>Salt</mat-list-item>\n' +
    '  <mat-list-item>Paprika</mat-list-item>\n' +
    ' </mat-list>\n';

  c2 = '\n' +
    '<mat-list>\n' +
    '  <mat-list-item>\n' +
    '    <span matListItemTitle>Pepper</span>\n' +
    '    <span matListItemLine>Produced by a plant</span>\n' +
    '  </mat-list-item>\n' +
    '  <mat-list-item>\n' +
    '    <span matListItemTitle>Salt</span>\n' +
    '    <span matListItemLine>Extracted from sea water</span>\n' +
    '  </mat-list-item>\n' +
    '  <mat-list-item>\n' +
    '    <span matListItemTitle>Paprika</span>\n' +
    '    <span matListItemLine>Produced by dried and ground red peppers</span>\n' +
    '  </mat-list-item>\n' +
    '</mat-list>\n';

  c3 = '\n' +
    '<mat-nav-list>\n' +
    '  @for (link of list; track link) {\n' +
    '    <a mat-list-item href="..." [activated]="link.isActive">{{ link }}</a>\n' +
    '  }\n' +
    '</mat-nav-list>\n';

  c4 = '\n' +
    '<mat-nav-list>\n' +
    '  @for (link of links; track link) {\n' +
    '    <mat-list-item [activated]="link.isActive">\n' +
    '       <a matListItemTitle href="...">{{ link }}</a>\n' +
    '       <button mat-icon-button (click)="showInfo(link)" matListItemMeta>\n' +
    '          <mat-icon>info</mat-icon>\n' +
    '       </button>\n' +
    '    </mat-list-item>\n' +
    '  }\n' +
    '</mat-nav-list>\n';

  c5 = '\n' +
    '<mat-action-list>\n' +
    '  <button mat-list-item (click)="save()">Save</button>\n' +
    '  <button mat-list-item (click)="undo()">Undo</button>\n' +
    '</mat-action-list>\n';

  c6 = '\n' +
    '<!-- two line list -->\n' +
    '<mat-list>\n' +
    '  @for (message of messages; track message) {\n' +
    '    <mat-list-item>\n' +
    '      <h3 matListItemTitle>{{message.from}}</h3>\n' +
    '      <p matListItemLine>\n' +
    '        <span>{{message.subject}}</span>\n' +
    '        <span class="demo-2"> -- {{message.content}}</span>\n' +
    '      </p>\n' +
    '    </mat-list-item>\n' +
    '  }\n' +
    '</mat-list>\n' +
    ' \n' +
    '<!-- three line list -->\n' +
    '<mat-list>\n' +
    '  @for (message of messages; track message) {\n' +
    '    <mat-list-item>\n' +
    '      <h3 matListItemTitle>{{message.from}}</h3>\n' +
    '      <p matListItemLine>{{message.subject}}</p>\n' +
    '      <p matListItemLine class="demo-2">{{message.content}}</p>\n' +
    '    </mat-list-item>\n' +
    '  }\n' +
    '</mat-list>\n';

  c7 = '\n' +
    '<mat-list>\n' +
    '  @for (message of messages; track message) {\n' +
    '    <mat-list-item>\n' +
    '      <mat-icon matListItemIcon>folder</mat-icon>\n' +
    '      <h3 matListItemTitle>{{message.from}}</h3>\n' +
    '      <p matListItemLine>\n' +
    '        <span>{{message.subject}}</span>\n' +
    '        <span class="demo-2"> -- {{message.content}}</span>\n' +
    '      </p>\n' +
    '    </mat-list-item>\n' +
    '  }\n' +
    '</mat-list>\n';

  c8 = '\n' +
    '<mat-list>\n' +
    '  @for (message of messages; track message) {\n' +
    '    <mat-list-item>\n' +
    '      <img matListItemAvatar src="..." alt="...">\n' +
    '      <h3 matListItemTitle>{{message.from}}</h3>\n' +
    '      <p matListItemLine>\n' +
    '        <span>{{message.subject}}</span>\n' +
    '        <span class="demo-2"> -- {{message.content}}</span>\n' +
    '      </p>\n' +
    '    </mat-list-item>\n' +
    '  }\n' +
    '</mat-list>\n';

  c9 = '\n' +
    '<mat-list>\n' +
    '  <h3 matSubheader>Folders</h3>\n' +
    '  @for (folder of folders; track folder) {\n' +
    '    <mat-list-item>\n' +
    '       <mat-icon matListIcon>folder</mat-icon>\n' +
    '       <h4 matListItemTitle>{{folder.name}}</h4>\n' +
    '       <p matListItemLine class="demo-2"> {{folder.updated}} </p>\n' +
    '    </mat-list-item>\n' +
    '  }\n' +
    '  <mat-divider></mat-divider>\n' +
    '  <h3 matSubheader>Notes</h3>\n' +
    '  @for (note of notes; track note) {\n' +
    '    <mat-list-item>\n' +
    '       <mat-icon matListIcon>note</mat-icon>\n' +
    '       <h4 matListItemTitle>{{note.name}}</h4>\n' +
    '       <p matListItemLine class="demo-2"> {{note.updated}} </p>\n' +
    '    </mat-list-item>\n' +
    '  }\n' +
    '</mat-list>\n';

  code1 = '\n' +
    "import {Component} from '@angular/core';\n" +
    "import {MatListModule} from '@angular/material/list';\n" +
    "\n" +
    "@Component({\n" +
    "  selector: 'list-overview-example',\n" +
    "  templateUrl: 'list-overview-example.html',\n" +
    "  standalone: true,\n" +
    "  imports: [MatListModule],\n" +
    "})\n" +
    "export class ListOverviewExample {}\n";

  code2 = '\n' +
    '<mat-list role="list">\n' +
    '  <mat-list-item role="listitem">Item 1</mat-list-item>\n' +
    '  <mat-list-item role="listitem">Item 2</mat-list-item>\n' +
    '  <mat-list-item role="listitem">Item 3</mat-list-item>\n' +
    '</mat-list>\n';

  code3 = '\n' +
    "import {Component} from '@angular/core';\n" +
    "import {MatListModule} from '@angular/material/list';\n" +
    "\n" +
    "@Component({\n" +
    "  selector: 'list-selection-example',\n" +
    "  templateUrl: 'list-selection-example.html',\n" +
    "  standalone: true,\n" +
    "  imports: [MatListModule],\n" +
    "})\n" +
    "export class ListSelectionExample {\n" +
    "  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];\n" +
    "}\n";

  code4 = '\n' +
    '<mat-selection-list #shoes>\n' +
    '  @for (shoe of typesOfShoes; track shoe) {\n' +
    '    <mat-list-option>{{shoe}}</mat-list-option>\n' +
    '  }\n' +
    '</mat-selection-list>\n' +
    '\n' +
    '<p>\n' +
    '  Options selected: {{shoes.selectedOptions.selected.length}}\n' +
    '</p>\n';

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}

