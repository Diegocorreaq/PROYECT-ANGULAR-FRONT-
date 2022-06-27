import { Component, OnInit } from '@angular/core';
import { CausaIncidente } from 'src/app/models/causa-incidente.model';
import { Departamento } from 'src/app/models/departamento.model';
import { Incidente } from 'src/app/models/incidente.model';
import { CausaIncidenteService } from 'src/app/services/causa-incidente.service';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { IncidenteService } from 'src/app/services/incidente.service';

@Component({
  selector: 'app-consulta-incidente',
  templateUrl: './consulta-incidente.component.html',
  styleUrls: ['./consulta-incidente.component.css']
})
export class ConsultaIncidenteComponent implements OnInit {
  listaDepartamentos: Departamento[] = [];
  
   //Ng model
   departamento:number=-1;
   causaIncidente:number=-1;
   estado:number=1;

  listaCausaIncidente: CausaIncidente[] = [];
  listaIncidente: Incidente[] = [];
  incidente: Incidente = {
    departamento: {
      codDepartamento: -1,
    },
    causaIncidente: {
      idCausaIncidente: -1,
    }
  }
  constructor(
    private departamentoService: DepartamentoService,
    private causaIncidenteService: CausaIncidenteService,
    private incidenteService: IncidenteService
    ) { 
      this.cargarCombos();
    }

  ngOnInit(): void {
  }
  cargarCombos(){
    this.departamentoService
      .listaDepartamento()
      .subscribe((x) => (this.listaDepartamentos = x));
    this.causaIncidenteService
      .listaCausaIncidente()
      .subscribe((x) => (this.listaCausaIncidente = x));
  }
  consultaIncidenteParametrosEstado(){
    this.incidenteService.consultaIncidenteParametrosEstado( this.departamento,this.causaIncidente, this.estado?1:0).subscribe(
      (x) => {
        this.listaIncidente = x.lista;
      }
    );
  }
  busca(aux: Incidente) {
    this.incidente = aux;
  }
  cambioEstado(aux: Incidente) {
    aux.estado = aux.estado == 1 ? 0 : 1;
    this.incidenteService.actualizaIncidente(aux).subscribe();
  }
 
  

}
