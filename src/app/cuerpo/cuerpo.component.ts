import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DatosService} from '../datos.service'
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
  relevantes= {Search:[]};
  constructor(private servicioConDatos: DatosService, private rutaActiva: ActivatedRoute) { 
    
  }

  ngOnInit() {
	  this.servicioConDatos.getRelevantes().subscribe(data => {
      this.relevantes=data;
 	  });
  }
}
