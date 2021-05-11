import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoUlrich';
  constructor(private router:Router){}

  Listar(){
    this.router.navigate(['listar'])
  }
  Nuevo(){
    this.router.navigate(['add'])
  }
  ListarAlumno(){
    this.router.navigate(['listarAlumno'])
  }
  NuevoAlumno(){
    this.router.navigate(['addAlumno'])
  }
}
