import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  recomendaciones: any;
  anuncio: any;
  apiUrl = 'http://petsfriend.herokuapp.com';

  constructor(public navCtrl: NavController, public restProvider: RestProvider, public http: HttpClient) {
  }

  ngOnInit() {
    this.getRecomendacion();
    this.getAnuncio()
  }

  getRecomendacion() {
    this.restProvider.getRecomendacion()
      .then(data => {
        this.recomendaciones = [];
        this.recomendaciones = data;
        console.log(this.recomendaciones)
      });
  }

  getAnuncio() {
    this.restProvider.getAnuncio()
      .then(data => {
        this.anuncio = data;
        console.log(this.anuncio);
      });
  }
}
