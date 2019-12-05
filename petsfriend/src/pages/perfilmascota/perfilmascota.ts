import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestProvider} from "../../providers/rest/rest";

@IonicPage()
@Component({
  selector: 'page-perfilmascota',
  templateUrl: 'perfilmascota.html',
})
export class PerfilmascotaPage {
  Pmascota:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  this.getMascotas();
  }

  getMascotas() {
    this.restProvider.getMascotas()
      .then(data => {
        this.Pmascota = data;
        console.log(this.Pmascota);
      });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilmascotaPage');
  }
}
