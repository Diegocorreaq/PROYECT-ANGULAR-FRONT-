import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicio } from '../models/servicio.model';

const baseURL = "http://localhost:8090/rest/boleta";

@Injectable({
  providedIn: 'root'
})
export class BoletaService {

  constructor(private http:HttpClient) { }

}
