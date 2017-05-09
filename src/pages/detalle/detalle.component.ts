import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { Lista, ListaItem } from "../../app/clases/index";
import { AlertController } from 'ionic-angular';

import { ListaDeseosServices } from "../../app/services/lista-deseos.services";

@Component({
    selector: 'detalle',
    templateUrl: './detalle.component.html'

})
export class DetalleComponent implements OnInit {

    idx: number;
    lista: Lista;
    constructor(
        public navCtrl: NavController,
        public navP: NavParams,
        public _listaDeseos: ListaDeseosServices,
        public alertCtrl: AlertController
    ) {

        this.idx = this.navP.get("idx");
        this.lista = this.navP.get("lista")

    }
    actualizar(item: ListaItem) {
        item.completado = !item.completado;
        let todosMarcados = true;
        for(let item of this.lista.items){
            if(!item.completado){
                todosMarcados = false;
                break
            }
        }
        this.lista.terminada = todosMarcados;
        this._listaDeseos.actualizarData()

    }
    borrarItem() {
        let confirm = this.alertCtrl.create({
            title: this.lista.nombre,
            message: '¿Está seguro que quiere borrar la lista?',
            buttons: [
                'Cancelar',
                {
                    text: 'Eliminar',
                    handler: () => {
                        //console.log(this.lista.nombre);
                        this._listaDeseos.eliminarLista(this.idx);
                        this.navCtrl.pop()
                    }
                }
            ]
        });
        confirm.present();
    }
    ngOnInit() { }
}