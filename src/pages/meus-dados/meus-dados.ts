import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomeProvider } from '../../providers/home/home';

@IonicPage()
@Component({
  selector: 'page-meus-dados',
  templateUrl: 'meus-dados.html',
})
export class MeusDadosPage {

  public usuario_id: number;
  public token: string;
  public usuario: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public storage: Storage,
              public _homeProvider: HomeProvider) {
  }

  ionViewDidLoad() {
    this.storage.get('usuario_id').then(
      id => {
        this.usuario_id = id;
        this.storage.get('token').then(
          token => {
            this.token = token;
            this.buscarPaciente();
          }
        )
      }
    )
  }

  buscarPaciente(): void{
    this._homeProvider.buscarPaciente(this.usuario_id, this.token)
      .subscribe(res => {
        console.log(res);
        this.usuario = res;
      })
  }
}
