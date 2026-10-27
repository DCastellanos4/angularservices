import { Injectable } from "@angular/core";
import { Plantilla } from "../models/plantilla";
import { environment } from "../../environments/environment.development";
import { async, firstValueFrom } from "rxjs";
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
}