import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FormsModule } from '@angular/forms'; 
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [NavbarComponent, FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {

  nombreCompleto: string = '';
  nombreUsuario: string = '';
  correoUsuario: string = '';
  fechaNacimientoUsuario: string = '';
  contrasenaUsuario1: string = '';
  contrasenaUsuario2: string = '';
  direccionDespacho: string = '';

  registrarUsuario(form: NgForm): void {
    if (!this.contrasenaUsuario1 || this.contrasenaUsuario1 !== this.contrasenaUsuario2) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const passwordPattern = /^(?=.*[0-9])(?=.*[A-Z]).{6,18}$/;
    if (!passwordPattern.test(this.contrasenaUsuario1)) {
      alert('La contraseña debe contener al menos un número y una letra en mayúscula.');
      return;
    }

    const fechaNacimientoDate = new Date(this.fechaNacimientoUsuario);
    const hoy = new Date();
    const edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
    if (edad < 13) {
      alert('Debes tener al menos 13 años para registrarte en este sitio.');
      return;
    }
    
    alert('Todas las validaciones fueron exitosas. ¡Usuario Registrado!');
   
  }

  limpiarFormulario(): void {
    // Aquí puedes agregar la lógica para limpiar los campos del formulario
    this.nombreCompleto = '';
    this.nombreUsuario = '';
    this.correoUsuario = '';
    this.fechaNacimientoUsuario = '';
    this.contrasenaUsuario1 = '';
    this.contrasenaUsuario2 = '';
    this.direccionDespacho = '';
  }


}
