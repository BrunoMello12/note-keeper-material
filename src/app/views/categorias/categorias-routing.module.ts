import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { ListarCategoriasComponent } from './listar-categorias/listar-categorias.component';
import { InserirCategoriaComponent } from './inserir-categoria/inserir-categoria.component';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';
import { CategoriasService } from './services/categorias.service';
import { ExcluirCategoriaComponent } from './excluir-categoria/excluir-categoria.component';
import { listarCategoriasResolver } from './services/listar-categorias-resolver';

const formsCategoriaResolver = (route: ActivatedRouteSnapshot) => {
  const id = parseInt(route.paramMap.get('id')!);
  return inject(CategoriasService).selecionarPorId(id);
};


const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full',
  },
  {
    path: 'listar',
    component: ListarCategoriasComponent,
    resolve: { categorias: listarCategoriasResolver },
  },
  {
    path: 'inserir',
    component: InserirCategoriaComponent,
  },
  {
    path: 'editar/:id',
    component: EditarCategoriaComponent,
    resolve: { categoria: formsCategoriaResolver },
  },
  {
    path: 'excluir/:id',
    component: ExcluirCategoriaComponent,
    resolve: { categoria: formsCategoriaResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasRoutingModule {}
