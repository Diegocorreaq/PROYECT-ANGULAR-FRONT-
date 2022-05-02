import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddModalidadComponent } from './components/add-modalidad/add-modalidad.component';
import { AddDepartamentoComponent } from './components/add-departamento/add-departamento.component';
import { AddMascotaComponent } from './components/add-mascota/add-mascota.component';
import { AddHabitanteComponent } from './components/add-habitante/add-habitante.component';


const routes: Routes = [
  {path:"addDepartamento", component: AddDepartamentoComponent},
  {path:"addMascota", component: AddMascotaComponent},
  {path:"addHabitante", component: AddHabitanteComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
