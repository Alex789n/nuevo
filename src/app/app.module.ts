import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';


const rutas:Routes = [
  {path: "categorias",
    component: CategoriaComponent
  },
  {
    path: "busqueda",
    component: BusquedaComponent

  },
  {
    path: "footer",
    component: FooterComponent
  },
  {
    path: "registro",
    component:RegistroComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "inicio",
    component: InicioComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriaComponent,
    BusquedaComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(rutas),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
