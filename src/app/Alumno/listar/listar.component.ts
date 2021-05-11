import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../../Service/service.service';
import {Alumno} from 'src/app/Modelo/Alumno';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarAlumnoComponent implements OnInit {

  alumnos:Alumno[]=[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getAlumnos()
    .subscribe(data=>{
      this.alumnos=data;
    })
  }

  Delete(alumno:Alumno){
    this.service.deleteAlumno(alumno)
    .subscribe(data=>{
      this.alumnos=this.alumnos.filter(m=>m!==alumno);
      alert("Alumno Eliminado mmm típico")
    })
  }

}
