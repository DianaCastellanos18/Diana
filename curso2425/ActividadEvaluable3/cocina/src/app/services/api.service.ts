import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecetaAPI } from '../model/modeloApi';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}

   // A través de los siguientes metodos se obtiene la lista de recetas, 
   // luego a traves del id se accede a los detalles 
   //despues a través de la categoria se accede solo a las recetas de esa categoria
  obtenerReceta(): Observable<{ meals: RecetaAPI[] }> {
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    return this.http.get<{ meals: RecetaAPI[] }>(url);
  }

 
  obtenerDetalle(id: string): Observable<{ meals: RecetaAPI[] }> {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    return this.http.get<{ meals: RecetaAPI[] }>(url);
  }

  obtenerPorCategoria(categoria: string): Observable<{ meals: RecetaAPI[] }> {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;
    return this.http.get<{ meals: RecetaAPI[] }>(url);
  }

}
