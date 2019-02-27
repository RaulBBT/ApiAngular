import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi aplicacion';
  descripcion = 'mi descripcion personalizada';
  
  dameEdad()
  {
	  return 22;
  }
}
