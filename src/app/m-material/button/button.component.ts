import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  standalone: true,
  imports: [
    MaterialModule
  ]
})
export class ButtonComponent {
  code1 = '\n' +
    '<section>\n' +
    '  <div class="example-label">Basic</div>\n' +
    '  <div class="example-button-row">\n' +
    '    <button mat-button>Basic</button>\n' +
    '    <button mat-button color="primary">Primary</button>\n' +
    '    <button mat-button color="accent">Accent</button>\n' +
    '    <button mat-button color="warn">Warn</button>\n' +
    '    <button mat-button disabled>Disabled</button>\n' +
    '    <a mat-button href="https://www.google.com/" target="_blank">Link</a>\n' +
    '  </div>\n' +
    '</section>\n' +
    '<mat-divider></mat-divider>\n' +
    '<section>\n' +
    '  <div class="example-label">Raised</div>\n' +
    '  <div class="example-button-row">\n' +
    '    <button mat-raised-button>Basic</button>\n' +
    '    <button mat-raised-button color="primary">Primary</button>\n' +
    '    <button mat-raised-button color="accent">Accent</button>\n' +
    '    <button mat-raised-button color="warn">Warn</button>\n' +
    '    <button mat-raised-button disabled>Disabled</button>\n' +
    '    <a mat-raised-button href="https://www.google.com/" target="_blank">Link</a>\n' +
    '  </div>\n' +
    '</section>\n' +
    '<mat-divider></mat-divider>\n' +
    '<section>\n' +
    '  <div class="example-label">Stroked</div>\n' +
    '  <div class="example-button-row">\n' +
    '    <button mat-stroked-button>Basic</button>\n' +
    '    <button mat-stroked-button color="primary">Primary</button>\n' +
    '    <button mat-stroked-button color="accent">Accent</button>\n' +
    '    <button mat-stroked-button color="warn">Warn</button>\n' +
    '    <button mat-stroked-button disabled>Disabled</button>\n' +
    '    <a mat-stroked-button href="https://www.google.com/" target="_blank">Link</a>\n' +
    '  </div>\n' +
    '</section>\n' +
    '<mat-divider></mat-divider>\n' +
    '<section>\n' +
    '  <div class="example-label">Flat</div>\n' +
    '  <div class="example-button-row">\n' +
    '    <button mat-flat-button>Basic</button>\n' +
    '    <button mat-flat-button color="primary">Primary</button>\n' +
    '    <button mat-flat-button color="accent">Accent</button>\n' +
    '    <button mat-flat-button color="warn">Warn</button>\n' +
    '    <button mat-flat-button disabled>Disabled</button>\n' +
    '    <a mat-flat-button href="https://www.google.com/" target="_blank">Link</a>\n' +
    '  </div>\n' +
    '</section>\n' +
    '<mat-divider></mat-divider>\n' +
    '<section>\n' +
    '  <div class="example-label">Icon</div>\n' +
    '  <div class="example-button-row">\n' +
    '    <div class="example-flex-container">\n' +
    '      <button mat-icon-button aria-label="Example icon button with a vertical three dot icon">\n' +
    '        <mat-icon>more_vert</mat-icon>\n' +
    '      </button>\n' +
    '      <button mat-icon-button color="primary" aria-label="Example icon button with a home icon">\n' +
    '        <mat-icon>home</mat-icon>\n' +
    '      </button>\n' +
    '      <button mat-icon-button color="accent" aria-label="Example icon button with a menu icon">\n' +
    '        <mat-icon>menu</mat-icon>\n' +
    '      </button>\n' +
    '      <button mat-icon-button color="warn" aria-label="Example icon button with a heart icon">\n' +
    '        <mat-icon>favorite</mat-icon>\n' +
    '      </button>\n' +
    '      <button mat-icon-button disabled aria-label="Example icon button with a open in new tab icon">\n' +
    '        <mat-icon>open_in_new</mat-icon>\n' +
    '      </button>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</section>\n' +
    '<mat-divider></mat-divider>\n' +
    '<section>\n' +
    '  <div class="example-label">FAB</div>\n' +
    '  <div class="example-button-row">\n' +
    '    <div class="example-flex-container">\n' +
    '      <div class="example-button-container">\n' +
    '        <button mat-fab color="primary" aria-label="Example icon button with a delete icon">\n' +
    '          <mat-icon>delete</mat-icon>\n' +
    '        </button>\n' +
    '      </div>\n' +
    '      <div class="example-button-container">\n' +
    '        <button mat-fab color="accent" aria-label="Example icon button with a bookmark icon">\n' +
    '          <mat-icon>bookmark</mat-icon>\n' +
    '        </button>\n' +
    '      </div>\n' +
    '      <div class="example-button-container">\n' +
    '        <button mat-fab color="warn" aria-label="Example icon button with a home icon">\n' +
    '          <mat-icon>home</mat-icon>\n' +
    '        </button>\n' +
    '      </div>\n' +
    '      <div class="example-button-container">\n' +
    '        <button mat-fab disabled aria-label="Example icon button with a heart icon">\n' +
    '          <mat-icon>favorite</mat-icon>\n' +
    '        </button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</section>\n' +
    '<mat-divider></mat-divider>\n' +
    '<section>\n' +
    '  <div class="example-label">Mini FAB</div>\n' +
    '  <div class="example-button-row">\n' +
    '    <div class="example-flex-container">\n' +
    '      <div class="example-button-container">\n' +
    '        <button mat-mini-fab color="primary" aria-label="Example icon button with a menu icon">\n' +
    '          <mat-icon>menu</mat-icon>\n' +
    '        </button>\n' +
    '      </div>\n' +
    '      <div class="example-button-container">\n' +
    '        <button mat-mini-fab color="accent" aria-label="Example icon button with a plus one icon">\n' +
    '         <mat-icon>plus_one</mat-icon>\n' +
    '       </button>\n' +
    '      </div>\n' +
    '      <div class="example-button-container">\n' +
    '        <button mat-mini-fab color="warn" aria-label="Example icon button with a filter list icon">\n' +
    '          <mat-icon>filter_list</mat-icon>\n' +
    '        </button>\n' +
    '      </div>\n' +
    '      <div class="example-button-container">\n' +
    '        <button mat-mini-fab disabled aria-label="Example icon button with a home icon">\n' +
    '          <mat-icon>home</mat-icon>\n' +
    '        </button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</section>\n';

  code2 = '\n' +
    "<button mat-fab extended>\n" +
    "  <mat-icon>home</mat-icon>Home\n" +
    "</button>\n";

  code3 = '\n' +
    "import {Component} from '@angular/core';\n" +
    "import {MatButton} from '@angular/material/button';\n" +
    "import {MatTooltip} from '@angular/material/tooltip';\n" +

    "@Component({\n" +
    "  selector: 'button-disabled-interactive-example',\n" +
    "  templateUrl: 'button-disabled-interactive-example.html',\n" +
    "  styleUrl: 'button-disabled-interactive-example.css',\n" +
    "  standalone: true,\n" +
    "  imports: [MatButton, MatTooltip],\n" +
    "})\n" +
    "export class ButtonDisabledInteractiveExample {}\n";

  code4 = '\n' +
    '<button\n' +
    ' mat-raised-button\n' +
    ' disabled\n' +
    ' disabledInteractive\n' +
    ' matTooltip="This is a tooltip!">Disabled button allowing interactivity</button>\n' +
    '<button\n' +
    ' mat-raised-button\n' +
    ' disabled\n' +
    ' matTooltip="This is a tooltip!">Default disabled button</button>\n';


}
