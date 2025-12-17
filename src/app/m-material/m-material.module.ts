import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MMaterialRoutingModule } from './m-material-routing.module';


@NgModule({
  declarations: [
    //standalone true
  ],
  imports: [
    CommonModule,
    MMaterialRoutingModule
  ]
})
export class MMaterialModule { }
