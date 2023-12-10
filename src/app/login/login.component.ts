import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = {
    email: '',
    password: ''
  }
  
  ingresar(){
    const {email,password}=this.usuario;
    if(email=="alex@gmail.com"){
      console.log("nice es alex");
      if(password=="noxlug789"){
        window.alert(`Bienvenido: ${email}`);
        
      }else{
        window.alert(`Contraseña incorrecta`);
      }
    }
    if(email=="andy@gmail.com"){
      console.log("nice es andy");
      if(password=="contraseña2"){
        window.alert(`Bienvenido: ${email}`);
      }else{
        window.alert(`Contraseña incorrecta`);
      }
    }
    if(email=="araceli@gmail.com"){
      console.log("nice es araceli");
      if(password=="contraseña3"){
        window.alert(`Bienvenido: ${email}`);
      }else{
        window.alert(`Contraseña incorrecta`);
      }
    }
  }
}
