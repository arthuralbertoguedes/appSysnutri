import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomeProvider } from '../../providers/home/home';

/**
 * Generated class for the PlanoAlimentarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plano-alimentar',
  templateUrl: 'plano-alimentar.html',
})
export class PlanoAlimentarPage {

  public paciente_id: number;
  public token: string;
  public refeicoes: any[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public storage: Storage,
              public _homeProvider: HomeProvider) {
  }

  ionViewDidLoad() {
    this.storage.get('paciente_id').then( id => {
      this.paciente_id = id;
      this.storage.get('token').then(token => this.buscarRefeicao(token))
    }
      
    );
  }

  buscarRefeicao(token: string): void{
    this._homeProvider.buscarPlanoAlimentar(this.paciente_id, token)
      .subscribe(
          res => {
            this.setarPlanoALimentar(res);
          }
      )
  }

  setarPlanoALimentar(res: any):void{
    this.refeicoes = res[0].refeicoes;
    console.log(this.refeicoes);
  }
}
