import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../models/users.models';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users!: Users[];
  token!: string;

  constructor(private http: HttpClient, private storageService: StorageService) { }

  getAllusers(): any{
    this.token = this.storageService.getToken();
    return this.http.get<any>('http://localhost:5000/api/user/getAllUsers', {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'authorization': `Bearer ${this.token}`
      }),
      
    })
  }

  getUsernameById(id: string): any {
    return this.http.get<any>(`http://localhost:5000/api/user/getUsernameById/${id}`);
  }
  
  updateUser(id: string, username: string, email: string, password: string, role: string): Observable<any> {
    this.token = this.storageService.getToken();
    return this.http.put<any>(`http://localhost:5000/api/user/${id}`,
    {
      username,
      email,
      password,
      role
    },
    {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'authorization': `Bearer ${this.token}`
      }),
    }
    );
  }

  addFriends(id: string): Observable<any> {
    this.token = this.storageService.getToken();
    return this.http.post<any>(`http://localhost:5000/api/user/addFriend/${id}`, {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'authorization': `Bearer ${this.token}`
      }),
    });
  }

  removeFriends(id: string): Observable<any> {
    this.token = this.storageService.getToken();
    return this.http.post<any>(`http://localhost:5000/api/user/removeFriend/${id}`, {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'authorization': `Bearer ${this.token}`
      }),
    });
  }

}
