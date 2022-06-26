import { HttpClient, HttpParams } from '@angular/common/http';
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
  consultaBoletaParametros(servicio:number, departamento:number, anio:number):Observable<any>{
    const params = new HttpParams().set("servicio",servicio).set("departamento",departamento).set("anio",anio);
    return this.http.get<any>(baseURL+"/listaBoletaConParametros",{params});
  }

  consultaBoletaParametrosEstado(departamento:number, servicio:number, anio:number, estado:number):Observable<any>{
    const params = new HttpParams().set("departamento",departamento).set("servicio",servicio).set("anio",anio).set("estado",estado);
    return this.http.get<any>(baseURL+"/listaBoletaConParametrosEstado",{params});
  }

  actualizaBoleta(data: Boleta): Observable<any> {
    return this.http.put(baseURL+'/actualizaBoleta', data);
  }

}
