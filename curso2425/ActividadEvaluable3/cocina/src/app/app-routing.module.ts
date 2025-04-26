import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ListaRecetaComponent } from './components/lista-receta/lista-receta.component';
import { DetallesComponent } from './components/detalles/detalles.component';

const routes: Routes = [
  {path:'',redirectTo:'lista-receta',pathMatch:"full"},
  {path:"lista-receta",component:ListaRecetaComponent},
  {path:"categoria/:tipo",component:CategoriaComponent},
  {path:"detalles/:id",component:DetallesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
