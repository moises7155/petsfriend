import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {HomePage} from "../home/home";
import {PruebaPage} from "../prueba/prueba";
<<<<<<< HEAD
import {FavoritosPage} from "../favoritos/favoritos";
=======
import {LoginPage} from "../login/login";
import {PerfilPage} from "../perfil/perfil";
import {MascotasPage} from "../mascotas/mascotas";
>>>>>>> c65eb7569d861a948d1b57988e4dcd0d68fcf95e


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

 homePage = HomePage;
 pruebaPage = PruebaPage;
<<<<<<< HEAD
 favoritosPage = FavoritosPage;
=======
 loginPage = LoginPage;
 perfilPage = PerfilPage;
 mascotasPage = MascotasPage;

>>>>>>> c65eb7569d861a948d1b57988e4dcd0d68fcf95e

}
