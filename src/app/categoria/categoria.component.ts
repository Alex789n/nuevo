import { Component } from '@angular/core';
import { DatosProyService } from '../datos-proy.service';
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  constructor(public datCat: DatosProyService){}
}
