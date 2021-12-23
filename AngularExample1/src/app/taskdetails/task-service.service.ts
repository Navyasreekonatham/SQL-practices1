import {ErrorHandler, Injectable} from '@angular/core';

import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import { Itask } from './Itask';

import { Observable } from 'rxjs';



@Injectable({
providedIn: 'root'

})
export class TaskServiceService{
private url:string = "http://localhost:8080/list";

 constructor(private http:HttpClient){}

   getTasks(): Observable<Itask[]>{

  return this.http.get<Itask[]>(this.url);

 }
}