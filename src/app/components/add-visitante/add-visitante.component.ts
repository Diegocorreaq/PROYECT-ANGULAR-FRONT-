import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento.model';
import { Visitante } from 'src/app/models/visitante.model';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { VisitanteService } from 'src/app/services/visitante.service';

@Component({
  selector: 'app-add-visitante',
  templateUrl: './add-visitante.component.html',
  styleUrls: ['./add-visitante.component.css']
})
export class AddVisitanteComponent implements OnInit {

  departamento: Departamento[]=[];
  visitante: Visitante = {
    departamento:{
      codDepartamento:-1
    }
  };

  constructor(private departamentoService:DepartamentoService, private visitanteService:VisitanteService) {
    this.departamentoService.listaDepartamento().subscribe(
      (x) => this.departamento = x
  );
 }

 insertado(){
   this.visitanteService.instertarVisitante(this.visitante).subscribe(
     (x) => alert(x.mensaje)
   );
 }
 ngOnInit(): void {
   
 }
}


