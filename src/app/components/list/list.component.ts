import { Component, OnInit } from '@angular/core';

import { Usuário } from 'src/app/Usuário';
import { ListService } from 'src/app/services/list.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  usuarios: Usuário[] = []
  usuarioDetails = '';
  constructor(private listService: ListService) {
    this.getUsuario();
  }

  ngOnInit(): void { }

  showUsuario(usuario: Usuário) {
    this.usuarioDetails = `cpf - ${usuario.cpf} `;
  }
  removeUsuario(usuario: Usuário) {
    console.log("remover Usuário");
    this.usuarios = this.listService.remove(this.usuarios, usuario);
  }
  getUsuario(): void {
    this.listService.getAll().subscribe((usuarios) => (this.usuarios=usuarios));
  }
}
