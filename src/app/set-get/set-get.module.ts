import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetGetRoutingModule } from './set-get-routing.module';
import { SetGetComponent } from './set-get.component';


@NgModule({
  declarations: [
    SetGetComponent
  ],
  imports: [
    CommonModule,
    SetGetRoutingModule
  ]
})
export class SetGetModule { }
