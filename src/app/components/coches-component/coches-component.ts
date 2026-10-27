import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceCoches } from '../../services/service.coches';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-coches-component',
  standalone: false,
  styleUrl: './coches-component.css',
  templateUrl: './coches-component.html',
})
export class CochesComponent implements OnInit {
  public coches!: Array<Coche>;
  constructor(private _service: ServiceCoches, private _cdr: ChangeDetectorRef) {
  }
  async ngOnInit(): Promise<void> {
    this.coches = await this._service.getCoches();
    this._cdr.detectChanges()
  }
}
