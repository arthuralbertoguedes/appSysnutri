import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanoAlimentarPage } from './plano-alimentar';

@NgModule({
  declarations: [
    PlanoAlimentarPage,
  ],
  imports: [
    IonicPageModule.forChild(PlanoAlimentarPage),
  ],
})
export class PlanoAlimentarPageModule {}
