import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamento } from '../models/departamento.model';


const baseURL = "http://localhost:8090/rest/departamento";

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(private http:HttpClient) { }

  instertarDepartamento(data:Departamento):Observable<any>{
    return this.http.post(baseURL,data);
  }
  listaDepartamento():Observable<Departamento[]>{
    return this.http.get<Departamento[]>(baseURL);
  }
}
