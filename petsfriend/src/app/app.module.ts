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

//Firebase auth
import { AngularFireModule} from "@angular/fire";
import { AngularFireAuthModule} from "@angular/fire/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyCcJrNTguejOc8r93Z6cgdLkyqeS2gSsuE",
  authDomain: "petsfriend-256b5.firebaseapp.com",
  databaseURL: "https://petsfriend-256b5.firebaseio.com",
  projectId: "petsfriend-256b5",
  storageBucket: "petsfriend-256b5.appspot.com",
  messagingSenderId: "187257842276",
  appId: "1:187257842276:web:bd6add1a7ae5948f484d71"
};


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
    HttpClientModule,
   AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
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
