import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'http://petsfriend.herokuapp.com';


  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/especie').subscribe(data => {
        resolve(data);
        console.log(data);
      })
    });
  }

  getPeril() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/usuario').subscribe(data => {
        resolve(data);
        console.log(data);
      })
    })
  }
}

