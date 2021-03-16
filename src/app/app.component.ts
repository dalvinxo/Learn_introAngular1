import { Component } from '@angular/core';
import { Producto } from './proyectoCaja/Module/Producto..component';
import { Tarea } from './proyectoTarea/Module/Tarea.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  propiedadesParrafos: any;
  mostrar: boolean;

  arrayTareas : Array<Tarea>;


  //proyecto cajaRegistradora
  array_Comida: Array<Producto>;
  array_Bebida: Array<Producto>;
  array_seleccionado: Array<Producto>;


  constructor(){
    this.propiedadesParrafos = {
      color: 'red',
      fontSize: '20px'
    }
    this.mostrar = false;
    this.arrayTareas = [];

    this.array_seleccionado = [];

    this.array_Comida = [
      new Producto('Quipe', 'https://www.cocinadominicana.com/wp-content/uploads/2011/07/kipe-kibbeh-207-768x1152.jpg.webp',13.70),
      new Producto('Hamburguesa', 'https://www.ayquechulo.com/media/reviews/photos/thumbnail/400x400s/b9/15/c5/Forest-Burger-37-1510512542.jpg',100.50),
      new Producto('Pizza', 'https://www.ayquechulo.com/media/reviews/photos/thumbnail/1500x500s/d4/42/1a/n3rxa1ki2tg71war4rzd-15-1502668697-36-1502675663.jpg',230.99),
      new Producto('Rabo encendio', 'https://images.ctfassets.net/86mn0qn5b7d0/img-of-media-slide-267730/e78fd420ba94947b41aac70eca3b09af/pheucv0bkk1.jpg?fm=jpg&fl=progressive&q=50&w=1200',430),  
    ]

    this.array_Bebida = [
      new Producto('Çocacola', 'https://jumbo.vteximg.com.br/arquivos/ids/336787/Principal-15108.jpg?v=637237316937900000', 120.99),
      new Producto('Agua', 'https://images.heb.com/is/image/HEBGrocery/000145469', 60),
      new Producto('Country Club', 'https://plazalama.com.do/16899-thickbox_default/refresco-country-club-frambuesa-2-lt.jpg', 110),
      new Producto('Malta India', 'https://plazalama.com.do/15683-thickbox_default/malta-india-familiar-650-ml.jpg', 120)
    ]

  }

  cambiarColor(color){

    switch(color){
      case 'r':
        this.propiedadesParrafos.color = 'red'  
      break;
      case 'v':
        this.propiedadesParrafos.color = 'green'  
      break;
      case 'a':
        this.propiedadesParrafos.color = 'yellow'  
      break;
      case 'b':
        this.propiedadesParrafos.color = 'blue'  
      break;
    }

  }

  sizeFont($event){

      this.propiedadesParrafos.fontSize = `${$event.target.value}px`;
  }

  mostrars(){
    this.mostrar = !this.mostrar;
  }

  //proyecto Tarea
  nuevaTarea($event){
    this.arrayTareas.push($event)
    console.log(this.arrayTareas)

  }

  seleccionados($event){

    const productoEncontrado = this.array_seleccionado.find(producto => producto.nombreProducto == $event.nombreProducto);

    if (productoEncontrado){
      productoEncontrado.cantidad++;
    }else{
      $event.cantidad = 1;
      this.array_seleccionado.push($event);
    }

  }


}
