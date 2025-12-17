import { Component, ViewChild } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  standalone :true,
  imports : [
    MaterialModule,
    FormsModule, MatButtonModule,ReactiveFormsModule
  ]
})
export class SidenavComponent {

  c1 = `
<!-- Creates a layout with a left-positioned sidenav and explicit content. -->
<mat-sidenav-container>
  <mat-sidenav>Start</mat-sidenav>
  <mat-sidenav-content>Main</mat-sidenav-content>
</mat-sidenav-container>
  `

  c2 = `
<!-- Creates a layout with a left and right sidenav and implicit content. -->
  <mat-sidenav-container>
    <mat-sidenav>Start</mat-sidenav>
    <mat-sidenav position="end">End</mat-sidenav>
    <section>Main</section>
  </mat-sidenav-container>
  `

  c3 = `
<!-- Creates an empty sidenav container with no sidenavs and implicit empty content. -->
<mat-sidenav-container></mat-sidenav-container>
  `

  c4 = `
<!-- Invalid because there are two 'start' position sidenavs. -->
  <mat-sidenav-container>
    <mat-sidenav>Start</mat-sidenav>
    <mat-sidenav position="start">Start 2</mat-sidenav>
  </mat-sidenav-container>
  `

  c5 = `
<!-- Invalid because there are multiple '<mat-sidenav-content>' elements. -->
<mat-sidenav-container>
  <mat-sidenav-content>Main</mat-sidenav-content>
  <mat-sidenav-content>Main 2</mat-sidenav-content>
</mat-sidenav-container>
  `

  c6 = `
<!-- Invalid because the '<mat-sidenav>' is outside of the '<mat-sidenav-container>'. -->
<mat-sidenav-container></mat-sidenav-container>
<mat-sidenav></mat-sidenav>
  `

  code1 = `
  import {Component} from '@angular/core';
  import {MatSidenavModule} from '@angular/material/sidenav';
  
  /** @title Basic sidenav */
  @Component({
    selector: 'sidenav-overview-example',
    templateUrl: 'sidenav-overview-example.html',
    styleUrl: 'sidenav-overview-example.css',
    standalone: true,
    imports: [MatSidenavModule],
  })
  export class SidenavOverviewExample {
    shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
  }
  
  `

  code2 = `
  @if (shouldRun) {
    <mat-sidenav-container class="example-container">
      <mat-sidenav mode="side" opened>Sidenav content</mat-sidenav>
      <mat-sidenav-content>Main content</mat-sidenav-content>
    </mat-sidenav-container>
  } @else {
    <div>Please open on Stackblitz to see result</div>
  }  
  `

  code3 = `
  import {Component} from '@angular/core';
  import {MatSidenavModule} from '@angular/material/sidenav';
  
  /** @title Basic drawer */
  @Component({
    selector: 'sidenav-drawer-overview-example',
    templateUrl: 'sidenav-drawer-overview-example.html',
    styleUrl: 'sidenav-drawer-overview-example.css',
    standalone: true,
    imports: [MatSidenavModule],
  })
  export class SidenavDrawerOverviewExample {}
  `

  code4 =`
<mat-drawer-container class="example-container">
  <mat-drawer mode="side" opened>Drawer content</mat-drawer>
  <mat-drawer-content>Main content</mat-drawer-content>
</mat-drawer-container>
  `

  code5 = `
import {Component} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

/** @title Implicit main content with two sidenavs */
@Component({
  selector: 'sidenav-position-example',
  templateUrl: 'sidenav-position-example.html',
  styleUrl: 'sidenav-position-example.css',
  standalone: true,
  imports: [MatSidenavModule],
})
export class SidenavPositionExample {
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}

  `

  code6 =`
  @if (shouldRun) {
    <mat-sidenav-container class="example-container">
      <mat-sidenav opened mode="side">Start content</mat-sidenav>
      <mat-sidenav opened mode="side" position="end">End content</mat-sidenav>
      Implicit main content
    </mat-sidenav-container>
  } @else {
    <div>Please open on Stackblitz to see result</div>
  }  
  `

  code7 = `
import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';

/** @title Sidenav open & close behavior */
@Component({
  selector: 'sidenav-open-close-example',
  templateUrl: 'sidenav-open-close-example.html',
  styleUrl: 'sidenav-open-close-example.css',
  standalone: true,
  imports: [MatSidenavModule, MatCheckboxModule, FormsModule, MatButtonModule],
})
export class SidenavOpenCloseExample {
  events: string[] = [];
  opened: boolean;

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}
  `

  code8 = `
  @if (shouldRun) {
    <mat-sidenav-container class="example-container">
      <mat-sidenav #sidenav mode="side" [(opened)]="opened" (opened)="events.push('open!')"
                  (closed)="events.push('close!')">
        Sidenav content
      </mat-sidenav>
  
      <mat-sidenav-content>
        <p><mat-checkbox [(ngModel)]="opened">sidenav.opened</mat-checkbox></p>
        <p><button mat-button (click)="sidenav.toggle()">sidenav.toggle()</button></p>
        <p>Events:</p>
        <div class="example-events">
          @for (e of events; track e) {
            <div>{{e}}</div>
          }
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  } @else {
    <div>Please open on Stackblitz to see result</div>
  }
  `

  code9 = `
import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDrawerMode, MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';

/** @title Sidenav with configurable mode */
@Component({
  selector: 'sidenav-mode-example',
  templateUrl: 'sidenav-mode-example.html',
  styleUrl: 'sidenav-mode-example.css',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatRadioModule, FormsModule, ReactiveFormsModule],
})
export class SidenavModeExample {
  mode = new FormControl('over' as MatDrawerMode);
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}
  `

  code10 = `
  @if (shouldRun) {
    <mat-sidenav-container class="example-container">
      <mat-sidenav #sidenav [mode]="mode.value || 'over'">
        <p><button mat-button (click)="sidenav.toggle()">Toggle</button></p>
        <p>
          <mat-radio-group class="example-radio-group" [formControl]="mode">
            <label>Mode:</label>
            <mat-radio-button value="over">Over</mat-radio-button>
            <mat-radio-button value="side">Side</mat-radio-button>
            <mat-radio-button value="push">Push</mat-radio-button>
          </mat-radio-group>
        </p>
      </mat-sidenav>
  
      <mat-sidenav-content>
        <p><button mat-button (click)="sidenav.toggle()">Toggle</button></p>
        <p>
          <mat-radio-group class="example-radio-group" [formControl]="mode">
            <label>Mode:</label>
            <mat-radio-button value="over">Over</mat-radio-button>
            <mat-radio-button value="side">Side</mat-radio-button>
            <mat-radio-button value="push">Push</mat-radio-button>
          </mat-radio-group>
        </p>
      </mat-sidenav-content>
    </mat-sidenav-container>
  } @else {
    <div>Please open on Stackblitz to see result</div>
  }  
  `

  code11 = `
import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';

/** @title Drawer with explicit backdrop setting */
@Component({
  selector: 'sidenav-backdrop-example',
  templateUrl: 'sidenav-backdrop-example.html',
  styleUrl: 'sidenav-backdrop-example.css',
  standalone: true,
  imports: [MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule],
})
export class SidenavBackdropExample {}
  `

  code12 = `
<mat-drawer-container class="example-container" [hasBackdrop]="hasBackdrop.value">
  <mat-drawer #drawer [mode]="mode.value">I'm a drawer</mat-drawer>
  <mat-drawer-content>
    <mat-form-field>
      <mat-label>Sidenav mode</mat-label>
      <mat-select #mode value="side">
        <mat-option value="side">Side</mat-option>
        <mat-option value="over">Over</mat-option>
        <mat-option value="push">Push</mat-option>
      </mat-select>
    </mat-form-field>
    <mat-form-field>
      <mat-label>Has backdrop</mat-label>
      <mat-select #hasBackdrop>
        <mat-option>Unset</mat-option>
        <mat-option [value]="true">True</mat-option>
        <mat-option [value]="false">False</mat-option>
      </mat-select>
    </mat-form-field>
    <button mat-raised-button (click)="drawer.toggle()">Toggle drawer</button>
  </mat-drawer-content>
</mat-drawer-container>
  `

  code13 = `
  @if (shouldRun) {
    <mat-sidenav-container
        class="example-container" (backdropClick)="close('backdrop')">
      <mat-sidenav #sidenav (keydown.escape)="close('escape')" disableClose>
        <p><button mat-button (click)="close('toggle button')">Toggle</button></p>
      </mat-sidenav>
  
      <mat-sidenav-content>
        <p><button mat-button (click)="sidenav.open()">Open</button></p>
        <p>Closed due to: {{reason}}</p>
      </mat-sidenav-content>
    </mat-sidenav-container>
  } @else {
    <div>Please open on Stackblitz to see result</div>
  }  
  `

  code14 = `
import {Component, ViewChild} from '@angular/core';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';

/** @title Sidenav with custom escape and backdrop click behavior */
@Component({
  selector: 'sidenav-disable-close-example',
  templateUrl: 'sidenav-disable-close-example.html',
  styleUrl: 'sidenav-disable-close-example.css',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule],
})
export class SidenavDisableCloseExample {
  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}
  `

  code15 = `
import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'sidenav-autosize-example',
  templateUrl: 'sidenav-autosize-example.html',
  styleUrl: 'sidenav-autosize-example.css',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule],
})
export class SidenavAutosizeExample {
  showFiller = false;
}

  `

  code16 = `
<mat-drawer-container class="example-container" autosize>
  <mat-drawer #drawer class="example-sidenav" mode="side">
    <p>Auto-resizing sidenav</p>
    @if (showFiller) {
      <p>Lorem, ipsum dolor sit amet consectetur.</p>
    }
    <button (click)="showFiller = !showFiller" mat-raised-button>
      Toggle extra text
    </button>
  </mat-drawer>

  <div class="example-sidenav-content">
    <button type="button" mat-button (click)="drawer.toggle()">
      Toggle sidenav
    </button>
  </div>

</mat-drawer-container>
  `

  code17 = `
  import {Component} from '@angular/core';
  import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
  import {MatButtonModule} from '@angular/material/button';
  import {MatFormFieldModule} from '@angular/material/form-field';
  import {MatCheckboxModule} from '@angular/material/checkbox';
  import {MatSidenavModule} from '@angular/material/sidenav';
  import {MatToolbarModule} from '@angular/material/toolbar';
  import {MatInputModule} from '@angular/material/input';
  
  /** @title Fixed sidenav */
  @Component({
    selector: 'sidenav-fixed-example',
    templateUrl: 'sidenav-fixed-example.html',
    styleUrl: 'sidenav-fixed-example.css',
    standalone: true,
    imports: [
      MatToolbarModule,
      MatSidenavModule,
      FormsModule,
      ReactiveFormsModule,
      MatCheckboxModule,
      MatFormFieldModule,
      MatButtonModule,
      MatInputModule,
    ],
  })
  export class SidenavFixedExample {
    options = this._formBuilder.group({
      bottom: 0,
      fixed: false,
      top: 0,
    });
  
    constructor(private _formBuilder: FormBuilder) {}
  
    shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
  }
  `

  code18 = `
  @if (shouldRun) {
    <div class="example-container" [class.example-is-mobile]="mobileQuery.matches">
      <mat-toolbar color="primary" class="example-toolbar">
        <button mat-icon-button (click)="snav.toggle()"><mat-icon>menu</mat-icon></button>
        <h1 class="example-app-name">Responsive App</h1>
      </mat-toolbar>
  
      <mat-sidenav-container class="example-sidenav-container"
                            [style.marginTop.px]="mobileQuery.matches ? 56 : 0">
        <mat-sidenav #snav [mode]="mobileQuery.matches ? 'over' : 'side'"
                    [fixedInViewport]="mobileQuery.matches" fixedTopGap="56">
          <mat-nav-list>
            @for (nav of fillerNav; track nav) {
              <a mat-list-item routerLink=".">{{nav}}</a>
            }
          </mat-nav-list>
        </mat-sidenav>
  
        <mat-sidenav-content>
          @for (content of fillerContent; track content) {
      <p>{{content}}</p>
    }
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  } @else {
    <div>Please open on Stackblitz to see result</div>
  }
  `

  // Basic sidenav
  shouldRun1 = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

  // Basic drawer

  // Implicit main content with two sidenavs
  shouldRun5 = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

  // Sidenav open & close behavior
  events7: string[] = [];
  opened7?: boolean;
  shouldRun7 = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

  // Sidenav with configurable mode
  mode9 = new FormControl('over' as MatDrawerMode);
  shouldRun9 = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

  // Sidenav with custom escape and backdrop click behavior
  @ViewChild('sidenav') sidenav13!: MatSidenav;

  reason13 = '';

  close13(reason: string) {
    this.reason13 = reason;
    this.sidenav13.close();
  }

  shouldRun13 = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

  // Autosize sidenav
  showFiller15 = false;

  // fixed sidenav
  options17 = this._formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
  });

  constructor(private _formBuilder: FormBuilder) {}

  shouldRun17 = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

} 
