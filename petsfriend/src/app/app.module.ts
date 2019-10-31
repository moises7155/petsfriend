import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage} from "../pages/login/login";
<<<<<<< HEAD
import { PruebaPage} from "../pages/prueba/prueba";
import { TabsPage} from "../pages/tabs/tabs";
=======
import { RegistroPage} from "../pages/registro/registro";

>>>>>>> 518706df31614820da55e3ecb8b996abbf4f0027
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
<<<<<<< HEAD
    PruebaPage,
    TabsPage
=======
    RegistroPage
>>>>>>> 518706df31614820da55e3ecb8b996abbf4f0027
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
<<<<<<< HEAD
    PruebaPage,
    TabsPage
=======
    RegistroPage
>>>>>>> 518706df31614820da55e3ecb8b996abbf4f0027
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
