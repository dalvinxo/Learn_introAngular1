import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css'],
})
export class SemaforoComponent implements OnInit {
  propiedadesSemaforo: string;
  propiedadesSemaforo_array: Array<string>;
  colorSeleccionado: string;

  constructor() {
    this.propiedadesSemaforo = 'semaforo redondo';

    this.propiedadesSemaforo_array = ['redondo'];
    this.propiedadesSemaforo_array.push('semaforo');

    this.colorSeleccionado = 'r';
  }

  ngOnInit(): void {
    setInterval(() => {
      if (this.colorSeleccionado === 'r') {
        this.colorSeleccionado = 'a';
      } else if (this.colorSeleccionado === 'a') {
        this.colorSeleccionado = 'v';
      } else if (this.colorSeleccionado === 'v') {
        this.colorSeleccionado = 'r';
      }
    }, 1000);
  }
}
