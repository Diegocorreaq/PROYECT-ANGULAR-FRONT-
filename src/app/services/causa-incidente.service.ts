import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CausaIncidente } from '../models/causa-incidente.model';

const baseURL = "http://localhost:8090/rest/causaincidente";
@Injectable({
  providedIn: 'root'
})
export class CausaIncidenteService {

  constructor(private http:HttpClient) { }
  listaCausaIncidente():Observable<CausaIncidente[]>{
    return this.http.get<CausaIncidente[]>(baseURL);
  }
}
