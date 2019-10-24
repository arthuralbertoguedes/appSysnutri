import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomeProvider } from '../../providers/home/home';
import { Mensagem } from '../../models/mensagem.model';
import { Usuario } from '../../models/usuario.model';
import { Paciente } from '../../models/paciente.model';

@IonicPage()
@Component({
  selector: 'mensagens',
  templateUrl: 'mensagens.html',
})
export class MensagensPage {

  public usuario_id: number;
  public token: string = "";
  public paciente_id : number
  public mensagens: Mensagem[];
  public nutricionista_id: number;
  public paciente: Paciente;
  public mensagemEscrita: string = "";

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

  buscarPaciente(): void{
    this._homeProvider.buscarPaciente(this.usuario_id, this.token)
      .subscribe(
          (res: any) => {
            this.paciente = res;
            this.paciente_id = res.id;
            this.nutricionista_id = res.nutricionista_id;
            this.buscarMensagens();
          }
          
      )
  }

  buscarMensagens(): void{

    this._homeProvider.buscarMensagens(Number(this.paciente_id), this.nutricionista_id, this.token)
    .subscribe(
        res => {
          console.log(res);
          this.mensagens = res;
        }
    )
  }

  salvar(): void{

    let mensagem = new Mensagem();
    let usuario = new Usuario();
    usuario.id = this.nutricionista_id;

    //Setando informações para serem enviadas corretamente ao Java
    mensagem.foiLida  = false;
    mensagem.paciente = this.paciente;
    mensagem.mensagem = this.mensagemEscrita;
    mensagem.usuario  = usuario;
    mensagem.remetente = 'paciente';

    console.log(mensagem);
    this._homeProvider.salvarMensagem(mensagem, this.token)
      .subscribe(res =>{
          this.mensagemEscrita = "";
          console.log(res);
      })
   }


}
