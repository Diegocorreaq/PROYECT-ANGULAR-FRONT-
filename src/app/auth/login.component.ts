import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../security/auth.service';
import { LoginUsuario } from '../security/login-usuario';
import { TokenService } from '../security/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  loginUsuario: LoginUsuario = {};
  roles: string[] = [];
  errMsj!: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) {
    console.log("LoginComponent >> constructor >>> " + this.tokenService.getToken());
   }

  ngOnInit() {
    console.log("LoginComponent >> ngOnInit 1 >>> " + this.tokenService.getToken());
    console.log("LoginComponent >> isLogged 1 >>> " + this.isLogged);
    console.log("LoginComponent >> isLoginFail 1 >>> " + this.isLoginFail);
    console.log("LoginComponent >> roles  1 >>> " + this.tokenService.getAuthorities());

    if (this.tokenService.getToken()) {
        this.isLogged = true;
        this.isLoginFail = false;
        this.roles = this.tokenService.getAuthorities();

        console.log("LoginComponent >> ngOnInit 2 >>> " + this.tokenService.getToken());
        console.log("LoginComponent >> isLogged 2 >>> " + this.isLogged);
        console.log("LoginComponent >> isLoginFail 2 >>> " + this.isLoginFail);
        console.log("LoginComponent >> roles 2 >>> " + this.tokenService.getAuthorities());
    }

  }

  onLogin(): void {
    this.authService.login(this.loginUsuario).subscribe(
      (data:any) => {
          this.isLogged = true;
          this.tokenService.setToken(data.token);
          this.tokenService.setUserName(data.login);
          this.tokenService.setUserNameComplete(data.nombreCompleto)
          this.tokenService.setAuthorities(data.authorities);
          this.roles = data.authorities;
          this.router.navigate(['/']);
      },
      (err:any) => {
          this.isLogged = false;
          this.errMsj = err.message;
          console.log(err);
          if (err.status == 401){
            alert("Usuario no Autorizado");
          }
      }
    );
  }

}
