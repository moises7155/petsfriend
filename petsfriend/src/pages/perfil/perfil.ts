import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient} from "@angular/common/http";
import {RestProvider} from "../../providers/rest/rest";

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  usuario:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.getPerfil();
  }
  getPerfil() {
    this.restProvider.getPeril()
      .then(data => {
        this.usuario = data;
        console.log(this.usuario);
      });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }
}
