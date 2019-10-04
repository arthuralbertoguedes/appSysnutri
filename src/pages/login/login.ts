import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public login: string;

  public senha: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public menu: MenuController,
              public loginProvider: LoginProvider) {

  }

  ionViewCanEnter() {
    this.menu.swipeEnable(false);
  }

//Saiu da página
  ionViewDidLeave(): void{
    this.menu.swipeEnable(true);
  } 

  logar(): void{
    /* O navController limpa a pilha de páginas e redirecionar para a página especificada
    * sempre colocar o nome da classe com anotação IonicPage(); */
    this.loginProvider.verificarInformacoesPaciente(this.login, this.senha)
      .subscribe(
        res => {
          this.navCtrl.setRoot('HomePage');

          console.log(res);
        },
        err => {
          alert('Usuário e/ou senha inválidos');
        }
      );
  }

}
