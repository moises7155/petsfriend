import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../login/login';
import { AngularFireAuth} from "@angular/fire/auth";

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
user = {email:'', password:''};
usuario = {nombre:'',direccion:'', telefono:'', fecha_nacimiento:'', token: ''};
data:any;
constructor(public navCtrl: NavController,
            public navParams: NavParams,
            private alertCtrl: AlertController,
            private afAuth: AngularFireAuth,
            public loadingCtrl:LoadingController,
            public restProvider: RestProvider,) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }
  gologin(){
    this.navCtrl.setRoot(LoginPage);
  }
  //Registro Firebase
  signup(){
    this.afAuth.auth.createUserWithEmailAndPassword(this.user.email,this.user.password)
      .then( newUser => {
        console.log("newUser"+newUser);
        console.log("ID REGISTRO" + newUser.user.uid);
        this.usuario.token = newUser.user.uid;
        this.addUser();
      })
      .then(auth=>{
        console.log(auth);
        this.Alertsuccessfull();
      })
      .catch(err =>{
        console.log("ocurrió un error en tu registro");
      });
  }
  addUser() {
    this.restProvider.addUser(this.usuario).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }

  Alertsuccessfull() {
    let alertmsg = this.alertCtrl.create({
      title: 'Successful',
      message: 'Registro exitoso',
      buttons: ['Ok']
    });
    alertmsg.present(alertmsg);
  }
}


