import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento.model';
import { Mascota } from 'src/app/models/mascota.model';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-add-mascota',
  templateUrl: './add-mascota.component.html',
  styleUrls: ['./add-mascota.component.css']
})
export class AddMascotaComponent implements OnInit {

  departamento: Departamento[]=[];
  mascota: Mascota = {
    departamento:{
      codDepartamento:-1
    }
  };

  constructor(private departamentoService:DepartamentoService, private mascotaService:MascotaService) {

    this.departamentoService.listaDepartamento().subscribe(
        (x) => this.departamento = x
    );
   }

   insertado(){
     this.mascotaService.insertaMascota(this.mascota).subscribe(
       (x) => alert(x.mensaje)
     );
   }
   ngOnInit(): void {
  }
}
