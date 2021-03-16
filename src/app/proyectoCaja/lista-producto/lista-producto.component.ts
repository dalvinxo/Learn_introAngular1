import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Producto } from '../Module/Producto..component';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  @Input() titulo : string;
  @Input() arrayProducto: Array<Producto>;
  @Output() productoSeleccionado: EventEmitter<Producto>;

  constructor() { 
    this.productoSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
   
  }

  producto(pProducto){
    this.productoSeleccionado.emit(pProducto);
  }
  


}
