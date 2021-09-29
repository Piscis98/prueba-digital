
import { environment } from "../../../../environments/environment";

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private baseUrl= environment.baseUrl;

  constructor(private http:HttpClient) { }


  getAllAlbums(){
    return this.http.get(`${this.baseUrl}/albums`);
  }



}
