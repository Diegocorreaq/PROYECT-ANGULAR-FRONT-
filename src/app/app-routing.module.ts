import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddModalidadComponent } from './components/add-modalidad/add-modalidad.component';
import { AddDepartamentoComponent } from './components/add-departamento/add-departamento.component';


const routes: Routes = [
  {path:"addModalidad", component: AddDepartamentoComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
