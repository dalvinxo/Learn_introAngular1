import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../Module/Producto..component';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  @Input() listaProducto: Producto[];

  constructor() { 
    this.listaProducto = [];
  }

  ngOnInit(): void {
  }

  sumaTotal(): number{
    let sumatoria = 0;
    this.listaProducto.forEach(element => {
        sumatoria += element.cantidad * element.precioProducto;
    });
    return sumatoria
  }

  borrar(indice){
    const cantidad = this.listaProducto[indice].cantidad
    if(cantidad ==1){
      this.listaProducto.splice(indice,1)
    }else{
      this.listaProducto[indice].cantidad--;
    }

  }


}
