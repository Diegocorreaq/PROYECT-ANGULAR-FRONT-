import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento.model';
import { Habitante } from 'src/app/models/habitante.model';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { HabitanteService } from 'src/app/services/habitante.service';

@Component({
  selector: 'app-add-habitante',
  templateUrl: './add-habitante.component.html',
  styleUrls: ['./add-habitante.component.css']
})
export class AddHabitanteComponent implements OnInit {

  departamento: Departamento[]=[];
  habitante: Habitante = {
    departamento:{
      codDepartamento:-1
    }
  };

  constructor(private departamentoService:DepartamentoService, private habitanteService:HabitanteService) {

    this.departamentoService.listaDepartamento().subscribe(
      (x) => this.departamento = x
  );
 }

 insertado(){
   this.habitanteService.instertarHabitante(this.habitante).subscribe(
     (x) => alert(x.mensaje)
   );
 }
 ngOnInit(): void {
   
 }
}



