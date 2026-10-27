import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { first, firstValueFrom, Observable } from "rxjs";
import { Persona } from "../models/persona";
import { Global } from "../global";
import { environment } from "../../environments/environment.development";
@Injectable()
export class ServicePersonas {
    //Debemos recibir el objeto de la clase HTTPCLIENT en el constructor
    constructor(private _http: HttpClient) { }
    //Tenemos 2 opciones para trabajar
    //devolver la peticion o devolver una promesa
    getPersonas(): Observable<any> {
        let urlApi = environment.urlApiPersonas
        return this._http.get(urlApi);
    }
    getPersonasPromise(): Promise<any> {
        let urlApi = environment.urlApiPersonas
        let promise = new Promise((resolve) => {
            //Aqui leemos la peticion extrayendo los datos a la vez
            this._http.get(urlApi).subscribe((response) => {
                resolve(response);
            })
        })
        return promise;
    }
    async getPersonasAsync(): Promise<Persona[]> {
        let urlApi = environment.urlApiPersonas
        return firstValueFrom(this._http.get<Persona[]>(urlApi));
    }
}