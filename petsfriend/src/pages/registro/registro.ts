import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../login/login';
import { AngularFireAuth} from "@angular/fire/auth";

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
users = {nombre:'', direccion:'', telefono:'', fecha_nacimiento:''}
constructor(public navCtrl: NavController, public navParams: NavParams,  public restProvider: RestProvider, public Afauth: AngularFireAuth) {
  this.addUser();
  
  }
  addUser() {
    this.restProvider.addUser(this.users).then((result) => {
      console.log(result);
      console.log(this.users);
    }, (err) => {
      console.log(err);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  gologin(){
    this.navCtrl.setRoot(LoginPage);
  }
}

