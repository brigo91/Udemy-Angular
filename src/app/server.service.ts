import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ServerService{
    constructor(private http: HttpClient){}

    storeServers(servers: any[]){
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('https://udemy-ng-http-6f855-default-rtdb.europe-west1.firebasedatabase.app/data.json',
        servers,
        {headers: headers});
    }
}