import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Maestro/listar/listar.component';
import { AddComponent } from './Maestro/add/add.component';
import { EditComponent } from './Maestro/edit/edit.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from '../app/Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './Login/login.component';
import { AddAlumnoComponent } from './Alumno/add/add.component';
import { ListarAlumnoComponent } from './Alumno/listar/listar.component';
import { EditAlumnoComponent } from './Alumno/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    LoginComponent,
    AddAlumnoComponent,
    ListarAlumnoComponent,
    EditAlumnoComponent,
    // ReactiveFormsModule,
    // RouterModule
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
  providers: [ServiceService, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
