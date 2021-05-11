import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Maestro } from 'src/app/Modelo/Maestro';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Alumno } from 'src/app/Modelo/Alumno';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddAlumnoComponent implements OnInit {
  alumnoForm:FormGroup=new FormGroup({});

  constructor(
    private router: Router,
    private service: ServiceService,
    form: FormBuilder
  ) {
    this.BuildForm();
  }

  ngOnInit(): void {}

  BuildForm() {


    this.alumnoForm = new FormGroup({
      nombre: new FormControl(),
      estatus: new FormControl(),
      matricula: new FormControl(),
      usuario: new FormControl(),
      password: new FormControl(),
    });
  }

  Guardar() {
    const body:any = {
      // @ts-ignore: Object is possibly 'null'.
      usuario:this.alumnoForm.get('usuario').value,
      // @ts-ignore: Object is possibly 'null'.
      password:this.alumnoForm.get('password').value,
      // @ts-ignore: Object is possibly 'null'.
      nombre:this.alumnoForm.get('nombre').value,
      // @ts-ignore: Object is possibly 'null'.
      matricula:this.alumnoForm.get('matricula').value,
    }
    this.service.createAlumno(body).subscribe((data) => {
      alert('Mamonaso, guardaste un alumno xD');
      this.router.navigate(['listarAlumno']);
    });
  }

  // addMaestro(maestro:Maestro){
  //   this.service.createMaestro(maestro)
  //   .subscribe(data=>{
  //     alert("Mamonaso, guardaste un profe xD");
  //     this.router.navigate(["listar"]);
  //   })
  // }

  // addUsuario(usuario:Usuario){
  //   this.service.createUsuario(usuario)
  //   .subscribe(data=>{
  //     alert("Mamonaso, guardaste un profe xD");
  //     this.router.navigate(["listar"]);
  //   })
  // }
}
