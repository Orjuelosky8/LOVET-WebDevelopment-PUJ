import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './home/footer/footer.component';
import { StudentTableComponent } from './student/student-table/student-table.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { FormsModule } from '@angular/forms';
import { EmoticonPipe } from './pipes/emoticon.pipe';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { ErrorPageComponent } from './error/error-page/error-page.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { ListaClientesComponent } from './crud-clientes/lista-clientes/lista-clientes.component';
import { ListaMascotasComponent } from './crud-mascotas/lista-mascotas/lista-mascotas.component';
import { CommonModule } from '@angular/common';
// import { LoginComponent } from './authentication/login/login.component';
import { LogupComponent } from './authentication/logup/logup.component';
import { LandingPageComponent } from './home/landing-page/landing-page.component';
import { DetallesMascotaComponent } from './crud-mascotas/detalles-mascota/detalles-mascota.component';
import { CrearMascotaComponent } from './crud-mascotas/crear-mascota/crear-mascota.component';
import { ServiciosComponent } from './home/servicios/servicios.component';
import { PersonalComponent } from './home/personal/personal.component';
import { CrearClienteComponent } from './crud-clientes/crear-cliente/crear-cliente.component';
import { DetallesClienteComponent } from './crud-clientes/detalles-cliente/detalles-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentTableComponent,
    StudentDetailComponent,
    StudentFormComponent,
    ListaClientesComponent,
    ListaMascotasComponent,
    EmoticonPipe,
    AdminPageComponent,
    ErrorPageComponent,
    NavBarComponent,
    FooterComponent,
    // LoginComponent,
    LogupComponent,
    LandingPageComponent,
    DetallesMascotaComponent,
    CrearMascotaComponent,
    ServiciosComponent,
    PersonalComponent,
    CrearClienteComponent,
    DetallesClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
