import { Component } from '@angular/core';
import { Conocimiento } from '../../model/modelos';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado',
  standalone: false,
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
nombre='Diana';
nombreConocimiento='';
nivelConocimiento='';
mostrar=false;
conocimiento: Conocimiento[]=[];
url='https://victorroblesweb.es/wp-content/uploads/2017/04/angular4.png';

guardarElemento(){

  if (this.conocimiento.length==0 && this.nivelConocimiento.length==0) {
    //alert("Faltan datos");
    Swal.fire({
      title: "Fallo",
      text: "Faltan datos por rellenar",
      icon: "warning"
    });
  }else{
    
  let conocimiento:Conocimiento={nombre:this.nombreConocimiento, nivel:this.nivelConocimiento};
  this.conocimiento.push(conocimiento);
  this.vaciarDato();
  }

}

mostrarConocimientos() {
  this.mostrar=!this.mostrar;
  }

vaciarDato(){
  this.nombreConocimiento='';
  this.nivelConocimiento='';
}
}
