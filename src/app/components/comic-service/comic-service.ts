import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ServiceComics } from '../../services/service.comics';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comic-service',
  standalone: false,
  styleUrl: './comic-service.css',
  templateUrl: './comic-service.html',
})
export class ComicService implements OnInit {
  public arrayComics: Array<Comic>;
  constructor(private _cdr: ChangeDetectorRef, private _service: ServiceComics) {
    this.arrayComics = [];
  }
  async ngOnInit(): Promise<void> {
    this.arrayComics = await this._service.getComicsAsync();
    this._cdr.detectChanges();
  };
}
