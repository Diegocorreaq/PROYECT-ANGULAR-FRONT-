import { Component, OnInit } from '@angular/core';
import { Incidente } from 'src/app/models/incidente.model';
import { IncidenteService } from 'src/app/services/incidente.service';

@Component({
  selector: 'app-actualiza-incidente',
  templateUrl: './actualiza-incidente.component.html',
  styleUrls: ['./actualiza-incidente.component.css']
})
export class ActualizaIncidenteComponent implements OnInit {
  incidente: Incidente = {
    departamento: {
      codDepartamento: -1,
      descripcion:""
    },
    causaIncidente: {
      idCausaIncidente: -1,
      descripcion:""
    }
  }
  constructor(private incidenteService: IncidenteService) { }
  
  actualiza(){
    this.incidenteService.actualizaIncidente(this.incidente).subscribe((x) => {
      alert(x.mensaje);
    });
  }
  ngOnInit(): void {
  }

}
