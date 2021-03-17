import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { BucleComponent } from './bucle/bucle.component';
import { SwitchComponent } from './switch/switch.component';
import { FormularioComponent } from './proyectoTarea/formulario/formulario.component';
import { ListaComponent } from './proyectoTarea/lista/lista.component';
import { ListaProductoComponent } from './proyectoCaja/lista-producto/lista-producto.component';
import { ComandaComponent } from './proyectoCaja/comanda/comanda.component';
import { FormularioDepartamentoComponent } from './proyectoProducto/formulario-departamento/formulario-departamento.component';
import { ListaDepartamentoComponent } from './proyectoProducto/lista-departamento/lista-departamento.component';


@NgModule({
  declarations: [
    AppComponent,
    SemaforoComponent,
    BucleComponent,
    SwitchComponent,
    FormularioComponent,
    ListaComponent,
    ListaProductoComponent,
    ComandaComponent,
    FormularioDepartamentoComponent,
    ListaDepartamentoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
