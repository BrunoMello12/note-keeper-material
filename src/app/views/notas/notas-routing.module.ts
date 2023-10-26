import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { ListarNotasComponent } from './listar-notas/listar-notas.component';
import { NotasService } from './services/notas.service';

const formsNotaResolver = (route: ActivatedRouteSnapshot) => {
  const id = parseInt(route.paramMap.get('id')!);
  return inject(NotasService).selecionarPorId(id);
};
const listarNotasResolver = () => {
  return inject(NotasService).selecionarTodos();
}

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full',
  },
  {
    path: 'listar',
    component: ListarNotasComponent,
    resolve: { notas: listarNotasResolver },
  },
  // {
  //   path: 'inserir',
  //   component: InserirCategoriaComponent,
  // },
  // {
  //   path: 'editar/:id',
  //   component: EditarCategoriaComponent,
  //   resolve: { categoria: formsCategoriaResolver },
  // },
  // {
  //   path: 'excluir/:id',
  //   component: ExcluirCategoriaComponent,
  //   resolve: { categoria: formsCategoriaResolver },
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotasRoutingModule { }
