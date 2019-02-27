import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DatosService} from '../datos.service'

@Component({
  selector: 'app-superman',
  templateUrl: './superman.component.html',
  styleUrls: ['./superman.component.css']
})
export class SupermanComponent implements OnInit {
  superman= {Search:[]};;
  constructor(private servicioConDatos: DatosService) { }

  ngOnInit() {
	  this.servicioConDatos.getSuperman().subscribe(data => {
      this.superman=data;
  });
  }

}
