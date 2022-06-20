import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/servicio.model';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-pago-boleta',
  templateUrl: './pago-boleta.component.html',
  styleUrls: ['./pago-boleta.component.css']
})
export class PagoBoletaComponent implements OnInit {
  servicio: Servicio[]=[];
  constructor(private servicioService:ServicioService) { 
    this.servicioService.listaServicio().subscribe(
      (x) => this.servicio = x
  );
  }

  ngOnInit(): void {
  }

}
