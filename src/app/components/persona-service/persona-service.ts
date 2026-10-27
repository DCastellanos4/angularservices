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
  async ngOnInit(): Promise<void> {
    try {
      this.personas = await this._service.getPersonasAsync();
      this._cdr.detectChanges();
    } catch (error) {
      console.error('Error fetching personas:', error);
    }

    /*this._ps.getPersonasPromise().then((personas) => {
      this.arrayPersonas = personas;
      this._cdr.detectChanges();
    }).catch((error) => {
      console.error('Error fetching personas:', error);
    });*/

    /*this._ps.getPersonas().subscribe({
      next: (personas) => {
        this.arrayPersonas = personas;
        this._cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error fetching personas:', error);
      }
    });*/
  }
}
