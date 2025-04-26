import { Injectable } from '@angular/core';
import { Receta } from '../model/modelos';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private receta:Receta[]=[];

  public GuardarElemento(receta:Receta){
    this.receta.push(receta);
  }

  public ObtenerReceta():Receta[]{
    return this.receta;
  }
}
