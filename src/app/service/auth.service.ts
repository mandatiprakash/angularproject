import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: User | undefined;
  private isLoggedIn: boolean = true;
  constructor(private httpClient: HttpClient) {
    this.loadAuthUser();

  }

  login() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  authenticate(): boolean {
    return this.isLoggedIn;
  }

  validateUser(loginUser: Login) {
    let data = JSON.stringify(loginUser);
    let myHeader = new HttpHeaders({ "Content-Type": "application/json" });
    return this.httpClient.post<User>('https://localhost:7241/api/Auth/authenticate', data, { headers: myHeader });
  }

  setAuthUser(user: User) {
    localStorage["auth"] = JSON.stringify(user);
    this.currentUser = user;

  }

  loadAuthUser() {
    if (localStorage["auth"] != null) {
      this.currentUser = JSON.parse(localStorage["auth"]);
    }
    else {
      this.currentUser = undefined;
    }
  }

  removeAuthUser(){
    this.currentUser = undefined;
    localStorage.removeItem("auth");
    
  }





}
