import { Component} from '@angular/core';
import { Receta } from '../../model/modelos';
import { RecetaAPI } from '../../model/modeloApi';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent  {
receta:Receta[]=[];
recetaURL: RecetaAPI[] = [];
TipoReceta: string = '';    
DificultadReceta: string = '';  
RecetaFiltrada: RecetaAPI[] = [];

constructor(private route: ActivatedRoute, private apiService: ApiService) {
  this.route.paramMap.subscribe(params => {
    const tipo = params.get('tipo'); //se obtiene el valos de tipo en la URL

    //comprobamos si tipo existe
    if (tipo) {
      this.TipoReceta = tipo;

      //se llama al servicio para poder buscar las recetas por su tipo
      this.apiService.obtenerPorCategoria(this.TipoReceta).subscribe((data) => {
        this.recetaURL = data.meals;
        console.log('Recetas cargadas:', this.recetaURL); //se imprimen a traves del log las recetas que llegan 
      });
    }
  });
}}
