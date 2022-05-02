import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginUsuario } from './login-usuario';
import { JwtDTO } from './jwt-dto';
import { AppSettings } from '../app.settings';

const authURL = AppSettings.API_ENDPOINT+ 'auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

  constructor(private httpClient: HttpClient) { }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(authURL + 'login', loginUsuario);
  }
}
