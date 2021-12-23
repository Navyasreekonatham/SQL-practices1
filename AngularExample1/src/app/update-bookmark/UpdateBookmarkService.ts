import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { UpdateBookmarkInterface } from "./UpdateBookmarkInterface"

@Injectable({ providedIn: 'root' })

export class UpdateBookmarkService {
    constructor(private http:HttpClient) { }
    updateBookmark(task_ID:number,isBookmarked:string):Observable<UpdateBookmarkInterface[]>{
    return this.http.get<UpdateBookmarkInterface[]>("http://localhost:8080/bookmark/"+task_ID+"/IsBookmarked/"+isBookmarked);
    }
}