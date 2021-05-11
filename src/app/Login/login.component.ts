import { CookieService } from "ngx-cookie-service";
import { ServiceService } from "src/app/Service/service.service";

import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(
    private router: Router,
    private service: ServiceService,
    form: FormBuilder,
    private cookieService: CookieService
  ) {
    this.BuildForm();
  }

  ngOnInit(): void {}

  BuildForm(): void {
    this.loginForm = new FormGroup({
      usuario: new FormControl(),
      password: new FormControl(),
    });
  }

  ingresar(): void {
    const body: any = {
      // @ts-ignore: Object is possibly 'null'.
      usuario: this.loginForm.get("usuario").value,
      // @ts-ignore: Object is possibly 'null'.
      password: this.loginForm.get("password").value,
    };
    this.service.ingresar(body).subscribe((data) => {
      if (data) {
        alert("Bienvenido al sistema");
        this.cookieService.set("login", "true");
        this.router.navigate(["listar"]);
      } else {
        alert("Usuario o Contraseña incorrectos");
        this.cookieService.set("login", "false");
      }
    });
  }
}
