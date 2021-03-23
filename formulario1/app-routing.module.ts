import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmpleadosComponent } from './components/create-empleados/create-empleados.component';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/list'},
  {path: 'new', component: CreateEmpleadosComponent},
  {path: 'list', component: ListaEmpleadosComponent},
  {path: '**', redirectTo: '/list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
