import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicio } from '../models/servicio.model';

const baseURL = "http://localhost:8090/rest/servicio";
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }
  listaServicio():Observable<Servicio[]>{
    return this.http.get<Servicio[]>(baseURL);
  }
}
