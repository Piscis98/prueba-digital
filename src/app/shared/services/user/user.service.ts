import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl=environment.baseUrl;

  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get(`${this.baseUrl}/users`);
  }

}
