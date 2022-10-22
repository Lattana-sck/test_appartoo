import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const AUTH_API = 'http://localhost:5000/api/user/';
const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'authorization': 'Bearer ' + localStorage.getItem('token')
   })
};

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private http: HttpClient) { }
  
  public getAllFriends(): any {
    console.log(localStorage.getItem('auth-user'));
    return this.http.post(
      AUTH_API + 'getAllUsers',{},httpOptions
    )
  }

}
