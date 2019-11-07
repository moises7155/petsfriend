import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import {PruebaPage} from "../prueba/prueba";
import {FavoritosPage} from "../favoritos/favoritos";


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

 homePage = HomePage;
 pruebaPage = PruebaPage;
 favoritosPage = FavoritosPage;

}
