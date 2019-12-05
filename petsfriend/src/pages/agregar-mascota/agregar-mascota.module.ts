import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarMascotaPage } from './agregar-mascota';

@NgModule({
  declarations: [
    AgregarMascotaPage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarMascotaPage),
  ],
})
export class AgregarMascotaPageModule {}
