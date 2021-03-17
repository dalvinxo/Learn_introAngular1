import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DepartamentoProducto } from '../Module/Departamento.component';

@Component({
  selector: 'app-formulario-departamento',
  templateUrl: './formulario-departamento.component.html',
  styleUrls: ['./formulario-departamento.component.css']
})
export class FormularioDepartamentoComponent implements OnInit {

  productoDepartamento: DepartamentoProducto;
  @Output() nuevoDepartamento: EventEmitter<DepartamentoProducto>;

  constructor() { 
    this.productoDepartamento = new DepartamentoProducto();
    this.nuevoDepartamento = new EventEmitter();

  }

  ngOnInit(): void {
  }


  onNewDepartamento(){
    this.nuevoDepartamento.emit(this.productoDepartamento);
    this.productoDepartamento = new DepartamentoProducto();
  }

}
