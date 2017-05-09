import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//services
import { ListaDeseosServices } from "./services/lista-deseos.services";


//pages
import { TabsPage } from '../pages/tabs/tabs';

import { PendientesComponent } from "../pages/pendientes/pendientes.component";
import { TerminadosComponent } from "../pages/terminados/terminados.component";
import { AgregarComponent } from "../pages/agregar/agregar.component";
import { DetalleComponent } from "../pages/detalle/detalle.component";

import { PlaceHolderPipe } from "./pipes/placeholder.pipe";
import { PendientesPipe } from "./pipes/pendientes.pipe";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    PlaceHolderPipe,
    PendientesPipe,
    PendientesComponent,
    TerminadosComponent,
    AgregarComponent ,
    DetalleComponent,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PendientesComponent,
    TerminadosComponent,
    DetalleComponent,
    AgregarComponent ,
    TabsPage
  ],
  providers: [
    ListaDeseosServices,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
