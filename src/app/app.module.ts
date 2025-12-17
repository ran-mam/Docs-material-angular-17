import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { MatButtonModule } from "@angular/material/button";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AAngularModule } from './a-angular/a-angular.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MHomeComponent } from './m-home/m-home.component';
import { MMaterialModule } from './m-material/m-material.module';
import { MMenuComponent } from './m-menu/m-menu.component';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    MMenuComponent,
    MHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MatButtonModule,
    MMaterialModule,
    AAngularModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
