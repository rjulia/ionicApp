import { Injectable } from '@angular/core';
import { Lista } from "../clases/listas";


@Injectable()
export class ListaDeseosServices {

    listas: Lista[] = [];
    constructor(){

        let lista1 = new Lista ('Compras de supermercado');
        let lista2 = new Lista ('Compras de Juegos');
        let lista3 = new Lista ('Compras de Universidad');

        this.listas.push(lista1);
        this.listas.push(lista2);
        this.listas.push(lista3);
        
    }
}