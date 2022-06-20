import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento.model';
import { Servicio } from 'src/app/models/servicio.model';
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
  constructor(private departamentoService:DepartamentoService,private servicioService:ServicioService) {
    this.departamentoService.listaDepartamento().subscribe(
      (x) => this.departamento = x
  );
  this.servicioService.listaServicio().subscribe(
    (x) => this.servicio = x
);
   }

  ngOnInit(): void {
  }

}
