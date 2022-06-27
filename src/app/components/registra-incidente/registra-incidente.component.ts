import { Component, OnInit } from '@angular/core';
import { CausaIncidente } from 'src/app/models/causa-incidente.model';
import { Departamento } from 'src/app/models/departamento.model';
import { Incidente } from 'src/app/models/incidente.model';
import { CausaIncidenteService } from 'src/app/services/causa-incidente.service';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { IncidenteService } from 'src/app/services/incidente.service';

@Component({
  selector: 'app-registra-incidente',
  templateUrl: './registra-incidente.component.html',
  styleUrls: ['./registra-incidente.component.css']
})
export class RegistraIncidenteComponent implements OnInit {
  departamento: Departamento[]=[];
  causaIncidente: CausaIncidente[]=[];
  incidente:Incidente={
    departamento:{
      codDepartamento:-1
    },causaIncidente:{
      idCausaIncidente:-1
    }
  
  };
  constructor(private departamentoService:DepartamentoService,private causaIncidenteService:CausaIncidenteService,private incidenteService:IncidenteService) { 
    this.departamentoService.listaDepartamento().subscribe(
      (x) => this.departamento = x
  );
  this.causaIncidenteService.listaCausaIncidente().subscribe(
    (x) => this.causaIncidente = x
);
  }
  insertado(): void{
    this.incidenteService.insertaIncidente(this.incidente).subscribe(
      (x) => alert(x.mensaje)
    );
  }

  ngOnInit(): void {
  }

}
