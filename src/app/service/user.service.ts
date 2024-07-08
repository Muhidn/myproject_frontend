import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

const BASIC_URL = ["http://localhost:8080"]

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  saveUser(user:any): Observable<any>{
    return this.http.post(BASIC_URL+"/api/user/insert",user);
  }
  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(BASIC_URL+"/api/user/all");
  }

}
