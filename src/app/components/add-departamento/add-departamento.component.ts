import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento.model';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-add-departamento',
  templateUrl: './add-departamento.component.html',
  styleUrls: ['./add-departamento.component.css']
})
export class AddDepartamentoComponent implements OnInit {
departamento: Departamento={};


  constructor(private departamentoService:DepartamentoService) { }
  insertado(){
    this.departamentoService.instertarDepartamento(this.departamento).subscribe(
      (x) => alert(x.mensaje)
    );
  }
  ngOnInit(): void {
  }

  

}
