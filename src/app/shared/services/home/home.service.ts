import { Photos } from './../../models/home';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private baseUrl=environment.baseUrl;

  constructor(private http:HttpClient) { }


  getPhotos(){
    return this.http.get(`${this.baseUrl}/photos`);
  }

}
