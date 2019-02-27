import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  constructor(private http: HttpClient) { 
    
  }
  getRelevantes():Observable<any>{
	  return this.http.get('http://www.omdbapi.com/?apikey=234b163d&s="movie"&page=2');
 
	}
  getStarwars():Observable<any>{
	  return this.http.get('http://www.omdbapi.com/?apikey=234b163d&s="star"&page=1');
 
	}
  getBatman():Observable<any>{
	  return this.http.get('http://www.omdbapi.com/?apikey=234b163d&s="batman"&page=1');
 
	}
  getSuperman():Observable<any>{
	  return this.http.get('http://www.omdbapi.com/?apikey=234b163d&s="superman"&page=2');
 
	}
   getElemento(parametro):Observable<any>{
	  return this.http.get('http://www.omdbapi.com/?apikey=234b163d&s="'+parametro+'"&page=1');
 
	}
}
