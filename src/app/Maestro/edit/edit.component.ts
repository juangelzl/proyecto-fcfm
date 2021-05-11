import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Maestro } from "src/app/Modelo/Maestro";
import { Usuario } from "src/app/Modelo/Usuario";
import { ServiceService } from "src/app/Service/service.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"],
})
export class EditComponent implements OnInit {
  maestroForm: FormGroup = new FormGroup({});

  constructor(
    private router: Router,
    private service: ServiceService,
    form: FormBuilder
  ) {
    this.BuildForm();
  }
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
  ngOnInit() {
    this.Editar();
  }
  Editar() {
    let id = localStorage.getItem("id");
   // @ts-ignore: Object is possibly 'null'.
    this.service.getMaestroId(+id).subscribe((data) => {
      alert("Mamonaso, editaste a un profe xD");
      this.router.navigate(["listar"]);
    });

    // //  Editar(){
    //     let id=localStorage.getItem("id");
    //     this.service.getMaestroId(+id)
    //     .subscribe(data=>{this.maestroForm=data;})
    //   }
  }
  Actualizar(maestro:Maestro){
    this.service.updateMaestro(maestro)
    .subscribe(data=>{
      this.maestroForm;
      alert("Mamonaso, Actualizaste a un profe xD");
      this.router.navigate(["listar"]);
    })
  }
}
