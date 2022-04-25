import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddModalidadComponent } from './components/add-modalidad/add-modalidad.component';
import { AddDepartamentoComponent } from './components/add-departamento/add-departamento.component';
import { AddHabitanteComponent } from './components/add-habitante/add-habitante.component';
import { AddMascotaComponent } from './components/add-mascota/add-mascota.component';
import { AddTipohabitanteComponent } from './components/add-tipohabitante/add-tipohabitante.component';
import { AddTipoususarioComponent } from './components/add-tipoususario/add-tipoususario.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';
import { AddVisitanteComponent } from './components/add-visitante/add-visitante.component';


@NgModule({
  declarations: [
    AppComponent,
    AddModalidadComponent,
    AddDepartamentoComponent,
    AddHabitanteComponent,
    AddMascotaComponent,
    AddTipohabitanteComponent,
    AddTipoususarioComponent,
    AddUsuarioComponent,
    AddVisitanteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
