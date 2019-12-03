import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController} from 'ionic-angular';

/**
 * Generated class for the EditarperfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editarperfil',
  templateUrl: 'editarperfil.html',
})
export class EditarperfilPage {
  usuario:any;
  clave= localStorage.getItem('identificador');
  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController, private view: ViewController) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarperfilPage');
  }
  closeModal(){
    this.view.dismiss();
  }
}
