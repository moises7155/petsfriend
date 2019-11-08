import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage} from "../pages/login/login";
<<<<<<< HEAD
import { PerfilPage} from "../pages/perfil/perfil";
=======
<<<<<<< HEAD

=======
import { PerfilPage} from "../pages/perfil/perfil";
>>>>>>> c65eb7569d861a948d1b57988e4dcd0d68fcf95e
>>>>>>> 8d8cc6421f42be36d2813369aa1b4b1fd7b74df6
import { PruebaPage} from "../pages/prueba/prueba";
import { FavoritosPage} from "../pages/favoritos/favoritos";
import { TabsPage} from "../pages/tabs/tabs";
<<<<<<< HEAD
import { RegistroPage} from "../pages/registro/registro";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
=======
<<<<<<< HEAD

import { RegistroPage} from "../pages/registro/registro";


=======
import { RegistroPage} from "../pages/registro/registro";
>>>>>>> c65eb7569d861a948d1b57988e4dcd0d68fcf95e
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

>>>>>>> 8d8cc6421f42be36d2813369aa1b4b1fd7b74df6

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
<<<<<<< HEAD
    PerfilPage,
    PruebaPage,
    TabsPage,
    RegistroPage
=======
<<<<<<< HEAD
    PruebaPage,
    TabsPage,
    RegistroPage,
    FavoritosPage
 ],
=======
    PerfilPage,
    PruebaPage,
    TabsPage,
    RegistroPage,
    MascotasPage
>>>>>>> 8d8cc6421f42be36d2813369aa1b4b1fd7b74df6
  ],
>>>>>>> c65eb7569d861a948d1b57988e4dcd0d68fcf95e
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
<<<<<<< HEAD
    PerfilPage,
    PruebaPage,
    TabsPage,
    RegistroPage
=======
<<<<<<< HEAD
    PruebaPage,
    TabsPage,
    RegistroPage,
    FavoritosPage
],
=======
    PerfilPage,
    PruebaPage,
    TabsPage,
    RegistroPage,
    MascotasPage
>>>>>>> 8d8cc6421f42be36d2813369aa1b4b1fd7b74df6
  ],
>>>>>>> c65eb7569d861a948d1b57988e4dcd0d68fcf95e
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
