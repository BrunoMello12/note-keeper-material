import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriasService } from '../services/categorias.service';
import { Router } from '@angular/router';
import { Categoria } from '../models/categoria';
import { NotificationService } from 'src/app/core/notification/services/notification.service';

@Component({
  selector: 'app-inserir-categoria',
  templateUrl: './inserir-categoria.component.html',
  styleUrls: ['./inserir-categoria.component.scss'],
})
export class InserirCategoriaComponent implements OnInit {
  form?: FormGroup;

  constructor(
    private fb: FormBuilder,
    private categoriasService: CategoriasService,
    private router: Router,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      titulo: [''],
    });
  }

  gravar(): void {
    this.categoriasService.criar(this.form?.value).subscribe({
      next: (res) => this.processarSucesso(res),
      error: (err) => this.processarFalha(err),
    });
  }

  processarSucesso(res: Categoria) {
    this.notification.sucesso(
      `A categoria ${res.titulo} foi cadastrada com sucesso!`
    );

    this.router.navigate(['/categorias/listar']);
  }

  processarFalha(err: any) {
    this.notification.erro(
      err.mensagem
    );
  }
}
