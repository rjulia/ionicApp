import { Component, OnInit } from '@angular/core';
import { ListaDeseosServices } from "../../app/services/lista-deseos.services";

import { NavController } from "ionic-angular";
import { AgregarComponent } from "../agregar/agregar.component";

@Component({
    selector: 'app-pendientes',
    templateUrl: 'pendientes.component.html',
    
})
export class PendientesComponent implements OnInit {
    constructor(private _listaDeseos: ListaDeseosServices,
                private navCrtl: NavController) { }

    ngOnInit() {
         
         
     }
     irAgregar(){

        this.navCrtl.push(AgregarComponent)

     }
   
}

