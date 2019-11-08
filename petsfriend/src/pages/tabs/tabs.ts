import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {HomePage} from "../home/home";
import {PruebaPage} from "../prueba/prueba";
import {LoginPage} from "../login/login";


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

 homePage = HomePage;
 pruebaPage = PruebaPage;
 loginPage = LoginPage;

}
