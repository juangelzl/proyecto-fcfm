import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/login.component';
import { AddComponent } from './Maestro/add/add.component';
import { EditComponent } from './Maestro/edit/edit.component';
import { ListarComponent } from './Maestro/listar/listar.component';
import { AddAlumnoComponent } from './Alumno/add/add.component';
import { EditAlumnoComponent } from './Alumno/edit/edit.component';
import { ListarAlumnoComponent } from './Alumno/listar/listar.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  { path: 'listar', component: ListarComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit', component: EditComponent },
  {path:'listarAlumno', component:ListarAlumnoComponent},
  {path:'addAlumno', component:AddAlumnoComponent},
  {path:'editAlumno', component:EditAlumnoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
