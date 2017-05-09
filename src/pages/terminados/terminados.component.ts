import { Component, OnInit } from '@angular/core';
import { ListaDeseosServices } from "../../app/services/lista-deseos.services";

import { NavController } from "ionic-angular";
import { AgregarComponent } from "../agregar/agregar.component";
import { DetalleComponent } from "../detalle/detalle.component";

@Component({
    selector: 'app-terminados',
    templateUrl: 'terminados.component.html',
    
})
export class TerminadosComponent implements OnInit {
    constructor(private _listaDeseos: ListaDeseosServices,
                private navCrtl: NavController) { }

    ngOnInit() { }
    verDetalle(lista, idx){
         this.navCrtl.push(DetalleComponent, { lista,idx })
     }
}