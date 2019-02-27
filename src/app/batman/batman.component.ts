import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DatosService} from '../datos.service'

@Component({
  selector: 'app-batman',
  templateUrl: './batman.component.html',
  styleUrls: ['./batman.component.css']
})
export class BatmanComponent implements OnInit {
  batman= {Search:[]};;
  constructor(private servicioConDatos: DatosService) { }

  ngOnInit() {
	  this.servicioConDatos.getBatman().subscribe(data => {
      this.batman=data;
  });
  }

}
