import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { CurriculumComponent } from './empleado/curriculum/curriculum.component';
import { DetalleComponent } from './empleado/detalle/detalle.component';
import { PerfilComponent } from './empleado/perfil/perfil.component';
import { DetalleEmpleadoComponent } from './empleado/detalle-empleado/detalle-empleado.component';
import { PruebasDirective } from './directivas/pruebas.directive';

@NgModule({
  declarations: [
    AppComponent,
    AcercaComponent,
    InformacionComponent,
    NosotrosComponent,
    CurriculumComponent,
    DetalleComponent,
    PerfilComponent,
    DetalleEmpleadoComponent,
    PruebasDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
