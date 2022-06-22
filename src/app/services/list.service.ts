import { Injectable } from '@angular/core';
import { Usuário } from '../Usuário';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListService {
 private apiUrl =" http://localhost:3000/usuarios"

  constructor( private http: HttpClient) { }
  remove(usuarios : Usuário[] , usuario:Usuário){
    return usuarios.filter((a)=>usuario.name !== a.name);
}
 getAll():Observable<Usuário[]>{
return this.http.get<Usuário[]>(this.apiUrl)
 }
 getItem( cpf : number): Observable<Usuário>{
  return  this.http.get<Usuário>(`${this.apiUrl}/${cpf}`)
 }
}
