import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../../app/global/api';
import { Observable } from 'rxjs/Observable';
import { Mensagem } from '../../models/mensagem.model';

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

  public buscarMensagens(idPaciente: number, idNutricionista: number, token: string): Observable<Mensagem[]>{
    return this.http.get<Mensagem[]>(`${api}/mensagem/buscarMensagens/${idPaciente}/${idNutricionista}`, {headers: {'Authorization': 'Bearer ' + token}});
    
  }

  salvarMensagem(mensagem: Mensagem, token: string): any{
    return this.http.post(`${api}/mensagem/salvar`, mensagem, {headers: {'Authorization': 'Bearer ' + token}});
 
  }
}
