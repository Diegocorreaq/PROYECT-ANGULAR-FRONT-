import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habitante } from '../models/habitante.model';

const baseURL = "http://localhost:8090/rest/habitante";

@Injectable({
  providedIn: 'root'
})
export class HabitanteService {

  constructor(private http:HttpClient) { }

  instertarHabitante(data:Habitante):Observable<any>{
    return this.http.post(baseURL,data);
  }
  listaHabitante():Observable<Habitante[]>{
    return this.http.get<Habitante[]>(baseURL);
  }
}