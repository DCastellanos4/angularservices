import { ChangeDetectorRef, Component, OnInit, ElementRef } from '@angular/core';
import { ServicePlantilla } from '../../services/service.plantilla';
import { ViewChild } from '@angular/core';
import { Plantilla } from '../../models/plantilla';
@Component({
  selector: 'app-plantillafuncion-simple-component',
  standalone: false,
  styleUrl: './plantillafuncion-simple-component.css',
  templateUrl: './plantillafuncion-simple-component.html',
})
export class PlantillafuncionSimpleComponent implements OnInit {
  @ViewChild('funcion') funcion!: ElementRef;
  public funciones!: Array<string>
  public plantilla!: Array<Plantilla>
  constructor(private _cdr: ChangeDetectorRef, private _sp: ServicePlantilla) {
  }
  async ngOnInit(): Promise<void> {
    this.funciones = await this._sp.getFuncionesPlantilla();
    this._cdr.detectChanges()
  }
  async mostrarPlantilla(): Promise<void> {
    let f = this.funcion.nativeElement.value;
    this.plantilla = await this._sp.getPlantilla(f);
    this._cdr.detectChanges()
  }
}
