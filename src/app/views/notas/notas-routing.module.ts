import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { ListarNotasComponent } from './listar-notas/listar-notas.component';
import { NotasService } from './services/notas.service';
import { InserirNotaComponent } from './inserir-nota/inserir-nota.component';
import { listarCategoriasResolver } from '../categorias/services/listar-categorias-resolver';
import { EditarNotaComponent } from './editar-nota/editar-nota.component';
import { ExcluirNotaComponent } from './excluir-nota/excluir-nota.component';

const formsNotaResolver = (route: ActivatedRouteSnapshot) => {
  const id = parseInt(route.paramMap.get('id')!);
  return inject(NotasService).selecionarPorId(id);
};
const listarNotasResolver = () => {
  return inject(NotasService).selecionarTodos();
};

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
  {
    path: 'inserir',
    component: InserirNotaComponent,
    resolve: { categorias: listarCategoriasResolver },
  },
  {
    path: 'editar/:id',
    component: EditarNotaComponent,
    resolve: {
      nota: formsNotaResolver,
      categorias: listarCategoriasResolver
    },
  },
  {
    path: 'excluir/:id',
    component: ExcluirNotaComponent,
    resolve: { nota: formsNotaResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotasRoutingModule {}
