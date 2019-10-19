import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../../app/global/api';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the HomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeProvider {

  constructor(public http: HttpClient) {

  }
  //BUSCAR PACIENTE E DEPOIS UTILIZAR O ID DO PACIENTE PRA TRAZER O PLANO ALIMENTRW
  buscarPaciente(id: number, token: string): Observable<any>{
    return this.http.get(`${api}/paciente/listarPorUsuarioId/${id}`, {headers: {'Authorization': 'Bearer ' + token}});
  }

  buscarPlanoAlimentar(id: number, token: string): Observable<any>{
    return this.http.get(`${api}/alimento/planoAlimentar/buscar/${id}`, {headers: {'Authorization': 'Bearer ' + token}});
  }

  buscarMedidas(id: number, token: string): Observable<any>{
    return this.http.get(`${api}/antropometria/${id}`, {headers: {'Authorization': 'Bearer ' + token}});

  }
}
