import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from '../models/categoria';

@Injectable()
export class CategoriasService {
  private API_URL = `${environment.API_URL}/categorias`;

  constructor(private http: HttpClient) {}

  criar(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.API_URL, categoria);
  }

  editar(id: number, categoria: Categoria): Observable<Categoria> {
    const url = `${this.API_URL}/${id}`;

    return this.http.put<Categoria>(url, categoria);
  }

  excluir(id: number): Observable<any> {
    const url = `${this.API_URL}/${id}`;

    return this.http.delete<Categoria>(url);
  }

  selecionarPorId(id: number): Observable<Categoria> {
    const url = `${this.API_URL}/${id}`;

    return this.http.get<Categoria>(url);
  }

  selecionarTodos(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.API_URL);
  }
}