import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage} from "../pages/login/login";
import { PerfilPage} from "../pages/perfil/perfil";
import { PruebaPage} from "../pages/prueba/prueba";
import { TabsPage} from "../pages/tabs/tabs";
import { RegistroPage} from "../pages/registro/registro";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule} from "@angular/common/http";
import { RestProvider } from '../providers/rest/rest';
import {MascotasPage} from "../pages/mascotas/mascotas";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    PerfilPage,
    PruebaPage,
    TabsPage,
    RegistroPage,
    MascotasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    PerfilPage,
    PruebaPage,
    TabsPage,
    RegistroPage,
    MascotasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
