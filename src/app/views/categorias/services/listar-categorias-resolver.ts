import { inject } from "@angular/core";
import { CategoriasService } from "./categorias.service";

export const listarCategoriasResolver = () => {
  return inject(CategoriasService).selecionarTodos();
}