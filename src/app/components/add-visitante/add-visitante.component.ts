import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento.model';
import { Visita } from 'src/app/models/visita.model';
import { Visitante } from 'src/app/models/visitante.model';
import { Observable } from 'rxjs';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { VisitanteService } from 'src/app/services/visitante.service';

@Component({
  selector: 'app-add-visitante',
  templateUrl: './add-visitante.component.html',
  styleUrls: ['./add-visitante.component.css']
})
export class AddVisitanteComponent implements OnInit {

  today= new Date();
  time$: Observable<any>;
  departamento: Departamento[]=[];
  visitante: Visitante[]=[];
  visita: Visita = {
    departamento:{
      codDepartamento:-1
    },
    Visitante:{
        dni:"",
        
    }  
  };

  constructor(private departamentoService:DepartamentoService, private visitanteService:VisitanteService) {
    this.departamentoService.listaDepartamento().subscribe(
      (x) => this.departamento = x
  );
  this.time$ = this.visitanteService.getDate();
 }
 insertado(){
  this.visitanteService.instertarVisitante(this.visita).subscribe(
    (x) => alert(x.mensaje)
  );
}

 
 ngOnInit(): void {
   
 }
}


