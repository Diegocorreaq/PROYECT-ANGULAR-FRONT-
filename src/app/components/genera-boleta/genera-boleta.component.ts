import { Component, OnInit } from '@angular/core';
import { Boleta } from 'src/app/models/boleta.model';
import { Departamento } from 'src/app/models/departamento.model';
import { Servicio } from 'src/app/models/servicio.model';
import { BoletaService } from 'src/app/services/boleta.service';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-genera-boleta',
  templateUrl: './genera-boleta.component.html',
  styleUrls: ['./genera-boleta.component.css']
})
export class GeneraBoletaComponent implements OnInit {
  departamento: Departamento[]=[];

  servicio: Servicio[]=[];
  listaboleta: Boleta[]=[];
  boleta: Boleta={

    departamento:{
      codDepartamento:-1
      
    },
    servicio:{
      idServicio:-1
    }
  };
  constructor(private departamentoService:DepartamentoService,private servicioService:ServicioService,private servicioBoleta:BoletaService) {
    this.departamentoService.listaDepartamento().subscribe(
      (x) => this.departamento = x
  );
  this.servicioService.listaServicio().subscribe(
    (x) => this.servicio = x
  );
  this.servicioBoleta.listaBoleta().subscribe(
    (x) => this.listaboleta = x
  );


   }
   insertado(){
    
    this.servicioBoleta.insertaBoleta(this.boleta).subscribe(
      (x) => alert(x.mensaje)
    );
    this.servicioBoleta.listaBoleta().subscribe(
      (x) => this.listaboleta = x
    );
   
  }

  ngOnInit(): void {
    
  }

}