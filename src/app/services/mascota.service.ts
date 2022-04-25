import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mascota } from '../models/mascota.model';


const baseURL = "http://localhost:8090/rest/mascota";
@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(private http:HttpClient) { }

  insertaMascota(data:Mascota):Observable<any>{
    return this.http.post(baseURL,data);
  }
}
