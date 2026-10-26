import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ServicePersonas {
    //Debemos recibir el objeto de la clase HTTPCLIENT en el constructor
    constructor(private _http: HttpClient) { }
    //Tenemos 2 opciones para trabajar
    //devolver la peticion o devolver una promesa
    getPersonas(): Observable<any> {
        let urlApi = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas"
        return this._http.get(urlApi);
    }
}