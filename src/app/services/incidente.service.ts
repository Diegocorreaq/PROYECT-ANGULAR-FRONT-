import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Incidente } from '../models/incidente.model';

const baseURL = "http://localhost:8090/rest/incidente";
@Injectable({
  providedIn: 'root'
})
export class IncidenteService {

  constructor(private http:HttpClient) { }
  insertaIncidente(data:Incidente):Observable<any>{
    return this.http.post(baseURL,data);
  }
  listaIncidente():Observable<Incidente[]>{
    return this.http.get<Incidente[]>(baseURL);
  }
  
  consultaIncidenteParametrosEstado(departamento:number, causaincidente:number,  estado:number):Observable<any>{
    const params = new HttpParams().set("departamento",departamento).set("causaincidente",causaincidente).set("estado",estado);
    return this.http.get<any>(baseURL+"/listaIncidenteConParametrosEstado",{params});
  }

  actualizaIncidente(data: Incidente): Observable<any> {
    return this.http.put(baseURL+'/actualizaIncidente', data);
  }
}
