import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'console';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'DIANA';
  asignatura='desarrollo';
  seleccion=4;

  constructor(private router: Router){}

  navegar() {
    console.log('Procedo a navegar');
    this.router.navigate(['listado',3])
    }
}
