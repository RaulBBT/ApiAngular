import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DatosService} from '../datos.service'

@Component({
  selector: 'app-parametro',
  templateUrl: './parametro.component.html',
  styleUrls: ['./parametro.component.css']
})
export class ParametroComponent implements OnInit {
  elemento= {Search:[]};;
  constructor(private servicioConDatos: DatosService, private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
	  this.servicioConDatos.getElemento(this.rutaActiva.snapshot.params.parametro).subscribe(data => {
      this.elemento=data;
 	  });
  }

}
