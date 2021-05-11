import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../../Service/service.service';
import {Maestro} from 'src/app/Modelo/Maestro';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  maestros:Maestro[]=[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getMaestros()
    .subscribe(data=>{
      this.maestros=data;
    })
  }

  Delete(maestro:Maestro){
    this.service.deletePersona(maestro)
    .subscribe(data=>{
      this.maestros=this.maestros.filter(m=>m!==maestro);
      alert("Maestro Eliminado mmm típico")
    })
  }

}
