import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";

@Component({
    selector: 'detalle',
    templateUrl: './detalle.component.html'
    
})
export class DetalleComponent implements OnInit {

    idx:number;
    lista:any;
    constructor(
       public navCtrl: NavController,
       public navP :NavParams
    ) { 

        this.idx = this.navP.get("idx");
        this.lista = this.navP.get("lista")
        
     }

    ngOnInit() { }
}