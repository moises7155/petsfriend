import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{
  usuarios : any;
  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
      this.getUsers();
  }
  getUsers() {
    this.restProvider.getUsers()
      .then(data => {
        this.usuarios = data;
        console.log(this.usuarios);
      });
  }
}
