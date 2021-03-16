import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../Module/Tarea.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() arrayTarea : Tarea[];

  constructor() { 
    this.arrayTarea = []
  }

  ngOnInit(): void {
  }

  completar(pTarea: Tarea){
    pTarea.complete = !pTarea.complete;
  }

  borrar(indice){
    this.arrayTarea.splice(indice, 1);
  }
}
