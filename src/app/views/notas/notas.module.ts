import { NgModule } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import { NotasRoutingModule } from './notas-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSelectModule} from '@angular/material/select';
import { ListarNotasComponent } from './listar-notas/listar-notas.component';
import { NotasService } from './services/notas.service';
import { InserirNotaComponent } from './inserir-nota/inserir-nota.component';
import { CategoriasModule } from '../categorias/categorias.module';
import { EditarNotaComponent } from './editar-nota/editar-nota.component';
import { ExcluirNotaComponent } from './excluir-nota/excluir-nota.component';



@NgModule({
  declarations: [
    ListarNotasComponent,
    InserirNotaComponent,
    EditarNotaComponent,
    ExcluirNotaComponent
  ],
  imports: [
    NotasRoutingModule,
    CategoriasModule,
    SharedModule,
    MatRadioModule,
    MatSelectModule,
  ],
  providers: [NotasService]
})
export class NotasModule { }
