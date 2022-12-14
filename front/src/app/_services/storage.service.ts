import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getToken(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    const token = JSON.parse(`${user}`).token;

    return token;
  }
  
  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    const token = JSON.parse(`${user}`).token;

    if (token) {
      return jwt_decode(token);
    }

    return {};
  }


  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }
}