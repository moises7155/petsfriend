import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {HomePage} from "../home/home";
import {PruebaPage} from "../prueba/prueba";
import {FavoritosPage} from "../favoritos/favoritos";
import {LoginPage} from "../login/login";
import {PerfilPage} from "../perfil/perfil";
import {MascotasPage} from "../mascotas/mascotas";


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

 homePage = HomePage;
 pruebaPage = PruebaPage;
 favoritosPage = FavoritosPage;
 loginPage = LoginPage;
 perfilPage = PerfilPage;
 mascotasPage = MascotasPage;
 

}
