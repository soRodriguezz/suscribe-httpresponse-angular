import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'http-client',
    loadChildren: () =>
      import('./http-client/http-client.module').then(
        (m) => m.HttpClientModule
      ),
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('./forms/forms.module').then((m) => m.FormsModule),
  },
  {
    path: 'set-get',
    loadChildren: () =>
      import('./set-get/set-get.module').then((m) => m.SetGetModule),
  },
  {
    path: 'output-input',
    loadChildren: () =>
      import('./inputOutput/padre/padre.module').then((m) => m.PadreModule),
  },
  {
    path: '**',
    redirectTo: 'forms',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
