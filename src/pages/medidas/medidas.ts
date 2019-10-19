import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomeProvider } from '../../providers/home/home';

@IonicPage()
@Component({
  selector: 'page-medidas',
  templateUrl: 'medidas.html',
})
export class MedidasPage {

  public usuario_id: number;
  public usuario_nome: string;
  public token: string;
  public paciente_id: number;
  public medidas: any[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public storage: Storage,
              public _homeProvider: HomeProvider) {
  }

  ionViewDidLoad() {
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
  }

 //busca informações do paciente, inclusive o id do nutricionista que o cadastrou
 buscarPaciente(): void{
  this._homeProvider.buscarPaciente(this.usuario_id, this.token)
    .subscribe(
        (res: any) => {
          this.paciente_id = res.id;
          this.storage.set('paciente_id', res.id);
          this.buscarMedidas();
        }
        
    )
 }

 buscarMedidas(): void{
   this._homeProvider.buscarMedidas(this.paciente_id, this.token)
    .subscribe(
      res => {
        console.log(res)
        this.medidas = res;   
      }
    )
 }


}
