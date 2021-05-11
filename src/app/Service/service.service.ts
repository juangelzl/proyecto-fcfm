import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Maestro } from '../Modelo/Maestro';
import { Usuario } from '../Modelo/Usuario';
import { Alumno } from '../Modelo/Alumno';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}
  Url = 'http://localhost:8080/';

  getMaestros() {
    return this.http.get<Maestro[]>(this.Url + 'maestros');
  }
  getAlumnos(){
    return this.http.get<Alumno[]>(this.Url+'alumnos');
  }

  createMaestro(maestro: Maestro) {
    return this.http.post<Maestro>(this.Url + 'maestros', maestro);
  }

  createUsuario(usuario: Usuario) {
    return this.http.post<Maestro>(this.Url, usuario);
  }
  createAlumno(alumno:Alumno){
    return this.http.post<Alumno>(this.Url +'alumnos',alumno);
  }

  deletePersona(maestro: Maestro) {
    return this.http.delete<Maestro>(this.Url + 'maestros/' + maestro.id);
  }

  ingresar(body: any) {
    return this.http.post<any>(this.Url + 'login', body);
  }
  deleteAlumno(alumno:Alumno){
    return this.http.delete<Alumno>(this.Url+"alumnos/"+alumno.id)
  }
  getMaestroId(id:Number){
    return this.http.get<Maestro>(this.Url+"/"+id);
  }
  updateMaestro(maestro:Maestro){
    return this.http.put<Maestro>(this.Url+'/'+ maestro.id,maestro);
  }
}
