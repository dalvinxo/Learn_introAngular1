import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaComponent } from './components/acerca/acerca.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { CurriculumComponent } from './empleado/curriculum/curriculum.component';
import { DetalleEmpleadoComponent } from './empleado/detalle-empleado/detalle-empleado.component';
import { PerfilComponent } from './empleado/perfil/perfil.component';
import { RandomGuard } from './random.guard';

const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: "informacion"},
  { path: 'informacion', component: InformacionComponent},
  { path: 'about', redirectTo: 'acerca'},
  { path: 'acerca', component: AcercaComponent, canActivate: [RandomGuard]},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'empleado/:empleadoID', component: DetalleEmpleadoComponent, children: [
    { path: 'curriculum', component: CurriculumComponent},
    { path: 'detalle', component: DetalleEmpleadoComponent},
    { path: 'perfil', component: PerfilComponent},
    { path: '**', redirectTo: "curriculum"}

  ]},
  { path: '**', redirectTo: 'informacion'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
