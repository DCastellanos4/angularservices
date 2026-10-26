import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServicePersonas } from '../../services/service.personas';
import { Persona } from '../../models/persona';
@Component({
  selector: 'app-persona-service',
  standalone: false,
  styleUrl: './persona-service.css',
  templateUrl: './persona-service.html',
})
export class PersonaService implements OnInit {
  public personas!: Array<Persona>
  constructor(private _service: ServicePersonas, private _cdr: ChangeDetectorRef) {
  }
  ngOnInit(): void {
    //Si devolvemos un observable con la peticion nos suscribimos a su promesa
    this._service.getPersonas().subscribe((response) => {
      console.log(response);
      this.personas = response;
      this._cdr.detectChanges()
    });
  }
}
