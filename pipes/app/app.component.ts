import { style, trigger, state, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('cambiarColor', [
      state('rojo', style({
        'background-color:': 'red'
      })),
      state('amarillo', style({
        'background-color:': 'yellow',
        'transform': 'scale(2)'
      })),
      state('verde', style({
        'background-color:': 'green'
      })),
      transition('rojo => amarillo', animate(1000)),
      transition('* => *', animate('.5s ease-in'))

    ])

  ]
})
export class AppComponent {
  
  //currency
  dinero: number;

  //decimal
  decimal: number;

  //date
  fecha: Date;

  //percent
  porcentaje: number;

  //title, lower, capitalize
  texto: string;


  //coloranimation
  color: string;

  constructor(){
    this.dinero = 243.5566;
    this.decimal = 213.151224231;
    this.fecha = new Date();
    this.porcentaje = Math.random();
    this.texto = 'Los arboles, las hojas en el otoño';
    this.color = 'rojo';
  }

  ngOnInit(): void {
    setInterval(() => this.fecha = new Date(), 1000);
    setInterval(() => {

      if(this.color == 'rojo'){
        this.color = 'amarillo';
      }else if(this.color == 'amarillo'){
        this.color = 'verde';
      }else if(this.color == 'verde'){
        this.color = 'rojo';
      }


    }, 3000);
  }

}
