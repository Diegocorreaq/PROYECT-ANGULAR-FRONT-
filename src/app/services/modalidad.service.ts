import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Modalidad } from '../models/modalidad.model';

const baseURL = "http://localhost:8090/rest/modalidad";

@Injectable({
  providedIn: 'root'
})
export class ModalidadService {

  constructor(private http:HttpClient) { }

  insertaModalidad(data:Modalidad):Observable<any>{
    return this.http.post(baseURL,data);
  }
}
