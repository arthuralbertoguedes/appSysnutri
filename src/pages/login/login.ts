import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { Storage } from '@ionic/storage';

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
              public loginProvider: LoginProvider,
              public storage: Storage) {

  }

  ionViewCanEnter() {
    this.menu.swipeEnable(false);
  }

//Saiu da página
  ionViewDidLeave(): void{
    this.menu.swipeEnable(true);
  } 

  logar(): void{

 //   this.navCtrl.setRoot('HomePage');

    /* O navController limpa a pilha de páginas e redirecionar para a página especificada
    * sempre colocar o nome da classe com anotação IonicPage(); */
    this.loginProvider.verificarInformacoesPaciente(this.login, this.senha)
      .subscribe(
        (res: any ) => {
          this.storage.set("usuario_id", res.usuario_id);
          this.storage.set("usuario_nome", res.usuario_nome);
          this.storage.set("token", res.token);

          this.navCtrl.setRoot('HomePage');

          console.log(res);
        },
        err => {
        //  this.navCtrl.setRoot('HomePage');
          //alert('Usuário e/ou senha inválidos');
        }
      );
  }

}
