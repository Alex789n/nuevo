import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registroo = {
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: ''
  }
  
  registrar(){
    const {nombre,apellido,correo,contrasena}=this.registroo;
    if (nombre === "") {
      window.alert("nombre incorrecto");
      return;
    }
    if (apellido === "") {
      window.alert("apellido incorrecto");
      return;
    }
    if (correo === "") {
      window.alert("correo incorrecto");
      return;
    }
    if (contrasena === "") {
      window.alert("contraseña incorrecta");
      return;
    }
    window.alert(`Registro con éxito, hola: ${nombre}`);
  }
  
}
