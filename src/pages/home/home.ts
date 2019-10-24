import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomeProvider } from '../../providers/home/home';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public usuario_id: number;
  public usuario_nome: string;
  public token: string;
  public paciente_id: number;

  constructor(public navCtrl: NavController,
              public storage: Storage,
              public _homeProvider: HomeProvider) {
  }
/* Bom para ser usado quando iniciar a página */
  ionViewDidLoad(): void{
   
    this.storage.get('usuario_id').then(
         (id) => {
            this.usuario_id = id;
            this.storage.get('token').then((token) =>
              { 
                this.token = token;
                this.buscarPaciente();
              }
          );
         }
      );
    
    this.storage.get('usuario_nome').then((nome) => this.usuario_nome = nome);
  
    
  }

  navegar(pagina: string): void{
    this.navCtrl.push(pagina);
  }
  //busca informações do paciente, inclusive o id do nutricionista que o cadastrou
  buscarPaciente(): void{
    this._homeProvider.buscarPaciente(this.usuario_id, this.token)
      .subscribe(
          (res: any) => {
            this.paciente_id = res.id;
            this.storage.set('paciente_id', res.id);
            this.buscarPlanoAlimentarPaciente(res.id);
          }
          
      )
  }

  buscarPlanoAlimentarPaciente(id: number): void{
    this._homeProvider.buscarPlanoAlimentar(id, this.token)
      .subscribe(
          res => {
            console.log(res);
          }
      )
  }


  
}
