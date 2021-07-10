import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ServerService{
    constructor(private http: HttpClient){}

    storeServers(servers: any[]){
        return this.http.post('https://udemy-ng-http-6f855-default-rtdb.europe-west1.firebasedatabase.app/data.json', servers);
    }
}