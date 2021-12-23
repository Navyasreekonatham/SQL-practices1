import {ErrorHandler, Injectable} from '@angular/core';

import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import { Iuser } from './Iuser';

import { Observable } from 'rxjs';



@Injectable({
providedIn: 'root'

})
export class userservice{
private url:string = "http://localhost:8080/listuser";

 constructor(private http:HttpClient){}

   getusers(): Observable<Iuser[]>{

  return this.http.get<Iuser[]>(this.url);

 }
}