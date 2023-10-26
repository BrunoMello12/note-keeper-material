import { NgModule } from '@angular/core';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { ListarCategoriasComponent } from './listar-categorias/listar-categorias.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriasService } from './services/categorias.service';
import { InserirCategoriaComponent } from './inserir-categoria/inserir-categoria.component';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';
import { ExcluirCategoriaComponent } from './excluir-categoria/excluir-categoria.component';


@NgModule({
  declarations: [
    ListarCategoriasComponent,
    InserirCategoriaComponent,
    EditarCategoriaComponent,
    ExcluirCategoriaComponent
  ],
  imports: [
    CategoriasRoutingModule,
    SharedModule,
  ],
  providers: [CategoriasService],
})
export class CategoriasModule { }
