import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetGetComponent } from './set-get.component';

const routes: Routes = [{ path: '', component: SetGetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetGetRoutingModule { }
