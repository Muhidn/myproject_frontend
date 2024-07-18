import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

interface LoginResponse {
  userID: number;
  password:string;
  email: string;
  role: string;
}

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

  getUserByID(userID: number):Observable<any>{
    return this.http.get(BASIC_URL + "/api/user/" + userID);
  }

  updateUser(userID: number, user:any):Observable<any>{
    return this.http.put(BASIC_URL + "/api/user/" + userID, user);
  }

  deleteUser(userID: number):Observable<any>{
    return this.http.delete(BASIC_URL + "/api/user/" + userID);
  }

 

  

}
