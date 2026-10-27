import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ServiceComics } from './services/service.comics';
import { ComicService } from './components/comic-service/comic-service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { ServicePersonas } from './services/service.personas';
import { PersonaService } from './components/persona-service/persona-service';
import { MenuComponent } from './components/menu-component/menu-component';
import { CochesComponent } from './components/coches-component/coches-component';
import { ServiceCoches } from './services/service.coches';
import { PlantillafuncionSimpleComponent } from './components/plantillafuncion-simple-component/plantillafuncion-simple-component';
import { ServicePlantilla } from './services/service.plantilla';
import { FormsModule } from '@angular/forms';
import { PlantillafuncionSimpleMultiple } from './components/plantillafuncion-simple-multiple/plantillafuncion-simple-multiple';

@NgModule({
  declarations: [
    App,
    ComicService,
    PersonaService,
    MenuComponent,
    CochesComponent,
    PlantillafuncionSimpleComponent,
    PlantillafuncionSimpleMultiple,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    ServiceComics,
    provideHttpClient(),
    ServicePersonas,
    ServiceCoches,
    ServicePlantilla,
  ],
  bootstrap: [App],
})
export class AppModule {}
