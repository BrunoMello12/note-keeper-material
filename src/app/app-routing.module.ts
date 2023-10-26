import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'categorias',
    loadChildren: () =>
      import('./views/categorias/categorias.module').then(
        (m) => m.CategoriasModule
      ),
  },

  {
    path: 'notas',
    loadChildren: () =>
      import('./views/notas/notas.module').then(
        (m) => m.NotasModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
