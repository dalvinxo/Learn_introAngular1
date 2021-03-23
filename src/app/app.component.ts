import { Component } from '@angular/core';
import { PaisesService } from './service/paises.service';
import { RickymortyService } from './service/rickymorty.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  arrayCharacters: any[];
  paginaCambiante: number;
  paginaTotal: number;

  constructor(
    private RickymortyService: RickymortyService
  ){
    this.arrayCharacters = [];
    this.paginaTotal = 34
    this.paginaCambiante = 1;
  }

  ngOnInit():void{
    
    this.RickymortyService.getAllCharactersPages(this.paginaCambiante)
    .then(RickymortyService => {
      this.arrayCharacters = RickymortyService['results'];
    }).catch(error => console.log(error));
    
  }

  async onChange(siguiente){
   
    if(siguiente){
      this.paginaCambiante++;
    }else{
      this.paginaCambiante--;
    }

    const response = await this.RickymortyService.getAllCharactersPages(this.paginaCambiante);
    this.arrayCharacters = response.results;
  }


}
