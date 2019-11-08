import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient} from "@angular/common/http";

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  data:any;
  usuario: {nombre:'', direccion:'', telefono:'', fecha_nacimiento:''}

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }
}
