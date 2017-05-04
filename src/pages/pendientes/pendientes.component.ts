import { Component, OnInit } from '@angular/core';
import { ListaDeseosServices } from "../../app/services/lista-deseos.services";

@Component({
    selector: 'app-pendientes',
    templateUrl: 'pendientes.component.html',
    
})
export class PendientesComponent implements OnInit {
    constructor(private _listaDeseos: ListaDeseosServices) { }

    ngOnInit() {
         console.log( this._listaDeseos.listas.length);
         
     }
   
}

