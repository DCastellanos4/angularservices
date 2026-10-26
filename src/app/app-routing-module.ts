import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicService } from './components/comic-service/comic-service';
import { PersonaService } from './components/persona-service/persona-service';

const routes: Routes = [
  { path: "comics", component: ComicService },
  { path: "personas", component: PersonaService }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
