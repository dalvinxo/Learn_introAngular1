import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bucle',
  templateUrl: './bucle.component.html',
  styleUrls: ['./bucle.component.css']
})
export class BucleComponent implements OnInit {

  personas: any[];


  constructor() {

    this.personas = [
      {nombre: "Dalvin", apellido: "Perez", edad: 20, pais: 'Salvador'},
      {nombre: "Juan", apellido: "Rodríguez", edad: 30, pais:'Estados unidos'},
      {nombre: "Isaias", apellido: "Medina", edad: 56, pais:'España'},
      {nombre: "Tomas", apellido: "Rojas", edad: 80, pais:'Canada'}
    ]

   }

  ngOnInit(): void {
  }

  agregar(){
    this.personas.push({
      nombre: "Juanse", apellido: "Tromfa", edad: 24, pais:'Japon'
    })
  }

}
