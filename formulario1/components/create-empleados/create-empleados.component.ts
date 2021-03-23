import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateEmpleadosService } from 'src/app/service/create-empleados.service';

@Component({
  selector: 'app-create-empleados',
  templateUrl: './create-empleados.component.html',
  styleUrls: ['./create-empleados.component.css']
})
export class CreateEmpleadosComponent implements OnInit {

  formularioEmpleado: FormGroup;

  constructor(private serviceEmpleado: CreateEmpleadosService) { 

    this.formularioEmpleado = new FormGroup({
      nombre: new FormControl('',[
        Validators.required
      ]),
      edad: new FormControl('',[
        Validators.required
      ]),
      pais: new FormControl('',[
        Validators.required
      ]),
      imagen: new FormControl('',[
        Validators.required
      ])
    });

  }

  ngOnInit(): void {
  }


  onSubmit(){
    this.serviceEmpleado.insert(this.formularioEmpleado.value);
    this.formularioEmpleado.reset();
  }

}
