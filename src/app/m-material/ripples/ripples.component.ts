import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-ripples',
  templateUrl: './ripples.component.html',
  styleUrl: './ripples.component.scss',
  standalone:true,
  imports :[
    MaterialModule
  ]
})
export class RipplesComponent {
  c1 = `
<div matRipple [matRippleColor]="myColor">
  <ng-content></ng-content>
</div>
  `

  c2 = `
<div>
  <div matRipple [matRippleTrigger]="trigger" class="my-ripple-container">
    <!-- This is the ripple container, but not the trigger element for ripples. -->
  </div>

  <div #trigger></div>
</div>
  `

  c3 = `
  class MyComponent {

    /** Reference to the directive instance of the ripple. */
    @ViewChild(MatRipple) ripple: MatRipple;
  
    /** Shows a centered and persistent ripple. */
    launchRipple() {
      const rippleRef = this.ripple.launch({
        persistent: true,
        centered: true
      });
  
      // Fade out the ripple later.
      rippleRef.fadeOut();
    }
  }
  `

  c4 = `const rippleRef = this.ripple.launch(10, 10, {persistent: true});`

  c5 = `
  const globalRippleConfig: RippleGlobalOptions = {
    disabled: true,
    animation: {
      enterDuration: 300,
      exitDuration: 0
    }
  };
  
  @NgModule({
    providers: [
      {provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig}
    ]
  })
  `

  c6 = `
  const globalRippleConfig: RippleGlobalOptions = {
    disabled: true,
    animation: {
      enterDuration: 0,
      exitDuration: 0
    }
  };
  `

  c7 = `
  const globalRippleConfig: RippleGlobalOptions = {
    terminateOnPointerUp: true
  };
  `

  c8 = `
  @Injectable({providedIn: 'root'})
  export class AppGlobalRippleOptions implements RippleGlobalOptions {
    /** Whether ripples should be disabled globally. */
    disabled: boolean = false;
  }
  `

  c9 = `
  @NgModule({
    providers: [
      {provide: MAT_RIPPLE_GLOBAL_OPTIONS, useExisting: AppGlobalRippleOptions},
    ]
  })
  export class MyModule {...}
  `

  c10 = `
@Component(...)
export class MyComponent {
  constructor(private _appRippleOptions: AppGlobalRippleOptions) {}

  disableRipples() {
    this._appRippleOptions.disabled = true;
  }
}
  `

}
