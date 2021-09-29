import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../../models/post';
import {  tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl=environment.baseUrl;

  private _resfresh$=new Subject<void>()

  constructor(private http:HttpClient) {

   }

   get refresh$(){
     return this._resfresh$;
   }


   getAllPost(){
     return this.http.get(`${this.baseUrl}/posts`);
   }

   createPost(data:Post){
     
    return this.http.post(`${this.baseUrl}/posts`, data).pipe(
      tap(()=>{
        this._resfresh$.next();
      })
    )

   }

}
