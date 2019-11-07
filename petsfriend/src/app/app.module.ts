import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpClientModule} from "@angular/common/http";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage} from "../pages/login/login";
<<<<<<< HEAD
import { PerfilPage} from "../pages/perfil/perfil";
=======
<<<<<<< HEAD
import { PruebaPage} from "../pages/prueba/prueba";
import { TabsPage} from "../pages/tabs/tabs";
=======
import { RegistroPage} from "../pages/registro/registro";
>>>>>>> 00c51fa6970938635f2c451dfc824295d536d3e5

>>>>>>> 518706df31614820da55e3ecb8b996abbf4f0027
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
<<<<<<< HEAD
import { HttpClientModule} from "@angular/common/http";
=======
import { RestProvider } from '../providers/rest/rest';
>>>>>>> 00c51fa6970938635f2c451dfc824295d536d3e5

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
<<<<<<< HEAD
    PerfilPage
=======
<<<<<<< HEAD
    PruebaPage,
    TabsPage
=======
    RegistroPage
>>>>>>> 518706df31614820da55e3ecb8b996abbf4f0027
>>>>>>> 00c51fa6970938635f2c451dfc824295d536d3e5
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
<<<<<<< HEAD
    PerfilPage
=======
<<<<<<< HEAD
    PruebaPage,
    TabsPage
=======
    RegistroPage
>>>>>>> 518706df31614820da55e3ecb8b996abbf4f0027
>>>>>>> 00c51fa6970938635f2c451dfc824295d536d3e5
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
