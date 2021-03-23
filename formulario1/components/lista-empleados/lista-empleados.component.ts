import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado.model';
import { CreateEmpleadosService } from 'src/app/service/create-empleados.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  listaEmpleado: Empleado[];
  constructor(private CreateEmpleadosService: CreateEmpleadosService) { }

  ngOnInit(): void {
     this.CreateEmpleadosService.all().then(params => this.listaEmpleado = params);
  }

}
