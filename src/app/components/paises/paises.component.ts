import { Component, OnInit } from '@angular/core';
import { PaisesService} from '../../service/paises.service'

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  array_paises: any[];
  constructor(private PaisesService: PaisesService) { }

  async ngOnInit(){
    try {
      this.array_paises = await this.PaisesService.getPaises();
    } catch (error) {
      console.log(error);
    }
  }

  

}
