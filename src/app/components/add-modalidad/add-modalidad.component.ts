import { Component, OnInit } from '@angular/core';
import { Deporte } from 'src/app/models/deporte.model';
import { Modalidad } from 'src/app/models/modalidad.model';
import { DeporteService } from 'src/app/services/deporte.service';
import { ModalidadService } from 'src/app/services/modalidad.service';

@Component({
  selector: 'app-add-modalidad',
  templateUrl: './add-modalidad.component.html',
  styleUrls: ['./add-modalidad.component.css']
})
export class AddModalidadComponent implements OnInit {

//Variables globales
  deportes: Deporte[]=[];
  modalidad: Modalidad = {
    deporte:{
      idDeporte:-1
    }
  };

  constructor(private deporteService:DeporteService, private modalidadService:ModalidadService) {

    this.deporteService.listaDeporte().subscribe(
        (x) => this.deportes = x
    );
   }

   insertado(){
     this.modalidadService.insertaModalidad(this.modalidad).subscribe(
       (x) => alert(x.mensaje)
     );
   }

  ngOnInit(): void {
  }

}
