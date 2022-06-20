import { Component, OnInit } from '@angular/core';
import { Boleta } from 'src/app/models/boleta.model';
import { Departamento } from 'src/app/models/departamento.model';
import { Servicio } from 'src/app/models/servicio.model';
import { BoletaService } from 'src/app/services/boleta.service';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-pago-boleta',
  templateUrl: './pago-boleta.component.html',
  styleUrls: ['./pago-boleta.component.css'],
})
export class PagoBoletaComponent implements OnInit {
  listaDepartamentos: Departamento[] = [];
   //Ng model
   departamento:number=-1;
   servicio:number=-1;
   anio:number=-1;
   estado:number=1;

  listaServicios: Servicio[] = [];
  listaboleta: Boleta[] = [];
  boleta: Boleta = {
    departamento: {
      codDepartamento: -1,
    },
    servicio: {
      idServicio: -1,
    },
  };

  constructor(
    private departamentoService: DepartamentoService,
    private servicioService: ServicioService,
    private boletaService: BoletaService
  ) {
    this.cargarCombos();
  }

  cargarCombos() {
    this.departamentoService
      .listaDepartamento()
      .subscribe((x) => (this.listaDepartamentos = x));
    this.servicioService
      .listaServicio()
      .subscribe((x) => (this.listaServicios = x));
  }

  consultaBoletaParametrosEstado(){
    this.boletaService.consultaBoletaParametrosEstado(this.servicio, this.departamento, this.anio, this.estado?1:0).subscribe(
      (x) => {
        this.listaboleta = x.lista;
        //alert(x.mensaje);
      }
    );
  }
  busca(aux:Boleta){
    this.boleta = aux;
  }
  cambioEstado(aux:Boleta){
    aux.estado = aux.estado == 1 ? 0 : 1;
    this.boletaService.actualizaBoleta(aux).subscribe();
  }

  ngOnInit(): void {}
}
