import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { StudentTableComponent } from './student/student-table/student-table.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { ErrorPageComponent } from './error/error-page/error-page.component';
import { ListaClientesComponent } from './crud-clientes/lista-clientes/lista-clientes.component';
import { ListaMascotasComponent } from './crud-mascotas/lista-mascotas/lista-mascotas.component';
import { CrearClienteComponent } from './crud-clientes/crear-cliente/crear-cliente.component';
import { CrearMascotaComponent } from './crud-mascotas/crear-mascota/crear-mascota.component';
import { DetallesMascotaComponent } from './crud-mascotas/detalles-mascota/detalles-mascota.component';
import { LandingPageComponent } from './home/landing-page/landing-page.component';
import { ServiciosComponent } from './home/servicios/servicios.component';
import { DetallesClienteComponent } from './crud-clientes/detalles-cliente/detalles-cliente.component';
import { LoginComponent } from './authentication/login/login.component';
import { PersonalComponent } from './home/personal/personal.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'inicio', component: LandingPageComponent },
  { path: 'Servicios', component: ServiciosComponent},
  { path: 'clientes', component: ListaClientesComponent },
  { path: 'mascotas', component: ListaMascotasComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'student', component: StudentDetailComponent },
  { path: 'student/detail/:id', component: StudentDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: 'clientes' },
  { path: '**', component: ErrorPageComponent },
  { path: 'clientes/login', component: LoginComponent},
  { path: 'clientes/agregar', component: CrearClienteComponent},
  { path: 'Servicios', component: ServiciosComponent},
  { path: 'mascotas', component: ListaMascotasComponent },
  { path: 'mascotas/agregar', component: CrearMascotaComponent },
  { path: 'mascota/:idMascota', component: DetallesMascotaComponent },
  { path: 'cliente/:id', component: DetallesClienteComponent }, 
  { path: 'Personal', component: PersonalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
