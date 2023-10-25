import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from '../services/categorias.service';
import { Categoria } from '../models/categoria';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.scss']
})
export class EditarCategoriaComponent implements OnInit{
  form?: FormGroup;

  constructor(
    private fb: FormBuilder,
    private categoriasService: CategoriasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      titulo: [''],
    });

    const categoria = this.route.snapshot.data['categoria'];

    this.form.patchValue(categoria);
  }

  gravar(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.categoriasService.editar(id, this.form?.value).subscribe({
      next: (res) => this.processarSucesso(res),
      error: (err) => this.processarFalha(err),
    });
  }

  processarSucesso(res: Categoria) {
    this.router.navigate(['/categorias/listar']);
  }

  processarFalha(err: any) {
    console.error(err);
  }
}
