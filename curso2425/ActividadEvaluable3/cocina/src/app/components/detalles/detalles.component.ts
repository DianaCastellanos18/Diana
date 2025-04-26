import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { RecetaAPI } from '../../model/modeloApi';

@Component({
  selector: 'app-detalles',
  standalone: false,
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {

  id: string | null = null;
  recetaDetalle?: RecetaAPI;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.id = this.route.snapshot.paramMap.get('id');  //se obtiene el valor del id en la URL

  //comprobamos si id existe 
    if (this.id) {
      this.apiService.obtenerDetalle(this.id).subscribe((data) => { //se llama al servicio para poder buscar las recetas por su id
        if (data.meals.length > 0) {
          this.recetaDetalle = data.meals[0];
          console.log("Receta cargada:", this.recetaDetalle); //se imprimen a traves del log las recetas que llegan y las que no se indica que no se encuentran
        } else {
          console.log("No se encontró ninguna receta con ese ID.");
        }
      });
    }
}}
