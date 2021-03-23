import { Injectable } from '@angular/core';
import { Empleado } from '../models/Empleado.model';

@Injectable({
  providedIn: 'root'
})
export class CreateEmpleadosService {

  Lista_modelo : Empleado[];

  constructor() { 
    this.Lista_modelo = []
  }

  insert(pEmpleado: Empleado): void{
    console.log(pEmpleado);
    this.Lista_modelo.push(pEmpleado)

  }

  all(): Promise<Empleado[]>{
    return new Promise((resolver, reject) =>{
      resolver(this.Lista_modelo);
    })

  }



}
