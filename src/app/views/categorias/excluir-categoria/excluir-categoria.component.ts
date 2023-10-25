import { Component, OnInit } from '@angular/core';
import { Categoria } from '../models/categoria';
import { Observable, map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from '../services/categorias.service';

@Component({
  selector: 'app-excluir-categoria',
  templateUrl: './excluir-categoria.component.html',
  styleUrls: ['./excluir-categoria.component.scss'],
})
export class ExcluirCategoriaComponent implements OnInit {
  categoria$?: Observable<Categoria>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoriasService: CategoriasService
  ) {}

  ngOnInit(): void {
    this.categoria$ = this.route.data.pipe(map((res) => res['categoria']));
  }

  confirmar(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.categoriasService.excluir(id).subscribe({
      next: (res) => this.processarSucesso(res),
      error: (err) => this.processarFalha(err),
    });
  }

  processarSucesso(res: Categoria) {
    this.router.navigate(['/categorias/listar']);
  }

  processarFalha(err: any) {
    console.log(err);
  }
}
