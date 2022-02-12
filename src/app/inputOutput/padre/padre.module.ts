
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PadreRoutingModule } from './padre-routing.module';
import { PadreComponent } from './padre.component';
import { HijoComponent } from '../hijo/hijo.component';


@NgModule({
  declarations: [
    PadreComponent,
    HijoComponent
  ],
  imports: [
    CommonModule,
    PadreRoutingModule,
  ],
  exports: [
    PadreComponent
  ]
})
export class PadreModule { }
