import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MensagensPage } from './mensagens';
import { HomeProvider } from '../../providers/home/home';

@NgModule({
  declarations: [
    MensagensPage,
  ],
  imports: [
    IonicPageModule.forChild(MensagensPage),
  ],
  providers: [HomeProvider]
})
export class MensagensPageModule {}
