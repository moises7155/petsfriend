import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'http://petsfriend.herokuapp.com';
  refe = localStorage.getItem('Perfilmascota');
  
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getRecomendacion() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/recomendacion').subscribe(data => {
        resolve(data);
        console.log(data);
      })
    });
  }
  addUser(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/usuario', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  getPeril() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/usuario/4').subscribe(data => {
        resolve(data);
        console.log(data);
      })
    })
  }
    
  getMascota() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/mascota').subscribe(data => {
        resolve(data);
        console.log(data);
      })
    })
  }
  getMascotas() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/mascota/' + this.refe).subscribe(data => {
        resolve(data);
        console.log(data);
      })
    })
  }
}

