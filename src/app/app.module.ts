import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { BucleComponent } from './bucle/bucle.component';
import { SwitchComponent } from './switch/switch.component';
import { FormularioComponent } from './proyectoTarea/formulario/formulario.component';
import { ListaComponent } from './proyectoTarea/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    SemaforoComponent,
    BucleComponent,
    SwitchComponent,
    FormularioComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
