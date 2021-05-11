import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Maestro } from "src/app/Modelo/Maestro";
import { Usuario } from "src/app/Modelo/Usuario";
import { ServiceService } from "src/app/Service/service.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"],
})
export class AddComponent implements OnInit {
  maestroForm: FormGroup = new FormGroup({});

  constructor(
    private router: Router,
    private service: ServiceService,
    form: FormBuilder
  ) {
    this.BuildForm();
  }

  ngOnInit(): void {}

  BuildForm() {
    this.maestroForm = new FormGroup({
      nombre: new FormControl(),
      num_empleado: new FormControl(),
      estatus: new FormControl(),
      tipo: new FormControl(),
      usuario: new FormControl(),
      password: new FormControl(),
    });
  }

  Guardar() {
    const body: any = {
      // @ts-ignore: Object is possibly 'null'.
      usuario: this.maestroForm.get("usuario").value,
      // @ts-ignore: Object is possibly 'null'.
      password: this.maestroForm.get("password").value,
      // @ts-ignore: Object is possibly 'null'.
      nombre: this.maestroForm.get("nombre").value,
      // @ts-ignore: Object is possibly 'null'.
      num_empleado: this.maestroForm.get("num_empleado").value,
      // @ts-ignore: Object is possibly 'null'.
      tipo: this.maestroForm.get("tipo").value,
      // @ts-ignore: Object is possibly 'null'.
      estatus: this.maestroForm.get("estatus").value,
    };
    this.service.createMaestro(body).subscribe((data) => {
      alert("Mamonaso, guardaste un profe xD");
      this.router.navigate(["listar"]);
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
