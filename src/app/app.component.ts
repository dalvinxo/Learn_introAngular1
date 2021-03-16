import { Component } from '@angular/core';
import { Tarea } from './proyectoTarea/Module/Tarea.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  propiedadesParrafos: any;
  mostrar: boolean;

  arrayTareas : Array<Tarea>;

  constructor(){
    this.propiedadesParrafos = {
      color: 'red',
      fontSize: '20px'
    }

    this.mostrar = false;

    this.arrayTareas = [];

  }

  cambiarColor(color){

    switch(color){
      case 'r':
        this.propiedadesParrafos.color = 'red'  
      break;
      case 'v':
        this.propiedadesParrafos.color = 'green'  
      break;
      case 'a':
        this.propiedadesParrafos.color = 'yellow'  
      break;
      case 'b':
        this.propiedadesParrafos.color = 'blue'  
      break;
    }

  }

  sizeFont($event){

      this.propiedadesParrafos.fontSize = `${$event.target.value}px`;
  }

  mostrars(){
    this.mostrar = !this.mostrar;
  }

  //proyecto Tarea
  nuevaTarea($event){
    this.arrayTareas.push($event)
    console.log(this.arrayTareas)

  }


}
