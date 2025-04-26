import { Component} from '@angular/core';
import { Receta } from '../../model/modelos';
import Swal from 'sweetalert2';
import { ApiService } from '../../services/api.service';
import { RecetaAPI } from '../../model/modeloApi';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-lista-receta',
  standalone: false,
  templateUrl: './lista-receta.component.html',
  styleUrl: './lista-receta.component.css'
})
export class ListaRecetaComponent  {

  TipoReceta = '';
  receta: Receta[] = []; 
  url = 'https://alqueria.com.co/sites/default/files/styles/1100x530/public/2024-06/Clasificacion-de-los-alimentos_0.png?h=a5100716&itok=pEWEIvqP';
  url1 = 'https://www.geo-ref.net/i/gebiete.png';
  categorias: string[] = ['Beef', 'Chicken', 'Vegetarian', 'Seafood', 'Dessert','Side'];


  category: string | null = null;
  recetaDetalle?: RecetaAPI;
 
   constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) {
     this.category = this.route.snapshot.paramMap.get('category'); //se obtiene el valor de la categoría en la URL
 
     if (this.category) {
       this.apiService.obtenerDetalle(this.category).subscribe((data) => {   //se llama al servicio para poder buscar las recetas por su categoria
         if (data.meals.length > 0) {
           this.recetaDetalle = data.meals[0];
           console.log("Receta cargada correctamente:", this.recetaDetalle); //se imprimen a traves del log las recetas que llegan y las que no se indica que no se encuentran
         } else {
           console.log("No se ha encontrado ninguna receta con el id seleccionado");
         }
       });
     }
 }

  GuardarElemento(): void {
    if (this.TipoReceta.length === 0) {
      Swal.fire({
        title: "Inserte los datos",
        text: "Necesita insertar los datos pedidos en el formulario",
        icon: "info"
      });
    } else {
      this.router.navigate(['/categoria', this.TipoReceta]);
      this.vaciarDato();
    }
  }

  vaciarDato(): void {
    this.TipoReceta = '';
  }
}

