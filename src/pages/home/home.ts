import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
/* Bom para ser usado quando iniciar a página */
  ionViewDidLoad(): void{
  }

  navegar(): void{
    this.navCtrl.push('MensagensPage');
  }
}
