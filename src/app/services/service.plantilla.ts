import { Injectable } from "@angular/core";
import { Plantilla } from "../models/plantilla";
import { environment } from "../../environments/environment.development";
import { async, first, firstValueFrom, from } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ServicePlantilla {
    constructor(private _http: HttpClient) {

    }
    async getFuncionesPlantilla(): Promise<string[]> {
        let url = environment.urlApiPlantilla;
        let request = "api/Plantilla/Funciones"
        return firstValueFrom(this._http.get<string[]>(url + request));
    }
    async getPlantilla(p: string): Promise<Plantilla[]> {
        let url = environment.urlApiPlantilla
        let request = "api/Plantilla/PlantillaFuncion/" + p;
        return firstValueFrom(this._http.get<Plantilla[]>(url + request))
    }
    async getPlantillaMultiple(p: Array<string>): Promise<Plantilla[]> {
        let content = "";
        for (const f of p) {
            content += "funcion=" + f + "&";
        }
        content = content.substring(0, content.length - 1);
        let url = environment.urlApiPlantilla;
        let request = "api/plantilla/plantillafunciones?" + content
        return firstValueFrom(this._http.get<Plantilla[]>(url + request))
    }

}