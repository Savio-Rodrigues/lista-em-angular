import { Injectable } from '@angular/core';
import { Usuário } from '../Usuário';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }
  remove(usuarios : Usuário[] , usuario:Usuário){
    return usuarios.filter((a)=>usuario.name !== a.name);
}
}
