import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { deleteuserinterface } from "./deleteuserinterface"

@Injectable({ providedIn: 'root' })

export class deleteuserservice {
    constructor(private http:HttpClient) { }
    deleteUser(user_ID:number):Observable<deleteuserinterface[]>{
    return this.http.delete<deleteuserinterface[]>("http://localhost:8080/user/"+user_ID);
    }
}