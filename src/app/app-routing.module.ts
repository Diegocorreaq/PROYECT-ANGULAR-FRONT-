import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartamentoComponent } from './components/add-departamento/add-departamento.component';
import { AddHabitanteComponent } from './components/add-habitante/add-habitante.component';
import { AddMascotaComponent } from './components/add-mascota/add-mascota.component';
import { AddVisitanteComponent } from './components/add-visitante/add-visitante.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';
import { ConsultaVisitanteComponent } from './components/consulta-visitante/consulta-visitante.component';
import { GeneraBoletaComponent } from './components/genera-boleta/genera-boleta.component';
import { PagoBoletaComponent } from './components/pago-boleta/pago-boleta.component';
import { RegistraIncidenteComponent } from './components/registra-incidente/registra-incidente.component';
import { ConsultaIncidenteComponent } from './components/consulta-incidente/consulta-incidente.component';


const routes: Routes = [
  {path:"addDepartamento", component: AddDepartamentoComponent},  
  {path:"addHabitante", component: AddHabitanteComponent},
  {path:"addMascota", component: AddMascotaComponent},  
  {path:"addVisitante", component: AddVisitanteComponent},
  {path:"addVisita", component: ConsultaVisitanteComponent},
  {path:"addUsuario", component: AddUsuarioComponent},
  {path:"addGeneraBoleta", component: GeneraBoletaComponent},
  {path:"addPagoBoleta", component: PagoBoletaComponent},
  {path:"addConsultaIncidente", component: ConsultaIncidenteComponent},
  {path:"addRegistraIncidente", component: RegistraIncidenteComponent},
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
