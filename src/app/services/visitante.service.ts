import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visitante } from '../models/visitante.model';

import { interval,  timer } from 'rxjs';
import { map } from 'rxjs/operators';

const baseURL = "http://localhost:8090/rest/visitante";

@Injectable({
  providedIn: 'root'
})
export class VisitanteService {

  constructor(private http:HttpClient) { }
  
  

  instertarVisitante(data:Visitante):Observable<any>{
    return this.http.post(baseURL,data);
  }
  listaVisitante():Observable<Visitante[]>{
    return this.http.get<Visitante[]>(baseURL);
  }

  consultaVisitante(dni:string, nombre:string, apellido:string, estado:number):Observable<any>{
    const params = new HttpParams().set("dni",dni).set("nombre",nombre).set("apellido",apellido).set("estado",estado);
    return this.http.get<any>(baseURL+"/listaVisitanteConParametros",{params});
  }
  consultaVisitanteDni(dni:string):Observable<any>{
    const params = new HttpParams().set("dni",dni);
    return this.http.get<any>(baseURL+"/listaVisitantePorDni",{params});
  }
  BuscaVisitantePorDni(dni:string):Observable<any>{
    const params = new HttpParams().set("dni",dni);
    return this.http.get<any>(baseURL+"/BuscaVisitantePorDni",{params});
  }
}