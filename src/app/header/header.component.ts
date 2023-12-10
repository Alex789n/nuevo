import { Component } from '@angular/core';
import { DatosProyService } from '../datos-proy.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public datCat: DatosProyService){}
  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const btnBuscar = document.getElementById('btnBuscar');
      if (btnBuscar) {
        btnBuscar.click();
      }
    }
  }
  
}
