import { Categoria } from "../../categorias/models/categoria";
import { Tema } from "./tema";

export type Nota = {
  id?: number;
  titulo: string;
  conteudo: string;
  tema: Tema;

  categoriaId: number;
  categoria?: Categoria;

  arquivada: boolean;
};