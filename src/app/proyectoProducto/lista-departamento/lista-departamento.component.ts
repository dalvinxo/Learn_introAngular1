import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DepartamentoProducto } from '../Module/Departamento.component';

@Component({
  selector: 'app-lista-departamento',
  templateUrl: './lista-departamento.component.html',
  styleUrls: ['./lista-departamento.component.css']
})
export class ListaDepartamentoComponent implements OnInit {

  @Input() array_listaDepartamento: DepartamentoProducto[];
  @Output() indice : EventEmitter<number>;
  @Input() boton_nombre: string;

  constructor() { 
    this.indice = new EventEmitter();    
  }

  ngOnInit(): void {
  }

  comprar(indice){
    this.indice.emit(indice);
  }

}
