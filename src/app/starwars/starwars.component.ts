import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DatosService} from '../datos.service'

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css']
})
export class StarwarsComponent implements OnInit {
  starwars= {Search:[]};;
  constructor(private servicioConDatos: DatosService) { }

  ngOnInit() {
	  this.servicioConDatos.getStarwars().subscribe(data => {
      this.starwars=data;
  });
  }
}
