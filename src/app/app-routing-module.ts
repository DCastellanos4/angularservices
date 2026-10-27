import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicService } from './components/comic-service/comic-service';
import { PersonaService } from './components/persona-service/persona-service';
import { CochesComponent } from './components/coches-component/coches-component';
import { PlantillafuncionSimpleComponent } from './components/plantillafuncion-simple-component/plantillafuncion-simple-component';

const routes: Routes = [
  { path: "", component: ComicService },
  { path: "personas", component: PersonaService },
  { path: "coches", component: CochesComponent },
  { path: "plantilla", component: PlantillafuncionSimpleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
