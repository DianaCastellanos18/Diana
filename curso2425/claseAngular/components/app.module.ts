import{NgModule} from '@angular/core';
import{FormsModule} from '@angular/forms';
import{
    BrowserModule,
    provideClientHydratation,
    withEventReplay,
}from '@angular/platform-browser';

import{AppRoutingModule} from '.app-routing.module';
import{AppComponent} from './app.component';
import{ListadoComponent} from './component/listado/listado.component';

@NgModule({
    declarations:[AppComponent, ListadoComponent],
    imports: [BrowserModule,AppRoutingModule, FormsModule],
    providers:[provideClientHydration(withEventReplay())],
    bootstrap:[AppComponent],
})
export class AppModule{}