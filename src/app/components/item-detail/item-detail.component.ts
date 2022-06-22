import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Usuário } from 'src/app/Usuário';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  usuario? : Usuário;

  constructor( private listService: ListService, private  route: ActivatedRoute) {
   this.getUsuario();
  }

      ngOnInit(): void {  
      }

      getUsuario(){
      const cpf = Number(this.route.snapshot.paramMap.get("cpf"))
      this.listService.getItem(cpf).subscribe((usuario) => (this.usuario = usuario));
    }
   }
