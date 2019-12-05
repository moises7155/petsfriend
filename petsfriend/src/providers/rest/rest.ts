import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth} from "@angular/fire/auth";
import * as firebase from 'firebase/app';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'http://petsfriend.herokuapp.com';
  refe = localStorage.getItem('Perfilmascota');
<<<<<<< HEAD

  constructor(public http: HttpClient, private auth: AngularFireAuth) {
=======
  constructor(public http: HttpClient, private auth: AngularFireAuth,) {

    console.log('Hello RestProvider Provider');
>>>>>>> 225649c366f75bc281b09209ac09c500788f42b1
  }

  getRecomendacion() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/recomendacion').subscribe(data => {
        resolve(data);
        console.log(data);
      })
    });
  }
<<<<<<< HEAD
    getAnuncio()
    {
      return new Promise(resolve => {
        this.http.get(this.apiUrl + '/anuncio').subscribe(data => {
          resolve(data);
          console.log(data);
        })
      });
    }
    addUser(usuario) {
      return new Promise((resolve, reject) => {
        this.http.post(this.apiUrl + '/usuario', usuario)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });

    }
    getPeril()
    {
      let user = firebase.auth().currentUser.uid;
      return new Promise(resolve => {
        this.http.get(this.apiUrl + '/usuario' + '/' + user).subscribe(data => {
          resolve(data);
          console.log(data);
        })
=======


  getAnuncio() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/anuncio').subscribe(data => {
        resolve(data);
        console.log(data);
      })
    });
  }
  addUser(usuario){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/usuario', usuario)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }
  getPeril() {
    let user =firebase.auth().currentUser.uid;
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/usuario'+'/'+user).subscribe(data => {
        resolve(data);
        console.log(data);
>>>>>>> 225649c366f75bc281b09209ac09c500788f42b1
      })
    }

    getMascota()
    {
      return new Promise(resolve => {
        this.http.get(this.apiUrl + '/mascota').subscribe(data => {
          resolve(data);
          console.log(data);
        })
      })
<<<<<<< HEAD
    }
    getMascotas(){
=======
    })
  }
  getMascotas()
    {
>>>>>>> 225649c366f75bc281b09209ac09c500788f42b1
      return new Promise(resolve => {
        this.http.get(this.apiUrl + '/mascota/' + this.refe).subscribe(data => {
          resolve(data);
          console.log(data);
        })
      })
    }
}


