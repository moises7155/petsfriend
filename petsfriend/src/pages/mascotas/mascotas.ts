import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestProvider} from "../../providers/rest/rest";

/**
 * Generated class for the MascotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mascotas',
  templateUrl: 'mascotas.html',
})
export class MascotasPage {
  mascota:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.getMascota();
  }
  getMascota() {
    this.restProvider.getMascota()
      .then(data => {
        this.mascota = data;
        console.log(this.mascota);
      });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MascotasPage');
  }

}
