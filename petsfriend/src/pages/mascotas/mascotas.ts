import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestProvider} from "../../providers/rest/rest";
import {PerfilmascotaPage} from "../perfilmascota/perfilmascota";
import {AgregarMascotaPage} from "../agregar-mascota/agregar-mascota";

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
  descripcion(){
    this.navCtrl.push('PerfilmascotaPage')
  }
  obtenerid(id) {
    this.mascota.id = id;
    localStorage.setItem('Perfilmascota', this.mascota.id);
  }
  goAgregarMascota(){
    this.navCtrl.push(AgregarMascotaPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MascotasPage');
  }

}
