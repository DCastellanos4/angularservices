import { ChangeDetectorRef, Component, OnInit, ElementRef } from '@angular/core';
import { ServicePlantilla } from '../../services/service.plantilla';
import { ViewChild } from '@angular/core';
import { Plantilla } from '../../models/plantilla';

@Component({
  selector: 'app-plantillafuncion-simple-multiple',
  standalone: false,
  styleUrl: './plantillafuncion-simple-multiple.css',
  templateUrl: './plantillafuncion-simple-multiple.html',
})
export class PlantillafuncionSimpleMultiple {
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
    let aux = [];
    //El control html select tiene una propiedad que es options para recorrer
    for (let opcion of this.funcion.nativeElement.options) {
      if (opcion.selected == true) {
        aux.push(opcion.value)
      }
    }
    this.plantilla = await this._sp.getPlantillaMultiple(aux);
    this._cdr.detectChanges()
  }
}
