import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accessibility',
  standalone: true,
  imports: [MatCard],
  templateUrl: './accessibility.component.html',
  styleUrl: './accessibility.component.scss',
  host: {
    // Sets the role for this component to "progressbar"
    role: 'progressbar',

    // Sets the minimum and maximum values for the progressbar role.
    'aria-valuemin': '0',
    'aria-valuemax': '100',

    // Binding that updates the current value of the progressbar.
    '[attr.aria-valuenow]': 'value',
  },
})
export class AccessibilityComponent {
  code1 = `<button [attr.aria-label]="myActionLabel">…</button>`;
  code2 = `<button aria-label="Save document">…</button>`;

  code3 =
    `import {Component, Input} from '@angular/core';

/**
 * Example progressbar component.
 */
@Component({
  standalone: true,
  selector: 'app-example-progressbar',
  template: '<div class="progress mt-2">
                <div class="progress-bar" [style.width.%]="progress"></div>
             </div>',
  styleUrls: ['./progress-bar.component.css'],
  host: {
    // Sets the role for this component to \"progressbar\"
    role: 'progressbar',

    // Sets the minimum and maximum values for the progressbar role.
    'aria-valuemin': '0',
    'aria-valuemax': '100',

    // Binding that updates the current value of the progressbar.
    '[attr.aria-valuenow]': 'value',
  },
})
export class ExampleProgressbarComponent {
  /** Current value of the progressbar. */
  @Input() value = 0;
}
`;

  code4 =
    `<label for=\"progress-value\">
  Enter an example progress value
  <input id=\"progress-value\" type=\"number\" min=\"0\" max=\"100\"
      [value]=\"progress\" (input)=\"setProgress($event)\">
</label>

<!-- The user of the progressbar sets an aria-label to communicate what the progress means. -->
<app-example-progressbar [value]=\"progress\" aria-label=\"Example of a progress bar\">
</app-example-progressbar>
`;

  code5 =
    `router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
  const mainHeader = document.querySelector('#main-content-header')
  if (mainHeader) {
    mainHeader.focus();
  }
});
`

  code6 = `<nav>
    <a routerLink="home" routerLinkActive="active-page" ariaCurrentWhenActive="page">
        Home
    </a>
    <a routerLink="about" routerLinkActive="active-page" ariaCurrentWhenActive="page">
        About
    </a>
    <a routerLink="shop" routerLinkActive="active-page" ariaCurrentWhenActive="page">
        Shop
    </a>
</nav>
`

  constructor(
    private router: Router
  ) { }

  value = 0;

  progress !: number;

  setProgress(event) {
    this.progress = event.target.value;
  }
}
