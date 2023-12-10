import { Injectable, numberAttribute } from '@angular/core';
import { Categoria } from './categoria';
import { Router } from '@angular/router';
import { Producto } from './producto';
@Injectable({
  providedIn: 'root'
})
export class DatosProyService {

  constructor(private router: Router) { };
  busqueda = "";
  vecBusKnow:Producto[] =[];
  vecBusqueda: Producto[] = [
    {
      nombre:"Alarma Seguridad",
      precio: 125,
      categoria:"Electronica",
      imagenUrl:"https://hikvision.lat/img/alarma/alarma-hikvision-psp-1.jpg"
    },

    {
      nombre:"Camara Seguridad",
      precio: 69,
      categoria:"Seguridad",
      imagenUrl:"https://www.securame.com/images/100x100/ds-2cd2023g0.jpg"
    },

    {
      nombre:"Cerraduras Digitales",
      precio: 2718,
      categoria:"Electronica",
      imagenUrl:"https://cdn.tvc.mx/media/1623/CDL210PR-PPAL.jpg"
    },

    {
      nombre:"Deshidratador de Alimentos",
      precio: 15772,
      categoria:"Electronica",
      imagenUrl:"https://www.vidaxl.es/on/demandware.static/-/Sites-vidaxl-catalog-master-sku/default/dwa83ee6c9/hi-res/536/638/730/743/50301/image_2_50301.jpg"
    },

    {
      nombre:"Dell Inspiron 15",
      precio:1000,
      categoria:"Electronica",
      imagenUrl:"https://i.dell.com/is/image/DellContent/content/dam/images/products/laptops-and-2-in-1s/inspiron/15-3520-non-touch/in3520nt-cnb-00060rb055-bk.psd?fmt=pjpg&pscan=auto&scl=1&wid=4396&hei=3212&qlt=100,1&resMode=sharp2&size=4396,3212&chrss=full&imwidth=5000"
    },

    {
      nombre:"Celular",
      precio: 3108,
      categoria:"Electronica",
      imagenUrl:"https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/e/0/e06674-pocophone-xiaomi-santa-cruz_1.jpg"
    },

    {
      nombre:"Television",
      precio: 2999,
      categoria:"Electronica",
      imagenUrl:"https://camsabo.vtexassets.com/arquivos/ids/160482-800-auto?v=637917634926430000&width=800&height=auto&aspect=true"
    },

    {
      nombre:"Video Portero",
      precio: 828,
      categoria:"Electronica",
      imagenUrl:"https://cdn.shopify.com/s/files/1/0588/1380/8845/products/Bf7OwXqbwU_large.jpg?v=1671822334"
    },
  ];
  vecCategorias: Categoria[] = [
    {nombre: "Accesorios",catV: [
      "Acc. para Motoss y Cuatriciclos",
      "Accesorios Náuticos",
      "Accesorios de Auto y Camioneta",
      "Accesorios para Línea Pesada",
      "Audio para Vehículos",
      "GNC",
      "Herramientas para Vehículos",
      "Limpieza de Vehículos",
      "Llantas y Accesorios",
      "Motos",
      "Navegadores GPS para Vehículos",
      "Performance",
      "Repuestos Autos y Camionetas",
      "Repuestos Motos y Cuatriciclos",
      "Repuestos Náuticos",
      "Repuestos de Línea Pesada",
      "Seguridad Vehicular",
      "Servicio Programado",
      "Tags para el Pago de Peajes",
      "Tuning",
      "Otros"
    ]},
    {nombre: "Otras Categorias Tecnologicas", catV:[
      "Monitores",
      "Parlantes",
      "Cargadores",
      "Cables tipo C",
      "Mouse",
      "Teclados",
      "Audifonos",
      "Memorias",
      "Impresoras",
      "Camaras",
      "Microfonos",
      "Computadoras",
      "Celulares",
      "Laptops",
      "Televisores",
      "Videojuegos",
      "Electrodomesticos",
      "otros"
    ]
  }
  ]
  swBus: boolean = true;
  Asignar(datBus: string) {
    // Realiza las operaciones necesarias con la información introducida
    if(datBus == ''){
      this.swBus = false
    }
    this.busqueda = datBus;
    // Redirecciona a la página deseada
  }
  

  // swiych por si no hay algun producto
  swNoBus: boolean=false;
  // Metodo para organizar las busquedas
  AplicarBus(dato:string){
    let cont =0
    for (let index = 0; index < this.vecBusqueda.length; index++) {
        if(dato == this.vecBusqueda[index].nombre){
          this.vecBusKnow.push(this.vecBusqueda[index]);
          cont++;
        }
    }
    if (cont == 0) {
      this.swNoBus = true;
    }
  }
}
