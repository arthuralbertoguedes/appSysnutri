import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../../app/global/api';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  constructor(public http: HttpClient) {
   
  }

  public verificarInformacoesPaciente(login: string, senha: string): Observable<Object>{
    console.log(`${api}logar/autenticar`);
    return this.http.post(`${api}logar/autenticar`, {usuario: login, senha: senha, tipo: 2});
  }
}
