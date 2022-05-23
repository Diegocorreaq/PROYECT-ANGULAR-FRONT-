import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NuevoUsuario } from '../models/nuevo-usuario.model';

const baseURL = "http://localhost:8090/rest/url/auth/nuevo";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  instertarUsuario(data:NuevoUsuario):Observable<any>{
    return this.http.post(baseURL,data);
  }
}
