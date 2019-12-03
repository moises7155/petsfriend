import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import {TabsPage} from "../tabs/tabs";
import { AngularFireAuth} from "@angular/fire/auth";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {id:'',email: '', password: ''};
  constructor(public navCtrl: NavController, public navParams: NavParams, public Afauth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.Afauth.auth.signInWithEmailAndPassword(this.user.email, this.user.password).then((auth) =>{
      this.navCtrl.setRoot(TabsPage);
    }, error => {
      if(error.code === 'auth/wrong-password'){
        alert('Error contraseña');
      }else{
        alert('Error correo')
      }
    });
  }
  // redefinir el nombre de la funció para hacerla
  goHome(){
    this.navCtrl.setRoot(RegistroPage);
  }
}
