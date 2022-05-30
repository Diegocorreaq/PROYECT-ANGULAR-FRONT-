import { Component, OnInit } from '@angular/core';
import { Visitante } from 'src/app/models/visitante.model';
import { VisitanteService } from 'src/app/services/visitante.service';

@Component({
  selector: 'app-consulta-visitante',
  templateUrl: './consulta-visitante.component.html',
  styleUrls: ['./consulta-visitante.component.css']
})
export class ConsultaVisitanteComponent implements OnInit {

  //Ng model
  dni:string="";
  nombre:string="";
  apellido:string="";
  estado:number=1;

  //Grilla
  visitantes: Visitante[]=[];

  constructor(private visitanteService:VisitanteService) { }

  consultaVisitante(){
    this.visitanteService.consultaVisitante(this.dni, this.nombre, this.apellido, this.estado?1:0).subscribe(
      (x) => {
        this.visitantes = x.lista;
        //alert(x.mensaje);
      }
    );
  }

  ngOnInit(): void {
  }

}
