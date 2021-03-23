import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesEscritoresComponent } from './components/detalles-escritores/detalles-escritores.component';
import { LibrosEscritoresComponent } from './components/libros-escritores/libros-escritores.component';
import { ListaEscritoresComponent } from './components/lista-escritores/lista-escritores.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'/escritores'},
  {path: 'escritores', component: ListaEscritoresComponent},
  {path: 'escritores/:idEscritor', component: DetallesEscritoresComponent,
  children: [
    {path: 'libros', component: LibrosEscritoresComponent}
  ]},
  {path: '**', redirectTo:'/escritores'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
