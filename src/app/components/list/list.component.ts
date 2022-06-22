import { Component, OnInit } from '@angular/core';

import { Usuário } from 'src/app/Usuário';
import { ListService } from 'src/app/services/list.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 usuarios : Usuário[] =[
   {name:'savio', cpf:2423434242},
   {name:'rodrigues',cpf:242343424002},
   {name:'gabriel',cpf:242343424992},
   {name:'diego',cpf:242343424288},
   {name:'elves',cpf:242343424772},
   {name:'alcilene',cpf:242343424552},
   {name:'esther',cpf:24234342423},
   {name:'jaqueline',cpf:242343424323},
   {name:'hennrique',cpf:2423434323242},
 
]
usuarioDetails='';
  constructor( private listService: ListService) { }

  ngOnInit(): void {}

  showUsuario(usuario: Usuário){
    this.usuarioDetails =  `cpf - ${usuario.cpf } `;
  }
  removeUsuario (usuario: Usuário){
    console.log("remover Usuário");
    this.usuarios=this.listService.remove(this.usuarios , usuario);
  }
}
