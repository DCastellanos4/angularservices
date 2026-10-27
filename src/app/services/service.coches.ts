import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.development";
import { Coche } from "../models/coche";
import { first, firstValueFrom } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class ServiceCoches {
    constructor(private _http: HttpClient) {

    }
    async getCoches(): Promise<Coche[]> {
        let url = environment.urlApiCoches;
        let request = "webresources/coches";
        return firstValueFrom(this._http.get<Coche[]>(url + request));
    }
}