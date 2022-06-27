import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tipohabitante } from '../models/tipohabitante.model';
const baseURL = "http://localhost:8090/rest/tipohabitante";

@Injectable({
  providedIn: 'root'
})
export class TipoHabitanteService {

  constructor(private htpp:HttpClient) { }

  listaTipohabitante():Observable<Tipohabitante[]>{
    return this.htpp.get<Tipohabitante[]>(baseURL);
  }
}
