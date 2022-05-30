import { Component, OnInit } from '@angular/core';
import { NuevoUsuario } from 'src/app/models/nuevo-usuario.model';
import { TokenService } from 'src/app/security/token.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  nuevoUsuario: NuevoUsuario={};
  
  isLogged = false;
  
    
  
  constructor(private usuarioService:UsuarioService,private tokenService: TokenService) { }
 
  
  insertado(){
    this.usuarioService.instertarUsuario(this.nuevoUsuario).subscribe(
      (x) => alert(x.mensaje)
    );
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

}
