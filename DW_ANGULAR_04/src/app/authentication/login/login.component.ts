import { Component } from '@angular/core';
// import { ClienteService } from './../../../services/clientes.service';
import { Router } from '@angular/router';
// import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // userName!: string;
  // password!: string;

  // constructor(private clienteService: ClienteService, private router: Router) {}

  // login() {
  //   this.clienteService.verificarCredenciales(this.userName, this.password).subscribe({
  //     next: (resultado) => {
  //       if (resultado) {
  //         console.log("Login exitoso");
  //         this.router.navigate(['/clientes']);
  //       } else {
  //         Swal.fire({
  //           title: 'Error!',
  //           text: 'Usuario y/o contraseña incorrectos, intentelo nuevamente.',
  //           icon: 'error',
  //           confirmButtonText: 'Aceptar'
  //         });
  //         console.log("Credenciales incorrectas");
  //       }
  //     },
  //     error: (error) => {
  //       console.error("Error al verificar credenciales", error);
  //       alert("Error al verificar credenciales");
  //     }
  //   });
  // }
  
}
