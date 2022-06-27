import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento.model';
import { Visita } from 'src/app/models/visita.model';
import { Visitante } from 'src/app/models/visitante.model';
import { Observable } from 'rxjs';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { VisitanteService } from 'src/app/services/visitante.service';
import { VisitaService } from 'src/app/services/visita.service';

@Component({
  selector: 'app-add-visitante',
  templateUrl: './add-visitante.component.html',
  styleUrls: ['./add-visitante.component.css']
})
export class AddVisitanteComponent implements OnInit {
  dni:string="";
  today= new Date();
  time$: Observable<any>;
  departamento: Departamento[]=[];
  visitante: Visitante[]=[];
  visita: Visita = {
    departamento:{
      codDepartamento:-1
    },
    visitante:{
      idVisitante:0,
        nombre:"",
        dni:"",
        apellido:""
        
    }  
  };

  constructor(private departamentoService:DepartamentoService, private visitanteService:VisitanteService, private visitaService:VisitaService) {
    this.departamentoService.listaDepartamento().subscribe(
      (x) => this.departamento = x
  );
  this.time$ = this.visitaService.getDate();
 }

    insertado(){
      this.visitaService.instertarVisita(this.visita).subscribe(
        (x) => alert(x.mensaje)
      );
    }
    consultaVisitanteDni(){
      this.visitanteService.BuscaVisitantePorDni(this.dni).subscribe(
        (x) => {
          this.visita.visitante = x.nombre;
        }
      );
    }
    

 
 ngOnInit(): void {
   
 }
}