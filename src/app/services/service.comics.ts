import { ChangeDetectorRef, Injectable } from "@angular/core";
import { Comic } from "../models/comic";
@Injectable()
export class ServiceComics {
    getComics(): Promise<Array<Comic>> {
        let path = "./assets/comics.json"
        return fetch(path).then(response => response.json()).then((data: any[]) => {
            let arrayComics = [];
            for (const c of data) {
                let comic: Comic = new Comic(c.nombre, c.descripcion, c.imagen);
                arrayComics.push(comic)
            }
            console.log(arrayComics);
            return arrayComics;
        })
    }
    async getComicsAsync(): Promise<Array<Comic>> {
        let path = "./assets/comics.json";
        let response = await fetch(path);
        let data = await response.json();
        let arrayComics: Array<Comic> = [];
        for (const c of data) {
            let comic: Comic = new Comic(c.nombre, c.descripcion, c.imagen);
            arrayComics.push(comic)
        }
        console.log(arrayComics);
        return arrayComics;
    }
}
