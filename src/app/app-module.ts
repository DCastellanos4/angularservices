import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ServiceComics } from './services/service.comics';
import { ComicService } from './components/comic-service/comic-service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { ServicePersonas } from './services/service.personas';
import { PersonaService } from './components/persona-service/persona-service';

@NgModule({
  declarations: [App, ComicService, PersonaService],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    ServiceComics,
    provideHttpClient(),
    ServicePersonas,
  ],
  bootstrap: [App],
})
export class AppModule {}
