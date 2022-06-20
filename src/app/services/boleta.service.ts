import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Boleta } from '../models/boleta.model';

const baseURL = "http://localhost:8090/rest/boleta";

@Injectable({
  providedIn: 'root'
})
export class BoletaService {

  constructor(private http:HttpClient) { }
  insertaBoleta(data:Boleta):Observable<any>{
    return this.http.post(baseURL,data);
  }
  listaBoleta():Observable<Boleta[]>{
    return this.http.get<Boleta[]>(baseURL);
  }

}
