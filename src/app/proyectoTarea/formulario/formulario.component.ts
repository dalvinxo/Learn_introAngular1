import { Component, OnInit, Output, EventEmitter} from '@angular/core';

import { Tarea } from '../Module/Tarea.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tarea: Tarea;
  @Output() tareaNueva: EventEmitter<Tarea>;

  constructor() {
    this.tarea = new Tarea();
    this.tareaNueva = new EventEmitter();
   }

  ngOnInit(): void {
  }

  crearTarea(){
    this.tareaNueva.emit(this.tarea);
    this.tarea = new Tarea()
  }

}
