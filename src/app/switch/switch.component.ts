import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  valor: number;
  valorString : string;

  constructor() { 
    this.valor= 1;
    this.valorString='tres';
  }

  ngOnInit(): void {

    setInterval(() =>{
        this.valor++;
        if (this.valor>4){
          this.valor=1;
        }

    },2000)

  }





}
